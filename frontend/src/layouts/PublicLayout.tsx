
import { Outlet } from "react-router-dom";

import { Navbar } from "@/shared/components/layout/Navbar";
import { Footer } from "@/shared/components/layout/Footer";
import "@/layouts/PublicLayout.css";
export function PublicLayout() {
  return (
    <div className="public-layout">
      <Navbar />

      <main className="public-layout__main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
