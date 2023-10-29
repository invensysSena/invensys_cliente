import { NavLink } from 'react-router-dom';
function NavLinkCustom({ to, isActive, children, customClassName,customClassNamOne }) {
  return (
    <li>
      <NavLink
        to={to}
        className={`${
          isActive
            ? ` ${customClassName}`
            :  `${customClassNamOne}`
        }`}
      >
        {children}
      </NavLink>
    </li>
  );
}


export default  NavLinkCustom

