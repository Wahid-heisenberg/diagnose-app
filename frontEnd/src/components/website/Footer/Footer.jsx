import React from "react";
import Phone from "@/icons/phone.svg?react";
import Mail from "@/icons/mail.svg?react";
import Location from "@/icons/location.svg?react";
import Linkedin from "@/icons/linkedin.svg?react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const infos = [
    {
      name: "About Us",
      path: "#",
    },
    {
      name: "Carrier",
      path: "#",
    },
    {
      name: "We are hiring",
      path: "#",
    },
    {
      name: "We are Blog",
      path: "#",
    },
  ];

  const ressources = [
    {
      name: "IOS & Android",
      path: "#=",
    },
    {
      name: "Watch a Demo",
      path: "#",
    },
    {
      name: "Customers",
      path: "#",
    },
    {
      name: "API",
      path: "#",
    },
  ];
  const features = [
    {
      name: "Business Marketing",
      path: "#",
    },
    {
      name: "User Analytic",
      path: "#",
    },
    {
      name: "Live Chat",
      path: "#",
    },
    {
      name: "Unlimited Support",
      path: "#",
    },
  ];

  const contacts = [
    {
      icon: <Phone />,
      name: "(480) 555-0103",
      path: "#",
    },
    {
      icon: <Location />,
      name: "Bejaia,Algeria",
      path: "#",
    },
    {
      icon: <Mail />,
      name: "s_ouldyounes@estin.dz",
      path: "#",
    },
    {
      icon: <Linkedin />,
      name: "Samy Islem Ould-Younes",
      path: "https://www.linkedin.com/feed/",
    },
  ];

  return (
    <footer>
      <div className="c-container flex items-center justify-between">
        <div className="flex flex-col items-start justify-center gap-4">
          <h2 className="font-bold text-text">Company Info</h2>
          <ul className="flex flex-col gap-2">
            {" "}
            {infos.map((info, index) => (
               <li key={index}>
               <NavLink
                 to={info.path}
                 className={({ isActive, isPending }) =>
                   isPending
                     ? ""
                     : isActive
                     ? "text-textLight hover:opacity-50"
                     : "text-textLight hover:opacity-50"
                 }
               >
                 {info.name}
               </NavLink>
             </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <h2 className="font-bold text-text">Legal</h2>
          <ul className="flex flex-col gap-2">
            {" "}
            {infos.map((info, index) => (
               <li key={index}>
               <NavLink
                 to={info.path}
                 className={({ isActive, isPending }) =>
                   isPending
                     ? ""
                     : isActive
                     ? "text-textLight hover:opacity-50"
                     : "text-textLight hover:opacity-50"
                 }
               >
                 {info.name}
               </NavLink>
             </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <h2 className="font-bold text-text">Features</h2>
          <ul className="flex flex-col gap-2">
            {" "}
            {features.map((feature, index) => (
               <li key={index}>
               <NavLink
                 to={feature.path}
                 className={({ isActive, isPending }) =>
                   isPending
                     ? ""
                     : isActive
                     ? "text-textLight hover:opacity-50"
                     : "text-textLight hover:opacity-50"
                 }
               >
                 {feature.name}
               </NavLink>
             </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <h2 className="font-bold text-text">Ressources</h2>
          <ul className="flex flex-col gap-2 ">
            {" "}
            {ressources.map((ressource, index) => (
               <li key={index}>
               <NavLink
                 to={ressource.path}
                 className={({ isActive, isPending }) =>
                   isPending
                     ? ""
                     : isActive
                     ? "text-textLight hover:opacity-50"
                     : "text-textLight hover:opacity-50"
                 }
               >
                 {ressource.name}
               </NavLink>
             </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <h2 className="font-bold text-text">Contact</h2>
          <ul className="flex flex-col gap-2 ">
            {" "}
            {contacts.map((contact, index) => (
               <li key={index}>
               <NavLink
                 to={contact.path}
                 className={({ isActive, isPending }) =>
                   isPending
                     ? ""
                     : isActive
                     ? "text-textLight hover:opacity-50"
                     : "text-textLight hover:opacity-50"
                 }
               >
                 <div className="flex gap-2 items-center "> 
                 {contact.icon}
                 <h3> {contact.name} </h3>
                 </div>
               </NavLink>
             </li>
            ))}
          </ul>
        </div>



      </div>
    </footer>
  );
};

export default Footer;
