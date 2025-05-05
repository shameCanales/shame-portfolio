import Headline from "../components/ui/Headline";
import SubHeadline from "../components/ui/SubHeadline";
import Tagline from "../components/ui/Tagline";
import ContactCTA from "../components/ContactCTA";

export default function HeaderSection() {
  return (
    <div className="px-5 py-20">
      <Headline />
      <SubHeadline />
      <Tagline />
      <ContactCTA />
    </div>
  );
}
