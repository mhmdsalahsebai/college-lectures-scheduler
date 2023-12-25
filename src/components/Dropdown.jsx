import React, { useState, useEffect } from "react";

const Dropdown = ({ clearData, selectedYear }) => {
  const [subjectData, setSubjectData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  useEffect(() => {
    if (clearData) {
      setSelectedSubject("");
      setSelectedCategory("");
      setSubjectData([]);
    }
  }, [clearData]);

  useEffect(() => {
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
  }, [selectedCategory]);

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSelectChange2 = (event) => {
    setSelectedSubject(event.target.value);
  };

  const generateYearOptions = () => {
    const terms = ["1Term", "2Term"];
    const options = [];

    terms.forEach((term) => {
      options.push(`${selectedYear}Year_${term}`);
    });

    return options;
  };

  return (
    <div>
      <select
        className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        id="selectedCategory"
        name="selectedCategory"
        value={selectedCategory}
        onChange={handleSelectChange}
      >
        <option value="">Select year and term</option>
        {generateYearOptions().map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <input
        className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        list="subject"
        id="selectedSubject"
        placeholder="Choose a Subject"
        name="selectedSubject"
        value={selectedSubject}
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
