"use client";
import React, { useState, useEffect } from "react";
import CustomModel from "./CustomModel";
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';

const CustomTable = ({ selectedYear, selectedSemester }) => {
  const [tableData, setTableData] = useState([[]]);
  const [prvData, setPrvData] = useState([]);
  const [clearTable, setClearTable] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [modelData, setModelData] = useState({ row: 0, col: 0 });
  const [status, setStatus] = useState("");
  if (status !== "") {
    setTimeout(() => {
      setStatus("");
    }, 1000);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "api/tablesData?id=" + selectedYear + selectedSemester,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        if (result.data !== undefined) {
          setTableData(result.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [selectedYear, selectedSemester]);

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
    setPrvData(
      tableData[row] && tableData[row][col] ? tableData[row][col] : []
    );
    setModelData({ row, col });
    setIsModelOpen(true);
  };

  const handleSave = (data) => {
    if (data.name === "" || data.subject === "" || data.room === "") {
      setStatus("Please fill all the fields");
      return;
    }
    const updatedData = [...tableData];
    const { row, col } = modelData;
    if (!updatedData[row]) {
      updatedData[row] = [];
    }
    updatedData[row][col] = {
      name: data.name,
      subject: data.subject,
      room: data.room,
      type: data.type,
    };
    handleSaveTable(updatedData);
  };

  const handleRemove = () => {
    const updatedData = [...tableData];
    const { row, col } = modelData;

    if (updatedData[row] && updatedData[row][col]) {
      updatedData[row][col] = null;
      setTableData(updatedData);
      handleSaveTable(updatedData);
    }
    setIsModelOpen(false);
  };
  const handleClear = () => {
    setClearTable(false);
    setTableData([[]]);
    handleSaveTable([[]]);
  };

  const handleSaveTable = async (updatedData) => {
    try {
      const response = await fetch(
        "api/tablesData?id=" + selectedYear + selectedSemester,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );
      const result = await response.json();
      if (result.success) {
        setTableData(updatedData);
        setIsModelOpen(false);
      } else {
        const { row, col } = modelData;
        updatedData[row][col].name = prvData.name;
        updatedData[row][col].subject = prvData.subject;
        updatedData[row][col].room = prvData.room;
        updatedData[row][col].type = prvData.type;
        setTableData(updatedData);
        setStatus(result.message);
      }
    } catch (error) {
      console.error("Error saving :", error);
    }
  };
  const handleButtonClick = async () => {
    const TableToExcel = (await import("@linways/table-to-excel")).default;
    TableToExcel.convert(
      document.getElementById(selectedYear + selectedSemester),
      {
        name: `Table_${selectedYear}_${selectedSemester}.xlsx`,
        sheet: {
          name: "Sheet 1",
        },
      }
    );
  };

  return (
    <div className="mx-auto mt-8">
      <table
        className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden"
        id={selectedYear + selectedSemester}
      >
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
                  className={`py-2 px-4 cursor-pointer border border-gray-300 text-center ${
                    colIndex === 3 && rowIndex === 2 ? "bg-gray-700" : ""
                  } ${
                    tableData[rowIndex] &&
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
                      className={`${
                        tableData[rowIndex][colIndex].type === "lecture"
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
      <div className="fixed bottom-0 m-8"> 
      <button
        id="button-excel"
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 pl-2 pr-4 rounded-lg"
      >
        <DownloadIcon className="mr-2" />
        Export
      </button>
      </div>

      <div className="fixed bottom-0 right-0 m-8"> 
      <button
        onClick={() => setClearTable(true)}
        className="flex justify-between bg-gray-500 hover:bg-red-700 text-white font-bold py-2 pl-2 pr-4 rounded-lg"
      >
        <DeleteIcon className="mr-2" />
        Clear
      </button>
      </div>
      <CustomModel
        prvData={prvData}
        isOpen={isModelOpen}
        onClose={() => setIsModelOpen(false)}
        onSave={handleSave}
        onRemove={handleRemove}
        selectedYear={selectedYear}
        selectedSemester={selectedSemester}
      />
      <div>
        {clearTable && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 m-4 max-w-xs max-h-full text-center">
              <h1 className="text-black text-2xl font-bold mb-8">
                {" "}
                Are you sure you want to clear the table?
              </h1>
              <button
                onClick={() => setClearTable(false)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg mr-4"
              >
                NO
              </button>
              <button
                onClick={handleClear}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                YES
              </button>
            </div>
          </div>
        )}
      </div>
      {status !== "" && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-red-500 text-white rounded-lg shadow-lg transition-opacity duration-300 opacity-80">
          {status}
        </div>
      )}
    </div>
  );
};

export default CustomTable;
