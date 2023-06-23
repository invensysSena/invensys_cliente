import LazyLoad from "react-lazy-load";
import imagen4 from "../assets/img/card1.jpg";
import imagen5 from "../assets/img/card2.jpg";
import imagen6 from "../assets/img/card03.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export const Prueba = () => {
  return (
    <>
      <div className="listImagenes">
        <LazyLoad threshold={0.95} height={762} width={400}>
          <LazyLoadImage effect="blur" src={imagen4} alt="imagen1" />
        </LazyLoad>
        <LazyLoad threshold={0.95} height={762} width={400}>
          <LazyLoadImage effect="blur" src={imagen5} alt="imagen1" />
        </LazyLoad>
        <LazyLoad threshold={0.95} height={762} width={400}>
          <LazyLoadImage effect="blur" src={imagen6} alt="imagen1" />
        </LazyLoad>
      </div>
    </>
  );
};
