import React from "react";
import "../assets/css/somos.css";
import Header from "../components/Header";
export const Somos = () => {
  return (
    <>
      <Header />
      <main className="content-k max-w-7xl flex  mx-4 my-12 md:mx-auto ">
        <div className="contten-1 mk-kodiar">
          <div className="title">
            <h1 className="my-4 text-xl font-bold dark:text-white">
              ¿Quienes Somos?
            </h1>
          </div>

          <div className="description">
            <article className="my-6">
              <p className="p dark:text-white">
                Invensys, creada en 2022, es una aplicación dedicada a la
                prestacion de servicios de Admistración, soportada con
                infraestructura tecnica y tecnologica, capaz de brindar a
                nuestros usuarios calidad en la prestación de sus servicios.
              </p>
              <p className="p dark:text-white">
                A través de la prestación de nuestros servicios de
                Administración hemos logrado intoducir a las tiendas de la
                ciudad de Armenia a tener un manejo permanente de su inventario
                cuidadosamente para satisfacer las necesidades y expectativas de
                todos los miembros de esta comunidad, logrando asi consolidar y
                posicionar este servicio.
              </p>
            </article>
          </div>

          <div className="mision">
            <div className="title-3">
              <h2 className="my-4 text-xl font-bold dark:text-white">
                Nuestra Misión
              </h2>
            </div>
            <article>
              <p className="my-6 dark:text-white">
                Crear un producto de software que responda, evolucione y
                potencie el negocio de nuestros clientes y sus oportunidades en
                el mercado, siempre basados en nuestros valores
                empresariales.Fortalecer la Industria del Software creando
                empleo y mejorando las capacidades de otras industrias.
              </p>
            </article>
          </div>

          <div className="vision">
            <h2 className="my-4 text-xl font-bold dark:text-white">
              Nuestra Visión
            </h2>

            <p className="dark:text-white">
              Identificarnos como uno de los mejores proyectos de Software
              Nacional con la confianza de las empresas con mayor crecimiento en
              rentas en las principales ciudades de Colombia.
            </p>
          </div>

          <div className="valores">
            <h2 className="my-4 text-xl font-bold dark:text-white">
              Nuestros Valores
            </h2>

            <p className="p dark:text-white">
              El compromiso, la ética y el profesionalismo en todas nuestras
              acciones.
            </p>

            <p className="p dark:text-white">
              El equipo Stored es liderado por un grupo de 5 desarrolladores
              expertos en la creación de código limpio y eficiente capaces de
              realizar Pruebas y despliegue de programas y sistemas, que hacen
              que la existencia de Stored sea posible.
            </p>
          </div>
        </div>
        <div className="conten-2 flex justify-center items-center">
          <img
            src="https://raw.githubusercontent.com/klayngo/backendKodiar/master/public/image/contactanos.jpg"
            alt="Kodiar"
            title="Kodiar"
          />
        </div>
      </main>
    </>
  );
};
