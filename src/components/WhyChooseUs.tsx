import { motion } from "framer-motion";
import {
  WrenchScrewdriverIcon,
  EyeIcon,
  BoltIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: WrenchScrewdriverIcon,
    title: "Tùy chỉnh theo quy trình riêng",
    description:
      "Mỗi doanh nghiệp là duy nhất. Chúng tôi xây dựng phần mềm phù hợp chính xác với cách bạn vận hành, không phải ngược lại.",
  },
  {
    icon: EyeIcon,
    title: "Minh bạch chi phí",
    description:
      "Báo giá rõ ràng từng hạng mục. Không phí ẩn, không phát sinh bất ngờ. Bạn luôn kiểm soát được ngân sách.",
  },
  {
    icon: BoltIcon,
    title: "Triển khai nhanh",
    description:
      "Trung bình 45 ngày từ khảo sát đến bàn giao. Tối ưu quy trình để bạn sớm vận hành hệ thống mới.",
  },
  {
    icon: HeartIcon,
    title: "Hỗ trợ dài hạn",
    description:
      "Bảo hành 12 tháng. Đồng hành cùng bạn trong suốt quá trình phát triển và mở rộng hệ thống.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="solutions" className="bg-[#fafafa] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="badge-apple">Tại sao chọn chúng tôi</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1d1d1f] sm:mt-6 sm:text-4xl lg:text-5xl">
            Khác biệt tạo nên
            <br />
            <span className="text-gradient">giá trị thực sự</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#86868b] sm:mt-4 sm:max-w-2xl sm:text-base lg:text-lg">
            Chúng tôi không bán sản phẩm có sẵn. Chúng tôi xây dựng giải pháp
            dành riêng cho bạn.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-hover group rounded-2xl bg-white p-6 shadow-soft sm:rounded-[24px] sm:p-8"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0071e3]/[0.06] transition-colors duration-300 group-hover:bg-[#0071e3] sm:mb-5 sm:h-12 sm:w-12 sm:rounded-2xl">
                <feature.icon className="h-5 w-5 text-[#86868b] transition-colors duration-300 group-hover:text-white sm:h-6 sm:w-6" />
              </div>
              <h3 className="mb-2 text-base font-semibold tracking-tight text-[#1d1d1f] sm:mb-3 sm:text-lg">
                {feature.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-[#86868b] sm:text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
