import { MenuLateral } from "../components/MenuLateral";
import { DatatableProduct } from "../components/Tables/DatatableProduct";
import { ContextProduxt } from "../hooks/context/ContextProduxt";
import { ContextCategory } from "../hooks/context/ContextCategory";
import { SubMenu } from "../components/SubMenu";
const Product = () => {
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
                Productos
              </h2>
              <p className="text-xl dark:text-white text-gray-600 mx-0">
                Crea, administra tus productos de forma sencilla.
              </p>
            </div>

            <div className="container_cont">
              <ContextCategory>
                <ContextProduxt>
                  <DatatableProduct />
                </ContextProduxt>
              </ContextCategory>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
