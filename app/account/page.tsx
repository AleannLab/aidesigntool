"use client";

import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import { useUser } from "@/app/hooks/useUser";
import { useRouter } from "next/navigation";

const navigationLinks = [
  { text: "Terms", href: "/terms-and-conditions" },
  { text: "Privacy Policy", href: "/privacy-policy" },
  { text: "Contact", href: "mailto:support@dressy.app" },
];

const Account = () => {
  const router = useRouter();

  const { balance, email, logout } = useUser();

  return (
    <div className="flex min-h-screen bg-white">
      <Card className="w-[444px] border-0 rounded-none">
        <CardContent className="h-full flex flex-col p-6">
          <div className="flex items-center justify-between mb-8 pt-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback>
                  {email ? email[0].toUpperCase() : "M"}
                </AvatarFallback>
              </Avatar>
              <div className="">
                <span className="font-medium"></span>
              </div>
            </div>
            <div className="flex gap-3">
              <Badge variant="secondary" className="ml-2">
                {balance} credits
              </Badge>
              <Button
                onClick={() => router.push("/pricing")}
                variant="default"
                size="sm"
              >
                Add
              </Button>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Button
                onClick={() => router.push("/designer")}
                size="sm"
                icon={
                  <svg
                    className="!w-4 !h-4"
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-1.90735e-06 6.00005C0.00486469 6.52616 0.216843 7.02915 0.589998 7.40005L4.88 11.7001C5.06736 11.8863 5.32081 11.9908 5.585 11.9908C5.84918 11.9908 6.10264 11.8863 6.29 11.7001C6.38373 11.6071 6.45812 11.4965 6.50889 11.3746C6.55966 11.2528 6.5858 11.1221 6.5858 10.9901C6.5858 10.858 6.55966 10.7273 6.50889 10.6055C6.45812 10.4836 6.38373 10.373 6.29 10.2801L3 7.00005L13 7.00005C13.2652 7.00005 13.5196 6.89469 13.7071 6.70716C13.8946 6.51962 14 6.26527 14 6.00005C14 5.73484 13.8946 5.48048 13.7071 5.29295C13.5196 5.10541 13.2652 5.00005 13 5.00005L3 5.00005L6.29 1.71005C6.4783 1.52307 6.58462 1.26895 6.58556 1.00359C6.58649 0.738224 6.48198 0.483356 6.295 0.295052C6.10802 0.106748 5.8539 0.000432014 5.58853 -0.000505447C5.32317 -0.00144291 5.0683 0.103075 4.88 0.290052L0.589998 4.59005C0.214411 4.9634 0.00223064 5.47048 -1.90735e-06 6.00005Z"
                      fill="white"
                    />
                  </svg>
                }
              ></Button>
              <span className="capitalize">Design panel</span>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input disabled defaultValue={email} className="bg-gray-50" />
              </div>

              <Button
                onClick={() => router.push("/pricing")}
                className="w-full bg-pink-600 hover:bg-pink-700"
              >
                Get more credits
              </Button>

              <Button onClick={logout} variant="secondary" className="w-full">
                Logout
              </Button>
            </div>
          </div>

          <footer className="mt-auto pt-6">
            <div className="flex flex-col items-center gap-6">
              <Logo />

              <nav className="flex gap-4">
                {navigationLinks.map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {link.text}
                  </a>
                ))}
              </nav>

              <p className="text-xs text-gray-500">
                Website.com © 2025 | All rights reserved!
              </p>
            </div>
          </footer>
        </CardContent>
      </Card>

      <div className="flex-1 flex items-center justify-center">
        <p className="text-2xl text-gray-400 font-semibold">
          Use the design panel to start
        </p>
      </div>
    </div>
  );
};

export default Account;
