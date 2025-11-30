import SignInPage from "@/pages/sign-in page";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function Navigation() {
  return (
    <nav className="flex py-6 px-4 justify-between items-center font-medium backdrop-blur-sm">
      <div>
        <Link to={"/"} className="text-3xl font-bold text-underlay-1 hover:opacity-80 transition-opacity">
          HireSense AI
        </Link>
      </div>
      <div className="flex justify-center gap-x-8 items-center">
        <Link to={"/"} className="hover:text-primary transition-colors">Home</Link>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <div className="flex gap-x-4 items-center">
            <Link to={"/sign-in"} className="hover:text-primary transition-colors">Sign In</Link>
            <Button asChild className="shadow-lg hover:shadow-xl transition-all">
              <Link to={"sign-up"}>Sign Up</Link>
            </Button>
          </div>
        </SignedOut>
      </div>
    </nav>
  );
}

export default Navigation;
