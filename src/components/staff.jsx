import React, { useState, useEffect } from "react";
import Select from "react-select";

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

  const options = data.map((item) => ({
    value: item["Name"],
    label: item["Name"],
  }));

  const handleSelectChange = (selectedOption) => {
    // Update the state with the selected value
    setSelectedStaff(selectedOption.value);
  };

  return (
    <div>
      <label>
        Choose a staff from this list:
        <Select
          id="selectedStaff"
          options={options}
          value={options.find((option) => option.value === selectedStaff)}
          onChange={handleSelectChange}
        />
      </label>
    </div>
  );
};

export default Staff;
