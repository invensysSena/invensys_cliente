import { useState, useEffect, useMemo } from "react";
import { TodoFunctions } from "../apis/ApiData";
import image from "../assets/img/company.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export const ListTrae = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useMemo(() => {
    (async () => {
      setLoad(true);
      const response = await TodoFunctions.getTrae();
      setLoad(false);
      setData(response.data.company);
    })();
  }, []);
  const [darkMode, setDarkMode] = useState(false);
  useMemo(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);
  return (
    <>
      <div className=" ">
        <div
          className="relative flex flex-col dark:border-none dark:bg-[#37415197] items-center rounded-[20px] w-full lg:w-[700px]
             border   effect_blure bg-clip-border
             shadow-3xl shadow-shadow-500 dark:!bg-navy-800  p-3"
        >
          {load ? (
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g stroke={darkMode ? "white" : "#777777"}>
                  <circle
                    cx="12"
                    cy="12"
                    r="9.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth="3"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      calcMode="spline"
                      dur="1.5s"
                      keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                      keyTimes="0;0.475;0.95;1"
                      repeatCount="indefinite"
                      values="0 150;42 150;42 150;42 150"
                    />
                    <animate
                      attributeName="stroke-dashoffset"
                      calcMode="spline"
                      dur="1.5s"
                      keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                      keyTimes="0;0.475;0.95;1"
                      repeatCount="indefinite"
                      values="0;-16;-59;-59"
                    />
                  </circle>
                  <animateTransform
                    attributeName="transform"
                    dur="2s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 12 12;360 12 12"
                  />
                </g>
              </svg>
            </div>
          ) : (
            <>
              {data.length > 0 ? (
                <>
                  <div className="mt-2 mb-8 w-full">
                    <h4 className="px-2 text-xl dark:text-[#019afa] font-bold text-navy-700 ">
                      Información general de tu negocio
                    </h4>
                  </div>
                  <div className="grid overflow-y-auto h-[20rem] md:h-fit  grid-cols-1 md:grid-cols-2 gap-4 px-2 w-full">
                    <div
                      className="flex flex-col items-start justify-center rounded-2xl 
                    dark:bg-[#374151] dark:text-white
                     bg-white bg-clip-border px-3 p-1 md:py-4 shadow-3xl  shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                    >
                      <p className="text-sm text-gray-600 dark:text-white">
                        Nombre
                      </p>
                      <p className="text-base font-medium text-navy-700 ">
                        {data[0].nombre}
                      </p>
                    </div>

                    <div className="flex flex-col dark:bg-[#374151] dark:text-white justify-center rounded-2xl bg-white bg-clip-border px-3 p-1 md:py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p className="text-sm text-gray-600 dark:text-white">
                        Tipo de persona
                      </p>
                      <p className="text-base font-medium text-navy-700 ">
                        {data[0].tipoPersona}
                      </p>
                    </div>

                    <div className="flex flex-col dark:bg-[#374151] dark:text-white items-start justify-center rounded-2xl bg-white bg-clip-border px-3 p-1 md:py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p className="text-sm text-gray-600 dark:text-white">
                        Nit
                      </p>
                      <p className="text-base font-medium text-navy-700 ">
                        {data[0].nit}
                      </p>
                    </div>

                    <div className="flex flex-col dark:bg-[#374151] dark:text-white justify-center rounded-2xl bg-white bg-clip-border px-3 p-1 md:py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p className="text-sm text-gray-600dark:text-white dark:text-white">
                        Identificación
                      </p>
                      <p className="text-base font-medium text-navy-700 ">
                        {data[0].tipoIdentificacion}: {data[0].numero}
                      </p>
                    </div>

                    <div className="flex flex-col items-start dark:bg-[#374151] dark:text-white justify-center rounded-2xl bg-white bg-clip-border px-3 p-1 md:py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p className="text-sm text-gray-600 dark:text-white">
                        Correo
                      </p>
                      <p className="text-base font-medium text-navy-700 ">
                        {data[0].correo}
                      </p>
                    </div>

                    <div className="flex flex-col justify-center dark:bg-[#374151] dark:text-white rounded-2xl bg-white bg-clip-border px-3 p-1 md:py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p className="text-sm text-gray-600 dark:text-white">
                        Telefono
                      </p>
                      <p className="text-base font-medium text-navy-700 ">
                        {data[0].telefono}
                      </p>
                    </div>
                    <div className="flex flex-col dark:bg-[#374151] dark:text-white justify-center rounded-2xl bg-white bg-clip-border px-3 p-1 md:py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p className="text-sm text-gray-600 dark:text-white">
                        Pais
                      </p>
                      <p className="text-base font-medium text-navy-700 ">
                        {data[0].pais}
                      </p>
                    </div>
                    <div className="flex flex-col dark:bg-[#374151] dark:text-white justify-center rounded-2xl bg-white bg-clip-border px-3 p-1 md:py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p className="text-sm text-gray-600 dark:text-white">
                        Ciudad
                      </p>
                      <p className="text-base font-medium text-navy-700 ">
                        {data[0].ciudad}
                      </p>
                    </div>
                    <div className="flex flex-col dark:bg-[#374151] dark:text-white justify-center rounded-2xl bg-white bg-clip-border px-3 p-1 md:py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p className="text-sm text-gray-600 dark:text-white">
                        Departameto
                      </p>
                      <p className="text-base font-medium text-navy-700 ">
                        {data[0].departamento}
                      </p>
                    </div>
                    <div className="flex flex-col dark:bg-[#374151] dark:text-white justify-center rounded-2xl bg-white bg-clip-border px-3 p-1 md:py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p className="text-sm text-gray-600 dark:text-white">
                        Dirección
                      </p>
                      <p className="text-base font-medium text-navy-700 ">
                        {data[0].direccion}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h2>Registra tu Negocio/Empresa</h2>
                  <LazyLoadImage
                    effect="blur"
                    src={image}
                    alt=""
                    className="max-h-[61vh]"
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
