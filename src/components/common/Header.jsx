import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight, Menu, X, Phone, Mail, Search, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/Untitled design (2).png"; // 👈 your logo image

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) setOpenMenu(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMenu(null);
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

  const aboutItems = ["About Us", "Our Mission", "Our Team", "Careers", "Testimonials"];

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white/80 backdrop-blur-sm"
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
          <motion.button
            className="bg-white text-purple-700 px-4 py-1 rounded-full font-medium hover:bg-gray-100 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now - Limited Seats Available!
          </motion.button>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Left: Logo */}
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Elite Associates Logo"
              className="h-12 w-auto md:h-14 object-contain"
            />
          </a>
        </motion.div>

        {/* Center Navigation - Desktop */}
        <nav className="hidden lg:flex items-center space-x-6 relative">
          {/* Our Products */}
          <motion.a
            href="/our-products"
            className="bg-gradient-to-r from-purple-700 to-purple-800 text-white px-5 py-2 rounded-full font-medium flex items-center gap-2 hover:from-purple-800 hover:to-purple-900 transition-all shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Products <ArrowRight size={18} />
          </motion.a>

          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenMenu("about")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <motion.button
              className="text-gray-800 font-medium flex items-center gap-1 hover:text-purple-800 transition"
              whileHover={{ y: -2 }}
            >
              About <ChevronDown size={16} />
            </motion.button>

            <AnimatePresence>
              {openMenu === "about" && (
                <motion.div
                  className="absolute left-0 mt-2 bg-white shadow-xl rounded-xl py-2 w-56"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {aboutItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href={
                        item === "About Us"
                          ? "/about"
                          : item === "Careers"
                          ? "/placement"
                          : "#"
                      }
                      className="flex justify-between items-center px-4 py-2 hover:bg-purple-50 cursor-pointer"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
                      {item === "Testimonials" && (
                        <span className="bg-red-500 text-white text-[10px] font-bold rounded px-1.5 py-0.5 ml-2">
                          NEW
                        </span>
                      )}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Placement */}
          <motion.a
            href="/placement"
            className="text-gray-800 font-medium hover:text-purple-800 transition"
            whileHover={{ y: -2 }}
          >
            Placement
          </motion.a>

          {/* Blog */}
          <motion.a
            href="/blog"
            className="text-gray-800 font-medium hover:text-purple-800 transition"
            whileHover={{ y: -2 }}
          >
            Blog
          </motion.a>

          {/* Contact */}
          <motion.a
            href="/contact"
            className="text-gray-800 font-medium hover:text-purple-800 transition"
            whileHover={{ y: -2 }}
          >
            Contact
          </motion.a>
        </nav>

        {/* Right: Action Buttons */}
        <div className="flex items-center space-x-4">
          <motion.button
            className="text-purple-800 focus:outline-none p-2 rounded-lg hover:bg-gray-100"
            onClick={toggleSearch}
            whileTap={{ scale: 0.9 }}
          >
            <Search size={20} />
          </motion.button>

          <motion.button
            className="text-purple-800 focus:outline-none p-2 rounded-lg hover:bg-gray-100"
            whileTap={{ scale: 0.9 }}
          >
            <User size={20} />
          </motion.button>

          <motion.button
            className="hidden lg:block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-5 py-2 rounded-full font-medium hover:from-purple-700 hover:to-purple-800 transition shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Callback
          </motion.button>

          <motion.button
            className="lg:hidden text-purple-800 focus:outline-none p-2 rounded-lg hover:bg-gray-100"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            ref={searchRef}
            className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
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
                <motion.button
                  type="submit"
                  className="bg-purple-700 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-800 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Search
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-200"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <div className="space-y-2">
                <a
                  href="/our-products"
                  className="block w-full text-left py-2 px-4 rounded-lg bg-purple-800 text-white font-medium flex items-center justify-between"
                  onClick={closeMobileMenu}
                >
                  Our Products <ArrowRight size={18} />
                </a>

                <button
                  className="w-full text-left py-2 px-4 rounded-lg text-gray-800 hover:bg-purple-50 flex items-center justify-between"
                  onClick={() => setOpenMenu(openMenu === "mobile-about" ? null : "mobile-about")}
                >
                  About
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform ${
                      openMenu === "mobile-about" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openMenu === "mobile-about" && (
                  <motion.div
                    className="pl-4 space-y-2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    {aboutItems.map((item, index) => (
                      <button
                        key={index}
                        className="block w-full text-left py-2 px-4 rounded-lg text-gray-700 hover:bg-purple-50"
                        onClick={closeMobileMenu}
                      >
                        {item}
                      </button>
                    ))}
                  </motion.div>
                )}

                <a
                  href="/placement"
                  className="block py-2 px-4 rounded-lg text-gray-800 hover:bg-purple-50"
                  onClick={closeMobileMenu}
                >
                  Placement
                </a>

                <a
                  href="/blog"
                  className="block py-2 px-4 rounded-lg text-gray-800 hover:bg-purple-50"
                  onClick={closeMobileMenu}
                >
                  Blog
                </a>

                <a
                  href="/contact"
                  className="block py-2 px-4 rounded-lg text-gray-800 hover:bg-purple-50"
                  onClick={closeMobileMenu}
                >
                  Contact
                </a>
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
