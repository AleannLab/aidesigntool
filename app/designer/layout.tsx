export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="-mx-4 sm:-mx-6 lg:-mx-8">{children}</div>;
}
