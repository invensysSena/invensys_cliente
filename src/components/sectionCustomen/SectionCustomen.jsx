import { LazyLoadImage } from "react-lazy-load-image-component"
export const SectionCustomen = ({classCustomen, effect,imagen,children}) => {
    return (
        <section
        className={`bg-white dark:text-white dark:bg-[#37415197] w-full  flex flex-col items-center  md:mx-0 rounded shadow-2xl cursor-pointer p-1 ${classCustomen}`}
        data-aos={effect}
    >
        <div className="relative ">
        <LazyLoadImage
            className=" w-56 md:w-full"
            src={imagen}
            alt="stored"
            effect="blur"
        />
        </div>
        <div className="    ">
        <p className="text-gray-800 dark:text-white rounde-sm  mx-3 text-center text-xl border-t border-t-slate-200">
            {children}
        </p>
        </div>
    </section>
    )
    }