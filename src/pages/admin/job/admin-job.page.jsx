import { Separator } from "@/components/shared/ui/separator";
import { Briefcase, MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";
import JobApplicationCard from "./components/JobApplicationCard";
import { useParams } from "react-router-dom";
import { getJobById } from "@/lib/services/api/jobs";
import { getJobApllicationsForJob } from "@/lib/services/api/jobApplications";

function AdminJobPage() {
  const [job, setJob] = useState(null);
  const [isJobLoading, setIsJobLoading] = useState(true);
  const [jobApplications, setJobApplications] = useState([]);
  const [isJobApplicationsLoading, setIsJobApplicationsLoading] =
    useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }

    getJobById(id)
      .then((data) => {
        setJob(data);
        setIsJobLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsJobLoading(false);
      });

    getJobApllicationsForJob(id)
      .then((data) => {
        setJobApplications(data);
        console.log(data);
        setIsJobApplicationsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsJobApplicationsLoading(false);
      });
  }, [id, setJob, setJobApplications]);

  if (isJobLoading || isJobApplicationsLoading) {
    return null;
  }

  return (
    <div>
      <div>
        <h2>{job?.title}</h2>
        <div className="flex items-center gap-x-4 mt-4">
          <div className="flex items-center gap-x-2">
            <Briefcase />
            <span>{job?.type}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <MapPin />
            <span>{job?.location}</span>
          </div>
        </div>
        {/* <div className="gap-x-4 flex items-center mt-4">
              <Badge>NodeJS</Badge>
              <Badge>ReactJS</Badge>
              <Badge>AWS</Badge>
            </div> */}
      </div>
      <div className="mt-4 py-4">
        <p>{job?.description}</p>
      </div>
      <Separator />
      <div className="py-8">
        <h2>Job Applications</h2>
        <div className="mt-4">
          {jobApplications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-4 rounded-lg">
              <div className="text-center">
                <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
                  <svg
                    className="w-full h-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-400 mb-2">
                  No Applications Yet
                </h3>
                <p className="text-gray-600 max-w-sm">
                  This job posting hasn't received any applications yet. Check back later to see candidate submissions.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-y-4">
              {jobApplications.map((application) => (
                application && (
                  <JobApplicationCard
                    key={application._id}
                    fullName={application.fullName}
                    _id={application._id}
                    jobId={id}
                  />
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminJobPage;
