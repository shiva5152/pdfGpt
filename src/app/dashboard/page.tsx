"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
const page = () => {
  const { user } = useAuth();
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="w-[80%] bg-[#f2f8fd] p-20 px-10">
      <div className="_route&&search w-full flex justify-between items-center">
        <p className="text-[#6e7191] text-[1.25rem]">
          <span className="text-[#6e7191]/50 ">Pages</span> / Dashboard
        </p>
        <div className="bg-white  gap-2  rounded-md p-3 flex justify-centre">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
          <input
            type="text"
            onChange={handleInputChange}
            value={inputValue}
            className="flex focus:outline-none flex-1 bg-transparent"
            placeholder="Search"
          />
        </div>
      </div>
      <h1 className="mt-[14.75px] font-poppins text-[1.5rem] leading-[19px] text-[#060606]">
        Dashboard Overview
      </h1>
      <div className="user-header z-[0] relative mt-[20.28px] w-full h-[210px] sm:h-[191px] text-white px-[20px] py-[15px] font-poppins">
        <img
          className="absolute z-[-1] h-[116%] bottom-0 right-[-50px] md:right-[20px] opacity-100 vsm:opacity-100"
          src="/avatar.png"
          alt="user"
        />
        <div className="z-[2] h-full flex flex-col justify-between">
          <div className="">
            <h1 className="text-[1.5rem] leading-[37px] text-[#CED5DC]">
              Hello{" "}
              <span className="text-white">
                {user?.displayName?.split(" ")[0]}
                <span>,</span>
              </span>
            </h1>
            <p className="w-[50%] xmd:w-full mt-[20px] text-[1rem] leading-[1.2] text-[#D4E3F0]">
              Have a nice day and don’t forget to checkout our Ai bots!
            </p>
            <div className="flex gap-3 mt-7">
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
          </div>
        </div>
      </div>
      <div className="_cards">
        {/* <div className="bg-white rounded-lg p-4 flex-1">
          <h1 className="text-lg text-slate-800">Total Usage:</h1>
          <div className="w-[80%] mx-auto">
            <canvas
              role="img"
              height="255"
              width="255"
              style={{
                display: "block",
                boxSizing: "border-box",
                height: "204px",
                width: "204px",
              }}
            ></canvas>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default page;
