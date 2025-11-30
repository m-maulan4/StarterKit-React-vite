import { logout, setCredentials } from "@/features/auth/authSlice";
import { useLazyMeQuery } from "@/features/user/userApi";
import { useAppDispatch } from "@/hooks/AppDispatch";
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const [trigger, { data, isSuccess, isError }] = useLazyMeQuery();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token_app") || "{}")?.token;
    if (!token) trigger();
  }, [trigger]);

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(
        setCredentials({
          username: data.username,
          token_user: data.token_user,
        })
      );
    } else if (isError) {
      dispatch(logout());
      navigate("/login", { replace: true });
      toast.warning("Login terlebih dahulu");
    }
  }, [isSuccess, isError, data, dispatch]);
  return <>{children}</>;
}
