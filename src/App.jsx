import { Outlet } from "react-router";
import AppSidebar from "./components/AppSidebar";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeProvider";
import { SidebarProvider } from "./components/ui/sidebar";
import { CookiesProvider } from "react-cookie";
import Cookies from "js-cookie";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(() => {
    const saved = Cookies.get("sidebar-open");
    return saved ? JSON.parse(saved) : true;
  });

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
    Cookies.set("sidebar-open", newOpen, { expires: 10 });
  };

  return (
    <ThemeProvider>
      <CookiesProvider>
        <SidebarProvider open={open} onOpenChange={handleOpenChange}>
          <AppSidebar />
          <main className="w-screen h-screen flex flex-col overflow-hidden">
            <Navbar />
            <div className="p-4 flex-1 min-h-0 overflow-hidden">
              <Outlet />
            </div>
          </main>
        </SidebarProvider>
      </CookiesProvider>
    </ThemeProvider>
  );
}
