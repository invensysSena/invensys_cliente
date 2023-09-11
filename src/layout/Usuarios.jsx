import { MenuLateral } from "../components/MenuLateral";
import { DataTableUsers } from "../components/DataTableUsers";
import "../assets/css/fuente.css";
import { SubMenu } from "../components/SubMenu";
const Usuarios = () => {
  return (
    <div
      className="contenedor_pages activess darkMode">
      <div className="header_dasboard bg-white sticky top-0 z-50">
        <SubMenu /> 
      </div>
          <div className="menu-lateral bg-white">
          <MenuLateral />
          </div>
      <div className=" flex contendido   h-[100%] min-h-screen " >
          <div className=" w-full block  " >
            <div className="content_users m-3">
              <div className="content_users_title">
                <h2 className=" text-2xl md:text-4xl font-bold dark:text-white text-gray-700 font-sans mx-0">
                  Usuarios
                </h2>
                <p className="md:text-xl mx-1 dark:text-white text-gray-600 ">
                  Crea, administra y haz un seguimiento de tus usuarios en un
                  solo lugar.
                </p>
              </div>

              <div className="container_cont">
                <DataTableUsers />
              </div>
            </div>
          </div>
      
      </div>
    </div>
  );
};

export default Usuarios;
