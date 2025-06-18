import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Check,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import ApplyForm from "./ApplyForm";
const JobDescription = () => {
  const { id } = useParams();
  const [showApplyForm, setShowApplyForm] = useState(false);
  const jobsList = [
    {
      id: 1,
      title: "Logistik",
      subtitle:
        "Starať sa o potreby zákazníkov, spolupracovať na riadení skladu. Plánovať a riadiť klientske programy. Poznať základné funkcie plánovania a pracovných príkazov.",
      location: "Bratislava",
      salary: "2,500 - 3,200 € (brutto)",
      type: "Full-time",
      startDate: "Immediate",
      placeOfWork: "Vlkanová",
      responsibilities: [
        "Take care of customer needs and assist in warehouse management.",
        "Plan and manage client programs.",
        "Understand the basic functions of planning and work orders.",
        "Maintain order and cleanliness in all logistics-related areas.",
        "Manage and supervise packaging, oversee transport contracts, and plan subcontractors for customer parts.",
        "Collaborate with the warehouse manager in managing shipments.",
        "Coordinate shipments from various departments.",
        "Perform transportation logistics procedures on time to meet customer needs.",
        "Collaborate in the preparation of production planning.",
      ],
      requirements: [
        "Experience in logistics or warehouse management.",
        "Knowledge of planning and work order processes.",
        "Good communication and teamwork skills.",
        "Reliability and attention to detail.",
      ],
      benefits: [
        "13th salary",
        "Attendance bonus for reliability",
        "Performance bonus",
        "Additional vacation beyond the legal minimum",
        "Flexible working hours",
        "Financial allowance for commuting (80 € monthly)",
        "Provided drinking water",
        "Stable job in an international company",
      ],
    },
    {
      id: 2,
      title: "Senior Pega Sales Automation specialist",
      subtitle:
        "Currently, we’re working on Pega Sales Automation application for different users. We are looking for an experienced Lead Pega specialist to join our team.",
      location: "Remote",
      salary: "4,000 - 5,500 €",
      type: "Full-time",
      startDate: "Flexible",
      placeOfWork: "Remote",
      responsibilities: [
        "Lead Pega Sales Automation projects.",
        "Collaborate with business and technical teams.",
        "Design and implement automation solutions.",
      ],
      requirements: [
        "Extensive experience with Pega systems.",
        "Strong problem-solving skills.",
        "Ability to lead a team.",
      ],
      benefits: [
        "Remote work option",
        "Performance bonuses",
        "Flexible work hours",
      ],
    },
    {
      id: 3,
      title: "Site Core Developer",
      subtitle:
        "We are looking for a Site Core Developer with a passion to ensure innovation and further development of the website.",
      location: "Košice",
      salary: "3,000 - 4,200 €",
      type: "Contract",
      startDate: "Immediate",
      placeOfWork: "Košice Office",
      responsibilities: [
        "Develop and maintain Site Core based websites.",
        "Implement new features and improve site performance.",
        "Collaborate with designers and backend developers.",
      ],
      requirements: [
        "Proven experience with Site Core development.",
        "Good understanding of front-end and back-end technologies.",
        "Ability to work in a contract-based environment.",
      ],
      benefits: [
        "Competitive contract salary",
        "Flexible schedule",
        "Opportunity for permanent employment",
      ],
    },
    {
      id: 4,
      title: "Pega Test specialist",
      subtitle:
        "Currently we’re working on Pega Sales Automation application for different users. We are looking for experienced Pega specialist to add value to our testing team.",
      location: "Prague",
      salary: "3,800 - 4,800 €",
      type: "Full-time",
      startDate: "Immediate",
      placeOfWork: "Prague Office",
      responsibilities: [
        "Test Pega applications thoroughly.",
        "Work closely with developers to fix bugs.",
        "Create and maintain test cases and scripts.",
      ],
      requirements: [
        "Experience with Pega testing.",
        "Attention to detail.",
        "Good communication skills.",
      ],
      benefits: [
        "13th salary",
        "Performance bonuses",
        "International working environment",
      ],
    },
    {
      id: 5,
      title: "Finančný Administrátor",
      subtitle:
        "Zodpovednosť za externých zamestnancov, nastavenie všetkých potrebných vstupov a prístupov.",
      location: "Bratislava",
      salary: "1,800 - 2,400 €",
      type: "Full-time",
      startDate: "Immediate",
      placeOfWork: "Bratislava Office",
      responsibilities: [
        "Manage responsibilities related to external employees.",
        "Set up necessary inputs and access rights.",
      ],
      requirements: [
        "Experience in finance administration.",
        "Organizational skills.",
        "Good communication skills.",
      ],
      benefits: [
        "Stable job in an international company",
        "Additional vacation beyond the legal minimum",
        "Flexible working hours",
      ],
    },
    {
      id: 6,
      title: "Špecialista na účtovanie dlhodobého majetku",
      subtitle:
        "Budete aktívne podporovať dosahovanie strategických a operačných cieľov s rozvíjaním udržateľnej kultúry pomocou neustáleho zlepšovania procesov.",
      location: "Brno",
      salary: "2,200 - 2,800 €",
      type: "Full-time",
      startDate: "Immediate",
      placeOfWork: "Brno Office",
      responsibilities: [
        "Support achievement of strategic and operational goals.",
        "Develop a sustainable culture by continuously improving processes.",
      ],
      requirements: [
        "Experience with long-term asset accounting.",
        "Process improvement skills.",
        "Teamwork and communication skills.",
      ],
      benefits: [
        "Performance bonus",
        "Additional vacation beyond the legal minimum",
        "Flexible working hours",
      ],
    },
    {
      id: 7,
      title: "Interný konzultant Senior",
      subtitle:
        "Budete aktívne podporovať dosahovanie strategických a operačných cieľov, rozvíjaním udržateľnej kultúry. Vašou úlohou bude prevádzkovať a rozvíjať VPS.",
      location: "Warsaw",
      salary: "3,500 - 4,500 €",
      type: "Full-time",
      startDate: "Flexible",
      placeOfWork: "Warsaw Office",
      responsibilities: [
        "Support strategic and operational goals.",
        "Develop sustainable corporate culture.",
        "Operate and develop VPS.",
      ],
      requirements: [
        "Experience as a consultant.",
        "Strategic thinking skills.",
        "Excellent communication skills.",
      ],
      benefits: [
        "13th salary",
        "Performance bonus",
        "International work environment",
      ],
    },
    {
      id: 8,
      title: "Projektant/Projektový technik",
      subtitle:
        "Pre nášho klienta ponúkajúceho riešenia skladovanie tovaru hľadáme skúseného projektového technika, ktorý bude zastrešovať projekty od komunikácie s obchodým tímom.",
      location: "Budapest",
      salary: "2,800 - 3,600 €",
      type: "Full-time",
      startDate: "Immediate",
      placeOfWork: "Budapest Office",
      responsibilities: [
        "Manage projects related to goods storage solutions.",
        "Communicate with sales teams.",
        "Oversee project progress and deliverables.",
      ],
      requirements: [
        "Experience in project management or technical project coordination.",
        "Good communication skills.",
        "Ability to manage multiple projects.",
      ],
      benefits: [
        "Stable employment",
        "Performance bonus",
        "Additional vacation",
      ],
    },
    {
      id: 9,
      title: "Procesný manažér pre bezpečnosť v elektrotechnike",
      subtitle:
        "Pre medzinárodnú spoločnosť, ktorá pôsobí v oblasti vývoja elektrotechnického priemyslu hľadáme skúseného Design/Application Engineera.",
      location: "Vienna",
      salary: "4,200 - 5,500 €",
      type: "Full-time",
      startDate: "Immediate",
      placeOfWork: "Vienna Office",
      responsibilities: [
        "Manage safety processes in electrotechnical industry.",
        "Design and apply engineering solutions.",
        "Ensure compliance with industry standards.",
      ],
      requirements: [
        "Experience in electrotechnical safety management.",
        "Engineering background.",
        "Strong problem-solving skills.",
      ],
      benefits: [
        "Competitive salary",
        "Performance bonus",
        "International company benefits",
      ],
    },
    {
      id: 10,
      title: "Senior Business Development Manager pre IT sféru",
      subtitle:
        "Hľadáme Business Development manažéra, ktorý pozná IT trh a oblasť security mu nie je cudzia.",
      location: "Remote",
      salary: "5,000 - 7,000 €",
      type: "Full-time",
      startDate: "Flexible",
      placeOfWork: "Remote",
      responsibilities: [
        "Develop new business in IT sector.",
        "Maintain and expand client relationships.",
        "Understand IT security market.",
      ],
      requirements: [
        "Proven sales skills.",
        "Experience in IT or security.",
        "Strong negotiation abilities.",
      ],
      benefits: [
        "High performance bonus",
        "Flexible working hours",
        "Remote work",
      ],
    },
    {
      id: 11,
      title: "Delivery Manager - Senior Headhunter",
      subtitle:
        "Pozice je vhodná pro Senior Headhuntera s ambicemi vést a rozšiřovat naš pobočku a aktivity v České republice.",
      location: "Prague",
      salary: "3,500 - 4,500 €",
      type: "Full-time",
      startDate: "Immediate",
      placeOfWork: "Prague Office",
      responsibilities: [
        "Lead and expand company branch in Czech Republic.",
        "Manage recruitment teams.",
        "Develop headhunting strategies.",
      ],
      requirements: [
        "Experience in senior headhunting.",
        "Leadership skills.",
        "Strong network in the Czech market.",
      ],
      benefits: [
        "Performance bonus",
        "Company car",
        "Training and development",
      ],
    },
    {
      id: 12,
      title: "Junior Leasing Manager",
      subtitle:
        "Zaujíma Ťa sales a nehnuteľnosti? Hľadáme človeka, ktorý má rád výzvy, niekoho kto vie komunikovať s maloobchodnou klientelou.",
      location: "Bratislava",
      salary: "1,500 - 2,000 €",
      type: "Full-time",
      startDate: "Immediate",
      placeOfWork: "Bratislava Office",
      responsibilities: [
        "Assist in leasing operations.",
        "Communicate with retail clients.",
        "Support sales activities.",
      ],
      requirements: [
        "Interest in sales and real estate.",
        "Good communication skills.",
        "Motivated to take on challenges.",
      ],
      benefits: [
        "Career development opportunities",
        "Flexible working hours",
        "Performance bonus",
      ],
    },
    {
      id: 13,
      title: "Delivery Manager - Senior Headhunter",
      subtitle:
        "Pozice je vhodná pro Senior Headhuntera s ambicemi vést a rozšiřovat naš pobočku a aktivity v České republice.",
      location: "Remote",
      salary: "4,500 - 6,000 €",
      type: "Full-time",
      startDate: "Flexible",
      placeOfWork: "Remote",
      responsibilities: [
        "Lead and expand company branch remotely.",
        "Manage recruitment teams.",
        "Develop headhunting strategies.",
      ],
      requirements: [
        "Experience in senior headhunting.",
        "Leadership skills.",
        "Strong network in target markets.",
      ],
      benefits: [
        "Performance bonus",
        "Remote work option",
        "Training and development",
      ],
    },
  ];
  const job = jobsList.find((job) => job.id === parseInt(id));

  if (!job) {
    return (
      <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Job Not Found</h2>
          <p className="mt-4 text-xl text-gray-600">
            The job you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/jobs"
            className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Back to Job Listings
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/jobs"
            className="inline-flex items-center text-secondary hover:text-blue-800 font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to all jobs
          </Link>
        </div>

        {/* Job Header */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex items-start">
              <div className="p-4 bg-blue-100 rounded-lg mr-6">
                <Briefcase className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {job.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6">{job.subtitle}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">{job.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Salary</p>
                      <p className="font-medium">{job.salary}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Job Type</p>
                      <p className="font-medium">{job.type}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setShowApplyForm(true)}
                    className="px-6 py-3 bg-primary hover:bg-accent text-white font-medium rounded-lg transition-colors"
                  >
                    Apply Now
                  </button>
                  {showApplyForm && (
                    <ApplyForm
                      jobTitle={job.title}
                      isOpen={showApplyForm}
                      onClose={() => setShowApplyForm(false)}
                    />
                  )}
                  <button className="px-6 py-3 border border-primary text-primary hover:bg-blue-50 font-medium rounded-lg transition-colors">
                    Save Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Job Details */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Job Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Responsibilities
                </h3>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Requirements
                </h3>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {job.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-blue-50 rounded-lg"
                >
                  <Check className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Additional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Start Date
                </h3>
                <p className="text-gray-700">{job.startDate}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Place of Work
                </h3>
                <p className="text-gray-700">{job.placeOfWork}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Apply Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to apply?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Submit your application today and take the first step towards this
            exciting opportunity.
          </p>
          <button
            onClick={() => setShowApplyForm(true)}
            className="px-6 py-3 bg-primary hover:bg-accent text-white font-medium rounded-lg transition-colors"
          >
            Apply Now
          </button>
          {showApplyForm && (
            <ApplyForm
              jobTitle={job.title}
              isOpen={showApplyForm}
              onClose={() => setShowApplyForm(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
