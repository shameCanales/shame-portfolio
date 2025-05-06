

export default function Logoitem({alt, logo, name }) {
  return (
    <>
      <div className="flex items-center justify-center py-0 px-4">
        <img className="w-4 object-contain" src={logo} alt={alt} />
        <p className="ml-4 text-xs poppins-light text-stone-50">{name}</p>
      </div>
    </>
  );
}
