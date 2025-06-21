import { uiActions } from "../store/ui-slice";
import { useDispatch } from "react-redux";

export default function CertificateComp({
  name,
  certBy,
  certSrc,
  certThumbnail,
}) {
  const dispatch = useDispatch();

  const handleViewCertificate = () => {
    dispatch(uiActions.viewCertificate({ certSrc }));
  };

  return (
    <div className="mb-8 sm:mb-4">
      <div className=" aspect-[18/9] rounded-lg sm:rounded-xl overflow-hidden relative ">
        <img className="w-full" src={certThumbnail} alt={name} />
        <div className="absolute inset-0 hover:bg-black/70 transition-all ease-in-out"></div>
      </div>

      <p className="poppins-semibold text-sm xl:text-base mt-4">{name}</p>
      <div className="flex mt-1">
        <p className="poppins-regular text-sm xl:text-base">{`${certBy} |`}</p>
        <button className="poppins-regular text-sm xl:text-base underline" onClick={handleViewCertificate}>
          {` View`}
        </button>
      </div>
    </div>
  );
}
