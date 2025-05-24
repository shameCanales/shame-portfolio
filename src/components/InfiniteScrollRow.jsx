import LogoItem from "../ui/logoItem";

export default function InfiniteScrollRow({ items, direction, speed = "20s" }) {
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-2 sm:py-4">
      <div
        className={`flex gap-8 w-max ${
          direction === "right"
            ? "animate-marquee-right"
            : "animate-marquee-left"
        }`}
        style={{ animationDuration: speed }}
      >
        {duplicatedItems.map((item, index) => (
          <LogoItem
            key={index}
            logo={item.logosrc}
            name={item.name}
            alt={item.name}
          />
        ))}
      </div>
    </div>
  );
}
