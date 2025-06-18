import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Clock, Menu, X, ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import logo from "/logo2.png?url";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const location = useLocation();

  const languageFlags = [
    { code: "cs", country: "CZ" }, // Czech
    { code: "de", country: "DE" }, // German
    { code: "en", country: "GB" }, // English (UK)
    { code: "hi", country: "IN" }, // Hindi (India)
    { code: "sl", country: "SI" }, // Slovenian
    { code: "uk", country: "UA" }, // Ukrainian
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/b2b" },
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
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-2"
          : "bg-gradient-to-r from-white to-blue-50 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {/* Logo with animated border */}
          <Link
            to="/"
            className={`flex-shrink-0 transition-all duration-300 ${
              isScrolled ? "py-1" : "py-2"
            } relative group`}
          >
            <img
              src={logo}
              alt="Edgar Baker"
              className={`h-12 transition-all duration-300 ${
                isScrolled ? "" : "group-hover:scale-105"
              }`}
            />
            {!isScrolled && (
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
            )}
          </Link>

          {/* Vertical Divider with animation */}
          <div
            className={`hidden lg:block h-12 w-px bg-gradient-to-b ${
              isScrolled
                ? "from-gray-200 to-gray-200"
                : "from-blue-200 to-blue-100"
            } mx-4 transition-all duration-300`}
          ></div>

          <button
            className={`lg:hidden p-2 rounded-full transition-all ${
              isMenuOpen
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-blue-50"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Right Side Content */}
          <div className="hidden lg:flex flex-col w-full">
            {/* Top Info Bar */}
            {!isScrolled && (
              <div className="hidden lg:flex items-center justify-between text-sm pb-3 transition-opacity duration-300 border-b border-gray-200">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center group">
                    <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                      <Phone className="h-4 w-4 text-blue-600" />
                    </div>
                    <a
                      href="tel:+421905321596"
                      className="ml-2 font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      +421 905 321 596
                    </a>
                  </div>

                  <div className="flex items-center group">
                    <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                      <Mail className="h-4 w-4 text-blue-600" />
                    </div>
                    <a
                      href="mailto:info@edgarbaker.com"
                      className="ml-2 font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      info@edgarbaker.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center group">
                    <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="ml-2 font-medium text-gray-700">
                      Mon-Fri: 9:00 AM - 5:00 PM
                    </span>
                  </div>

                  {/* Language Selector */}
                  <div className="relative">
                    <button
                      onClick={() =>
                        setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                      }
                      className="flex items-center space-x-1 p-2 rounded-full hover:bg-blue-50 transition-colors"
                    >
                      <ReactCountryFlag
                        countryCode="GB"
                        svg
                        style={{
                          width: "1.2em",
                          height: "1.2em",
                        }}
                        title="English"
                      />
                      <ChevronDown className="h-4 w-4 text-gray-600" />
                    </button>

                    {isLanguageDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl z-50 border border-gray-100 py-1">
                        {languageFlags.map((lang, index) => (
                          <button
                            key={index}
                            className="flex items-center w-full px-4 py-2 text-left hover:bg-blue-50 transition-colors"
                            onClick={() => {
                              // Handle language change here
                              setIsLanguageDropdownOpen(false);
                            }}
                          >
                            <ReactCountryFlag
                              countryCode={lang.country}
                              svg
                              style={{
                                width: "1.2em",
                                height: "1.2em",
                                marginRight: "8px",
                              }}
                              title={lang.code}
                            />
                            <span className="text-sm text-gray-700">
                              {lang.code.toUpperCase()}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Main Navigation */}
            <nav
              className={`${
                isScrolled ? "pt-1" : "pt-3"
              } hidden lg:flex justify-between`}
            >
              <div className="flex items-center space-x-10 font-lato tracking-wide">
                {navItems.map((item, index) => (
                  <div key={index} className="relative group">
                    {item.subnav ? (
                      <>
                        <button
                          className={`flex items-center px-3 py-2 rounded-lg font-medium uppercase text-sm tracking-wider ${
                            location.pathname === item.path
                              ? "text-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                          }`}
                        >
                          {item.label}
                          <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                        </button>
                        <div className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-xl z-50 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-2">
                          {item.subnav.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className={`block px-4 py-3 uppercase text-sm ${
                                location.pathname === subItem.path
                                  ? "bg-blue-50 text-blue-600 font-semibold"
                                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              } first:rounded-t-lg last:rounded-b-lg`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={`px-3 py-2 rounded-lg font-medium uppercase text-sm tracking-wider ${
                          location.pathname === item.path
                            ? "text-blue-600 bg-blue-50 shadow-md"
                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Language Selector for scrolled state */}
              {isScrolled && (
                <div className="relative">
                  <button
                    onClick={() =>
                      setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                    }
                    className="flex items-center space-x-1 p-2 rounded-full hover:bg-blue-50 transition-colors"
                  >
                    <ReactCountryFlag
                      countryCode="GB"
                      svg
                      style={{
                        width: "1.2em",
                        height: "1.2em",
                      }}
                      title="English"
                    />
                    <ChevronDown className="h-4 w-4 text-gray-600" />
                  </button>

                  {isLanguageDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl z-50 border border-gray-100 py-1">
                      {languageFlags.map((lang, index) => (
                        <button
                          key={index}
                          className="flex items-center w-full px-4 py-2 text-left hover:bg-blue-50 transition-colors"
                          onClick={() => {
                            // Handle language change here
                            setIsLanguageDropdownOpen(false);
                          }}
                        >
                          <ReactCountryFlag
                            countryCode={lang.country}
                            svg
                            style={{
                              width: "1.2em",
                              height: "1.2em",
                              marginRight: "8px",
                            }}
                            title={lang.code}
                          />
                          <span className="text-sm text-gray-700">
                            {lang.code.toUpperCase()}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fadeIn bg-white rounded-lg shadow-xl p-4">
            {navItems.map((item, index) => (
              <div key={index} className="mb-1 last:mb-0">
                {item.subnav ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className={`flex justify-between items-center w-full py-3 px-4 rounded-lg font-medium uppercase ${
                        location.pathname === item.path
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-blue-50"
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
                            className={`block py-2 px-4 rounded-lg uppercase ${
                              location.pathname === subItem.path
                                ? "bg-blue-100 text-blue-600 font-semibold"
                                : "text-gray-700 hover:bg-blue-50"
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
                    className={`block py-3 px-4 rounded-lg font-medium uppercase ${
                      location.pathname === item.path
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-blue-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Contact Info */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Phone className="h-4 w-4 text-blue-600" />
                </div>
                <a
                  href="tel:+421905321596"
                  className="text-gray-700 hover:text-blue-600"
                >
                  +421 905 321 596
                </a>
              </div>
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Mail className="h-4 w-4 text-blue-600" />
                </div>
                <a
                  href="mailto:info@edgarbaker.com"
                  className="text-gray-700 hover:text-blue-600"
                >
                  info@edgarbaker.com
                </a>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-gray-700">
                  Mon-Fri: 9:00 AM - 5:00 PM
                </span>
              </div>

              {/* Mobile Language Selector */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-500 mb-2">
                  Language
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {languageFlags.map((lang, index) => (
                    <button
                      key={index}
                      className="flex items-center justify-center p-2 rounded-lg hover:bg-blue-50 transition-colors"
                      onClick={() => {
                        // Handle language change here
                      }}
                    >
                      <ReactCountryFlag
                        countryCode={lang.country}
                        svg
                        style={{
                          width: "1.5em",
                          height: "1.5em",
                          marginRight: "4px",
                        }}
                        title={lang.code}
                      />
                      <span className="text-sm text-gray-700">
                        {lang.code.toUpperCase()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
