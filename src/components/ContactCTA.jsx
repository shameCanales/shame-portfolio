import ContactIcon from "../ui/ContactIcon";
import { contactCTAs } from "../data";

export default function ContactCTA() {
  return (
    <div className="flex justify-center items-center gap-2 sm:gap-4 mt-4 sm:mt-5 sm:justify-start ">
      {contactCTAs.map((contact) => (
        <ContactIcon key={contact.name} src={contact.src} alt={contact.alt} />
      ))}
    </div>
  );
}
