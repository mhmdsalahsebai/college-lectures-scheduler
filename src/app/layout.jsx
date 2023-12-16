"use client"
import '../styles/globals.css';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';

// export const metadata: Metadata = {
//   title: 'College Scheduler',
//   description: 'Scheduler for College lectures',
// };

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
        <Navbar toggle={toggle} handleToggle={handleToggle} />
        
        <main className="w-screen">
          <div className="h-full flex flex-row justify-start">
            
            <Sidebar toggle={toggle} />
            
            <div className={'flex-1 p-2 bg-slate-200 text-white'}>
              <Hero />
              <div className='p-2 m-6 rounded-lg h-52'>

              </div>
              {children}
            </div>
          
          </div>
        </main>
       
        <Footer />
      </body>
    </html>
  );
}
