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
    <section className="relative overflow-hidden border-y border-black/5 bg-gradient-to-r from-[#f0f0f5] via-[#e8f0fe] to-[#f0f0f5] py-5 sm:py-7">
      {/* Label */}
      <div className="mb-3 text-center sm:mb-4">
        <span className="inline-block rounded-full bg-[#0071e3]/[0.08] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#0071e3] sm:px-5 sm:text-sm">
          Khách hàng tiêu biểu
        </span>
      </div>

      {/* Gradient fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f0f0f5] via-[#f0f0f5]/80 to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f0f0f5] via-[#f0f0f5]/80 to-transparent sm:w-32" />

      <motion.div
        ref={containerRef}
        className="flex animate-marquee gap-10 whitespace-nowrap sm:gap-14"
        style={{ width: "max-content" }}
      >
        {tickerItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-[15px] font-semibold text-[#1d1d1f] sm:gap-4 sm:text-lg"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#0071e3] sm:h-3 sm:w-3" />
            <span>{item}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
