"use client";

import React, { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";

import { useState } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";

const navigationLinks = [
  { text: "Terms", href: "#" },
  { text: "Privacy Policy", href: "#" },
  { text: "Contact", href: "#" },
];

const Account = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("state") === "sign-up") {
      setIsRegistering(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isRegistering) {
      try {
        await axios.post("/api/register", { email, password });

        setIsRegistering(false);

        await signIn("credentials", {
          email,
          password,
          callbackUrl: "/designer",
        });
      } catch (error) {
        console.log(error);
        setError("Registration failed");
      }
    } else {
      const result = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/designer",
      });

      if (result?.error) {
        setError(result.error);
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Card className="w-[444px] border-0 rounded-none">
        <CardContent className="h-full flex flex-col p-6">
          <header className="flex items-center justify-between mb-8 pt-2">
            <div className="flex items-center gap-3">
              <div className="">
                <span className="font-medium"></span>
              </div>
            </div>
            <div className="flex gap-3"></div>
          </header>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                defaultValue={email}
                className="bg-gray-50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="bg-gray-50"
              />
            </div>

            <Button type="submit" onClick={handleSubmit} className="w-full">
              {isRegistering ? "Register" : "Login"}
            </Button>

            <div className="flex items-center justify-center gap-2">
              <span className="text-sm">Don&#39;t have an account?</span>
              <Button
                variant="link"
                onClick={() => setIsRegistering(!isRegistering)}
              >
                {isRegistering ? "Login" : "Register"}
              </Button>
            </div>
            {error && (
              <div className="flex justify-center">
                <Badge variant="destructive">{error}</Badge>
              </div>
            )}
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
