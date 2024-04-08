"use client";

import { Sidebar } from "@/components/sidebar/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-6xl bg-background block m-auto min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
        <div className="col-span-2 h-full hidden lg:block">
          <Sidebar />
        </div>
        <div className="md:col-span-12 lg:col-span-10 h-full bg-background">
          {children}
        </div>
      </div>
    </div>
  );
}
