"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";
import { useUser } from "@/app/hooks/useUser";

export const AccountButton = () => {
  const user = useUser();

  return (
      <div className="flex gap-2">
        {user?.email ? (
            <Avatar
                onClick={() => {
                  window.location.href = "/account";
                }}
                className="h-10 w-10"
            >
              <AvatarFallback>
                {user.email ? user.email[0].toUpperCase() : "M"}
              </AvatarFallback>
            </Avatar>
        ) : (
            <>
              <a href="/auth?state=log-in" className="nav-link-extra w-nav-link">
                Log in
              </a>
              <div className="">
                <a href="/auth?state=sign-up" className="nav-button w-button">
                  Sign up
                </a>
              </div>
            </>
        )}
        <div className="menu-button w-nav-button">
          <div className="menu-icon w-icon-nav-menu"/>
        </div>
      </div>
  );
};
