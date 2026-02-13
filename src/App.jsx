import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import ChatBot from './components/common/ChatBot';

// Lazy load pages for better performance
const Home = lazy(() => import('./components/pages/landingPage/LandingPage'));
const About = lazy(() => import('./components/pages/about/AboutUsPage'));
const OurProducts = lazy(() => import('./components/pages/ourProducts/OurProducts'));
const Gallery = lazy(() => import('./components/pages/gallery/GalleryComp'));
const Placement = lazy(() => import('./components/pages/placement/PlacementComp'));
const Blog = lazy(() => import('./components/pages/blog/BlogComp'));
const Contact = lazy(() => import('./components/pages/contact/ContactPage'));

// Loading Spinner
const HiringInternships = lazy(() => import('./components/pages/placement/HiringInternships'));
const ApplicationForm = lazy(() => import('./components/pages/placement/ApplicationForm'));
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto mb-4"></div>
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

// Error Fallback
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center max-w-md mx-auto p-8">
      <div className="text-red-600 mb-4">
        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 15.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
      <p className="text-gray-600 mb-6">We're sorry for the inconvenience. Please try refreshing the page.</p>
      <button
        onClick={resetErrorBoundary}
        className="btn-primary"
      >
        Try Again
      </button>
      {process.env.NODE_ENV === 'development' && (
        <details className="mt-4 text-left">
          <summary className="cursor-pointer text-sm text-gray-500">Error Details</summary>
          <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
            {error.message}
          </pre>
        </details>
      )}
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.reload()}
      >
        <div className="min-h-screen bg-white flex flex-col">
          {/* 🧭 Scroll to top on every route change */}
          <ScrollToTop />

          {/* Header */}
          <Header />

          {/* Main Content */}
          <main id="main-content" className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
              {/* Home Page */}
              <Route path="/" element={<Home />} />

              {/* About Page */}
              <Route path="/about" element={<About />} />

              {/* Our Products */}
              <Route path="/our-products" element={<OurProducts />} />

              {/* Gallery */}
              <Route path="/gallery" element={<Gallery />} />

              {/* Placement */}
              <Route path="/placement" element={<Placement />} />

              {/* Blog */}
              <Route path="/blog" element={<Blog />} />

              {/* Contact */}
              <Route path="/contact" element={<Contact />} />

              {/* Hiring & Internships */}
              <Route path="/hiring-internships" element={<HiringInternships />} />

              {/* Application Form */}
              <Route path="/apply/:id" element={<ApplicationForm />} />

              {/* 404 Page */}
              <Route
                path="*"
                element={
                  <div className="min-h-screen flex items-center justify-center bg-gray-50">
                    <div className="text-center max-w-md mx-auto p-8">
                      <div className="text-red-600 mb-4">
                        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
                      <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
                      <button
                        onClick={() => window.location.href = '/'}
                        className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition"
                      >
                        Go Home
                      </button>
                    </div>
                  </div>
                }
              />
              </Routes>
            </Suspense>
          </main>

          {/* Footer */}
          <Footer />

          {/* ChatBot */}
          <ChatBot />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
