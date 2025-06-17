import React, { useState } from "react";
import { X, FileText, Upload, CheckCircle } from "lucide-react";

const ApplyForm = ({ jobTitle, isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    cv: null,
    motivationLetter: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);

    // Show submission confirmation
    setIsSubmitted(true);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      cv: null,
      motivationLetter: null,
    });
  };

  const closeModal = () => {
    onClose();
    setIsSubmitted(false);
  };

  return (
    <>
      {/* Apply Now Button to Trigger Modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
      >
        Apply Now
      </button>

      {/* Application Form Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Apply for {jobTitle}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Application Form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-left text-gray-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-left text-gray-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-left text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-left text-gray-700 mb-1"
                      >
                        Cover Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* CV Upload */}
                    <div>
                      <label
                        htmlFor="cv"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Upload CV (PDF) *
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="h-8 w-8 text-gray-500 mb-2" />
                            <p className="mb-2 text-sm text-gray-500">
                              {formData.cv ? (
                                <span className="font-semibold">
                                  {formData.cv.name}
                                </span>
                              ) : (
                                <>
                                  <span className="font-semibold">
                                    Click to upload
                                  </span>{" "}
                                  or drag and drop
                                </>
                              )}
                            </p>
                            <p className="text-xs text-gray-500">
                              PDF (MAX. 5MB)
                            </p>
                          </div>
                          <input
                            id="cv"
                            name="cv"
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            required
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>

                    {/* Motivation Letter Upload */}
                    <div>
                      <label
                        htmlFor="motivationLetter"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Upload Motivation Letter (Word)
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <FileText className="h-8 w-8 text-gray-500 mb-2" />
                            <p className="mb-2 text-sm text-gray-500">
                              {formData.motivationLetter ? (
                                <span className="font-semibold">
                                  {formData.motivationLetter.name}
                                </span>
                              ) : (
                                <>
                                  <span className="font-semibold">
                                    Click to upload
                                  </span>{" "}
                                  or drag and drop
                                </>
                              )}
                            </p>
                            <p className="text-xs text-gray-500">
                              DOC/DOCX (MAX. 5MB)
                            </p>
                          </div>
                          <input
                            id="motivationLetter"
                            name="motivationLetter"
                            type="file"
                            accept=".doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                      >
                        Submit Application
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                /* Thank You Message */
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your application has been submitted successfully. We'll
                    review your information and get back to you soon.
                  </p>
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplyForm;
