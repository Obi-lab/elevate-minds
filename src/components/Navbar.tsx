"use client"
import Link from "next/link"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { EnvelopeIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/16/solid";
import { usePathname } from 'next/navigation';


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen)
  };
  const pathname = usePathname();
  const isActive = (path: string): boolean => pathname === path;

  return (
    <div className="bg-black w-full sticky top-0 z-50 ">
      <div className="flex flex-col w-[100%] bg-white ">

        <div className=" flex flex-row text-white justify-between  bg-gray-800 w-[100vw] overflow-hidden">
          <div className="flex  md:flex-row  flex-col font-bold items-center px-20 bg-gray-800 md:w-[75vw] w-[100vw]">
            <div className="flex flex-row  gap-3 items-center px-4 py-3 md:border-r  border-green-100">
              <div><EnvelopeIcon className="h-4 w-4 " /></div>
              <a href="mailto:example@example.com" className="mt-1 text-white hover:text-blue-700">
                example@example.com
              </a>
            </div>
            <div className="flex flex-row px-4 py-3 items-center gap-3 md:border-r border-green-100">
              <div><PhoneIcon className="h-4 w-4" /></div>
              <a href="tel:+11234567890" className="mt-1 text-white hover:text-blue-700">
                (254) 735355764
              </a>
            </div>
            <div className="flex flex-row gap-2  px-4 py-3 items-center ">
              <div><MapIcon className="h-4 w-4" /></div>
              <p>Vision Plaza,Nairobi</p>
            </div>

          </div>
          <div className=" w-[35vw] md:flex hidden px-4 -skew-x-[35deg] overflow-hidden bg-red-600 items-center justify-end">
            <div className="flex flex-row gap-4 skew-x-[35deg] px-20">
              <Link className="text-white bg-red-600 rounded" href="/">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"></path>
                </svg>
              </Link>

              <Link href="/" className="text-white bg-red-600 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </Link>
              <Link href="/" className="text-red-600 bg-white rounded">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 455 455" aria-hidden="true">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path fillRule="evenodd" clipRule="evenodd" d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087 c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345 c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537 c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002 z">
                      </path>
                    </g>
                  </g>
                </svg>
              </Link>


            </div>

          </div>

        </div>
        
        <div className=" py-10 md:px-20 px-10 flex md:flex-row gap-8  items-center shadow-bottom-only justify-between ">
          <div className="">
            <p>Elevate Minds</p>

          </div>
          <div className={`md:static md:min-h-fit absolute md:w-auto w-full min-h-[60vh] flex flex-col gap-8
             left-0 md:block  ${menuOpen ? 'block  z-100 bg-white top-0 py-3 h-[100vh]' : 'hidden items-center'} 
               rounded   px-5 transition-all duration-700`}>
            <div className="flex justify-end p-4 md:hidden">
              <div className="flex flex-col gap-2" onClick={toggleMenu}>
                <div className="flex flex-row gap-2" >
                  <div className=" h-1.5 w-1.5 rounded  bg-gray-800 "></div>
                  <div className=" h-1.5 w-1.5 rounded  bg-red-600"></div>
                  <div className=" h-1.5 w-1.5 rounded  bg-gray-800"></div>
                </div>

                <div className="flex flex-row gap-2" >
                  <div className=" h-1.5 w-1.5 rounded  bg-red-600"></div>
                  <div className=" h-1.5 w-1.5 rounded  bg-gray-800 "></div>
                  <div className="h-1.5 w-1.5 rounded  bg-red-600"></div>
                </div>
                <div className="flex flex-row gap-2" >
                  <div className=" h-1.5 w-1.5 rounded  bg-gray-800 "></div>
                  <div className=" h-1.5 w-1.5 rounded  bg-red-600"></div>
                  <div className=" h-1.5 w-1.5 rounded  bg-gray-800"></div>
                </div>
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-6 md:items-center ">
              <Link href="/" className={isActive('/') ? 'text-red-500' : ''}>HOME</Link>
              <div className="relative group ">
                <div className="flex flex-row gap-2 items-center">
                  <Link href="/about" className={isActive('/about') ? 'text-red-500' : ''}>ABOUT </Link>
                  <PlusIcon className="h-4 w-4 " />
                </div>
                <div className="bg-black">
                  <div className="bg-white pt-8 absolute hidden group-hover:block shadow-bottom-only  flex-col gap-1">
                    <Link className="block px-20 py-2 hover:text-red-600" href="/about">About</Link>
                    <Link className="block px-20 py-2  hover:text-red-600" href="/team">Team</Link>
                  </div>
                </div>
              </div>
              <div className="relative group ">
                <div className="flex flex-row gap-2 items-center">
                  <Link href="/services" className={isActive('/services') ? 'text-red-500' : ''}>SERVICES </Link>
                  <PlusIcon className="h-4 w-4 " />
                </div>
                <div className="bg-black">
                  <div className="bg-white  px-10 w-[320px] pt-8 absolute hidden group-hover:block shadow-bottom-only  flex-col gap-1">
                    <Link className="block px-2 py-2 hover:text-red-600" href="/services/capacity-building-training">
                      Capacity Building in Renewable Energy
                    </Link>
                    <Link className="block px-2 py-2  hover:text-red-600" href="/services/energy-audit">
                      Energy Audit
                    </Link>
                    <Link className="block px-2 py-2 hover:text-red-600" href="/services/climate-change-adaptation-training">
                      Climate Change mitigation / adaptation Research, training
                    </Link>
                    <Link className="block px-2 py-2  hover:text-red-600" href="/services/waste-management-consulting">
                      Waste Management and Consulting
                    </Link>
                    
                    <Link className="block px-2 py-2  hover:text-red-600" href="/services/environmental-management-services">
                      Environmental and Management Services
                    </Link>
                    <Link className="block px-2 py-2 pb-4  hover:text-red-600" href="/services/e-mobility">
                      E-Mobility
                    </Link>

                  </div>
                </div>
              </div>
              <Link href="/contact" className={isActive('/contact') ? 'text-red-500' : ''}>CONTACT</Link>
              <Link href="/careers" className={isActive('/careers') ? 'text-red-500' : ''}>CAREERS</Link>
              <Link href="/projects" className={isActive('/projects') ? 'text-red-500' : ''}>PROJECTS</Link>

            </div>

          </div>
          <div className="flex  flex-row gap-4">
            <MagnifyingGlassIcon className="h-8 w-8 text-black md:block hidden" />

            <div className="md:flex flex-col hidden  gap-2" >
              <div className="flex flex-row gap-2" >
                <div className=" h-1.5 w-1.5 rounded  bg-gray-800 "></div>
                <div className=" h-1.5 w-1.5 rounded  bg-red-600"></div>
                <div className=" h-1.5 w-1.5 rounded  bg-gray-800"></div>
              </div>

              <div className="flex flex-row gap-2" >
                <div className=" h-1.5 w-1.5 rounded  bg-red-600"></div>
                <div className=" h-1.5 w-1.5 rounded  bg-gray-800 "></div>
                <div className="h-1.5 w-1.5 rounded  bg-red-600"></div>
              </div>
              <div className="flex flex-row gap-2" >
                <div className=" h-1.5 w-1.5 rounded  bg-gray-800 "></div>
                <div className=" h-1.5 w-1.5 rounded  bg-red-600"></div>
                <div className=" h-1.5 w-1.5 rounded  bg-gray-800"></div>
              </div>
            </div>

            <div className="flex justify-end p-4 md:hidden  ">
              <div className="flex flex-col gap-2" onClick={toggleMenu}>
                <div className="flex flex-row gap-2" >
                  <div className=" h-1.5 w-1.5 rounded  bg-gray-800 "></div>
                  <div className=" h-1.5 w-1.5 rounded  bg-red-600"></div>
                  <div className=" h-1.5 w-1.5 rounded  bg-gray-800"></div>
                </div>

                <div className="flex flex-row gap-2" >
                  <div className=" h-1.5 w-1.5 rounded  bg-red-600"></div>
                  <div className=" h-1.5 w-1.5 rounded  bg-gray-800 "></div>
                  <div className="h-1.5 w-1.5 rounded  bg-red-600"></div>
                </div>
                <div className="flex flex-row gap-2" >
                  <div className=" h-1.5 w-1.5 rounded  bg-gray-800 "></div>
                  <div className=" h-1.5 w-1.5 rounded  bg-red-600"></div>
                  <div className=" h-1.5 w-1.5 rounded  bg-gray-800"></div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>

  )
}
