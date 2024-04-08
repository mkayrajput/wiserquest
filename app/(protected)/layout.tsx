import { Sidebar } from "@/components/sidebar/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-6xl bg-background block m-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 grid-rows-1 gap-4 w-full">
        <div className="col-span-2 h-full hidden md:block">
          <Sidebar />
        </div>
        <div className="col-span-10 h-full bg-background">{children}</div>
      </div>
    </main>
  );
}
