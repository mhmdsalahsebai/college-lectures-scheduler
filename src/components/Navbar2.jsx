import React from 'react';
import Image from 'next/image';

const Navbar2 = ({ user }) => {
  return (
    <nav className="bg-light sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-2">
        <div> <Image src="/Images/eng.png" alt="Logo 1" width={120} height={120} /> </div>
        <div> <Image src="/Images/university.png" alt="Logo 2" width={120} height={120} /> </div>
      </div>
    </nav>
  );
};

export default Navbar2;
