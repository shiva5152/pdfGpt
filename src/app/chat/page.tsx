"use client";
import React, { useState ,useRef,useEffect} from "react";
import Loader from "@/components/Loder";
const ChatMessage = ({ message }: { message: any }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="question flex bg-gray-300 p-5 rounded">
        <div className="avatar">
          <div className="h-6 w-6 bg-green-500 rounded-full mr-7"></div>
        </div>
        <p className="font-semibold text-[#4f4d4d]">{message.userMessage}</p>
      </div>
      <div className="answer flex bg-gray-600 p-5 rounded">
        <div className="avatar">
          <div className="h-6 w-6 bg-gray-100 rounded-full mr-7"></div>
        </div>
        <p className="font-semibold text-gray-300">{message.gptResponse}</p>
      </div>
      

      {/* lorem */}
      
    </div>
  );
};
//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
const page = () => {
  const [userText, setUserText] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatLog, setChatLog] = useState([
    {
      userMessage: "how are you doing ",
      gptResponse: "how can i help you",
    },
  ]);
  const chatContainerRef = useRef(null);
  const scrollToBottom = () => {
    const container = chatContainerRef.current as HTMLDivElement | null;
    if (container) {
      const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;
      container.scrollTo({ top:scrollHeight - clientHeight , behavior: "smooth" });
      // container.scrollTop = container.scrollHeight;
    }
  };
  const  handleSubmit= async()=>{
    setUserText("");
    console.log(userText);
    setLoading(true);
   const res=await postData("https://multipdf.onrender.com/ask",{query:userText});
    setLoading(false);
    setChatLog(prev=>[...prev,{userMessage:userText,gptResponse:res.result.answer}])
    
  }
  useEffect(() => {
    scrollToBottom();
  }, [loading]);

  return (
    <section id="chat-container"
    style={{ height: "calc(100vh - 5.5rem)" }}
    className="bg-gray-100 relative items-center overflow-y-auto flex flex-col p-[1rem]">
      {/* <h1 className="text-[3rem] text-[#4b5563] font-semibold m-10">LawGpt</h1> */}
      <h1 className="text-[2rem] text-[#4b5563] font-semibold -mt-2">PdfGpt</h1>

      <div ref={chatContainerRef} className="chatSection flex flex-col gap-3 w-[80%] m-5">
        {chatLog?.length>0 && (
          chatLog.map((obj,index)=>{
            return <ChatMessage key={index} message={obj}/>
          })
        )}
        {loading && (
          <div className="w-full mt-10 flex justify-center items-center">
            <Loader/>
          </div>
        )}
      </div>
      
      <div className="fixed bottom-0 h-[5.5rem] bg-slate-500 border-t-[1px] border-gray-100 w-full bg-blur p-4">
        <div className="input  w-full text-center flex items-center justify-center flex-col">
          <div className="buttonSvg pl-16 w-[50vw] flex">
            <input
              className="w-full text-white p-4 bg-gray-600 placeholder-[#D3D3D3] rounded-md"
              placeholder="Ask the PdfGpt"
              type="text"
              name="text"
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
              id="questionInput"
            />

            <button onClick={handleSubmit} id="sendButton" className="relative -left-20 pl-10">
              <svg
                stroke="#D3D3D3"
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
      </div>
    </section>
  );
};

const postData = async (url:string, data:any) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
    console.error('Error:', error);
    throw error; 
  }
};
export default page;
