import { motion } from "framer-motion";

const dashboards = [
  {
    title: "CRM",
    description: "Quản lý khách hàng & bán hàng",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "ERP",
    description: "Hoạch định nguồn lực doanh nghiệp",
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "POS",
    description: "Điểm bán hàng & thanh toán",
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
  },
  {
    title: "Inventory",
    description: "Quản lý kho & tồn kho",
    color: "from-green-500 to-green-600",
    bg: "bg-green-50",
  },
  {
    title: "HRM",
    description: "Quản lý nhân sự & chấm công",
    color: "from-pink-500 to-pink-600",
    bg: "bg-pink-50",
  },
  {
    title: "Booking",
    description: "Đặt lịch & lịch hẹn",
    color: "from-teal-500 to-teal-600",
    bg: "bg-teal-50",
  },
];

export default function DashboardShowcase() {
  return (
    <section id="showcase" className="bg-[#fafafa] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="badge-apple">Sản phẩm</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1d1d1f] sm:mt-6 sm:text-4xl lg:text-5xl">
            Giải pháp cho
            <br />
            <span className="text-gradient">mọi ngành nghề</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#86868b] sm:mt-4 sm:max-w-2xl sm:text-base lg:text-lg">
            Dashboard được thiết kế riêng cho từng lĩnh vực kinh doanh, tối ưu
            trải nghiệm và hiệu suất làm việc.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {dashboards.map((dashboard, i) => (
            <motion.div
              key={dashboard.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-soft transition-shadow hover:shadow-soft-lg sm:rounded-[24px]"
            >
              <div
                className={`relative h-36 p-3 sm:h-48 sm:p-4 ${dashboard.bg}`}
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="h-2 w-2 rounded-full bg-black/20 sm:h-2.5 sm:w-2.5" />
                  <div className="h-2 w-2 rounded-full bg-black/20 sm:h-2.5 sm:w-2.5" />
                  <div className="h-2 w-2 rounded-full bg-black/20 sm:h-2.5 sm:w-2.5" />
                </div>
                <div className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
                  <div className="h-2.5 w-3/4 rounded-full bg-black/5 sm:h-3" />
                  <div className="h-2.5 w-1/2 rounded-full bg-black/5 sm:h-3" />
                  <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
                    <div className="h-10 rounded-lg bg-white/60 sm:h-14 sm:rounded-xl" />
                    <div className="h-10 rounded-lg bg-white/60 sm:h-14 sm:rounded-xl" />
                    <div className="h-10 rounded-lg bg-white/60 sm:h-14 sm:rounded-xl" />
                  </div>
                </div>
                <div
                  className={`absolute bottom-3 right-3 rounded-full bg-gradient-to-r ${dashboard.color} px-2.5 py-0.5 text-[10px] font-medium text-white shadow-lg sm:bottom-4 sm:right-4 sm:px-3 sm:py-1 sm:text-xs`}
                >
                  {dashboard.title}
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-sm font-semibold tracking-tight text-[#1d1d1f] sm:text-lg">
                  {dashboard.title}
                </h3>
                <p className="mt-0.5 text-xs text-[#86868b] sm:mt-1 sm:text-sm">
                  {dashboard.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
