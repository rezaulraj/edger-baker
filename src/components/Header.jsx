import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import logo from "/logo2.png?url";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "Services",
      subnav: [
        { label: "HeadHunting", path: "/white-collar" },
        { label: "HR Consulting", path: "/hr-consulting" },
        {
          label: "International Recruitment",
          path: "/international-recruitment",
        },
        { label: "Outsourcing Services", path: "/outsourcing-services" },
      ],
    },
    { label: "About us", path: "/about-us" },
    { label: "Contact", path: "/contact-us" },
    { label: "Podcast", path: "/pod/profile/edgar-baker/" },
  ];

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <header
      className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 opacity-95" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {/* Left: Logo */}
          <Link
            to="/"
            className={`flex-shrink-0 transition-all duration-300 md:px-10 ${
              isScrolled ? "py-1" : "py-3"
            }`}
          >
            <img
              src={logo}
              alt="Edgar Baker"
              className="h-12 transform hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Vertical Divider Line */}
          <div className="w-px h-12 bg-amber-300 hidden lg:block"></div>

          {/* Right Side Content */}
          <div className="flex flex-col w-full">
            {/* Top Info Bar - Hidden on Scroll */}
            {!isScrolled && (
              <div className="hidden lg:flex items-center text-sm pb-2 border-b border-gray-200 text-gray-600 transition-opacity duration-300 ease-in-out">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-blue-500" />
                    <a
                      href="tel:+421905321596"
                      className="hover:text-blue-600 transition-colors"
                    >
                      +421 905 321 596
                    </a>
                  </div>
                  <span className="border-r h-4 mx-3 border-gray-400"></span>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-blue-500" />
                    <a
                      href="mailto:info@edgarbaker.com"
                      className="hover:text-blue-600 transition-colors"
                    >
                      info@edgarbaker.com
                    </a>
                  </div>
                </div>
                <span className="border-r h-4 mx-3 border-gray-400"></span>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-blue-500" />
                  <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
                </div>
              </div>
            )}

            {/* Navigation */}
            <nav
              className={`${
                isScrolled
                  ? "pt-1 animate-fadeIn"
                  : "pt-2 animate-fadeIn"
              } hidden lg:flex justify-between`}
            >
              <div className="flex space-x-8">
                {navItems.map((item, index) => (
                  <div key={index} className="relative group">
                    {item.subnav ? (
                      <>
                        <button
                          className={`flex items-center font-medium uppercase text-sm ${
                            location.pathname === item.path
                              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                              : "text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-500 pb-1"
                          }`}
                        >
                          {item.label}
                          <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                        </button>
                        <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                          {item.subnav.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className={`block px-4 py-2 uppercase text-sm ${
                                location.pathname === subItem.path
                                  ? "bg-blue-50 text-blue-600"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={`font-medium uppercase text-sm ${
                          location.pathname === item.path
                            ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                            : "text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-500 pb-1"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden self-start text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fadeIn">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.subnav ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className={`flex justify-between items-center w-full py-2 px-2 font-medium uppercase ${
                        location.pathname === item.path
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openSubmenu === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openSubmenu === index && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.subnav.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block py-2 px-2 uppercase ${
                              location.pathname === subItem.path
                                ? "text-blue-600 bg-blue-50 rounded"
                                : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 px-2 font-medium uppercase ${
                      location.pathname === item.path
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;