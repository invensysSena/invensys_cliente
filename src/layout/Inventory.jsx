import { MenuLateral } from "../components/MenuLateral";
import { FormInventory } from "../container/FormInventory";
import { ContextInventario } from "../hooks/context/ContextInventario";
import { ListInventory } from "../container/ListInventory";
import { ContextSubProducts } from "../hooks/context/ContextSubProducts";

import { Outlet } from "react-router-dom";
import { SubMenu } from "../components/SubMenu";
const Inventory = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#e3fbff] from-10% via-[#e3d1fdaa] via-30% to-[#e5fbff] to-90%  w-full block  min-h-screen

        

        dark:bg-gradient-to-r dark:from-[#163b59] dark:from-10%
         dark:via-[#18324f] dark:via-30% dark:to-[#121b2e] dark:to-90%"
    >
      <div
        className="sticky z-50 hidden lg:block  top-0 py-3 effect_blure h-fit w-full
      
      "
      >
        <SubMenu />
      </div>
      <div className="flex">
        <MenuLateral />
        <div
          className=" w-full block  h-[100%] min-h-screen
         
        "
        >
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2 className="text-4xl font-bold dark:text-white text-gray-700 font-sans mx-0">
                Bodega
              </h2>
              <p className="text-xl dark:text-white text-gray-600 mx-0">
                Crea, administra tus bodegas para sus procesos de producción y
                salidas.
              </p>
            </div>

            <div className="container_cont lg:min-w-7xl overflow-y-hidden">
              <ContextInventario>
                <ContextSubProducts>
                  <div className="flex flex-col md:flex-row gap- items-start md:items-end">
                    <div className="w-[90%]">
                      <FormInventory />
                    </div>
                    <div className="w-[90%] md:w-[43%] lg:w-[40rem] mb-2  ml-1">
                      <ListInventory />
                    </div>
                  </div>
                  <Outlet />
                </ContextSubProducts>
              </ContextInventario>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
