import React from "react";
import { Link } from "react-router-dom";

export const NavLinkCustomenFooter = ({ to, name }) => {
  return (
    <li className="md:my-1">
      <span className="circle-f"></span>
      <Link
        to={to}
        className="flex justify-between  items-center md:py-1 hover:underline text-gray-800 dark:text-white"
      >
        {" "}
        {name}
      </Link>
    </li>
  );
};
