import Headline from "../components/ui/Headline";
import SubHeadline from "../components/ui/SubHeadline";
import Tagline from "../components/ui/tagline";
import ContactCTA from "../components/ContactCTA";

export default function HeaderSection() {
  return (
    <div className=" py-20 pb-18">
      <Headline />
      <SubHeadline />
      <Tagline />
      <ContactCTA />
    </div>
  );
}
