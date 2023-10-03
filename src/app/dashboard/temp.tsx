"use client";
import React, { useState } from "react";
import Image from "next/image";
import Chat from "@/components/Chat";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const page = () => {
  const router = useRouter();
  const { logout, user } = useAuth();
  const handleUpload = () => {
    router.push("/upload");
  };
  const [tokens, setTokens] = useState<any>(null);
  return (
    <div className="_container h-screen flex">
      {/* <div className="_navbar bg-[#1d232a]  w-1/12">
        <div className="flex h-screen justify-center gap-14 flex-col items-center text-white font-bold">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="_history bg-[#272d34] w-3/12">
        <div className="flex justify-center pt-3">
          <h1 className=" text-[2rem] text-white">History</h1>
        </div>
      </div> */}
      <div className="_chat w-5/12 h-screen bg-[#edeff3]">
        <Chat setTokens={setTokens} />
      </div>
      <div className="_profile w-3/12 bg-[#ffffff]">
        <div className="mt-4 flex justify-end mr-2">
          <button
            // disabled={false}
            onClick={logout}
            className=" text-black bg-gray-300 font-medium rounded-md text-sm w-full sm:w-auto block px-5 py-2.5 text-center"
          >
            Logout
          </button>
        </div>
        <div className="_imgContainer flex gap-1 flex-col mb-8 items-center mt-[2rem]">
          <div className="_img mb-3">
            <Image
              src={"/user.jpg"}
              className="rounded-full"
              width={80}
              height={80}
              alt="profile pic"
            />
          </div>
          <p className="font-semibold">{user?.displayName}</p>
          <p className="font-light text-gray-500">{user?.email}</p>
        </div>
        <div className="w-[90%] mx-auto p-[0.01rem] bg-gray-300"></div>
        <div className="_token">
          <div className="flex justify-between p-5 px-10 ">
            <p>Total cost</p>
            <p>{tokens?.total_cost || "-"}</p>
          </div>
          <div className="w-[90%] mx-auto p-[0.01rem] bg-gray-300"></div>
          <div className="flex justify-between p-5 px-10">
            <p>Total tokens </p>
            <p>{tokens?.total_tokens || "-"} </p>
          </div>
          <div className="w-[90%] mx-auto p-[0.01rem] bg-gray-300"></div>
          <div className="flex justify-between p-5 px-10">
            <p>Token used</p>
            <p>{tokens?.completion_tokens || "-"} </p>
          </div>
        </div>
        <div className="w-[90%] mx-auto p-[0.01rem] bg-gray-300"></div>
        <div className="flex   gap-3 justify-center mt-16">
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=1148310552813256743&permissions=28582203096305&scope=bot"
            className="cursor-pointer"
            target="_blank"
          >
            <Image
              src="https://storage.googleapis.com/replit/images/1655786714330_691070e643aa6e650e52f6c3e26f3c33.png"
              alt="Telegram bot"
              width={50}
              height={50}
              className="rounded-full "
            />
          </a>
          <a
            href="https://t.me/QuesAns2_aiBot"
            className="cursor-pointer"
            target="_blank"
          >
            <Image
              width={50}
              height={50}
              src="https://flowxo.com/wp-content/uploads/2021/03/Telegram-Logo-512x512.png"
              alt="Telegram bot"
              className="rounded-full "
            />
          </a>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            // disabled={false}
            onClick={handleUpload}
            className=" text-white bg-gray-600 font-medium rounded-md text-sm w-full sm:w-auto block px-8 py-2.5 text-center"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
