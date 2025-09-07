import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";
import About from "@/pages/About";
import Analytics from "@/pages/Analytics";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: About,
        path: "about",
      },
      {
        element: "This is the contact us page",
        path: "contact",
      },
    ],
  },
  {
    Component: AdminLayout,
    path: "/admin",
    children: [
      {
        Component:Analytics,
        path:"analytics"
      }
    ],
  },
]);
