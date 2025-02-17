"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const { data: session } = useSession();
  // console.log(session);

  const navItems = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Blog",
      url: "/blog",
    },
    {
      label: "Add Blog",
      url: "/add-blog",
    },
    {
      label: "Contact",
      url: "/contact",
    },
  ];

  const [navOpen, setNavOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="lg:px-10 lg:py-4 p-2 flex items-center justify-between shadow-md">
      <Link href={"/"} className="flex items-center gap-1 z-50">
        <Image
          src={"/logo.png"}
          width={100}
          height={100}
          alt="logo"
          className="w-8 h-8"
        />
        <span className="text-lg">Early-Blog</span>
      </Link>

      <div
        className={`lg:space-x-10 max-lg:flex max-lg:flex-col max-lg:bg-blue-50 max-lg:fixed max-lg:right-0 max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:gap-20 max-lg:items-center max-lg:pt-14 transition-transform duration-300 ${
          navOpen ? "max-lg:-translate-y-0" : "max-lg:-translate-y-full"
        } `}
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="text-lg hover:text-orange-400 transition-all"
            onClick={() => setNavOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div>
        {
          session ? 
        <div>
          <button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <img src={session?.user?.image} alt={session?.user?.name.slice(0,1).toUpperCase()} className="w-8 h-8 rounded-full" />
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
            <Link href={"/profile"}>Profile</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <button onClick={()=> {signOut({callbackUrl: "/auth/signin"})}}>Log Out</button>
            </MenuItem>
          </Menu>
        </div>
        :
        <Link
          className="text-lg hover:text-orange-400 transition-all"
          href={"/auth/signin"}
        >
          Sign In
        </Link>
        }

      </div>

      <button
        onClick={() => setNavOpen(!navOpen)}
        className="text-2xl lg:hidden z-50"
      >
        {navOpen ? <IoClose /> : <IoMdMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
