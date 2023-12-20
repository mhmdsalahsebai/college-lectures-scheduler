"use client";
import "../../styles/globals.css";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  const [logoutMessage, setLogoutMessage] = useState("");
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col w-full">
        <Navbar />
        <main className="overflow-y-auto flex-1 flex flex-row md:flex-row sm:flex-row">
          <Sidebar className="h-full" setLogoutMessage={setLogoutMessage} />
          {children}
          {logoutMessage && (
            <div className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-lg transition-opacity duration-300 opacity-80">
              {logoutMessage}
            </div>
          )}
        </main>
      </body>
    </html>
  );
}
