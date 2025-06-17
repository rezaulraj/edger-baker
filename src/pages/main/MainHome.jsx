import React from "react";
import logo from "/logo.png";
import ReactCountryFlag from "react-country-flag";
import image1 from "../../assets/main/main1.jpg?url";
import image2 from "../../assets/main/main2.png?url";
import { LuArrowRightFromLine } from "react-icons/lu";
import { Link } from "react-router-dom";
import team1 from "../../assets/main/team1.jpg?url";
import team2 from "../../assets/main/team2.jpg?url";

const languageFlags = [
  { code: "cs", country: "CZ" }, // Czech
  { code: "de", country: "DE" }, // German
  { code: "en", country: "GB" }, // English (UK)
  { code: "hi", country: "IN" }, // Hindi (India)
  { code: "sl", country: "SI" }, // Slovenian
  { code: "uk", country: "UA" }, // Ukrainian
];

const MainHome = () => {
  const teams = [
    {
      image: team1,
      name: "JAKUB FEKIAČ",
      position: "Managing Partner",
    },
    {
      image: team2,
      name: "JANA ŠRAMČÍKOVÁ",
      position: "Associate Partner",
    },
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <div className="container mx-auto px-4 py-10">
        {/* Hero Section */}
        <div className="max-w-lg mx-auto pt-20 text-center">
          <img src={logo} alt="Company Logo" className="w-full h-full " />

          {/* Country flags */}
          <div className="flex justify-center gap-6 mt-8">
            {languageFlags.map(({ code, country }) => (
              <div
                key={code}
                className="cursor-pointer hover:scale-110 transition-transform relative"
                title={code}
              >
                <ReactCountryFlag
                  countryCode={country}
                  svg
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                    filter: "drop-shadow(0 0 2px rgba(0,0,0,0.5))",
                  }}
                  title={code}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 md:px-10 px-4 pb-20">
          {/* First Card */}
          <Link
            to={"/jobs"}
            className="group relative rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 min-h-[400px]"
          >
            {/* Background Image with Zoom Effect */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${image1})` }}
            >
              <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-500 group-hover:opacity-60"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col space-y-20">
              <div className="p-10 flex-grow text-gray-300 space-y-8">
                <h2 className="text-3xl font-semibold mb-4 font-lato leading-relaxed transition-transform duration-300 group-hover:translate-x-2">
                  Are you seeking new career opportunities? Look no further! We
                  have a wide range of job openings across various industries.
                </h2>
                <p className="mb-2 font-lato text-lg text-gray-300 leading-relaxed transition-transform duration-300 group-hover:translate-x-2">
                  Additionally, we provide Temporary staffing and Outsourcing
                  Services suitable for
                  <br />
                  Are you seeking new career opportunities? Look no further! We
                  have a wide range of job openings across various industries.
                </p>
              </div>

              <div className="p-6 flex justify-between items-center">
                <span className="inline-block px-3 py-1 font-lato text-3xl md:text-4xl text-gray-300 font-medium mb-3 rounded-full transition-transform duration-300 group-hover:translate-x-2">
                  FOR CANDIDATES
                </span>
                <div className="transition-transform duration-500 group-hover:translate-x-3">
                  <LuArrowRightFromLine className="text-5xl text-white transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          </Link>

          {/* Second Card */}
          <Link
            to={"/b2b"}
            className="group relative rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 min-h-[400px]"
          >
            {/* Background Image with Zoom Effect */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${image2})` }}
            >
              <div className="absolute inset-0 bg-accent opacity-90 transition-opacity duration-500 group-hover:opacity-80"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col space-y-20">
              <div className="p-10 flex-grow text-white/95">
                <h2 className="text-3xl font-semibold mb-4 font-lato leading-relaxed transition-transform duration-300 group-hover:translate-x-2">
                  We offer comprehensive HR services tailored to the various
                  needs of your company. Our expertise includes Recruitment
                  services, Executive Search, Expert Recruitment, and Project
                  Recruitment, all customized to meet your specific
                  requirements.
                </h2>
                <p className="mb-2 font-lato text-lg text-white/95 leading-relaxed transition-transform duration-300 group-hover:translate-x-2">
                  Our staffing agency will help kickstart your career and find{" "}
                  <br />
                  optimizing your processes, as well as International
                  Recruitment for sourcing specialists from abroad.
                </p>
              </div>

              <div className="p-6 flex justify-between items-center">
                <span className="inline-block px-3 py-1 font-lato text-3xl md:text-4xl text-white/95 font-medium mb-3 rounded-full transition-transform duration-300 group-hover:translate-x-2">
                  FOR COMPANIES
                </span>
                <div className="transition-transform duration-500 group-hover:translate-x-3">
                  <LuArrowRightFromLine className="text-5xl text-white/95 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Team Section */}
        <div className=" py-20">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium tracking-[6px] font-lato text-primary mb-2">
              EDGAR BAKER
            </h2>
            <h1 className="text-4xl md:text-5xl font-semibold text-white/90 mb-4 font-merriweather tracking-widest leading-relaxed">
              GET TO KNOW US <br />
              BETTER
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 px-4">
            {teams.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-300">{member.position}</p>
                  <div className="w-12 h-0.5 bg-white my-3 transition-all duration-500 group-hover:w-20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className=" p-8 md:p-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white/90">
            Let's Work Together
          </h2>
          <div className="flex flex-col justify-center gap-8 items-center">
            <a
              href="mailto:info@edgarbaker.com"
              className=" text-primary tracking-[3px] transition-colors text-lg"
            >
              info@edgarbaker.com
            </a>

            <a
              href="tel:+421905321596"
              className="text-3xl tracking-widest font-semibold text-gray-200 transition-colors"
            >
              +421 905 321 596
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
