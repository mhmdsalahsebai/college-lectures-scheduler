"use client";
import React, { useState, useEffect } from "react";

const InstructionTable = (prams) => {
  const [tableData, setTableData] = useState([[]]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/' + prams.api, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json();
        if (result.data !== undefined) {
          console.log('result', result.data);
          setTableData(result.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const head_table = [
    "name",
    "course",
    "courseCode",
    "availability",
    "phoneNumber",
    "email",
  ];


  return (
    <div className="container fixed px-4 mt-10"   >

      <table className="w-full bg-white border m-auto border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            {head_table.map((name, index) => (
              <th
                key={index}
                className="py-2 px-4 border border-gray-300 text-center"
              >
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="py-2 px-4 border border-gray-300 text-gray-900 text-center">
          {tableData.map((row, index) => (
            <tr key={index}>
              {head_table.map((name, index) => (
                <td
                  key={index}
                  className="py-2 px-4 border border-gray-300 text-center"
                >
                  {/* if row[name] is array  */}
                  {Array.isArray(row[name]) ? (
                    row[name].map((item, index) => (
                      <div key={index}>
                        {item}
                      </div>
                    ))
                  ) : (
                    row[name]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstructionTable;
