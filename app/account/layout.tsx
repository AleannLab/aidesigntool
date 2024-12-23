import { getSession } from "@/auth";
import { GatedPage } from "@/app/providers";

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
