"use client"
import React from 'react';
import Navbar from '@/components/Navbar'; // Adjust the import path based on your project structure
import Sidebar from '@/components/Sidebar';
import ProfessorForm from '@/components/ProfessorForm';
import SectionForm from '@/components/SectionForm';

export default function RootLayout({
  children,
}) {

  return (
    <html lang="en">
      <body>
        <Navbar />

        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-10">
            <h1 className="text-3xl font-bold mb-6">Professor Information</h1>
            <ProfessorForm />

            <hr className="my-8" />

            <h1 className="text-3xl font-bold mb-6">Section Information</h1>
            <SectionForm />
          </div>
        </div>
      </body>
    </html>
  );
}
