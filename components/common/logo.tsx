"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex flex-row items-center justify-center gap-2 max-w-min"
    >
      <Avatar>
        <AvatarImage src="/logo-white.png" alt="@wiserquest" />
        <AvatarFallback>WQ</AvatarFallback>
      </Avatar>
      <span className="cursor-pointer text-lg font-semibold">wiserquest</span>
    </Link>
  );
};
