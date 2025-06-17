import React from "react";
import { Briefcase, MapPin, DollarSign, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
const JobList = () => {
  const jobsList = [
    {
      id: 1,
      title: "Logistik",
      subtitle:
        "- Starať sa o potreby zákazníkov, spolupracovať na riadení skladu.- Plánovať a riadiť klientske programy.- Poznať základné funkcie plánovania a…",
      location: "Bratislava",
      salary: "2,500 - 3,200 €",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Senior Pega Sales Automation specialist",
      subtitle:
        "Currently, we’re working on Pega Sales Automation application for different users. We are looking for an experienced Lead Pega specialist…",
      location: "Remote",
      salary: "4,000 - 5,500 €",
      type: "Full-time",
    },
    {
      id: 3,
      title: "Site Core Developer",
      subtitle:
        "We are looking for a Site Core Developer with a passion to ensure innovation and further development of the website.",
      location: "Košice",
      salary: "3,000 - 4,200 €",
      type: "Contract",
    },

    {
      id: 4,
      title: "Pega Test specialist",
      subtitle:
        "Currently we’re working on Pega Sales Automation application for different users. We are looking for experienced Pega specialist to add…",
      location: "Prague",
      salary: "3,800 - 4,800 €",
      type: "Full-time",
    },
    {
      id: 5,
      title: "Finančný Administrátor",
      subtitle:
        "Zodpovednosť za externých zamestnancov, nastavenie všetkých potrebných vstupov a prístupov.",
      location: "Bratislava",
      salary: "1,800 - 2,400 €",
      type: "Full-time",
    },
    {
      id: 6,
      title: "Špecialista na účtovanie dlhodobého majetku",
      subtitle:
        "Budete aktívne podporovať dosahovanie strategických a operačných cieľov s rozvíjaním udržateľnej kultúry pomocou neustáleho zlepšovania procesov.",
      location: "Brno",
      salary: "2,200 - 2,800 €",
      type: "Full-time",
    },
    {
      id: 7,
      title: "Interný konzultant Senior",
      subtitle:
        "• Budete aktívne podporovať dosahovanie strategických a operačných cieľov, rozvíjaním udržate ľnekultúry Vašou úlohou bude prevádzkovať a rozvíjať VPS…",
      location: "Warsaw",
      salary: "3,500 - 4,500 €",
      type: "Full-time",
    },
    {
      id: 8,
      title: "Projektant/Projektový technik",
      subtitle:
        "Pre nášho klienta ponúkajúceho riešenia skladovanie tovaru hľadáme skúseného projektového technika, ktorý bude zastrešovať projekty od komunikácie s obchodým tímom,…",
      location: "Budapest",
      salary: "2,800 - 3,600 €",
      type: "Full-time",
    },
    {
      id: 9,
      title: "Procesný manažér pre bezpečnosť v elektrotechnike",
      subtitle:
        "Pre medzinárodnú spoločnosť, ktorá pôsobí v oblasti vývoja elektrotechnického priemyslu hľadáme skúseného Design/Application Engineera, ktorý má skúsenosti s návrhmi integrovaných…",
      location: "Vienna",
      salary: "4,200 - 5,500 €",
      type: "Full-time",
    },
    {
      id: 10,
      title: "Senior Business Development Manager pre IT sféru",
      subtitle:
        "Hľadáme Business Development manažéra, ktorý pozná IT trh a oblasť security mu nie je cudzia. Ak máte preukázateľné obchodné zručnosti…",
      location: "Remote",
      salary: "5,000 - 7,000 €",
      type: "Full-time",
    },
    {
      id: 11,
      title: "Delivery Manager - Senior Headhunter",
      subtitle:
        "Pozice je vhodná pro Senior Headhuntera s ambicemi vést a rozšiřovat naš pobočku a aktivity v České republice.",
      location: "Prague",
      salary: "3,500 - 4,500 €",
      type: "Full-time",
    },
    {
      id: 12,
      title: "Junior Leasing Manager",
      subtitle:
        "Zaujíma Ťa sales a nehnuteľnosti? Hľadáme človeka, ktorý ma rád výzvy, niekoho kto vie komunikovať s maloobchodnou klientelou, niekoho…",
      location: "Bratislava",
      salary: "1,500 - 2,000 €",
      type: "Full-time",
    },
    {
      id: 13,
      title: "Delivery Manager - Senior Headhunter",
      subtitle:
        "Pozice je vhodná pro Senior Headhuntera s ambicemi vést a rozšiřovat naš pobočku a aktivity v České republice.",
      location: "Remote",
      salary: "4,500 - 6,000 €",
      type: "Full-time",
    },
  ];
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">Current Job Openings</span>
            <span className="block text-primary mt-2">
              Find Your Perfect Position
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Browse through our latest career opportunities and take the next
            step in your professional journey.
          </p>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 gap-8">
          {jobsList.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      <Link
                        to={`/jobs/${job.id}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {job.title}
                      </Link>
                    </h3>
                    <p className="text-gray-500">{job.type}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{job.subtitle}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-700">{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-700">{job.salary}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-700">{job.type}</span>
                  </div>
                </div>

                <Link
                  to={`/jobs/${job.id}`}
                  className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 hover:text-gray-100 hover:bg-primary transition-colors"
                >
                  More info
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/jobs"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors"
          >
            View All Open Positions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobList;
