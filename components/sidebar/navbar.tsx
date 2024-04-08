"use client";

import React from "react";
import Link from "next/link";
import { Home, Bell, User } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <NavigationMenu className={cn("my-4")} orientation="vertical">
      <NavigationMenuList className={cn("flex-col")}>
        <NavigationMenuItem className={cn("w-full")}>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Home className="h-5 w-5 mr-2" />
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className={cn("w-full")}>
          <Link href="/notifications" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Bell className="h-5 w-5 mr-2" />
              Notifications
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className={cn("w-full")}>
          <Link href="/profile" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <User className="h-5 w-5 mr-2" />
              Profile
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
