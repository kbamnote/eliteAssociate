import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { initGA, trackPerformance } from './utils/analytics.js'
import { initPerformanceOptimizations } from './utils/performance.js'

// Initialize performance optimizations
initPerformanceOptimizations();

// Initialize Google Analytics
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 tracking ID
// initGA(GA_TRACKING_ID); // Commented out for development

// Track performance metrics
window.addEventListener('load', () => {
  setTimeout(trackPerformance, 1000);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)