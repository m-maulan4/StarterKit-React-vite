import { useLazyMeQuery } from "@/features/auth/authApi";
import { setCredentials } from "@/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/AppDispatch";
import { useEffect, type ReactNode } from "react";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const token = useAppSelector((state) => state.auth.token);
  const [triggerMe] = useLazyMeQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authCheck = async () => {
      if (token) return;
      try {
        const result = await triggerMe().unwrap();
        dispatch(setCredentials(result));
      } catch (err) {}
    };

    authCheck();
  }, [token, triggerMe, dispatch]);

  return children;
}
