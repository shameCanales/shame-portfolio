export default function CertificateComp({ name, certBy, src, platform }) {
  return (
    <div>
      <div className=" aspect-[18/9] border-2 rounded-xl overflow-hidden relative ">
        <img className="" src={src} alt={name} />
        <div className="absolute inset-0 hover:bg-black/70 transition-all ease-in-out"></div>
      </div>

      <p className="poppins-semibold text-sm mt-4">{name}</p>
      <p className="poppins-regular text-sm mt-1">{certBy}</p>
    </div>
  );
}
