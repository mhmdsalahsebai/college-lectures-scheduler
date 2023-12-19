"use client";
import RootLayout from "./layout";
import "../styles/globals.css";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import CustomTable from "@/components/CustomTable";

export default function PageComponent() {
  const [logoutMessage, setLogoutMessage] = useState("");

  return (
    <RootLayout>
      <html lang="en">
        <body className="fixed h-full w-full">
          <Navbar />
          <main>
            <div className="h-screen flex flex-row justify-start">
              <Sidebar setLogoutMessage={setLogoutMessage} />
              <div className="flex-1 p-2 text-white">
                <CustomTable />
                {logoutMessage && (
                  <div className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-lg transition-opacity duration-300 opacity-80">
                    {logoutMessage}
                  </div>
                )}
              </div>
            </div>
          </main>
        </body>
      </html>
    </RootLayout>
  );
}
