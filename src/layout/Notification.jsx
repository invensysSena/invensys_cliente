import { useMemo } from "react";
import { MenuLateral } from "../components/MenuLateral";
import { NotifyHeader } from "../components/NotificationsHeader/NotifyHeader";
import { Outlet } from "react-router-dom";
import { TodoFunctions } from "../apis/ApiData";
import "../assets/css/fuente.css";
import { SubMenu } from "../components/SubMenu";
const Notification = () => {
  useMemo(() => {
    (async () => {
      await TodoFunctions.deleteEstadoNotificacion();
    })();
  }, []);

  return (
    <div
      className="bg-gradient-to-r from-[#e3fbff] from-10% via-[#e3d1fdaa] via-30% to-[#e5fbff] to-90%  w-full block  min-h-screen

        

        dark:bg-gradient-to-r dark:from-[#163b59] dark:from-10%
         dark:via-[#18324f] dark:via-30% dark:to-[#121b2e] dark:to-90%"
    >
      <div
        className="sticky z-50 hidden lg:block top-0 py-3 effect_blure h-fit w-full
      
      "
      >
        <SubMenu />
      </div>
      <div className="flex">
        <MenuLateral />
        <div
          className=" w-full grid place-content-center my-2 min-h-screen
         
        
        "
        >
          <div
            className="bg-white dark:bg-[#37415197]  overflow-y-hidden w-11/12  lg:w-[50rem] h-[40rem] m-auto rounded-lg scrollhelping"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <h2 className="text-2xl font-bold m-4 dark:text-[#019afa]">
              Notificaciones
            </h2>
            <hr />
            <div className="sticky top-0 bg-white dark:bg-[#374151] z-50 h-fit">
              <NotifyHeader />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
