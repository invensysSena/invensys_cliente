export const SectionCustomenOne = ({message,children}) => {
  return (
    <section className="bg-white dark:border-[#777777] dark:bg-[#37415197] border mb-6 shadow-md mt-2 w-[90%] mx-auto rounded-lg p-2 ">
              <h2 className="text-xl font-bold dark:text-white">
                {message}
              </h2>
              <p className="dark:text-white">
                {children}
              </p>
            </section>
  )
}
