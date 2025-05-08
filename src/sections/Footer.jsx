import { footerLinks } from "../data";

export default function Footer() {
  return (
    <div className="mt-4 py-8 px-4 text-center bg-slate-900 text-stone-50">
      <p className="poppins-light text-xs">DevShame@2025</p>
      <div className="flex gap-4 mt-4 justify-center">
        {footerLinks.map((item) => (
          <a href={item.link}>
            <img className="w-5" src={item.src} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
}
