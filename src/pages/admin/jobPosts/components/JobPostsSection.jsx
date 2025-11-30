import JobCard from "@/components/shared/JobCard";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function JobPostsSection({ jobs = [], loading = false }) {
  if (loading) {
    return (
      <section>
        <div className="mb-6">
          <h2 className="mb-2">Your Job Postings</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent rounded"></div>
        </div>
        <div className="flex items-center justify-center py-12">
          <div className="animate-pulse text-muted-foreground">Loading job postings...</div>
        </div>
      </section>
    );
  }

  if (jobs.length === 0) {
    return (
      <section>
        <div className="mb-6">
          <h2 className="mb-2">Your Job Postings</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent rounded"></div>
        </div>
        <div className="flex flex-col items-center justify-center py-16 px-4 bg-card/30 rounded-xl border-2 border-dashed border-border/40">
          <div className="mx-auto h-16 w-16 text-muted-foreground/50 mb-4">
            <FileText className="w-full h-full" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No Job Postings Yet</h3>
          <p className="text-muted-foreground text-center max-w-sm mb-6">
            Start building your team by creating your first job posting.
          </p>
          <Button asChild>
            <Link to="/admin/job/create">Create Your First Job</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="mb-6">
        <h2 className="mb-2">Current Job Postings</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent rounded"></div>
        <p className="text-muted-foreground mt-3">{jobs.length} active {jobs.length === 1 ? 'posting' : 'postings'}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => {
          return (
            <JobCard
              key={job._id}
              title={job.title}
              type={job.type}
              location={job.location}
              _id={job._id}
              isAdmin={true}
            />
          );
        })}
      </div>
    </section>
  );
}

export default JobPostsSection;
