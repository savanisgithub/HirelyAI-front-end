export const getJobApllicationsForJob = async (id) => {
  const token = await window.Clerk.session.getToken();

  const res = await fetch(
    `https://hirelyai-back-end-production.up.railway.app/jobApplications?jobId=${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getJobApplicationById = async (id) => {
  const token = await window.Clerk.session.getToken();

  const res = await fetch(
    `https://hirelyai-back-end-production.up.railway.app/jobApplications/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
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
  // const token = await window.Clerk.session.getToken();

  await fetch(
    "https://hirelyai-back-end-production.up.railway.app/jobApplications",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: userId,
        fullName: fullName,
        job,
        answers,
      }),
    }
  );
};
