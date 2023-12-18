import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

// Functional component
const Navbar = ({toggle }) => {
  // Generate dynamic class names;

  // JSX structure
  return (

    <nav className="bg-white">
      <div className="flex items-center justify-between px-2 py-2">

        <Link href="https://www.google.com">
          <Image src="/Images/eng.png" alt="logo" width={170} height={170} />
        </Link>

        {/* <Link href="https:www.google.com">
          <Image src="/Images/university.png" alt="logo" width={150} height={150} />
        </Link> */}

        <div className="flexEnd w-30 padding-container rounded-all rounded-lg bg-white text-gray-900 cursor-pointer">
          <Image className="mr-4" src="/Images/tst.png" alt="user" width={30} height={30} />
          <div>
          <p className="mb-0 font-bold p-0">Hello</p>
          <p className="mb-0 text-sm p-0">Adminstrator</p>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
