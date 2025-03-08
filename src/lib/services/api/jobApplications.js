export const getJobApllicationsForJob = async (id) => {
  const res = await fetch(`http://localhost:8000/jobApplications?jobId=${id}`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
};

export const getJobApplicationById = async (id) => {
  const res = await fetch(`http://localhost:8000/jobApplications/${id}`, {
    method: "GET",
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export const createJobApplication = async ({
  userId,
  fullName,
  job,
  answers,
}) => {
  const token = await window.__clerk_domain.session.getToken();

  await fetch("http://localhost:8000/jobApplications", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      userId: userId,
      fullName: fullName,
      job,
      answers,
    }),
  });
};
