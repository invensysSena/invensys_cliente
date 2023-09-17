import { useState } from "react";
import { TodoFunctions } from "../apis/ApiData";
import image from "../assets/img/company.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IconsSvgLoading } from "../svg/IconsSvgLoading";
import { NavlinkCustomenTrae } from "../components/navLinkCustomen/NavlinkCustomenTrae";
import { useEffect } from "react";
export const ListTrae = (state) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    (async () => {
      setLoad(true);
      const response = await TodoFunctions.getTrae();
      setLoad(false);
      setData(response.data.company);
    })();
  }, [state]);

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
             <IconsSvgLoading w={20} h={20} />
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
                 
                    <NavlinkCustomenTrae name="Nombre">
                    {data[0].nombre}
                    </NavlinkCustomenTrae>

                    <NavlinkCustomenTrae name="Tipo de persona">
                    {data[0].tipoPersona}
                    </NavlinkCustomenTrae>

                    <NavlinkCustomenTrae name="Nit">
                    {data[0].nit}
                    </NavlinkCustomenTrae>

                    <NavlinkCustomenTrae name="Identificación">
                    {data[0].tipoIdentificacion}: {data[0].numero}
                    </NavlinkCustomenTrae>

                    <NavlinkCustomenTrae name="Correo">
                    {data[0].correo}
                    </NavlinkCustomenTrae>

                    <NavlinkCustomenTrae name="Telefono">
                    {data[0].telefono}
                    </NavlinkCustomenTrae>

                    <NavlinkCustomenTrae name="Pais">
                    {data[0].pais}
                    </NavlinkCustomenTrae>

                    <NavlinkCustomenTrae name="Ciudad">
                    {data[0].ciudad}
                    </NavlinkCustomenTrae>

                    <NavlinkCustomenTrae name="Departamento">
                    {data[0].departamento}
                    </NavlinkCustomenTrae>

                    <NavlinkCustomenTrae name="Dirección">
                    {data[0].direccion}
                    </NavlinkCustomenTrae>



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
