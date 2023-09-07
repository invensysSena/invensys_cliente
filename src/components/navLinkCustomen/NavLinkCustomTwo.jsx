import { NavLink } from "react-router-dom";

function NavLinkCustomTwo({ to,  children, customClassName}) {
    return (
      <li>
        <NavLink
          to={to}
          className={`${customClassName}`}>
          {children}
        </NavLink>
      </li>
    );
  }


  export default  NavLinkCustomTwo