import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  Image, 
  Wifi, 
  Monitor, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  X
} from 'lucide-react';

const PerformanceMonitor = ({ isVisible, onClose }) => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    fcp: 0, // First Contentful Paint
    lcp: 0, // Largest Contentful Paint
    fid: 0, // First Input Delay
    cls: 0, // Cumulative Layout Shift
    ttfb: 0, // Time to First Byte
    domContentLoaded: 0,
    resourceCount: 0,
    imageCount: 0,
    jsSize: 0,
    cssSize: 0,
    totalSize: 0
  });

  const [performanceGrade, setPerformanceGrade] = useState('A');
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (isVisible) {
      collectPerformanceMetrics();
    }
  }, [isVisible]);

  const collectPerformanceMetrics = () => {
    // Collect Web Vitals and other performance metrics
    const navigation = performance.getEntriesByType('navigation')[0];
    const paintEntries = performance.getEntriesByType('paint');
    const resources = performance.getEntriesByType('resource');

    // Calculate metrics
    const loadTime = navigation ? navigation.loadEventEnd - navigation.fetchStart : 0;
    const domContentLoaded = navigation ? navigation.domContentLoadedEventEnd - navigation.fetchStart : 0;
    const ttfb = navigation ? navigation.responseStart - navigation.fetchStart : 0;

    // First Contentful Paint
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    const fcp = fcpEntry ? fcpEntry.startTime : 0;

    // Resource analysis
    const images = resources.filter(r => r.initiatorType === 'img');
    const scripts = resources.filter(r => r.initiatorType === 'script');
    const stylesheets = resources.filter(r => r.initiatorType === 'link');

    const jsSize = scripts.reduce((total, script) => total + (script.transferSize || 0), 0);
    const cssSize = stylesheets.reduce((total, css) => total + (css.transferSize || 0), 0);
    const totalSize = resources.reduce((total, resource) => total + (resource.transferSize || 0), 0);

    const newMetrics = {
      loadTime: Math.round(loadTime),
      fcp: Math.round(fcp),
      lcp: 0, // Will be updated by observer
      fid: 0, // Will be updated by observer
      cls: 0, // Will be updated by observer
      ttfb: Math.round(ttfb),
      domContentLoaded: Math.round(domContentLoaded),
      resourceCount: resources.length,
      imageCount: images.length,
      jsSize: Math.round(jsSize / 1024), // Convert to KB
      cssSize: Math.round(cssSize / 1024), // Convert to KB
      totalSize: Math.round(totalSize / 1024) // Convert to KB
    };

    setMetrics(newMetrics);
    calculatePerformanceGrade(newMetrics);
    generateRecommendations(newMetrics);

    // Set up Web Vitals observers
    setupWebVitalsObservers();
  };

  const setupWebVitalsObservers = () => {
    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: Math.round(lastEntry.startTime) }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach(entry => {
            setMetrics(prev => ({ ...prev, fid: Math.round(entry.processingStart - entry.startTime) }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((entryList) => {
          let clsValue = 0;
          entryList.getEntries().forEach(entry => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          setMetrics(prev => ({ ...prev, cls: Math.round(clsValue * 1000) / 1000 }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('Performance Observer not fully supported:', error);
      }
    }
  };

  const calculatePerformanceGrade = (metrics) => {
    let score = 100;

    // Deduct points based on metrics
    if (metrics.loadTime > 3000) score -= 20;
    else if (metrics.loadTime > 2000) score -= 10;

    if (metrics.fcp > 2500) score -= 15;
    else if (metrics.fcp > 1800) score -= 8;

    if (metrics.ttfb > 800) score -= 15;
    else if (metrics.ttfb > 600) score -= 8;

    if (metrics.totalSize > 2000) score -= 10;
    else if (metrics.totalSize > 1000) score -= 5;

    // Determine grade
    if (score >= 90) setPerformanceGrade('A');
    else if (score >= 80) setPerformanceGrade('B');
    else if (score >= 70) setPerformanceGrade('C');
    else if (score >= 60) setPerformanceGrade('D');
    else setPerformanceGrade('F');
  };

  const generateRecommendations = (metrics) => {
    const recs = [];

    if (metrics.loadTime > 3000) {
      recs.push({
        type: 'warning',
        title: 'Slow Page Load',
        description: 'Page load time exceeds 3 seconds. Consider optimizing images and reducing bundle size.'
      });
    }

    if (metrics.fcp > 2500) {
      recs.push({
        type: 'warning',
        title: 'Slow First Contentful Paint',
        description: 'First Contentful Paint is slow. Optimize critical rendering path and reduce render-blocking resources.'
      });
    }

    if (metrics.totalSize > 2000) {
      recs.push({
        type: 'info',
        title: 'Large Bundle Size',
        description: 'Total resource size is large. Consider code splitting and lazy loading.'
      });
    }

    if (metrics.imageCount > 20) {
      recs.push({
        type: 'info',
        title: 'Many Images',
        description: 'Consider implementing image lazy loading and using modern formats like WebP.'
      });
    }

    if (recs.length === 0) {
      recs.push({
        type: 'success',
        title: 'Great Performance!',
        description: 'Your application is performing well across all metrics.'
      });
    }

    setRecommendations(recs);
  };

  const getMetricStatus = (value, thresholds) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.needs_improvement) return 'needs_improvement';
    return 'poor';
  };

  const MetricCard = ({ title, value, unit, icon: Icon, thresholds, description }) => {
    const status = thresholds ? getMetricStatus(value, thresholds) : 'good';
    const statusColors = {
      good: 'text-green-600 bg-green-50 border-green-200',
      needs_improvement: 'text-yellow-600 bg-yellow-50 border-yellow-200',
      poor: 'text-red-600 bg-red-50 border-red-200'
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-4 rounded-lg border-2 ${statusColors[status]}`}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Icon className="w-5 h-5" />
            <h3 className="font-semibold text-sm">{title}</h3>
          </div>
          <span className="text-2xl font-bold">
            {value}{unit}
          </span>
        </div>
        <p className="text-xs opacity-75">{description}</p>
      </motion.div>
    );
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Performance Monitor</h2>
                <p className="text-gray-600">Real-time application performance metrics</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className={`text-3xl font-bold ${
                  performanceGrade === 'A' ? 'text-green-600' :
                  performanceGrade === 'B' ? 'text-blue-600' :
                  performanceGrade === 'C' ? 'text-yellow-600' :
                  performanceGrade === 'D' ? 'text-orange-600' : 'text-red-600'
                }`}>
                  {performanceGrade}
                </div>
                <div className="text-sm text-gray-600">Grade</div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <MetricCard
                title="Load Time"
                value={metrics.loadTime}
                unit="ms"
                icon={Clock}
                thresholds={{ good: 2000, needs_improvement: 3000 }}
                description="Total page load time"
              />
              <MetricCard
                title="First Contentful Paint"
                value={metrics.fcp}
                unit="ms"
                icon={Zap}
                thresholds={{ good: 1800, needs_improvement: 3000 }}
                description="Time to first content render"
              />
              <MetricCard
                title="Time to First Byte"
                value={metrics.ttfb}
                unit="ms"
                icon={Wifi}
                thresholds={{ good: 600, needs_improvement: 1000 }}
                description="Server response time"
              />
              <MetricCard
                title="DOM Content Loaded"
                value={metrics.domContentLoaded}
                unit="ms"
                icon={Monitor}
                description="DOM parsing completion time"
              />
              <MetricCard
                title="Total Resources"
                value={metrics.resourceCount}
                unit=""
                icon={TrendingUp}
                description="Number of loaded resources"
              />
              <MetricCard
                title="Images Loaded"
                value={metrics.imageCount}
                unit=""
                icon={Image}
                description="Number of image resources"
              />
              <MetricCard
                title="JavaScript Size"
                value={metrics.jsSize}
                unit="KB"
                icon={Activity}
                description="Total JS bundle size"
              />
              <MetricCard
                title="CSS Size"
                value={metrics.cssSize}
                unit="KB"
                icon={Activity}
                description="Total CSS bundle size"
              />
              <MetricCard
                title="Total Size"
                value={metrics.totalSize}
                unit="KB"
                icon={Activity}
                thresholds={{ good: 1000, needs_improvement: 2000 }}
                description="Total resource size"
              />
            </div>

            {/* Web Vitals */}
            {(metrics.lcp > 0 || metrics.fid > 0 || metrics.cls > 0) && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Core Web Vitals
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {metrics.lcp > 0 && (
                    <MetricCard
                      title="Largest Contentful Paint"
                      value={metrics.lcp}
                      unit="ms"
                      icon={Monitor}
                      thresholds={{ good: 2500, needs_improvement: 4000 }}
                      description="Largest element render time"
                    />
                  )}
                  {metrics.fid > 0 && (
                    <MetricCard
                      title="First Input Delay"
                      value={metrics.fid}
                      unit="ms"
                      icon={Zap}
                      thresholds={{ good: 100, needs_improvement: 300 }}
                      description="Input responsiveness"
                    />
                  )}
                  {metrics.cls > 0 && (
                    <MetricCard
                      title="Cumulative Layout Shift"
                      value={metrics.cls}
                      unit=""
                      icon={Activity}
                      thresholds={{ good: 0.1, needs_improvement: 0.25 }}
                      description="Visual stability score"
                    />
                  )}
                </div>
              </div>
            )}

            {/* Recommendations */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Recommendations
              </h3>
              <div className="space-y-3">
                {recommendations.map((rec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg border-l-4 ${
                      rec.type === 'success' ? 'bg-green-50 border-green-400' :
                      rec.type === 'warning' ? 'bg-yellow-50 border-yellow-400' :
                      'bg-blue-50 border-blue-400'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {rec.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      ) : (
                        <AlertTriangle className={`w-5 h-5 mt-0.5 ${
                          rec.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                        }`} />
                      )}
                      <div>
                        <h4 className="font-semibold text-gray-900">{rec.title}</h4>
                        <p className="text-gray-700 text-sm">{rec.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PerformanceMonitor;