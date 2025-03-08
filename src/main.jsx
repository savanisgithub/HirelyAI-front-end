import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/home/home.page.jsx";
import JobPage from "./pages/job/job.page.jsx";
import RootLayout from "./layouts/RootLayout";
import SignInPage from "./pages/sign-in page";
import SignUpPage from "./pages/sign-up page";
import MainLayout from "./layouts/main.layout";
import AdminMainLayout from "./layouts/admin.layout";
import AdminJobPostsPage from "./pages/admin/jobPosts/admin-job-posts.page";
import AdminJobCreatePage from "./pages/admin/createJob/job-create.page";
import AdminJobApplicationPage from "./pages/admin/jobApplication/admin-job-application.page";
import AdminJobPage from "./pages/admin/job/admin-job.page";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <RootLayout />, //a layout that share in the whole application
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Homepage />,
          },

          {
            path: "/job/:id",
            element: <JobPage />,
          },
        ],
      },
      {
        path: "admin",
        element: <AdminMainLayout />,
        children: [
          {
            path: "jobs",
            element: <AdminJobPostsPage />,
          },
          {
            path: "job/create",
            element: <AdminJobCreatePage />,
          },
          {
            path: "job/:id",
            element: <AdminJobPage />,
          },
          {
            path: "job/:id/application/:applicationId",
            element: <AdminJobApplicationPage />,
          },
        ],
      },

      {
        path: "/sign-in",
        element: <SignInPage />,
      },

      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      {/*A thing that can catch and show all the mistekes and errors we do in react app When we use advanced react*/}
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
