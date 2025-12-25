import { useAppSelector } from "@/hooks/AppDispatch";
import type { ReactNode } from "react";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = useAppSelector((state) => state.auth.token);
  if (!token) return <Navigate to={"/login"} replace />;
  return children;
}
