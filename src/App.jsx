import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import RootLayout from "./layouts/RootLayout";
import AppGuard from "./guards/AppGuard";
import AuthLayout from "./layouts/AuthLayout";
import { AuthRoutes } from "./routes/Auth.routes";
import { AdvocatesRoutes } from "./routes/Advocates.routes";
import { BrandsRoutes } from "./routes/Brands.routes";
import { AdminRoutes } from "./routes/Admin.routes";
import NotFound from "./pages/NotFound";
import AdvocateLayout from "./layouts/AdvocateLayout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppGuard />,
    },
    {
      path: "/advocates",
      element: <AppGuard />,
      children: [
        {
          element: <AdvocateLayout />,
          children: AdvocatesRoutes,
        },
      ],
    },
    {
      path: "/brands",
      element: <AppGuard />,
      children: [
        {
          element: <RootLayout />,
          children: BrandsRoutes,
        },
      ],
    },
    {
      path: "/admin",
      element: <AppGuard />,
      children: [
        {
          element: <RootLayout />,
          children: AdminRoutes,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: AuthRoutes,
    },
  ]);

  return (
    <>
      <Toaster position="top-right" richColors />
      <RouterProvider router={router} />
    </>
  );
}
