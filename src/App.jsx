import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import FloatingButton from './components/common/FloatingButton';
import LandingPage from './components/pages/landingPage/LandingPage';
import OurProducts from './components/pages/ourProducts/OurProducts';
import ProductsPage from './components/pages/products/ProductsPage';
import AboutPage from './components/pages/about/AboutPage';
import ContactPage from './components/pages/contact/ContactPage';
import BlogPage from './components/pages/blog/BlogPage';
import PlacementPage from './components/pages/placement/PlacementPage';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.05 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.5 
            }}
          >
            <Routes location={location}>
              <Route path='/' element={<LandingPage />} />
              <Route path='/our-products' element={<OurProducts />} />
              <Route path='/products' element={<ProductsPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/placement' element={<PlacementPage />} />
              <Route path='/blog' element={<BlogPage />} />
              <Route path='/contact' element={<ContactPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default App;