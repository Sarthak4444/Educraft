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
    <header className="sticky top-0 z-50 flex justify-between items-center py-2 px-6 bg-[#f7f7f7]">
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
            src=".data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQQEg8PEhAQEA8PFxgSFRAYERASEBAQFRIWFhUWGRUYHSggGholGxUXITEhJTUrLjIuFyAzODMsNygtLisBCgoKDg0OGBAQGjceHx03NCstKy43KysrKy03Kzg1LS0rKy0vLSsrLSstLSstKy0tLS0tLSstLSstLS0rLS4tLf/AABEIAOEA4AMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABIEAABAwICBgUHCAcIAwEAAAABAAIDBBEFEgYHEyExUTJBcZKxFBUiM2FzgQgjNHKys8LRFjVTVJGT8DZCUmN0gsPSJqHBJP/EABkBAQADAQEAAAAAAAAAAAAAAAABAwUEAv/EAC4RAQABAgIJBAICAwEAAAAAAAABAgMEIRETFBUyM1FSkQUSMXE0QVNhQoHBI//aAAwDAQACEQMRAD8A7igICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg8uvE1xE5kQ8uk109TQXTWU9TMumsp6mZdNZT1My6aynqZl01lPUzLprKepmXTWU9TMumsp6mZdNZT1My6aynqZl01lPUzLprKepmXTWU9TMumsp6mZdNZT1My6aynqZl01lPUzLprKepmXTWU9TMumsp6mZdNZT1NACkVxVORoVL2CDxBArKt2bZR2LzxPUwLIxeMrqr1Fni69F9uinR7q/hQ3C773yPce2wXij0qas7tc6f6l6m/o4YVeaGc395etz25/wAp8o2mrpB5oZzf3lO57XdPlO01HmhnN/eTc9runybTUeaGc395Nz2u6fJtNR5oZzf3k3Pa7p8m01HmhnN/eTc9runybTUeaGc395Nz2u6fJtNR5oZzf3k3Pa7p8m01HmhnN/eTc9runyjaajzQ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5XtdboyAsLQDzIBCDFvp5WurKjYSl9TDTFwBIc0uqJQ8XabnZxuFwN5AsN6CuGCp2czI9q2UzXgc7OGMbshmJzEnITcWPX1IKquCZ+0DBUtjcygDRmcHDLVzGoF78clsx6xZBfjoJI5Yyzb5RPK03ke5opzCS0bzwz238UEWC7jQxTx1TXxwwPllAqCZJg0fN3YbbiLuJ48OtBcoqep2ziXyNnBmNyx2wc0tcIruLstgch3C+4oJGjdORMx+yqGEU+SV0pcbz52lwBJNzfMSRu4WT9plm5YJSSWyAN6hl4LKu4fFVVzNFeiFtNdERnGlT5NP+2HdVey4z+R61lvtPJp/2w7qbLjP5D32+1SaGR258xtyAsvOwYm5lcuZJ11EfFKZTUrYxZot7esrRw+Et2KdFKiu5VXOa9ZdP7eXqkEBAQEBB4gWQLIFkCyBZAsgjuw+IyCYxRmUcJcjdoN1ula/AkfFBIsgWQLIFkCyBZAsgWQeoCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg/9k="
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
