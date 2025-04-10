import Dashboard from "../pages/Dashboard";
// import HomePage from "../pages/Homepage";
import Insights from "../pages/brands/Insights.jsx";
import Inchat from "../pages/brands/Inchat";
import Advocates from "../pages/brands/advocates.jsx";
import NotFound from "../pages/NotFound";

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
  
  {
    path: "/brands/advocates",
    element: <Advocates/>,
  },


];