"use client";

import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";

export function AuthProvider({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export function GatedPage({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  const router = useRouter();

  if (!session) {
    router.push("/auth");
    return;
  }

  return <>{children}</>;
}
