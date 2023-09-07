
import "aos/dist/aos.css";
import "animate.css";
import Header from "../components/Header";
import "../assets/css/fuente.css";
import { Footer } from "../components/Footer";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./scrolfH.css";
import { Main } from "../components/Main";
 const HomePage = () => {


  return (
    <div id="principal">
      <div
        className="w-full  overflow-x-hidden">
        <div className=" top-0 relative z-50">
          <Header />
        </div>
         <Main/>
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;