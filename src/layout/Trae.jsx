import { MenuLateral } from "../components/MenuLateral";
import { SubMenu } from "../components/SubMenu";
import { FormTrae } from "../log/FormTrae";
import { ListTrae } from "../log/ListTrae";
import "../components/efectosCss.css";
import { useState } from "react";
const Trae = () => {

  let [estado, setEstado] = useState(false)
  return (
    <div
      className="darkMode contenedor_pages activess"
    >
      <div  className="header_dasboard bg-white sticky top-0 z-50" >
        <SubMenu />
      </div>
        <div className="menu-lateral bg-white">
        <MenuLateral />
        </div>
      <div className="flex contenido">
        <div className="w-full ">
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2
                className="text-3xl md:text-4xl
               mb-10 font-bold text-gray-700 font-sans mx-0 dark:text-white"
              >
                Negocio/Empresa
              </h2>
              <p className="text-xl text-gray-600 mx-0"></p>
            </div>

            <div
              className="container_c flex 
              gap-2 justify-between flex-col md:flex-row  max-w-7xl w-auto mx-auto"
            >
              <ListTrae state={estado}/>
              <div className="  md:block">
                <FormTrae state={estado} cambiarState={setEstado} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trae;
