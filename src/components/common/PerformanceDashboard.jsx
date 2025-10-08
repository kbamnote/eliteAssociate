import React, { useState, useEffect, useRef } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import './PerformanceDashboard.css';

const PerformanceDashboard = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null
  });
  
  const [resourceMetrics, setResourceMetrics] = useState({
    totalResources: 0,
    totalSize: 0,
    loadTime: 0,
    domContentLoaded: 0,
    firstPaint: 0
  });

  const [networkInfo, setNetworkInfo] = useState({
    effectiveType: 'unknown',
    downlink: 0,
    rtt: 0
  });

  const [recommendations, setRecommendations] = useState([]);
  const metricsRef = useRef({});

  useEffect(() => {
    if (!isVisible) return;

    // Collect Web Vitals
    const handleMetric = (metric) => {
      metricsRef.current[metric.name] = metric;
      setMetrics(prev => ({
        ...prev,
        [metric.name.toLowerCase()]: metric
      }));
      generateRecommendations();
    };

    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Collect resource metrics
    collectResourceMetrics();
    
    // Collect network information
    collectNetworkInfo();

    // Set up performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            setResourceMetrics(prev => ({
              ...prev,
              loadTime: entry.loadEventEnd - entry.loadEventStart,
              domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart
            }));
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['navigation', 'resource'] });
      } catch (e) {
        console.warn('Performance Observer not supported for some entry types');
      }

      return () => observer.disconnect();
    }
  }, [isVisible]);

  const collectResourceMetrics = () => {
    if (!performance.getEntriesByType) return;

    const resources = performance.getEntriesByType('resource');
    const totalSize = resources.reduce((sum, resource) => {
      return sum + (resource.transferSize || 0);
    }, 0);

    const paintEntries = performance.getEntriesByType('paint');
    const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');

    setResourceMetrics(prev => ({
      ...prev,
      totalResources: resources.length,
      totalSize: totalSize,
      firstPaint: firstPaint ? firstPaint.startTime : 0
    }));
  };

  const collectNetworkInfo = () => {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      setNetworkInfo({
        effectiveType: connection.effectiveType || 'unknown',
        downlink: connection.downlink || 0,
        rtt: connection.rtt || 0
      });
    }
  };

  const generateRecommendations = () => {
    const recs = [];
    const currentMetrics = metricsRef.current;

    if (currentMetrics.LCP && currentMetrics.LCP.value > 2500) {
      recs.push({
        type: 'warning',
        metric: 'LCP',
        message: 'Largest Contentful Paint is slow. Consider optimizing images and reducing server response times.',
        priority: 'high'
      });
    }

    if (currentMetrics.FCP && currentMetrics.FCP.value > 1800) {
      recs.push({
        type: 'warning',
        metric: 'FCP',
        message: 'First Contentful Paint is slow. Consider reducing render-blocking resources.',
        priority: 'medium'
      });
    }

    if (currentMetrics.CLS && currentMetrics.CLS.value > 0.1) {
      recs.push({
        type: 'error',
        metric: 'CLS',
        message: 'Cumulative Layout Shift is high. Ensure images and ads have defined dimensions.',
        priority: 'high'
      });
    }

    if (currentMetrics.INP && currentMetrics.INP.value > 200) {
      recs.push({
        type: 'warning',
        metric: 'INP',
        message: 'Interaction to Next Paint is slow. Consider optimizing JavaScript execution.',
        priority: 'medium'
      });
    }

    if (resourceMetrics.totalSize > 2000000) { // 2MB
      recs.push({
        type: 'info',
        metric: 'Bundle Size',
        message: 'Total resource size is large. Consider code splitting and lazy loading.',
        priority: 'medium'
      });
    }

    setRecommendations(recs);
  };

  const getMetricGrade = (metric, value) => {
    const thresholds = {
      lcp: { good: 2500, poor: 4000 },
      fcp: { good: 1800, poor: 3000 },
      cls: { good: 0.1, poor: 0.25 },
      inp: { good: 200, poor: 500 },
      ttfb: { good: 800, poor: 1800 }
    };

    if (!value || !thresholds[metric]) return 'unknown';
    
    const threshold = thresholds[metric];
    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  };

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatTime = (time) => {
    if (time < 1000) return `${Math.round(time)}ms`;
    return `${(time / 1000).toFixed(2)}s`;
  };

  if (!isVisible) return null;

  return (
    <div className="performance-dashboard">
      <div className="dashboard-header">
        <h2>Performance Dashboard</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <div className="dashboard-content">
        {/* Web Vitals Section */}
        <div className="metrics-section">
          <h3>Core Web Vitals</h3>
          <div className="metrics-grid">
            {Object.entries(metrics).map(([key, metric]) => (
              metric && (
                <div key={key} className={`metric-card ${getMetricGrade(key, metric.value)}`}>
                  <div className="metric-name">{metric.name}</div>
                  <div className="metric-value">
                    {key === 'cls' ? metric.value.toFixed(3) : formatTime(metric.value)}
                  </div>
                  <div className="metric-grade">{getMetricGrade(key, metric.value)}</div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Resource Metrics Section */}
        <div className="metrics-section">
          <h3>Resource Metrics</h3>
          <div className="resource-grid">
            <div className="resource-item">
              <span className="resource-label">Total Resources:</span>
              <span className="resource-value">{resourceMetrics.totalResources}</span>
            </div>
            <div className="resource-item">
              <span className="resource-label">Total Size:</span>
              <span className="resource-value">{formatBytes(resourceMetrics.totalSize)}</span>
            </div>
            <div className="resource-item">
              <span className="resource-label">Load Time:</span>
              <span className="resource-value">{formatTime(resourceMetrics.loadTime)}</span>
            </div>
            <div className="resource-item">
              <span className="resource-label">DOM Content Loaded:</span>
              <span className="resource-value">{formatTime(resourceMetrics.domContentLoaded)}</span>
            </div>
            <div className="resource-item">
              <span className="resource-label">First Paint:</span>
              <span className="resource-value">{formatTime(resourceMetrics.firstPaint)}</span>
            </div>
          </div>
        </div>

        {/* Network Information */}
        <div className="metrics-section">
          <h3>Network Information</h3>
          <div className="network-info">
            <div className="network-item">
              <span className="network-label">Connection Type:</span>
              <span className="network-value">{networkInfo.effectiveType}</span>
            </div>
            <div className="network-item">
              <span className="network-label">Downlink:</span>
              <span className="network-value">{networkInfo.downlink} Mbps</span>
            </div>
            <div className="network-item">
              <span className="network-label">RTT:</span>
              <span className="network-value">{networkInfo.rtt}ms</span>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        {recommendations.length > 0 && (
          <div className="metrics-section">
            <h3>Recommendations</h3>
            <div className="recommendations">
              {recommendations.map((rec, index) => (
                <div key={index} className={`recommendation ${rec.type} ${rec.priority}`}>
                  <div className="rec-header">
                    <span className="rec-metric">{rec.metric}</span>
                    <span className={`rec-priority ${rec.priority}`}>{rec.priority}</span>
                  </div>
                  <div className="rec-message">{rec.message}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Performance Score */}
        <div className="metrics-section">
          <h3>Overall Performance Score</h3>
          <div className="performance-score">
            <div className="score-circle">
              <span className="score-value">
                {Math.round(
                  Object.values(metrics).filter(m => m).length > 0
                    ? Object.values(metrics)
                        .filter(m => m)
                        .reduce((acc, metric) => {
                          const grade = getMetricGrade(metric.name.toLowerCase(), metric.value);
                          return acc + (grade === 'good' ? 100 : grade === 'needs-improvement' ? 70 : 40);
                        }, 0) / Object.values(metrics).filter(m => m).length
                    : 0
                )}
              </span>
            </div>
            <div className="score-label">Performance Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;