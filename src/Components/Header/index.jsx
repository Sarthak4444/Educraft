import MegaMenu1 from "../MegaMenu1";
import { Img, Heading } from "..";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);

  return (
    <header className="flex justify-between items-center py-2 px-6 bg-[#f7f7f7]">
      <NavLink to="/">
      <div className="flex items-center">
        <Img
          src="./../../../Public/Logo/Name And Logo.png"
          alt="Header Logo"
          className="h-20 w-auto object-contain"
        />
      </div>
      </NavLink>

      <nav className="hidden md:flex flex-grow justify-center space-x-6">
        <NavLink to="/EducraftCourses?tab=all-courses">
          <Heading as="p" className="text-xl tracking-wide font-medium text-[#0a033c]">
            Shop
          </Heading>
        </NavLink>
        <div
          onMouseLeave={() => setMenuOpen(false)}
          onMouseEnter={() => setMenuOpen(true)}
          className="relative cursor-pointer"
        >
          <NavLink to="/EducraftCourses?tab=kindergarten">
          <Heading as="p" className="text-xl tracking-wide font-medium text-[#0a033c]">
            Kindergarten
          </Heading>
          </NavLink>
          {menuOpen && (
            <MegaMenu1 className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg z-10" />
          )}
        </div>
        <div
          onMouseLeave={() => setMenuOpen1(false)}
          onMouseEnter={() => setMenuOpen1(true)}
          className="relative cursor-pointer"
        >
          <NavLink to="/EducraftCourses?tab=high-school">
          <Heading as="p" className="text-xl tracking-wide font-medium text-[#0a033c]">
            High School
          </Heading>
          </NavLink>
          {menuOpen1 && (
            <MegaMenu1 className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg z-10" />
          )}
        </div>
        <div
          onMouseLeave={() => setMenuOpen2(false)}
          onMouseEnter={() => setMenuOpen2(true)}
          className="relative cursor-pointer"
        >
          <NavLink to="/EducraftCourses?tab=college">
          <Heading as="p" className="text-xl tracking-wide font-medium text-[#0a033c]">
            College
          </Heading>
          </NavLink>
          {menuOpen2 && (
            <MegaMenu1 className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg z-10" />
          )}
        </div>
        <NavLink to="/AllMentors">
          <Heading as="p" className="text-xl tracking-wide font-medium text-[#0a033c]">
            Mentors
          </Heading>
        </NavLink>
      </nav>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center gap-2.5 cursor-pointer">
          <Heading as="p" className="text-xl tracking-wide font-medium text-[#0a033c]">
            Cart (0)
          </Heading>
          <i className="fa-solid fa-bag-shopping text-[#DB7E63] text-2xl"></i>
        </div>

        <div className="flex items-center gap-2.5 cursor-pointer">
          <Heading as="p" className="text-xl tracking-wide font-medium text-[#0a033c]">
            Account
          </Heading>
          <i className="fa-regular fa-circle-user text-[#DB7E63] text-2xl"></i>
        </div>
      </div>
    </header>
  );
}
