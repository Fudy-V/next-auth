import UserSession from "@/component/layout/user-session";
import { auth, signOut } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session) return redirect("./signin");

  return (
    <div className="flex flex-row gap-1">
      <div className="sidebar w-1/4 h-[100vh] flex flex-col gap-10 pt-3 pl-3 bg-gray-200 font-bold">
        Home
        {!session ? (
          <Link href={"./signin"} className="bg-green-200 mr-2 p-1 rounded-md">
            サインイン
          </Link>
        ) : null}
        <Link href={"./protected"} className="bg-green-200 mr-2 p-1 rounded-md">
          保護されたページ
        </Link>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="absolute bottom-5 rounded-md p-2 border border-white bg-red-500 hover:bg-red-400 text-black">
            ログアウト
          </button>
        </form>
      </div>
      <main className="flex justify-center w-3/4">
        <UserSession session={session} />
      </main>
    </div>
  );
}
