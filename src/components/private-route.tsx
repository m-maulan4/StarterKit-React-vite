import { useLazyMeQuery } from "@/features/auth/authApi";
import { logout, setCredentials } from "@/features/auth/authSlice";
import { useAppDispatch } from "@/hooks/AppDispatch";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export default function SessionRestore() {
  const [trigger, { data, isSuccess, isError }] = useLazyMeQuery();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Otomatis cek sesi saat aplikasi dimuat
    trigger();
  }, [trigger]);

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(
        setCredentials({
          username: data.username,
          isLogin: true,
        })
      );
    }

    if (isError) {
      dispatch(logout());
      navigate("/login");
    }
  }, [isSuccess, isError, data, dispatch]);

  // Render children setelah selesai cek sesi
  return <Outlet />;
}
