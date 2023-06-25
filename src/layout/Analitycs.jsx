import { useState, useMemo } from "react";
import { MenuLateral } from "../components/MenuLateral";
import { Outlet } from "react-router-dom";
import { AnalitycMenuVista } from "../Generator/AnalitycMenuVista";
import { SubMenu } from "../components/SubMenu";

const Analitycs = () => {
  const [open, setOpen] = useState(false);
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
      <div className="flex overflow-y-hidden">
        <MenuLateral />
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
