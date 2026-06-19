import { Link } from "react-router";
import { motion } from "motion/react";
import { FileText, CheckCircle2, ArrowRight } from "lucide-react";

export default function IncomeTax() {
  const offerings = [
    "Personal Income Tax Filing (ITR-1 to ITR-7)",
    "Business Income Tax Returns",
    "Tax Planning and Advisory",
    "Tax Audit under Section 44AB",
    "TDS Return Filing and Reconciliation",
    "Assessment and Reassessment Support",
    "Income Tax Notice Handling",
    "Advance Tax and Self-Assessment Tax Computation",
    "Capital Gains Tax Planning",
    "Tax Saving Investment Advisory",
  ];

  const process = [
    { step: "1", title: "Initial Consultation", description: "Understanding your income sources and tax situation" },
    { step: "2", title: "Document Collection", description: "Gathering Form 16, investment proofs, and other documents" },
    { step: "3", title: "Tax Computation", description: "Calculating tax liability and identifying savings" },
    { step: "4", title: "Return Filing", description: "Preparing and filing returns with tax department" },
    { step: "5", title: "Follow-up", description: "Processing refunds and handling any queries" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-12 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold">Income Tax Services</h1>
            </div>
            <p className="text-xl text-blue-100">
              Expert tax planning and compliance services to minimize your tax liability while ensuring complete regulatory adherence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Tax Solutions</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our income tax services cover everything from individual tax returns to complex business taxation. We help you navigate the intricate Indian tax laws while maximizing legitimate deductions and credits.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're a salaried professional, business owner, or have multiple income streams, our experienced team ensures accurate filing, timely compliance, and optimal tax planning strategies.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-all duration-300 font-semibold shadow-lg"
              >
                Request Service
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1762427907123-c7ab022a5de7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYWNjb3VudGluZyUyMGNhbGN1bGF0b3IlMjBkb2N1bWVudHN8ZW58MXx8fHwxNzc1Nzk5ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tax documents and calculator"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete income tax services for all your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((offering, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{offering}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple and transparent workflow for hassle-free tax filing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-[#3b82f6] to-transparent -z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Book a consultation to discuss your tax requirements
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1e3a8a] rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg"
            >
              Talk to Expert
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
