import React from "react";
import { Briefcase, ArrowRight, Check, Users } from "lucide-react";

const JobOpening = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-accent font-medium text-sm">
              <Briefcase className="h-5 w-5 mr-2" />
              CAREER OPPORTUNITIES
            </div>

            <h4 className="text-2xl md:text-3xl font-light text-gray-600">
              Are you seeking new career opportunities?
            </h4>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Look no further! We have a wide range of job openings across{" "}
              <span className="text-primary">various industries</span>.
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our staffing agency will help kickstart your career and find a job
              that fulfills you.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Join thousands of successful candidates who found their
                  perfect roles
                </span>
              </div>
              <div className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Access exclusive opportunities not advertised elsewhere
                </span>
              </div>
              <div className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Get personalized career guidance from industry experts
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
                Browse Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-primary text-accent hover:bg-blue-50 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center">
                Upload Your CV
              </button>
            </div>
          </div>

          {/* Stats/Image Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 sm:p-10">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden mb-8">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Happy employees"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Users className="h-10 w-10 text-blue-600 mb-3" />
                  <h3 className="text-3xl font-bold text-gray-900">5,000+</h3>
                  <p className="text-gray-600">Candidates Placed</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Briefcase className="h-10 w-10 text-blue-600 mb-3" />
                  <h3 className="text-3xl font-bold text-gray-900">200+</h3>
                  <p className="text-gray-600">Partner Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpening;
