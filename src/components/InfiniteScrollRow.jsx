// import LogoItem from "./ui/logoItem";

// export default function InfiniteScrollRow({ items, direction, speed = "20s" }) {
//   const duplicatedItems = [...items, ...items, ...items, ...items];

//   return (
//     // <div className={`scroll-container ${direction}`}>
//     <div className={direction}>
//       <div className="scroller flex gap-8 py-2" style={{ "--speed": speed }}>
//         {duplicatedItems.map((item, index) => (
//           <LogoItem key={index} logo={item.logosrc} name={item.name} />
//         ))}
//       </div>
//     </div>
//   );
// }
import LogoItem from "./ui/logoItem";

export default function InfiniteScrollRow({ items, direction, speed = "20s" }) {
  // Duplicate items enough times to ensure smooth looping
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-2">
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
