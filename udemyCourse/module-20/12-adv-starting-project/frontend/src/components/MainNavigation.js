import { NavLink } from "react-router-dom"; // For navigation if using React Router
import { HomeIcon, CalendarIcon } from "@heroicons/react/outline"; // Tailwind Heroicons for icons

function MainNavigation() {
  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-lg shadow-lg px-6 py-3 flex items-center gap-6 z-50">
      {/* Home Link */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-2 p-2 rounded-md ${
            isActive ? "bg-gray-700" : "hover:bg-gray-800"
          }`
        }
      >
        <HomeIcon className="h-5 w-5" />
        <span>Home</span>
      </NavLink>

      {/* Event Link */}
      <NavLink
        to="events"
        className={({ isActive }) =>
          `flex items-center gap-2 p-2 rounded-md ${
            isActive ? "bg-gray-700" : "hover:bg-gray-800"
          }`
        }
      >
        <CalendarIcon className="h-5 w-5" />
        <span>Event</span>
      </NavLink>
    </nav>
  );
}
export default MainNavigation;
