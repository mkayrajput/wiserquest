import React from "react";

import { Logo } from "@/components/common/logo";
import { Navbar } from "@/components/sidebar/navbar";
import { UserOptions } from "@/components/sidebar/user-options";

export const Sidebar = () => {
  return (
    <div className="flex flex-col min-h-screen py-4 justify-between items-start fixed">
      <div className="h-full">
        <Logo showLogoLabel/>
        <Navbar />
      </div>
      <UserOptions />
    </div>
  );
};
