import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UsersIcon,
  CubeIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  SparklesIcon,
  HomeModernIcon,
  LockClosedIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const industries = [
  {
    id: "crm",
    label: "CRM",
    icon: UsersIcon,
    color: "from-blue-500 to-blue-600",
    title: "Quản lý khách hàng & bán hàng",
    metrics: ["1,250 KH", "85 GD/ngày", "+12% DT"],
  },
  {
    id: "warehouse",
    label: "Kho vận",
    icon: CubeIcon,
    color: "from-green-500 to-green-600",
    title: "Quản lý kho & vận chuyển",
    metrics: ["3,400 SKU", "98% CX", "24h GH"],
  },
  {
    id: "hrm",
    label: "Nhân sự",
    icon: UserGroupIcon,
    color: "from-purple-500 to-purple-600",
    title: "Quản lý nhân sự & chấm công",
    metrics: ["120 NV", "TĐH 90%", "Lương RT"],
  },
  {
    id: "restaurant",
    label: "Nhà hàng",
    icon: ShoppingBagIcon,
    color: "from-orange-500 to-orange-600",
    title: "Quản lý nhà hàng & order",
    metrics: ["45 bàn", "200+ món", "POS TH"],
  },
  {
    id: "spa",
    label: "Spa",
    icon: SparklesIcon,
    color: "from-pink-500 to-pink-600",
    title: "Quản lý spa & lịch hẹn",
    metrics: ["15 NV", "98% GC", "BK 24/7"],
  },
  {
    id: "realestate",
    label: "BĐS",
    icon: HomeModernIcon,
    color: "from-teal-500 to-teal-600",
    title: "Quản lý bất động sản",
    metrics: ["320 CH", "50+ DA", "CRM TH"],
  },
];

