
export const NavlinkCustomenTrae = ({name,children}) => {
  return (
    <div
    className="flex flex-col items-start justify-center rounded-2xl 
  dark:bg-[#374151] dark:text-white
   bg-white bg-clip-border px-3 p-1 md:py-4 shadow-3xl  shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
  >
    <p className="text-sm text-gray-600 dark:text-white">
      {name}
    </p>
    <p className="text-base font-medium text-navy-700 ">
      {children}
    </p>
  </div>
  )
}
