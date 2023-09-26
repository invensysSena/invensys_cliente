import { useEffect, useState } from "react";
import { permissionsUser } from "../auth/permisionsUser";
import { useParams, Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { useGetUsers } from "../hooks/context/GetUsersContext";
import {messageWarding} from "../utils/alertsAplication"
import { messages } from "../utils/messageinvensys";
export const ModalModule = () => {

  const {getUsers,getUsersAdmins,userModuleRegister,getModule,moduleUsers,typePermissionsModul,getPermissionsModul} = useGetUsers();

  const [loading, setLoading] = useState(false);
  const [permissions, setPermissions] = useState([]);
  const [stateGlobal, setStateGlobal] = useState(false);
  const { id } = useParams();


  useEffect(() => {
    setLoading(true);
    const initial = async () => {
      await getUsersAdmins();
      await getModule(id);
      let response = await getPermissionsModul();
      console.log(response)
       if(response.status == 200){
        setPermissions(response.data.data);
       }
      setLoading(false);
    };
    initial();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateGlobal]);
  const PostModuleaPath = async (path,iduser) => {

      try {

        if(moduleUsers.filter((moduleUser) => moduleUser.pathrouter === path).length > 0){
          let idmodule = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === path)[0].idmodule;
          let res = await  userModuleRegister(path,iduser,idmodule);
          setStateGlobal(!stateGlobal);
          if (res.status !== 201) return messageWarding(messages.MESSAGE_MODULES);
   
        }else{
          let res = await userModuleRegister(path,iduser,"");
          if (res.status !== 201) return messageWarding(messages.MESSAGE_MODULES);
          setStateGlobal(!stateGlobal);
        }
      } catch (error) {
            
        return error;
        
      }
}
  const typePermissions = async (idModule,path,method) => {
    
   try {
      await typePermissionsModul(idModule,path,method);
      setStateGlobal(!stateGlobal);
   } catch (error) {
      return error;
    
   }
  }
  
  return (
    <>
      {getUsers
        .filter((getuser) => getuser.iduser === id)
        .map((getuse) => (
          <>
            <div 
              key={getuse.iduser}
              className="bg-white min-h-screen

              dark:bg-gradient-to-r from-[#163b59] from-10%
               via-[#18324f] via-30% to-[#121b2e] to-90%    w-full h-full top-0"
            >
             
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
                  </div> 
                  <div className="contenerdor_items mt-10">
                     <div className=" flex justify-evenly items-center">
                      <div className="title bg-gray-100 px-4 py-2 text-md border border-[#019afa10] font-bold rounded-md text-center w-32">bodega</div>
                      <div className="toogle flex items-center">
                        <div className="flex items-center flex-col">
                        <span className="mx-1">Activar/Ver</span>
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
                                (moduleUser) => moduleUser.pathrouter === "users/bodega"
                              ).length > 0
                              ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>

                      {
                        moduleUsers.length > 0 && moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/bodega").length > 0 ?
                        <>
                      <div className="toogle flex items-center">
                        <div className="flex-col flex">
                        <span className="mx-1">
                          Crear
                        </span>
                        <button
                        onClick={ async () =>{
                          let Module = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/bodega");
                          return await typePermissions({idmodule:Module[0].idmodule},{pathrouter:Module[0].pathrouter},"POST")
                        }}
                          className={
                            permissionsUser(permissions, moduleUsers,"POST","users/bodega").length >0 
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              permissionsUser(permissions, moduleUsers,"POST","users/bodega").length >0
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
                        onClick={ async () =>{
                          let Module = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/bodega");
                          return await typePermissions({idmodule:Module[0].idmodule},{pathrouter:Module[0].pathrouter},"PUT")
                        }}
                          className={
                            permissionsUser(permissions, moduleUsers,"PUT","users/bodega").length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              permissionsUser(permissions, moduleUsers,"PUT","users/bodega").length > 0
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                     
                      <div className="toogle flex items-center">
                      <div className=" flex flex-col items-center">
                        <span className="mx-1">Eliminar</span>
                        <button
                        onClick={ async () =>{
                          let Module = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/bodega");
                          return await typePermissions({idmodule:Module[0].idmodule},{pathrouter:Module[0].pathrouter},"DELETE")
                        }}
                          className={
                            permissionsUser(permissions, moduleUsers,"DELETE","users/bodega").length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              permissionsUser(permissions, moduleUsers,"DELETE","users/bodega").length > 0
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                        </>:null
                      }
                    </div> 
                     <div className=" flex justify-evenly items-center mt-4">
                      <div className="title bg-gray-100 px-4 py-2 text-md border border-[#019afa10] font-bold rounded-md text-center w-32">usuarios</div>
                      <div className="toogle flex items-center">
                        <div className="flex items-center flex-col">
                        <span className="mx-1">Activar/Ver</span>
                        <button
                          onClick={async()=>await PostModuleaPath("users/usuarios",getuse.iduser)}
                          className={
                            moduleUsers.filter(
                              (moduleUser) => moduleUser.pathrouter === "users/usuarios"
                            ).length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.pathrouter === "users/usuarios"
                              ).length > 0
                              ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                      {
                        moduleUsers.length > 0 && moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/usuarios").length > 0 ?
                        <>
                      
                      <div className="toogle flex items-center">
                        <div className="flex-col flex">
                        <span className="mx-1">
                          Crear
                        </span>
                        <button
                        onClick={ async () =>{
                          let Module = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/usuarios");
                          return await typePermissions({idmodule:Module[0].idmodule},{pathrouter:Module[0].pathrouter},"POST")
                        }}
                          className={
                            permissionsUser(permissions, moduleUsers,"POST","users/usuarios").length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              permissionsUser(permissions, moduleUsers,"POST","users/usuarios").length > 0
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
                        onClick={ async () =>{
                          let Module = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/usuarios");
                          return await typePermissions({idmodule:Module[0].idmodule},{pathrouter:Module[0].pathrouter},"PUT")
                        }}
                          className={

                            permissionsUser(permissions, moduleUsers,"PUT","users/usuarios").length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              permissionsUser(permissions, moduleUsers,"PUT","users/usuarios").length > 0
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                     
                      <div className="toogle flex items-center">
                      <div className=" flex flex-col items-center">
                        <span className="mx-1">Eliminar</span>
                        <button
                        onClick={ async () =>{
                          let Module = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/usuarios");
                          return await typePermissions({idmodule:Module[0].idmodule},{pathrouter:Module[0].pathrouter},"DELETE")
                        }}
                          className={
                            permissionsUser(permissions, moduleUsers,"DELETE","users/usuarios").length> 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              permissionsUser(permissions, moduleUsers,"DELETE","users/usuarios").length > 0 || permissions.active === true
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                     </>:null}
                    </div> 

                     <div className=" flex justify-evenly items-center mt-4">
                      <div className="title bg-gray-100 px-4 py-2 text-md border border-[#019afa10] font-bold rounded-md text-center w-32">Categorias</div>
                      <div className="toogle flex items-center">
                        <div className="flex items-center flex-col">
                        <span className="mx-1">Activar/Ver</span>
                        <button
                          onClick={async()=>await PostModuleaPath("users/categorias",getuse.iduser)}
                          className={
                            moduleUsers.filter(
                              (moduleUser) => moduleUser.pathrouter === "users/categorias"
                            ).length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.pathrouter === "users/categorias"
                              ).length > 0
                              ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                      {
                        moduleUsers.length > 0 && moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/categorias").length > 0 ?
                        <>
                      
                      <div className="toogle flex items-center">
                        <div className="flex-col flex">
                        <span className="mx-1">
                          Crear
                        </span>
                        <button
                        onClick={ async () =>{
                          let Module = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/categorias");
                          return await typePermissions({idmodule:Module[0].idmodule},{pathrouter:Module[0].pathrouter},"POST")
                        }}
                          className={
                            permissionsUser(permissions, moduleUsers,"POST","users/categorias").length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              permissionsUser(permissions, moduleUsers,"POST","users/categorias").length > 0
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
                        onClick={ async () =>{
                          let Module = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/categorias");
                          return await typePermissions({idmodule:Module[0].idmodule},{pathrouter:Module[0].pathrouter},"PUT")
                        }}
                          className={

                            permissionsUser(permissions, moduleUsers,"PUT","users/categorias").length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              permissionsUser(permissions, moduleUsers,"PUT","users/categorias").length > 0
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                     
                      <div className="toogle flex items-center">
                      <div className=" flex flex-col items-center">
                        <span className="mx-1">Eliminar</span>
                        <button
                        onClick={ async () =>{
                          let Module = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/categorias");
                          return await typePermissions({idmodule:Module[0].idmodule},{pathrouter:Module[0].pathrouter},"DELETE")
                        }}
                          className={
                            permissionsUser(permissions, moduleUsers,"DELETE","users/categorias").length> 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              permissionsUser(permissions, moduleUsers,"DELETE","users/categorias").length > 0 || permissions.active === true
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                     </>:null}
                    </div> 
                     <div className=" flex justify-evenly items-center mt-4">
                      <div className="title bg-gray-100 px-4 py-2 text-md border border-[#019afa10] font-bold rounded-md text-center w-32">Notificaciones</div>
                      <div className="toogle flex items-center">
                        <div className="flex items-center flex-col">
                        <span className="mx-1">Activar/Ver</span>
                        <button
                          onClick={async()=>await PostModuleaPath("users/notificaciones",getuse.iduser)}
                          className={
                            moduleUsers.filter(
                              (moduleUser) => moduleUser.pathrouter === "users/notificaciones"
                            ).length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.pathrouter === "users/notificaciones"
                              ).length > 0
                              ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                      {
                        moduleUsers.length > 0 && moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/notificaciones").length > 0 ?
                        <>
                      
                      <div className="toogle flex items-center">
                        <div className="flex-col flex">
                        <span className="mx-1">
                          Crear
                        </span>
                        <button
                        onClick={ async () =>{
                          let Module = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/notificaciones");
                          return await typePermissions({idmodule:Module[0].idmodule},{pathrouter:Module[0].pathrouter},"POST")
                        }}
                          className={
                            permissionsUser(permissions, moduleUsers,"POST","users/notificaciones").length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              permissionsUser(permissions, moduleUsers,"POST","users/notificaciones").length > 0
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
                        onClick={ async () =>{
                          let Module = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/notificaciones");
                          return await typePermissions({idmodule:Module[0].idmodule},{pathrouter:Module[0].pathrouter},"PUT")
                        }}
                          className={

                            permissionsUser(permissions, moduleUsers,"PUT","users/notificaciones").length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              permissionsUser(permissions, moduleUsers,"PUT","users/notificaciones").length > 0
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                     
                      <div className="toogle flex items-center">
                      <div className=" flex flex-col items-center">
                        <span className="mx-1">Eliminar</span>
                        <button
                        onClick={ async () =>{
                          let Module = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/notificaciones");
                          return await typePermissions({idmodule:Module[0].idmodule},{pathrouter:Module[0].pathrouter},"DELETE")
                        }}
                          className={
                            permissionsUser(permissions, moduleUsers,"DELETE","users/notificaciones").length> 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              permissionsUser(permissions, moduleUsers,"DELETE","users/notificaciones").length > 0 || permissions.active === true
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                     </>:null}
                    </div> 
                    <div className=" flex justify-evenly items-center mt-4">
                      <div className="title bg-gray-100 px-4 py-2 text-md border border-[#019afa10] font-bold rounded-md text-center w-32">Productos</div>
                      <div className="toogle flex items-center">
                        <div className="flex items-center flex-col">
                        <span className="mx-1">Activar/Ver</span>
                        <button
                          onClick={async()=>await PostModuleaPath("users/producto",getuse.iduser)}
                          className={
                            moduleUsers.filter(
                              (moduleUser) => moduleUser.pathrouter === "users/producto"
                            ).length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.pathrouter === "users/producto"
                              ).length > 0
                              ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                      {
                        moduleUsers.length > 0 && moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/producto").length > 0 ?
                        <>
                      
                      <div className="toogle flex items-center">
                        <div className="flex-col flex">
                        <span className="mx-1">
                          Crear
                        </span>
                        <button
                        onClick={ async () =>{
                          let Module = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/producto");
                          return await typePermissions({idmodule:Module[0].idmodule},{pathrouter:Module[0].pathrouter},"POST")
                        }}
                          className={
                            permissionsUser(permissions, moduleUsers,"POST","users/producto").length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              permissionsUser(permissions, moduleUsers,"POST","users/producto").length > 0
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
                        onClick={ async () =>{
                          let Module = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/producto");
                          return await typePermissions({idmodule:Module[0].idmodule},{pathrouter:Module[0].pathrouter},"PUT")
                        }}
                          className={

                            permissionsUser(permissions, moduleUsers,"PUT","users/producto").length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              permissionsUser(permissions, moduleUsers,"PUT","users/producto").length > 0
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                     
                      <div className="toogle flex items-center">
                      <div className=" flex flex-col items-center">
                        <span className="mx-1">Eliminar</span>
                        <button
                        onClick={ async () =>{
                          let Module = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/producto");
                          return await typePermissions({idmodule:Module[0].idmodule},{pathrouter:Module[0].pathrouter},"DELETE")
                        }}
                          className={
                            permissionsUser(permissions, moduleUsers,"DELETE","users/producto").length> 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              permissionsUser(permissions, moduleUsers,"DELETE","users/producto").length > 0 || permissions.active === true
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                     </>:null}
                    </div> 
                    <div className=" flex justify-evenly items-center mt-4">
                      <div className="title bg-gray-100 px-4 py-2 text-md border border-[#019afa10] font-bold rounded-md text-center w-32">Proveedor</div>
                      <div className="toogle flex items-center">
                        <div className="flex items-center flex-col">
                        <span className="mx-1">Activar/Ver</span>
                        <button
                          onClick={async()=>await PostModuleaPath("users/proveedor",getuse.iduser)}
                          className={
                            moduleUsers.filter(
                              (moduleUser) => moduleUser.pathrouter === "users/proveedor"
                            ).length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              moduleUsers.filter(
                                (moduleUser) => moduleUser.pathrouter === "users/proveedor"
                              ).length > 0
                              ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                      {
                        moduleUsers.length > 0 && moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/proveedor").length > 0 ?
                        <>
                      
                      <div className="toogle flex items-center">
                        <div className="flex-col flex">
                        <span className="mx-1">
                          Crear
                        </span>
                        <button
                        onClick={ async () =>{
                          let Module = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/proveedor");
                          return await typePermissions({idmodule:Module[0].idmodule},{pathrouter:Module[0].pathrouter},"POST")
                        }}
                          className={
                            permissionsUser(permissions, moduleUsers,"POST","users/proveedor").length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              permissionsUser(permissions, moduleUsers,"POST","users/proveedor").length > 0
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
                        onClick={ async () =>{
                          let Module = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/proveedor");
                          return await typePermissions({idmodule:Module[0].idmodule},{pathrouter:Module[0].pathrouter},"PUT")
                        }}
                          className={

                            permissionsUser(permissions, moduleUsers,"PUT","users/proveedor").length > 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              permissionsUser(permissions, moduleUsers,"PUT","users/proveedor").length > 0
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                     
                      <div className="toogle flex items-center">
                      <div className=" flex flex-col items-center">
                        <span className="mx-1">Eliminar</span>
                        <button
                        onClick={ async () =>{
                          let Module = moduleUsers.filter((moduleUser) => moduleUser.pathrouter === "users/proveedor");
                          return await typePermissions({idmodule:Module[0].idmodule},{pathrouter:Module[0].pathrouter},"DELETE")
                        }}
                          className={
                            permissionsUser(permissions, moduleUsers,"DELETE","users/proveedor").length> 0
                              ? "w-12 rounded-full  relative h-[1.48rem] bg-green-400"
                              : "  w-12 rounded-full relative  h-[1.48rem] bg-gray-400"
                          }
                        >
                          <span
                            className={
                              permissionsUser(permissions, moduleUsers,"DELETE","users/proveedor").length > 0 || permissions.active === true
                                ? "w-[1.30rem] h-[1.40rem] rigth-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                                : "w-[1.30rem] h-[1.40rem] left-[0.1em] rounded-full bg-white absolute top-[0.02em]"
                            }
                          ></span>
                        </button>
                        </div>
                      </div>
                     </>:null}
                    </div> 
                  </div>
                </div>
            
            </div>
          </>
        ))}
    </>
  );
};
