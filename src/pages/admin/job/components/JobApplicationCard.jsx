import { Card, CardHeader, CardTitle } from "@/components/shared/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function JobApplicationCard({ _id, jobId, fullName }) {
  return (
    <Link to={`/admin/job/${jobId}/application/${_id}`} className="block">
      <Card>
        <CardHeader className="flex-row justify-between items-center">
          <CardTitle>{fullName}</CardTitle>
          <Button>View</Button>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default JobApplicationCard;
