import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function BreadcrumbLink({ to, text, icon,iconTwo, customClassName }) {
    return (
      <li>
        <Link
          to={to}
          className={`clup hover:bg-[#efefef] hover:text-black dark:hover:bg-[#374151] dark:hover:text-white bg-white dark:bg-transparent dark:text-white text-black ${customClassName}`}
        >
          <span>
            {icon && (
              <FontAwesomeIcon icon={icon} className="text-gray-400 text-xl" />
            )}
            <span className="ml-2 font-medium text-[18px]">{text}</span>
          </span>
          <FontAwesomeIcon
            icon={iconTwo}
            className="mx-3 text-gray-400 text-xl"
          />
        </Link>
      </li>
    );
  }
  
  export default BreadcrumbLink;