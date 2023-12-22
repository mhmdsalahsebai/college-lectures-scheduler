import React, { useState, useEffect } from "react";

const Dropdown = ({ clearData, selectedYear, selectedSemester , setSubject}) => {
  const [subjectData, setSubjectData] = useState([]);
  const [selectedsubject, setselectedsubject] = useState("");
  useEffect(() => {
    setselectedsubject("");
  }, [clearData]);

  useEffect(() => {
    const selectedCategory = (selectedYear + 1) + "Year_" + (selectedSemester + 1) + "Term";
    setselectedsubject("");
    const fetchData = async () => {
      try {
        if (selectedCategory !== "") {
          const response = await fetch(`/${selectedCategory}.json`);
          const data = await response.json();
          setSubjectData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [selectedYear, selectedSemester]);


  const handleSelectChange2 = (event) => {
    // Update the state with the selected value
    setSubject(event.target.value);
    setselectedsubject(event.target.value);
  };

  return (
    <div>
      <input
        className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        list="subject"
        id="selectedSubject"
        placeholder="Choose a Subject"
        name="selectedSubject"
        value={selectedsubject}
        onChange={handleSelectChange2}
      />
      <datalist id="subject">
        {subjectData.map((subject) => (
          <option key={subject["Subject code"]} value={subject["Subject name"]}>
            {subject["Subject name"]}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default Dropdown;
