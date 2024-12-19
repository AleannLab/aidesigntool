"use client";
import React, { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/ui/footer";
import cn from "classnames";

export const Main = (props: PropsWithChildren) => {
  const pathname = usePathname();

  const withFooter = ["/pricing", "/auth"].includes(pathname);

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

      {pathname === "/privacy-policy" && (
        <>
          <meta charSet="utf-8" />
          <title>Privacy Policy</title>
          <meta content="Privacy Policy" property="og:title" />
          <meta content="Privacy Policy" property="twitter:title" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link href="css/normalize.css" rel="stylesheet" type="text/css" />
          <link href="css/webflow.css" rel="stylesheet" type="text/css" />
          <link
            href="css/atelier-ai-81cfbc8d2a30aaff17751f602043.webflow.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="images/favicon.ico"
            rel="shortcut icon"
            type="image/x-icon"
          />
          <link href="images/webclip.jpg" rel="apple-touch-icon" />
        </>
      )}
      {pathname === "/terms-and-conditions" && (
        <>
          <meta content="Terms and Conditions" property="og:title" />
          <meta content="Terms and Conditions" property="twitter:title" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link href="css/normalize.css" rel="stylesheet" type="text/css" />
          <link href="css/webflow.css" rel="stylesheet" type="text/css" />
          <link
            href="css/atelier-ai-81cfbc8d2a30aaff17751f602043.webflow.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="images/favicon.ico"
            rel="shortcut icon"
            type="image/x-icon"
          />
          <link href="images/webclip.jpg" rel="apple-touch-icon" />
        </>
      )}
      {pathname === "/" && (
        <>
          <meta charSet="utf-8" />
          <title>
            AI Lingerie Design Tool | Create Custom Lingerie Designs Instantly
          </title>
          <meta
            content="Design custom lingerie pieces with our AI-powered tool. Create bras, sleepwear, bodysuits, and hosiery with professional-quality visualizations. No design experience needed."
            name="description"
          />
          <meta
            content="Design Custom Lingerie with AI | Professional Visualizations in Seconds"
            property="og:title"
          />
          <meta
            content="Design custom lingerie pieces with our AI-powered tool. Create bras, sleepwear, bodysuits, and hosiery with professional-quality visualizations. No design experience needed."
            property="og:description"
          />
          <meta content="/og-image.jpg" property="og:image" />
          <meta
            content="Design Custom Lingerie with AI | Professional Visualizations in Seconds"
            property="twitter:title"
          />
          <meta
            content="Design custom lingerie pieces with our AI-powered tool. Create bras, sleepwear, bodysuits, and hosiery with professional-quality visualizations. No design experience needed."
            property="twitter:description"
          />
          <meta content="/og-image.jpg" property="twitter:image" />
          <meta property="og:type" content="website" />
          <meta content="summary_large_image" name="twitter:card" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
          <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
          <link
            href="/css/atelier-ai-81cfbc8d2a30aaff17751f602043.webflow.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="images/favicon.ico"
            rel="shortcut icon"
            type="image/x-icon"
          />
          <link href="images/webclip.jpg" rel="apple-touch-icon" />
        </>
      )}
    </head>
  );
};
