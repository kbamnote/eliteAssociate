import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Menu, X, Phone, Mail, Search, User, Camera } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Untitled design (2).png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      setIsSearchOpen(false);
    }
  };

  // Helper function to check if current path is active
  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white backdrop-blur-md shadow-lg" : "bg-white backdrop-blur-sm"
      }`}
    >
      {/* Top Announcement Banner */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4 mb-2 md:mb-0">
            <span className="flex items-center gap-1">
              <Phone size={14} />
              <span>+1 (555) 123-4567</span>
            </span>
            <span className="flex items-center gap-1">
              <Mail size={14} />
              <span>info@eliteassociates.com</span>
            </span>
          </div>
          <button
            className="bg-white text-purple-700 px-4 py-1 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95"
          >
            Apply Now - Limited Seats Available!
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 opacity-0 animate-fadeInLeft">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Elite Associates Logo"
              className="h-12 w-auto md:h-14 object-contain"
            />
          </Link>
        </div>

        {/* Center Navigation - Desktop */}
        <nav className="hidden lg:flex items-center space-x-6 relative">
          {/* Our Products */}
          <Link
            to="/our-products"
            className={`px-5 py-2 rounded-full font-medium flex items-center gap-2 transition-all  transform hover:scale-105 active:scale-95 ${
              isActive('/our-products')
                ? 'bg-gradient-to-r from-purple-700 to-purple-800 text-white'
                : ' text-gray-800 hover:bg-gray-200'
            }`}
          >
            Our Products 
          </Link>

          {/* About */}
          <Link
            to="/about"
            className={`px-5 py-2 rounded-full font-medium flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 ${
              isActive('/about')
                ? 'bg-gradient-to-r from-purple-700 to-purple-800 text-white'
                : ' text-gray-800 hover:bg-gray-200'
            }`}
          >
            About
          </Link>

          {/* Gallery */}
          <Link
            to="/gallery"
            className={`px-5 py-2 rounded-full font-medium flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 ${
              isActive('/gallery')
                ? 'bg-gradient-to-r from-purple-700 to-purple-800 text-white'
                : ' text-gray-800 hover:bg-gray-200'
            }`}
          >
            Gallery 
          </Link>

          {/* Placement */}
          <Link
            to="/placement"
            className={`px-5 py-2 rounded-full font-medium flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 ${
              isActive('/placement')
                ? 'bg-gradient-to-r from-purple-700 to-purple-800 text-white'
                : ' text-gray-800 hover:bg-gray-200'
            }`}
          >
            Placement
          </Link>

          {/* Blog */}
          <Link
            to="/blog"
            className={`px-5 py-2 rounded-full font-medium flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 ${
              isActive('/blog')
                ? 'bg-gradient-to-r from-purple-700 to-purple-800 text-white'
                : ' text-gray-800 hover:bg-gray-200'
            }`}
          >
            Blog
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className={`px-5 py-2 rounded-full font-medium flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 ${
              isActive('/contact')
                ? 'bg-gradient-to-r from-purple-700 to-purple-800 text-white'
                : ' text-gray-800 hover:bg-gray-200'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right: Action Buttons */}
        <div className="flex items-center space-x-4">
          <button
            className="hidden lg:block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-5 py-2 rounded-full font-medium hover:from-purple-700 hover:to-purple-800 transition shadow-md transform hover:scale-105 active:scale-95"
          >
            Get a Callback
          </button>

          <button
            className="lg:hidden text-purple-800 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transform active:scale-90 transition"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div
          ref={searchRef}
          className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 opacity-0 animate-slideDown"
        >
          <div className="container mx-auto px-4 py-4">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, programs, or resources..."
                className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                autoFocus
              />
              <button
                type="submit"
                className="bg-purple-700 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-800 transition transform hover:scale-105 active:scale-95"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 opacity-0 animate-slideDown">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-2">
              <Link
                to="/our-products"
                className={`block w-full text-left py-2 px-4 rounded-lg font-medium flex items-center justify-between ${
                  isActive('/our-products')
                    ? 'bg-gradient-to-r from-purple-700 to-purple-800 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={closeMobileMenu}
              >
                Our Products <ArrowRight size={18} />
              </Link>

              <Link
                to="/about"
                className={`block w-full text-left py-2 px-4 rounded-lg font-medium ${
                  isActive('/about')
                    ? 'bg-gradient-to-r from-purple-700 to-purple-800 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={closeMobileMenu}
              >
                About
              </Link>

              <Link
                to="/gallery"
                className={`block w-full text-left py-2 px-4 rounded-lg font-medium flex items-center justify-between ${
                  isActive('/gallery')
                    ? 'bg-gradient-to-r from-purple-700 to-purple-800 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={closeMobileMenu}
              >
                Gallery <Camera size={18} />
              </Link>

              <Link
                to="/placement"
                className={`block w-full text-left py-2 px-4 rounded-lg font-medium ${
                  isActive('/placement')
                    ? 'bg-gradient-to-r from-purple-700 to-purple-800 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={closeMobileMenu}
              >
                Placement
              </Link>

              <Link
                to="/blog"
                className={`block w-full text-left py-2 px-4 rounded-lg font-medium ${
                  isActive('/blog')
                    ? 'bg-gradient-to-r from-purple-700 to-purple-800 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={closeMobileMenu}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className={`block w-full text-left py-2 px-4 rounded-lg font-medium ${
                  isActive('/contact')
                    ? 'bg-gradient-to-r from-purple-700 to-purple-800 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 rounded-full font-medium hover:from-purple-700 hover:to-purple-800 transition mb-3">
                Get a Callback
              </button>
              <button className="w-full border border-purple-800 text-purple-800 py-2 rounded-full font-medium hover:bg-purple-800 hover:text-white transition">
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.5s ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;