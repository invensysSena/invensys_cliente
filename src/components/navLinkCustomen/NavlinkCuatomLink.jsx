import React from 'react';
import { NavLink } from 'react-router-dom';

function NavlinkCuatomLink({ dataIsAllowed, index, expand,icon }) {
  if (!dataIsAllowed[index]) {
    return null;
  }

  return (
    <li className="p-0 m-0">
      <NavLink
        to={dataIsAllowed[index].url}
        className={({ isActive }) =>
          isActive
            ? `
              flex 
              bg-gray-100
              items-center 
              mx-1 my-[2px]  p-2 font-medium dark:text-white text-black dark:bg-gray-700 
              rounded `
            : `flex 
               hover:bg-gray-100 dark:hover:bg-gray-700 
               items-center 
               mx-1  my-[2px] p-2 font-medium dark:text-white text-black
               rounded `
        }
      >

        {icon}
        <div
          className={
            expand
              ? `NavLinks1 pt-[2px] ml-3 block lg:block capitalize`
              : `NavLinks1 pt-[2px] ml-3 hidden lg:block capitalize`
          }
        >
          {dataIsAllowed[index].text}
        </div>
      </NavLink>
    </li>
  );
}

export default NavlinkCuatomLink;