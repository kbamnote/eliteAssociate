import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-green-800 font-bold text-xl md:text-2xl">
            Elite <span className="text-green-700 font-semibold">Associate</span>
          </div>
          <span className="hidden md:inline-block text-gray-400 text-sm border-l h-6 mx-2"></span>
          <span className="hidden md:inline-block text-green-700 font-semibold text-sm">
            22 Years
          </span>
        </div>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 relative">
          {/* All Programs Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenMenu("programs")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="bg-green-800 text-white px-5 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-green-900 transition-all">
              All Programs <ChevronDown size={18} />
            </button>

            {/* Dropdown 1: All Programs */}
            {openMenu === "programs" && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-xl p-5 grid gap-3 w-60 animate-fadeIn">
                <h3 className="font-semibold text-gray-900 mb-2">Domains</h3>
                {[
                  "Finance",
                  "Analytics",
                  "Technology",
                  "Marketing",
                  "General Management",
                  "Operations",
                  "Sales",
                ].map((item, index) => (
                  <button
                    key={index}
                    className={`flex justify-between items-center text-left text-sm font-medium px-2 py-2 rounded-lg border ${
                      item === "Finance"
                        ? "text-green-700 border-green-600"
                        : "text-gray-700 border-gray-200"
                    } hover:bg-green-50 transition`}
                  >
                    {item}
                    <ArrowRight
                      size={16}
                      className={`${
                        item === "Finance"
                          ? "text-green-700"
                          : "text-gray-400 group-hover:text-green-700"
                      }`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Career Services */}
          <a
            href="/our-products"
            className="text-gray-800 font-medium hover:text-green-800 transition"
          >
            Our Products
          </a>

          {/* Discover Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenMenu("discover")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="text-gray-800 font-medium flex items-center gap-1 hover:text-green-800 transition">
              Discover <ChevronDown size={16} />
            </button>

            {/* Dropdown 2: Discover */}
            {openMenu === "discover" && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-xl py-2 w-56 animate-fadeIn">
                {[
                  "About Us",
                  "Blog",
                  "Free Courses",
                  "Refer and Earn",
                  "Contact Us",
                  "Next-Gen Degrees",
                  "Help And Support",
                  "Explore Institutes",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center px-4 py-2 hover:bg-green-50 cursor-pointer"
                  >
                    <span className="text-gray-700 text-sm font-medium">
                      {item}
                    </span>
                    {item === "Free Courses" && (
                      <span className="bg-red-500 text-white text-[10px] font-bold rounded px-1.5 py-0.5 ml-2">
                        NEW
                      </span>
                    )}
                    {item === "Explore Institutes" && (
                      <ArrowRight size={16} className="text-gray-500" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* For Enterprise */}
          <a
            href="#"
            className="text-gray-800 font-medium hover:text-green-800 transition"
          >
            For Enterprise
          </a>
        </nav>

        {/* Right: Login Button */}
        <div className="flex items-center space-x-4">
          <button className="hidden lg:block border border-green-800 text-green-800 px-5 py-2 rounded-full font-medium hover:bg-green-800 hover:text-white transition">
            Login
          </button>

          {/* Mobile menu icon */}
          <button className="lg:hidden text-green-800 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
