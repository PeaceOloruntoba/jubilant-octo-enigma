import Dashboard from "../pages/Dashboard";
import HomePage from "../pages/Homepage";
import Insights from "../pages/Insights";
import NotFound from "../pages/NotFound";

export const AppRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/chat",
    element: <Dashboard />,
  },
  {
    path: "/insights",
    element: <Insights />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];
