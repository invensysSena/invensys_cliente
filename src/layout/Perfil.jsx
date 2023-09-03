import { useState, useMemo } from "react";
import { MenuLateral } from "../components/MenuLateral";
import "../assets/css/styleSlider.css";
import { CambioFotoPerfilAdmin } from "../components/CambioFotoPerfilAdmin";
import { useGetUsers } from "../hooks/context/GetUsersContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import "../components/efectosCss.css";
import { getDataAll, UpdateAdminAll } from "../apis/ApiData";
import { SubMenu } from "../components/SubMenu";
import moment from "moment-with-locales-es6";
const Perfil = () => {
  const { adminGetData } = useGetUsers();
  const [btnSpand, setbtnSpand] = useState(false);
  const [modelImg, setModelImg] = useState(false);
  const [loading, setLoading] = useState(true);

  const [load, setLoad] = useState(true);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  useMemo(() => {
    const initial = async () => {
      await getDataAll();

      setLoading(false);
    };
    initial();
  }, []);

  const handleBtnSpand = () => {
    setbtnSpand(true);
  };

  const handleImg = () => {
    setModelImg(!modelImg);
  };

  if (modelImg === true) {
    setTimeout(() => {
      setModelImg(false);
    }, 22000);
  }

  const handleData = async (e) => {
    e.preventDefault();

    setLoad(false);

    let data = {
      name: e.target.name.value,
      empresa: e.target.empresa.value,
      email: e.target.email.value,
      telefono: e.target.telefono.value,
      document: e.target.document.value,
      id: localStorage.getItem("id_admin"),
    };
    await UpdateAdminAll(data);
    setLoad(true);

    navigate("/perfil");
    window.location.reload();
  };
  return (
    <div
      className="bg-gradient-to-r from-[#e6dff4] from-10% via-[#edf4fd] via-30% to-[#d0e0fb] to-90%  w-full block  min-h-screen
      dark:bg-gradient-to-r dark:from-[#163b59] dark:from-10%
         dark:via-[#18324f] dark:via-30% dark:to-[#121b2e] dark:to-90%">
      <div className="sticky z-50   hidden lg:block  top-0 py-3 bg-white h-fit w-full">
        <SubMenu />
      </div>
      {modelImg === true ? (
        <CambioFotoPerfilAdmin handleImg={handleImg} />
      ) : null}
      <div className="flex overflow-y-hidden ">
        <MenuLateral />
        <div
          className="  w-full block  min-h-screen">
          <div
            className="container_perfil z-30    mx-1 max-w-7xl
           md:mx-auto relative flex flex-col md:flex-row">
            <div className={btnSpand ? "cubo_p block" : "hidden"}></div>
            <div>
              <div
                className={
                  btnSpand
                    ? ` effect_blur
    panel_Editar_P rounded-lg h-[36rem] z-30 absolute shadow-xl  mx-auto lg:right-[33rem] shadow-gray-400
    bg-white w-[80%] md:w-[22rem]  top-6 overflow-hidden block duration-300 ease-out opacity-100
    `
                    : `panel_Editar_P rounded-lg h-[36rem] absolute shadow-xl right-[33rem] z-30 shadow-gray-400
    bg-white w-[22rem] top-6 overflow-hidden hidden opacity-0 effect_blur`
                }
              >
                <div
                  className="editar bg-[#44b2fd] dark:bg-[#374151] text-white  p-4 flex flex-col"
                >
                  <div className="xc flex justify-between relative">
                    <span>Editar Perfil</span>

                    <span
                      onClick={() => setbtnSpand(!btnSpand)}
                      className="cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path
                          fill="#c1c7ce"
                          d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4l-1.6 1.6z"
                        />
                      </svg>
                    </span>
                  </div>
                  <span className="dark:text-white">
                    Manten tus datos actualizados
                  </span>
                </div>
                <div className="inputsDatos">
                  {adminGetData.map((item) => (
                    <form
                      className="flex flex-col dark:text-white dark:bg-[#374151] "
                      onSubmit={handleData}
                      key={item.idadmin}
                    >
                      <h2
                        className="text-gray-600
                       dark:text-white text-xl my-2 text-center font-sans font-medium"
                      >
                        Datos personales
                      </h2>
                      <div className="input flex flex-col mx-2 my-1">
                        <label htmlFor="nombre" className="py-1">
                          Nombre:
                        </label>
                        <div className="inpusts flex border ">
                          <div className="input1 flex items-center">
                            <div className="icon w-10 mx-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 48 48"
                              >
                                <mask id="ipSEditName0">
                                  <g
                                    fill="none"
                                    stroke="#fff"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                  >
                                    <circle cx="24" cy="11" r="7" fill="#fff" />
                                    <path d="M4 41c0-8.837 8.059-16 18-16" />
                                    <path
                                      fill="#fff"
                                      d="m31 42l10-10l-4-4l-10 10v4h4Z"
                                    />
                                  </g>
                                </mask>
                                <path
                                  fill="#ccc"
                                  d="M0 0h48v48H0z"
                                  mask="url(#ipSEditName0)"
                                />
                              </svg>
                            </div>
                            <div className="inp w-full">
                              <input
                                type="text"
                                name="name"
                                id="apellido"
                                defaultValue={item.nameadmin}
                                className=" py-1 rounded-sm focus:border-1 outline-none bg-transparent
            w-[150%]
             "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input flex flex-col mx-2 my-1">
                        <label htmlFor="apellido" className="py-1">
                          Nombre Empresa o local:
                        </label>
                        <div className="inpusts flex border">
                          <div className="input1 flex items-center">
                            <div className="icon w-10 mx-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#ccc"
                                  d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7H12Z"
                                />
                              </svg>
                            </div>
                            <div className="inp w-full">
                              <input
                                type="text"
                                name="empresa"
                                id="apellido"
                                defaultValue={item.nombrenegocio}
                                className=" py-1 rounded-sm focus:border-1 outline-none bg-transparent
                                
            w-[150%]
             "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input flex flex-col mx-2 my-1">
                        <label htmlFor="apellido" className="py-1">
                          Documento:
                        </label>
                        <div className="inpusts flex border">
                          <div className="input1 flex items-center">
                            <div className="icon w-10 mx-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="#ccc"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                >
                                  <path d="M19 20H5c-1.6 0-2-1.333-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6m2 8c-.667 0-2-.4-2-2v-6m2 8c1.6 0 2-1.333 2-2v-6h-4" />
                                  <path d="M7 16h6m-1-6a2 2 0 1 1-4 0a2 2 0 0 1 4 0z" />
                                </g>
                              </svg>
                            </div>
                            <div className="inp w-full">
                              <input
                                type="text"
                                name="document"
                                defaultValue={item.document}
                                id="apellido"
                                className=" py-1 rounded-sm focus:border-1 outline-none bg-transparent
            w-[150%]
             "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input flex flex-col mx-2 my-1">
                        <label htmlFor="telefono" className="py-1">
                          Telefono:
                        </label>
                        <div className="inpusts flex border">
                          <div className="input1 flex items-center">
                            <div className="icon w-10 mx-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#ccc"
                                  d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
                                />
                              </svg>
                            </div>
                            <div className="inp w-full">
                              <input
                                type="text"
                                name="telefono"
                                id="apellido"
                                defaultValue={item.telefono}
                                className=" py-1 rounded-sm focus:border-1 outline-none bg-transparent
            w-[150%]
             "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input flex flex-col mx-2 my-1">
                        <label htmlFor="apellido" className="py-1">
                          Correo:
                        </label>
                        <div className="inpusts flex border relative">
                          <div
                            className="absolute w-full h-full 
                          cursor-not-allowed
                          bg-gray100/30 top-0"
                          ></div>
                          <div className="input1 flex items-center dark:bg-[#272a3d">
                            <div className="icon w-10 mx-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#ccc"
                                  d="M12 18.2c0-.96.5-1.86 1.2-2.46v-.24c0-2.44 2.2-4.5 4.8-4.5c1.65 0 3.13.83 4 2.06V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h8v-1.8M4 6l8 5l8-5v2l-8 5l-8-5V6m16.8 11v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3V17Z"
                                />
                              </svg>
                            </div>
                            <div className="inp w-full">
                              <input
                                type="text"
                                name="email"
                                id="apellido"
                                defaultValue={item.email}
                                className=" py-1 rounded-sm truncate focus:border-1 outline-none bg-transparent
            w-[150%]
             "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input mx-2">
                        {load === false ? (
                          <button
                            type="button"
                            className="bg-[#44b2fd] text-white w-full rounded-sm mt-3 
              duration-300 hover:bg-[#019afa] hover:shadow-lg justify-center p-2
                          disabled flex items-center"
                          >
                            <svg
                              className="animate-spin mr-1 flex justify-center"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <defs>
                                <linearGradient
                                  id="mingcuteLoadingFill0"
                                  x1="50%"
                                  x2="50%"
                                  y1="5.271%"
                                  y2="91.793%"
                                >
                                  <stop offset="0%" stopColor="currentColor" />
                                  <stop
                                    offset="100%"
                                    stopColor="currentColor"
                                    stopOpacity=".55"
                                  />
                                </linearGradient>
                                <linearGradient
                                  id="mingcuteLoadingFill1"
                                  x1="50%"
                                  x2="50%"
                                  y1="15.24%"
                                  y2="87.15%"
                                >
                                  <stop
                                    offset="0%"
                                    stopColor="currentColor"
                                    stopOpacity="0"
                                  />
                                  <stop
                                    offset="100%"
                                    stopColor="currentColor"
                                    stopOpacity=".55"
                                  />
                                </linearGradient>
                              </defs>
                              <g fill="none">
                                <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                                <path
                                  fill="url(#mingcuteLoadingFill0)"
                                  d="M8.749.021a1.5 1.5 0 0 1 .497 2.958A7.502 7.502 0 0 0 3 10.375a7.5 7.5 0 0 0 7.5 7.5v3c-5.799 0-10.5-4.7-10.5-10.5C0 5.23 3.726.865 8.749.021Z"
                                  transform="translate(1.5 1.625)"
                                />
                                <path
                                  fill="url(#mingcuteLoadingFill1)"
                                  d="M15.392 2.673a1.5 1.5 0 0 1 2.119-.115A10.475 10.475 0 0 1 21 10.375c0 5.8-4.701 10.5-10.5 10.5v-3a7.5 7.5 0 0 0 5.007-13.084a1.5 1.5 0 0 1-.115-2.118Z"
                                  transform="translate(1.5 1.625)"
                                />
                              </g>
                            </svg>
                            Espere un momento...
                          </button>
                        ) : (
                          <button
                            className="bg-[#019afa] text-white block w-full rounded-sm mt-3 p-2
              duration-300 hover:bg-[#019afa] hover:shadow-lg "
                          >
                            <div className="span">Actualizar Datos</div>
                          </button>
                        )}
                      </div>
                    </form>
                  ))}
                </div>
              </div>
            </div>
            {loading === true ? (
              <div className="c_perfil z-10 bg-white dark:bg-[#374151] w-96 rounded-lg relative  mr-5  mt-6 overflow-hidden">
                <div
                  style={{
                    display: "block",

                    width: "100%",
                    height: "8rem",
                  }}
                >
                  <Skeleton height={"100%"} width={"100%"} />
                </div>

                <div className="text-center mb-4 mt-[-3rem] ">
                  <Skeleton height={100} width={100} circle={true} />
                </div>
                <div className="mx-4 my-4  ">
                  <Skeleton
                    count={1}
                    width={"50%"}
                    className="rounded-full bg-gray-200 overflow-hidden"
                  />
                </div>

                <div className="mx-4  ">
                  <Skeleton
                    count={6}
                    width={"70%"}
                    className="rounded-full bg-gray-200 overflow-hidden"
                  />
                </div>
                <div className="mx-4 my-4  ">
                  <Skeleton
                    count={1}
                    width={"50%"}
                    className="rounded-full bg-gray-200 overflow-hidden"
                  />
                </div>
                <div className="flex ml-3 gap-1">
                  <div className="text-center mb-4  ">
                    <Skeleton height={50} width={50} circle={true} />
                  </div>
                  <div className="text-center mb-4  ">
                    <Skeleton height={50} width={50} circle={true} />
                  </div>
                  <div className="text-center mb-4  ">
                    <Skeleton height={50} width={50} circle={true} />
                  </div>
                  <div className="text-center mb-4  ">
                    <Skeleton height={50} width={50} circle={true} />
                  </div>
                </div>
                <div className="mx-4  ">
                  <Skeleton
                    count={3}
                    width={"70%"}
                    className="rounded-full  overflow-hidden"
                  />
                </div>
              </div>
            ) : (
              <div className="c_perfil z-20  effect_blures dark:bg-[#37415197] w-[84%] sm:w-[90%] md:w-96 rounded-lg relative ml-2   mt-6 ">
                <div className="edidarPerfilAdmin absolute z-40 w-full">
                  <button
                    onClick={handleBtnSpand}
                    className="absolute z-10 top-0 right-1 mx-1 mt-1 cursor-pointer inline-block
       bg-[#283943]
       text-white rounded-md p-1"
                  >
                    Editar perfil
                  </button>
                </div>

                <div className="container_perfil__img  relative  bg-blue-100 rounded-4">
                  <div className="fond ">
                    <img
                      className="h-[8rem] w-full object-cover"
                      src="https://img.freepik.com/vector-gratis/burbujas-agua-blanda-brillante-sobre-fondo-azul_1017-31491.jpg?w=826&t=st=1678282592~exp=1678283192~hmac=53ea8ee6aa49fae595fc6b9b61a027c8184ab2a6063515af296d60e61dcfe85f"
                      alt=""
                    />
                  </div>
                  <div className="avater">
                    <picture className="skew-y-12 rounded-full ">
                      {adminGetData.map((item) => (
                        <div  key={item.idadmin}>
                          {item.imgurl ? (
                            <a href={item.imgurl} className="">
                              <img
                                key={item.id}
                                className="z-30 bg-clound t-8 block 
                              absolute rounded-full top-[5rem] inset-0 mx-auto "
                                width={110}
                                src={item.imgurl}
                                alt="imagen de perfil"
                              />
                            </a>
                          ) : (
                            <div className="z-30 t-8 block absolute rounded-full top-[5rem] left-[8.30rem]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="110"
                                height="110"
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
                            </div>
                          )}
                        </div>
                      ))}
                    </picture>
                    <button
                      onClick={handleImg}
                      className="absolute top-[10rem] z-40 inset-0 mx-auto
                      pl-7
                        w-6 cursor-pointer"
                    >
                      <div className="relative cursor-pointer">
                        <input
                          type="file"
                          hidden
                          className="absolute w-full bg-blue-600 z-20 opacity-0 cursor-pointer"
                        />
                        <div className="icon absolute bg-slate-400 rounded-full p-[1px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#fff"
                              d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                {adminGetData.map((item) => (
                  <div className="content_contenido_p"  key={item.idadmin}>
                    <div className=" dark:bg-[#37415197] dark:text-white mx-2">
                      <ul className="list-none_k">
                        <li className="flex  flex-col py-2 px-4 ">
                          <h2 className="mt-16 lg:mt-14 text-xl dark:text-white pb-3 lg:text-2xl font-sans mx-0 font-bold text-gray-700">
                            Datos personales
                          </h2>
                          <hr className="mb-4" />
                          <span className="text-lg flex items-center font-sans mx-0">
                            {loading === true ? (
                              <span
                                style={{
                                  width: "70%",
                                  borderRadius: "100px",
                                  overflow: "hidden",
                                }}
                              >
                                {}
                                {<Skeleton />}
                              </span>
                            ) : (
                              <span className="flex">
                                {loading === false ? (
                                  <div className="mr-1">Nombre completo: </div>
                                ) : null}

                                {item.nameadmin ? item.nameadmin : "..."}
                              </span>
                            )}
                          </span>

                          <span className="text-lg flex items-center  font-sans mx-0">
                            {loading === true ? (
                              <span
                                style={{
                                  width: "70%",
                                  borderRadius: "100px",
                                  overflow: "hidden",
                                }}
                              >
                                {}
                                {<Skeleton />}
                              </span>
                            ) : (
                              <span className="flex">
                                {loading === false ? (
                                  <div className="mr-1">Documento: </div>
                                ) : null}

                                {item.document ? item.document : "..."}
                              </span>
                            )}
                          </span>
                          <span className="text-lg  font-sans mx-0 flex items-center">
                            Cuenta:
                            {item.authcuenta == "true" ? (
                              <>
                                <img
                                  className="w-5 ml-2 block"
                                  src="https://img.icons8.com/ios/50/40C057/ok--v1.png"
                                  alt=""
                                />
                                <span className="text-green-400 mx-0.5">
                                  {" "}
                                   verificado
                                </span>
                              </>
                            ) : (
                              "Hubo un error en la cuenta"
                            )}
                          </span>
                          <span className="text-lg  font-sans mx-0">
                            Estado:
                            {item.estado === "activo" ? (
                              <span className="text-green-400 mx-1">
                                {item.estado}
                              </span>
                            ) : (
                              <span className="text-red-400 mx-1">
                                {item.estado}
                              </span>
                            )}
                          </span>
                          <span className="text-lg  font-sans mx-0 flex">
                            Correo:{" "}
                            <span
                              style={{
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                              }}
                              className="ml-2"
                            >
                              {item.email ? item.email : "..."}
                            </span> 
                          </span>
                          <span className="text-lg  font-sans mx-0">
                            Rol:{" "}
                            <span>
                              {item.rol
                                ? item.rol === "administrador"
                                  ? "Administrador"
                                  : ""
                                : "..."}
                            </span>
                          </span>
                          <span className="text-lg  font-sans mx-0">
                            <span className="mr-1">Telefono: </span>

                            {item.telefono ? item.telefono : "..."}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
               
              </div>
            )}
            {loading === true ? (
              <div className="w-full md:w-9/12 mt-6 mx-2 h-full bg-white">
                <div
                  style={{
                    display: "block",

                    width: "100%",
                    height: "8rem",
                  }}
                >
                  <Skeleton height={"100%"} width={"100%"} />
                </div>

                <div className="mx-4 my-4  ">
                  <Skeleton
                    count={1}
                    width={"50%"}
                    className="rounded-full . overflow-hidden"
                  />
                </div>

                <div className="mx-4  ">
                  <Skeleton
                    count={6}
                    width={"70%"}
                    className="rounded-full . overflow-hidden"
                  />
                </div>
                <div className="mx-4 my-4  ">
                  <Skeleton
                    count={1}
                    width={"50%"}
                    className="rounded-full . overflow-hidden"
                  />
                </div>
                <div className="flex ml-3 gap-1">
                  <div className="text-center mb-4  ">
                    <Skeleton height={10} width={100} />
                  </div>
                  <div className="text-center mb-4  ">
                    <Skeleton height={10} width={100} />
                  </div>
                  <div className="text-center mb-4  ">
                    <Skeleton height={10} width={100} />
                  </div>
                  <div className="text-center mb-4  ">
                    <Skeleton height={10} width={100} />
                  </div>
                </div>
                <div className="mx-4  ">
                  <Skeleton
                    count={3}
                    width={"70%"}
                    className="rounded-full . overflow-hidden"
                  />
                </div>
                <div className="mx-4  ">
                  <Skeleton
                    count={3}
                    width={"50%"}
                    className="rounded-full . overflow-hidden"
                  />
                </div>
              </div>
            ) : (
              <div className="w-[84%]  mx-2 md:w-9/12 mt-6 lg:mx-2 lg:h-64">
                {adminGetData.map((items) => (
                  <div
                    className="effect_blure z-10  relative dark:bg-[#37415197] dark:text-white p-3 shadow-sm rounded-sm"
                    key={items.idadmin}
                  >
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                      <span className="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide dark:text-white">
                        Información adicional
                      </span>
                    </div>
                    <div className="text-gray-700 dark:text-white">
                      <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2 lg:grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Nombre</div>
                          <div className="px-4 py-2">
                            {items.nameadmin ? items.nameadmin : "..."}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Cuenta con:{" "}
                          </div>
                          <div className="px-4 py-2">
                            {items.cuenta === "Google" ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 256 262"
                              >
                                <path
                                  fill="#4285F4"
                                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                />
                                <path
                                  fill="#34A853"
                                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                />
                                <path
                                  fill="#FBBC05"
                                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                />
                                <path
                                  fill="#EB4335"
                                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                />
                              </svg>
                            ) : (
                              items.cuenta
                            )}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-2">
                          <div className="px-4 py-2 font-semibold">CC</div>
                          <div className="px-4 py-2">
                            {items.document ? items.document : "..."}
                          </div>
                        </div>
                        <div className="grid grid-cols-2  lg:grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Pais:</div>
                          <div className="px-4 py-2">
                            {items.pais ? items.pais : "..."}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Nombre Empresa
                          </div>
                          <div className="px-4 py-2">
                            {items.nombrenegocio ? items.nombrenegocio : "..."}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Ubicacion Tienda
                          </div>
                          <div className="px-4 py-2">
                            {items.ciudad ? items.ciudad : "..."}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Ciudad:{" "}
                          </div>
                          <div className="px-4 py-2">
                            <span
                              className="text-blue-800"
                              href="daniel@gmail.com"
                            >
                              {items.ciudad ? items.ciudad : "..."}
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-2">
                          <div className="px-4 py-2 font-semibold flex">
                            Creación
                          </div>
                          <div className="flex">
                            <div className="px-4 py-2">
                              {items.fechacreacion
                                ? moment(items.fechacreacion).startOf('hour').fromNow()
                                : "..."}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="contain-contraseña w-full dark:text-white dark:bg-[#37415197] effect_blures my-3  p-3 rounded">
                  <h2 className="text-base mx-6  font-semibold">
                    Cambiar mi contraseña
                  </h2>
                  <p className="text-sm mx-6">
                    Aqui puedes cambiar la contraseña general de tu cuenta,
                    asegurate de que sea segura
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
