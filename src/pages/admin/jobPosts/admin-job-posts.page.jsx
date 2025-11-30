import { Briefcase, Users, TrendingUp } from "lucide-react";
import JobPostsSection from "./components/JobPostsSection";
import { useEffect, useState } from "react";
import { getJobs } from "@/lib/services/api/jobs";
import { getAllJobApplications } from "@/lib/services/api/jobApplications";

function AdminJobPostsPage() {
  const [jobs, setJobs] = useState([]);
  const [jobApplications, setJobApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getJobs(),
      getAllJobApplications()
    ])
      .then(([jobsData, applicationsData]) => {
        setJobs(jobsData);
        setJobApplications(applicationsData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const stats = [
    {
      title: "Total Jobs",
      value: jobs.length,
      icon: Briefcase,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Active Postings",
      value: jobs.length,
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Applications",
      value: jobApplications.length,
      icon: Users,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <div>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-card/50 backdrop-blur border border-border/40 rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold">
                    {loading ? "..." : stat.value}
                  </p>
                </div>
                <div className={`${stat.bgColor} p-3 rounded-lg`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Job Posts Section */}
      <JobPostsSection jobs={jobs} loading={loading} />
    </div>
  );
}

export default AdminJobPostsPage;
