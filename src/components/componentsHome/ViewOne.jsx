import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useMemo, useState } from "react";

import analityc from "../../assets/img/analityc.jpg";
import estadisc from "../../assets/img/estadisc.png";
import darkEstadist from "../../assets/img/darkestadis.png";
import darkBodega from "../../assets/img/bodegDark.png";

export const ViewOne = () => {
  const [darkMode, setDarkMode] = useState(false);
  useMemo(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);
  return (
    <div>
      <div
        className="container_img justify-between  
         flex gap-8 mt-[8rem] max-w-[1400px] mx-auto"
      >
        <div className="listImagenes flex flex-col gap-4">
          <div className="span flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#FFB636"
                  d="m459.866 218.346l-186.7.701c-4.619.017-7.618-4.861-5.517-8.975L370.845 8.024c3.103-6.075-4.493-11.949-9.592-7.417L39.948 286.141c-4.221 3.751-1.602 10.732 4.045 10.78l170.444 1.457c4.443.038 7.391 4.619 5.583 8.679L133.317 501.73c-2.688 6.035 4.709 11.501 9.689 7.16l320.937-279.725c4.307-3.753 1.637-10.84-4.077-10.819z"
                />
              </svg>
            </span>
            <span className="dark:text-white">
              Crea bodegas de forma dinamica, expandiendo tu negocio en
              diferentes lugares
            </span>
          </div>
          <div
            className="item1 rounded-lg  
                
                w-[28rem] flex  items-center shadow-xl  dark:border dark:border-[#777777]
                "
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <div className="icon">
              <LazyLoadImage
                src="https://dg8krxphbh767.cloudfront.net/exercises/allergies.svg"
                alt=""
              />
            </div>
            <div className="title">
              <h2 className="font-bold m-1 dark:text-white">
                Bodega de distribución
              </h2>
              <p className="m-2 dark:text-white">
                {" "}
                clasificar y distribuye productos a diferentes destinos., zonas
                de preparación de pedidos y sistemas de gestión de inventario
                para facilitar el flujo eficiente de productos.
              </p>
            </div>
          </div>
          <div
            className="item1 rounded-lg  
                
                w-[28rem] flex  items-center dark:border dark:border-[#777777]
                "
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <div className="icon">
              <LazyLoadImage
                src="https://dg8krxphbh767.cloudfront.net/exercises/allergies.svg"
                alt=""
              />
            </div>
            <div className="title">
              <h2 className="font-bold m-1 dark:text-white">
                Bodega de almacenamiento
              </h2>
              <p className="m-2 dark:text-white">
                guardaa y organizar diversos tipos de productos o mercancías.
                Puedes utilizarlo para almacenar una amplia gama de productos o
                artículos,
              </p>
            </div>
          </div>
          <div
            className="item1 rounded-lg  
                
                w-[28rem] flex  items-center dark:border dark:border-[#777777]
                "
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <div className="icon mx-1">
              <LazyLoadImage
                src="https://dg8krxphbh767.cloudfront.net/exercises/allergies.svg"
                alt=""
              />
            </div>
            <div className="title">
              <h2 className="font-bold m-1 dark:text-white">Más</h2>
              <p className="dark:text-white">
                utilizada para almacenar documentos, registros y archivos
                físicos. Suelen contar con sistemas de organización, estanterías
                y medidas de seguridad para preservar y proteger la información
                almacenada.
              </p>
            </div>
          </div>
        </div>
        <div className="img_scan">
          {darkMode ? (
            <LazyLoadImage
              src={darkBodega}
              alt=""
              className="w-[1000px] rounded-lg"
              data-aos="fade-left"
              style={{ boxShadow: "#019afa5a 0px 8px 24px  " }}
            />
          ) : (
            <LazyLoadImage
              src={analityc}
              alt=""
              className="w-[1000px] rounded-lg"
              data-aos="fade-left"
              style={{ boxShadow: "#019afa5a 0px 8px 24px  " }}
            />
          )}
        </div>
      </div>
      <div className="esta justify-center flex mt-[3rem]">
        {darkMode ? (
          <LazyLoadImage
            src={darkEstadist}
            alt=""
            className="w-[1000px] rounded-lg"
            data-aos="fade-left"
            style={{ boxShadow: "#019afa5a 0px 8px 24px  " }}
          />
        ) : (
          <LazyLoadImage
            src={estadisc}
            alt=""
            className="w-[1000px] rounded-lg"
            data-aos="fade-left"
            style={{ boxShadow: "#019afa5a 0px 8px 24px  " }}
          />
        )}
      </div>
      <div
        className="let-Vontend w-[50rem] items-center flex mx-auto justify-between border-2 shadow-md mt-[3rem] rounded-md
         shadow-[#019afa66] border-[#019afa]"
      >
        <span className="text-[#019afa] font-bold my-4  text-xl mx-2">
          Invensys
        </span>
        <span className="w-[30rem] text-gray-600 text-lg dark:text-white">
          Conoce mas sobre invensys y los servicios que ofrecen para ti
        </span>
        <span>
          <a href="/" className="text-[#019afa] mx-1 underline">
            Ver más
          </a>
        </span>
      </div>
    </div>
  );
};
