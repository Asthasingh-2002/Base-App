import React, { useState } from "react";
import uploadicon from "../../../../Assets/upload.png";
import excel from "../../../../Assets/excel.png";
import ListArea from "./ListArea/ListArea";
import * as XLSX from "xlsx";


export default function Upload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [excelData, setExcelData] = useState(null);
    const [listDisplay, setlistDispaly]= useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleRemove = () => {
    setSelectedFile(null);
  };

  const handleUpload = () => {
    if (selectedFile) {
        // Read the Excel file when uploaded
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const exdata = XLSX.utils.sheet_to_json(sheet, { header: 1 });
          setlistDispaly(1);
          setExcelData(exdata)
          console.log("Excel data:", exdata);
          // Pass the excelData to your ListArea or perform any other processing here
        };
  
        reader.readAsBinaryString(selectedFile);
      } else {
        console.log("Please select a file before uploading.");
      }
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-full my-10 ">
    <div className="text-xl font-semibold  md:hidden text-left mb-10 ml-10 w-full">Upload CSV</div>
    <div className="w-full h-100 md:w-1/2 mx-10  p-6 bg- rounded-md shadow-md md:h-3/5  ">
      <div className="mb-4 h-60 md:w-full md:h-80 border-dotted border-2 border-[#EBEBEB] flex justify-center items-center">
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
            Drop your Excel file here or{" "}
            <span className="text-[#605BFF]">browse</span>
          </label>
        )}
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          className="hidden"
          accept=".xlxs ,.csv"
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleUpload}

          className="bg-[#605BFF] text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 w-full flex justify-center items-center"
        //   disabled={!selectedFile}
          htmlFor="fileInput"
        >
          <img src={uploadicon} alt="upload" className="w-5 h-5 mr-2" />
          Upload
        </button>
      </div>

      
    </div>
      {/* List Area */}
      {/* {listDisplay && <ListArea excelData={excelData} />} */}
      {listDisplay ? <ListArea excelData={excelData} setExcelData={setExcelData} /> : null}
      
  </div>
  )
}
