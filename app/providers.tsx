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
  const router = useRouter();

  if (!session) {
    router.push("/auth");
    return;
  }

  return <SessionProvider session={session}>{children}</SessionProvider>;
}
