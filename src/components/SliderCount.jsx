import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/SlideCountj.css";
import img1 from "../assets/invensys/mobile1.png";
import img2 from "../assets/invensys/mobile2.png";
import img3 from "../assets/invensys/mobile3.png";
import img4 from "../assets/invensys/mobile4.png";
import img5 from "../assets/invensys/mobile5.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Autoplay, Pagination, Navigation } from "swiper";
const
  SliderCount = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className=" max-w-7xl m-auto dark:text-white  p-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <LazyLoadImage src={img1} alt="img1" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage src={img2} alt="img2" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage src={img3} alt="img3" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage src={img4} alt="img4" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage src={img5} alt="img5" className="" />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default SliderCount;
