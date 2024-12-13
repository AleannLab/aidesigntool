"use client";
import { Logo } from "@/components/ui/logo";
import React from "react";
import { usePathname } from "next/navigation";

const footerLinks = [
  { label: "Terms", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Contact", href: "#" },
];

const Footer = () => {
  const pathname = usePathname();

  if (["/auth", "/designer", "/account"].includes(pathname)) {
    return null;
  }

  return (
    <footer className="h-[250px] flex flex-col items-center gap-8 py-8 w-full bg-[#db27771a]">
      <Logo />
      <nav className="flex items-center gap-8">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-colors-text-light hover:text-collection-1-primary"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <p className="text-xs text-colors-dark-on-surface">
        Website.com © 2025 | All rights reserved!
      </p>
    </footer>
  );
};

export default Footer;
