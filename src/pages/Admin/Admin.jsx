import { MenuLateral } from "../../components/MenuLateral";
import { InicioChart } from "../../components/InicioChart";
import { ContextModules } from "../../hooks/context/ContextModules";
import { SubMenu } from "../../components/SubMenu";
const Admin = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#cff5fb] from-2% via-[#beb6fb87] via-30% to-[#d7e4fabe] to-90%  w-full block  min-h-screen
        dark:bg-gradient-to-r dark:from-[#163b59] dark:from-10%
         dark:via-[#18324f] dark:via-30% dark:to-[#121b2e] dark:to-90%"
    >
      <div
        className="sticky z-50  top-0 py-3 effect_blure h-fit w-full
      
      "
      >
        <SubMenu />
      </div>
      <div className="flex  h-[100%] min-h-screen  ">
        <MenuLateral />
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
