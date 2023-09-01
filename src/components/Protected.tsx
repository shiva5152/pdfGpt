"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Loader from "./Loder";
const layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { userLoading, user } = useAuth();
  useEffect(() => {
    console.log("protected", user);
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (userLoading) {
    <div className="w-full flex justify-center items-center h-screen mx-auto">
      <Loader />
    </div>;
  }
  return <>{children}</>;
};

export default layout;
