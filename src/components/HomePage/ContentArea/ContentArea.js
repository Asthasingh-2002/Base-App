import React, { useState } from "react";
import ListArea from "./ListArea/ListArea";
import uploadicon from "../../../Assets/upload.png"
import excel from "../../../Assets/excel.png"
import user  from "../../../Assets/userImg.png"
import bell  from "../../../Assets/bell.png"

export default function ContentArea() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
    };
  
    const handleRemove = () => {
      setSelectedFile(null);
    };
  
    const handleUpload = () => {
      if (selectedFile) {
        
        console.log('File uploaded:', selectedFile.name);
      } else {
        console.log('Please select a file before uploading.');
      }
    };
  
    return (
        <>
        <div className="flex justify-between ml-5 mr-5">
         <div className="text-xl font-semibold">Upload CSV</div>
         <div className="flex justify-between items-center">
            <img src={bell} alt="bell" className="w-5 h-5 mr-5" />
            <div className="w-10 h-10 rounded-full overflow-hidden ">
            <img src={user} alt="userprofile" className="w-full h-full object-cover" /><img src={user} alt="userprofile" className="" />

            </div>
            
         </div>
        </div>

        {/* upload section */}
        <div className="flex justify-center items-center w-full h-full">
        <div className="w-1/2  p-6 bg-white rounded-md shadow-md h-3/5  ">
        <div className="mb-4 w-full h-4/5 border-dotted border-2 border-[#EBEBEB] flex justify-center items-center">
          {selectedFile ? (
            <div className="flex flex-col justify-center items-center">
             <img src={excel} alt="upload" className="w-7 h-7 mr-5 mb-5" />

              <p className="text-black mb-2">upload- {selectedFile.name}</p>
              <button
                onClick={handleRemove}
                className="text-red-500 hover:text-red-600  focus:outline-none"
              >

                Remove
              </button>
            </div>
          ) : (
            <label
              htmlFor="fileInput"
              className=" text-black mb-2 cursor-pointer flex  flex-col justify-center items-center w-full"
            >
             <img src={excel} alt="upload" className="w-7 h-7 mr-5 mb-5" />

              Drop your Excel file here or <span className="text-[#605BFF]">browse</span>
            </label>
          )}
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleUpload}
            className="bg-[#605BFF] text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 w-full flex justify-center items-center"
            disabled={!selectedFile}
          >
             <img src={uploadicon} alt="upload" className="w-5 h-5 mr-2" />
            Upload
          </button>
        </div>
      </div>
        </div>

        {/* List Area */}
        <div>
            <ListArea/>
        </div>
       
        </>
      
  );
}
