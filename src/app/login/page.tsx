"use client";
import React, { useState,useEffect } from "react";
import { isValidEmail } from "@/utils/helper";
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { RootState,AppDispatch } from '@/store';
import { useRouter } from 'next/navigation'
import Image from 'next/image'
// import { ThunkDispatch } from 'redux-thunk';
// import { googleSignIn,sendLinkSigIn,facebookSignIn } from '@/store/features/authSlice';


const page = () => {
  // const dispatch:AppDispatch = useDispatch();
  const router =useRouter();
  // const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
  // useEffect(() => {
  //   if (isLoggedIn && user) {
  //     router.push("/");
  //   }
    
  // }, [user]);

  const [mode, setMode] = useState(true);
  const [email, setEMail] = useState("");


  const handleModeToggle = () => {
    setMode((prev) => !prev);
  };
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEMail(e.target.value);
  };
  const handleSubmit = () => {
    // console.log("clicked")
  //  sendLinkSigIn(email);
    alert("Check your email inbox, we have sent you a login Link")
    setEMail("")
  };
  const handleFacebookSignIn =()=>{
    // facebookSignIn()
  };
  const handleGoogleSignIn = () => {
    // googleSignIn(); 
  };

  
  return (
    <div className="w-full flex h-screen">
      <div className="w-[50%] h-full flex flex-col items-center p-4">
        {/* hero */}
        <div className="w-[16rem] h-[13rem]">
          {/* <img className="object-contain" src="Logo.png" alt="" /> */}
        </div>
        <p className="text-[2rem] font-semibold">Welcome Back</p>
        <p className=" text-gray-400">
          Welcome back, Please enter Your details
        </p>
        {/* switch */}
        <div>
          <div className="w-full mt-5 flex gap-1 p-[0.2rem] bg-gray-100  rounded-[1rem] cursor-pointer shadow">
            <p
              onClick={handleModeToggle}
              className={`${
                mode ? "bg-white cursor-auto font-bold" : "text-gray-500"
              } transition ease-linear  px-[4rem] py-3 rounded-[0.7rem] `}
            >
              SignIn
            </p>
            <p
              onClick={handleModeToggle}
              className={`${
                !mode ? "bg-white cursor-auto font-bold" : "text-gray-500"
              } transition ease-linear  px-[4rem] py-3 rounded-[0.7rem] `}
            >
              SignUp
            </p>
          </div>
        </div>
        {/* input */}
        <div className="border-gray-200 border-2 rounded-lg flex justify-center items-center px-4 py-2 mt-5">
          <div className="pr-4 border-r-2">
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
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div className="mx-4 flex flex-col">
            <label className="text-[0.65rem] font-semibold text-gray-400">
              Email Address
            </label>
            <input
              className="border-none pt-0 font-semibold focus:border-none rounded-sm py-1 placeholder-[#b8c5d7] appearance-none focus:outline-none"
              type="email"
              value={email}
              onChange={handleOnchange}
              placeholder="Enter"
            />
          </div>

          <div
            className={
              isValidEmail(email)
                ? "bg-green-400 border-2 border-green-400 rounded-full"
                : "border-black border-2 rounded-full"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.2}
              stroke={!isValidEmail(email) ? "currentColor" : "white"}
              className="w-6 h-6  p-[0.35rem]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        </div>
        <div className="mt-5">
         
          <button
            className="px-[9.3rem] text-white rounded-lg py-3  bg-gray-600 text-center"
            type="submit"
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
        <div className="flex w-[50%] gap-2 m-5 ">
          <p className="border-t-[2px] border-gray-400 mt-3 w-[28%]" ></p>
          <p className="text-gray-500 font-medium"> Or Continue With </p>
          <p className="border-t-[2px] border-gray-400 mt-3 w-[28%]"></p>
        </div>
        <div className="flex w-full md:w-[50%] mx-4">
          <button onClick={handleGoogleSignIn} className="flex px-4 py-2 justify-center items-center cursor-pointer w-full border-2 rounded-lg">
          
            <Image height={40} width={40} className="object-contain rounded-full" src="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg" alt="google" />
            <p className="text-[1.3rem] ml-5" > Google</p>
          </button>
        </div>
      </div>
      <div className="w-[50%] h-full bg-gray-600">{/* img */}</div>
    </div>
  );
};

export default page;
