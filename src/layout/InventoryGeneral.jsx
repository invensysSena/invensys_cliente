import { MenuLateral } from "../components/MenuLateral";
import { ContextCategory } from "../hooks/context/ContextCategory";
import { DatatableInventory } from "../components/DatatableInventory";
import { SubMenu } from "../components/SubMenu";
const InventoryGeneral = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#e3fbff] from-10% via-[#e3d1fdaa] via-30% to-[#e5fbff] to-90%  w-full block  min-h-screen

        

        dark:bg-gradient-to-r dark:from-[#163b59] dark:from-10%
         dark:via-[#18324f] dark:via-30% dark:to-[#121b2e] dark:to-90%"
    >
      <div
        className="sticky z-50  top-0 hidden lg:block py-3 effect_blure h-fit w-full
      
      "
      >
        <SubMenu />
      </div>
      <div className="flex">
        <MenuLateral />
        <div
          className=" w-full block 
        h-[100%] min-h-screen
       "
        >
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2 className="text-4xl font-bold dark:text-white text-gray-700 font-sans mx-0">
                Inventario{" "}
              </h2>
              <p className="text-xl dark:text-white text-gray-600 mx-0">
                Eficiencia en el trabajo Y organización de tus bodegas
              </p>
            </div>

            <div className="container_cont">
              <ContextCategory>
                <DatatableInventory />
              </ContextCategory>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryGeneral;
