"use client";
import React, { useState, useRef, useEffect } from "react";
import Loader from "@/components/Loder";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
const ChatMessage = ({ message }: { message: any }) => {
  return (
    <div
      className={`flex flex-row  items-start gap-1 ${
        message.user === "gpt" ? "justify-start" : "justify-end"
      }`}
    >
      {message.user === "gpt" && (
        <div className="avatar mt-2">
          {/* <div className="h-6 w-6 bg-green-500 rounded-full mr-7"></div> */}
          <div className="h-6 w-6 rounded-full ">
            <Image
              src={"/pdf.png"}
              className="object-contain  border-2 border-white mx-auto rounded-lg"
              alt="pdfGpt"
              width={22}
              height={22}
            />
          </div>
        </div>
      )}
      <div
        className={`question flex max-w-[80%]  py-2 px-4 rounded ${
          message.user === "client"
            ? "bg-[#0084ff] text-white"
            : "bg-white text-black"
        }`}
      >
        <p className="">{message.msg}</p>
      </div>
      {message.user === "client" && (
        <div className="avatar mt-2">
          {/* <div className="h-6 w-6 bg-green-500 rounded-full mr-7"></div> */}
          <div className="h-6 w-6 rounded-full ">
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
          </div>
        </div>
      )}
    </div>
  );
};
interface ChildProps {
  setTokens: React.Dispatch<React.SetStateAction<any>>;
}
//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
const page = (props: ChildProps) => {
  const { setTokens } = props;
  const [userText, setUserText] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      msg: "how can i help you",
    },
    {
      user: "client",
      msg: "what is the limit of the sky",
    },
  ]);
  const chatContainerRef = useRef(null);
  const scrollToBottom = () => {
    const container = chatContainerRef.current as HTMLDivElement | null;
    if (container) {
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      container.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: "smooth",
      });
      // container.scrollTop = container.scrollHeight;
    }
  };
  const { user } = useAuth();
  const handleSubmit = async () => {
    if (userText === "") return;
    setChatLog((prev) => [
      ...prev,
      { user: "client", msg: userText },
      // { userMessage: userText, gptResponse: res.result.text },
    ]);
    setUserText("");
    console.log(userText);
    setLoading(true);
    const res = await postData("https://doctalk-x05u.onrender.com/ask", {
      query: userText,
      // email: user?.email,
    });
    setTokens(res.token_count);
    console.log(res);
    setLoading(false);
    setChatLog((prev) => [
      ...prev,
      { user: "gpt", msg: res.result.answer },
      // { userMessage: userText, gptResponse: res.result.text },
    ]);
  };

  const router = useRouter();
  const handleEnterKeyPress = (event: any) => {
    if (event.key === "Enter") {
      // The "Enter" key was pressed
      handleSubmit();
    }
  };

  // useEffect(() => {
  //   // router.push("/login");
  // }, []);

  return (
    <section
      id="chat-container"
      className="bg-[#edeff3] relative h-screen items-center  flex flex-col "
    >
      {/* <h1 className="text-[3rem] text-[#4b5563] font-semibold m-10">LawGpt</h1> */}

      <div
        style={{ height: "calc(100vh - 4rem)" }}
        ref={chatContainerRef}
        className="overflow-y-auto pb-[4rem] .my-div overflow-x-hidden flex flex-col gap-3 w-[90%] mt-[5rem] m-5"
      >
        {chatLog?.length > 0 &&
          chatLog.map((obj, index) => {
            return <ChatMessage key={index} message={obj} />;
          })}
        {loading && (
          <div className="w-full mt-10 flex justify-center items-center">
            <Loader />
          </div>
        )}
      </div>

      <div className="absolute bottom-0 w-full h-[4rem] bg-[#fbfcfc] p-2">
        <div className="w-full flex justify-between px-2 py-2">
          <input
            className="w-[70%] focus:outline-none focus:ring-transparent"
            placeholder="Ask the PdfGpt"
            type="text"
            name="text"
            value={userText}
            onKeyDown={handleEnterKeyPress}
            onChange={(e) => setUserText(e.target.value)}
            id="questionInput"
          />

          <button
            onClick={handleSubmit}
            id="sendButton"
            className=" p-2 rounded-full"
          >
            <svg
              stroke="#272d34"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mr-1"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

const postData = async (url: string, data: any) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    if (error instanceof Error && error.message.includes("429")) {
      alert("Rate limit, 2 queries per minute only.");
    }
    console.error("Error:", error);
    throw error;
  }
};
export default page;
