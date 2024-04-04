import React from "react";

import { Logo } from "@/components/common/logo";
import { Navbar } from "@/components/sidebar/navbar";
import { UserOptions } from "@/components/sidebar/user-options";

export const Sidebar = () => {
  return (
    <div className="flex flex-col min-h-96 justify-between items-start">
      <div className="h-full">
        <Logo />
        <Navbar />
      </div>
      <UserOptions />
    </div>
  );
};
