import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onRequestCallback: () => void;
  onBookAppointment: () => void;
}

export default function Navbar({ onRequestCallback, onBookAppointment }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const services = [
    { name: "Income Tax Services", path: "/services/income-tax" },
    { name: "NRI Taxation", path: "/services/nri-taxation" },
    { name: "NGO / Trust Services", path: "/services/ngo-trust" },
    { name: "Company Law Services", path: "/services/company-law" },
    { name: "Labour Law Compliance", path: "/services/labour-law" },
    { name: "Import Export", path: "/services/import-export" },
    { name: "Certification Services", path: "/services/certification" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5c] rounded-xl flex items-center justify-center shadow-md">
              <span className="text-[#C9A54C] font-bold text-xl">CA</span>
            </div>
            <div>
              <div className="font-serif text-[#0B1F3A] text-lg leading-tight font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>Expert Consultancy</div>
              <div className="text-xs text-gray-600">Chartered Accountants</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-[#C9A54C] transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#C9A54C] transition-colors font-medium">
              About
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#C9A54C] transition-colors font-medium flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 border border-gray-100">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#C9A54C] transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/knowledge-centre" className="text-gray-700 hover:text-[#C9A54C] transition-colors font-medium">
              Knowledge Centre
            </Link>
            <Link to="/client-portal" className="text-gray-700 hover:text-[#C9A54C] transition-colors font-medium">
              Client Portal
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#C9A54C] transition-colors font-medium">
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onRequestCallback}
              className="px-5 py-2.5 text-[#0B1F3A] border-2 border-[#0B1F3A]/20 rounded-lg hover:border-[#C9A54C] hover:text-[#C9A54C] transition-all duration-300 font-medium"
            >
              Request Callback
            </button>
            <button
              onClick={onBookAppointment}
              className="px-5 py-2.5 bg-[#C9A54C] text-white rounded-lg hover:bg-[#b89543] transition-all duration-300 font-medium shadow-lg shadow-[#C9A54C]/20"
            >
              Book Consultation
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#1e3a8a]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-gray-200 bg-white"
          >
            <div className="px-4 py-4 space-y-1">
              <Link to="/" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                Home
              </Link>
              <Link to="/about" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                About
              </Link>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
              <Link to="/knowledge-centre" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                Knowledge Centre
              </Link>
              <Link to="/client-portal" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                Client Portal
              </Link>
              <Link to="/contact" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                Contact
              </Link>
              <div className="pt-4 space-y-2">
                <button
                  onClick={onRequestCallback}
                  className="w-full px-5 py-3 text-[#1e3a8a] border-2 border-[#1e3a8a] rounded-lg font-medium"
                >
                  Request Callback
                </button>
                <button
                  onClick={onBookAppointment}
                  className="w-full px-5 py-3 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white rounded-lg font-medium"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
