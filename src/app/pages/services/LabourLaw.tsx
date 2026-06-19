import { Link } from "react-router";
import { motion } from "motion/react";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function LabourLaw() {
  const offerings = [
    "PF Registration and Compliance",
    "ESI Registration and Returns",
    "Professional Tax Registration",
    "Labour License and Renewals",
    "Shops and Establishment Registration",
    "Payroll Management and Compliance",
    "Gratuity and Leave Management",
    "Employment Contracts and Agreements",
    "Labour Law Audit",
    "Compliance Calendar Management",
  ];

  return (
    <div>
      <section className="relative py-12 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold">Labour Law Compliance</h1>
            </div>
            <p className="text-xl text-blue-100">
              Complete labour law advisory and compliance management for your workforce
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay Compliant, Stay Protected</h2>
              <p className="text-lg text-gray-700 mb-4">
                Labour law compliance is critical for every business with employees. We help you navigate PF, ESI, professional tax, and other statutory requirements seamlessly.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From registrations to monthly returns and annual compliance, our team ensures you meet all obligations while minimizing administrative burden.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-all font-semibold shadow-lg"
              >
                Request Service <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1772588627474-ae6acc69ac42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmaW5hbmNlJTIwYWNjb3VudGluZyUyMGNhbGN1bGF0b3IlMjBkb2N1bWVudHN8ZW58MXx8fHwxNzc1Nzk5ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business compliance"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Complete labour law solutions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((offering, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{offering}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
