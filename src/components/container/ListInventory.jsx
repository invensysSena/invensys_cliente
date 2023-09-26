import { useEffect, useMemo, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "../../components/NotificationsHeader/self.css";
import { Link } from "react-router-dom";
import { useInventario } from "../../hooks/context/ContextInventario";
import { IconsSvgLoading } from "../../svg/IconsSvgLoading";
import { serviceUsers } from "../../services/usersService";
export const ListInventory = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    inventario,

    GetInventario,
  } = useInventario();

  useEffect(() => {
    (async () => {
      setLoading(true);
      await GetInventario();
      await serviceUsers.getUsersAdmin({n:1});

      setLoading(false);
    })();
  }, []);
  let getEmail = sessionStorage.getItem("email");
  let getRol = sessionStorage.getItem("type");
  const CorreoRepetido = useMemo(
    () =>
      inventario.filter((item) => item.responsableInventory.includes(getEmail)),
    [inventario, getEmail]
  );

  console.log(CorreoRepetido);
  return (
    <div className="notf block effect_bluresT rounded-md bg-white dark:bg-[#37415197] px-3">
      <h2 className="mx-2 font-bold dark:text-white">Lista de Bodega</h2>

      {loading ? (
        <div className="m-4">
          <IconsSvgLoading w={27} h={27} />
        </div>
      ) : (
        <>
          {inventario.length > 0 ? (
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={4}
              centeredSlides={false}
              spaceBetween={5}
              pagination={{
                type: "swiper",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {getRol === "user" ? (
                <>
                  {CorreoRepetido.map((item) => (
                    <SwiperSlide key={item._id}>
                      <div>
                        <Link
                          to={`inventory/${item._id}`}
                          className="truncate dark:bg-[#314768] dark:text-white text-black p-3 rounded-lg bg-gray-100 "
                        >
                          dd
                          {item.name_inventory}
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
                </>
              ) : (
                <>
                  {inventario.map((item) => (
                    <SwiperSlide key={item._id}>
                      <Link
                        to={`inventory/${item._id}`}
                        className="truncate dark:bg-[#314768] dark:text-white p-3 rounded-lg bg-gray-100 "
                      >
                        {item.name_inventory}
                      </Link>
                    </SwiperSlide>
                  ))}
                </>
              )}
            </Swiper>
          ) : (
            <p className="mx-4 py-4 dark:text-white">
              No se encontraron Bodegas, crea una nueva bodega
            </p>
          )}
        </>
      )}
    </div>
  );
};
