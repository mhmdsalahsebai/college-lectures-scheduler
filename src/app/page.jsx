"use client";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import NavbarLogin from "@/components/NavbarLogin";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import CustomTable from "@/components/CustomTable";
import Image from "next/image";
import Login from "@/components/LogIn";
import { useAuth } from "@/hooks/useAuth";

export default function Page() {
  const [logoutMessage, setLogoutMessage] = useState("");
  const { isAuthorized, loading, handleAuthorization } = useAuth();

  const handleLogin = async () => {
    try {
      await handleAuthorization(true);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  const [theme, setTheme] = useState(() => {
    return typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light";
  });
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (newTheme) => {
    if (newTheme === "dark") {
      document.body.classList.add("dark-theme");
      const container = document.getElementById("container");
      if (container) {
        container.classList.add("dark-theme");
      }
      const child = document.getElementById("child");
      if (child) {
        child.classList.add("dark-theme");
      }
    } else {
      document.body.classList.remove("dark-theme");
      const container = document.getElementById("container");
      if (container) {
        container.classList.remove("dark-theme");
      }
      const child = document.getElementById("child");
      if (child) {
        child.classList.remove("dark-theme");
      }
    }
  };
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedSemester, setSelectedSemester] = useState(0);
  const list_year = [
    "First Year",
    "Second Year",
    "Third Year",
    "Fourth Year",
  ]
  const list_semester = [
    "First Semester",
    "Second Semester",
  ]

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10">
      {isAuthorized ? (
        <>
          <Navbar />
          <div className="flex justify-center items-center bg-black dark:bg-gray-800 px-6 py-4 shadow-md w-full">
            <ul class="flex cursor-pointer">
              {list_year.map((year, index) => (
                <li class="mr-10" key={year + index}>
                  {index === selectedYear ? (
                    <a
                      class="text-blue-200 border-b-2 border-blue-500 pb-2"
                      onClick={() => setSelectedYear(index)}
                    >
                      {year}
                    </a>
                  ) : (
                    <a
                      class="text-gray-200 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 pb-2"
                      onClick={() => setSelectedYear(index)}
                    >
                      {year}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <ul class="flex cursor-pointer ml-10 pd-10">
                {list_semester.map((semester, index) => (
                  <li class="mr-10">
                    {index === selectedSemester ? (
                      <a
                        class="text-green-200 border-b-2 border-green-500 pb-2"
                        onClick={() => setSelectedSemester(index)}
                      >
                        {semester}
                      </a>
                    ) : (
                      <a
                        class="text-gray-200 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 pb-2"
                        onClick={() => setSelectedSemester(index)}
                      >
                        {semester}
                      </a>
                    )}
                  </li>

                ))}
              </ul>
          </div>
          <main className="overflow-y-auto h-[84vh] flex-1 flex flex-row md:flex-row sm:flex-row">
            <Sidebar className="h-full" setLogoutMessage={setLogoutMessage} />
            <div className="flex-1 p-2 text-white">
              <CustomTable selectedYear={selectedYear} />
              {logoutMessage && (
                <div className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-lg transition-opacity duration-300 opacity-80">
                  {logoutMessage}
                </div>
              )}
            </div>
          </main>
        </>
      ) : !loading ? (
        <>
          <NavbarLogin />
          <Login
            handleLogin={handleLogin}
            handleAuthorization={handleAuthorization}
          />
          <div
            className="fixed top-0 left-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/Images/bg.jpg')",
              zIndex: -1,
            }}
          ></div>
        </>
      ) : (
        <>
          <NavbarLogin />
          <h1 className="flex text-2xl font-medium items-center text-white justify-center h-screen">
            Loading ...
          </h1>
          <div
            className="fixed top-0 left-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/Images/bg.jpg')",
              zIndex: -1,
            }}
          ></div>
        </>
      )}
    </div>
  );
}