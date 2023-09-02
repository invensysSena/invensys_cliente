import { useEffect, useMemo, useState } from "react";

import { useParams, Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useGetUsers } from "../hooks/context/GetUsersContext";
import { PostModulePermissions } from "../services/accesoModules";
export const ModalModule = () => {
  const [state, setState] = useState(false);
  const [stateMode, setStateMode] = useState(false);
  const {
    getUsers,
    getUsersAdmins,
    userModuleRegister,
    getModule,
    moduleUsers,
    DeleteModuleU,
  } = useGetUsers();

  const [loading, setLoading] = useState(false);
 
  const { id } = useParams();
  console.log(id,"id")

  // useEffect(() => {
  //   setLoading(true);
  //   const initial = async () => {
  //     await getUsersAdmins();
  //     await getModule(id);
  //     console.log(moduleUsers,"dddddddddddd")
  //     setLoading(false);
  //   };
  //   initial();
  // }, [state]);

  useEffect(() => {
    setLoading(true);
    const initial = async () => {
      await getUsersAdmins();
      await getModule(id);
     
      setLoading(false);
    };
    initial();
  }, [id]);

  console.log(moduleUsers,"dddddddddddd")
  const PostModuleaPath = async (path,iduser) => {
    console.log(moduleUsers,"mmmm")
      try {

        if(moduleUsers.filter((moduleUser) => moduleUser.pathrouter === path).length > 0){

          let idmodule = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === path)[0].idmodule;
          console.log(idmodule)
          return await  userModuleRegister(path,iduser,idmodule);
        }else{
        
          return await userModuleRegister(path,iduser,"");
        }
      } catch (error) {

        return error;
        
      }
}
  const typePermissions = async () => {
    console.log("hola")
  }
  
  return (
    <>
      {getUsers
        .filter((getuser) => getuser.iduser === id)
        .map((getuse) => (
          <>
            <div
              className="bg-white min-h-screen

              dark:bg-gradient-to-r from-[#163b59] from-10%
               via-[#18324f] via-30% to-[#121b2e] to-90%    w-full h-full top-0"
              key={getuse.iduser}
            >
              {loading === true ? (
                <div className="contenedor p-3 border-b dark:bg-[#37415197] dark:text-white bg-white border rounded-lg shadow-xl max-w-6xl mx-auto mt-20">
                  <div className="container items-center flex justify-between">
                    <span className="w-36 ">
                      <Skeleton height={16} />
                    </span>
                    <span className="w-56 ">
                      <Skeleton height={36} />
                    </span>
                    <span className="w-36 ">
                      <Skeleton height={16} />
                    </span>
                  </div>

                  <div className="section1 flex justify-around items-center mt-16">
                    <span className="w-36 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                  </div>
                  <div className="section1 flex justify-around items-center mt-8">
                    <span className="w-36 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                  </div>
                  <div className="section1 flex justify-around items-center mt-8">
                    <span className="w-36 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                  </div>
                  <div className="section1 flex justify-around items-center mt-8">
                    <span className="w-36 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                  </div>
                  <div className="section1 flex justify-around items-center mt-8">
                    <span className="w-36 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                  </div>
                  <div className="section1 flex justify-around items-center mt-8">
                    <span className="w-36 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                  </div>
                  <div className="section1 flex justify-around items-center mt-8">
                    <span className="w-36 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                  </div>
                  <div className="section1 flex justify-around items-center mt-8">
                    <span className="w-36 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                    <span className="w-20 ">
                      <Skeleton height={20} />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="contenedor dark:bg-[#37415197] dark:text-white dark:border-none p-3 border-b bg-white border rounded-lg shadow-xl max-w-6xl mx-auto mt-20 ">
                  
                  <div className="head_p relative flex items-center justify-between">
                    <Link to="/usuarios" className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                      >
                        <path
                          fill="currentColor"
                          d="M24.96 32.601L12.371 19.997l.088-.088l12.507-12.52a.661.661 0 0 0-.01-.921a.645.645 0 0 0-.458-.182a.653.653 0 0 0-.465.186l-13.004 13.02a.63.63 0 0 0-.176.49a.656.656 0 0 0 .18.523l13.014 13.031c.244.23.659.233.921-.02a.658.658 0 0 0-.008-.915z"
                        />
                      </svg>
                    </Link>
                    <strong className="text-2xl">
                      Modulos y permisos de usuarios
                    </strong>
                    <div className="user text-[#019afa]">{getuse.email}</div>
                  </div> *
                  <div className="contenerdor_items mt-10">
                     <div className=" flex justify-evenly items-center">
                      <div className="title">bodega</div>
                      <div className="toogle flex items-center">
                        <div className="flex items-center flex-col">
                        <span className="mx-1">Activar</span>
                        <button
                          onClick={async()=>await PostModuleaPath("users/bodega",getuse.iduser)}
                          className={
                            moduleUsers.filter(
                              (moduleUser) => moduleUser.pathrouter === "users/bodega"
                            ).length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.pathrouter === "users/bodega1"
                              ).length > 0
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                      <div className="toogle flex items-center">
                        <div className="flex flex-col items-center">
                        <span className="mx-1">Actualizar</span>
                        <button
                        onClick={()=>typePermissions()}
                          className={
                            moduleUsers.filter(
                              (moduleUser) => moduleUser.pathrouter === "users/bodega1"
                            ).length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.pathrouter === "users/bodega"
                              ).length > 0
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                      <div className="toogle flex items-center">
                        <div className="flex-col flex">
                        <span className="mx-1">Editar</span>
                        <button
                          className={
                            moduleUsers.filter(
                              (moduleUser) => moduleUser.pathrouter === "users/bodega1"
                            ).length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.pathrouter === "users/bodega1"
                              ).length > 0
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button></div>
                      </div>
                      <div className="toogle flex items-center">
                      <div className=" flex flex-col items-center">
                        <span className="mx-1">Eliminar</span>
                        <button
                          className={
                            moduleUsers.filter(
                              (moduleUser) => moduleUser.pathrouter === "users/bodega1"
                            ).length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.pathrouter === "users/bodega1"
                              ).length > 0
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button></div>
                      </div>
                    </div> 
                   
                  </div>
                </div>
              )}
            </div>
          </>
        ))}
    </>
  );
};