export default function InteractiveShowcase() {
  const [unlocked, setUnlocked] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const [sliderX, setSliderX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbSize = 40;
  const trackPadding = 4;

  const getMaxTravel = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 200;
    return track.getBoundingClientRect().width - thumbSize - trackPadding * 2;
  }, []);

  const handleUnlock = useCallback(() => {
    if (sliderX >= 1) {
      setUnlocked(true);
      setSliderX(1);
    }
  }, [sliderX]);

  const handleDragEnd = useCallback(() => {
    setDragging(false);
    const maxTravel = getMaxTravel();
    const currentPx = sliderX * maxTravel;
    if (currentPx >= maxTravel * 0.95) {
      setSliderX(1);
      setUnlocked(true);
    } else {
      setSliderX(0);
    }
  }, [sliderX, getMaxTravel]);

  const updateSlider = useCallback(
    (clientX: number) => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const maxTravel = rect.width - thumbSize - trackPadding * 2;
      const rawX = clientX - rect.left - trackPadding - thumbSize / 2;
      const clampedX = Math.max(0, Math.min(rawX, maxTravel));
      const progress = clampedX / maxTravel;
      setSliderX(progress);
      if (progress >= 0.98) {
        setSliderX(1);
        setUnlocked(true);
        setDragging(false);
      }
    },
    [thumbSize, trackPadding],
  );

  const handleTrackMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!dragging || unlocked) return;
      updateSlider(e.clientX);
    },
    [dragging, unlocked, updateSlider],
  );

  const handleTrackTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (unlocked) return;
      setDragging(true);
      updateSlider(e.touches[0].clientX);
    },
    [unlocked, updateSlider],
  );

  const currentIndustry =
    industries.find((i) => i.id === activeIndustry.id) || industries[0];

  const thumbLeftPx = sliderX * getMaxTravel();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1d1d1f] to-[#2d2d30] py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0071e3]/30 via-transparent to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center sm:mb-12"
        >
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-sm">
            Trải nghiệm tương tác
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl">
            Xem hệ thống
            <br />
            <span className="text-gradient">hoạt động thực tế</span>
          </h2>
        </motion.div>

        <div className="mac-window mx-auto overflow-hidden rounded-2xl sm:rounded-[28px]">
          <div className="flex items-center gap-1.5 border-b border-black/5 px-3 py-2.5 sm:gap-2 sm:px-5 sm:py-3">
            <button
              onClick={() => {
                setUnlocked(false);
                setSliderX(0);
              }}
              className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] transition-transform hover:scale-125 sm:h-3 sm:w-3"
              aria-label="Khóa màn hình"
            />
            <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e] sm:h-3 sm:w-3" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#28c840] sm:h-3 sm:w-3" />
            <div className="ml-2 text-[11px] font-medium text-[#86868b] sm:ml-3 sm:text-xs">
              {activeIndustry.label} Dashboard
            </div>
          </div>

          <div
            className="relative overflow-hidden bg-white"
            style={{ minHeight: "min(420px, 70svh)" }}
          >
            <AnimatePresence mode="wait">
              {!unlocked ? (
                <motion.div
                  key="lockscreen"
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#1d1d1f] to-[#2d2d30] px-6"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm sm:mb-8 sm:h-16 sm:w-16"
                  >
                    <LockClosedIcon className="h-7 w-7 text-white/80 sm:h-8 sm:w-8" />
                  </motion.div>
                  <p className="mb-1 text-base font-medium text-white/70 sm:mb-2 sm:text-lg">
                    Vuốt để mở
                  </p>
                  <p className="mb-8 text-xs text-white/40 sm:mb-10 sm:text-sm">
                    Trải nghiệm dashboard tương tác
                  </p>

                  {/* ===== SLIDER ===== */}
                  <div
                    ref={trackRef}
                    className="unlock-track relative h-12 w-full max-w-[280px] touch-none select-none overflow-hidden rounded-full sm:h-14 sm:max-w-sm"
                    onMouseMove={handleTrackMouseMove}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                    onTouchMove={handleTrackTouchMove}
                    onTouchEnd={handleDragEnd}
                  >
                    {/* Blue fill */}
                    <div
                      className="absolute inset-y-0 left-0 bg-[#0071e3] transition-all duration-200"
                      style={{ width: `${Math.min(sliderX * 100, 100)}%` }}
                    />

                    {/* Thumb */}
                    <motion.div
                      className="absolute top-1 flex h-10 w-10 cursor-grab items-center justify-center rounded-full bg-white shadow-lg active:cursor-grabbing sm:h-12 sm:w-12"
                      animate={{ x: thumbLeftPx }}
                      transition={
                        dragging
                          ? { duration: 0 }
                          : { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                      }
                      style={{ left: trackPadding }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setDragging(true);
                      }}
                      onTouchStart={() => setDragging(true)}
                      onClick={handleUnlock}
                    >
                      <ChevronRightIcon className="h-4 w-4 text-[#0071e3] sm:h-5 sm:w-5" />
                    </motion.div>

                    {/* Label */}
                    <motion.div
                      className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs font-medium text-white/50 sm:text-sm"
                      animate={{ opacity: sliderX > 0.3 ? 0 : 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      trượt để mở khóa
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="desktop"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="flex items-center gap-2 overflow-x-auto border-b border-black/5 bg-[#f5f5f7]/80 px-3 py-1.5 backdrop-blur-xl sm:gap-4 sm:px-5 sm:py-2">
                    <span className="shrink-0 text-[10px] font-medium text-[#86868b] sm:text-xs">
                      File
                    </span>
                    <span className="shrink-0 text-[10px] font-medium text-[#86868b] sm:text-xs">
                      Edit
                    </span>
                    <span className="shrink-0 text-[10px] font-medium text-[#86868b] sm:text-xs">
                      View
                    </span>
                    <span className="shrink-0 text-[10px] font-medium text-[#86868b] sm:text-xs">
                      Window
                    </span>
                    <span className="shrink-0 text-[10px] font-medium text-[#86868b] sm:text-xs">
                      Help
                    </span>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="mb-4 flex items-center justify-between sm:mb-6">
                      <div>
                        <h3 className="text-base font-bold tracking-tight text-[#1d1d1f] sm:text-xl">
                          {activeIndustry.title}
                        </h3>
                        <p className="mt-0.5 text-[11px] text-[#86868b] sm:mt-1 sm:text-sm">
                          Tổng quan hoạt động
                        </p>
                      </div>
                      <div
                        className={`shrink-0 rounded-full bg-gradient-to-r ${activeIndustry.color} px-3 py-1 text-[10px] font-medium text-white sm:px-4 sm:py-1.5 sm:text-xs`}
                      >
                        {activeIndustry.label}
                      </div>
                    </div>
                    <div className="mb-4 grid grid-cols-3 gap-2 sm:mb-6 sm:gap-4">
                      {currentIndustry.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl bg-[#f5f5f7] p-2.5 text-center sm:rounded-2xl sm:p-4"
                        >
                          <p className="text-sm font-bold tracking-tight text-[#1d1d1f] sm:text-lg">
                            {metric}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="h-2.5 w-1/3 rounded-full bg-black/5 sm:h-3" />
                      <div className="flex items-end gap-1 h-24 sm:gap-2 sm:h-32">
                        {[40, 65, 45, 80, 55, 90, 70, 60, 75, 85, 50, 95].map(
                          (h, idx) => (
                            <div
                              key={idx}
                              className={`flex-1 rounded-t-md bg-gradient-to-t ${activeIndustry.color} opacity-80 sm:rounded-t-lg`}
                              style={{ height: `${h}%` }}
                            />
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-0.5 overflow-x-auto border-t border-black/5 bg-white/80 px-2 py-2 backdrop-blur-xl sm:gap-1.5 sm:px-4 sm:py-3">
                    {industries.map((industry) => {
                      const Icon = industry.icon;
                      const isActive = activeIndustry.id === industry.id;
                      return (
                        <button
                          key={industry.id}
                          onClick={() => setActiveIndustry(industry)}
                          className={`dock-item group relative flex shrink-0 flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 sm:rounded-2xl sm:px-3 sm:py-2 ${isActive ? "bg-black/5" : "hover:bg-black/5"}`}
                          title={industry.label}
                        >
                          <Icon
                            className={`h-5 w-5 transition-colors sm:h-6 sm:w-6 ${isActive ? "text-[#0071e3]" : "text-[#86868b] group-hover:text-[#1d1d1f]"}`}
                          />
                          <span className="hidden text-[10px] font-medium text-[#86868b] transition-colors group-hover:text-[#1d1d1f] sm:block">
                            {industry.label}
                          </span>
                          {isActive && (
                            <motion.div
                              layoutId="dock-indicator"
                              className="absolute -bottom-0.5 h-1 w-4 rounded-full bg-[#0071e3] sm:-bottom-1 sm:w-5"
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                              }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
