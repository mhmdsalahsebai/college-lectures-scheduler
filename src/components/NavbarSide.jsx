import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {NAV_LINKS} from '@/constants'


const NavbarSide = ({show,children}) => {
  return (
    <>
    <div className={`border shadow w-10 h-screen bg-slate-200 fixed top-0 left-0 transition-all duration-300
    ${show? 
    "w-40" 
    : 
    "w-10 hidden"}`}>
         {children}
    </div>
    </>
  )
}

export default NavbarSide