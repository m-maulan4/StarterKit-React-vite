import { logout, setCredentials } from "@/features/auth/authSlice";
import { useLazyMeQuery } from "@/features/user/userApi";
import { useAppDispatch, useAppSelector } from "@/hooks/AppDispatch";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export default function ProtectedRoute() {
  const [trigger, { data, isSuccess, isError }] = useLazyMeQuery();
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.auth.token_user);
  const navigate = useNavigate();

  useEffect(() => {
    if (selector == null) {
      trigger();
    }
  }, [trigger, selector]);

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(
        setCredentials({
          username: data.username,
          token_user: data.token_user,
        })
      );
    }

    if (isError) {
      dispatch(logout());
      navigate("/login");
    }
  }, [isSuccess, isError, data, dispatch]);
  return <Outlet />;
}
