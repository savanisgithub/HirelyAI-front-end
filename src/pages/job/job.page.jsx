import { Button } from "@/components/ui/button";
import { Input } from "@/components/shared/ui/input";
import { Label } from "@/components/shared/ui/label";
import { Separator } from "@/components/shared/ui/separator";
import { Textarea } from "@/components/shared/ui/textarea";
import { Briefcase, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
// import { createJobApplication } from "@/lib/services/api/jobApplications";

const getJob = async (id) => {
  const token = await window.Clerk.session.getToken();

  const res = await fetch(
    `hirelyai-back-end-production.up.railway.app/jobs/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const job = await res.json();
  return job;
};

const createJob = async (jobApplication) => {
  const token = await window.Clerk.session.getToken();

  await fetch(`hirelyai-back-end-production.up.railway.app/jobApplications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(jobApplication),
  });
};

function JobPage() {
  const [job, setJob] = useState(null);
  const params = useParams();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    getJob(params.id)
      .then((data) => {
        setJob(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, [params]);

  const [formData, setFormData] = useState({
    fullName: "",
    a1: "",
    a2: "",
    a3: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createJob({
        fullName: formData.fullName,
        answers: [formData.a1, formData.a2, formData.a3],
        job: params.id,
        userId: user.id,
      });

      alert("Job application submitted successfully!");

      setTimeout(() => {
        navigate(-1); // Redirects to the previous page
      }, 2000); // Show the message briefly before redirecting
    } catch (error) {
      console.error("Submission failed:", error);
      setMessage("Failed to submit job application.");
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
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
      </div>
      <div className="mt-4 py-4">
        <p>{job?.description}</p>
      </div>
      <Separator />

      <form className=" flex flex-col gap-y-4 py-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-2 ">
          <Label className="font-bold">Full Name</Label>
          <Input
            required
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label className="font-bold">{job?.questions[0]}</Label>
          <Textarea
            required
            value={formData.a1}
            onChange={(e) => setFormData({ ...formData, a1: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label className="font-bold">{job?.questions[1]}</Label>
          <Textarea
            required
            value={formData.a2}
            onChange={(e) => setFormData({ ...formData, a2: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label className="font-bold">{job?.questions[2]}</Label>
          <Textarea
            required
            value={formData.a3}
            onChange={(e) => setFormData({ ...formData, a3: e.target.value })}
          />
        </div>

        <div className="flex gap-x-4 items-center">
          <Button type="submit" className="bg-card text-card-foreground ">
            Submit
          </Button>
          <Button
            type="button"
            className="w-fit"
            variant="outline"
            onClick={() =>
              setFormData({
                fullName: "",
                a1: "",
                a2: "",
                a3: "",
              })
            }
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default JobPage;
