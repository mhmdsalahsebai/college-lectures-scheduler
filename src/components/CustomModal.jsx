import React, { useState } from "react";

const CustomModal = ({ isOpen, onClose, onSave, onRemove }) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [type, setType] = useState("lecture");
  const [room, setRoom] = useState("");

  const handleSave = () => {
    onSave({ name, subject, type, room });
    onClose();
  };
const handleRemove = () => {
    onRemove();
    onClose();
  };
  return (
    <div
      className={`fixed inset-0 ${
        isOpen ? "block" : "hidden"
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
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject:
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
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
          <div className="flex justify-between">
            <div>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="ml-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-300"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
            {onRemove && (
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
                onClick={handleRemove}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );  
};

export default CustomModal;
