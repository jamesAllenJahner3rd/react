import { useState, useEffect } from 'react';
import jobs from '../jobs.json';
import JobListing from './JobListing';

// JobListings component to display a list of job listings
const JobListings = () => {
  const recentJobs = jobs.slice(0,3);
  // State to manage the visibility of the full job description
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to toggle the visibility of the full job description
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentJobs.map((job) => (
            <JobListing
              key={job.id}
              job={job}
              showFullDescription={showFullDescription}
              toggleDescription={toggleDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;