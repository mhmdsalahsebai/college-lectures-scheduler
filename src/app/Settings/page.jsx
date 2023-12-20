"use client";

if (typeof Node === "function" && Node.prototype) {
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function (child) {
    if (child.parentNode !== this) {
      if (console) {
        console.warn(
          "Cannot remove a child from a different parent",
          child,
          this
        );
      }
      return child;
    }
    return originalRemoveChild.apply(this, arguments);
  };

  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function (newNode, referenceNode) {
    if (referenceNode && referenceNode.parentNode !== this) {
      if (console) {
        console.warn(
          "Cannot insert before a reference node from a different parent",
          referenceNode,
          this
        );
      }
      return newNode;
    }
    return originalInsertBefore.apply(this, arguments);
  };
}

import React, { useState, useEffect } from 'react';
import "../../styles/globals.css";
const SettingsPage = () => {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const handleNotificationsChange = () => {
    setNotifications((prevNotifications) => !prevNotifications);
  };

  const handleSave = () => {
    if (theme === 'dark') {
      document.body.style.setProperty('--bg-color', '#1a1a1af3');
      document.body.style.setProperty('--text-color', '#444');
      document.getElementById('container').style.setProperty('--bg-color', '#1a1a1af3');
      document.getElementById('container').style.setProperty('--text-color', '#444');
    } else {
      document.body.style.setProperty('--bg-color', '#f6f6f6');
      document.body.style.setProperty('--text-color', '#444');
      document.getElementById('container').style.setProperty('--bg-color', '#ffffff');
      document.getElementById('container').style.setProperty('--text-color', '#444');
    }
  };

  return (
    <div id='container' className="container mx-auto p-6 mt-4 rounded-lg bg-white shadow-md">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Theme</h2>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="light"
                checked={theme === "light"}
                onChange={() => handleThemeChange("light")}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Light</span>
            </label>

            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                value="dark"
                checked={theme === "dark"}
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
          <button
            button className="btn btn-primary"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
