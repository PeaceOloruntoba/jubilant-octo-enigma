import Dashboard from "../pages/advocates/Dashboard.jsx"

// import HomePage from "../pages/Homepage";
import Insights from "../pages/advocates/Insights.jsx";
import NotFound from "../pages/NotFound";
import Brands from "../pages/advocates/Brands.jsx";
import Inchat from "../pages/advocates/Inchat";

export const AdvocatesRoutes = [
  {
    path: "/advocates/",
    element: <Dashboard />,
  },
  {
    path: "/advocates/chat",
    element: <Inchat/>,
  },
  {
    path: "/advocates/insights",
    element: <Insights />,
  },
  {
    path: "/advocates/brands",
    element: <Brands/>,
  },
  {
    path: "/advocates/*",
    element: <NotFound />,
  },
];
