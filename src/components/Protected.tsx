"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Loader from "./Loder";
const layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathName = usePathname();
  const { userLoading, user } = useAuth();

  useEffect(() => {
    console.log("protected", user);
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  // if (userLoading) {
  //   return (
  //     <div className="w-full flex justify-center items-center h-screen mx-auto">
  //       <Loader />
  //     </div>
  //   );
  // }
  // console.log(pathName);
  return (
    <main className="flex">
      {pathName !== "/login" && <Navbar />}

      {children}
    </main>
  );
};

export default layout;
