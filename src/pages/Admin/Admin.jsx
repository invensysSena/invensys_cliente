import { MenuLateral } from "../../components/MenuLateral";
import { InicioChart } from "../../components/InicioChart";
import { ContextModules } from "../../hooks/context/ContextModules";
import { SubMenu } from "../../components/SubMenu";
const Admin = () => {
  return (
    <div className="contenedor_pages activess darkMode">
      <div className=" header_dasboard bg-white sticky top-0 z-50 ">
        <SubMenu />
      </div>

      <div className="menu-lateral bg-white">
      <MenuLateral />
      </div>
      <div className="flex contendido   h-[100%] min-h-screen  ">
        
        <div className=" w-full block self_conte_fond ">
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2 className="text-4xl font-bold dark:text-white text-gray-700 font-sans mx-0">
                Dashboard
              </h2>
              <p className="text-xl text-gray-600 dark:text-white mx-0">
                gestióna tu información que monitoriza, analiza y muestra de
                información general de tu negocio.
              </p>
            </div>

            <div className="container_cont">
              <ContextModules>
                <InicioChart />
              </ContextModules>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
