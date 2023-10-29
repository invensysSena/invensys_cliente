import { useState, useMemo} from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/fuente.css";
import "animate.css";
import { useGetUsers } from "../hooks/context/GetUsersContext";
import moment from "moment-with-locales-es6";
import { dataIsAllowed } from "../auth/lowed.Modules";
moment.locale("es");
import { logoutAuth } from "../auth/AuthCount";
import NavlinkCuatomLink from "./navLinkCustomen/NavlinkCuatomLink";
import { svgAnalityc, svgBell, svgBodega, svgCategory, svgHome, svgInventory, svgLicence, svgPedidos, svgProduct, svgProfile, svgProvider, svgTraer, svgUsers, svgVentas } from "../svg/iconsMenuLateral";
import { rolesPemissionsRouter } from "../auth/RolesRouter";
import { permissionsPages } from "../auth/RolesRouter";
import { SvgSignup } from "../svg/iconsSubmenu";
export const MenuLateral = () => {
  const { getAdminDataAll, adminGetData } = useGetUsers();
  let type = sessionStorage.getItem("type");
  useMemo(() => {
    (async () => { await  rolesPemissionsRouter()})()
    const initial = async () => {
      await getAdminDataAll();
    };
    initial();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fecha = new Date().getFullYear();

  const [expand, setExpand] = useState(false);
  
  const handleMouse = () => {};
  document.body.style.overflowX = "hidden";



  return (
  
   
     
        <div className="sticky top-0 selft_scroll">
            <div
              className="  effect flex flex-col  justify-between" onMouseMove={handleMouse} >
              <div className="section-1 effect">
                <h2 className="text-center sticky hidden  animate__animated animate__fadeIn effect  lg:block  top-0 bg-white dark:bg-[#1e293b]  dark:text-white z-20 
                 text-xl font-bold py-2 border-b text-neutral-800 dark:border-[#44b2fd]">
                  {adminGetData.length > 0
                    ? type === "user" ? "Usuario" : adminGetData[0].nameadmin !== null ? adminGetData[0].nameadmin
                      : "Identificate" : "Identicate"}
                </h2>
                <div
                  className="text-center sticky block  lg:hidden dark:bg-[#1e293b] dark:text-white  top-0 bg-white z-20 
                   text-xl font-bold py-2 border-b text-neutral-800"
                  onClick={() => setExpand(!expand)}
                >
                  {expand ? (
                    <div className=" flex justify-between mx-1 items-center ">
                      <h1>Cerrar</h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"
                        />
                      </svg>
                    </div>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"
                        />
                      </svg>
                    </>
                  )}
                </div>
                <div className="contenedor_perfil_count flex">
                  {type === "user" ? (
                    <>
                      <span
                        className="contenedor_perfil  rounded my-1 cursor-not-allowed
                   border w-full mx-1 flex items-center relative p-1 border-[
                    #44b2fd]"
                      >
                        {type === "user" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#c1c7ce"
                              fillRule="evenodd"
                              d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4Zm7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413l-.005-.018ZM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <img
                            src={
                              adminGetData.length > 0
                                ? adminGetData[0].imgurl
                                : ""
                            }
                            alt="perfil"
                            className="w-8 rounded-full"
                          />
                        )}
                        <div className="administrador mx-1 hidden lg:block dark:text-white">
                          {type === "user" ? "Usuario normal" : "Administrador"}
                        </div>
                        <div className="activ absolute w-2 h-2 bg-green-400 rounded-full  right-1 top-1 "></div>
                      </span>
                    </>
                  ) : (
                    <>
                      <NavLink
                        to={"/" + dataIsAllowed[9].nombre}
                        className="contenedor_perfil  rounded my-1
                   border w-full mx-1 flex items-center relative p-1 border-[#009afa]"
                      >
                        {type === "user" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#c1c7ce"
                              fillRule="evenodd"
                              d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4Zm7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413l-.005-.018ZM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <>
                            {adminGetData.length > 0 ? (
                              <>
                                {adminGetData[0].imgurl ? (
                                  <img
                                    src={
                                      adminGetData.length > 0
                                        ? adminGetData[0].imgurl
                                        : ""
                                    }
                                    alt="perfil"
                                    className="w-8 rounded-full"
                                  />
                                ) : (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="35"
                                    height="35"
                                    viewBox="0 0 32 32"
                                  >
                                    <path
                                      fill="white"
                                      d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"
                                    />
                                    <path
                                      fill="#c9ccd1"
                                      d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"
                                    />
                                  </svg>
                                )}
                              </>
                            ) : (
                              ""
                            )}
                          </>
                        )}
                        <div className="administrador mx-1 hidden lg:block dark:text-white">
                          {type === "user" ? "Usuario normal" : "Administrador"}
                        </div>
                        <div className="activ absolute w-2 h-2 bg-green-400 rounded-full  right-1 top-1 "></div>
                      </NavLink>
                    </>
                  )}
                </div>
                <div className="items_list_roles">
                  <ul className="p-0 m-0">
                  <NavlinkCuatomLink dataIsAllowed={dataIsAllowed} index={9} expand={true} icon={svgProfile(22,22)} />
                  <NavlinkCuatomLink dataIsAllowed={dataIsAllowed} index={18} expand={true} icon={svgTraer(22,22)} />
                  <NavlinkCuatomLink dataIsAllowed={dataIsAllowed} index={10} expand={true} icon={svgHome(22,22)} />
                  <NavlinkCuatomLink dataIsAllowed={dataIsAllowed} index={2} expand={true} icon={svgUsers(22,22)} />
                  <NavlinkCuatomLink dataIsAllowed={dataIsAllowed} index={4} expand={true} icon={svgBell(22,22)} />
                  <NavlinkCuatomLink dataIsAllowed={dataIsAllowed} index={1} expand={true} icon={svgBodega(22,22)} />
                  <NavlinkCuatomLink dataIsAllowed={dataIsAllowed} index={17} expand={true} icon={svgInventory(22,22)} />
                  <NavlinkCuatomLink dataIsAllowed={dataIsAllowed} index={5} expand={true} icon={svgProduct(22,22)} />
                  <NavlinkCuatomLink dataIsAllowed={dataIsAllowed} index={3} expand={true} icon={svgCategory(22,22)} />
                  <NavlinkCuatomLink dataIsAllowed={dataIsAllowed} index={6} expand={true} icon={svgProvider(22,22)} />
                  <NavlinkCuatomLink dataIsAllowed={dataIsAllowed} index={7} expand={true} icon={svgPedidos(22,22)} />
                  <NavlinkCuatomLink dataIsAllowed={dataIsAllowed} index={16} expand={true} icon={svgVentas(22,22)} />
                  <NavlinkCuatomLink dataIsAllowed={dataIsAllowed} index={8} expand={true} icon={svgAnalityc(22,22)} />
                  <NavlinkCuatomLink dataIsAllowed={dataIsAllowed} index={19} expand={true} icon={svgLicence(100,100)} />
                    {/* dgfg */}
               
                    <li>
                      <NavLink
                        to="/login"
                        className={({ isActive }) =>
                          isActive
                            ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium text-black  dark:text-white 
                     rounded dark:bg-gray-700`
                            : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium text-black d dark:text-white
                      rounded dark:hover:bg-gray-700 `
                        }
                      >
                        <button
                          onClick={()=> logoutAuth()}
                          className="flex 
                     hover:bg-gray-100
                     items-center 
                     
                        font-medium text-black
                      rounded dark:hover:bg-gray-700 "
                        >
                       {SvgSignup(22,22,"#000")}
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block dark:text-white`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block dark:text-white`
                            }
                          >
                            {" "}
                            Cerrar sesión
                          </div>
                        </button>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              {permissionsPages.permisions.includes(dataIsAllowed[12].nombre) ? (
                <div className="titkle">
                  <h2
                    className={
                      expand
                        ? `NavLinks1 pt-[2px] my-4 font-bold ml-3 block lg:block dark:text-white`
                        : `NavLinks1 pt-[2px] my-4 font-bold ml-3 hidden lg:block dark:text-white`
                    }
                  >
                    configuración
                  </h2>
                  <hr />
                </div>
              ) : null}
              <div className="section-2">
                <div className="items-2">
                  <ul>
                 
                    <div className="email dark:text-[#4ade80] ml-3">
                      {type === "user" ? (
                        <>{sessionStorage.getItem("email")}</>
                      ) : null}
                    </div>
                    <div className="email  ml-3">
                      {type === "user" ? (
                        <>
                          <span>
                            <span className="dark:text-white">Rol:</span>{" "}
                            <span className="text-[#019afa]">Usuario</span>
                          </span>
                        </>
                      ) : null}
                    </div>
                    
                    <div className="email   ml-3">
                      {type === "user" ? (
                        <>
                          <span>
                            <span className="dark:text-white">
                              Restrincciones:
                            </span>{" "}
                            <span className="text-red-400">
                              Algunas funcionalidades estan restringidas o desabilitadas por el
                              administrador
                            </span>
                          </span>
                        </>
                      ) : null}
                    </div>
                    <div
                      className={
                        expand
                          ? `NavLinks1 my-3 text-gray-400 pt-[2px] ml-3 block lg:block`
                          : `NavLinks1 my-3 text-gray-400 pt-[2px] ml-3 hidden lg:block`
                      }
                    >
                      &copy; {fecha} | Invensys
                    </div>
                  </ul>
                </div>
              </div>
            </div>
        
        </div>
  
   
  );
};
