import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import "../assets/css/fuente.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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
                  <li className="md:my-1">
                    <span className="circle-f"></span>
                    <Link
                      to={"/"}
                      className="flex justify-between  items-center md:py-1 hover:underline text-gray-800 dark:text-white"
                    >
                      {" "}
                      Servicios{" "}
                    </Link>
                  </li>

                  <li className="md:my-1">
                    <span className="circle-f"></span>
                    <Link
                      to={"/"}
                      className="flex justify-between  items-center md:py-1 hover:underline text-gray-800 dark:text-white"
                    >
                      {" "}
                      Servicios{" "}
                    </Link>
                  </li>
                  <li className="md:my-1">
                    <span className="circle-f"></span>
                    <Link
                      to={"/"}
                      className="flex justify-between  items-center md:py-1 hover:underline text-gray-800 dark:text-white"
                    >
                      {" "}
                      Documentación{" "}
                    </Link>
                  </li>
                  <li className="md:my-1">
                    <span className="circle-f"></span>
                    <Link
                      to={"/"}
                      className="flex justify-between  items-center md:py-1 hover:underline text-gray-800 dark:text-white "
                    >
                      {" "}
                      Recursos para desarroladores{" "}
                    </Link>
                  </li>
                  <li className="md:my-1">
                    <span className="circle-f"></span>
                    <Link
                      to={"/"}
                      className="flex justify-between  items-center md:py-1 hover:underline text-gray-800 dark:text-white"
                    >
                      {" "}
                      Certificaciones{" "}
                    </Link>
                  </li>
                  <li className="md:my-1">
                    <span className="circle-f"></span>
                    <Link
                      to={"/"}
                      className="flex justify-between  items-center md:py-1 hover:underline text-gray-800 dark:text-white"
                    >
                      {" "}
                      Blogs{" "}
                    </Link>
                  </li>
                  <li className="md:my-1">
                    <span className="circle-f"></span>
                    <Link
                      to={"/"}
                      className="flex justify-between  items-center md:py-1 hover:underline text-gray-800 dark:text-white"
                    >
                      {" "}
                      Compañia{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="div md:hidden mx-4 h-[2px] bg-white w-full block rounded-full"></div>
              <div className="layautSection m-3">
                <ul>
                  <li className="md:my-1">
                    <span className="circle-f"></span>
                    <Link
                      to={"/"}
                      className="flex justify-between  items-center md:py-1 hover:underline text-gray-800 dark:text-white"
                    >
                      {" "}
                      Quienes somos{" "}
                    </Link>
                  </li>
                  <li className="md:my-1">
                    <span className="circle-f"></span>
                    <Link
                      to={"/"}
                      className="flex justify-between  items-center md:py-1 hover:underline text-gray-800 dark:text-white"
                    >
                      {" "}
                      Ayuda{" "}
                    </Link>
                  </li>
                  <li className="md:my-1">
                    <span className="circle-f"></span>
                    <Link
                      to={"/"}
                      className="flex justify-between  items-center md:py-1 hover:underline text-gray-800 dark:text-white"
                    >
                      {" "}
                      Como funciona stored{" "}
                    </Link>
                  </li>
                  <li className="md:my-1">
                    <span className="circle-f"></span>
                    <Link
                      to={"/"}
                      className="flex justify-between  items-center md:py-1 hover:underline text-gray-800 dark:text-white"
                    >
                      {" "}
                      Privacidad de datos{" "}
                    </Link>
                  </li>
                  <li className="md:my-1">
                    <span className="circle-f"></span>
                    <Link
                      to={"/"}
                      className="flex justify-between  items-center md:py-1 hover:underline text-gray-800 dark:text-white"
                    >
                      {" "}
                      Información legal{" "}
                    </Link>
                  </li>
                  <li className="md:my-1">
                    <span className="circle-f"></span>
                    <Link
                      to={"/"}
                      className="flex justify-between  items-center md:py-1 hover:underline text-gray-800 dark:text-white"
                    >
                      {" "}
                      Terminos Y condiciones{" "}
                    </Link>
                  </li>
                  <li className="md:my-1">
                    <span className="circle-f"></span>
                    <Link
                      to={"/"}
                      className="flex justify-between  items-center md:py-1 hover:underline text-gray-800 dark:text-white"
                    >
                      {" "}
                      Hola{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="div md:hidden mx-4 h-[2px] bg-white w-full block rounded-full"></div>

              <div className="w-48 mx-4 mt-4 md:mt-0">
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
            <div className="redes_Link flex">
              <span>
                <Link to="/instagram">
                  <LazyLoadImage
                    effect="blur"
                    width={"50px"}
                    src="https://img.icons8.com/cute-clipart/64/null/instagram-new.png"
                    alt="redes"
                  />
                </Link>
              </span>
              <span>
                <Link to="/tittwe">
                  <LazyLoadImage
                    effect="blur"
                    width={"50px"}
                    src="https://img.icons8.com/cute-clipart/64/null/twitter.png"
                    alt="redes"
                  />
                </Link>
              </span>
              <span>
                <Link
                  to
                  href="https://web.facebook.com/profile.php?id=100090067700904"
                >
                  <LazyLoadImage
                    effect="blur"
                    width={"50px"}
                    src="https://img.icons8.com/cute-clipart/64/null/facebook.png"
                    alt="redes"
                  />
                </Link>
              </span>
              <span>
                <Link to="https://www.linkedin.com/in/stored-proyecto-84a285266/">
                  <LazyLoadImage
                    effect="blur"
                    width={"50px"}
                    src="https://img.icons8.com/cute-clipart/64/null/linkedin.png"
                    alt="redes"
                  />
                </Link>
              </span>
              <span>
                <Link to="https://github.com/Stored1223">
                  <LazyLoadImage
                    effect="blur"
                    width={"50px"}
                    src="https://img.icons8.com/cute-clipart/64/null/github.png"
                    alt="redes"
                  />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
