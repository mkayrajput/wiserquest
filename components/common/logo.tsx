"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Logo = ({ showLogoLabel = false }: { showLogoLabel?: boolean }) => {
  return (
    <Link
      href={"/"}
      className="flex flex-row items-center justify-center gap-2 max-w-min"
    >
      <Avatar>
        <AvatarImage src="/logo-white.png" alt="@wiserquest" />
        <AvatarFallback>WQ</AvatarFallback>
      </Avatar>
      {showLogoLabel && (
        <span className="cursor-pointer text-lg font-semibold">wiserquest</span>
      )}
    </Link>
  );
};
