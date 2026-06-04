import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { label: "Giải pháp", href: "#solutions" },
  { label: "Sản phẩm", href: "#showcase" },
  { label: "Quy trình", href: "#process" },
  { label: "Khách hàng", href: "#testimonials" },
  { label: "Liên hệ", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when hash changes (user clicks a nav link)
  useEffect(() => {
    const handleHashChange = () => setMobileOpen(false);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-black/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img src="/Logo.png" alt="TBsoft" className="h-12 w-auto sm:h-16" />
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-3 py-2 text-[13px] font-medium text-[#86868b] transition-colors hover:text-[#1d1d1f] sm:px-4 sm:text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center rounded-full bg-[#0071e3] px-4 py-2 text-[13px] font-medium text-white transition-all hover:bg-[#0077ed] hover:shadow-lg hover:shadow-[#0071e3]/20 active:scale-95 sm:px-5 sm:py-2.5 sm:text-sm lg:inline-flex"
          >
            Đặt lịch tư vấn
          </a>

          {/* Mobile: Tư vấn + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-[#0071e3] px-3 py-1.5 text-xs font-medium text-white transition-all active:scale-95 sm:px-4 sm:py-2 sm:text-sm"
            >
              Tư vấn
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center rounded-lg p-1.5 text-[#1d1d1f] transition-colors hover:bg-black/5 sm:p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-14 z-40 bg-black/20 sm:top-16 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative z-50 overflow-hidden border-t border-black/5 glass lg:hidden"
            >
              <div className="space-y-0.5 px-4 py-3 sm:px-5 sm:py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-[#86868b] transition-colors hover:bg-black/5 hover:text-[#1d1d1f] sm:px-4 sm:py-3"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
