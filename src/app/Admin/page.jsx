"use client";
import "../../styles/globals.css";
import { useState, useEffect } from "react";
import InfoForm from "@/components/InfoForm";

export default function Page() {
  const [selectedInstructor, setSelectedInstructor] = useState("Professor");
  const list_Instructor = ["Professor", "Teaching Assistant"];
  return (
    <main className="flex-1 h-screen">
      <div className="flex pt-20 justify-center items-center bg-white dark:bg-gray-800 px-4 py-4 shadow-md w-full ">
        <ul className="flex  cursor-pointer ml-10 pd-10 pg-black">
          {list_Instructor.map((instructor) => (
            <li key={instructor} className="mr-10">
              {instructor === selectedInstructor ? (
                <a
                  className="text-green-200 border-b-2 border-green-500 pb-2"
                  onClick={() => setSelectedInstructor(instructor)}
                >
                  {instructor}
                </a>
              ) : (
                <a
                  className="text-gray-200 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 pb-2"
                  onClick={() => setSelectedInstructor(instructor)}
                >
                  {instructor}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="flex  text-3xl font-bold mb-6 pt-6 justify-center ">
          {selectedInstructor} Form
        </h1>
        <InfoForm selectedInstructor={selectedInstructor} />
      </div>
    </main>
  );
}
