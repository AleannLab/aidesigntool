import type { Metadata } from "next";
import "./globals.css";
import { Head, Main } from "@/components/ui/main";
import { AuthProvider } from "./providers";
import { getSession } from "@/auth";

export const metadata: Metadata = {
  title: "AI Lingerie Design Tool | Create Custom Lingerie Designs Instantly",
  description: "",
  icons: "images/favicon.ico",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <html
      data-wf-page="675a2c7fe83fa5ca2976202f"
      data-wf-site="675a2c7fe83fa5ca29762030"
      lang="en"
    >
      <Head />
      <body>
        <Main>
          <AuthProvider session={session}>{children}</AuthProvider>
        </Main>
      </body>
    </html>
  );
}
