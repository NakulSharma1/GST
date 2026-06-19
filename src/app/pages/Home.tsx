import { Link } from "react-router";
import { motion } from "motion/react";
import {
  FileText,
  Globe,
  Building2,
  Users,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Star,
  ArrowRight,
  Award,
  Clock,
  Target,
  Check,
  X,
} from "lucide-react";
import { useState } from "react";
import TrustBadges from "../components/TrustBadges";
import WaveDivider from "../components/WaveDivider";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "" });
  const [pricingTab, setPricingTab] = useState<"individual" | "business">("individual");

  const individualPlans = [
    {
      name: "Starter",
      price: "₹999",
      period: "/year",
      tagline: "Perfect for salaried individuals",
      popular: false,
      features: [
        { label: "ITR-1 Filing (Salary Income)", included: true },
        { label: "Form 16 Processing", included: true },
        { label: "Tax Regime Comparison", included: true },
        { label: "Email Support", included: true },
        { label: "1 Free Revision", included: true },
        { label: "Multiple Income Sources", included: false },
        { label: "Capital Gains (Stocks/MF)", included: false },
        { label: "Dedicated CA Assigned", included: false },
      ],
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "₹2,499",
      period: "/year",
      tagline: "For professionals & freelancers",
      popular: true,
      features: [
        { label: "ITR-2 / ITR-3 Filing", included: true },
        { label: "Multiple Income Sources", included: true },
        { label: "Capital Gains (Stocks/MF)", included: true },
        { label: "House Property Income", included: true },
        { label: "Dedicated CA Assigned", included: true },
        { label: "Priority Support", included: true },
        { label: "2 Free Revisions", included: true },
        { label: "F&O / Crypto Income", included: false },
      ],
      cta: "Get Started",
    },
    {
      name: "Premium",
      price: "₹4,999",
      period: "/year",
      tagline: "For complex income & NRI",
      popular: false,
      features: [
        { label: "ITR-4 / NRI Filing", included: true },
        { label: "F&O & Crypto Income", included: true },
        { label: "Foreign & NRI Income", included: true },
        { label: "GST Returns (3 months)", included: true },
        { label: "Dedicated Senior CA", included: true },
        { label: "Tax Planning Session", included: true },
        { label: "Unlimited Revisions", included: true },
        { label: "Notice Handling Support", included: true },
      ],
      cta: "Get Started",
    },
  ];

  const businessPlans = [
    {
      name: "Startup",
      price: "₹9,999",
      period: "/year",
      tagline: "For newly incorporated companies",
      popular: false,
      features: [
        { label: "Company ITR Filing", included: true },
        { label: "GST Returns (12 months)", included: true },
        { label: "ROC Annual Filing", included: true },
        { label: "TDS Returns", included: true },
        { label: "Email & Phone Support", included: true },
        { label: "Payroll Compliance", included: false },
        { label: "Director's ITR", included: false },
        { label: "Dedicated CA Manager", included: false },
      ],
      cta: "Get Started",
    },
    {
      name: "Growth",
      price: "₹24,999",
      period: "/year",
      tagline: "For growing SMEs",
      popular: true,
      features: [
        { label: "Company + Director ITR", included: true },
        { label: "GST Returns (12 months)", included: true },
        { label: "ROC & MCA Compliance", included: true },
        { label: "TDS Returns (4 quarters)", included: true },
        { label: "Payroll Compliance", included: true },
        { label: "Dedicated CA Manager", included: true },
        { label: "Labour Law Compliance", included: true },
        { label: "Tax Planning Advisory", included: false },
      ],
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      tagline: "Tailored for large businesses",
      popular: false,
      features: [
        { label: "All Growth Plan Features", included: true },
        { label: "Tax Planning & Advisory", included: true },
        { label: "Import/Export Compliance", included: true },
        { label: "Multi-State GST", included: true },
        { label: "FEMA / RBI Compliance", included: true },
        { label: "Audit & Assurance", included: true },
        { label: "Virtual CFO Services", included: true },
        { label: "24/7 Priority Support", included: true },
      ],
      cta: "Contact Us",
    },
  ];

  const activePlans = pricingTab === "individual" ? individualPlans : businessPlans;

  const services = [
    {
      icon: FileText,
      title: "Income Tax Services",
      description: "Complete tax planning, filing, and compliance for individuals and businesses",
      path: "/services/income-tax",
      highlighted: true,
    },
    {
      icon: Globe,
      title: "NRI Taxation",
      description: "Specialized tax services for Non-Resident Indians and global income management",
      path: "/services/nri-taxation",
    },
    {
      icon: Building2,
      title: "NGO / Trust Services",
      description: "Registration, compliance, and advisory for non-profit organizations",
      path: "/services/ngo-trust",
    },
    {
      icon: Users,
      title: "Company Law Services",
      description: "Company incorporation, compliance, secretarial services, and governance",
      path: "/services/company-law",
    },
    {
      icon: ShieldCheck,
      title: "Labour Law Compliance",
      description: "Complete labour law advisory and compliance management",
      path: "/services/labour-law",
    },
    {
      icon: TrendingUp,
      title: "Import Export Consultancy",
      description: "IEC registration, customs clearance, and trade compliance",
      path: "/services/import-export",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expert Team",
      description: "Qualified Chartered Accountants with 15+ years of experience",
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "On-time delivery with proactive deadline management",
    },
    {
      icon: Target,
      title: "Client-Centric",
      description: "Personalized solutions tailored to your specific needs",
    },
    {
      icon: ShieldCheck,
      title: "100% Compliance",
      description: "Full regulatory compliance and risk mitigation",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Startup Founder",
      content: "Expert Consultancy helped us navigate complex tax regulations during our seed round. Their guidance was invaluable.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "NRI Professional",
      content: "As an NRI, managing my Indian finances was challenging. Their team made everything seamless and stress-free.",
      rating: 5,
    },
    {
      name: "Anil Mehta",
      role: "Manufacturing Business",
      content: "From company registration to ongoing compliance, they've been our trusted partner for 5 years.",
      rating: 5,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center bg-gradient-to-br from-[#0B1F3A] via-[#0d2847] to-[#0B1F3A] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A54C] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A54C] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Trusted <span className="text-[#C9A54C]">Financial</span> & Compliance Partner
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Expert taxation, accounting, and business consultancy services for individuals, startups, and enterprises across India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-[#C9A54C] text-white rounded-lg hover:bg-[#b89543] transition-all duration-300 font-medium shadow-lg shadow-[#C9A54C]/20 inline-flex items-center gap-2"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all duration-300 font-medium"
              >
                Our Services
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-8">
              <div className="relative pl-4">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-[#C9A54C] to-transparent" />
                <div className="text-4xl font-bold text-[#C9A54C] mb-2">500+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="relative pl-4">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-[#C9A54C] to-transparent" />
                <div className="text-4xl font-bold text-[#C9A54C] mb-2">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="relative pl-4">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-[#C9A54C] to-transparent" />
                <div className="text-4xl font-bold text-[#C9A54C] mb-2">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#C9A54C]/20 to-transparent rounded-2xl blur-2xl" />
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?fit=crop&w=1080&q=80"
                alt="Professional financial consultation"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-5 left-5 bg-[#0B1F3A]/90 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 shadow-2xl"
              >
                <div className="w-10 h-10 bg-[#C9A54C] rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm leading-tight">Certified & Reliable</div>
                  <div className="text-gray-400 text-xs mt-0.5">GST · Income Tax · ROC filings</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* <WaveDivider position="bottom" color="white" /> */}
      </section>

      {/* Services Section */}
      <section className="py-14 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#C9A54C]">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive financial and compliance solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  to={service.path}
                  className="group block h-full p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl hover:shadow-xl transition-all duration-500 border border-gray-100/50"
                  style={{ boxShadow: "0 4px 20px rgba(11, 31, 58, 0.08)" }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5c] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <service.icon className="w-8 h-8 text-[#C9A54C]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0B1F3A] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                      <div className="flex items-center text-[#C9A54C] font-medium group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <TrustBadges />

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B1F3A] text-white rounded-lg hover:bg-[#0d2847] transition-all duration-300 font-medium shadow-lg shadow-gray-900/10"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Why <span className="text-[#C9A54C]">Choose Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Trusted by businesses and individuals across India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-500 border border-gray-100/50"
                style={{ boxShadow: "0 4px 20px rgba(11, 31, 58, 0.06)" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5c] rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <item.icon className="w-8 h-8 text-[#C9A54C]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <WaveDivider position="bottom" color="white" /> */}
      </section>

      {/* Pricing Section */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent <span className="text-[#C9A54C]">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              No hidden fees. Choose a plan that fits your needs.
            </p>
          </motion.div>

          {/* Tab Toggle */}
          <div className="flex justify-center mb-10">
            <div className="bg-gray-100 rounded-full p-1 flex gap-1">
              <button
                onClick={() => setPricingTab("individual")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  pricingTab === "individual"
                    ? "bg-[#0B1F3A] text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Individual
              </button>
              <button
                onClick={() => setPricingTab("business")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  pricingTab === "business"
                    ? "bg-[#0B1F3A] text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Business
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {activePlans.map((plan, idx) => (
              <motion.div
                key={`${pricingTab}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.popular
                    ? "bg-[#0B1F3A] text-white shadow-2xl scale-105"
                    : "bg-white border border-gray-200 shadow-lg"
                }`}
                style={!plan.popular ? { boxShadow: "0 4px 24px rgba(11,31,58,0.08)" } : {}}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#C9A54C] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg tracking-wide uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-1 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? "text-gray-300" : "text-gray-500"}`}>
                    {plan.tagline}
                  </p>
                </div>

                <div className="mb-8">
                  <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-[#0B1F3A]"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ml-1 ${plan.popular ? "text-gray-300" : "text-gray-500"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      {feature.included ? (
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? "bg-[#C9A54C]" : "bg-[#0B1F3A]/10"}`}>
                          <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-[#0B1F3A]"}`} />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-100">
                          <X className="w-3 h-3 text-gray-400" />
                        </div>
                      )}
                      <span className={`text-sm ${feature.included ? (plan.popular ? "text-gray-200" : "text-gray-700") : (plan.popular ? "text-gray-500" : "text-gray-400")}`}>
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.cta === "Contact Us" ? "/contact" : "/contact"}
                  className={`w-full text-center py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#C9A54C] text-white hover:bg-[#b89543] shadow-lg shadow-[#C9A54C]/30"
                      : "bg-[#0B1F3A] text-white hover:bg-[#0d2847]"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            All plans include GST. Need a custom quote?{" "}
            <Link to="/contact" className="text-[#C9A54C] font-semibold hover:underline">
              Talk to us
            </Link>
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Client <span className="text-[#C9A54C]">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              What our clients say about us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100/50 hover:shadow-xl transition-all duration-500"
                style={{ boxShadow: "0 4px 20px rgba(11, 31, 58, 0.06)" }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C9A54C] text-[#C9A54C]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-gray-200 pt-6">
                  <div className="font-bold text-lg text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-14 bg-gradient-to-br from-[#0B1F3A] to-[#0d2847] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A54C] rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Get Started <span className="text-[#C9A54C]">Today</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Request a free consultation and let's discuss your needs
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A54C] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A54C] focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A54C] focus:border-transparent outline-none transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A54C] focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="income-tax">Income Tax Services</option>
                  <option value="nri-taxation">NRI Taxation</option>
                  <option value="ngo-trust">NGO / Trust Services</option>
                  <option value="company-law">Company Law Services</option>
                  <option value="labour-law">Labour Law Compliance</option>
                  <option value="import-export">Import Export Consultancy</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#C9A54C] text-white rounded-lg hover:bg-[#b89543] transition-all duration-300 font-medium shadow-lg shadow-[#C9A54C]/20 flex items-center justify-center gap-2"
            >
              Submit Request
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.form>
        </div>

        {/* <WaveDivider position="bottom" color="white" flip /> */}
      </section>
    </div>
  );
}
