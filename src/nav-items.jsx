import { Home, Calendar, Users, ShoppingBag } from "lucide-react";
import Index from "./pages/Index.jsx";
import Events from "./pages/Events.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Hjem",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Events",
    to: "/events",
    icon: <Calendar className="h-4 w-4" />,
    page: <Events />,
  },
  {
    title: "Om oss",
    to: "/about",
    icon: <Users className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Shop",
    to: "/shop",
    icon: <ShoppingBag className="h-4 w-4" />,
    page: <Shop />,
  },
];
