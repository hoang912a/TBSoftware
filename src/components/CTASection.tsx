import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  { icon: ClockIcon, text: "Phản hồi trong vòng 2 giờ làm việc" },
  { icon: ShieldCheckIcon, text: "Cam kết bảo mật thông tin tuyệt đối" },
  { icon: CheckCircleIcon, text: "Tư vấn miễn phí, không ràng buộc" },
];

export default function CTASection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#fafafa] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-16"
        >
          <h2 className="text-2xl font-bold tracking-tight text-[#1d1d1f] sm:text-4xl lg:text-5xl">
            Sẵn sàng xây dựng hệ thống
            <br />
            <span className="text-gradient">
              dành riêng cho doanh nghiệp của bạn?
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#86868b] sm:mt-4 sm:text-base lg:text-lg">
            Để lại thông tin, chúng tôi sẽ liên hệ tư vấn trong vòng 2 giờ.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl bg-white p-6 shadow-soft-lg sm:rounded-[28px] sm:p-8 lg:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center sm:py-12"
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#34c759]/[0.1] sm:mb-6 sm:h-20 sm:w-20">
                    <CheckCircleIcon className="h-8 w-8 text-[#34c759] sm:h-10 sm:w-10" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f] sm:text-2xl">
                    Cảm ơn bạn!
                  </h3>
                  <p className="mt-2 text-sm text-[#86868b]">
                    Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-[#1d1d1f] sm:mb-2"
                      >
                        Họ và tên
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Nguyễn Văn A"
                        className="input-apple"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm font-medium text-[#1d1d1f] sm:mb-2"
                      >
                        Số điện thoại
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        placeholder="0901 234 567"
                        className="input-apple"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-[#1d1d1f] sm:mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="email@example.com"
                      className="input-apple"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-[#1d1d1f] sm:mb-2"
                    >
                      Mô tả nhu cầu
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Mô tả ngắn gọn về hệ thống bạn cần..."
                      className="input-apple resize-none sm:min-h-[100px]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#0071e3] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#0077ed] hover:shadow-xl hover:shadow-[#0071e3]/25 active:scale-[0.98] sm:px-8 sm:py-3.5 sm:text-base"
                  >
                    Gửi yêu cầu tư vấn
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center lg:col-span-2"
          >
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0071e3]/[0.08] sm:h-11 sm:w-11 sm:rounded-2xl">
                  <PhoneIcon className="h-4 w-4 text-[#0071e3] sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#86868b] sm:text-sm">
                    Hotline
                  </p>
                  <p className="mt-0.5 text-base font-semibold tracking-tight text-[#1d1d1f] sm:mt-1 sm:text-lg">
                    0981 659 212
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0071e3]/[0.08] sm:h-11 sm:w-11 sm:rounded-2xl">
                  <EnvelopeIcon className="h-4 w-4 text-[#0071e3] sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#86868b] sm:text-sm">
                    Email
                  </p>
                  <p className="mt-0.5 text-base font-semibold tracking-tight text-[#1d1d1f] sm:mt-1 sm:text-lg">
                    hoangtvgch18256@gmail.com
                  </p>
                </div>
              </div>
              <div className="my-4 border-t border-black/5 sm:my-6" />
              <div className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2.5 sm:gap-3">
                    <benefit.icon className="h-4 w-4 shrink-0 text-[#34c759] sm:h-5 sm:w-5" />
                    <span className="text-[13px] text-[#86868b] sm:text-sm">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
