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
    return typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light';
  });
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (newTheme) => {
    if (newTheme === 'dark') {
      document.body.classList.add('dark-theme');
      const container = document.getElementById('container');
      if (container) {
        container.classList.add('dark-theme');
      }
      const child = document.getElementById('child');
      if (child) {
        child.classList.add('dark-theme');
      }
    } else {
      document.body.classList.remove('dark-theme');
      const container = document.getElementById('container');
      if (container) {
        container.classList.remove('dark-theme');
      }
      const child = document.getElementById('child');
      if (child) {
        child.classList.remove('dark-theme');
      }
    }
  };
  return (
    <div className="h-full w-full">
      {isAuthorized ? (
        <>
          <Navbar />
          <main className="overflow-y-auto h-[95vh] flex-1 flex flex-row md:flex-row sm:flex-row">
            <Sidebar className="h-full" setLogoutMessage={setLogoutMessage} />
            <div className="flex-1 p-2 text-white">
              <CustomTable />
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
