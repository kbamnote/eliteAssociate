import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import FloatingButton from "./components/common/FloatingButton";
import PerformanceMonitor from "./components/common/PerformanceMonitor";
import PerformanceDashboard from "./components/common/PerformanceDashboard";
import LandingPage from "./components/pages/landingPage/LandingPage";
import OurProducts from "./components/pages/ourProducts/OurProducts";
import ContactPage from "./components/pages/contact/ContactPage";
import AboutUsPage from "./components/pages/about/AboutUsPage";
import PlacementComp from "./components/pages/placement/PlacementComp";
import GalleryComp from "./components/pages/gallery/GalleryComp";
import BlogComp from "./components/pages/blog/BlogComp";

function App() {
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [showPerformanceDashboard, setShowPerformanceDashboard] = useState(false);

  // Add keyboard shortcut to toggle performance monitor (Ctrl+Shift+P)
  // Add keyboard shortcut to toggle performance dashboard (Ctrl+Shift+D)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        event.preventDefault();
        setShowPerformanceMonitor(prev => !prev);
      }
      if (event.ctrlKey && event.shiftKey && event.key === 'D') {
        event.preventDefault();
        setShowPerformanceDashboard(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  return (
    <HelmetProvider>
      <div className="App">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  key="home"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <LandingPage />
                </motion.div>
              }
            />
            <Route
              path="/our-products"
              element={
                <motion.div
                  key="products"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <OurProducts />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ContactPage />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <AboutUsPage />
                </motion.div>
              }
            />
            <Route
              path="/placement"
              element={
                <motion.div
                  key="placement"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <PlacementComp />
                </motion.div>
              }
            />
            <Route
              path="/gallery"
              element={
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <GalleryComp />
                </motion.div>
              }
            />
            <Route
              path="/blog"
              element={
                <motion.div
                  key="blog"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <BlogComp />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
        <Footer />
        <FloatingButton />
        
        {/* Performance Monitor - Toggle with Ctrl+Shift+P */}
        <PerformanceMonitor 
          isVisible={showPerformanceMonitor}
          onClose={() => setShowPerformanceMonitor(false)}
        />
        
        {/* Performance Dashboard - Toggle with Ctrl+Shift+D */}
        <PerformanceDashboard 
          isVisible={showPerformanceDashboard}
          onClose={() => setShowPerformanceDashboard(false)}
        />
      </div>
    </HelmetProvider>
  );
}

export default App;