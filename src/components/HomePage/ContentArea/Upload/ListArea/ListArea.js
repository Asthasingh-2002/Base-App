import React, { useState } from "react";

export default function ListArea({ excelData ,setExcelData}) {
  const [selectedTags, setSelectedTags] = useState({});

  const renderTagButton = (e,rowIndex) => {
    // console.log("Astha",rowIndex);
    // console.log(excelData[rowIndex-1]);
    let temp=excelData[rowIndex-1];
    if(excelData[rowIndex-1].length==4){
      temp.push(e+',');
    }
    let tempExcelData= excelData;
    excelData[rowIndex-1]=temp;
    console.log(excelData[rowIndex-1],temp);
    setExcelData(tempExcelData);
    
    
  };

  const columnHeaders = excelData[0];

  return (
    <div className="m-10 w-full px-5">
      <div className="mb-10 text-xl font-semibold">Uploads</div>
      <table className="w-full border border-gray-300 bg-[#F5F5F5]  text-left">
        <thead>
          <tr>
            {columnHeaders.map((header, index) => (
              <th key={index} className="py-2 px-4 border-b">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {excelData.slice(1).map((rowData, rowIndex) => (
            <tr key={rowIndex} className="bg-white p-5">
              {rowData.map((cellData, cellIndex) => (
                <td key={cellIndex} className="py-2 px-4 border-b">
                  {cellIndex === 3 ? (
                    <>
                      <select onChange={(e)=>renderTagButton(e.target.value,cellIndex)}>
                      <option value="" disabled selected>Select an option</option>
                        {cellData.split(", ").map((data) => (
                          <option key={data}>{data}</option>
                        ))}
                      </select>
                    </>
                  ) : (
                    cellData
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
