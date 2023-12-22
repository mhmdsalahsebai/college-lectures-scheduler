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

  const options = [
    { value: "1Year_1Term", label: "1Year_1Term" },
    { value: "1Year_2Term", label: "1Year_2Term" },
    { value: "2Year_1Term", label: "2Year_1Term" },
    { value: "2Year_2Term", label: "2Year_2Term" },
    { value: "3Year_1Term", label: "3Year_1Term" },
    { value: "3Year_2Term", label: "3Year_2Term" },
    { value: "4Year_1Term", label: "4Year_1Term" },
    { value: "4Year_2Term", label: "4Year_2Term" },
    { value: "5Year_1Term", label: "5Year_1Term" },
    { value: "5Year_2Term", label: "5Year_2Term" },
  ];

  const handleSelectChange = (selectedOption) => {
    setSelectedCategory(selectedOption.value);
  };

  const handleSelectChange2 = (selectedOption) => {
    setselectedsubject(selectedOption.label);
  };

  return (
    <div>
      <label>
        Select Year and Term:
        <Select
          options={options}
          value={options.find((option) => option.value === selectedCategory)}
          onChange={handleSelectChange}
        />
      </label>

      <label
        htmlFor="selectedsubject"
        style={{ display: "block", marginTop: "10px" }}
      >
        Subject
      </label>
      <Select
        id="selectedsubject"
        options={subjectData.map((subject) => ({
          value: subject["Subject code"],
          label: subject["Subject name"],
        }))}
        value={options.find((option) => option.label === selectedsubject)}
        onChange={handleSelectChange2}
      />
    </div>
  );
};

export default Dropdown;
