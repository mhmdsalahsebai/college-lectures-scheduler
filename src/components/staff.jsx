// Staff.js
import React, { useState, useEffect } from "react";

const Staff = ({ onSelect, clearData }) => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedStaff, setSelectedStaff] = useState("");

  useEffect(() => {
    if (clearData) {
      setSelectedItem("");
      setSelectedStaff("");
    }
  }, [clearData]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/staff.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
    setData([selectedItem]);
  }, [selectedItem]);

  const handleSelectChange = (event) => {
    // Update the state with the selected value
    setSelectedStaff(event.target.value);
  };
  return (
    <div>
      <input
        className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Choose from staff list"
        list="browsers"
        id="selectedStaff"
        name="selectedStaff"
        value={selectedStaff}
        onChange={handleSelectChange}
      />

      <datalist id="browsers">
        <option value="" disabled>
          Select from Staff
        </option>
        {data.map((item) => (
          <option key={item.id} value={item.Name}>
            {item.Name}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default Staff;