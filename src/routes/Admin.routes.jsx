import Dashboard from "../pages/Dashboard";
import HomePage from "../pages/Homepage";
import Insights from "../pages/Insights";
import NotFound from "../pages/NotFound";

export const AdminRoutes = [
  {
    path: "/admin/",
    element: <Dashboard />,
  },
  {
    path: "/admin/chat",
    element: <Dashboard />,
  },
  {
    path: "/admin/insights",
    element: <Insights />,
  },
  {
    path: "/admin/*",
    element: <NotFound />,
  },
];
