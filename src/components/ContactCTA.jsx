import ContactIcon from "./ui/contactIcon";
import { contactCTAs } from "../data";

export default function ContactCTA() {
  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      {contactCTAs.map((contact) => (
        <ContactIcon key={contact.name} src={contact.src} alt={contact.alt} />
      ))}
    </div>
  );
}
