import React from 'react';
import Link from 'next/link';
import { CalendarToday, ContactMail, Lock } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className="group w-12 py-12 bg-gray-700 flex flex-col gap-4 items-center justify-start transition-all duration-500 hover:w-48">

      <Link href="/">
        <div className='group flex flex-row text-center justify-center cursor-pointer mb-4 text-white' >
          <span className='mr-4'><CalendarToday fontSize="small" /></span>
          <span className="hidden transition-all duration-500 group-hover:inline-block">TimeTable</span>
        </div>
      </Link>

      <Link href="/">
      <div className='group flex flex-row text-center justify-center cursor-pointer mb-4 text-white' >
          <span className='mr-4'><ContactMail fontSize="small" /></span>
          <span className="hidden transition-all duration-500 group-hover:inline-block">Faculty Members</span>
        </div>
      </Link>

      <Link href="/">
      <div className='group flex flex-row text-center justify-center cursor-pointer mb-4 text-white' >
          <span className='mr-4'><Lock fontSize="small" /></span>
          <span className="hidden transition-all duration-500 group-hover:inline-block">Admin Edit</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
