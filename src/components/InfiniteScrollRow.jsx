import LogoItem from "./ui/logoItem";

export default function InfiniteScrollRow({ items, direction, speed = "20s" }) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className={`scroll-container ${direction}`}>
      <div className="scroller" style={{ "--speed": speed }}>
        {duplicatedItems.map((item, index) => (
          <LogoItem key={index} logo={item.logosrc} name={item.name} />
        ))}
      </div>
    </div>
  );
}
