"use client"
import '../styles/globals.css';
import React, { useState } from 'react';
import Navbar2 from '@/components/Navbar2';
import Image from 'next/image';
import Login from '@/components/LogIn';

export default function RootLayout({
  children,
}) {

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          <Navbar2/>
          <Login />
          {/* <div className="flex-1 bg-cover" style={{ minHeight: 0 }}> */}
            {/* <Image src="/Images/bg.jpg" alt="Background Image" layout="fill" objectFit="cover" /> */}
            
          {/* </div> */}
          <div className='mt-12' style={{zIndex: -1, position: 'fixed', width: '100vw', height: '100vh'}}>
          <Image src='/Images/bg.jpg' alt='Background' layout='fill' objectFit='cover' />
          </div>
        </div>
      </body>
    </html>
  );
}
