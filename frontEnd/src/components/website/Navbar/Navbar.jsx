import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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

  return (
    <>
      <header className="fixed top-0 right-0 left-0 transition-all duration-500">
        <div className="c-container flex items-center  py-5 justify-between">
          <Link to="/" className=" ">
            <h1 className="text-text font-bold">Diagnose</h1>
          </Link>
          <nav className="flex">
            <ul className="flex items-center gap-8">
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) =>
                      isPending ? "" : isActive ? "text-primary" : "text-textLight hover:opacity-50"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
