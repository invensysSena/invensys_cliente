import  { useState } from "react";
import "../../index.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "../../assets/css/fuente.css";
import * as Yup from "yup";
import "animate.css";
import "../../assets/css/spiner.css";
import { useInventario } from "../../hooks/context/ContextInventario";
import { messageError, messageSuccess } from "../../utils/alertsAplication";
import { loadingColor } from "../../svg/IconsSvg";
export const FormInventory = () => {
  const { PostInventario } = useInventario();

  const [load, loading] = useState(false);

  return (
    <>
      <div
        className="form_Login   w-[90%]  rounded-md border 
          dark:border-none flex   animate__animated animate__fadeIn 
        form md:w-full   mt-9 mb-2 drop-shadow-md "
      >
        <div className="login effect_bluresT z-20 dark:bg-[#37415197] relative rounded-md w-full ">
          <h3 className="mx-4 text-xl text-gray-500 mt-1 dark:text-white ">
            Crear bodega
          </h3>
          <div className="">
            <div className="">
              <Formik
                initialValues={{
                  name_inventory: "",
                  description: "",
                }}
                validationSchema={Yup.object({
                  name_inventory: Yup.string().required("Requerido"),
                  description: Yup.string().required("Requerido"),
                })}
                onSubmit={async (values) => {
                  loading(true);
                  (async () => {
                    const data = await PostInventario(values);
                    loading(false);
                    if (data.status === 200) {
                      messageSuccess("Bodega creada con exito");
                    } else {
                      messageError("Error al crear la bodega");
                    }
                  })();
                }}
              >
                <Form className="flex p-2 flex-col md:flex-row w-full  ">
                  <div className="flex flex-col w-full ">
                    <div
                      className="Fiel-email border bg-white dark:bg-[#374151] flex items-center mx-2 my-1
                           border-solid  border-1 border-slate-300 rounded transition-200
                             "
                    >
                      <div className="email w-full">
                        <Field
                          type="text"
                          name="name_inventory"
                          placeholder="Nombre del la bodega"
                          className="w-full block dark:bg-[#374151] dark:text-white
                                         outline-none p-2"
                        />
                      </div>
                    </div>
                    <div className="error">
                      <ErrorMessage
                        component="p"
                        className="mx-2 block text-red-600
                                animate__animated animate__fadeInUp "
                        name="name_inventory"
                        // validate={validateEmail}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <div
                      className="Fiel-email border bg-white flex items-center mx-2 my-1
                           border-solid  border-1 border-slate-300 rounded transition-200
                             "
                    >
                      <div className="email w-full ">
                        <Field
                          type="text"
                          name="description"
                          placeholder="Ubicación de la bodega"
                          className="w-full block
                                         outline-none p-2 dark:bg-[#374151] dark:text-white "
                        />
                      </div>
                    </div>
                    <div className="error">
                      <ErrorMessage
                        component="p"
                        className="mx-2 block text-red-600
                                animate__animated animate__fadeInUp "
                        name="description"
                        // validate={validateEmail}
                      />
                    </div>
                  </div>
                  <div className="button w-full relative">
                    {load === false ? (
                      <button
                        type="submit"
                        className="bg-[#019afa] text-white rounded-full relative
                                p-1  w-5/6 mx-auto my-2 hover:opacity-[0.85] transition
                                h-9 flex justify-center"
                      >
                        <span className="text-base font-medium">
                          Crear Bodega
                        </span>
                      </button>
                    ) : (
                      <span
                        type="button"
                        className="bg-[#019afa] text-white rounded-full relative
                                p-1  w-full items-center mx-auto my-2 hover:opacity-[0.85] transition
                                h-9 flex justify-center truncate"
                      >
                        {loadingColor(25,25)}
                        <div className="spa mx-1"> Espere un momento...</div>
                      </span>
                    )}
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
