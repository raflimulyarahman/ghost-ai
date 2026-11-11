import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

/** Redirects visitors to their authenticated workspace or the sign-in route. */
export default async function Home() {
  const { userId } = await auth();

  redirect(userId ? "/editor" : "/sign-in");
}
