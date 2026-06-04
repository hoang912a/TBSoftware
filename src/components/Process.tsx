import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const steps = [
  {
    number: "01",
    title: "Khảo sát",
    description:
      "Tìm hiểu sâu về quy trình kinh doanh, điểm đau và mục tiêu của doanh nghiệp bạn.",
  },
  {
    number: "02",
    title: "Phân tích",
    description:
      "Phân tích yêu cầu, đề xuất giải pháp tối ưu và lập kế hoạch triển khai chi tiết.",
  },
  {
    number: "03",
    title: "Thiết kế",
    description:
      "Thiết kế giao diện và trải nghiệm người dùng theo chuẩn UI/UX hiện đại.",
  },
  {
    number: "04",
    title: "Phát triển",
    description:
      "Lập trình và kiểm thử hệ thống với quy trình Agile, cập nhật tiến độ hàng tuần.",
  },
  {
    number: "05",
    title: "Đồng hành",
    description:
      "Bàn giao, đào tạo và hỗ trợ kỹ thuật dài hạn. Đồng hành cùng sự phát triển của bạn.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="badge-apple">Quy trình</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1d1d1f] sm:mt-6 sm:text-4xl lg:text-5xl">
            Từ ý tưởng đến
            <br />
            <span className="text-gradient">sản phẩm hoàn thiện</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#86868b] sm:mt-4 sm:max-w-2xl sm:text-base lg:text-lg">
            Quy trình làm việc rõ ràng, minh bạch, giúp bạn luôn nắm được tiến
            độ dự án.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="relative hidden lg:block">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#0071e3] via-[#0071e3]/40 to-[#0071e3]/5" />
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex items-center gap-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div
                  className={`w-1/2 ${i % 2 === 0 ? "text-right" : "text-left"}`}
                >
                  <span className="text-xs font-semibold tracking-wide text-[#0071e3] sm:text-sm">
                    {step.number}
                  </span>
                  <h3 className="mt-1 text-xl font-bold tracking-tight text-[#1d1d1f] sm:mt-2 sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#86868b] sm:mt-3 sm:text-sm">
                    {step.description}
                  </p>
                </div>
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-black/5 sm:h-12 sm:w-12">
                  <CheckCircleIcon className="h-5 w-5 text-[#0071e3] sm:h-6 sm:w-6" />
                </div>
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="space-y-6 lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0071e3] text-xs font-bold text-white sm:h-10 sm:w-10 sm:text-sm">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-1.5 h-full w-px bg-[#0071e3]/20" />
                )}
              </div>
              <div className="pb-6">
                <h3 className="text-base font-semibold tracking-tight text-[#1d1d1f] sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-[#86868b] sm:text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
