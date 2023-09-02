"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { logout, user } = useAuth();
  const router = useRouter();
  return (
    <header className="bg-gray-600 z-10 p-4 py-3 absolute w-[100vw]">
      <nav className="flex items-center justify-between m-2">
        {/* Logo */}
        <div className="text-white  text-2xl font-bold">PdfGpt</div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 items-center justify-center ">
          <li className="text-white flex gap-2">
            <p>{user?.email}</p>
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
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </li>
          <li
            className={`bg-gray-800 hover:bg-gray-400 text-white font-bold px-4 rounded`}
          >
            <Link
              href="/chat"
              className="text-white flex py-2 px-2 hover:text-gray-300"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFD700"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </span>
              <span> Chat</span>
            </Link>
          </li>
          <li className="bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">
            <Link
              href="/upload"
              className="text-white py-2 px-4 hover:text-gray-300"
            >
              Upload
            </Link>
          </li>
          <button
            onClick={() => logout()}
            className="bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
