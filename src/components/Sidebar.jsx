import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp"; // Import the ExitToAppIcon
import Link from "next/link";

const Sidebar = ({ setLogoutMessage }) => {
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
      });
      if (response.ok) {
        setLogoutMessage("Logout successful!");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        console.error("Logout failed:", response.statusText);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <div className="group relative w-16 px-2 py-4 bg-gray-800 flex flex-col gap-6 items-center transition-all duration-200 hover:w-40 hover:justify-start">
      <div className="flex items-center rounded-lg text-white mb-4 cursor-pointer hover:scale-105 group-hover:bg-gray-700 group-hover:p-2 group-hover:w-full">
        <span className="mr-2">
          <CalendarMonthIcon style={{ fontSize: 24 }} />
        </span>
        <Link href="/">
          <span className="hidden group-hover:inline-block transition-all duration-1000">
            Calendar
          </span>
        </Link>
      </div>

      <div className="flex items-center rounded-lg text-white mb-4 cursor-pointer hover:scale-105 group-hover:bg-gray-700 group-hover:p-2 group-hover:w-full">
        <span className="mr-2">
          <BadgeOutlinedIcon style={{ fontSize: 24 }} />
        </span>
        <Link href="/">
          <span className="hidden group-hover:inline-block transition-all duration-1000">
            Instructors
          </span>
        </Link>
      </div>

      <div className="flex items-center rounded-lg text-white mb-4 cursor-pointer hover:scale-105 group-hover:bg-gray-700 group-hover:p-2 group-hover:w-full">
        <span className="mr-2">
          <AccountCircleIcon style={{ fontSize: 24 }} />
        </span>
        <Link href="/Admin">
          <span className="hidden group-hover:inline-block transition-all duration-1000">
            Admin
          </span>
        </Link>
      </div>

      <div className="flex items-center rounded-lg text-white mb-4 cursor-pointer hover:scale-105 group-hover:bg-gray-700 group-hover:p-2 group-hover:w-full">
        <span className="mr-2">
          <SettingsIcon style={{ fontSize: 24 }} />
        </span>
        <Link href="/">
          <span className="hidden group-hover:inline-block transition-all duration-1000">
            Settings
          </span>
        </Link>
      </div>

      <div
        onClick={handleLogout}
        className="flex items-center rounded-lg text-white cursor-pointer hover:scale-105 group-hover:bg-red-500 group-hover:p-2 group-hover:w-full"
      >
        <span className="mr-2">
          <ExitToAppIcon style={{ fontSize: 24 }} />
        </span>
        <button className="hidden group-hover:inline-block transition-all duration-1000 focus:outline-none">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
