import JobCard from "@/components/shared/JobCard";
import { getJobs } from "@/lib/services/api/jobs";
// import axios from "axios";
import { useEffect, useState } from "react";

function JobSection() {
  const [jobs, setJobs] = useState([]);
  const [isJobsLoading, setIsJobsLoading] = useState(false);
  const [isJobsError, setIsJobsError] = useState(false);

  // useEffect(() => {
  //   const getJobs = async () => {
  //     const response = await axios.get("http://localhost:8000/jobs");
  //     console.log(response);
  //     setJobs(response.data);
  //   };

  //   getJobs();
  // }, []);

  useEffect(() => {
    setIsJobsLoading(true);
    getJobs()
      .then((data) => {
        setJobs(data);
        console.log(data);
      })
      .catch((err) => {
        setIsJobsError(true);
        console.log(err);
      })
      .finally(() => {
        setIsJobsLoading(false);
      });
  }, []);

  if (isJobsLoading) {
    return (
      <section className="py-16">
        <div className="mb-8">
          <h2 className="mb-2">Available Positions</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded"></div>
        </div>
        <div className="flex items-center justify-center py-12">
          <div className="animate-pulse text-muted-foreground">Loading opportunities...</div>
        </div>
      </section>
    );
  }

  if (isJobsError) {
    return (
      <section className="py-16">
        <div className="mb-8">
          <h2 className="mb-2">Available Positions</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded"></div>
        </div>
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
          <p className="text-destructive font-medium">Unable to load job listings. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="mb-10">
        <h2 className="mb-2">Available Positions</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded"></div>
        <p className="text-muted-foreground mt-3">Explore {jobs.length} open {jobs.length === 1 ? 'position' : 'positions'}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => {
          return (
            <JobCard
              key={job._id}
              title={job.title}
              _id={job._id}
              type={job.type}
              location={job.location}
            />
          );
        })}
      </div>
    </section>
  );
}

export default JobSection;
