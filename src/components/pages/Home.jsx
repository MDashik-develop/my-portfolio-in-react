"use client"
import React from 'react'
import me from '../../assets/me.jpg'
import news from '../../assets/news.png'
import demand from '../../assets/demand.jpg'
import { FaBootstrap, FaBriefcase, FaCode, FaFacebook, FaLaptopCode, FaReact, FaTools, FaWordpress, FaWordpressSimple, FaTwitter, FaLinkedin, FaGoogle, FaWhatsapp } from 'react-icons/fa'
import Timeline from '../Timeline'
import { BsArrow90DegUp, BsCodeSlash, BsViewList } from 'react-icons/bs'
import { GrView } from 'react-icons/gr'
import { CgWebsite } from 'react-icons/cg'
import { SiGreensock, SiLaravel, SiLivewire, SiMysql, SiPhp, SiTailwindcss } from 'react-icons/si'
import { TbDevicesCode } from 'react-icons/tb'
import { PiBriefcaseLight } from 'react-icons/pi'
import { LiaLaptopCodeSolid, LiaToolsSolid } from 'react-icons/lia'
import { GoArrowUpRight } from 'react-icons/go'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { IoMdArrowForward } from 'react-icons/io'

function Home() {
   return (
      <>
         <section className='flex flex-col lg:flex-row gap-6 relative z-10 my-5 w-full max-w-full overflow-auto'>
            <div className='h-full flex flex-col gap-8 lg:w-1/3 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.16)] rounded-2xl p-5 text-center '>
               <img src={me} alt="me" className='w-full rounded-2xl' />
               <div className='flex flex-col items-start gap-3'>
                  <h1 className='text-2xl font-bold'>Hi, I'm Md. Ashikur R. 👋</h1>
                  <p className="text-[16px] text-gray-500 font-medium text-justify line-clamp-6">
                     I'm a Full-Stack Web Developer with over 4 years of experience in building
                     modern, scalable web applications. I work with Laravel, Livewire, Blade,
                     Tailwind, React, GSAP, and also create WordPress solutions with WooCommerce
                     and Elementor. I love crafting clean interfaces and delivering fast,
                     user-focused digital experiences.
                  </p>

                  <div className='w-full flex justify-between gap-2'>
                     <button className='w-1/2 bg-green-400 text-white p-4 text-xl font-semibold rounded-md'>Let's Talk</button>
                     <button className='w-1/2 border border-green-100 text-green-400 p-4 text-xl font-semibold rounded-md'>Let's Talk</button>
                  </div>
                  <div className="flex items-center gap-2">
                     <a href="https://web.facebook.com/?_rdc=1&_rdr#" className="text-gray-700 hover:text-green-500 border border-gray-300 rounded-md p-3 duration-300">
                        <FaFacebook size={24} />
                     </a>
                     <a href="https://www.linkedin.com/in/mdashik-develop/" className="text-gray-700 hover:text-green-500 border border-gray-300 rounded-md p-3 duration-300">
                        <FaLinkedin size={24} />
                     </a>
                     <a href="https://x.com/MDashik_develop" className="text-gray-700 hover:text-green-500 border border-gray-300 rounded-md p-3 duration-300">
                        <FaTwitter size={24} />
                     </a>
                     <a href="mailto:mdashik.official.mail@gmail.com"
                        className="w-1/2 bg-green-400 text-white p-4 text-xl font-semibold rounded-md text-center">
                        <FaGoogle size={24} />
                     </a>
                     <a href="https://wa.me/8801795864799"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2 border border-green-100 text-green-400 p-4 text-xl font-semibold rounded-md text-center">
                        <FaWhatsapp size={24} />
                     </a>
                  </div>

               </div>
            </div>

            <div className='h-auto min-h-full flex flex-col sm:flex-row lg:flex-col justify-between gap-5 lg:w-1/3'>
               <div className='h-1/2 w-full flex flex-col items-start gap-3 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.16)] rounded-2xl p-5 text-center '>
                  <h3 className='text-2xl font-semibold'>Work Experience</h3>
                  <div className='flex justify-center w-full h-[261px] md:h-full'>
                     <Timeline />
                  </div>
               </div>

               <div className='h-1/2 w-full flex flex-col items-start gap-3 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.16)] rounded-2xl p-5 text-center '>
                  <h3 className='text-2xl font-semibold'>My Expert Area</h3>
                  <div className='w-full h-full flex flex-col items-center justify-center gap-3.5'>
                     <div className='flex justify-between items-center gap-7 sm:gap-4 lg:gap-7 w-full'>
                        <a href="#" className="w-1/3 text-[#777BB4] flex flex-col items-center justify-center gap-1">
                           <p className="w-full p-3 flex justify-center items-center bg-gray-100 rounded-md duration-300">
                              <SiPhp size={30} />
                           </p>
                           <p className='text-sm font-semibold'>PHP</p>
                        </a>
                        <a href="#" className="w-1/3 flex flex-col items-center justify-center gap-1">
                           <p className="w-full p-3 flex justify-center items-center text-[#FF2D20] bg-gray-100 rounded-md duration-300">
                              <SiLaravel size={30} />
                           </p>
                           <p className='text-sm font-semibold text-[#FF2D20] dark:text-blue-400'>Laravel</p>
                        </a>
                        <a href="#" className="w-1/3 text-[#E48E00] flex flex-col items-center justify-center gap-1">
                           <p className="w-full p-3 flex justify-center items-center bg-gray-100 rounded-md duration-300">
                              <SiMysql size={30} />
                           </p>
                           <p className='text-sm font-semibold '>Mysql</p>
                        </a>
                     </div>
                     <div className='flex justify-between items-center gap-7 sm:gap-4 lg:gap-7 w-full'>
                        <a href="#" className="w-1/3 text-[#E74694] flex flex-col items-center justify-center gap-1">
                           <p className="w-full p-3 flex justify-center items-center bg-gray-100 rounded-md duration-300">
                              <SiLivewire size={30} />
                           </p>
                           <p className='text-sm font-semibold'>livewire</p>
                        </a>
                        <a href="#" className="w-1/3 text-[#61DAFB] flex flex-col items-center justify-center gap-1">
                           <p className="w-full p-3 flex justify-center items-center bg-gray-100 rounded-md duration-300">
                              <FaReact size={30} />
                           </p>
                           <p className='text-sm font-semibold'>React</p>
                        </a>
                        <a href="#" className="w-1/3 text-[#21759B] flex flex-col items-center justify-center gap-1">
                           <p className="w-full p-3 flex justify-center items-center bg-gray-100 rounded-md duration-300">
                              <FaWordpress size={30} />
                           </p>
                           <p className='text-sm font-semibold '>Wordpress</p>
                        </a>
                     </div>
                     <div className='flex justify-between items-center gap-7 sm:gap-4 lg:gap-7 w-full'>
                        <a href="#" className="w-1/3 text-[#88CE02] flex flex-col items-center justify-center gap-1">
                           <p className="w-full p-3 flex justify-center items-center bg-gray-100 rounded-md duration-300">
                              <SiGreensock size={30} />
                           </p>
                           <p className='text-sm font-semibold '>Gsap</p>
                        </a>
                        <a href="#" className="w-1/3 text-[#38BDF8] flex flex-col items-center justify-center gap-1">
                           <p className="w-full p-3 flex justify-center items-center bg-gray-100 rounded-md duration-300">
                              <SiTailwindcss size={30} />
                           </p>
                           <p className='text-sm font-semibold'>Tailwind</p>
                        </a>
                        <a href="#" className="w-1/3 text-[#7952B3] flex flex-col items-center justify-center gap-1">
                           <p className="w-full p-3 flex justify-center items-center  bg-gray-100 rounded-md duration-300">
                              <FaBootstrap size={30} />
                           </p>
                           <p className='text-sm font-semibold'>Bootstrap</p>
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <div className='h-auto min-h-full flex flex-col gap-5 lg:w-1/3 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.16)] rounded-2xl p-5'>
               <div className='w-full flex justify-between items-center'>
                  <h3 className='text-2xl font-semibold'>Recent Projects</h3>
                  <a href="#" className=' text-sm flex gap-1.5 p-0 m-0 justify-between items-center text-green-500 bg-white w-min whitespace-nowrap border-b '>
                     See all Projects
                     <IoMdArrowForward size={14} className='' />
                  </a>
               </div>
               <div className='flex flex-col gap-3 justify-center h-full'>
                  <div className='p-5 h-1/2 bg-gray-100 flex justify-center items-center rounded-2xl relative'>
                     <img src={news}
                        alt=""
                        className='rounded-2xl h-full ' />
                     <div className='absolute top-0 left-0 w-full h-full rounded-2xl flex flex-col justify-center items-end overflow-hidden'>
                        <a href="https://demos.ashik.top/" target='_blank' className='group h-10/12 w-full flex justify-center items-center'>
                           <GrView size={40} className='group-hover:opacity-100 opacity-0 bg-white hover:bg-green-300 p-2.5 rounded-full shadow-xl  transition-all duration-300' />
                        </a>
                        <div className='[background-image:linear-gradient(transparent,rgb(0,0,0,0.2))] p-3 text-left w-full h-2/12'>
                           <span className='text-green-500 bg-white py-1.5 px-2 text-xs rounded-md'>Project Details</span>
                        </div>
                     </div>
                  </div>
                  <div className='p-5 h-1/2 bg-gray-100 flex justify-center items-center rounded-2xl relative'>
                     <img src={demand}
                        alt=""
                        className='rounded-2xl h-full ' />
                     <div className='absolute top-0 left-0 w-full h-full rounded-2xl flex flex-col justify-center items-end overflow-hidden'>
                        <a href="https://tavaasclothing.com/" target='_blank' className='group h-10/12 w-full flex justify-center items-center'>
                           <GrView size={40} className='group-hover:opacity-100 opacity-0 bg-white hover:bg-green-300 p-2.5 rounded-full shadow-xl  transition-all duration-300' />
                        </a>
                        <div className='[background-image:linear-gradient(transparent,rgb(0,0,0,0.2))] p-3 text-left w-full h-2/12'>
                           <span className='text-green-500 bg-white py-1.5 px-2 text-xs rounded-md'>Project Details</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className='flex flex-col lg:flex-row gap-6 relative z-10 h-min '>
            <div className="w-full lg:w-2/3 bg-white h-full flex flex-col gap-8 shadow-[0_1px_4px_rgba(0,0,0,0.16)] rounded-2xl p-5">
               <div className='w-full flex justify-between'>
                  <h3 className='text-2xl font-semibold'>Services I Offerd</h3>
                  <a href="#" className=' text-sm flex gap-1.5 p-0 m-0 justify-between items-center text-green-500 bg-white w-min whitespace-nowrap border-b '>
                     See all Service
                     <IoMdArrowForward size={14} className='' />
                  </a>
               </div>
               <div className="w-full max-w-full flex justify-between items-center gap-4 overflow-x-auto no-scrollbar overflow-hidden">
                  <div className="h-full bg-gray-100 text-gray-700 p-3 rounded-2xl flex flex-col gap-3 justify-center items-center">
                     <div className='bg-white w-full h-full p-8 flex justify-center items-center rounded-2xl shadow hover:shadow-2xl transition-all duration-300'>
                        <BsCodeSlash className='text-green-500 size-10 font-medium' />
                     </div>
                     <h4 className='text-sm text-center font-semibold'>Web Development</h4>
                  </div>
                  <div className="h-full bg-gray-100 text-gray-700 p-3 rounded-2xl flex flex-col gap-3 justify-center items-center">
                     <div className='bg-white w-full h-full p-8 flex justify-center items-center rounded-2xl shadow hover:shadow-2xl transition-all duration-300'>
                        <LiaLaptopCodeSolid className='text-green-500 size-10' />
                     </div>
                     <h4 className='text-sm text-center font-semibold'>Frontend Development</h4>
                  </div>
                  <div className="h-full bg-gray-100 text-gray-700 p-3 rounded-2xl flex flex-col gap-3 justify-center items-center">
                     <div className='bg-white w-full h-full p-8 flex justify-center items-center rounded-2xl shadow hover:shadow-2xl transition-all duration-300'>
                        <FaWordpressSimple className='text-green-500 size-10' />
                     </div>
                     <h4 className='text-sm text-center font-semibold'>WordPress Solutions</h4>
                  </div>
                  <div className="h-full bg-gray-100 text-gray-700 p-3 rounded-2xl flex flex-col gap-3 justify-center items-center">
                     <div className='bg-white w-full h-full p-8 flex justify-center items-center rounded-2xl shadow hover:shadow-2xl transition-all duration-300'>
                        <PiBriefcaseLight className='text-green-500 size-10' />
                     </div>
                     <h4 className='text-sm text-center font-semibold'>Business Websites</h4>
                  </div>
                  <div className="h-full bg-gray-100 text-gray-700 p-3 rounded-2xl flex flex-col gap-3 justify-center items-center">
                     <div className='bg-white w-full h-full p-8 flex justify-center items-center rounded-2xl shadow hover:shadow-2xl transition-all duration-300'>
                        <LiaToolsSolid className='text-green-500 size-10' />
                     </div>
                     <h4 className='text-sm text-center font-semibold'>System Maintenance</h4>
                  </div>
               </div>
            </div>


            <div className="lg:w-1/3 bg-white h-full min-h-full flex flex-col gap-8 shadow-[0_1px_4px_rgba(0,0,0,0.16)] rounded-2xl p-5">
               <div className='w-full flex justify-between'>
                  <marquee behavior="" direction="" className='text-lg font-semibold bg-gray-100 text-gray-700 p-3 rounded-xl'>
                     Open for Projects ✨ Creating Digital Magic 🎨 Open for Projects ✨ lding Modern Web Experiences 💻
                  </marquee>
               </div>
               <div>
                  <h2 className='text-[40px] font-semibold leading-[1.3em]'>
                     Let's 👋 <br /> Work Together
                  </h2>
               </div>
               <div>
                  <a href="#" className='w-max flex justify-start items-center gap-1.5 text-[16px] text-green-400 font-medium border-b'>
                     Lets Talk
                     <IoMdArrowForward size={14} className='' />
                  </a>
               </div>
            </div>
         </section>
      </>
   )
}

export default Home