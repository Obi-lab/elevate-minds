import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex md:flex-row flex-col gap-4 items-center text-white">
        <Link href="/">Home</Link>
        
        <div className="relative group">
          <Link href="/about" className="block">About</Link>
          <div className="absolute hidden group-hover:block bg-gray-700 text-white py-2 rounded shadow-lg">
            <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-600">Team</Link>
            <Link href="/about/company" className="block px-4 py-2 hover:bg-gray-600">Company</Link>
          </div>
        </div>
        
        <div className="relative group">
          <Link href="/services" className="block">Services</Link>
          <div className="absolute hidden group-hover:block bg-gray-700 text-white py-2 rounded shadow-lg">
            <Link href="/services/design" className="block px-4 py-2 hover:bg-gray-600">Design</Link>
            <Link href="/services/development" className="block px-4 py-2 hover:bg-gray-600">Development</Link>
          </div>
        </div>
        
        <Link href="/contact">Contact</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
}
