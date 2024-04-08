import { Github, LifeBuoy, LogOut } from "lucide-react";
import UserAvtar from "@/components/common/UserAvtar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const UserOptions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex flex-row gap-2 items-center cursor-pointer">
          <UserAvtar />
          <div className="flex flex-col justify-center">
            <h4 className="text-base font-medium">Mahender Kumar</h4>
            <p className="text-sm font-medium text-foreground/85">
              example.email.com
            </p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <DropdownMenuGroup></DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
