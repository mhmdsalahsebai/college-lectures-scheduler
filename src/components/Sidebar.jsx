import React from 'react';
import classNames from 'classnames';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import SettingsIcon from '@mui/icons-material/Settings';


const Sidebar = ({ toggle }) => {
  const wrapperClasses = classNames(
    'w-10 px-4 py-8 bg-gray-900 flexBetween flex-col items-center transition-all duration-200',
    {
      'w-10': !toggle,
      'w-40': toggle,
    }
  );
  const boxClasses = 'mb-6 text-md font-semibold text-white p-2 bg-gray-800 rounded-md transition-transform hover:font-bold hover:scale-95 cursor-pointer';
  const iconClasses = 'hover:font-bold hover:scale-95 cursor-pointer';

  return (
    <div className={wrapperClasses}>
      <div>
        <div className={toggle ? boxClasses : 'mb-6 text-white'}>
          {toggle ? 'Calendar' : <CalendarMonthIcon className={iconClasses} />}
        </div>
        <div className={toggle ? boxClasses : 'mb-6 text-white'}>
          {toggle ? 'Badge' : <BadgeOutlinedIcon className={iconClasses} />}
        </div>
      </div>

      {/* Add a spacer or divider between the two sets of icons */}
      <div className='w-2' />

      <div>
        <div className={toggle ? boxClasses : 'mb-6 text-white'}>
          {toggle ? 'Account' : <AccountCircleIcon className={iconClasses} />}
        </div>
        <div className={toggle ? boxClasses : 'mb-6 text-white'}>
          {toggle ? 'Settings' : <SettingsIcon className={iconClasses} />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
