import { MenuLateral } from "../components/MenuLateral";
import { DataTableUsers } from "../components/DataTableUsers";
import "../assets/css/fuente.css";
import { SubMenu } from "../components/SubMenu";
const Usuarios = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#cff5fb] from-2% via-[#beb6fb87] via-30% to-[#d7e4fabe] to-90%  w-full block  min-h-screen
        dark:bg-gradient-to-r dark:from-[#163b59] dark:from-10%
         dark:via-[#18324f] dark:via-30% dark:to-[#121b2e] dark:to-90%">
      <div className="sticky z-50  hidden lg:block top-0 py-3 effect_blure h-fit w-full">
        {/* <SubMenu /> */}
      </div>
      <div
        className="  w-full block  min-h-screen

        "
      >
        <div className="flex overflow-y-hidden">
          <MenuLateral />
          <div
            className=" w-full block 
         
        "
          >
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
    </div>
  );
};

export default Usuarios;
