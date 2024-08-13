import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Welcome to The Showgroup</h1>
        <p className="text-2xl mb-8">Experience the magic of live performance</p>
        <div className="space-x-4">
          <Button asChild>
            <Link to="/events">Upcoming Events</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
