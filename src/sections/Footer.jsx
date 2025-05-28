import { footerLinks } from "../data";

export default function Footer() {
  return (
    <div className="mt-6 sm:mt-10 py-8 px-4 text-center bg-slate-900 text-stone-50">
      <p className="poppins-light text-xs sm:text-sm">DevShame@2025</p>
      <div className="flex gap-4 sm:gap-5 mt-4 justify-center">
        {footerLinks.map((item) => (
          <a href={item.link} key={item.src}>
            <img className="w-5 sm:w-6" src={item.src} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
}
