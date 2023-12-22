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
          window.location.replace("/");
        }, 1000);
      } else {
        console.error("Logout failed:", response.statusText);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  const sidebarItems = [
    {
      icon: <CalendarMonthIcon style={{ fontSize: 24 }} />,
      link: "/",
      label: "Calendar",
    },
    {
      icon: <BadgeOutlinedIcon style={{ fontSize: 24 }} />,
      link: "/Professors",
      label: "Professors",
    },
    {
      icon: <BadgeOutlinedIcon style={{ fontSize: 24 }} />,
      link: "/Engineers",
      label: "Engineers",
    },
    {
      icon: <AccountCircleIcon style={{ fontSize: 24 }} />,
      link: "/Admin",
      label: "Admin",
    },
    {
      icon: <SettingsIcon style={{ fontSize: 24 }} />,
      link: "/Settings",
      label: "Settings",
    },
    {
      icon: <ExitToAppIcon style={{ fontSize: 24 }} />,
      handleClick: handleLogout,
      label: "Logout",
    },
  ];

  return (
    <div
      id="side"
      className="group relative w-16 px-2 py-4 bg-gray-800 flex flex-col items-center transition-all duration-200 hover:w-44"
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          {sidebarItems.slice(0, -1).map((item, index) => (
            <div
              key={index}
              className="flex items-center rounded-lg transition-all p-2 duration-300 text-white mb-4 cursor-pointer hover:scale-105 group-hover:bg-gray-700 w-full"
              onClick={item.handleClick || (() => { })}
            >
              <span className="mr-2">{item.icon}</span>
              {item.link ? (
                <Link href={item.link}>
                  <span className="hidden group-hover:inline-block">
                    {item.label}
                  </span>
                </Link>
              ) : (
                <button className="hidden group-hover:inline-block focus:outline-none">
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </div>
        <div></div>
        <div
          className="flex justify-self-end rounded-lg transition-all duration-300 text-white group-hover:bg-red-500 cursor-pointer hover:scale-105 p-2 w-full"
          onClick={handleLogout}
        >
          <span className="mr-2">
            <ExitToAppIcon style={{ fontSize: 24 }} />
          </span>
          <button className="hidden group-hover:inline-block focus:outline-none">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
