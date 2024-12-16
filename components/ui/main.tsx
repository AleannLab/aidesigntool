"use client";
import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/ui/footer";
import cn from "classnames";

export const Main = (props: PropsWithChildren) => {
  const pathname = usePathname();

  const withFooter = !["/auth", "/designer", "/account", "/"].includes(
    pathname,
  );

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

export const Head = () => {
  const pathname = usePathname();

  return (
    <head>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=675a2c7fe83fa5ca29762030"
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
      ></script>

      {pathname === "/" && <link rel="stylesheet" href="/css/home.css" />}
    </head>
  );
};
