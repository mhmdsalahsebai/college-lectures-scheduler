"use client";
import "../../styles/globals.css";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  const [logoutMessage, setLogoutMessage] = useState("");
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
    <div className="flex flex-col w-screen">
      <Navbar />
      <div className="flex">
        <Sidebar className="h-full" setLogoutMessage={setLogoutMessage} />
        <div className="w-full">
          {children}
          {logoutMessage && (
            <div className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-lg transition-opacity duration-300 opacity-80">
              {logoutMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
