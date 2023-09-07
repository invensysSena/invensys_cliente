import Skeleton from "react-loading-skeleton";
import "../assets/css/styleSlider.css";
export const LoadingSkeleton = () => {
  return (
    <div className="c_perfil z-10 bg-white dark:bg-[#374151] w-96 rounded-lg relative  mr-5  mt-6 overflow-hidden">
      <div
        style={{
          display: "block",

          width: "100%",
          height: "8rem",
        }}
      >
        <Skeleton height={"100%"} width={"100%"} />
      </div>

      <div className="text-center mb-4 mt-[-3rem] ">
        <Skeleton height={100} width={100} circle={true} />
      </div>
      <div className="mx-4 my-4  ">
        <Skeleton
          count={1}
          width={"50%"}
          className="rounded-full bg-gray-200 overflow-hidden"
        />
      </div>

      <div className="mx-4  ">
        <Skeleton
          count={6}
          width={"70%"}
          className="rounded-full bg-gray-200 overflow-hidden"
        />
      </div>
      <div className="mx-4 my-4  ">
        <Skeleton
          count={1}
          width={"50%"}
          className="rounded-full bg-gray-200 overflow-hidden"
        />
      </div>
      <div className="flex ml-3 gap-1">
        <div className="text-center mb-4  ">
          <Skeleton height={50} width={50} circle={true} />
        </div>
        <div className="text-center mb-4  ">
          <Skeleton height={50} width={50} circle={true} />
        </div>
        <div className="text-center mb-4  ">
          <Skeleton height={50} width={50} circle={true} />
        </div>
        <div className="text-center mb-4  ">
          <Skeleton height={50} width={50} circle={true} />
        </div>
      </div>
      <div className="mx-4  ">
        <Skeleton
          count={3}
          width={"70%"}
          className="rounded-full  overflow-hidden"
        />
      </div>
    </div>
  );
};
