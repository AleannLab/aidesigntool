import type { Metadata } from "next";
import { getSession } from "@/auth";
import { GatedPage } from "@/app/providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <GatedPage session={session}>
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">{children}</div>
    </GatedPage>
  );
}
