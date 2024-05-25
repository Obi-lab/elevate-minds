import Link from "next/link"
import { MapPinIcon,EnvelopeIcon,PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import FooterBackground from "./FooterBackground";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footerBackgroundImage text-white  p-10 mt-32 flex flex-col gap-8">

      <div className="flex md:flex-row  flex-col gap-8">

        <div className="flex flex-1 flex-col gap-4">
          <p className="text-xl font-bold">Nairobi Office</p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <MapPinIcon className="h-8 w-8 "/>
              <p>Vision Plaza 5th Floor, Mombasa Rd</p>
            </div>
            <div className="flex flex-row gap-4">
              <PhoneIcon className="h-8 w-8 "/>
              <p>(+254)712856550</p>
            </div>
            <div className="flex flex-row gap-4">
              <EnvelopeIcon className="h-8 w-8 "/>
              <p>info@provisiongroupltd.com</p>
            </div>

          </div>

        </div>
        <div className="flex flex-1 flex-col gap-4">
          <p className="text-xl font-bold">Nairobi Office</p>
          <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
              <MapPinIcon className="h-8 w-8 "/>
              <p>Vision Plaza 5th Floor, Mombasa Rd</p>
            </div>
            <div className="flex flex-row gap-4">
              <PhoneIcon className="h-8 w-8 "/>
              <p>(+254)712856550</p>
            </div>
            <div className="flex flex-row gap-4">
              <EnvelopeIcon className="h-8 w-8 "/>
              <p>info@provisiongroupltd.com</p>
            </div>

          </div>

        </div>
      </div>

      <div className="flex md:flex-row  flex-col gap-8">

        <div className="flex flex-1 flex-col gap-4">
          <p className="text-xl font-bold">Nairobi Office</p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <MapPinIcon className="h-8 w-8 "/>
              <p>Vision Plaza 5th Floor, Mombasa Rd</p>
            </div>
            <div className="flex flex-row gap-4">
              <PhoneIcon className="h-8 w-8 "/>
              <p>(+254)712856550</p>
            </div>
            <div className="flex flex-row gap-4">
              <EnvelopeIcon className="h-8 w-8 "/>
              <p>info@provisiongroupltd.com</p>
            </div>

          </div>

        </div>
        <div className="flex flex-1 flex-col gap-4">
          <p className="text-xl font-bold">Nairobi Office</p>
          <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
              <MapPinIcon className="h-8 w-8 "/>
              <p>Vision Plaza 5th Floor, Mombasa Rd</p>
            </div>
            <div className="flex flex-row gap-4">
              <PhoneIcon className="h-8 w-8 "/>
              <p>(+254)712856550</p>
            </div>
            <div className="flex flex-row gap-4">
              <EnvelopeIcon className="h-8 w-8 "/>
              <p>info@provisiongroupltd.com</p>
            </div>

          </div>

        </div>
      </div>

      <hr className="h-0.5 bg-blue-400"></hr>
      <div className="flex justify-between">
        <div>
           <p>&copy; {currentYear} Elevate Minds. All rights reserved.</p>
        </div>
        <div className="flex flex-row gap-4">
          <Link className="text-white bg-red-600 rounded" href="/">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"></path>
              </svg>
          </Link>

          <Link href="/" className="text-white bg-red-600 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </Link>
          <Link href="/" className="text-red-600 bg-white rounded">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 455 455" aria-hidden="true">
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
  )
}

