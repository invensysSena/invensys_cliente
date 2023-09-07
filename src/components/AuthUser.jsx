import { useState, useRef } from "react";
import "../index.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthLogin } from "../utils/AuthCount";
import {
  faEnvelope,
  faKey,
  faCircleQuestion,
  faEye,
  faEyeSlash,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/fuente.css";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import "animate.css";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "../assets/css/spiner.css";
import { Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import moment from "moment-with-locales-es6";
import { PostDataUser} from "../apis/ApiData";
import ReCAPTCHA from "react-google-recaptcha";
import { AuthGoogleA } from "../auth/AuthGoogleA";
import { IconsSvgLoading } from "../svg/IconsSvgLoading";
moment.locale("es");
const AuthUser = () => {
  const [LoadingProgress, setLoadingProgress] = useState(0);
  const recaptchaRef = useRef(null);
  function onChange() {
    if (recaptchaRef.current.getValue()) {
      console.log("captcha validado");
    } else {
      console.log(" captcha no validado");
    }
  }

  const token = sessionStorage.getItem("secure_token");
  const [typeInput, setTypeInput] = useState(true);
  const [spiner, setSpiner] = useState(true);

 setTimeout(() => {
  if (token) {
    return <Navigate to="/dasboard" />;
  }
  }, 2000);
 

  return (
    <>
      <ToastContainer />

      <Header />
      <div className="red-400">
        <div className="form_Login  dark:border-none  mx-auto rounded-md border w-[94%] dark:text-white dark:bg-[#37415197] sm:3/4 animate__animated animate__fadeIn bg-white form md:w-[50rem]   my-9 drop-shadow-2xl ">
          <LoadingBar
            color="#2998ff"
            progress={LoadingProgress}
            onLoaderFinished={() => {
              setLoadingProgress(0);
            }}
            shadow={false}
            shadowStyle={0}
            background="#f5f5f5"
            style={{
              borderRadius: 10,
              border: "2px solid #2998ff",
            }}
          />
          <div className="login bg-white dark:text-white dark:bg-[#37415197] z-20 relative rounded-md ">
            <div className="flex item-center justify-center flex-col">
              <div className=" absolute p-2 left-0 text-3xl dark:text-white text-gray-600 ">
                <Link to="/">
                  <FontAwesomeIcon icon={faAngleLeft} />
                </Link>
              </div>
              <div className="">
                <h1 className=" text-gray-600 dark:text-white  block p-2  text-2xl text-center font-sans font-medium">
                  Iniciar sesión
                </h1>
              </div>
            </div>

            <div className="descripcion">
              <p
                className="title text-gray-600 dark:text-white text-base font-sans
                        mt-6 mb-2
                        mx-3"
              >
                Ingrese sus datos para comenzar
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .email("El email no es valido")
                      .required("El campo no puede estar vacio"),
                    password: Yup.string().required(
                      "El campo no puede estar vacio"
                    ),
                  })}
                  onSubmit={async (values) => {
                    if (!recaptchaRef.current.getValue()) {
                      toast.info("Por favor valida el captcha", {
                        position: toast.POSITION.TOP_RIGHT,
                        theme: "dark",});}}}
                >
                  <Form>
                    <div
                      className="Fiel-email border bg-white dark:bg-transparent dark:border-[#019afa] flex items-center mx-2 my-1
                           border-solid border-1 border-slate-300 rounded transition-200
                             "
                    >
                      <div className="icons   py-2 px-2 text-gray-400">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="mx-1 text-xl"
                        />
                      </div>
                      <div className="email w-full">
                        <Field
                          type="email"
                          name="email"
                          placeholder="Correo electronico"
                          className="w-full block
                                         outline-none dark:bg-transparent dark:text-white "
                        />
                      </div>
                    </div>
                    <div className="error">
                      <ErrorMessage
                        component="p"
                        className="mx-2 block text-red-600
                                animate__animated animate__fadeInUp "
                        name="email"
                        // validate={validateEmail}
                      />
                    </div>

                    <div
                      className="Fiel-password border dark:bg-transparent dark:border-[#019afa] bg-white flex items-center mx-2 mt-6
                           border-solid border-1 border-slate-300 rounded"
                    >
                      <div className="icons    py-2 px-2 text-gray-400">
                        <FontAwesomeIcon
                          icon={faKey}
                          className="mx-1 text-xl"
                        />
                      </div>

                      <div className=" w-full">
                        <Field
                          type={typeInput === true ? "password" : "text"}
                          name="password"
                          placeholder="Contraseña"
                          className="w-full block outline-none dark:bg-transparent dark:text-white bg-white"
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

                    <div className="flex justify-between m-3">
                      <Link to="ayuda">
                        <p>
                          {" "}
                          <FontAwesomeIcon
                            icon={faCircleQuestion}
                            className="text-[#074766] dark:text-white text-xl"
                          />{" "}
                          Ayuda
                        </p>
                      </Link>
                      <Link
                        to="/recovery+password/identify"
                        className="text-[#0099FF] hover:underline"
                      >
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </div>
                    <div className="flex justify-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LdqFMgmAAAAAKGltHM1IGhpmilwSX5_dCtAjIbC"
                        onChange={onChange}
                        // mostrar obligatoriamente el captcha
                        required
                      />
                    </div>

                    <div className="button w-full relative">
                      {spiner == true ? (
                        <>
                          <button
                            type="submit"
                            className="bg-[#019afa] text-white rounded-full relative
                                pt-1.5  w-5/6 mx-auto my-2 hover:opacity-[0.85] transition
                                h-9 flex justify-center"
                          >
                            <span className="text-base font-medium">
                              Iniciar sesión
                            </span>
                          </button>
                        </>
                      ) : (
                        <>
                          <span
                            type="button"
                            className="bg-[#019afa] text-white rounded-full relative w-5/6
                                p-1   items-center mx-auto my-2 hover:opacity-[0.85] transition
                                h-9 flex justify-center truncate"
                          >
                            <IconsSvgLoading w="24" h="24" />
                            <div className="spa mx-1"> Espere un momento...</div>
                          </span>
                        </>
                      )}
                    </div>

                    <div
                      className="ajuste-cuenta   flex justify-start mt-4 mx-2 mb-2
                            "
                    >
                      <p>¿No tienes cuenta?</p>
                      <Link to="/signup">
                        <p className="text-[#0099FF] mb-3 ml-3">Crear cuenta</p>
                      </Link>
                    </div>
                  </Form>
                </Formik>
              </div>

              <div className="entry mx-1 rounded-md hidden md:block">
                <video
                  src="https://res.cloudinary.com/dkqp3wkbi/video/upload/v1670421680/animacion_media_fawwzt.mp4"
                  autoPlay
                  loop
                  muted
                  preload="auto"
                ></video>
              </div>
            </div>
            <div className="op-goo flex flex-rows justify-center items-center ">
              <div className=" flex  justify-center items-center">
                <div className="countCuenda cursor-pointer">
                  <div
                    className="authGoogle 
                                p-2 m-2 flex items-center justify-center rounded"
                  >
                    <AuthGoogleA />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthUser;
