"use client";
import "../styles/globals.css";
import React, { useState } from "react";
import NavbarLogin from "@/components/NavbarLogin";
import Image from "next/image";
import Login from "@/components/LogIn";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";

export default function RootLayout({ children }) {
  const { isAuthorized, loading, handleAuthorization } = useAuth();

  const handleLogin = async () => {
    try {
      await handleAuthorization(true);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          <NavbarLogin />
          {isAuthorized ? (
            <>{children}</>
          ) : !loading ? (
            <>
              <Login
                handleLogin={handleLogin}
                handleAuthorization={handleAuthorization}
              />
            </>
          ) : (
            <>
              <h1 className="flex text-2xl font-medium items-center text-white justify-center h-screen">
                Loading ...
              </h1>
            </>
          )}
          <div
            className="mt-12"
            style={{
              zIndex: -1,
              position: "fixed",
              width: "100vw",
              height: "100vh",
            }}
          >
            <Image src="/Images/bg.jpg" layout="fill" objectFit="cover" />
          </div>
        </div>
      </body>
    </html>
  );
}
