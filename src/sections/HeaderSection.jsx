import Headline from "../ui/Headline";
import SubHeadline from "../ui/SubHeadline";
import Tagline from "../ui/tagline";
import ContactCTA from "../components/ContactCTA";

export default function HeaderSection() {
  return (
    <div className="mt-17 sm:mt-18 md:mt-20">
      <Headline />
      <SubHeadline />
      <Tagline />
      <ContactCTA />
    </div>
  );
}
