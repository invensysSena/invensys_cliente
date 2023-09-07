import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import "../assets/css/fuente.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { NavLinkCustomenFooter } from "./navLinkCustomen/NavLinkCustomenFooter";
export const Footer = () => {
  const fecha = new Date().getFullYear();

  return (
    <>
      <footer className="fotter_ dark:text-white dark:bg-[#37415197]  lg:mt-36 pt-10">
        <h2 className="text-[#2e86c1] mx-6 block md:hidden text-2xl font-bold">
          Invensys
        </h2>
        <div className=" max-w-7xl mx-auto ">
          <div className="flex  justify-between">
            <div className="mx-3 grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4">
              <div className="Slogan hidden lg:block">
                <h2 className="text-[#1876F2] text-3xl font-bold ml-2 my-1  mr-1">
                  Invensys
                </h2>

                <p className="w-48 ml-2">
                  Impulsamos la economía de tu negocio aumentando la
                  productividad de tu trabajo.
                </p>
              </div>
              <div className="serviceSection m-3">
                <ul>
                
                  <NavLinkCustomenFooter to={"/"} name={"Servicios"} />
                  <NavLinkCustomenFooter to={"/"} name={"Documentación"} />
                  <NavLinkCustomenFooter to={"/"} name={"Recursos"} />
                  <NavLinkCustomenFooter to={"/"} name={"Certificaciones"} />
                  <NavLinkCustomenFooter to={"/"} name={"Blogs"} />
                  <NavLinkCustomenFooter to={"/"} name={"Compañia"} />

                </ul>
              </div>
              <div className="div md:hidden mx-4 h-[2px] bg-white w-full block rounded-full"></div>
              <div className="layautSection m-3">
                <ul>
                  <NavLinkCustomenFooter to={"/"} name={"Quienes somos"} />
                  <NavLinkCustomenFooter to={"/"} name={"Ayuda"} />
                  <NavLinkCustomenFooter to={"/"} name={"Como funciona stored"} />
                  <NavLinkCustomenFooter to={"/"} name={"Privacidad de datos"} />
                  <NavLinkCustomenFooter to={"/"} name={"Información legal"} />
                  <NavLinkCustomenFooter to={"/"} name={"Terminos Y condiciones"} />
                  <NavLinkCustomenFooter to={"/"} name={"Hola"} />

                </ul>
              </div>
              <div className="div md:hidden mx-4 h-[2px] bg-white w-full block rounded-full"></div>

              <div className="w-48 mx-4 mt-10 md:mt-0">
                <article>
                  <strong>Suscríbete a nuestro plataforma</strong>
                  <p>
                    Obtenga actualizaciones de productos, novedades de la
                    compañía y más.
                  </p>
                </article>
                <Link
                  to={"/suscribete"}
                  className="border border-[#1876F2] p-2 rounded shadow-lg hover:shadow-blue-500/50  mt-2 inline-block"
                >
                  Suscribete
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="datacopy  overflow-x-auto ">
          <div className="allsection flex justify-between items-center max-w-7xl mx-auto">
            <div className="enalces_items">
              <ul className="flex gap-8 p-4">
                <li className="relative  text-[1.1rem] text-cyan-900 dark:text-white  whitespace-nowrap">
                  <span className="font-bold ">
                    {" "}
                    <FontAwesomeIcon icon={faGlobe} /> Español{" "}
                  </span>
                </li>
                <li className="relative   text-[1.1rem] text-cyan-900 dark:text-white">
                  <Link to={"/"} className="text-underline whitespace-nowrap">
                    Política de privacidad{" "}
                  </Link>
                </li>
                <li className="relative  text-[1.1rem] text-cyan-900 dark:text-white">
                  <Link to={"/"} className="text-underline  whitespace-nowrap">
                    Términos
                  </Link>
                </li>
                <li className="relative  text-[1.1rem] text-cyan-900 dark:text-white">
                  <Link to={"/"} className="text-underline  whitespace-nowrap">
                    Trabaja con nosotros
                  </Link>
                </li>
                <li className="relative  text-[1.1rem] text-cyan-900 dark:text-white  whitespace-nowrap">
                  <Link to={"/"}>Copyright &copy; {fecha} | Invensys ❤️</Link>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </footer>
    </>
  );
};
