"use client";
import "../../styles/globals.css";
import React from "react";
import ProfessorForm from "@/components/ProfessorForm";
import SectionForm from "@/components/SectionForm";


if (typeof Node === 'function' && Node.prototype) {
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function (child) {
    if (child.parentNode !== this) {
      if (console) {
        console.warn('Cannot remove a child from a different parent', child, this);
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
          'Cannot insert before a reference node from a different parent',
          referenceNode,
          this
        );
      }
      return newNode;
    }
    return originalInsertBefore.apply(this, arguments);
  };
}

export default function PageComponent() {
  return (
    <main className="flex-1 p-10">
      <div key='uniqueKey'>
        <h1 className="text-center text-3xl font-bold mb-6">Professor Information</h1>
        <ProfessorForm />
        <hr className="my-8" />
        <h1 className="text-center text-3xl font-bold mb-6">Section Information</h1>
        <SectionForm />
      </div>
    </main>
  );
}
