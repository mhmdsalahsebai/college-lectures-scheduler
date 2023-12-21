import React, { useState, useEffect } from "react";
import Select from "react-select";

const Dropdown = ({ clearData }) => {
  const [subjectData, setSubjectData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedsubject, setselectedsubject] = useState("");

  useEffect(() => {
    if (clearData) {
      setselectedsubject("");
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
    // Update the state with the selected value
    setSelectedCategory(event.target.value);
  };
  const handleSelectChange2 = (event) => {
    // Update the state with the selected value
    setselectedsubject(event.target.value);
  };

  return (
    <div>
      <label>
        select year and term:
        <input
          list="year"
          id="selectedCategory"
          name="selectedCategory"
          value={selectedCategory}
          onChange={handleSelectChange}
        />
      </label>

      <datalist id="year">
        <option value="">select year and term </option>
        <option value="1Year_1Term">1Year_1Term</option>
        <option value="1Year_2Term">1Year_2Term</option>
        <option value="2Year_1Term">2Year_1Term</option>
        <option value="2Year_2Term">2Year_2Term</option>
        <option value="3Year_1Term">3Year_1Term</option>
        <option value="3Year_2Term">3Year_2Term</option>
        <option value="4Year_1Term">4Year_1Term</option>
        <option value="4Year_2Term">4Year_2Term</option>
        <option value="5Year_1Term">5Year_1Term</option>
        <option value="5Year_2Term">5Year_2Term</option>
      </datalist>

      <label
        htmlFor="selectedsubject"
        style={{ display: "block", marginTop: "10px" }}
      >
        Subject
      </label>
      <input
        list="subject"
        id="selectedsubject"
        name="selectedsubject"
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
