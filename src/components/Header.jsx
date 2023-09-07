import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo peque.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {faAngleRight,faHome,faUser,faCircleUser,faLayerGroup,faCloud,faHeart,faAddressBook,faHandshake,faGear,} from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import "../assets/css/fuente.css";
import NavLinkCustom from "./navLinkCustomen/NavLinkCustom";
import NavLinkCustomTwo from "./navLinkCustomen/NavLinkCustomTwo";
import BreadcrumbLink from "./navLinkCustomen/BreadcrumbLink";
export const Header = () => {
  const [views, setViews] = useState(false);
  const [show, setShow] = useState(false);

  if (show === true) {
    document.body.classList.add("activeBody");
    document.body.style.overflow = "hidden";
  } else {
    document.body.classList.remove("activeBody");
    document.body.style.overflow = "auto";
  }

  if (views === true) {
    document.body.style.overflow = "hidden";
    setViews(false);
  }

  return (
    <div className="heander_bg shadow-md bg-white ">
      <div className="heand1 z-50 relative">
        <div className="menu_ l flex dark:bg-[#1e293b] bg-white items-center justify-between">
          <div className="title">
            <div className="d">
              <Link to={"/"}>
                <LazyLoadImage
                  src={logo}
                  alt=""
                  width={60}
                  className="m-2"
                  effect="blur"
                />
              </Link>
            </div>
          </div>
          <div
            className="menu_bars"
            onClick={() => {
              if (show === false) {
                setShow(true);
              } else {
                setShow(false);
              }
            }}
          >
            <span
              className={show === true ? "menu_bar__item1 active  " : "menu_bar__item1 "}></span>
            <span className={show === true ? "menu_bar__item2 active" : "menu_bar__item2"}></span>
            <span className={show === true ? "menu_bar__item3 active" : "menu_bar__item3"}></span>
          </div>
        </div>
      </div>
      <div
        className={show === true ? "lateralbg bg-white dark:bg-[#1e293b] relative " : ""}
        style={{zIndex: 1000}}>
        <div
          className={
            show === true ? "menu_lateral activ_Lateral bg-white dark:bg-[#1e293b] "
              : " bg-white dark:bg-[#1e293b] menu_lateral "
          }
        >
          <div className="sec dark:bg-[#1e293b]">
            <div className="t">
              <div className="flex justify-between items-center">
                <div className="tj">
                  <h2 className="p-[13px] dark:text-white">Menu</h2>
                </div>
                <div
                  className="menu_bars"
                  onClick={() => {
                    if (show === false) {
                      setShow(true);
                    } else {
                      setShow(false);
                    }
                  }}
                >
                  <span className={show === true? "menu_bar__item1 active" : "menu_bar__item1"}></span>
                  <span className={ show === true? "menu_bar__item2 active": "menu_bar__item2"}></span>
                  <span className={show === true ? "menu_bar__item3 active" : "menu_bar__item3"}></span>
                </div>
              </div>
              <hr />
              <div className="list">
                <ul>
                  
                  <BreadcrumbLink to="/" text="Inicio" icon={faHome} iconTwo={faAngleRight}  customClassName="" />
                  <BreadcrumbLink to="/login" text="Iniciar sesión" icon={faUser} iconTwo={faAngleRight}  customClassName="" />
                  <BreadcrumbLink to="/signup" text="Crear cuenta" icon={faCircleUser} iconTwo={faAngleRight}  customClassName="" />
                </ul>
              </div>
            </div>
          </div>
          <div className="sec dark:bg-[#1e293b]">
            <div className="  dark:bg-[#1e293b]">
              <h2 className="my-3 mx-2 block dark:text-white text-xl ">Más</h2>
              <hr className="border-[#1876F2]" />
              <div className="list">
                <ul>
                  <BreadcrumbLink to="/somos" text="Quienes somos" icon={faLayerGroup} iconTwo={faAngleRight}  customClassName="" />                
                  <BreadcrumbLink to="/servicios" text="Servicios" icon={faCloud} iconTwo={faAngleRight}  customClassName="" />
                  <BreadcrumbLink to="/" text="Invensys" icon={faHeart} iconTwo={faAngleRight}  customClassName="" />
                 
                </ul>
              </div>
            </div>
          </div>
          <div className="sec">
            <div className="t">
              <h2 className="my-2 mx-2 block dark:text-white text-xl text-[18px]">
                Ayuda
              </h2>
              <hr className="border-[#1876F2]" />
              <div className="list">
                <ul>
                <BreadcrumbLink to="/contactanos" text="Contáctanos" icon={faAddressBook} iconTwo={faAngleRight}  customClassName="" />
                <BreadcrumbLink to="/" text="Servicio al cliente" icon={faHandshake} iconTwo={faAngleRight}  customClassName="" />
                <BreadcrumbLink to="/Ajustes" text="Servicio al cliente" icon={faGear} iconTwo={faAngleRight}  customClassName="" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hed_responsive">
        <header
          className=" sticky border-b-2 dark:border-b 
        dark:border-[#777777] 
        dark:bg-gradient-to-r from-[#163b59] from-10%
         via-[#18324f] via-30% to-[#121b2e] to-90% dark:text-white   border-gray-100
        flex w-full justify-around items-center   "
        >
          <div className=" flex  items-center">
            <div className="self_t lg:mr-4">
              <Link to="/">
                <LazyLoadImage src={logo} alt="" width={100} className="py-1" />
              </Link>
            </div>

            <div className="w-full">
              <nav className=" nav_header">
                <ul className=" m-0 sellf1 flex ">
                      <NavLinkCustomTwo to="/" customClassName="relative lik mx-2 p-1 text-[1.1rem] font-bold  dark:text-white text-cyan-900 todoFont" >
                      Inicio
                      </NavLinkCustomTwo>
                      <NavLinkCustomTwo to="/q" customClassName="relative lik mx-2 p-1 text-[1.1rem] font-bold  dark:text-white text-cyan-900 todoFont" >
                      Quiénes somos
                      </NavLinkCustomTwo>
                      <NavLinkCustomTwo to="/contactanos" customClassName="relative lik mx-2 p-1 text-[1.1rem] font-bold  dark:text-white text-cyan-900 todoFont" >
                      Contáctanos
                      </NavLinkCustomTwo>
                </ul>
              </nav>
            </div>
          </div>
          <div>
            <ul className="mx-2 flex dad">
              <NavLinkCustom to="/login" customClassName="py-2 relative dad1 text-[1.1rem] active font-bold dark:text-white text-cyan-900 truncate " customClassNamOne=" py-2 relative dad1 text-[1.1rem] lik font-bold dark:text-white text-cyan-900 truncate">
                Iniciar sesión
              </NavLinkCustom>
              <NavLinkCustom to="/signup" customClassName="truncate mx-4 border p-1.5 font-bold dark:text-white  text-[1.1rem] bg-[#1876F2] todoFont px-4 text-white
                     hover:bg-white dad1 duration-200 hover:text-[#1876F2] rounded-full border-[#1876F2]" customClassNamOne="truncate  text-cyan-900 dark:text-white mx-4 border dad1 font-bold  p-1.5 text-[1.1rem] todoFont px-4 hover:bg-[#1876F2] duration-200 hover:text-white rounded-full border-[#1876F2]">
               Crear cuenta
            </NavLinkCustom>
            </ul>
          </div>
        </header>
       
      </div>
    </div>
  );
};

export default Header;
