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
      className="block group"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 bg-card/50 backdrop-blur">
        <CardHeader className="pb-4">
          <CardTitle className="group-hover:text-primary transition-colors ">{props.title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-4">
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
              <Briefcase className="w-4 h-4" />
              <span>{props.type}</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
              <MapPin className="w-4 h-4" />
              <span>{props.location}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <span className="text-sm text-primary font-medium group-hover:underline">View Details →</span>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default JobCard;
