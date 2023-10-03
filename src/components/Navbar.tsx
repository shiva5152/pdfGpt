"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const { logout } = useAuth();
  return (
    <nav className="h-screen w-[20%] py-6 rounded-r-lg bg-white flex justify-between flex-col">
      <div>
        <h1 className="px-5 text-[1.5rem] text-[#1a4fba] font-semibold">
          Shiller
        </h1>
        <div className="_userInfo mt-10 mb-6 ml-5 p-1 rounded-lg mr-14 gap-1 flex items-center bg-[#1a4fba] text-white">
          <div className="h-10 w-10 rounded-md bg-[#eaeaea]"></div>
          <div className="flex flex-col">
            <p className="text-[0.9rem]">Manoj Shah</p>
            <p className="text-[0.7rem] -mt-[3px] text-gray-100/70">
              28 credit left
            </p>
          </div>
        </div>
        <ul className="flex flex-col gap-5 w-full">
          {navLinks.map((obj) => {
            const isActive = pathName === obj.to;
            const activeClass = isActive ? "bg-[#eaeaea]" : "";
            return (
              <li key={obj.label}>
                <Link
                  href={obj.to}
                  className={` font-normal flex gap-2 py-2 pl-10 text-[#6e7191] ${activeClass}`}
                >
                  <span>{obj.logo}</span>
                  {obj.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="_logoutBtn ml-10">
        <button onClick={logout} className="flex gap-1 text-[#6e7191] ">
          <span>
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
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </span>{" "}
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

const navLinks = [
  {
    label: "Dashboard",
    to: "/dashboard",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#6e7191"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#6e7191"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
        />
      </svg>
    ),
  },
  {
    label: "Chat",
    to: "/chat",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#6e7191"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#6e7191"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      </svg>
    ),
  },
  {
    label: "Upload",
    to: "/upload",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#6e7191"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#6e7191"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
        />
      </svg>
    ),
  },
];
