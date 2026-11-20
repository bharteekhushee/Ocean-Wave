import { createBrowserRouter, Navigate } from "react-router-dom";
import { PublicLayout } from "@/layouts/PublicLayout";
import { ContactPage } from "@/features/contact";
import { Homepage } from "@/features/home";
export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },

      // Future public pages will be added here.
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
