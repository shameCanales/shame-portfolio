import Headline from "../ui/Headline";
import SubHeadline from "../ui/SubHeadline";
import Tagline from "../ui/Tagline";
import ContactCTA from "../components/ContactCTA";
import downArrow from '../assets/icons/down-arrow.png'

export default function HeaderSection() {
  return (
    <div className="mt-17 sm:mt-18 md:mt-20 lg:mt-0 lg:flex lg:flex-col lg:justify-between">
      <div>
        <Headline />
        <SubHeadline />
        <Tagline />
        <ContactCTA />
      </div>

      <div className="hidden lg:flex items-center">
        <img className="w-14 h-14 mb-4 ml-[-16px] animate-bounce" src={downArrow} alt="" />
        <p className="inter-regular text-base mb-4 leading-6">
          SCROLL DOWN <br />
          TO <span className="inter-bold text-[#463EB1]">SEE MORE!</span>
        </p>
      </div>
    </div>
  );
}
