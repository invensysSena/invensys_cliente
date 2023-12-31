import img from "../assets/img/error.svg";
import { Link } from "react-router-dom";
import "../assets/css/fuente.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export const NotFount = () => {
  return (
    <>
      <div className="container mx-auto ">
        <img
          src={img}
          alt="not found"
          className="w-[90%] 
     lg:w-1/4  mt-10 justify-center flex  mx-auto"
        
        />
        <h1
          className=" gg text-center w-[90%] md:w-2/4 mx-auto dark:text-white
     p-4 text-2xl"
        >
          <span className="dark:text-white">
            Este contenido no está disponible o no existe intente con otro.
          </span>
        </h1>
        <div
          className="text-[19px] text-center w[90%] md:w-2/4 mx-auto
     p-4 text-2xl text-black dark:text-white font-normal flex flex-col  h-0 min-h-0 "
        >
          <span>
            Esto sucede porque el contenido no existe o no está disponible.
            Tambien pude ser por que no tiene permisos para acceder a este
            contenido.
          </span>
          <a
            href="/"
            className="bg-[#1876f2] inline-block w-56 text-center mx-auto dark:text-white text-white rounded-md p-2 mt-4"
          >
            {" "}
            Regresar al inicio
          </a>
          <Link
            to={"/contactanos"}
            className="span mt-2 text-[#1876f2] inline-block w-56 text-center mx-auto"
          >
            Ir al servicio de ayuda
          </Link>
        </div>
      </div>
    </>
  );
};
