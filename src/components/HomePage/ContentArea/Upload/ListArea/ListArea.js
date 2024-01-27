import React from "react";

export default function ListArea({ excelData }) {
  if (!excelData || excelData.length === 0) {
    return <div>No data to display</div>;
  }

  // Extract column headers from the first row
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
                  {cellData}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

