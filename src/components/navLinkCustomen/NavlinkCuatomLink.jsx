import { NavLink } from 'react-router-dom';
function NavlinkCuatomLink({ dataIsAllowed, index, expand, icon }) {
  console.log(dataIsAllowed[index],"kkkkkkkkk")
  if (!dataIsAllowed[index] || !isPermissionValid(dataIsAllowed[index].nombre)) {
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

// Función para verificar si el permiso existe en el almacenamiento de sesión
function isPermissionValid(permission) {
  console.log(permission,"kkkkkkkkk")
  const permissionsPages = JSON.parse(sessionStorage.getItem("users"));
  console.log(permissionsPages)
  return permissionsPages && permissionsPages.permisions.includes(permission);
}
export default NavlinkCuatomLink;