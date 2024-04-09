import React, { Children } from "react";
import { Link } from "react-router-dom";

const Button = ({ type, to, children, variant, className, ...props }) => {
  const styles =
    variant === "primary"
      ? "bg-primary "
      : variant === "secondary"
      ? "bg-backgroundSite"
      : "";

  if (to) {
    return (
      <Link to={to} className={` ${styles} ${className} px-4 py-2 rounded-md `}>
        {children}
      </Link>
    );
  }

  return (
    <button className={` ${styles} ${className} px-4 py-2 rounded-md  `}>
      {children}
    </button>
  );
};

export default Button;
