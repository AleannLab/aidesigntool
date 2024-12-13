"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useSession, signOut } from "next-auth/react";

export const useUser = () => {
  const { data } = useSession();

  const [balance, setBalance] = useState<null | number>(null);
  const fetchBalance = async () => {
    const { data } = await axios.get("/api/balance");
    setBalance(data.balance);
  };
  useEffect(() => {
    fetchBalance();

    const interval = setInterval(() => {
      fetchBalance();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const logout = async () => {
    await signOut();
  };

  return {
    balance,
    email: data?.user?.email ?? "",
    refetchBalance: fetchBalance,
    logout,
  };
};
