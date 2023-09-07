import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar,faBolt,} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import rowFirst from "../assets/img/curba1.png";
import curba2 from "../assets/img/curba2.png";
import "../assets/css/fuente.css";
import { Link } from "react-router-dom";
import { Sled } from "../components/Sled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useMemo, useState } from "react";
import "../pages/scrolfH.css";
export const MainComponents = () => {
  AOS.init({
    duration: 3000,
  });
  document.body.style = "overflow-x: hidden";
  // webkit-scrollbar
  const [darkMode, setDarkMode] = useState(false);
  useMemo(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);
  useEffect(() => {
    const botoomsub = document.querySelector(".botoomsub");
    const principal = document.querySelector("#principal");
    var height = principal.offsetTop;
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > height) {
        botoomsub.classList.add("activest");
      } else {
        botoomsub.classList.remove("activest");
      }
    });
  }, []);

  const pagePrincipal = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div id="principal">
      <div className="w-full  overflow-x-hidden">
       
        <div className=" bg-white cursor-pointer  botoomsub fixed z-50 right-0 p-3 md:p-3.5 m-7 shadow-lg rounded-full border bottom-0">
          <span onClick={pagePrincipal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 24 24"
            >
              <path
                fill="#777777"
                d="M11 20V7.825l-5.6 5.6L4 12l8-8l8 8l-1.4 1.425l-5.6-5.6V20h-2Z"
              />
            </svg>
          </span>
        </div>
        <div className=" colorcamb  ">
          <div className="content-home">
            <div className=" w-full  text-xl md:w-4/5  md:pl-10">
              <h2 className="h5-mktg w-full text-5xl z-50">
                ¡Comienza a crear tu propio inventario para llevar un mejor
                manejo de tu negocio...!
              </h2>
              <p className="text-slate-400 m-2 md:m-0 m md:text-start md:py-2 md:text-2xl text-center">
                ¡Los pequeños emprendedores y comerciantes merecen mucho más con
                invensys expande tu negocio! 100% gratuito
              </p>
              <p className="h-2 mx-4 md:m-0 bg-emerald-400 rounded-full animate__animated animate__bounceInLeft"></p>
              <div className="n hidden lg:block">
                <Link
                  to={"/login"}
                  className="
        bg-white py-3 inline-block
       mt-12 mb-36 rounded-sm px-5 text-1xl hover:text-white
        duration-300 hover:bg-transparent border hover:border-emerald-400 btn-y "
                >
                  Comienza ya{" "}
                </Link>
                <Link
                  to={"/"}
                  className="
        bg-white ml-4 py-3 inline-block
       my-5 rounded-sm px-5 text-1xl hover:text-white
        duration-300 hover:bg-transparent border hover:border-emerald-400 btn-y "
                >
                  Explorar más{" "}
                </Link>
              </div>
            </div>
            <div className="w-full">
              <LazyLoadImage
                effect="blur"
                className="mt-10 w-full animate__animated animate__fadeIn"
                type="imagen"
                src="https://res.cloudinary.com/dkqp3wkbi/image/upload/v1682002355/stored/Frame_1_b7ymvc.png"
                alt="stored"
              />
            </div>
          </div>
          <div className="elementor-background-overlay"></div>
          <div
            className="elementor-shape elementor-shape-bottom"
            data-negative="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              fill="#18324f"
            >
              <path
                className={darkMode ? "transparent" : "elementor-shape-fill"}
                d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
              ></path>
            </svg>{" "}
          </div>
          <div className="seccion2"></div>
        </div>
        <div className="rounded flex flex-col md:flex-row items-center  justify-around lg:justify-between  max-w-6xl md:mx-auto my-14 ">
          <div className="circlepath hidden md:block" data-aos="fade-right">
            <div className="img-sec1">
              <FontAwesomeIcon
                icon={faBolt}
                className="text-[#fde047] absolute top-20
       lg:left[3rem]  xl:left[10rem]  m-1"
              />
              <LazyLoadImage
                src={curba2}
                alt=""
                className="absolute bottom-[-16.9rem] left-[-6rem] w-36"
                effect="blur"
              />
              <Sled />
            </div>
            <div className="circle1" data-aos="zoom-in-left"></div>
            <div className="circle2" data-aos="zoom-in-right"></div>
          </div>
          <div className="row hidden xl:block">
            <LazyLoadImage
              effect="bl"
              src={rowFirst}
              alt=""
              className="w-[16rem] lg:w-[30rem] h-42"
            />
          </div>
          <div
            className="w-[93%]  mx:auto md:w-96 relative shadow-2xl dark:text-white dark:bg-[#37415197] bg-white rounded-md border p-10 "
            data-aos="fade-left"
            style={{ zIndex: -1 }}
          >
            <div className="cir1 h-4 m-1 w-4 absolute bg-red-500 top-0 left-0 rounded-full"></div>
            <div className="cir2 h-4 m-1 w-4 absolute bg-[#fbbf24] top-0 left-6 rounded-full"></div>
            <div className="cir3 h-4 m-1 w-4 absolute bg-green-500 top-0 left-12 rounded-full"></div>
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#fde047] absolute top-0 right-0 m-1"
            />
            <span className="text-md lg:text-xl dark:text-white  text-slate-700 fade-right">
              Invensys es una aplicación de administración para el inventario de
              los productos de tu negocio, en la cual podrás llevar un control
              permanente de todos ellos, necesidades de abastecimiento, reporte
              de vencimientos, rotación de productos y podrás utilizarla para el
              manejo administrativo y financiero de tu negocio.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
