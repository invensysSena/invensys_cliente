import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./efectosCss.css";
import {
  faEnvelope,
  faLock,
  faCircleQuestion,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import x from "../assets/icons/x.svg";
import { useGetUsers } from "../hooks/context/GetUsersContext";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import "animate.css";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/styleSlider.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export const UserRegister = ({ estado = false }) => {
  const navigate = useNavigate();
  const [typeInput, setTypeInput] = useState(true);
  const [estados, setEstado] = useState(false);
  const [spiner, setSpiner] = useState(false);
  const { UserRegister } = useGetUsers();
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
    <div
      className={estados ? "  h-full absolute left-6  md:left-auto z-30 w-full md:w-4/5" : "hidden"}
    >
      <ToastContainer />

      <div className="form-signup w-4/5 sm:w-96 mx-auto sm:mx-auto mt-5 relative ">
        <div className="container-signup dark:border-none  border shadow-2xl pb-1 rounded-lg  effect_blur1 ">
          <button
            className="bg-[#fe5f57] rounded-full absolute right-1 top-1"
            onClick={handleShow}
          >
            <img effect="blur" src={x} alt="" />
          </button>
          <h2 className="text-xl font-semibold mt-2 mb-5 pt-5 text-center dark:text-white  ">
            Crear cuenta usuario
          </h2>

          <Formik
            initialValues={{ email: "", password: "", modulo: "", estado: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("El email no es valido")
                .required("El campo no puede estar vacio"),
              password: Yup.string()
                .required("El campo no puede estar vacio")
                .min(6, "Debe tener mas de 6 caracteres")
                .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[%$#@])[A-Za-z\d%$#@]{6,}$/,
                  "Debe incluir al menos una letra mayuscula, un numero y un caracter especial %$#@"
                ),
            })}
            onSubmit={async (values) => {
              
              try {
                let response = await UserRegister(values);
                console.log(response);
                await toast.success("Usuario creado con exito", {
                  position: "bottom-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                await setSpiner(false);
                setEstado(false);
                setTimeout(() => {
                  navigate("/usuarios");
                }, 2000);
              } catch (error) {
                await toast.warning(
                  "!Ups! Hubo un error inesperado o el correo ya existe",
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
              }}}
          >
            <Form>
              <div
                className="Fiel-email bg-white dark:bg-[#374151]   flex items-center mx-2 my-1
                           border-solid border-2 border-[#1876F2]  rounded
                             "
              >
                <div className=" icons py-2 px-2 text-gray-400">
                  <FontAwesomeIcon icon={faEnvelope} className="mx-1 text-xl" />
                </div>
                <div className="email w-full ">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Correo electronico"
                    className="w-full block dark:bg-[#374151] dark:text-white
                                       outline-none "
                  />
                </div>
              </div>
              <div className="error">
                <ErrorMessage
                  component="p"
                  className="mx-2 block text-red-600
                                animate__animated animate__fadeInUp "
                  name="email"
                />
              </div>

              <div
                className="Fiel-email bg-white dark:bg-[#374151]   flex items-center mx-2 mt-6
                           border-solid border-2 border-[#1876F2] rounded"
              >
                <div className="icons    py-2 px-2 text-gray-400">
                  <FontAwesomeIcon icon={faLock} className="mx-1 text-xl" />
                </div>

                <div className=" w-full">
                  <Field
                    type={typeInput === true ? "password" : "text"}
                    name="password"
                    placeholder="Contraseña"
                    className="w-full block
                                    outline-none dark:text-white  dark:bg-[#374151]"
                    autoComplete="on"
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
                >
                  {typeInput === true ? (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className="animate__animated animate__fadeInRight"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEye}
                      className="animate__animated animate__fadeInRight"
                    />
                  )}
                </div>
              </div>

              <div className="error">
                <ErrorMessage
                  component="p"
                  className="mx-2 block text-red-600
                                animate__animated animate__fadeInUp"
                  name="password"
                />
              </div>
              <div className="list_options flex justify-between  items-center">
                <section>
                  <label
                    htmlFor="modulo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mx-2 py-1"
                  >
                    Seleccionar modulo
                  </label>
                  <Field
                    as="select"
                    name="modulo"
                    className="w-4/5 mx-2  rounded cursor-pointer  py-2 outline-none border border-[#1876F2] "
                  >
                    <option value="select">Selecionar</option>
                    <option value="/bodega">Bodega</option>
                  </Field>
                </section>
                <section>
                  <label
                    htmlFor="estado"
                    className="block mb-2 text-sm font-medium dark:text-white text-gray-900 mx-2 py-1 items-center
                "
                  >
                    Estado
                  </label>
                  <Field
                    as="select"
                    name="estado"
                    className="w-4/5 mx-2  rounded cursor-pointer outline-none py-2 border border-[#05bdc4]"
                  >
                    <option value="Inactivo">Inactivo</option>
                    <option value="Activo">Activo</option>
                  </Field>
                </section>
              </div>
              <div className="flex justify-between m-3">
                <Link to="ayuda">
                  <p className="dark:text-white">
                    {" "}
                    <FontAwesomeIcon
                      icon={faCircleQuestion}
                      className="text-[#074766] text-xl dark:text-white"
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
                  Crear usuario
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
