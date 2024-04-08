import { auth, signOut } from "@/auth";

import {
  ContentWrapper,
  MainPageWrapper,
  RightSidebarWrapper,
} from "@/components/common/page-wrappers";


// this componet is temporary
export default async function SettingsPage() {
  const session = await auth();
  
  return (
    <MainPageWrapper>
      <ContentWrapper>
        <div className="container break-words">
          {JSON.stringify(session)}
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit">Sign Out</button>
          </form>
        </div>
      </ContentWrapper>
      <RightSidebarWrapper>
        <span>Hello</span>
      </RightSidebarWrapper>
    </MainPageWrapper>
  );
}
