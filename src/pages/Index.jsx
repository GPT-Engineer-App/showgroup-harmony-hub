import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#E25B45] p-4">
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Velkommen til Rævkroklosjen</h1>
        <div className="space-x-4">
          <Button asChild className="bg-white text-[#E25B45] hover:bg-gray-200">
            <Link to="/events">Upcoming Events</Link>
          </Button>
          <Button asChild variant="secondary" className="bg-transparent border-white text-white hover:bg-white/20">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
