import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/shared/components/layout/Navbar";
import { Footer } from "@/shared/components/layout/Footer";
import "@/layouts/PublicLayout.css";

function RouteScrollManager() {
  const location = useLocation();
  useLayoutEffect(() => {
    // If navigation contains a section hash, scroll to that section
    if (location.hash) {
      const targetId = decodeURIComponent(
        location.hash.substring(1)
      );
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
        return;
      }
    }
    // Every normal route change starts from the top
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  return null;
}
export function PublicLayout() {
  return (
    <div className="public-layout">
      <RouteScrollManager />
      <Navbar />
      <main className="public-layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}