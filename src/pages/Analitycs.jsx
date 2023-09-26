import { useState, useMemo } from "react";
import { MenuLateral } from "../components/MenuLateral";
import { Outlet } from "react-router-dom";
import { AnalitycMenuVista } from "../components/generator/AnalitycMenuVista";
import { SubMenu } from "../components/SubMenu";

const Analitycs = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="contenedor_pages activess darkMode" >
      <div
        className="header_dasboard bg-white sticky top-0 z-50">
        <SubMenu />
      </div>
      <div className="menu-lateral bg-white">

        <MenuLateral />
      </div>
      <div className="contendido   h-[100%] min-h-screen">
        <div className=" w-full  block  ">
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2 className="text-4xl mb-10 font-bold dark:text-white text-gray-700 font-sans mx-0">
                Estadisticas y Reportes
              </h2>
              <p className="text-xl text-gray-600 mx-0"></p>
            </div>

            <span
              className="dark:text-white md:hidden bg-[#019afa] p-2 my-2 rounded-full inline-block"
              onClick={useMemo(() => () => setOpen(!open), [open])}
            >
              Abrir Ventana
            </span>

            <div className="flex lg:justify-between flex-col md:flex-row  ">
              <div className="container_c ">
                <Outlet />
              </div>

              <div className={open ? "block  " : "  hidden md:block"}>
                <div className="fin md:sticky  fixed  top-[15rem] md:top-0">
                  <AnalitycMenuVista />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analitycs;
