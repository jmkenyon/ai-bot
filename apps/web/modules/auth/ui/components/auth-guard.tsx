"use client"

import { Authenticated, Unauthenticated, AuthLoading } from "convex/react"
import { AuthLayout } from "../layouts/auth-layout"
import { SignInVIew} from "../views/sign-in-view"

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthLayout>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <SignInVIew />
      </Unauthenticated>
      <AuthLoading>
        <div>Loading...</div>
      </AuthLoading>
    </AuthLayout>
  )
}