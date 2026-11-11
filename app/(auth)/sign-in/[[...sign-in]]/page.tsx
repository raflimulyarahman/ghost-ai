import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";

/** Renders Clerk's sign-in flow at the configured public route. */
export default function SignInPage() {
  return (
    <Suspense>
      <SignIn />
    </Suspense>
  );
}
