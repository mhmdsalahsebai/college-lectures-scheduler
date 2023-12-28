"use client";
import "../../styles/globals.css";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col w-full">
          {children}
      </body>
    </html>
  );
}
