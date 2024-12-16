import type { Metadata } from "next";
import "./globals.css";
import { Head, Main } from "@/components/ui/main";
import { AuthProvider } from "./providers";
import { getSession } from "@/auth";

export const metadata: Metadata = {
  title: "AI Lingerie Design Tool | Create Custom Lingerie Designs Instantly",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <html lang="en">
      <Head />
      <body>
        <Main>
          <AuthProvider session={session}>{children}</AuthProvider>
        </Main>
      </body>
    </html>
  );
}
