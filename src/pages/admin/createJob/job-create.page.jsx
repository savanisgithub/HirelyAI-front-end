import { Input } from "@/components/shared/ui/input";
import { Textarea } from "@/components/shared/ui/textarea";
import { Button } from "@/components/ui/button";
import { createJob } from "@/lib/services/api/jobs";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function AdminJobCreatePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    location: "",
    q1: "",
    q2: "",
    q3: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await createJob({
        title: formData.title,
        type: formData.type,
        description: formData.description,
        location: formData.location,
        questions: [formData.q1, formData.q2, formData.q3],
      });
      
      // Show success message
      toast.success("Job posted successfully!");
      
      // Navigate to job posts page
      navigate("/admin/jobs");
    } catch (err) {
      setError("Failed to create job. Please try again.");
      toast.error("Failed to create job. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="py-8">
        <h2>Create A Job Posting</h2>
      </div>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      <form className="py-8" onSubmit={handleSubmit}>
        <div>
          <h3>Title</h3>
          <Input
            className="mt-2"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-4">
          <h3>Description</h3>
          <Input
            className="mt-2"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-4">
          <h3>Type</h3>
          <Input
            className="mt-2"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-4">
          <h3>Location</h3>
          <Input
            className="mt-2"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-4">
          <h3>Question 1</h3>
          <Textarea
            className="mt-2"
            name={"q1"}
            value={formData.q1}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-4">
          <h3>Question 2</h3>
          <Textarea
            className="mt-2"
            name={"q2"}
            value={formData.q2}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-4">
          <h3>Question 3</h3>
          <Textarea
            className="mt-2"
            name={"q3"}
            value={formData.q3}
            onChange={handleChange}
            required
          />
        </div>

        <Button 
          type="submit" 
          className="mt-8 bg-card text-card-foreground"
          disabled={loading}
        >
          {loading ? "Creating..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}

export default AdminJobCreatePage;
