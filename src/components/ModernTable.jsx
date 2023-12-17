import React, { useState } from 'react';
import CustomModal from './CustomModal';

const Table = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ row: 0, col: 0 });
  const [tableData, setTableData] = useState([[]]);
  const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
  const timePeriods = ['8:30 - 10:00', '10:15 - 12:00', '12:15 - 14:00', '14:15 - 15:00', '15:15 - 17:00'];

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

    updatedData[row][col] = { name: data.name, subject: data.subject, type: data.type };
    setTableData(updatedData);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th rowSpan={2} className="py-2 px-4 border border-gray-300 text-center">
              Time
            </th>
            <th colSpan={7} className="py-2 px-4 border border-gray-300 text-center">
              Days of the Week
            </th>
          </tr>
          <tr>
            {days.map((day, index) => (
              <th key={index} className="py-2 px-4 border border-gray-300 text-center">
                {day}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="py-2 px-4 border border-gray-300 text-gray-900 text-center">
          {timePeriods.map((time, rowIndex) => (
            <tr key={rowIndex}>
              <td className="py-2 px-4 border border-gray-300 font-semibold text-center">{time}</td>
              {days.map((_, colIndex) => (
                <td
                  key={colIndex}
                  className={`py-2 px-4 border border-gray-300 text-center ${
                    colIndex === 3 && rowIndex === 2 ? 'bg-gray-700' : ''
                  } ${
                    tableData[rowIndex] &&
                    tableData[rowIndex][colIndex] &&
                    tableData[rowIndex][colIndex].type === 'lecture'
                      ? 'bg-green-200'
                      : tableData[rowIndex] &&
                        tableData[rowIndex][colIndex] &&
                        tableData[rowIndex][colIndex].type === 'section'
                      ? 'bg-blue-200'
                      : ''
                  }`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                >
                  {tableData[rowIndex] && tableData[rowIndex][colIndex] && (
                    <span
                      className={`${
                        tableData[rowIndex][colIndex].type === 'lecture'
                          ? 'bg-light-green-200'
                          : 'bg-light-blue-200'
                      }`}
                    >
                      {tableData[rowIndex][colIndex].subject} <br></br> {tableData[rowIndex][colIndex].name}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} />
    </div>
  );
};

export default Table;