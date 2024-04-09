import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/ui";
import Arrow from "@/icons/arrow.svg?react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Diagnostic",
      path: "/diagnostic",
    },
  ];

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={` ${
          scrolled ? "bg-background" : ""
        } fixed top-0 right-0 left-0 z-50 `}
      >
        <div className="c-container flex items-center  py-5 justify-between">
          <Link to="/" className=" ">
            <h1 className="text-text font-bold">Diagnose</h1>
          </Link>
          <nav className="flex justify-between items-center gap-56 ">
            <ul className="flex items-center gap-8">
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? "text-primary"
                        : "text-textLight hover:opacity-50"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex gap-2">
              <Button variant="secondary" className=" text-primary">
                Login
              </Button>
              <Button
                variant="primary"
                className="text-white flex items-center gap-2"
              >
                {" "}
                Join Us <Arrow />
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
