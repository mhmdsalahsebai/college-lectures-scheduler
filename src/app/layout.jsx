"use client";
import "../styles/globals.css";
import React, { useState } from "react";
import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import Login from "@/components/LogIn";
import { useRouter } from 'next/router';
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

export default function RootLayout({ children }) {
  const { isAuthorized, loading, handleAuthorization } = useAuth();
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          <Navbar2 />
          {isAuthorized ? (
            children
          ) : !loading ? (
            <Login handleAuthorization={handleAuthorization} />
          ) : (
            <>
              <h1 className='flex text-2xl font-medium text-center text-white justify-center'>Loading ...</h1>
              <Link href='./MainPage'></Link>
            </>

          )}
          <div className='mt-12' style={{ zIndex: -1, position: 'fixed', width: '100vw', height: '100vh' }}>
            <Image src="/Images/bg.jpg" layout='fill' objectFit='cover' />
          </div>
        </div>

      </body>
    </html>
  );
}
