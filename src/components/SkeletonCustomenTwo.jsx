import Skeleton from 'react-loading-skeleton'

export const SkeletonCustomenTwo = () => {
  return (
    <div className="w-full md:w-9/12 mt-6 mx-2 h-full bg-white">
                <div
                  style={{
                    display: "block",

                    width: "100%",
                    height: "8rem",
                  }}
                >
                  <Skeleton height={"100%"} width={"100%"} />
                </div>

                <div className="mx-4 my-4  ">
                  <Skeleton
                    count={1}
                    width={"50%"}
                    className="rounded-full . overflow-hidden"
                  />
                </div>

                <div className="mx-4  ">
                  <Skeleton
                    count={6}
                    width={"70%"}
                    className="rounded-full . overflow-hidden"
                  />
                </div>
                <div className="mx-4 my-4  ">
                  <Skeleton
                    count={1}
                    width={"50%"}
                    className="rounded-full . overflow-hidden"
                  />
                </div>
                <div className="flex ml-3 gap-1">
                  <div className="text-center mb-4  ">
                    <Skeleton height={10} width={100} />
                  </div>
                  <div className="text-center mb-4  ">
                    <Skeleton height={10} width={100} />
                  </div>
                  <div className="text-center mb-4  ">
                    <Skeleton height={10} width={100} />
                  </div>
                  <div className="text-center mb-4  ">
                    <Skeleton height={10} width={100} />
                  </div>
                </div>
                <div className="mx-4  ">
                  <Skeleton
                    count={3}
                    width={"70%"}
                    className="rounded-full . overflow-hidden"
                  />
                </div>
                <div className="mx-4  ">
                  <Skeleton
                    count={3}
                    width={"50%"}
                    className="rounded-full . overflow-hidden"
                  />
                </div>
              </div>
  )
}
