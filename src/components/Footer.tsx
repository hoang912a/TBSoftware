import { motion } from "framer-motion";

const footerLinks = {
  "Giải pháp": ["CRM", "ERP", "POS", "Quản lý kho", "Nhân sự", "Booking"],
  "Công ty": ["Về chúng tôi", "Quy trình", "Dự án", "Blog", "Tuyển dụng"],
  "Hỗ trợ": ["FAQ", "Chính sách bảo hành", "Điều khoản", "Bảo mật"],
};

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <img
                src={`${import.meta.env.BASE_URL}Logo.png`}
                alt="TBsoft"
                className="h-12 w-auto sm:h-16"
              />
            </a>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-[#86868b] sm:mt-4 sm:text-sm">
              Phát triển phần mềm theo yêu cầu cho doanh nghiệp. Giải pháp công
              nghệ tùy chỉnh, triển khai nhanh, hỗ trợ dài hạn.
            </p>
            <div className="mt-5 flex gap-2.5 sm:mt-6 sm:gap-3">
              {[
                {
                  label: "Facebook",
                  d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                  href: "https://www.facebook.com/profile.php?id=61590358002007",
                },
                {
                  label: "LinkedIn",
                  d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
                {
                  label: "YouTube",
                  d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href || "#"}
                  target={social.href ? "_blank" : undefined}
                  rel={social.href ? "noopener noreferrer" : undefined}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#86868b] shadow-soft transition-colors hover:text-[#0071e3] sm:h-9 sm:w-9 sm:rounded-xl"
                  aria-label={social.label}
                >
                  <svg
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-3 text-sm font-semibold text-[#1d1d1f] sm:mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-[#86868b] transition-colors hover:text-[#1d1d1f] sm:text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-black/5 pt-6 sm:mt-16 sm:flex-row sm:gap-4 sm:pt-8"
        >
          <p className="text-xs text-[#86868b] sm:text-sm">
            &copy; {new Date().getFullYear()} Bản quyền thuộc về TBSoft @2026.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="#"
              className="text-xs text-[#86868b] transition-colors hover:text-[#1d1d1f] sm:text-sm"
            >
              Chính sách bảo mật
            </a>
            <a
              href="#"
              className="text-xs text-[#86868b] transition-colors hover:text-[#1d1d1f] sm:text-sm"
            >
              Điều khoản sử dụng
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
