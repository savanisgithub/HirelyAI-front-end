import { Button } from "@/components/ui/button";
import { Input } from "@/components/shared/ui/input";
import { Label } from "@/components/shared/ui/label";
import { Separator } from "@/components/shared/ui/separator";
import { Textarea } from "@/components/shared/ui/textarea";
import { Briefcase, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { createJob, getJobById } from "@/lib/services/api/jobs";
import { useUser } from "@clerk/clerk-react";

function JobPage() {
  const [job, setJob] = useState(null);
  const params = useParams();
  const { isLoaded, isSignedIn, user } = useUser();
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    fullName: "",
    a1: "",
    a2: "",
    a3: "",
  });
  // test
  
  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (!isSignedIn) {
      return <Navigate to={"/sign-in"} />;
    }

    if (!id) return;

    getJobById(id)
      .then((data) => {
        setJob(data);
        setIsLoading(false)
      })
      .catch((err) => { })
      .finally(() => { });
  }, [id, isLoaded, isSignedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    createJob({
      fullName: formData.fullName,
      answers: [formData.a1, formData.a2, formData.a3],
      job: params.id,
      userId: user.id,
    });
  };


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
