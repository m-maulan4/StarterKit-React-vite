import { useLazyMeQuery } from "@/features/auth/authApi";
import { setCredentials } from "@/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/AppDispatch";
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const token = useAppSelector((state) => state.auth.token);
  const [triggerMe] = useLazyMeQuery();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = async () => {
      if (token) return;
      try {
        const result = await triggerMe().unwrap();
        dispatch(setCredentials(result));
      } catch (err) {
        navigate("/login", { replace: true });
      }
    };

    authCheck();
  }, []);

  return children;
}
