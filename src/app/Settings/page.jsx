"use client";
import React, { useState, useEffect } from 'react';
import '../../styles/globals.css';

const SettingsPage = () => {
  const [theme, setTheme] = useState(() => {
    return typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light';
  });
  const [notifications, setNotifications] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState(theme);

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
  const handleThemeChange = (newTheme) => {
    setSelectedTheme(newTheme);
  };
  const handleNotificationsChange = () => {
    setNotifications((prevNotifications) => !prevNotifications);
  };

  const handleSave = () => {
    applyTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
    setTheme(selectedTheme); 
  };

  return (
    <div id='container' className="container mx-auto pt-20 p-6 mt-4 rounded-lg bg-white shadow-md">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      <div id='child' className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Theme</h2>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="light"
                checked={selectedTheme === "light"}
                onChange={() => handleThemeChange("light")}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Light</span>
            </label>

            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                value="dark"
                checked={selectedTheme === "dark"}
                onChange={() => handleThemeChange("dark")}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Dark</span>
            </label>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Notifications</h2>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={notifications}
              onChange={handleNotificationsChange}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2">Receive notifications</span>
          </label>
        </div>

        <div className="mt-6">
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
