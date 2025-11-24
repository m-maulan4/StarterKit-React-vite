import { Navigate, Outlet } from "react-router";
const ProtectedRoute = () => {
  const rawData = localStorage.getItem("user");
  let user = null;
  if (rawData) {
    try {
      user = JSON.parse(rawData);
    } catch (err) {
      console.error("Error parsing user data:", err);
    }
  }
  if (!user || !user.token_user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
