import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

// Functional component
const Navbar = ({ handleToggle, toggle }) => {
  // Generate dynamic class names
  const buttonClasses = classNames('bg-sky-700 text-white p-2', {
    'rotate-90': toggle,
  });

  // JSX structure
  return (
    <nav className="flexBetween max-container relative z-30 h-10 py-5">
      <button onClick={handleToggle} title="Slide" className={buttonClasses} type="button">
        <DensityMediumIcon />
      </button>

      <Link href="https://www.google.com">
        <Image src="/Images/university.png" alt="logo" width={74} height={29} />
      </Link>

      <Link href="https:www.google.com">
        <Image src="/Images/eng.png" alt="logo" width={74} height={29} />
      </Link>

      <div className="flexEnd w-30 py-1 padding-container rounded-all rounded-lg bg-white text-gray-900 hover:font-bold cursor-pointer">
        <Image className="mr-4" src="/Images/tst.png" alt="user" width={20} height={20} />
        <div> Hi User </div>
      </div>
    </nav>
  );
};

export default Navbar;
