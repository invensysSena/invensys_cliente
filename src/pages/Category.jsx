import { MenuLateral } from "../components/MenuLateral";
import { DatatableCategorys } from "../components/Tables/DatatableCategorys";
import { ContextCategory } from "../hooks/context/ContextCategory";
import { SubMenu } from "../components/SubMenu";
const Category = () => {
  return (
    <div
      className="contenedor_pages activess darkMode"
    >
      <div className="header_dasboard bg-white sticky top-0 z-50" >
        <SubMenu />
      </div>
      <div className="menu-lateral bg-white">
        <MenuLateral />

      </div>
      <div className="contendido   h-[100%] min-h-screen">
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
