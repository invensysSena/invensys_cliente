import { useState, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { getBusiness, getDataAll } from "../apis/ApiData";
export const AnalitycMenuVista = () => {
  const [expand, setExpand] = useState(false);
  const [modules, setModules] = useState([]);
  const [admin, setAdmin] = useState([]);
  useMemo(() => {
    (async () => {
      const data = await getDataAll();
      setAdmin(data.data.data);
      const bussiness = await getBusiness();
      setModules([
        bussiness.data.dataCategory,
        bussiness.data.dataCompany,
        bussiness.data.dataCompras,
        bussiness.data.dataIGeneral,
        bussiness.data.dataInventary,
        bussiness.data.dataNotify,
        bussiness.data.dataPedidos,
        bussiness.data.dataPedidoProvedor,
        bussiness.data.dataProduct,
        bussiness.data.dataProvider,
        bussiness.data.dataSubProduct,
      ]);
    })();
  }, []);

  let token = sessionStorage.getItem("secure_token");
  return (
    <>
     
        <div
          className={
            expand
              ? "items_Links effect_blure dark:bg-[#374151] dark:text-white p-4 sticky top-10  scale-100  rounded-md w-[280px] md:w-[20rem] transition duration-700 ease-in-out "
              : "items_Links effect_blure dark:bg-[#374151] dark:text-white scale-105 sticky top-10  rounded-md p-3 w-[280px] md:w-[14rem]  transition duration-700 ease-in-out "
          }
        >
          <div className="relative " onClick={() => setExpand(!expand)}>
            <div className=" absolute right-0 top-0 cursor-pointer  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#c1c4c8"
                  d="M10 21v-2H6.41l4.5-4.5l-1.41-1.41l-4.5 4.5V14H3v7h7m4.5-10.09l4.5-4.5V10h2V3h-7v2h3.59l-4.5 4.5l1.41 1.41Z"
                />
              </svg>
            </div>
          </div>
          <div className="log-img flex items-center mb-8">
            {admin.length > 0 ? (
              <img
                src={admin[0].imgURL}
                alt="logo"
                className="rounded-full w-10 h-10"
              />
            ) : (
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="logo"
                className="rounded-full w-10 h-10"
              />
            )}
            <span className="mx-1  flex flex-col">
              <span className="mx-1 font-bold flex flex-col">
                Administrador
              </span>
              <span className="text-gray-400 mx-1">
                Modulos: {modules.length}
              </span>
            </span>
          </div>

          <ul className="flex flex-col gap-2">
            <li>
              <NavLink
                to={""}
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center  bg-gradient-to-r from-cyan-500 to-blue-500
            text-white
            rounded-full p-1`
                    : `flex items-center text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500
            hover:text-white
            rounded-full p-1`
                }
              >
                <span className="bg-gray-100 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chart-histogram"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="#20c4d9"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 3v18h18"></path>
                    <path d="M20 18v3"></path>
                    <path d="M16 16v5"></path>
                    <path d="M12 13v8"></path>
                    <path d="M8 16v5"></path>
                    <path d="M3 11c6 0 5 -5 9 -5s3 5 9 5"></path>
                  </svg>
                </span>
                <span className="mx-5 block">Inicio</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`AnBodega/${token}`}
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center  bg-gradient-to-r from-cyan-500 to-blue-500
            text-white
            rounded-full p-1`
                    : `flex items-center text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500
            hover:text-white
            rounded-full p-1`
                }
              >
                <span className="bg-gray-100 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chart-dots-2"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="#3f51b5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 3v18h18"></path>
                    <path d="M9 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M13 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M21 3l-6 1.5"></path>
                    <path d="M14.113 6.65l2.771 3.695"></path>
                    <path d="M16 12.5l-5 2"></path>
                  </svg>
                </span>

                <span className="mx-5 block dark:text-white">Bodegas</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`AnProductos/${token}`}
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center  bg-gradient-to-r from-cyan-500 to-blue-500
            text-white
            rounded-full p-1`
                    : `flex items-center text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500
            hover:text-white
            rounded-full p-1`
                }
              >
                <span className="bg-gray-100 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#3f51b5"
                      d="M28 23v3.586l-5-5V15a1 1 0 0 0-.553-.894L17 11.381V5.828l2.586 2.586L21 7l-5-5l-5 5l1.414 1.414L15 5.828v5.554l-5.447 2.723A1 1 0 0 0 9 15v6.586l-5 5V23H2v7h7v-2H5.414l4.783-4.783l5.356 2.678a1.001 1.001 0 0 0 .894 0l5.356-2.678L26.586 28H23v2h7v-7Zm-13 .382l-4-2v-4.764l4 2Zm1-6.5L12.236 15L16 13.118L19.764 15Zm5 4.5l-4 2v-4.764l4-2Z"
                    />
                  </svg>
                </span>

                <span className="mx-5 block dark:text-white">Productos</span>
              </NavLink>
            </li>
          </ul>
          <ul>
            <span className="mt-5 block font-bold mb-4 text-xl dark:text-white ">
              Opciones
            </span>
            <li className="flex items-center">
              <NavLink
                to={`TodoComands/${token}`}
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center  bg-gradient-to-r from-cyan-500 to-blue-500
              text-white
              rounded-full p-1`
                    : `flex items-center text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500
              hover:text-white
              rounded-full p-1`
                }
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#99b8c4"
                      d="m23.265 24.381l.9-.894c4.164.136 4.228-.01 4.411-.438l1.144-2.785l.085-.264l-.093-.231c-.049-.122-.2-.486-2.8-2.965V15.5c3-2.89 2.936-3.038 2.765-3.461l-1.139-2.814c-.171-.422-.236-.587-4.37-.474l-.9-.93a20.166 20.166 0 0 0-.141-4.106l-.116-.263l-2.974-1.3c-.438-.2-.592-.272-3.4 2.786l-1.262-.019c-2.891-3.086-3.028-3.03-3.461-2.855L9.149 3.182c-.433.175-.586.237-.418 4.437l-.893.89c-4.162-.136-4.226.012-4.407.438l-1.146 2.786l-.09.267l.094.232c.049.12.194.48 2.8 2.962v1.3c-3 2.89-2.935 3.038-2.763 3.462l1.138 2.817c.174.431.236.584 4.369.476l.9.935a20.243 20.243 0 0 0 .137 4.1l.116.265l2.993 1.308c.435.182.586.247 3.386-2.8l1.262.016c2.895 3.09 3.043 3.03 3.466 2.859l2.759-1.115c.436-.173.588-.234.413-4.436Zm-11.858-6.524a4.957 4.957 0 1 1 6.488 2.824a5.014 5.014 0 0 1-6.488-2.824Z"
                    />
                  </svg>
                </span>
                <span className="mx-5 block dark:text-white">
                  Configuraciónes
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
    
    </>
  );
};
