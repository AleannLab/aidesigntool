"use client";
import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/ui/footer";
import cn from "classnames";

export const Main = (props: PropsWithChildren) => {
  const pathname = usePathname();

  const withFooter = !["/auth", "/designer", "/account"].includes(pathname);

  return (
    <>
      <main
        className={cn(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`, {})}
        style={{ minHeight: "calc(100vh - 250px)" }}
      >
        {props.children}
      </main>

      {withFooter && <Footer />}
    </>
  );
};
