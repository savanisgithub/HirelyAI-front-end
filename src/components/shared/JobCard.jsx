import { Link } from "react-router-dom";
import { Briefcase, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

function JobCard(props) {
  return (
    <Link
      to={props.isAdmin ? `/admin/job/${props._id}` : `/job/${props._id}`}
      className="block"
    >
      <Card>
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="gap-x-4">
          <div className="flex items-center gap-x-2">
            <Briefcase />
            <span>{props.type}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <MapPin />
            <span>{props.location}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default JobCard;
