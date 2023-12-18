import React from 'react';
import classNames from 'classnames';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';


const Sidebar = ({ toggle }) => {
  const wrapperClasses = classNames(
    "group w-12 py-12 bg-gray-800 flex flex-col gap-4 items-center justify-start transition-all duration-500 hover:w-48",

  );
  const boxClasses = 'mb-6 text-md font-semibold text-white p-2 bg-gray-800 rounded-md transition-transform hover:font-bold hover:scale-95 cursor-pointer';
  const iconClasses = 'hover:font-bold hover:scale-95 cursor-pointer';
  const buttonClasses = classNames('bg-white mb-6 text-gray-800 font-semibold rounded-md p-2', { 'mt-5 p-2': toggle, })
  return (
    <div className={wrapperClasses}>
      <Link href="/">
        <div className='group flex flex-row text-center justify-center cursor-pointer mb-4 text-white' >
          <span className='mr-4'><CalendarMonthIcon fontSize="small" /></span>
          <span className="hidden transition-all duration-500 group-hover:inline-block">Calendar</span>
        </div>
      </Link>

      <Link href="/">
        <div className='group flex flex-row text-center justify-center cursor-pointer mb-4 text-white' >
          <span className='mr-4'><BadgeOutlinedIcon fontSize="small" /></span>
          <span className="hidden transition-all duration-500 group-hover:inline-block">Instructors</span>
        </div>
      </Link>

      <Link href="/">
        <div className='group flex flex-row text-center justify-center cursor-pointer mb-4 text-white' >
          <span className='mr-4'><AccountCircleIcon fontSize="small" /></span>
          <span className="hidden transition-all duration-500 group-hover:inline-block">Admin</span>
        </div>
      </Link>

      <Link href="/">
        <div className='group flex flex-row text-center justify-center cursor-pointer mb-4 text-white' >
          <span className='mr-4'><SettingsIcon fontSize="small" /></span>
          <span className="hidden transition-all duration-500 group-hover:inline-block">Settings</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
