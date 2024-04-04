import { auth, signOut } from "@/auth";
import { UserOptions } from "@/components/sidebar/user-options";

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div className="container">
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
  );
}
