import Dashboard from "../pages/Dashboard";
// import HomePage from "../pages/Homepage";
import Insights from "../pages/Insights";
import NotFound from "../pages/NotFound";
import Inchat from "../pages/brands/Inchat";

export const BrandsRoutes = [
  {
    path: "/brands/",
    element: <Dashboard />,
  },
  {
    path: "/brands/chat",
    element: <Inchat />,
  },
  {
    path: "/brands/insights",
    element: <Insights />,
  },
  {
    path: "/brands/*",
    element: <NotFound />,
  },
];
