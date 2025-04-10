import Dashboard from "../pages/advocates/Dashboard.jsx"

// import HomePage from "../pages/Homepage";
import Insights from "../pages/advocates/Insights.jsx";
import NotFound from "../pages/NotFound";
import Brands from "../pages/advocates/Brands.jsx";
import Inchat from "../pages/advocates/Inchat";
import BrandsprofilePage from "../pages/advocates/BrandsprofilePage.jsx";

import Inacademy from "../pages/advocates/Inacademy.jsx";

import Intelligencepage from "../pages/advocates/Intelligencepage.jsx";
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
    path: "/advocates/ncademy",
    element: <Inacademy/>,
  },

  {
    path: "/advocates/insights",
    element: <Insights />,
  },

  {
    path: "/advocates/intelligence",
    element: <Intelligencepage/>,
  },

  {
    path: "/advocates/brands",
    element: <Brands/>,
  },

  {
    path: "/advocates/brands/:brandId",
    element: <BrandsprofilePage/>,
  },

  {
    path: "/advocates/*",
    element: <NotFound />,
  },
];
