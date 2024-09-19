import MegaMenu1 from "../MegaMenu1";
import { Img, Heading } from "..";
import React, { useState } from "react";

export default function Header({ ...props }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [menuOpen3, setMenuOpen3] = useState(false);

  return (
    <header
      {...props}
      className={`flex justify-between items-center py-4 px-6 bg-[#f7f7f7] ${props.className}`}
    >
      <div className="flex items-center">
        <Img
          src="./../../../Public/Logo/Name And Logo.png"
          alt="Header Logo"
          className="h-10 w-auto object-contain"
        />
      </div>

      <nav className="hidden md:flex flex-grow justify-center space-x-6">
        <a href="#">
          <Heading as="p" className="text-base font-medium text-[#0a033c]">
            Shop
          </Heading>
        </a>
        <div
          onMouseLeave={() => setMenuOpen(false)}
          onMouseEnter={() => setMenuOpen(true)}
          className="relative cursor-pointer"
        >
          <Heading as="p" className="text-base font-medium text-[#0a033c]">
            For Kindergarten
          </Heading>
          {menuOpen && (
            <MegaMenu1 className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg z-10" />
          )}
        </div>
        <div
          onMouseLeave={() => setMenuOpen1(false)}
          onMouseEnter={() => setMenuOpen1(true)}
          className="relative cursor-pointer"
        >
          <Heading as="p" className="text-base font-medium text-[#0a033c]">
            For High School
          </Heading>
          {menuOpen1 && (
            <MegaMenu1 className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg z-10" />
          )}
        </div>
        <div
          onMouseLeave={() => setMenuOpen2(false)}
          onMouseEnter={() => setMenuOpen2(true)}
          className="relative cursor-pointer"
        >
          <Heading as="p" className="text-base font-medium text-[#0a033c]">
            For College
          </Heading>
          {menuOpen2 && (
            <MegaMenu1 className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg z-10" />
          )}
        </div>
        <div
          onMouseLeave={() => setMenuOpen3(false)}
          onMouseEnter={() => setMenuOpen3(true)}
          className="relative cursor-pointer"
        >
          <Heading as="p" className="text-base font-medium text-[#0a033c]">
            Courses
          </Heading>
          {menuOpen3 && (
            <MegaMenu1 className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg z-10" />
          )}
        </div>
        <a href="#">
          <Heading as="p" className="text-base font-medium text-[#0a033c]">
            Mentors
          </Heading>
        </a>
      </nav>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center gap-2.5">
          <Heading as="p" className="text-base font-medium text-[#0a033c]">
            Cart (0)
          </Heading>
          <a href="#">
            <Img src="" alt="Cart Icon" className="h-7 w-7" />
          </a>
        </div>

        <div className="flex items-center gap-2.5">
          <Heading as="p" className="text-base font-medium text-[#0a033c]">
            My Account
          </Heading>
          <a href="#">
            <Img src="" alt="Profile Icon" className="h-7 w-7" />
          </a>
        </div>
      </div>
    </header>
  );
}
