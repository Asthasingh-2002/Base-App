import React, { useState } from "react";

export default function ListArea({ excelData, setExcelData }) {
  const [selectedTags, setSelectedTags] = useState({});

  const renderTagButton = (e, rowIndex) => {
    let tempExcelData = [...excelData];

    const existingTags = tempExcelData[rowIndex+1][4] || "";
    const newTags = existingTags ? `${existingTags}, ${e}` : e;
    tempExcelData[rowIndex+1][4] = newTags;

    setExcelData(tempExcelData);

    setSelectedTags({ ...selectedTags, [rowIndex]: e });
  };

  const columnHeaders = excelData[0];

  return (
    <div className="m-10 w-full px-5">
      <div className="mb-10 text-xl font-semibold">Uploads</div>
      <table className="p-5   bg-[#F5F5F5] text-left table-auto w-full shadow-md   rounded border-separate border-spacing-y-4 ">
        <thead>
          <tr className="rounded-md ">
            {columnHeaders.map((header, index) => (
              <th key={index} className="py-2 px-4 border-b capitalize">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {excelData.slice(1).map((rowData, rowIndex) => (
            <tr
              key={rowIndex}
              className="bg-white p-5 mb-8 bg-card mt-6 rounded-md"
            >
              {rowData.map((cellData, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`py-2 px-5 border-b ${
                    cellIndex === 4 && cellData === "" ? "bg-white" : ""
                  }`}
                >
                  {cellIndex === 3 ? (
                    <>
                      <select
                        onChange={(e) =>
                          renderTagButton(e.target.value, rowIndex)
                        }
                        value={selectedTags[rowIndex] || ""}
                      >
                        <option value="" disabled>
                          Select Tag
                        </option>
                        {cellData.split(", ").map((data) => (
                          <option key={data}>{data}</option>
                        ))}
                      </select>
                    </>
                  ) : cellIndex === 4 ? (
                    <div>{cellData}</div>
                  ) : (
                    // Display other columns
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
