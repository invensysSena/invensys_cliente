import { useState, useMemo, useCallback } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/fuente.css";
import user from "../assets/icons/user-check.svg";
import "animate.css";
import bell from "../assets/icons/bell.svg";
import home from "../assets/icons/home.svg";
import comand from "../assets/icons/command.svg";
import help from "../assets/icons/help-circle.svg";
import send from "../assets/icons/send.svg";
import settings from "../assets/icons/settings.svg";
import start from "../assets/icons/star.svg";
import grid from "../assets/icons/grid.svg";
import harddrive from "../assets/icons/hard-drive.svg";
import truck from "../assets/icons/truck.svg";
import cloceSession from "../assets/icons/log-out.svg";
import { ToastContainer, toast } from "react-toastify";
import { useGetUsers } from "../hooks/context/GetUsersContext";
import axios from "axios";
import { getNotification, TodoFunctions } from "../apis/ApiData";
import { urlServer } from "../urlApi/url";
import { ComandoSystem } from "../cmd/ComandoSystem";
import moment from "moment-with-locales-es6";
import { dataIsAllowed } from "../secure/lowed.Modules";
moment.locale("es");
const token = sessionStorage.getItem("secure_token");

import { logoutAuth } from "../utils/AuthCount";
export const MenuLateral = () => {
  const { getAdminDataAll, adminGetData } = useGetUsers();
  const [data, setData] = useState([]);

  useMemo(() => {
    const initial = async () => {
      if (
        !token ||
        token === null ||
        token === undefined ||
        adminGetData.length === 0 ||
        adminGetData === undefined
      ) {
        const data = await getAdminDataAll();
        setData(data);
      }

      // await TodoFunctions.SearchDismiutionUnidadProduct();
    };
    initial();
  }, []);
  const fecha = new Date().getFullYear();
  const [usersP, setUsersP] = useState([]);

  const token1 = sessionStorage.getItem("token_token1");
  const [notify, setNotify] = useState([]);
  let type = sessionStorage.getItem("type");
  let usersData = {
    tokeVerify: "",
    permisions: [],
  };
  const [expand, setExpand] = useState(false);
  // useMemo(() => {
  //   (async () => {
  //     try {
  //       const data = await getNotification();

  //       setNotify(data.data.responseNotification);
  //     } catch (error) {
  //       toast.error("La sesión ha expirado vuelva a iniciar sesión", {
  //         position: "top-left",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: 1,
  //         theme: "colored",
  //       });

  //       setTimeout(() => {
  //         sessionStorage.removeItem("secure_token");
  //         sessionStorage.removeItem("perfil_rol");
  //         sessionStorage.removeItem("auth_cuenta");
  //         sessionStorage.removeItem("response_auth");
  //         sessionStorage.removeItem("type");
  //         sessionStorage.removeItem("module");
  //         sessionStorage.removeItem("token_token1");
  //         window.location.href = "/login";
  //       }, 3000);
  //     }
  //   })();
  // }, []);
  if (type === "user") {
    const Webk = () => {
      useMemo(() => {
        try {
          async function getModulesUser() {
            const response = await axios.get(`${urlServer}/getMod/${token1}`);

            const modules = response.data.data;
            modules.map((item) => {
              return setUsersP([...usersP, usersP.push(item.titulo)]);
            });
          }
          getModulesUser();
        } catch (error) {
          alert("no tienes conexion");
        }
      }, []);
    };

    let toke = token ? token : null;
    usersData.tokeVerify = toke;
    usersData.permisions = ["bodega"];
    usersData.permisions = usersP;
    Webk();
  }

  if (type === "administrador") {
    let tokeVerify = token ? token : null;
    usersData.permisions = [
      dataIsAllowed[0].nombre,
      dataIsAllowed[1].nombre,
      dataIsAllowed[3].nombre,
      dataIsAllowed[2].nombre,
      dataIsAllowed[4].nombre,
      dataIsAllowed[5].nombre,
      dataIsAllowed[6].nombre,
      dataIsAllowed[7].nombre,
      dataIsAllowed[8].nombre,
      dataIsAllowed[9].nombre,
      dataIsAllowed[10].nombre,
      dataIsAllowed[11].nombre,
      dataIsAllowed[12].nombre,
      dataIsAllowed[13].nombre,
      dataIsAllowed[14].nombre,
      dataIsAllowed[15].nombre,
      dataIsAllowed[16].nombre,
      dataIsAllowed[17].nombre,
      dataIsAllowed[18].nombre,
      dataIsAllowed[19].nombre,
    ];
    usersData.tokeVerify = tokeVerify;
  }

  const [users, setUsers] = useState(usersData);

  const handleMouse = () => {};

  // const notifyFilterEstado = useMemo(
  //   () => notify.length > 0 && notify.filter((item) => item.estado >1),
  //   [notify]
  // );

  // console.log(notifyFilterEstado)
  // console.log(notify)
  
  document.body.style.overflowX = "hidden";

  let fechaStateUser = sessionStorage.getItem("fecha");
  const endOf = moment(fechaStateUser).startOf("hour").fromNow();

  return (
    <div className="z-50 relative">
      <ComandoSystem />
      <>
        <ToastContainer />
      </>
      <div
        className={
          expand
            ? "mr-[3rem]  lg:mr-[20rem] dark:bg-[#1e293b] effect "
            : " effect mr-[3rem] dark:bg-[#1e293b]  lg:mr-[13rem]"
        }
      >
        <div className="min-h-screen">
          <div
            className={
              expand
                ? ` effect

selft_scroll
fixed top-0
  bg-white  mr-[8rem] dark:bg-[#1e293b] min-h-full
 w-30 lg:w-52   b  overflow-x-hidden  `
                : `

selft_scroll
fixed top-0
  bg-white mr-[8rem] dark:bg-[#1e293b] min-h-screen
 w-14 lg:w-52   b  overflow-x-hidden effect  `
            }
          >
            <div
              className="  effect flex flex-col gap-1  justify-between"
              onMouseMove={handleMouse}
            >
              <div className="section-1 effect">
                <h2
                  className="text-center sticky hidden  animate__animated animate__fadeIn effect  lg:block 
                top-0 bg-white dark:bg-[#1e293b]  dark:text-white z-20 
                 text-xl font-bold py-2 border-b text-neutral-800 dark:border-[
                  #44b2fd]"
                >
                  {adminGetData.length > 0
                    ? type === "user"
                      ? "Usuario"
                      : adminGetData[0].nameadmin !== null
                      ? adminGetData[0].nameadmin
                      : "Identificate"
                    : "Identicate"}
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
                    {users.permisions.includes(dataIsAllowed[9].nombre) ? (
                      <li className="p-0 m-0">
                        <NavLink
                          to={dataIsAllowed[9].url}
                          className={({ isActive }) =>
                            isActive
                              ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1 my-[2px]  p-2 font-medium dark:text-white text-black dark:bg-gray-700 
                     rounded `
                              : `flex 
                     hover:bg-gray-100 dark:hover:bg-gray-700 
                     items-center 
                      mx-1  my-[2px] p-2 font-medium dark:text-white text-black
                      rounded `
                          }
                        >
                          <img src={user} alt="" width={20} />
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block`
                            }
                          >
                            Perfil
                          </div>
                        </NavLink>
                      </li>
                    ) : null}
                    {users.permisions.includes(dataIsAllowed[18].nombre) ? (
                      <li className="p-0 m-0">
                        <NavLink
                          to={dataIsAllowed[18].url}
                          className={({ isActive }) =>
                            isActive
                              ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1 my-[2px]  p-2 font-medium dark:text-white text-black
                     rounded dark:bg-gray-700`
                              : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1  my-[2px] p-2 font-medium dark:text-white text-black
                      rounded dark:hover:bg-gray-700  `
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#777777"
                              d="M1.63.47a.393.393 0 0 0-.39.39v2.417c0 .212.177.39.39.39h20.74c.213 0 .39-.178.39-.39V.859a.393.393 0 0 0-.39-.39zm-.045 4.126a.41.41 0 0 0-.407.337l-1.17 6.314C0 11.274 0 11.3 0 11.327v2.117c0 .23.186.416.416.416h23.168c.23 0 .416-.186.416-.416v-2.126c0-.027 0-.053-.009-.08l-1.169-6.305a.41.41 0 0 0-.407-.337zM1.7 14.781a.457.457 0 0 0-.46.46v7.829c0 .257.203.46.46.46h14.108c.257 0 .46-.203.46-.46v-6.589c0-.257.204-.46.461-.46h4.02c.258 0 .461.203.461.46v6.589c0 .257.204.46.46.46h.62a.456.456 0 0 0 .461-.46v-7.829a.458.458 0 0 0-.46-.46zm1.842 1.55h7.847c.212 0 .39.177.39.39V21.6c0 .212-.178.39-.39.39H3.542a.393.393 0 0 1-.39-.39v-4.88c0-.221.178-.39.39-.39Z"
                            />
                          </svg>
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block`
                            }
                          >
                            Empresa
                          </div>
                        </NavLink>
                      </li>
                    ) : null}
                    {users.permisions.includes(dataIsAllowed[10].nombre) ? (
                      <li>
                        <NavLink
                          to={dataIsAllowed[10].url}
                          className={({ isActive }) =>
                            isActive
                              ? `
                        flex 
                        bg-gray-100
                        items-center 
                         mx-1   p-2 font-medium dark:text-white text-black
                         rounded dark:bg-gray-700`
                              : `flex 
                         hover:bg-gray-100
                         items-center 
                          mx-1   p-2 font-medium dark:text-white text-black
                          rounded dark:hover:bg-gray-700 `
                          }
                        >
                          <img src={home} alt="" width={20} />
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block`
                            }
                          >
                            Inicio
                          </div>
                        </NavLink>
                      </li>
                    ) : null}
                    {users.permisions.includes(dataIsAllowed[2].nombre) ? (
                      <li>
                        <NavLink
                          to={dataIsAllowed[2].url}
                          className={({ isActive }) =>
                            isActive
                              ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium dark:text-white text-black
                     rounded dark:bg-gray-700`
                              : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium dark:text-white text-black
                      rounded dark:hover:bg-gray-700 `
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="#787878"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 19.128a9.38 9.38 0 0 0 2.625.372a9.337 9.337 0 0 0 4.121-.952a4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0a3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0a2.625 2.625 0 0 1 5.25 0Z"
                            />
                          </svg>
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block`
                            }
                          >
                            Usuarios
                          </div>
                        </NavLink>
                      </li>
                    ) : null}
                    {users.permisions.includes(dataIsAllowed[4].nombre) ? (
                      <li>
                        <NavLink
                          to={dataIsAllowed[4].url}
                          className={({ isActive }) =>
                            isActive
                              ? `
                     flex 
                     bg-gray-100
                     items-center 
                      mx-1  my-[2px] p-2 font-medium dark:text-white text-black
                      rounded dark:bg-gray-700`
                              : `flex 
                      hover:bg-gray-100
                      items-center 
                       mx-1 my-[2px] p-2 font-medium dark:text-white text-black
                       rounded dark:hover:bg-gray-700 `
                          }
                        >
                          <img src={bell} alt="" width={20} />
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block`
                            }
                          >
                            Notificaciones{" "}
                            {/* {notifyFilterEstado.length > 0 ? (
                              <span className="bg-red-500 text-white rounded-full px-1 text-xs">
                                {notifyFilterEstado.length > 9
                                  ? "9+"
                                  : notifyFilterEstado.length}
                              </span>
                            ) : null} */}
                          </div>
                        </NavLink>
                      </li>
                    ) : null}
                    {users.permisions.includes(dataIsAllowed[1].nombre) ? (
                      <li>
                        <NavLink
                          to={dataIsAllowed[1].url}
                          className={({ isActive }) =>
                            isActive
                              ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium dark:text-white text-black
                     rounded dark:bg-gray-700`
                              : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium dark:text-white text-black
                      rounded dark:hover:bg-gray-700 `
                          }
                        >
                          <img src={grid} alt="" width={20} />
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block`
                            }
                          >
                            Bodegas
                          </div>
                        </NavLink>
                      </li>
                    ) : null}
                    {users.permisions.includes(dataIsAllowed[17].nombre) ? (
                      <li>
                        <NavLink
                          to={dataIsAllowed[17].url}
                          className={({ isActive }) =>
                            isActive
                              ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium dark:text-white text-black
                     rounded dark:bg-gray-700`
                              : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium dark:text-white text-black
                      rounded dark:hover:bg-gray-700 `
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#777777"
                              d="m15.5 19.925l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4l-7.05 7.05ZM21 10h-2V5h-2v3H7V5H5v14h6v2H5q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h4.175q.275-.875 1.075-1.438T12 1q1 0 1.788.563T14.85 3H19q.825 0 1.413.588T21 5v5Zm-9-5q.425 0 .713-.288T13 4q0-.425-.288-.713T12 3q-.425 0-.713.288T11 4q0 .425.288.713T12 5Z"
                            />
                          </svg>
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block`
                            }
                          >
                            Inventario
                          </div>
                        </NavLink>
                      </li>
                    ) : null}
                    {users.permisions.includes(dataIsAllowed[5].nombre) ? (
                      <li>
                        <NavLink
                          to={dataIsAllowed[5].url}
                          className={({ isActive }) =>
                            isActive
                              ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium dark:text-white text-black
                     rounded dark:bg-gray-700`
                              : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium dark:text-white text-black
                      rounded dark:hover:bg-gray-700 `
                          }
                        >
                          <img src={comand} alt="" width={20} />
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block`
                            }
                          >
                            Productos
                          </div>
                        </NavLink>
                      </li>
                    ) : null}
                    {users.permisions.includes(dataIsAllowed[3].nombre) ? (
                      <li>
                        <NavLink
                          to={dataIsAllowed[3].url}
                          className={({ isActive }) =>
                            isActive
                              ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium dark:text-white text-black
                     rounded dark:bg-gray-700`
                              : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium dark:text-white text-black
                      rounded dark:hover:bg-gray-700 `
                          }
                        >
                          <img src={harddrive} alt="" width={20} />
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block`
                            }
                          >
                            Categorias
                          </div>
                        </NavLink>
                      </li>
                    ) : null}
                    {users.permisions.includes(dataIsAllowed[6].nombre) ? (
                      <li>
                        <NavLink
                          to={dataIsAllowed[6].url}
                          className={({ isActive }) =>
                            isActive
                              ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium dark:text-white text-black
                     rounded dark:bg-gray-700`
                              : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium dark:text-white text-black
                      rounded dark:hover:bg-gray-700 `
                          }
                        >
                          <img src={truck} alt="" width={20} />
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block`
                            }
                          >
                            Proveedores
                          </div>
                        </NavLink>
                      </li>
                    ) : null}
                    {users.permisions.includes(dataIsAllowed[7].nombre) ? (
                      <li>
                        <NavLink
                          to={dataIsAllowed[7].url}
                          className={({ isActive }) =>
                            isActive
                              ? `
                    flex 
                    
                    items-center 
                     mx-1 bg-gray-100 my-[2px] p-2 font-medium dark:text-white text-black
                     rounded dark:bg-gray-700`
                              : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium dark:text-white text-black
                      rounded dark:hover:bg-gray-700 `
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 48 48"
                          >
                            <g
                              fill="none"
                              stroke="
#777777"
                              strokeLinejoin="round"
                              strokeWidth="4"
                            >
                              <rect width="30" height="36" x="9" y="8" rx="2" />
                              <path
                                strokeLinecap="round"
                                d="M18 4v6m12-6v6m-14 9h16m-16 8h12m-12 8h8"
                              />
                            </g>
                          </svg>
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block`
                            }
                          >
                            Pedidos
                          </div>
                        </NavLink>
                      </li>
                    ) : null}
                    {users.permisions.includes(dataIsAllowed[16].nombre) ? (
                      <li>
                        <NavLink
                          to={dataIsAllowed[16].url}
                          className={({ isActive }) =>
                            isActive
                              ? `
                    flex 
                    
                    items-center 
                     mx-1 bg-gray-100 my-[2px] p-2 font-medium dark:text-white text-black
                     rounded dark:bg-gray-700`
                              : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium dark:text-white text-black
                      rounded dark:hover:bg-gray-700 `
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#777777"
                              d="M14.25 21.4q-.575.575-1.425.575T11.4 21.4l-8.8-8.8q-.275-.275-.438-.65T2 11.15V4q0-.825.588-1.413T4 2h7.15q.425 0 .8.163t.65.437l8.8 8.825q.575.575.575 1.413T21.4 14.25l-7.15 7.15ZM12.825 20l7.15-7.15L11.15 4H4v7.15L12.825 20ZM6.5 8q.625 0 1.063-.438T8 6.5q0-.625-.438-1.063T6.5 5q-.625 0-1.063.438T5 6.5q0 .625.438 1.063T6.5 8ZM4 4Z"
                            />
                          </svg>
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block`
                            }
                          >
                            P. venta
                          </div>
                        </NavLink>
                      </li>
                    ) : null}
                    {users.permisions.includes(dataIsAllowed[8].nombre) ? (
                      <li>
                        <NavLink
                          to={dataIsAllowed[8].url}
                          className={({ isActive }) =>
                            isActive
                              ? `
                    flex 
                    
                    items-center 
                     mx-1 bg-gray-100 my-[2px] p-2 font-medium text-black dark:text-white
                     rounded dark:bg-gray-700`
                              : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium text-black  dark:text-white
                      rounded dark:hover:bg-gray-700 `
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#777777"
                              d="m6 16.5l-3 2.94V11h3m5 3.66l-1.57-1.34L8 14.64V7h3m5 6l-3 3V3h3m2.81 9.81L17 11h5v5l-1.79-1.79L13 21.36l-3.47-3.02L5.75 22H3l6.47-6.34L13 18.64"
                            />
                          </svg>
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block dark:text-white`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block dark:text-white`
                            }
                          >
                            Estadisticas
                          </div>
                        </NavLink>
                      </li>
                    ) : null}
                    {users.permisions.includes(dataIsAllowed[19].nombre) ? (
                      <li>
                        <NavLink
                          to={dataIsAllowed[19].url}
                          className={({ isActive }) =>
                            isActive
                              ? `
                    flex 
                    
                    items-center 
                     mx-1 bg-gray-100 my-[2px] p-2 font-medium text-black dark:text-white             
                     rounded dark:bg-gray-700`
                              : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium text-black dark:text-white
                      rounded dark:hover:bg-gray-700 `
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 32 32"
                          >
                            <defs>
                              <linearGradient
                                id="vscodeIconsFileTypeLicensebat0"
                                x1="2.591"
                                x2="29.409"
                                y1="16"
                                y2="16"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0" stopColor="#ffca3f" />
                                <stop offset=".014" stopColor="#fec83e" />
                                <stop offset=".238" stopColor="#ebaf35" />
                                <stop offset=".471" stopColor="#de9d2e" />
                                <stop offset=".717" stopColor="#d6922a" />
                                <stop offset=".999" stopColor="#d38f29" />
                              </linearGradient>
                              <linearGradient
                                id="vscodeIconsFileTypeLicensebat1"
                                x1="19.532"
                                x2="11.214"
                                y1="27.942"
                                y2="16.674"
                                href="#vscodeIconsFileTypeLicensebat0"
                              />
                            </defs>
                            <path
                              fill="url(#vscodeIconsFileTypeLicensebat0)"
                              d="m22.652 3.474l-3.994 4.348l-.055.055l-.6.656a7.2 7.2 0 1 1-4.006 0l-.6-.656l-.055-.055l-3.994-4.348a13.409 13.409 0 1 0 13.3 0Z"
                            />
                            <path
                              fill="url(#vscodeIconsFileTypeLicensebat1)"
                              d="M24.1 23.839a5.287 5.287 0 0 1-5-7.011a2.1 2.1 0 0 1-1.6.688a2.153 2.153 0 0 1-1.417-.507c-.026.023-.054-.065-.082-.044c-.028-.021-.056.067-.082.044a2.153 2.153 0 0 1-1.417.507a2.1 2.1 0 0 1-1.6-.688a5.287 5.287 0 0 1-7.595 6.329a13.334 13.334 0 0 0 10.664 5.315h.054a13.334 13.334 0 0 0 10.664-5.315a5.264 5.264 0 0 1-2.589.682Z"
                            />
                          </svg>
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block`
                            }
                          >
                            Licencia
                          </div>
                        </NavLink>
                      </li>
                    ) : null}
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
                          <img src={cloceSession} alt="" width={20} />
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
              {users.permisions.includes(dataIsAllowed[12].nombre) ? (
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
                    <li className="mt-30"></li>
                    {users.permisions.includes(dataIsAllowed[12].nombre) ? (
                      <li>
                        <NavLink
                          to={dataIsAllowed[12].url}
                          className={({ isActive }) =>
                            isActive
                              ? `
                   flex 
                   bg-gray-100
                   items-center 
                    mx-1  my-[2px] p-2 font-medium text-black dark:text-white
                    rounded dark:bg-gray-700`
                              : `flex 
                    hover:bg-gray-100
                    items-center 
                     mx-1 my-[2px] p-2 font-medium text-black dark:text-white
                     rounded dark:hover:bg-gray-700 `
                          }
                        >
                          <img src={settings} alt="" width={20} />
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block`
                            }
                          >
                            Configuración
                          </div>
                        </NavLink>
                      </li>
                    ) : null}
                    {users.permisions.includes(dataIsAllowed[13].nombre) ? (
                      <li>
                        <NavLink
                          to={dataIsAllowed[13].url}
                          className={({ isActive }) =>
                            isActive
                              ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium text-black dark:text-white
                     rounded dark:bg-gray-700`
                              : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium text-black dark:text-white
                      rounded dark:hover:bg-gray-700 `
                          }
                        >
                          <img src={help} alt="" width={20} />
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block`
                            }
                          >
                            Ayuda
                          </div>
                        </NavLink>
                      </li>
                    ) : null}
                    {users.permisions.includes(dataIsAllowed[14].nombre) ? (
                      <li>
                        <NavLink
                          to={dataIsAllowed[14].url}
                          className={({ isActive }) =>
                            isActive
                              ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium text-black dark:text-white
                     rounded dark:bg-gray-700`
                              : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium text-black dark:text-white
                      rounded dark:hover:bg-gray-700 `
                          }
                        >
                          <img src={send} alt="" width={20} />
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block`
                            }
                          >
                            Enviar reporte
                          </div>
                        </NavLink>
                      </li>
                    ) : null}
                    {users.permisions.includes(dataIsAllowed[15].nombre) ? (
                      <li>
                        <NavLink
                          to={dataIsAllowed[15].url}
                          className={({ isActive }) =>
                            isActive
                              ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium text-black dark:text-white dark:bg-gray-700
                     rounded `
                              : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium text-black dark:text-white
                      rounded dark:hover:bg-gray-700 `
                          }
                        >
                          <img src={start} alt="" width={20} />
                          <div
                            className={
                              expand
                                ? `NavLinks1 pt-[2px] ml-3 block lg:block`
                                : `NavLinks1 pt-[2px] ml-3 hidden lg:block`
                            }
                          >
                            Calificanos
                          </div>
                        </NavLink>
                      </li>
                    ) : null}
                    <div className="email my-2 flex flex-col dark:text-[#fff] ml-3">
                      {type === "user" ? (
                        <>
                          <span>Tiempo de conexión</span>
                          <span>{endOf}</span>
                        </>
                      ) : null}
                    </div>
                    <div className="email dark:text-[#4ade80] ml-3">
                      {type === "user" ? (
                        <>{sessionStorage.getItem("correo")}</>
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
                    <div className="email  ml-3">
                      {type === "user" ? (
                        <>
                          <span>
                            <span className="dark:text-white">
                              Comprobaciónes:
                            </span>{" "}
                            <span className="text-[#019afa]">
                              {usersP.length}{" "}
                            </span>
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
                              Algunas funcionalidades estan restringidas por el
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
        </div>
      </div>
    </div>
  );
};
