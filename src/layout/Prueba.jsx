import LazyLoad from "react-lazy-load";
import imagen4 from "../assets/img/card1.jpg";
import imagen5 from "../assets/img/card2.jpg";
import imagen6 from "../assets/img/card03.jpg";

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
