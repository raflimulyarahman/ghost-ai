import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";

/** Renders Clerk's sign-up flow at the configured public route. */
export default function SignUpPage() {
  return (
    <Suspense>
      <SignUp />
    </Suspense>
  );
}
