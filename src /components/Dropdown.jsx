import React, { useState, useEffect } from 'react';

const Dropdown = () => {
  const [subjectData, setSubjectData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedCategory !== '') {
          const response = await fetch(`/${selectedCategory}.json`);
          const data = await response.json();

          setSubjectData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <select onChange={handleCategoryChange} value={selectedCategory}>
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
      </select>

      {selectedCategory && (
        <>
          <select>
            {subjectData.map(subject => (
              <option key={subject["Subject code"]} value={subject["Subject code"]}>
                {subject["Subject name"]}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default Dropdown;
