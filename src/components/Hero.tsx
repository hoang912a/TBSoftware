import { motion } from "framer-motion";
import { PlayCircleIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

const badges = [
  "Triển khai nhanh",
  "Bảo hành dài hạn",
  "Không phí ẩn",
  "Tùy chỉnh 100%",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-gradient-to-b from-white via-white to-[#f5f5f7] px-4 pt-20 sm:px-6 lg:px-8">
      {/* Subtle background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-[#0071e3]/[0.015] blur-3xl sm:-left-40 sm:-top-40 sm:h-[500px] sm:w-[500px]" />
        <div className="absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full bg-[#af52de]/[0.015] blur-3xl sm:-bottom-40 sm:-right-40 sm:h-[500px] sm:w-[500px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-extrabold tracking-tight text-[#1d1d1f] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Không có doanh nghiệp nào
            <br />
            giống <span className="text-gradient">doanh nghiệp nào</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#86868b] sm:mt-6 sm:max-w-2xl sm:text-lg lg:text-xl"
          >
            Chúng tôi phát triển phần mềm theo yêu cầu, được thiết kế riêng cho
            quy trình và mục tiêu kinh doanh của bạn. Không giải pháp đóng hộp,
            không ràng buộc không cần thiết.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
          >
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#0071e3] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#0077ed] hover:shadow-xl hover:shadow-[#0071e3]/25 active:scale-95 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
            >
              Đặt lịch tư vấn
            </a>
            <a
              href="#showcase"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1d1d1f] shadow-soft ring-1 ring-black/8 transition-all hover:ring-black/15 active:scale-95 sm:w-auto sm:px-8 sm:py-3.5 sm:text-base"
            >
              <PlayCircleIcon className="h-4 w-4 text-[#0071e3] sm:h-5 sm:w-5" />
              Xem demo
            </a>
          </motion.div>

          {/* Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-12 sm:gap-3"
          >
            {badges.map((badge) => (
              <div
                key={badge}
                className="inline-flex items-center gap-1 rounded-full border border-black/5 bg-white px-3 py-1.5 text-xs font-medium text-[#86868b] shadow-soft sm:gap-1.5 sm:px-4 sm:py-2 sm:text-sm"
              >
                <CheckBadgeIcon className="h-3.5 w-3.5 text-[#34c759] sm:h-4 sm:w-4" />
                {badge}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
