import Dashboard from "../pages/Dashboard";
import HomePage from "../pages/Homepage";
import Insights from "../pages/Insights";
import NotFound from "../pages/NotFound";

export const AdvocatesRoutes = [
  {
    path: "/advocates/",
    element: <Dashboard />,
  },
  {
    path: "/advocates/chat",
    element: <Dashboard />,
  },
  {
    path: "/advocates/insights",
    element: <Insights />,
  },
  {
    path: "/advocates/*",
    element: <NotFound />,
  },
];
