"use client";
import "../../styles/globals.css";
import React from "react";
import ProfessorForm from "@/components/ProfessorForm";
import SectionForm from "@/components/SectionForm";

export default function PageComponent() {
  return (
    <main className="flex-1 p-10">
      <h1 className="text-3xl font-bold mb-6">Professor Information</h1>
      <ProfessorForm />
      <hr className="my-8" />
      <h1 className="text-3xl font-bold mb-6">Section Information</h1>
      <SectionForm />
    </main>
  );
}
