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
  //     const response = await axios.get("http://hirelyai-back-end-production.up.railway.app/jobs");
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
      })
      .finally(() => {
        setIsJobsLoading(false);
      });
  }, []);

  if (isJobsLoading) {
    return (
      <section className="py-8">
        <h2>Available Jobs</h2>
        <div className="mt-4 flex flex-col gap-y-8">
          <h3>Loading...</h3>
        </div>
      </section>
    );
  }

  if (isJobsError) {
    return (
      <section className="py-8">
        <h2>Available Jobs</h2>
        <div className="mt-4 flex flex-col gap-y-8">
          <h1>Error fetching data</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <h2>Available Jobs</h2>
      <div className="mt-4 flex flex-col gap-y-8">
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
