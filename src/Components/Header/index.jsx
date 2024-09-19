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
      className={` ${props.className} flex justify-center items-center py-[22px] sm:py-5 bg-[#f7f7f7]`}
    >
      <div className="container-xs flex justify-center md:flex-col md:px-5">
        <Img
          sre=""
          alt="Header Logo"
          className="h-[38px] w-[172px] object-contain"
        />

        <ul className="!ml-[54px] flex items-center gap-[30px] md:ml-0 md:flex-col">
          <li>
            <a href="#">
              <Heading
                as="p"
                className="text-[16px] font-medium text-[#0a033c]"
              >
                shop
              </Heading>
            </a>
          </li>

          <li
            onMouseLeave={() => {
              setMenuOpen(false);
            }}
            onMouseEnter={() => {
              setMenuOpen(true);
            }}
          >
            <div className="flex cursor-pointer items-center">
              <Heading
                as="p"
                className="text-[16px] font-medium text-[#0a033c]"
              >
                For Kindergarten
              </Heading>
              <Img src="" alt="Dropdown Icon" classame="h-[24px] w-[24px]" />
            </div>
            {menuOpen ? <MegaMenu1 /> : null}
          </li>
          <li
            onMouseLeave={() => {
              setMenuOpen1(false);
            }}
            onMouseEnter={() => {
              setMenuOpen1(true);
            }}
          >
            <div className="flex cursor-pointer items-center">
              <Heading
                as="p"
                className="text-[16px] font-medium text-[#0a033c]"
              >
                For High School
              </Heading>
              <Img src="" alt="Dropdown Icon" classame="h-[24px] w-[24px]" />
            </div>
            {menuOpen1 ? <MegaMenu1 /> : null}
          </li>

          <li
            onMouseLeave={() => {
              setMenuOpen2(false);
            }}
            onMouseEnter={() => {
              setMenuOpen2(true);
            }}
          >
            <div className="flex cursor-pointer items-center">
              <Heading
                as="p"
                className="text-[16px] font-medium text-[#@a833c]"
              >
                For College
              </Heading>
              <Img sre="" alt="Dropdown Icon" className="h-[24px] u-[24px]" />
            </div>
            {menuOpen2 ? <MegaMenu1 /> : null}
          </li>

          <li
            onMouseLeave={() => {
              setMenuOpen3(false);
            }}
            onMouseEnter={() => {
              setMenuOpen3(true);
            }}
          >
            <div className="flex cursor-pointer items-center">
              <Heading
                as="p"
                className="text-[16px] font-medium text-[#0a033c]"
              >
                Courses
              </Heading>
              <Img src="" alt="Dropdown Icon" className="h-[24px] u-[24px]" />
            </div>
            {menuOpen3 ? <MegaMenu1 /> : null}
          </li>
          <li>
            <a href="#">
              <Heading
                as="p"
                className="text-[16px] font-medium text-[#0a033c]"
              >
                Mentors
              </Heading>
            </a>
          </li>
        </ul>

        <div classMame="ml-[54px] flex items-center gap-2.5 md:ml-0">
          <Heading as="p" className="text-[16px] font-medium text-[#0a033c]">
            cart (0)
          </Heading>

          <a href="#">
            <Img src="" alt="Cart Icon" className="h-[30px] w-[30px]" />
          </a>
        </div>

        <div className="ml-8 flex items-center gap-2.5 md:ml-0">
          <Heading
            as="p"
            className="self-end text-[16px] font-medium text-[#0a033c]"
          >
            My Account
          </Heading>
          <a href="#">
            <Img src="i" alt="Profile Icon" className="h-[30px] w-[30px]" />
          </a>
        </div>
      </div>
    </header>
  );
}
