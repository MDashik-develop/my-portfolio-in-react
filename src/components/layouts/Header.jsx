import React from 'react'
import { BiHome, BiMenu, BiUser } from 'react-icons/bi'
import { FaHome, FaMoon } from 'react-icons/fa'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { FcNightLandscape } from 'react-icons/fc'
import { GiNightSky } from 'react-icons/gi'
import { TbLayoutDashboard, TbMessage2, TbPencilHeart, TbSmartHome, TbStack2, TbTrademark, TbUserSquareRounded } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

function Header() {
   return (
      <header className='flex justify-between items-center top-0 sticky z-50 p-2 pl-5 shadow-[0_1px_4px_rgba(0,0,0,0.16)] bg-white rounded-2xl w-full'>
         <div className="logo">
            <h1 className='text-2xl font-bold'>Developer</h1>
         </div>
         <nav className='gap-1 items-center hidden lg:flex'>
            <NavLink to="/"
               className={({ isActive }) => `flex justify-center items-center gap-2 text-[16px] font-medium px-2 py-1.5 rounded-md duration-300 hover:text-gray-600 hover:bg-gray-100
                     ${isActive ? "text-gray-600 bg-gray-100" : "text-gray-500"}`}
            >
               <TbSmartHome size={20} />
               Home
            </NavLink>
            <NavLink to="/about" 
               className={({ isActive }) => `flex justify-center items-center gap-2 text-[16px] font-medium px-2 py-1.5 rounded-md duration-300 hover:text-gray-600 hover:bg-gray-100
                     ${isActive ? "text-gray-600 bg-gray-100" : "text-gray-500"}`}
            >
               <TbUserSquareRounded size={20} /> About
            </NavLink>
            <NavLink to="/serivces"
               className={({ isActive }) => `flex justify-center items-center gap-2 text-[16px] font-medium px-2 py-1.5 rounded-md duration-300 hover:text-gray-600 hover:bg-gray-100
                     ${isActive ? "text-gray-600 bg-gray-100" : "text-gray-500"}`}
            >
               <TbStack2 size={20} />
               Serivces
            </NavLink>
            <NavLink to="/portfolio" 
               className={({ isActive }) => `flex justify-center items-center gap-2 text-[16px] font-medium px-2 py-1.5 rounded-md duration-300 hover:text-gray-600 hover:bg-gray-100
                     ${isActive ? "text-gray-600 bg-gray-100" : "text-gray-500"}`}
            >
               <TbLayoutDashboard size={20} /> portfolio
            </NavLink>
            <NavLink to="/blog"
               className={({ isActive }) => `flex justify-center items-center gap-2 text-[16px] font-medium px-2 py-1.5 rounded-md duration-300 hover:text-gray-600 hover:bg-gray-100
                     ${isActive ? "text-gray-600 bg-gray-100" : "text-gray-500"}`}
            >
               <TbPencilHeart size={20} />
               Blog
            </NavLink>
            <NavLink to="/contact" 
               className={({ isActive }) => `flex justify-center items-center gap-2 text-[16px] font-medium px-2 py-1.5 rounded-md duration-300 hover:text-gray-600 hover:bg-gray-100
                     ${isActive ? "text-gray-600 bg-gray-100" : "text-gray-500"}`}
            >
               <TbMessage2 size={20} /> contact
            </NavLink>
         </nav>
         <div className='flex justify-center items-center gap-6'>
            <button className='text-xl'>
               <FaMoon />
            </button>
            <button className='flex lg:hidden text-2xl'>
               <BiMenu />
            </button>
            <NavLink to="/dark" className='hidden sm:flex justify-center items-center gap-2 text-[16px] font-semibold text-white  bg-zinc-900 py-3.5 px-6 rounded-md duration-300'>
               Let's Talk
               <FaArrowTrendUp size={20} />
            </NavLink>
         </div>
      </header>
   )
}

export default Header