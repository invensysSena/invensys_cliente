import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo/logo peque.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  faSearch,
  faAngleRight,
  faHome,
  faUser,
  faCircleUser,
  faLayerGroup,
  faCloud,
  faHeart,
  faAddressBook,
  faHandshake,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import "../assets/css/fuente.css";
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
              className={
                show === true ? "menu_bar__item1 active  " : "menu_bar__item1 "
              }
            ></span>
            <span
              className={
                show === true ? "menu_bar__item2 active" : "menu_bar__item2"
              }
            ></span>
            <span
              className={
                show === true ? "menu_bar__item3 active" : "menu_bar__item3"
              }
            ></span>
          </div>
        </div>
      </div>
      <div
        className={
          show === true ? "lateralbg bg-white dark:bg-[#1e293b] relative " : ""
        }
        style={{
          zIndex: 1000,
        }}
      >
        <div
          className={
            show === true
              ? "menu_lateral activ_Lateral bg-white dark:bg-[#1e293b] "
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
                  <span
                    className={
                      show === true
                        ? "menu_bar__item1 active"
                        : "menu_bar__item1"
                    }
                  ></span>
                  <span
                    className={
                      show === true
                        ? "menu_bar__item2 active"
                        : "menu_bar__item2"
                    }
                  ></span>
                  <span
                    className={
                      show === true
                        ? "menu_bar__item3 active"
                        : "menu_bar__item3"
                    }
                  ></span>
                </div>
              </div>
              <hr />
              <div className="list">
                <ul>
                  <li>
                    <Link
                      to={"/"}
                      className="clup hover:bg-[#efefef] hover:text-black dark:hover:bg-[#374151] dark:hover:text-white bg-white dark:bg-transparent dark:text-white text-black  "
                    >
                      <span>
                        <FontAwesomeIcon
                          icon={faHome}
                          className="text-gray-400 text-xl"
                        />
                        <span className="ml-2 font-medium text-[18px]">
                          Inicio
                        </span>
                      </span>

                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className=" mx-3 text-gray-400 text-xl"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/login"}
                      className="clup hover:bg-[#efefef] hover:text-black dark:hover:bg-[#374151] dark:hover:text-white dark:bg-transparent dark:text-white text-black  "
                    >
                      <span>
                        {" "}
                        <FontAwesomeIcon
                          icon={faUser}
                          className="text-gray-400 text-xl "
                        />{" "}
                        <span className="ml-2 text-[18px]">Iniciar sesión</span>
                      </span>

                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className=" mx-3 text-gray-400 text-xl"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/signup"}
                      className="clup hover:bg-[#efefef] hover:text-black dark:hover:bg-[#374151] dark:hover:text-white  dark:bg-transparent dark:text-white text-black "
                    >
                      <span>
                        <FontAwesomeIcon
                          icon={faCircleUser}
                          className="text-gray-400 text-xl  "
                        />{" "}
                        <span className="ml-2 font-medium text-[18px]">
                          Crear cuenta
                        </span>
                      </span>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className=" mx-3 text-gray-400 text-xl"
                      />
                    </Link>
                  </li>
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
                  <li>
                    <Link
                      to={"/somos"}
                      className="clup hover:bg-[#efefef] hover:text-black dark:hover:bg-[#374151] dark:hover:text-white "
                    >
                      <span>
                        {" "}
                        <FontAwesomeIcon
                          icon={faLayerGroup}
                          className="text-gray-400 text-xl"
                        />{" "}
                        <span className="ml-2 font-medium dark:text-white text-[18px]">
                          Quienes somos
                        </span>{" "}
                      </span>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className=" mx-3 text-gray-400 text-xl"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/servicios"}
                      className="clup  hover:bg-[#efefef] hover:text-black dark:hover:bg-[#374151] dark:hover:text-white "
                    >
                      <span>
                        {" "}
                        <FontAwesomeIcon
                          icon={faCloud}
                          className="text-gray-400"
                        />{" "}
                        <span className=" ml-2 font-medium dark:text-white text-[18px]">
                          Servicios
                        </span>
                      </span>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className=" mx-3 text-gray-400 text-xl"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      className="clup   hover:bg-[#efefef] hover:text-black dark:hover:bg-[#374151] dark:hover:text-white"
                    >
                      <span>
                        {" "}
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="text-gray-400 text-xl"
                        />
                        <span className=" ml-2 font-medium dark:text-white text-[18px]">
                          {" "}
                          Invensys
                        </span>{" "}
                      </span>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className=" mx-3 text-gray-400 text-xl"
                      />
                    </Link>
                  </li>
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
                  <li
                    className="
            "
                  >
                    <Link
                      to={"/contactanos"}
                      className="clup  hover:bg-[#efefef] hover:text-black dark:hover:bg-[#374151] dark:hover:text-white"
                    >
                      <span>
                        {" "}
                        <FontAwesomeIcon
                          icon={faAddressBook}
                          className="text-gray-400 text-xl "
                        />{" "}
                        <span className=" ml-2 font-medium dark:text-white text-[18px]">
                          {" "}
                          Contáctanos
                        </span>
                      </span>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className=" mx-3 text-gray-400 text-xl"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      className="clup hover:bg-[#efefef] hover:text-black dark:hover:bg-[#374151] dark:hover:text-white"
                    >
                      <span>
                        <FontAwesomeIcon
                          icon={faHandshake}
                          className="text-gray-400 text-xl "
                        />{" "}
                        <span className=" ml-2 font-medium dark:text-white text-[18px]">
                          Servicio al cliente
                        </span>
                      </span>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className=" text-gray-400 text-xl  mx-3"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      className="clup hover:bg-[#efefef] hover:text-black dark:hover:bg-[#374151] dark:hover:text-white"
                    >
                      <span>
                        {" "}
                        <FontAwesomeIcon
                          icon={faGear}
                          className="text-gray-400 text-xl "
                        />{" "}
                        <span className=" ml-2 font-medium dark:text-white text-[18px]">
                          Ajustes
                        </span>
                      </span>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className=" mx-3 text-gray-400 text-xl"
                      />
                    </Link>
                  </li>
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
                  <li className="relative lik p-1 mx-2 text-[1.1rem] dark:text-white text-cyan-900 todoFont">
                    <NavLink
                      to="/"
                      className="nav-item font-bold   inline-block relative "
                    >
                      Inicio
                    </NavLink>
                  </li>
                  <li
                    className="relative lik mx-2 p-1 text-[1.1rem] dark:text-white text-cyan-900 todoFont"
                    onClick={() => setViews(!views)}
                  >
                    <span className="nav-item cursor-pointer font-bold hidden lg:inline-block    relative ">
                      Servicios
                    </span>
                  </li>
                  <li className="relative lik mx-2 p-1 text-[1.1rem] dark:text-white text-cyan-900 todoFont">
                    <NavLink
                      to="/somos"
                      className="nav-item font-bold  inline-block relative truncate "
                    >
                      Quiénes somos
                    </NavLink>
                  </li>
                  <li className="relative lik mx-2 p-1 text-[1.1rem] font-bold  dark:text-white text-cyan-900 todoFont">
                    <NavLink
                      to="/contactanos"
                      className="nav-item  inline-block relative  "
                    >
                      Contáctanos
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className=" ">
            <form>
              <div className="inpit w-full lg:w-80 rounded-lg shadow-md border dark:border-[#019afa] border-gray-300 items-center  px-2  flex">
                <div className="w-full">
                  <input
                    type="text"
                    name="search"
                    placeholder="Búsqueda rápida... "
                    className=" block w-full px-2 py-2 bg-transparent
                  text-cyan-900 
                  outline-none"
                  />
                </div>
                <div className="sea">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-gray-300 text-xl  top-1 block"
                  />
                </div>
              </div>
            </form>
          </div>
          <div>
            <ul className="mx-2 flex dad">
              <li className=" ">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? " py-2 relative dad1 text-[1.1rem] active font-bold dark:text-white text-cyan-900 truncate "
                      : " py-2 relative dad1 text-[1.1rem] lik font-bold dark:text-white text-cyan-900 truncate "
                  }
                >
                  Iniciar sesión
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive
                      ? `truncate mx-4 border p-1.5 font-bold dark:text-white  text-[1.1rem] bg-[#1876F2] todoFont px-4 text-white
                     hover:bg-white dad1 duration-200 hover:text-[#1876F2] rounded-full border-[#1876F2]`
                      : "truncate  text-cyan-900 dark:text-white mx-4 border dad1 font-bold  p-1.5 text-[1.1rem] todoFont px-4 hover:bg-[#1876F2] duration-200 hover:text-white rounded-full border-[#1876F2]"
                  }
                >
                  Crear cuenta
                </NavLink>
              </li>
            </ul>
          </div>
        </header>
        <div
          className={
            views
              ? "opacity-100 block duration-200 z-50 relative "
              : " relative z-50 duration-200 opacity-0 hidden"
          }
        >
          <div className="fixed bg-white w-screen top-[]  shadow-2xl">
            <div
              id="mega-menu-full-image-dropdown"
              className="mt-1 bg-white border-gray-200 shadow-sm  dark:bg-gray-800 dark:border-gray-600"
            >
              <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
                <ul
                  className="hidden mb-4 space-y-4 md:mb-0 md:block"
                  aria-labelledby="mega-menu-full-image-button"
                >
                  <li>
                    <a
                      href="/"
                      className="flex items-center gap-1 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="currentColor"
                          d="M19 24h4v4h-4zm7 0h4v4h-4zm-7-7h4v4h-4zm7 0h4v4h-4z"
                        />
                        <path
                          fill="currentColor"
                          d="M17 24H4V10h24v5h2v-5a2.002 2.002 0 0 0-2-2h-6V4a2.002 2.002 0 0 0-2-2h-8a2.002 2.002 0 0 0-2 2v4H4a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h13ZM12 4h8v4h-8Z"
                        />
                      </svg>
                      Bodegas
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="gap-1 flex items-centerhover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m15.5 19.925l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4l-7.05 7.05ZM21 10h-2V5h-2v3H7V5H5v14h6v2H5q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h4.175q.275-.875 1.075-1.438T12 1q1 0 1.788.563T14.85 3H19q.825 0 1.413.588T21 5v5Zm-9-5q.425 0 .713-.288T13 4q0-.425-.288-.713T12 3q-.425 0-.713.288T11 4q0 .425.288.713T12 5Z"
                        />
                      </svg>
                      Inventarios
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="flex items-center gap-1 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          d="M5 11h3v5H5v-5zm-4 3h3v2H1v-2zm12-2h3v4h-3v-4zM9 9h3v7H9V9zm7-8.93l-5.68 4.97l-5.47-1.7L0 7.1V9l5.15-4l5.53 1.72L16 2.06V.07z"
                        />
                      </svg>
                      Estadisticas y reportes
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="flex items-center gap-1 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M376 160v32h65.372L252 381.373l-72-72L76.686 412.686l22.628 22.628L180 354.627l72 72l212-211.999V280h32V160H376z"
                        />
                        <path
                          fill="currentColor"
                          d="M48 104H16v392h480v-32H48V104z"
                        />
                      </svg>
                      Dashboard
                    </a>
                  </li>
                </ul>
                <ul className="mb-4 space-y-4 md:mb-0">
                  <li>
                    <a
                      href="/"
                      className=" flex items-center gap-1 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14.67 6v4.5c0 .55-.45 1-1 1h-3.33c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h3.33c.55 0 1 .45 1 1zm2 5.5H20c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-3.33c-.55 0-1 .45-1 1v4.5c0 .55.44 1 1 1zm-2 6.5v-4.5c0-.55-.45-1-1-1h-3.33c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h3.33c.55 0 1-.45 1-1zm1-4.5V18c0 .55.45 1 1 1H20c.55 0 1-.45 1-1v-4.5c0-.55-.45-1-1-1h-3.33c-.56 0-1 .45-1 1zm-8.34-1H4c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h3.33c.55 0 1-.45 1-1v-4.5c0-.55-.44-1-1-1zm1-2V6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4.5c0 .55.45 1 1 1h3.33c.56 0 1-.45 1-1z"
                        />
                      </svg>
                      Modulos
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="flex items-center gap-1 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19 17v2H7v-2s0-4 6-4s6 4 6 4m-3-9a3 3 0 1 0-3 3a3 3 0 0 0 3-3m3.2 5.06A5.6 5.6 0 0 1 21 17v2h3v-2s0-3.45-4.8-3.94M18 5a2.91 2.91 0 0 0-.89.14a5 5 0 0 1 0 5.72A2.91 2.91 0 0 0 18 11a3 3 0 0 0 0-6M8 10H5V7H3v3H0v2h3v3h2v-3h3Z"
                        />
                      </svg>
                      Usuarios
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="flex items-center gap-1 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M328.9 17.89h-1.8c-8.2.27-18.6 2.98-31.8 8.59L59.61 126.4c-21.18 8.9-31.79 17.7-35.74 27.5c-3.95 9.7-2.41 23.4 6.57 44.6l49.95 117.8c8.97 21.2 17.72 31.8 27.51 35.7c9.7 4 23.4 2.5 44.6-6.5l235.7-99.9c13.5-5.7 22.7-11.3 28.6-17.2c4.5 5.5 8.7 11.6 12.2 18.2c3.8 7 6.8 14.4 8.9 21.8c-2.5-.3-5.1-.4-7.7-.4c-14.1.3-28.1 5.7-39.2 16.2c-20.6 19.6-24.2 50.4-10.1 73.8l-50.2 47.7l-22-5.9l.8 26.1l-27.4-.8l-2.6 29.4l-23.7-4.4l4.6 22.5l-17 21.5l62.8-10.9l104.9-100c20.2 7.5 43.7 3.4 60.5-12.6c23.7-22.5 24.9-59.9 2.5-83.9c-4.9-5.2-10.4-9.3-16.4-12.3c-2.1-12.5-6.7-24.9-12.8-36.3c-5.4-10-11.9-19.3-19.2-27c1.1-9.1-1.4-21.1-8.4-37.6L367.4 55.67c-8.9-21.17-17.7-31.78-27.5-35.74c-3.2-1.3-6.8-2-11-2.04zm-15.6 50.96l7 16.58l-132.6 56.17l-7-16.6zm14.9 38.25l7 16.6l-73.7 31.2l-7-16.6zm-189.7 18.4L208 289.4l-90.3 38.2L51.81 172l-3.51-8.3zm206 17l7 16.6l-88.4 37.4l-7-16.6zm-215.6 6.6l-57 24.2L127.3 304l57.1-24.2zm255.7 25c13.1 0 23.9 10.3 24.9 23.1c-8.9-6-18.7-9.6-28.6-8.9c-1.7.1-3.4.3-5.1.7l4 17.6c6-1.4 14.6 1.2 23.8 8.5c0 0 .1 0 .1.1c-4.6 5.4-11.5 8.9-19.1 8.9c-13.7 0-25-11.3-25-25s11.3-25 25-25zm53.7 120.1c.8 0 1.6 0 2.4.1c-.9 8.9-4.1 16.5-10.1 22.5l12.6 12.8c7.7-7.7 12.3-17.1 14.4-27.2c9.7 10.5 9.2 27.1-1.1 36.9c-10.4 9.9-26.9 9.4-36.6-1c-9.8-10.5-9.2-27.2 1.1-37c4.9-4.6 11.1-6.9 17.3-7.1z"
                        />
                      </svg>
                      Licencia
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="flex items-center gap-1 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M18.4 10.6C16.55 9 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6Z"
                        />
                      </svg>
                      Ver más
                    </a>
                  </li>
                </ul>
                <a
                  href="/"
                  className="p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
                  style={{
                    backgroundImage:
                      " url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCS6lz-OExYgKy5JMfuLX8O0BvyWX7T2spCgmJKPlQPL82kjSqY62f7v3b8BagxAW1yJs&usqp=CAU')",
                  }}
                >
                  <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">
                    Disfruta de la mejor experiencia de nuestros servicios
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
                  >
                    Ver más
                    <svg
                      className="w-4 h-4 ml-1 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
