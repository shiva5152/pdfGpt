"use client";
import Loader from "@/components/Loder";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
// import { useAppContext } from "../../context/appContext";
// import { Loader, Alert, IP } from "../../components";
import { useAuth } from "@/context/AuthContext";
const Upload = () => {
  // const { file, setFile, UploadData, isLoading, showAlert } = useAppContext();
  // const { show, setShow } = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [files, setFiles] = useState<File[]>([]);
  const [isUploaded, setIsUploaded] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // const file = acceptedFiles;
    // const
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);
  const handleUpload = async () => {
    if (files.length === 0) {
      alert("file is not there");
      return;
    }
    setLoading(true);
    await uploadFiles(files);
    // if (user && user.email) {
    //   await uploadFileNodeServer(files[0], user?.email);
    // } else {
    //   alert("user undefined");
    // }
    // alert("file is Uploaded");
    // UploadData(file[0]);
    setIsUploaded(true);
    setLoading(false);
    setFiles([]);
  };
  const handleNext = () => {
    router.push("/chat");
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="flex h-screen items-center justify-start flex-col bg-gray-200 w-full  border-t border-l border-gray-300 ">
      <div className="bg-white mt-[6.5rem] flex pt-[6rem] pb-[2.5rem]  flex-col w-9/12 md:w-6/12 items-center justify-center rounded-md ">
        {/* dropzone  */}
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className="bg-sky-50 w-full py-[6rem] px-[6rem] rounded-md border-[3px] border-dotted  mb-[1.5rem]  border-gray-600 cursor-pointer shadow-lg hover:shadow-xl transition duration-400 ease-in-out">
            {isDragActive ? (
              <p className="w-full">Drop the .xlsx ot .txt file here ...</p>
            ) : (
              <div className="flex flex-col gap-3 justify-center items-center">
                {loading ? (
                  <Loader />
                ) : (
                  <span className="bg-gray-600 rounded-full p-2">
                    {/* <img src="/upload.png" width={56} alt="" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                  </span>
                )}

                <p className="w-full">
                  Drag 'n' drop file here or&nbsp;
                  <span className="font-medium underline">Choose files</span>
                </p>
              </div>
            )}
          </div>
        </div>
        {/* btns */}
        <div className="flex mt-10 gap-3 ">
          <p className="bg-gray-100 flex items-center justify-center font-medium  rounded-md text-sm w-full  px-5 py-2.5">
            {files.length !== 0 ? files[0]?.name : "Drop the file above"}
          </p>
          <button
            disabled={loading}
            onClick={handleUpload}
            className=" text-white flex justify-center items-baseline bg-green-400 font-medium rounded-md text-sm w-full sm:w-auto  px-5 py-2.5 text-center"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>
      <div className="NextBtn my-8">
        {/* {
          isUploaded && (
            <button
            // disabled={false}
            onClick={handleNext}
            className=" text-white bg-gray-600 font-medium rounded-md text-sm w-full sm:w-auto block px-5 py-2.5 text-center"
          >
            Go To Chat Window
          </button>
          )
        } */}
        <button
          // disabled={false}
          onClick={handleNext}
          className=" text-white bg-gray-600 font-medium rounded-md text-sm w-full sm:w-auto block px-5 py-2.5 text-center"
        >
          Go To Chat Window
        </button>
      </div>
    </div>
  );
};

const uploadFiles = async (files: File[]) => {
  try {
    const formData = new FormData();

    // Append each selected file to the FormData
    files.forEach((file) => {
      formData.append("pdf_files", file, file.name);
    });

    // Make the POST request
    const response = await fetch("https://multipdf.onrender.com/extract", {
      method: "POST",
      body: formData,
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
    });

    if (response.ok) {
      const result = await response.json(); // Parse the JSON response
      console.log(result);
      // Perform any additional actions after successful upload
    } else {
      console.error("File upload failed");
    }
  } catch (error) {
    console.error("Error uploading files:", error);
  }
};
// const uploadFileNodeServer = async (file: File, email: string) => {
//   try {
//     const formData = new FormData();
//     console.log(file);

//     // Append each selected file to the FormData
//     formData.append("pdfFile", file);

//     // Make the POST request
//     const response = await fetch(`http://localhost:5000/upload/${email}`, {
//       method: "post",
//       body: formData,
//       // headers: {
//       //   "Content-Type": "multipart/form-data",
//       // },
//     });

//     if (response.ok) {
//       const result = await response.json(); // Parse the JSON response
//       console.log(result);
//       // Perform any additional actions after successful upload
//     } else {
//       console.error("File upload failed");
//     }
//   } catch (error) {
//     console.error("Error uploading files:", error);
//   }
// };

export default Upload;
