import React from 'react';

const Table = () => {
  const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
  const timePeriods = ['8:30 - 10:00', '10:15 - 12:00', '12:15 - 14:00', '14:15 - 15:00', '15:15 - 17:00'];
  
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
              
              {[...Array(6)].map((_, colIndex) => (
                <td key={colIndex} className={`py-2 px-4 border border-gray-300 text-center ${ colIndex === 3 && rowIndex === 2 ? 'bg-gray-700' : '' }`}>

                </td>
              ))}
            </tr>

          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Table;
