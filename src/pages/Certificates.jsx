import { certificates } from "../data";
import CertificateComp from "../components/CertificateComp";

export default function Certificates() {
  return (
    <>
      <div
        className="my-10 sm:my-5 grid sm:gap-4 md:gap-6
       grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
      >
        {certificates.map((cert) => (
          <CertificateComp
            key={cert.time}
            name={cert.name}
            certBy={cert.certifiedBy}
            src={cert.certSrc}
            platform={cert.platform}
            time={cert.time}
          />
        ))}
      </div>
    </>
  );
}
