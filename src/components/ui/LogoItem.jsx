

export default function Logoitem({alt, logo, name }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-0 px-4">
        <img className="w-12 h-12 object-contain" src={logo} alt={alt} />
        <p>{name}</p>
      </div>
    </>
  );
}
