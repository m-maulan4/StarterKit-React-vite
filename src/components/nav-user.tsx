import { LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { logout } from "@/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/AppDispatch";
import { useNavigate } from "react-router";
import { useLazyLogoutQuery } from "@/features/auth/authApi";

export function NavUser() {
  const { isMobile } = useSidebar();
  const user = useAppSelector((state) => state.auth.username) ?? "user";
  const [logoutApi] = useLazyLogoutQuery();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logoutApi();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      dispatch(logout());
      console.error("Failed to logout:", error);
    }
  };
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground border gap-3 cursor-pointer"
              tooltip={user}
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user} alt={user} />
                <AvatarFallback className="rounded-lg">
                  {user?.slice(0, 1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm">
                <span className="truncate text-xs">Wellcome</span>
                <span className="truncate font-semibold capitalize">
                  {user}
                </span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
