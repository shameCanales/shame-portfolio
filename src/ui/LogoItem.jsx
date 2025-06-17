

export default function Logoitem({alt, logo, name }) {
  return (
    <>
      <div className="flex items-center justify-center py-0 px-4">
        <img className="w-4 sm:w-5 md:w-6 2xl:w-8 object-contain" src={logo} alt={alt} />
        <p className="ml-4 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl poppins-light text-stone-400">{name}</p>
      </div>
    </>
  );
}
