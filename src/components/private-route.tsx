import { useLazyMeQuery } from "@/features/auth/authApi";
import { setCredentials } from "@/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/AppDispatch";
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = useAppSelector((state) => state.auth.token);
  const [triggerMe, { isSuccess, data }] = useLazyMeQuery();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) return;
    const AuthCheck = async () => {
      try {
        await triggerMe();
        if (isSuccess && data) {
          dispatch(setCredentials(data));
        }
      } catch (error) {
        navigate("/login", { replace: true });
      }
    };
    AuthCheck();
  }, [triggerMe, data, isSuccess, dispatch]);
  return children;
}
