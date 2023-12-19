import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between px-3 py-2">
        <Link href="/">
          <Image src="/Images/eng.png" alt="logo" width={170} height={170} />
        </Link>
        <div className="flexEnd w-30 px-2 rounded-all rounded-lg bg-white text-gray-900 cursor-pointer">
          <Image
            className="mr-4"
            src="/Images/tst.png"
            alt="user"
            width={30}
            height={30}
          />
          <div>
            <p className="font-bold">Hello</p>
            <p className="text-sm">Administrator</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
