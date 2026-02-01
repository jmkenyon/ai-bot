"use client";

import {
  UserButton,
  OrganizationSwitcher,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <SignedIn>
        <div className="flex min-h-svh flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>

          <div className="flex gap-4">
            <UserButton />
            <OrganizationSwitcher hidePersonal />
          </div>

          <p className="text-muted-foreground">
            Select an organization to manage your AI assistant.
          </p>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="flex min-h-svh flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">You are not signed in</h1>
          <SignInButton />
        </div>
      </SignedOut>
    </>
  );
}
