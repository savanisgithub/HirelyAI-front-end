import { Button } from "@/components/ui/button";
import { Briefcase, Home, Plus } from "lucide-react";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function AdminMainLayout() {
  const location = useLocation();
  const isJobsPage = location.pathname === "/admin/jobs";


  return (
    <div className="min-h-screen">
      {/* Admin Header */}
      <div className="border-b border-border/40 bg-card/30 backdrop-blur-sm sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between relative">
            <Link to={"/admin/jobs"} className="text-3xl font-bold text-underlay-1 hover:opacity-80 transition-opacity">
              HireSense AI
            </Link>
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h className="text-xl font-bold">Admin Dashboard</h>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/admin/jobs"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isJobsPage
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
              >
                <Home className="h-4 w-4" />
                <span className="font-medium">Job Posts</span>
              </Link>
              <Button asChild className="shadow-lg hover:shadow-xl transition-all">
                <Link to="/admin/job/create" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Post New Job
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <div className="px-6 py-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminMainLayout;
