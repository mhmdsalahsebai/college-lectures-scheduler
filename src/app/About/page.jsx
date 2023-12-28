"use client";
import "../../styles/globals.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const AboutPage = () => {
  const [theme, setTheme] = useState(() => {
    return typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light";
  });
  const [notifications, setNotifications] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [logoutMessage, setLogoutMessage] = useState("");

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (newTheme) => {
    const body = document.body;
    body.classList.remove("dark-theme");
    if (newTheme === "dark") {
      body.classList.add("dark-theme");
    }
  };

  const handleThemeChange = (newTheme) => {
    setSelectedTheme(newTheme);
  };

  const handleNotificationsChange = () => {
    setNotifications((prevNotifications) => !prevNotifications);
  };

  const handleSave = () => {
    applyTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    setTheme(selectedTheme);
  };

  const projectData = [
    { name: "Mohamed Salah", imageUrl: "/Images/MS.jpg" },
    { name: "Karim Nady", imageUrl: "/Images/KN.jpg" },
    { name: "Osama Hussein", imageUrl: "/Images/OSA.jpg" },
    { name: "Mazen Elnahla", imageUrl: "/Images/MZ.jpeg" },
    { name: "Abdelrahman Fawzy", imageUrl: "/Images/tst.png" },
    { name: "Abdallah Anwar", imageUrl: "/Images/ANW.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar className='flex-1' />
      <div className="fixed"> 
      <main className="flex flex-row h-full bg-gray-200 py-4">
        <Sidebar className="h-full" setLogoutMessage={setLogoutMessage} />

        <div className="flex flex-col items-center justify-between w-full my-12">
          <div className="flex items-center justify-center mb-10 w-1/2">
            <div className="bg-gray-100 p-8 rounded-md shadow-md w-full">
              <h1 className="text-black text-3xl font-bold mb-4 text-center">
                About The Project
              </h1>
              <p className="text-gray-700 text-center leading-6">
                Welcome to the College Lectures Scheduler! Our mission is to
                empower students and professors by providing a user-friendly
                platform that revolutionizes the way academic schedules are
                created and managed. We understand the challenges you face, and
                we are here to make your academic journey smoother and more
                organized.
              </p>
            </div>
          </div>

          <h2 className="text-4xl text-blue-500 mb-8 text-center">About us</h2>
          <div className="container mx-auto flex justify-center">
            <div className="flex w-full bg-gray-100 p-4 items-center justify-center rounded-md shadow-md">
              <div className="grid text-black grid-cols-6 md:grid-cols-2 lg:grid-cols-6 gap-24">
                {projectData.map((project, index) => (
                  <div key={index} className="col">
                    <div className="card h-100">
                      <div className="overflow-hidden rounded-full w-32 h-32 mx-auto">
                        <Image
                          src={project.imageUrl}
                          alt={project.name}
                          width={170}
                          height={170}
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {logoutMessage && (
          <div className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-lg transition-opacity duration-300 opacity-80">
            {logoutMessage}
          </div>
        )}
      </main>
      </div>
    </div>
  );
};

export default AboutPage;
