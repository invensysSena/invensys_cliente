import skel1 from "../../assets/img/skel1.png";
import skel2 from "../../assets/img/skel2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { LazyLoadImage } from "react-lazy-load-image-component";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
export const HomeEfectA = () => {
  AOS.init({
    duration: 3000,
  });
  return (
    <>
      <ToastContainer />
      <div className="container_f flex justify-center lg:justify-between mt-10">
        <div className="img1 hidden lg:block" data-aos="fade-right">
          <LazyLoadImage
            src={skel1}
            alt="skel1"
            effect="blur"
            className="img1"
          />
        </div>
        <div className="div" data-aos="fade-up">
          <div className="list_data  ">
            <h2 className="text-[#019afa] text-2xl md:text-5xl mt-4 text-center">
              Suscribete a nuestra plataforma
            </h2>
            <p className="text-xl md:text-2xl dark:text-white text-center mt-2">
              Recibiras notificaciones de nuevos servicios y novedades
            </p>
            <div className="notiEmail text-center flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 36 36"
              >
                <path
                  fill="#31C273"
                  d="M33.68 15.4h-7.91l-6.52 6.49a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V15.38ZM5.3 28H3.91v-1.43l7.27-7.21l1.41 1.41Zm26.61 0h-1.4l-7.29-7.23l1.41-1.41l7.27 7.21Z"
                  className="clr-i-solid--alerted clr-i-solid-path-1--alerted"
                />
                <path
                  fill="#31C273"
                  d="M22.94 15.4h-.7A3.68 3.68 0 0 1 19 9.89L21.29 6H3.92a2 2 0 0 0-.53.08l14.45 14.39Z"
                  className="clr-i-solid--alerted clr-i-solid-path-2--alerted"
                />
                <path
                  fill="#31C273"
                  d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0Z"
                  className="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"
                />
                <path fill="none" d="M0 0h36v36H0z" />
              </svg>
            </div>
            <div className="Formik-subs">
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("El email no es valido")
                    .required("El campo no puede estar vacio"),
                })}
                onSubmit={() => {
                  toast.success("Gracias por suscribirte");
                }}
              >
                <Form className="flex justify-center flex-col mx-1">
                  <div className="form_f border-2 rounded-lg flex   border-[#019afa] items-center w-full">
                    <div className="flex w-full">
                      <div className="icon mx-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="45"
                          height="45"
                          viewBox="0 0 48 48"
                        >
                          <g fill="none" stroke="#019afa" strokeWidth="4">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M44 24V9H4v30h20"
                            />
                            <circle cx="36" cy="34" r="5" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m40 37l4 3M4 9l20 15L44 9"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="input w-full">
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="w-full text-xl py-2 mx-2 bg-transparent outline-none dark:text-white "
                        />
                      </div>

                      <button type="submit" className="mx-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="29"
                          height="29"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#019afa"
                            d="M3 20v-6l8-2l-8-2V4l19 8l-19 8Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="f">
                    <ErrorMessage
                      component="p"
                      className="mx-2 my-1 block text-red-600
                                animate__animated animate__fadeInUp "
                      name="email"
                      // validate={validateEmail}
                    />
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
        <div className="img2 hidden  lg:block" data-aos="fade-left">
          <LazyLoadImage
            src={skel2}
            alt="skel1"
            effect="blur"
            className="img1"
          />
        </div>
      </div>
    </>
  );
};
