// Staff.js
import React, { useState, useEffect } from 'react';

const Staff = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    // Fetch data from the JSON file
    fetch('/staff.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <select
        id="staffSelect"
        value={selectedItem}
        onChange={(e) => setSelectedItem(e.target.value)}
      >
        <option value="" disabled>Select from Staff</option>
        {data.map(item => (
          <option key={item["Name"]} value={item["Name"]}>
            {item["Name"]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Staff;
