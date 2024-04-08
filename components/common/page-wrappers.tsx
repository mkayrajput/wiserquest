//This wrapper is for main page outer layout

export const MainPageWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
      {children}
    </main>
  );
};

//This wrapper is for main content in page
export const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="col-span-1 md:col-span-9 py-4 h-max bg-background px-2 md:px-0">
      {children}
    </div>
  );
};

//Right sidebar wrapper
export const RightSidebarWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="md:col-span-3 lg:col-span-3 min-h-screen  h-full hidden md:block py-4">
      <div className="w-full ">{children}</div>
    </div>
  );
};
