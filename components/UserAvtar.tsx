import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default function UserAvtar() {
  return (
    <Avatar>
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        className={cn("cursor-pointer")}
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
