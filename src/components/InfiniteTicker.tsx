import { useRef } from "react";
import { motion } from "framer-motion";

const tickerItems = [
  "Startup",
  "Agency",
  "Spa",
  "Nhà hàng",
  "Kho vận",
  "Shop Online",
  "Doanh nghiệp SME",
  "Nhà phân phối",
  "Freelancer",
  "Startup",
  "Agency",
  "Spa",
  "Nhà hàng",
  "Kho vận",
  "Shop Online",
  "Doanh nghiệp SME",
  "Nhà phân phối",
  "Freelancer",
];

export default function InfiniteTicker() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden border-y border-black/5 bg-[#fafafa] py-4 mt-16 sm:mt-20">
      <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#fafafa] to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#fafafa] to-transparent" />

      <motion.div
        ref={containerRef}
        className="flex animate-marquee gap-8 whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {tickerItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-sm font-medium text-[#86868b]"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#0071e3]" />
            <span>{item}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
