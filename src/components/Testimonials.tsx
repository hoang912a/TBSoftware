import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    name: "Nguyễn Minh Tuấn",
    role: "CEO, TechStart Vietnam",
    avatar: "NT",
    content:
      "Hệ thống CRM được xây dựng riêng cho quy trình bán hàng của chúng tôi. Sau 3 tháng triển khai, doanh thu tăng 35%. Đội ngũ rất chuyên nghiệp và tận tâm.",
    rating: 5,
  },
  {
    name: "Trần Thị Hương",
    role: "Giám đốc, Chuỗi Spa An Nhiên",
    avatar: "TH",
    content:
      "Phần mềm quản lý spa giúp tôi tiết kiệm 20 giờ làm việc mỗi tuần. Khách hàng có thể đặt lịch online 24/7, tỷ lệ giữ chân tăng rõ rệt.",
    rating: 5,
  },
  {
    name: "Lê Văn Hải",
    role: "Owner, Nhà hàng Hải Sản Phố",
    avatar: "LH",
    content:
      "Từ ngày có hệ thống POS và quản lý nhà hàng, mọi thứ vận hành trơn tru hơn hẳn. Báo cáo doanh thu realtime giúp tôi ra quyết định nhanh hơn.",
    rating: 5,
  },
  {
    name: "Phạm Thị Lan",
    role: "CFO, An Bình Logistics",
    avatar: "PL",
    content:
      "Giải pháp quản lý kho vận được tùy chỉnh hoàn toàn theo quy trình của chúng tôi. Độ chính xác hàng tồn kho đạt 99.5%, vượt xa mong đợi.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="badge-apple">Khách hàng</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1d1d1f] sm:mt-6 sm:text-4xl lg:text-5xl">
            Được tin tưởng bởi
            <br />
            <span className="text-gradient">các doanh nghiệp hàng đầu</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-hover rounded-2xl bg-white p-5 shadow-soft sm:rounded-[24px] sm:p-6 lg:p-8"
            >
              <div className="mb-4 flex gap-0.5 sm:mb-5">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <StarIcon
                    key={idx}
                    className="h-3.5 w-3.5 text-[#ff9500] sm:h-4 sm:w-4"
                  />
                ))}
              </div>
              <p className="mb-5 text-[13px] leading-relaxed text-[#86868b] sm:mb-6 sm:text-sm">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0071e3]/[0.08] text-xs font-semibold text-[#0071e3] sm:h-10 sm:w-10 sm:text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1d1d1f] sm:text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] text-[#86868b] sm:text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
