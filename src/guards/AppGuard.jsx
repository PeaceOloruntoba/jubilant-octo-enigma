import { Navigate } from "react-router-dom";
import { toast } from "sonner";


export default function AppGuard() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    toast.warning("Unauthorised, Please login!")
    return <Navigate to="/auth/login" replace />;
  }

  switch (user.role) {
    case "advocate":
      return <Navigate to="/advocates" replace />;
    case "brand":
      return <Navigate to="/brands" replace />;
    case "admin":
      return <Navigate to="/admin" replace />;
    default:
      return <Navigate to="/auth/login" replace />;
  }
}
