
import moment from "moment-with-locales-es6";
import { SvgCalender, SvgClock, SvgClound, SvgGroups, SvgNotes, SvgNovendades, SvgOnline, SvgSettings, SvgSignup, Svgmessage } from "../svg/iconsSubmenu";
import { formatDate } from "../utils/UtilsMoments";
moment.locale("es");
export const SubMenu = () => {
 
  return (
    <div className="container_webk  ">
      <div className="container_webk__header shadow-lg flex justify-between items-center  m-3 rounded-md p-1 border bg-white">
       <div className="space-count flex items-center ">
       <section className="  p-1 flex w-fit mx-1 cursor-pointer">
        {Svgmessage(24,24,"#9AD29A")}
          <span className="mx-1" >Mensages</span>
        </section>
        <section className="  p-1 flex border-l px-2 w-fit cursor-pointer">
        {SvgGroups(24,24,"#409ADE")}
          <span className="mx-1" >Grupos</span>
        </section>
        <section className="  p-1 flex border-l px-2 w-fit cursor-pointer">
        {SvgNovendades(24,24,"#8F259E")}
          <span className="mx-1" >Novedades</span>
        </section>
        <section className="  p-1 flex border-l px-2 w-fit cursor-pointer">
        {SvgCalender(24,24,"#777")}
          <span className="mx-1" >Eventos</span>
        </section>
        <section className="  p-1 flex border-l px-2 w-fit cursor-pointer">
        {SvgClound(24,24,"#44b2fd")}
          <span className="mx-1" >Respaldo</span>
        </section>
        <section className="  p-1 flex border-l px-2 w-fit cursor-pointer">
        {SvgOnline(24,24,"#1dae1a")}
          <span className="mx-1" >En linea</span>
        </section>
        <section className="  p-1 flex border-l px-2 w-fit cursor-pointer">
        {SvgNotes(24,24,"#7279ce")}
          <span className="mx-1" >Notas</span>
        </section>
       </div>

       <div className="info flex items-center">
        <section className="p-1 flex border-l px-2 w-fit cursor-pointer">
          {SvgClock(24,24,"#bababa")}
        {formatDate.getFormatDateComplete(new Date())}
        </section>
        <section className="p-1 flex border-l px-2 w-fit cursor-pointer">
          {SvgSettings(24,24,"#bababa")}
          <span className="mx-1" >Ajustes</span>
        </section>
        <section className="p-1 flex border-l px-2 w-fit cursor-pointer">
          {SvgSignup(24,24,"#93d8fc")}
          <span className="mx-1" >Salir</span>
        </section>
       </div>
        </div>
    </div>
  

  );
};
