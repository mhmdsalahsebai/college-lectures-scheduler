import React, { useState } from 'react';
import Select from 'react-select';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const SectionForm = ({ onSubmit }) => {
  const [sectionInfo, setSectionInfo] = useState({
    engineerName: '',
    email: '',
    phoneNumber: '',
    availability: [],
    course: [],
    courseCode: [],
  });

  const daysOptions = [
    { value: 'Sunday', label: 'Sunday' },
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
  ];

  const courseCodeOptions = [
    { value: 'CCE427', label: 'CCE427' },
    { value: 'CCE428', label: 'CCE428' },
    { value: 'CCE429', label: 'CCE429' },
    { value: 'CCE430', label: 'CCE430' },
    { value: 'CCE431', label: 'CCE431' },
    { value: 'CCE432', label: 'CCE432' },
    { value: 'CCE433', label: 'CCE433' },
    { value: 'CCE434', label: 'CCE434' },
    { value: 'CCE435', label: 'CCE435' },
    { value: 'CCE437', label: 'CCE437' },
  ];

  const courseOptions = [
    { value: 'تصميم تطبيقات الويب', label: 'تصميم تطبيقات الويب' },
    { value: 'المعالجات المتوازية', label: 'المعالجات المتوازية' },
    { value: 'نظم تحكم', label: 'نظم تحكم' },
    { value: 'مقرر اختياري (3)', label: 'مقرر اختياري (3)' },
    { value: 'مقرر اختياري (4)', label: 'مقرر اختياري (4)' },
    { value: 'إبتكار وريادة اعمال', label: 'إبتكار وريادة اعمال' },
    { value: 'معمل معالجة الصور الرقمية', label: 'معمل معالجة الصور الرقمية' },
    { value: 'شبكات الحاسبات اللاسلكية', label: 'شبكات الحاسبات اللاسلكية' },
    { value: 'نظم الروبوت', label: 'نظم الروبوت' },
    { value: 'الذكاء الاصطناعى', label: 'الذكاء الاصطناعى' },
    { value: 'مقرر اختياري (5)', label: 'مقرر اختياري (5)' },
    { value: 'مقرر اختياري (6)', label: 'مقرر اختياري (6)' },
  ];

  const handleCourseCodeChange = (selectedOptions) => {
    setSectionInfo((prevInfo) => ({
      ...prevInfo,
      courseCode: selectedOptions.map((option) => option.value),
    }));
  };

  const handleCourseChange = (selectedOptions) => {
    setSectionInfo((prevInfo) => ({
      ...prevInfo,
      course: selectedOptions.map((option) => option.value),
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Enforce only numbers and the "+" sign
    const sanitizedValue = value.replace(/[^0-9+]/g, '');
    setSectionInfo({ ...sectionInfo, [name]: sanitizedValue });
  };

  const handleDaysChange = (selectedOptions) => {
    setSectionInfo((prevInfo) => ({
      ...prevInfo,
      availability: selectedOptions.map((option) => option.value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(sectionInfo);
  };

  return (
    <form onSubmit={handleSubmit} className="w-3/4 mx-auto px-12 py-6 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label htmlFor="engineerName" className="block text-gray-700 text-sm font-bold mb-2">
          Teaching Assistant Name
        </label>
        <input
          type="text"
          id="engineerName"
          name="engineerName"
          value={sectionInfo.engineerName}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={sectionInfo.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={sectionInfo.phoneNumber}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="availability" className="block text-gray-700 text-sm font-bold mb-2">
          Availability Days
        </label>
        <Select
          isMulti
          options={daysOptions}
          value={daysOptions.filter((option) => sectionInfo.availability.includes(option.value))}
          onChange={handleDaysChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="course" className="block text-gray-700 text-sm font-bold mb-2">
          Course Name
        </label>
        <Select
          isMulti
          options={courseOptions}
          value={courseOptions.filter((option) => sectionInfo.course.includes(option.value))}
          onChange={handleCourseChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="courseCode" className="block text-gray-700 text-sm font-bold mb-2">
          Course Code
        </label>
        <Select
          isMulti
          options={courseCodeOptions}
          value={courseCodeOptions.filter((option) => sectionInfo.courseCode.includes(option.value))}
          onChange={handleCourseCodeChange}
        />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
        Submit
      </button>
    </form>
  );
};

export default SectionForm;
