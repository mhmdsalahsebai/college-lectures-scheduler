"use client";
import "../../styles/globals.css";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  const [logoutMessage, setLogoutMessage] = useState("");

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10">
      <Navbar />
      <div className="h-screen flex ">
        <Sidebar setLogoutMessage={setLogoutMessage} />
        <div>
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
