import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle";
import Profile from "./Profile";
import { SidebarTrigger } from "./ui/sidebar";

export default function Navbar() {
  return (
    <nav className="border h-10 flex justify-between items-center p-6">
      <SidebarTrigger />
      <div className="flex gap-4 items-center">
        <Link to="/">Dashboard</Link>
        <ThemeToggle />
        <Profile />
      </div>
    </nav>
  );
}
