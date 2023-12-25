import React, { useState, useEffect } from "react";
import Select from "react-select";

const CustomModel = ({ prvData, isOpen, onClose, onSave, onRemove, selectedYear, selectedSemester }) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [type, setType] = useState("lecture");
  const [room, setRoom] = useState("");
  const [subjectData, setSubjectData] = useState([]);
  const [status, setStatus] = useState("");
  if (status !== "") {
    setTimeout(() => {
      setStatus("");
      console.log("status", status);
    }, 1000);
  }
  useEffect(() => {
    if (prvData && prvData.name) {
      setName(prvData.name);
      setSubject(prvData.subject);
      setType(prvData.type);
      setRoom(prvData.room);
    }
    else {
      setName("");
      setSubject("");
      setType("lecture");
      setRoom("");
    }
  }, [prvData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/staff.json");
        const data = await response.json();

        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const selectedCategory = (selectedYear + 2) + "Year_" + (selectedSemester + 1) + "Term";
        const response = await fetch(`/${selectedCategory}.json`);
        const data = await response.json();

        setSubjectData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [selectedYear, selectedSemester]);

  const optionsName = data.map((item) => ({
    value: item["Name"],
    label: item["Name"],
  }));


  const handleSave = () => {
    if (name === "" || subject === "" || room === "") {
      setStatus("Please fill all the fields");
      return;
    }
    onSave({ name, subject, type, room });
  };

  const handleRemove = () => {
    onRemove();
  };

  const optionsSubject = subjectData.map((item) => ({
    value: item["Subject code"],
    label: item["Subject name"],
  }));
  const handleSelectName = (selectedOption) => {
    setName(selectedOption.value);
  };

  const handleSelectSubject = (selectedOption) => {
    setSubject(selectedOption.label);
  };
  return (
    <div
      className={`fixed inset-0 ${isOpen ? "block" : "hidden"
        } text-gray-900 bg-opacity-50 bg-gray-900`}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white rounded-lg p-8 w-96">
          <div className="text-2xl font-bold mb-4">Add Event</div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
              <Select
                id="selectedStaff"
                options={optionsName}
                value={optionsName.find((option) => option.value === name) || ""}
                onChange={handleSelectName}
              />
            </label>
          </div>
          <div className="mb-4">

            <label
              htmlFor="subject"
              style={{ display: "block", marginTop: "10px" }}
            >
              Subject
            </label>
            <Select
              id="subject"
              options={subjectData.map((subject) => ({
                value: subject["Subject code"],
                label: subject["Subject name"],
              }))}
              value={optionsSubject.find((option) => option.label === subject) || ""}
              onChange={handleSelectSubject}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="room"
              className="block text-sm font-medium text-gray-700"
            >
              Room:
            </label>
            <input
              id="room"
              name="room"
              type="text"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Type:
            </label>
            <div>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  value="lecture"
                  checked={type === "lecture"}
                  onChange={() => setType("lecture")}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <span className="ml-2 text-gray-700">Lecture</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="section"
                  checked={type === "section"}
                  onChange={() => setType("section")}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <span className="ml-2 text-gray-700">Section</span>
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex p-1 space-x-2">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-300"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
            <div>
              {onRemove && (
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
                  onClick={handleRemove}
                >
                  Remove
                </button>
              )}
              {status !== "" && (
                <div  className="fixed bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-red-500 text-white rounded-lg shadow-lg transition-opacity duration-300 opacity-80">
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default CustomModel;
