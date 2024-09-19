import {
  Settings,
  UserIcon,
  Mail,
  RectangleEllipsis,
  LogOut,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth } from "@hooks";
import { useNavigate } from "@tanstack/react-router";

export function DropdownMenuInfo() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  async function handleLogout() {
    signOut();
    await navigate({
      to: "/painel/login",
    });
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Settings className="h-7 w-7 cursor-pointer dark:text-light" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="z-[9999999] bg-white dark:bg-dark"
      >
        <DropdownMenuLabel className="dark:text-light">
          Configurações
        </DropdownMenuLabel>

        {user?.name && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="flex gap-2  items-center"
              onSelect={(e) => e.preventDefault()}
            >
              <UserIcon className="h-5 w-5 dark:text-light" />
              <span className="dark:text-light">{user.name}</span>
            </DropdownMenuItem>
          </>
        )}

        {user?.username && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={(e) => e.preventDefault()}
              className="flex gap-2 items-center"
            >
              <Mail className="h-5 w-5 dark:text-light" />
              <span className="dark:text-light">{user.username}</span>
            </DropdownMenuItem>
          </>
        )}
        {user?.nickname && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={(e) => e.preventDefault()}
              className="flex gap-2 items-center"
            >
              <RectangleEllipsis className="h-5 w-5 dark:text-light" />
              <span className="dark:text-light">{user.nickname}</span>
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex cursor-pointer gap-2 items-center"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 dark:text-light" />
          <span className="dark:text-light">Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
