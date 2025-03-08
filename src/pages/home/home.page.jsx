// import {Button} from "@/components/ui/button";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"
// import Navigation from "@/components/shared/Navigation";
import Hero from "./components/Hero";
import JobSection from "./components/JobSection";



function HomePage() {
  return (
    <main className='p-4 '>
      <Hero/>
      <JobSection/>
    </main> 
  );
}

export default HomePage;
 