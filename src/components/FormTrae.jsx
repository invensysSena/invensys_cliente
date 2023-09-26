import { useState } from "react";
import { TodoFunctions } from "../apis/ApiData";
import { IconsSvgLoadingWhite } from "../svg/IconsSvgLoading";
import { useEffect } from "react";
import { TraeServices } from "../services/TraeServices";
import { ActionUser } from "../utils/Constant";
import { messageError } from "../utils/alertsAplication";
export const FormTrae = ({state, cambiarState}) => {
  // const [data.setData] = ({

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data1, setData1] = useState([]);


  const handleFormTrae = async (e) => {
    let action = {
      path: ActionUser.GETALL_COMPANY,
      method: ActionUser.METHOD_GET.PUT,
      date: ActionUser.DATE,
    }
    try {
      setLoading(true);
      e.preventDefault();
      let _id = data1 ? data1[0]._id : "";
      await TraeServices.postTrae(action,data);
      await TraeServices.updateCompany(action,data,{_id});
      setLoading(false);
      cambiarState(!state);
    } catch (error) {
      messageError("Error al actualizar los datos");
      setLoading(false);
    }
  };
  let action = {
    path: ActionUser.GETALL_COMPANY,
    method: ActionUser.METHOD_GET.GET,
    date: ActionUser.DATE,
  }
  useEffect(() => {
    (async () => {
      const response = await TraeServices.getTrae(action);
      setLoading(false);
      setData1(response.data.company);
    })();
  }, [state]);


  const HandleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="effect_blure dark:bg-[#37415197]
       dark:border-none rounded-md dark:text-white border w-full 
        lg:h-fit p-4 m-1">
        <form onSubmit={handleFormTrae}>
          <div className="grid gap-6 mb-6 grid-cols-2  md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium  "
              >
                Tipo de persona
              </label>
              <input
                type="text"
                id="first_name"
                name="tipoPersona"
                defaultValue={data1.length > 0 ? data1[0].tipoPersona : ""}
                className="bg-gray-50 outline-none border 
                 border-gray-300  text-sm rounded-lg dark:text-white
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#374151] 
               
               
                "
                placeholder="Ejm: Natural o Juridica"
                onChange={HandleInput}
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium  "
              >
                Nit
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 outline-none  border border-gray-300 text-gray-900 text-sm rounded-lg

             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-[#374151] dark:text-white"
                placeholder=" identificación tributaria"
                name="nit"
                onChange={HandleInput}
                defaultValue={data1.length > 0 ? data1[0].nit : ""}
              />
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Identificación(Tipo)
              </label>
              <input
                type="text"
                id="first_name"
                name="tipoIdentificacion"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
              focus:ring-blue-500 dark:bg-[#374151] dark:text-white focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder="Ejm: CC, CE, NIT, TI, PA, RC, NUIP, RU"
                onChange={HandleInput}
                defaultValue={
                  data1.length > 0 ? data1[0].tipoIdentificacion : ""
                }
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 outline-none "
              >
                Numero de identificación
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 dark:bg-[#374151] dark:text-white focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder="Ejm: 7564433"
                name="numero"
                onChange={HandleInput}
                defaultValue={data1.length > 0 ? data1[0].numero : ""}
              />
            </div>
            {/* xx */}
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nombre de la Empre/Neg
              </label>
              <input
                type="text"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 dark:bg-[#374151] dark:text-white focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder="..."
                name="nombre"
                onChange={HandleInput}
                defaultValue={data1.length > 0 ? data1[0].nombre : ""}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Numero Tel:
              </label>
              <input
                type="tel"
                id="phone"
                name="telefono"
                onChange={HandleInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
             focus:ring-blue-500 dark:bg-[#374151] dark:text-white focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder="123-45-678"
                defaultValue={data1.length > 0 ? data1[0].telefono : ""}
              />
            </div>
            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium  "
              >
                Pais
              </label>
              <input
                type="text"
                id="website"
                name="pais"
                onChange={HandleInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 dark:bg-[#374151] dark:text-white focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder="..."
                defaultValue={data1.length > 0 ? data1[0].pais : ""}
              />
            </div>
            <div>
              <label
                htmlFor="visitors"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Departamento
              </label>
              <input
                type="text"
                id="visitors"
                name="departamento"
                onChange={HandleInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 dark:bg-[#374151] dark:text-white focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder=""
                defaultValue={data1.length > 0 ? data1[0].departamento : ""}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Ciudad
              </label>
              <input
                type="text"
                id="email"
                onChange={HandleInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 dark:bg-[#374151] dark:text-white focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder="ciudad"
                name="ciudad"
                defaultValue={data1.length > 0 ? data1[0].ciudad : ""}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Dirección
            </label>
            <input
              type="text"
              id="email"
              onChange={HandleInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 dark:bg-[#374151] dark:text-white focus:border-blue-500 block w-full p-2.5 outline-none "
              placeholder=""
              name="direccion"
              defaultValue={data1.length > 0 ? data1[0].direccion : ""}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              onChange={HandleInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 dark:bg-[#374151] dark:text-white focus:border-blue-500 block w-full p-2.5 outline-none  "
              placeholder="invensys@company.com"
              name="correo"
              defaultValue={data1.length > 0 ? data1[0].correo : ""}
            />
          </div>

          {loading ? (
            <span
              type="submit"
              className="text-white bg-[#019afa] hover:bg-[#13a3fd] focus:outline-none focus:ring-blue-300
                font-medium rounded-lg text-sm cursor-no-drop w-full  px-5 py-2.5 text-center flex justify-center
                  ">
             <IconsSvgLoadingWhite w={24} h={24} />
            </span>
          ) : (
            <button
              type="submit"
              className="text-white bg-[#019afa] hover:bg-[#13a3fd] focus:outline-none focus:ring-blue-300
                  font-medium rounded-lg text-sm block w-full  px-5 py-2.5 text-center" >
              Actualizar
            </button>
          )}
        </form>
      </div>
    </>
  );
};
