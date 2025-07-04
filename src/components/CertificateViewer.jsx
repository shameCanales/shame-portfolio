import { uiActions } from "../store/ui-slice";
import { useSelector, useDispatch } from "react-redux";
import closeIcon from "../assets/icons/close.png";

export default function CertificateViewer() {
  const dispatch = useDispatch();

  const isCertificateViewerOpen = useSelector(
    (state) => state.ui.viewCertificateIsOpen
  );

  const certImage = useSelector((state) => state.ui.certificateImage);

  const handleCloseCertificate = () => {
    dispatch(uiActions.closeCertificate());
  };

  return (
    isCertificateViewerOpen && (
      <div className="fixed px-4 w-full h-full top-0 left-0 bg-black/70 z-[3] flex items-center justify-center">
        <div className="relative sm:max-w-[600px] md:max-w-[630px] lg:max-w-[760px] xl">
          <img
            className="rounded-xl md:rounded-2xl"
            src={certImage}
            alt="this is a certificate"
          />
          <button
            className="poppins-bold absolute top-4 md:top-6 right-4 md:right-6 bg-[#463EB1] p-2 sm:p-3 lg:p-4 rounded-full"
            onClick={handleCloseCertificate}
          >
            <img className="w-[10px] sm:w-[13px] lg:w-[15px]" src={closeIcon} alt="" />
          </button>
        </div>
      </div>
    )
  );
}
