"use client"
import '../../styles/globals.css';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';

export default function RootLayout({
  children,
}) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <html lang="en">
      <body>
        <Navbar toggle={toggle} />
        <div className="h-[94.6vh] w-[90vw]">
          <div className="h-full flex flex-row justify-start">
            <Sidebar toggle={toggle} handleToggle={handleToggle} />

            <div className={'flex-1 p-2 text-white'}>
              <Hero />
              <div className='p-2 m-6 rounded-lg h-52'>

              </div>
              {children}
            </div>

          </div>
        </div>
      </body>
    </html>
  );
}
