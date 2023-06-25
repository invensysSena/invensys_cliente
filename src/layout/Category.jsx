import { MenuLateral } from "../components/MenuLateral";
import { DatatableCategorys } from "../components/DatatableCategorys";
import { ContextCategory } from "../hooks/context/ContextCategory";
import { SubMenu } from "../components/SubMenu";
const Category = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#cff5fb] from-2% via-[#beb6fb87] via-30% to-[#d7e4fabe] to-90%  w-full block  min-h-screen
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
        <div className=" w-full block  ">
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2 className="text-4xl font-bold dark:text-white text-gray-700 font-sans mx-0">
                Categorias{" "}
              </h2>
              <p className="text-xl dark:text-white text-gray-600 mx-0">
                Crea, administra y haz un seguimiento de tus productos en un
                solo lugar.
              </p>
            </div>

            <div className="container_cont">
              <ContextCategory>
                <DatatableCategorys />
              </ContextCategory>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
