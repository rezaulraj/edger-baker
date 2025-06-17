import React from "react";
import HeroPageJob from "./HeroPageJob";
import JobOpening from "./JobOpening";
import JobList from "./JobList";

const JobPage = () => {
  return (
    <div className="min-h-screen">
      <HeroPageJob />

      <JobOpening />
      <JobList />
    </div>
  );
};

export default JobPage;
