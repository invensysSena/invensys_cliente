import  { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import x from "../assets/icons/x.svg";

import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import "animate.css";
import { Link } from "react-router-dom";
import "../assets/css/styleSlider.css";
import { useContextCategory } from "../hooks/context/ContextCategory";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export const RegisterCategorys = ({ estado = false }) => {
  const { postDataCategorias } = useContextCategory();

  const [typeInput, setTypeInput] = useState(true);
  const [estados, setEstado] = useState(false);
  const [spiner, setSpiner] = useState(false);
  const handleShow = () => {
    setEstado(false);
  };

  useEffect(() => {
    if (estado) {
      setEstado(true);
    } else {
      setEstado(false);
    }
  }, [estado]);

  return (
    <div className={estados ? "  h-full absolute z-30 w-4/5" : "hidden"}>
      <ToastContainer />

      <div className="form-signup w-4/5 sm:w-96 mx-auto sm:mx-auto mt-5 fixed inset-0 my-auto ">
        <div className="container-signup dark:bg-[#374151] dark:border-none dark:text-white  border shadow-2xl pb-1 rounded-lg bg-white ">
          <button
            className="bg-[#fe5f57] rounded-full absolute right-1 top-1"
            onClick={handleShow}
          >
            <LazyLoadImage effect="blur" src={x} alt="" />
          </button>
          <h2 className="text-xl font-semibold mt-2 mb-5 pt-5 text-center  ">
            Crear categoria
          </h2>

          <Formik
            initialValues={{ name_category: "", description: "" }}
            validationSchema={Yup.object({
              name_category: Yup.string().required(
                "El campo no puede estar vacio"
              ),
              description: Yup.string()
                .required("El campo no puede estar vacio")
                .min(2, "Debe tener mas de 2 caracteres"),
            })}
            onSubmit={async (values) => {
              let response = await postDataCategorias(values);

              if (response.status === 201) {
                await toast.success("Exito", {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                await setSpiner(false);
                setEstado(false);
                window.location.reload();
              } else {
                await toast.warning(
                  "!Ups! Hubo un error inesperado verifique que estes conectado a internet o que la categoria ya exista",
                  {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  }
                );
                await setSpiner(false);
              }
            }}
          >
            <Form>
              <div
                className="Fiel-email bg-white dark:bg-[#374151] dark:text-white  flex items-center mx-2 my-1
                           border-solid border-2 border-[#1876F2]  rounded
                         
                             "
              >
                <div className=" icons py-2 px-2 text-gray-400">
                  <FontAwesomeIcon icon={faEnvelope} className="mx-1 text-xl" />
                </div>
                <div className="email w-full ">
                  <Field
                    type="text"
                    name="name_category"
                    placeholder="Nombre de la categoria"
                    className="w-full block
                                       outline-none dark:bg-[#374151] dark:text-white "
                  />
                </div>
              </div>
              <div className="error">
                <ErrorMessage
                  component="p"
                  className="mx-2 block text-red-600
                                animate__animated animate__fadeInUp "
                  name="name_category"
                />
              </div>

              <div
                className="Fiel-email bg-white dark:bg-[#374151] dark:text-white flex items-center mx-2 mt-6
                           border-solid border-2 border-[#1876F2] rounded"
              >
                <div className="icons    py-2 px-2 text-gray-400">
                  <FontAwesomeIcon icon={faLock} className="mx-1 text-xl" />
                </div>

                <div className=" w-full">
                  <Field
                    type={"text"}
                    name="description"
                    placeholder="Descripción"
                    className="w-full block
                                    outline-none bg-white dark:bg-[#374151] dark:text-white"
                  />
                </div>

                <div
                  className="passEye 
                                 py-2 px-2 text-gray-400
                                 cursor-pointer
                                "
                  name="eye"
                  onClick={() => {
                    setTypeInput(!typeInput);
                  }}
                ></div>
              </div>

              <div className="error">
                <ErrorMessage
                  component="p"
                  className="mx-2 block text-red-600
                                animate__animated animate__fadeInUp"
                  name="description"
                />
              </div>
              <div className="flex justify-between m-3">
                <Link to="ayuda">
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCircleQuestion}
                      className="text-[#074766] text-xl"
                    />{" "}
                    Ayuda
                  </p>
                </Link>
              </div>

              <div
                className="bg-[#009AFA]  overflow-hidden relative justify-center text-center mx-auto flex w-3/5 px-6 py-5 text-white  text-sm  rounded-full shadow-md hover:bg-[#009AFA] hover:shadow-lg focus:shadow-lg
                        focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out  mb-3"
              >
                <div className={spiner ? "lds-ring" : "hidden"}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                <button
                  onClick={() => setSpiner(true)}
                  type="submit"
                  className=" bg-[#009AFA] w-full z-10 absolute h-full top-0"
                >
                  Crear categoria
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
