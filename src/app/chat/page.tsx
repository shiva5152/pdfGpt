"use client";
import React, { useState, ChangeEvent } from "react";
import Chat from "@/components/Chat";

const page = () => {
  const [tokens, setTokens] = useState<any>(null);

  return (
    <div className="w-[80%] bg-[#f2f8fd]">
      <Chat setTokens={setTokens} />
    </div>
  );
};

export default page;
