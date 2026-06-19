import { Link } from "react-router";
import { motion } from "motion/react";
import {
  FileText,
  Globe,
  Building2,
  Users,
  ShieldCheck,
  TrendingUp,
  Award,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: "Income Tax Services",
      description: "Complete tax planning, filing, and compliance for individuals and businesses. Expert guidance on tax-saving strategies and regulatory compliance.",
      path: "/services/income-tax",
      features: ["Tax Planning & Advisory", "ITR Filing", "Tax Audit", "Assessment Support"],
    },
    {
      icon: Globe,
      title: "NRI Taxation",
      description: "Specialized tax services for Non-Resident Indians including DTAA benefits, foreign income declaration, and repatriation guidance.",
      path: "/services/nri-taxation",
      features: ["NRI Tax Returns", "FEMA Compliance", "DTAA Benefits", "Repatriation"],
    },
    {
      icon: Building2,
      title: "NGO / Trust Services",
      description: "Registration, compliance, and advisory for non-profit organizations. 80G, 12A certifications, and annual compliance management.",
      path: "/services/ngo-trust",
      features: ["Trust Registration", "12A & 80G Certification", "Annual Compliance", "FCRA Advisory"],
    },
    {
      icon: Users,
      title: "Company Law Services",
      description: "Company incorporation, compliance, secretarial services, and corporate governance. Complete support for Private Ltd and LLP entities.",
      path: "/services/company-law",
      features: ["Company Incorporation", "Annual ROC Filings", "Secretarial Services", "Corporate Restructuring"],
    },
    {
      icon: ShieldCheck,
      title: "Labour Law Compliance",
      description: "Complete labour law advisory and compliance management including PF, ESI, gratuity, and employment contracts.",
      path: "/services/labour-law",
      features: ["PF & ESI Registration", "Labour License", "Payroll Management", "Compliance Audits"],
    },
    {
      icon: TrendingUp,
      title: "Import Export Consultancy",
      description: "IEC registration, customs clearance, DGFT schemes, and trade compliance for import-export businesses.",
      path: "/services/import-export",
      features: ["IEC Registration", "Customs Clearance", "DGFT Schemes", "Export Benefits"],
    },
    {
      icon: Award,
      title: "Certification Services",
      description: "Various business certifications including MSME, Startup India, ISO, and compliance certificates.",
      path: "/services/certification",
      features: ["MSME Registration", "Startup India", "ISO Certification", "Business Licenses"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive financial, taxation, and compliance solutions for individuals and businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="h-full p-8 bg-white border-2 border-gray-100 rounded-xl hover:border-[#1e3a8a] hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#1e3a8a] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 text-[#1e3a8a] font-medium group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Need Custom Solutions?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our team can create tailored service packages to meet your specific requirements
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1e3a8a] rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
