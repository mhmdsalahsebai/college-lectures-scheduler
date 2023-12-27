"use client";
import React, { useState, useEffect } from "react";
import CustomModal from "./CustomModal";
import GetAppIcon from '@mui/icons-material/GetApp';

const CustomTable = ({ selectedYear }) => {
  const [tableData, setTableData] = useState([[]]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/saveData?id=" + selectedYear, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        if (result.data !== undefined) {
          setTableData(result.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

  }, [selectedYear]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ row: 0, col: 0 });




  const days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
  ];
  const timePeriods = [
    "8:30 - 10:00",
    "10:15 - 12:00",
    "12:15 - 14:00",
    "14:15 - 15:00",
    "15:15 - 17:00",
  ];

  const handleCellClick = (row, col) => {
    if (row === 2 && col === 3) {
      return;
    }
    setModalData({ row, col });
    setIsModalOpen(true);
  };

  const handleSave = (data) => {
    const updatedData = [...tableData];
    const { row, col } = modalData;

    // Ensure the table structure is properly initialized
    if (!updatedData[row]) {
      updatedData[row] = [];
    }


    updatedData[row][col] = {
      name: document.getElementById("selectedStaff").value,
      subject: document.getElementById("selectedSubject").value,
      room: data.room,
      type: data.type,
    };
    setTableData(updatedData);
    setIsModalOpen(false);
    handleSaveTable(updatedData);
  };



  const handleRemove = () => {
    const updatedData = [...tableData];
    const { row, col } = modalData;

    if (updatedData[row] && updatedData[row][col]) {
      updatedData[row][col] = " ";
      setTableData(updatedData);
      handleSaveTable(updatedData);
    }
  };

  const handleSaveTable = async (updatedData) => {
    try {
      const response = await fetch("api/saveData?id=" + selectedYear, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        console.log("Data saved successfully");
      } else {
        console.error("Error saving data");
      }
    } catch (error) {
      console.error("Error saving :", error);
    }

  };

  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th
              rowSpan={2}
              className="py-2 px-4 border border-gray-300 text-center"
            >
              Time
            </th>
            <th
              colSpan={7}
              className="py-2 px-4 border border-gray-300 text-center"
            >
              Days of the Week
            </th>
          </tr>
          <tr>
            {days.map((day, index) => (
              <th
                key={index}
                className="py-2 px-4 border border-gray-300 text-center"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="py-2 px-4 border border-gray-300 text-gray-900 text-center">
          {timePeriods.map((time, rowIndex) => (
            <tr key={rowIndex}>
              <td className="py-2 px-4 border border-gray-300 font-semibold text-center">
                {time}
              </td>
              {days.map((_, colIndex) => (
                <td
                  key={colIndex}
                  className={`py-2 px-4 cursor-pointer border border-gray-300 text-center ${colIndex === 3 && rowIndex === 2 ? "bg-gray-700" : ""
                    } ${tableData[rowIndex] &&
                      tableData[rowIndex][colIndex] &&
                      tableData[rowIndex][colIndex].type === "lecture"
                      ? "bg-green-200"
                      : tableData[rowIndex] &&
                        tableData[rowIndex][colIndex] &&
                        tableData[rowIndex][colIndex].type === "section"
                        ? "bg-blue-200"
                        : ""
                    }`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                >
                  {tableData[rowIndex] && tableData[rowIndex][colIndex] && (
                    <span
                      className={`${tableData[rowIndex][colIndex].type === "lecture"
                        ? "bg-light-green-200"
                        : "bg-light-blue-200"
                        }`}
                    >
                      {tableData[rowIndex][colIndex].subject} <br />
                      {tableData[rowIndex][colIndex].name} <br />
                      {tableData[rowIndex][colIndex].room}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
  
      <CustomModal
      selectedYear={selectedYear}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        onRemove={handleRemove}
      />
    </div>
  );
};

export default CustomTable;
