import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ResponsiveImage from "./ResponsiveImage";
import logo from "../../assets/Untitled design (2).png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
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
          <button className="bg-white text-purple-700 px-4 py-1 rounded-full font-medium hover:bg-gray-100 transition">
            Apply Now
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
     <Link to="/" className="flex items-center">
  <img
    src={logo}
    alt="Elite Associates"
    className="max-h-16 md:max-h-20 w-auto object-contain"
    style={{ display: "block" }}
  />
</Link>



        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {[
            { name: "Our Products", path: "/our-products" },
            { name: "About", path: "/about" },
            { name: "Gallery", path: "/gallery" },
            { name: "Placement", path: "/placement" },
            { name: "Blog", path: "/blog" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-5 py-2 rounded-full font-medium transition ${
                isActive(item.path)
                  ? "bg-gradient-to-r from-purple-700 to-purple-800 text-white"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden lg:block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-5 py-2 rounded-full font-medium hover:from-purple-700 hover:to-purple-800 transition">
            Get a Callback
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-purple-800 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            {[
              { name: "Our Products", path: "/our-products" },
              { name: "About", path: "/about" },
              { name: "Gallery", path: "/gallery" },
              { name: "Placement", path: "/placement" },
              { name: "Blog", path: "/blog" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full py-2 px-4 rounded-lg font-medium text-left ${
                  isActive(item.path)
                    ? "bg-gradient-to-r from-purple-700 to-purple-800 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-gray-200">
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
    </header>
  );
};

export default Header;
