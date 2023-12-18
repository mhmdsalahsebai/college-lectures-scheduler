import React from 'react';
import Image from 'next/image';

const Navbar2 = ({ user }) => {
  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between px-2 py-2">
        <div> <Image src="/Images/eng.png" alt="Logo 1" width={150} height={150} /> </div>
        <div> <Image src="/Images/university.png" alt="Logo 2" width={150} height={150} /> </div>
      </div>
    </nav>
  );
};

export default Navbar2;
