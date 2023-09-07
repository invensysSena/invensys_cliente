import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWandMagicSparkles,} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import curba3 from "../assets/img/curba3.png";
import imagen4 from "../assets/img/card1.jpg";
import imagen5 from "../assets/img/card2.jpg";
import imagen6 from "../assets/img/card03.jpg";
import imagen7 from "../assets/img/estadisticaStored.png";
import "../assets/css/fuente.css";
import SliderCount from "../components/SliderCount";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ViewOne } from "../components/componentsHome/ViewOne";
import { useEffect, useMemo, useState } from "react";
import { HomeEfectA } from "../pages/homeAparience/HomeEfectA";
import "../pages/scrolfH.css";
import { MainComponents } from "./MainComponents";
import { SectionCustomen } from "./sectionCustomen/SectionCustomen";
import { SectionCustomenOne } from "./sectionCustomen/SectionCustomenOne";

export const Main = () => {
  AOS.init({
    duration: 3000,
  });
  document.body.style = "overflow-x: hidden";
  // webkit-scrollbar
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

  return (
    <div id="principal">
      <div className="w-full  overflow-x-hidden">
     
       
      <MainComponents/>
        <div className="text-center fuente-t1  ">
          <span className="text-2xl md:text-6xl h-36 dark:text-white">
            ¿Qué esperas de nuestra plataforma?
          </span>
        </div>
        <div className="relative">
          <div className="gridHome  sm:grid-cols-2  md:lg-auto md:grid-cols-3 ">
            <SectionCustomen effect="fade-up" imagen={imagen4}>
            Llevaras un registro de tus productos de entrada y salidas,
                  mediante reportes que estaran pendiente de tu inventario.{" "}
            </SectionCustomen>
            
            <SectionCustomen effect="fade-up" imagen={imagen5}>
            Tu información esta segura, nos importa de que tus datos no se
                  pierdan y no hallan fallos al momento de utilizar nuesto
                  servicio.
            </SectionCustomen>
            <SectionCustomen effect="fade-up" imagen={imagen6}>
            Podras crear usuarios que ayude llevar un mejor control de tu
                  inventario, a travez de roles que faciliten el manejo de tu
                  negocio.{" "}
            </SectionCustomen>
          </div>
        </div>

        <ViewOne />
        <div className="text-center fuente-t1 ">
          <span className="text-2xl md:text-6xl h-36 dark:text-white">
            Impulsamos en la innovación
          </span>
        </div>

        <div className="home">
          <div className=" flex flex-col lg:flex-row justify-center relative  ">
            <div className="h-3/5 hidden lg:block relative w-1 lg:ml-16 lg:mt-4  colorbgline"></div>
            <LazyLoadImage
              effect="bl"
              src={curba3}
              alt=""
              className="absolute hidden lg:block top-0 left-20"
            />
            <FontAwesomeIcon
              icon={faWandMagicSparkles}
              data-aos="zoom-in"
              className="
          absolute top-[-4px] shadow-lg hidden lg:block
           shadow-[#fde047] text-[#facc15] left-14"
            />
            <article className="md:w-[30rem] lg:mt-20 " data-aos="flip-left">
              <div className="">
                <span className="text-[#3376F9] dark:text-white font2 t ">
                  <div className="span">
                    Invensys un servicio de alta calidad.
                  </div>
                  <span className="font3s">
                    <div className="text-md dark:text-white">
                      Nuestra plataforma impulsa la innovación con herramientas
                      que aumentan la seguridad de tu negocio
                    </div>
                  </span>
                </span>
              </div>
              <div className="scalewrap"></div>
              <p className="text-center md:text-start dark:text-white max-w-sm lg:ml-8 text-xl text-gray-700 ">
                {" "}
                Aumento del 100% en la productividad de tu trabajo después de 1
                año
              </p>
            </article>
          </div>

          <div className=" lg:mr-10 my-10 flex lg:self-end bg-slik ">
            <LazyLoadImage
              src={imagen7}
              alt=""
              className="w-full"
              data-aos="fade-left"
            />
          </div>
        </div>
        <div className="slid">
          <HomeEfectA />
        </div>
        <div className="text-center fuente-t1 ">
          <span className="text-2xl md:text-6xl dark:text-white">
            Comodo para que cualquier persona pueda utilizarlo sin dificultad
          </span>
        </div>
        {/* ? section cards  */}
        <div className="block md:hidden">
          <h2 className="w-[90%] mb-5  mx-auto font-bold text-2xl dark:text-white">
            Información sobre <span className="text-[#3498db]">Invensys</span>{" "}
          </h2>
          <div className="cards">

            <SectionCustomenOne message="Manejo de tu inventario mas facil y comodo">
            Con invensys podra llevar un control permanente de todos los
                productos, necesidades de abastecimiento, reporte de
                vencimientos y rotaciond e sus productos.
            </SectionCustomenOne>
            <SectionCustomenOne message="Estadisticas y informes de tu negocio">
            Representación de graficas, ayudando un mejor analisis de tu
                negocio para que puedas mejorar y que tu negocio cresca más
            </SectionCustomenOne>
          </div>
        </div>

        <SliderCount />
      

      </div>
    </div>
  );
};
