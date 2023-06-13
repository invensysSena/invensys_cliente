import React, { lazy, Suspense } from "react";
import LazyLoad from "react-lazy-load";
import rowFirst from "../assets/img/curba1.png";
import curba2 from "../assets/img/curba2.png";
import curba3 from "../assets/img/curba3.png";
import imagen4 from "../assets/img/card1.jpg";
import imagen5 from "../assets/img/card2.jpg";
import imagen6 from "../assets/img/card03.jpg";
import imagen7 from "../assets/img/estadisticaStored.png";

export const Prueba = () => {
  return (
    <>
      <div className="listImagenes">
        <LazyLoad threshold={0.95} height={762} width={400}>
          <img src={imagen4} alt="imagen1" />
        </LazyLoad>
        <LazyLoad threshold={0.95} height={762} width={400}>
          <img src={imagen5} alt="imagen1" />
        </LazyLoad>
        <LazyLoad threshold={0.95} height={762} width={400}>
          <img src={imagen6} alt="imagen1" />
        </LazyLoad>
      </div>
    </>
  );
};
