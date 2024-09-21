import MegaMenu1 from "../MegaMenu1";
import { Img, Heading, Button } from "..";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [menuNav, setMenuNav] = useState(false);

  const handleMenuClick = () => {
    if (menuNav) {
      setMenuNav(false);
    } else {
      setMenuNav(true);
    }
  };

  useEffect(() => {
    const disableScroll = (e) => {
      e.preventDefault();
    };

    if (menuNav) {
      document.body.style.overflow = "hidden";
      window.addEventListener("scroll", disableScroll);
      window.addEventListener("wheel", disableScroll, { passive: false });
      window.addEventListener("touchmove", disableScroll, { passive: false });
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", disableScroll);
      window.removeEventListener("wheel", disableScroll);
      window.removeEventListener("touchmove", disableScroll);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", disableScroll);
      window.removeEventListener("wheel", disableScroll);
      window.removeEventListener("touchmove", disableScroll);
    };
  }, [menuNav]);

  return (
    <header className="flex justify-between items-center py-2 px-6 bg-[#f7f7f7]">
      <div
        className={`${
          menuNav ? "absolute" : "hidden"
        } top-0 left-0 w-screen h-screen lg:hidden bg-[#db7d63f3]`}
      >
        <Button
          className="absolute top-5 right-5 rounded-full"
          onClick={handleMenuClick}
        >
          <i className="fa-solid fa-xmark text-[30px] text-white"></i>
        </Button>
        <div className="flex justify-center items-center h-full my-auto gap-5 flex-col">
          <h1 className="text-[30px] font-bold text-white mb-5">MENU</h1>
          <Button className="rounded-full px-4" onClick={handleMenuClick}>
            <NavLink to="/">
              <Heading
                as="p"
                className="text-[20px] tracking-wide font-medium text-white"
              >
                Home
              </Heading>
            </NavLink>
          </Button>
          <Button className="rounded-full px-4" onClick={handleMenuClick}>
            <NavLink to="/EducraftCourses?tab=all-courses">
              <Heading
                as="p"
                className="text-[20px] tracking-wide font-medium text-white"
              >
                Shop
              </Heading>
            </NavLink>
          </Button>
          <Button className="rounded-full px-4" onClick={handleMenuClick}>
            <NavLink to="/EducraftCoursesPricing">
              <Heading
                as="p"
                className="text-[20px] tracking-wide font-medium text-white"
              >
                Pricing
              </Heading>
            </NavLink>
          </Button>
          <Button className="rounded-full px-4" onClick={handleMenuClick}>
            <NavLink to="/AllMentors">
              <Heading
                as="p"
                className="text-[20px] tracking-wide font-medium text-white"
              >
                Mentors
              </Heading>
            </NavLink>
          </Button>
          <Button className="rounded-full px-4" onClick={handleMenuClick}>
            <NavLink to="/EducraftJoinAsTeacher">
              <Heading
                as="p"
                className="text-[20px] tracking-wide font-medium text-white"
              >
                Join Us
              </Heading>
            </NavLink>
          </Button>
        </div>
      </div>
      <Button
        size="sm"
        className="lg:hidden block rounded-lg px-4"
        onClick={handleMenuClick}
      >
        <i className="fa-solid fa-bars"></i>
      </Button>
      <NavLink to="/">
        <div className="flex items-center">
          <Img
            src="./../../../Public/Logo/Name And Logo.png"
            alt="Header Logo"
            className="h-20 w-auto object-contain"
          />
        </div>
      </NavLink>

      <nav className="hidden lg:flex flex-grow justify-center space-x-6">
        <NavLink to="/">
          <Heading
            as="p"
            className="text-xl tracking-wide font-medium text-[#0a033c]"
          >
            Home
          </Heading>
        </NavLink>
        <div
          onMouseLeave={() => setMenuOpen(false)}
          onMouseEnter={() => setMenuOpen(true)}
          className="relative cursor-pointer"
        >
          <NavLink to="/EducraftCourses">
            <Heading
              as="p"
              className="text-xl tracking-wide font-medium text-[#0a033c]"
            >
              Shop
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
          <NavLink to="/EducraftCoursesPricing">
            <Heading
              as="p"
              className="text-xl tracking-wide font-medium text-[#0a033c]"
            >
              Pricing
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
          <NavLink to="/AllMentors">
            <Heading
              as="p"
              className="text-xl tracking-wide font-medium text-[#0a033c]"
            >
              Mentors
            </Heading>
          </NavLink>
          {menuOpen2 && (
            <MegaMenu1 className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg z-10" />
          )}
        </div>
        <NavLink to="/EducraftJoinAsTeacher">
          <Heading
            as="p"
            className="text-xl tracking-wide font-medium text-[#0a033c]"
          >
            Join Us
          </Heading>
        </NavLink>
      </nav>

      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Heading
            as="p"
            className="text-xl tracking-wide hidden md:block font-medium text-[#0a033c]"
          >
            Cart (0)
          </Heading>
          <i className="fa-solid fa-bag-shopping text-[#DB7E63] text-2xl"></i>
        </div>

        <div className="flex items-center gap-2.5 cursor-pointer">
          <Heading
            as="p"
            className="text-xl hidden md:block tracking-wide font-medium text-[#0a033c]"
          >
            Account
          </Heading>
          <i className="fa-regular fa-circle-user text-[#DB7E63] text-2xl"></i>
        </div>
      </div>
    </header>
  );
}
