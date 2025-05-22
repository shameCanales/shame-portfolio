export default function CertificateComp({ name, certBy, src, platform, time }) {
  return (
    <div>
      <div className=" aspect-[18/9] rounded-lg overflow-hidden relative ">
        <img className="w-full" src={src} alt={name} />
        <div className="absolute inset-0 hover:bg-black/70 transition-all ease-in-out"></div>
      </div>

      <p className="poppins-semibold text-sm mt-4">{name}</p>
      <p className="poppins-regular text-sm mt-1">{certBy}</p>
      {/* <p className="poppins- text-sm mt-1 uppercase">
        {platform} - {time} HOURS
      </p> */}
    </div>
  );
}
