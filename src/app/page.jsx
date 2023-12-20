"use client";
import "../styles/globals.css";
import { useState } from "react";
import NavbarLogin from "@/components/NavbarLogin";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import CustomTable from "@/components/CustomTable";
import Image from "next/image";
import Login from "@/components/LogIn";
import { useAuth } from "@/hooks/useAuth";


export default function Page() {
  const [logoutMessage, setLogoutMessage] = useState("");
  const { isAuthorized, loading, handleAuthorization } = useAuth();

  const handleLogin = async () => {
    try {
      await handleAuthorization(true);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div className="fixed h-full w-full">
      {isAuthorized ? (
        <>
          <Navbar />
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
        </>
      ) : !loading ? (
        <>
          <NavbarLogin />
          <Login
            handleLogin={handleLogin}
            handleAuthorization={handleAuthorization}
          />
        </>
      ) : (
        <h1 className="flex text-2xl font-medium items-center text-white justify-center h-screen">
          Loading ...
        </h1>
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
  );
}
