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
      <div className="fixed w-full h-full top-0 left-0 bg-black/70 z-[3] flex items-center justify-center">
        <div className="relative">
          <img
            className="rounded-2xl w-[650px]"
            src={certImage}
            alt="this is a certificate"
          />
          <button
            className="poppins-bold absolute top-4 right-4 bg-[#463EB1] p-4 rounded-full"
            onClick={handleCloseCertificate}
          >
            <img className="w-[15px]" src={closeIcon} alt="" />
          </button>
        </div>
      </div>
    )
  );
}
