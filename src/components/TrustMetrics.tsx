import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Dự án đã triển khai", value: 150, suffix: "+" },
  { label: "Khách hàng hài lòng", value: 98, suffix: "%" },
  { label: "Ngày triển khai TB", value: 45, suffix: "" },
  { label: "Tỷ lệ giữ chân KH", value: 95, suffix: "%" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="counter-number text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-4xl lg:text-5xl xl:text-6xl"
    >
      {count}
      <span className="text-gradient">{suffix}</span>
    </div>
  );
}

export default function TrustMetrics() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="badge-apple">Số liệu</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1d1d1f] sm:mt-6 sm:text-4xl lg:text-5xl">
            Chúng tôi được tin tưởng bởi
            <br />
            <span className="text-gradient">hàng trăm doanh nghiệp</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-xs font-medium text-[#86868b] sm:mt-3 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#0071e3]/[0.03] to-transparent blur-3xl sm:h-[600px] sm:w-[600px]" />
    </section>
  );
}
