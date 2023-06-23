import { useState, useMemo } from "react";
import notyfy from "../../assets/img/notify.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export const HomeNotification = () => {
  const [darkMode, setDarkMode] = useState(false);
  useMemo(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);
  return darkMode ? null : (
    <LazyLoadImage
      src={notyfy}
      alt=""
      className=" w-4/5 mx-auto h-4/5 object-cover"
      effect="blur"
    />
  );
};
