import { useState, useRef } from "react";
import "../index.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faKey,
  faCircleQuestion,
  faEye,
  faEyeSlash,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/fuente.css";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import "animate.css";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "../assets/css/spiner.css";
import { Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import moment from "moment-with-locales-es6";
import { PostDataUser, AuthGoogle } from "../apis/ApiData";
import ReCAPTCHA from "react-google-recaptcha";
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

  const token = localStorage.getItem("secure_token");
  const [typeInput, setTypeInput] = useState(true);
  const [spiner, setSpiner] = useState(true);

  if (token) {
    return <Navigate to="/dasboard" />;
  }

  const setDataGoogl = async (data) => {
    const { email, name, picture } = data;
    const postDataUser = {
      email,
      name,
      picture,
    };

    const response = await AuthGoogle(postDataUser);

    if (response.status === 200) {
      let getData = response.data;
      localStorage.setItem("secure_token", getData.token);
      localStorage.setItem("auth_cuenta", getData.auth);
      localStorage.setItem("response_auth", getData.message);
      localStorage.setItem("perfil_rol", getData.rol);
      localStorage.setItem("type", getData.rol);
      setSpiner(!spiner);

      window.location.href = "/perfil";
    } else {
      toast.error(
        "Hubo un error al iniciar sesion con tu cuenta de google, intenta nuevamente",
        {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        }
      );
      setSpiner(true);
    }
  };

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
                        theme: "dark",
                      });
                    } else {
                      try {
                        setSpiner(false);
                        setLoadingProgress(50);
                        let response = await PostDataUser(values);

                        if (response.data.type === "user") {
                          let arrayLocalStorageModul = response.data.module;
                          if (response.status === 200) {
                            toast.success("Cargando...", {
                              position: toast.POSITION.TOP_RIGHT,
                              theme: "dark",
                              timeOut: 1000,
                            });
                            let arrayModule = "";
                            for (
                              let i = 0;
                              i < arrayLocalStorageModul.length;
                              i++
                            ) {
                              arrayModule = arrayLocalStorageModul[i].titulo;
                            }
                            let getData = response.data;
                            let url = getData.module[0];
                            localStorage.setItem("secure_token", getData.token);
                            localStorage.setItem("auth_cuenta", getData.auth);
                            localStorage.setItem(
                              "response_auth",
                              getData.message
                            );
                            localStorage.setItem("module", arrayModule);
                            localStorage.setItem(
                              "token_token1",
                              getData.token1
                            );
                            localStorage.setItem("correo", values.email);
                            localStorage.setItem("type", response.data.type);
                            let now = moment().format();
                            localStorage.setItem("fecha", now);
                            if (response.data.type === "user") {
                              window.location = `/${url.titulo}`;
                            }
                          }
                          if (response.response.status === 400) {
                            setSpiner(true);
                            toast.error("Este usuario no existe", {
                              position: toast.POSITION.TOP_RIGHT,
                              theme: "dark",
                            });
                          } else if (response.response.status === 401) {
                            toast.warning("La contraseña es incorrecta", {
                              position: toast.POSITION.TOP_RIGHT,
                              theme: "dark",
                            });
                            setSpiner(true);
                          }
                        } else {
                          toast.error(
                            "No cuentas con acceso verifica con el administrador ",
                            {
                              position: toast.POSITION.TOP_RIGHT,
                              theme: "dark",
                            }
                          );
                          setSpiner(true);
                        }
                        if (response.status === 200) {
                          toast.success("Cargando...", {
                            position: toast.POSITION.TOP_RIGHT,
                            theme: "dark",
                          });
                          let getData = response.data;
                          localStorage.setItem("secure_token", getData.token);
                          localStorage.setItem("auth_cuenta", getData.auth);
                          localStorage.setItem(
                            "response_auth",
                            getData.message
                          );
                          localStorage.setItem("perfil_rol", getData.rol);
                          localStorage.setItem("type", getData.rol);
                          setSpiner(true);
                          window.location.href = "/perfil";
                        }
                        if (response.response.status === 400) {
                          setSpiner(true);
                          toast.error("Este usuario no existe", {
                            position: toast.POSITION.TOP_RIGHT,
                            theme: "dark",
                          });
                        } else if (response.response.status === 401) {
                          toast.warning("La contraseña es incorrecta", {
                            position: toast.POSITION.TOP_RIGHT,
                            theme: "dark",
                          });
                          setSpiner(true);
                        }
                        setSpiner(true);
                      } catch (error) {
                        if (
                          error.response.status == 401 ||
                          error.response.status == 400
                        ) {
                          setTimeout(() => {
                            setLoadingProgress(90);
                          }, 1000);
                          setTimeout(() => {
                            setLoadingProgress(100);
                          }, 2000);

                          setTimeout(() => {
                            toast.error(
                              "Correo o contraseña incorrecta, intente nuevamente",
                              {
                                position: toast.POSITION.TOP_RIGHT,
                                theme: "dark",
                              }
                            );
                          }, 3000);
                          setTimeout(() => {
                            setLoadingProgress(0);
                            setSpiner(true);
                          }, 4000);
                        }
                      }
                    }
                  }}
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
                            <div className="spa"> Espere un momento...</div>
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
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        let decode = jwt_decode(credentialResponse.credential);
                        setDataGoogl(decode);
                      }}
                      onError={() => {}}
                      useOneTap
                      locale
                      type="standard"
                      shape="pill"
                      theme="filled_black"
                      logo_alignment="left"
                    />
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
