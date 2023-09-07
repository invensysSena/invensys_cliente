import { useMemo, useState } from "react";
import { getDataAll } from "../apis/ApiData";
import moment from "moment-with-locales-es6";
moment.locale("es");
export const SubMenu = () => {
  const [data, setData] = useState([]);
  useMemo(() => {
    (async ()=>{
        const res = await getDataAll();
        console.log("dubtrae", res.data.data);
        setData(res.data.data);
    })();
  }, []);

  const handleCloseSesion = () => {
    sessionStorage.removeItem("secure_token");
    sessionStorage.removeItem("perfil_rol");
    sessionStorage.removeItem("auth_cuenta");
    sessionStorage.removeItem("response_auth");
    sessionStorage.removeItem("type");
    sessionStorage.removeItem("module");
    sessionStorage.removeItem("token_token1");
    sessionStorage.removeItem("fecha");
    sessionStorage.removeItem("correo");
    window.location.href = "/login";
  };

  const type = sessionStorage.getItem("type");
  return (
    <div className="">
      <div className="data_f flex justify-between">
        <div className="d">search</div>
        <div className="g flex items-center">
          <div className="form-search">
            <div className="inputsearch bg-white dark:bg-transparent flex border items-center p-1 rounded-full">
              <div className="icon mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                >
                  <path
                    fill="#777777"
                    d="M10 .188A9.812 9.812 0 0 0 .187 10A9.812 9.812 0 0 0 10 19.813c2.29 0 4.393-.811 6.063-2.125l.875.875a1.845 1.845 0 0 0 .343 2.156l4.594 4.625c.713.714 1.88.714 2.594 0l.875-.875a1.84 1.84 0 0 0 0-2.594l-4.625-4.594a1.824 1.824 0 0 0-2.157-.312l-.875-.875A9.812 9.812 0 0 0 10 .188zM10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16zM4.937 7.469a5.446 5.446 0 0 0-.812 2.875a5.46 5.46 0 0 0 5.469 5.469a5.516 5.516 0 0 0 3.156-1a7.166 7.166 0 0 1-.75.03a7.045 7.045 0 0 1-7.063-7.062c0-.104-.005-.208 0-.312z"
                  />
                </svg>
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Buscar"
                  className=" 
                  dark:text-white
                  
                  bg-transparent
                  outline-none
                  "
                />
              </div>
            </div>
          </div>
          <div className="counta bg-[#eaf8ff] mx-2 rounded-full px-1">
            <h3 className="text-[#42a3d6]">Cuenta activa </h3>
          </div>

          <div className="name">
            <h1 className="text-xl font-bold text-gray-700 font-sans mx-0 dark:text-white">
              {type === "user" ? (
                "Usuario"
              ) : (
                <>{data.length > 0 ? data[0].name : "..."}</>
              )}
            </h1>
          </div>
          <div className="fecha mx-4 dark:text-white">
            {moment().format("D MMMM YYYY, h:mm a")}
          </div>
          <picture>
            {type === "user" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
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
                src={data.length > 0 ? data[0].imgURL : ""}
                alt=""
                width={30}
                className="mx-4 rounded-full"
              />
            )}
          </picture>
          <div
            className="d bg-gray-100 mx-1 rounded-full cursor-pointer p-1"
            onClick={handleCloseSesion}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#42a3d6"
                d="M12 21q-1.875 0-3.513-.713t-2.85-1.924q-1.212-1.213-1.924-2.85T3 12q0-1.875.713-3.513t1.924-2.85q1.213-1.212 2.85-1.924T12 3v2Q9.075 5 7.037 7.038T5 12q0 2.925 2.038 4.963T12 19v2Zm4-4l-1.4-1.425L17.175 13H9v-2h8.175L14.6 8.4L16 7l5 5l-5 5Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
