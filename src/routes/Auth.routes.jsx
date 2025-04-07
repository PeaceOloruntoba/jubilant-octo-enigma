import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import NotFound from "../pages/NotFound";

export const AuthRoutes = [
  {
    path: "/auth/signup",
    element: <Signup />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/*",
    element: <NotFound />,
  },
];
