import { motion } from "motion/react";
import { useState } from "react";
import { FileText, Download, Upload, CheckCircle2, FileCheck } from "lucide-react";

export default function DocumentAutomation() {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [step, setStep] = useState(1);
  const [generatedDoc, setGeneratedDoc] = useState(false);

  const templates = [
    {
      id: "itr-1",
      name: "Income Tax Return (ITR-1)",
      description: "For individuals with salary/pension income",
      category: "Tax",
      fields: 8,
    },
    {
      id: "gst-invoice",
      name: "GST Compliant Invoice",
      description: "Generate tax invoices with GST compliance",
      category: "GST",
      fields: 12,
    },
    {
      id: "engagement-letter",
      name: "Client Engagement Letter",
      description: "Standard professional engagement agreement",
      category: "Legal",
      fields: 10,
    },
    {
      id: "board-resolution",
      name: "Board Resolution",
      description: "Corporate board meeting resolution format",
      category: "Corporate",
      fields: 6,
    },
    {
      id: "nda",
      name: "Non-Disclosure Agreement",
      description: "Confidentiality agreement template",
      category: "Legal",
      fields: 8,
    },
    {
      id: "service-agreement",
      name: "Service Agreement",
      description: "Professional service contract template",
      category: "Legal",
      fields: 15,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    panNumber: "",
    address: "",
    phone: "",
    email: "",
    financialYear: "2025-26",
    assessmentYear: "2026-27",
    totalIncome: "",
  });

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setGeneratedDoc(true);
    setTimeout(() => {
      setGeneratedDoc(false);
      setStep(1);
      setSelectedTemplate("");
      setFormData({
        name: "",
        panNumber: "",
        address: "",
        phone: "",
        email: "",
        financialYear: "2025-26",
        assessmentYear: "2026-27",
        totalIncome: "",
      });
    }, 3000);
  };

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
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Document Automation</h1>
            <p className="text-xl text-blue-100">
              Generate professional documents instantly with our intelligent automation system
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Select Document Template</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <motion.button
                    key={template.id}
                    onClick={() => {
                      setSelectedTemplate(template.id);
                      setStep(2);
                    }}
                    whileHover={{ y: -4 }}
                    className="p-6 border-2 border-gray-200 rounded-xl text-left transition-all hover:border-[#1e3a8a] hover:shadow-lg group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{template.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="px-3 py-1 bg-blue-50 text-[#1e3a8a] rounded-full font-medium">
                        {template.category}
                      </span>
                      <span className="text-gray-500">{template.fields} fields</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && selectedTemplate === "itr-1" && !generatedDoc && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Fill Document Details</h2>
                  <p className="text-gray-600 mt-1">Income Tax Return (ITR-1)</p>
                </div>
                <button
                  onClick={() => {
                    setStep(1);
                    setSelectedTemplate("");
                  }}
                  className="text-sm text-[#1e3a8a] hover:underline"
                >
                  ← Back to Templates
                </button>
              </div>

              <form onSubmit={handleGenerate} className="bg-gray-50 rounded-2xl p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none bg-white"
                      placeholder="As per PAN Card"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">PAN Number *</label>
                    <input
                      type="text"
                      required
                      value={formData.panNumber}
                      onChange={(e) => setFormData({ ...formData, panNumber: e.target.value.toUpperCase() })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none bg-white uppercase"
                      placeholder="ABCDE1234F"
                      maxLength={10}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none bg-white resize-none"
                    placeholder="Complete residential address"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none bg-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Financial Year *</label>
                    <select
                      required
                      value={formData.financialYear}
                      onChange={(e) => setFormData({ ...formData, financialYear: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none bg-white"
                    >
                      <option value="2025-26">2025-26</option>
                      <option value="2024-25">2024-25</option>
                      <option value="2023-24">2023-24</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Assessment Year *</label>
                    <select
                      required
                      value={formData.assessmentYear}
                      onChange={(e) => setFormData({ ...formData, assessmentYear: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none bg-white"
                    >
                      <option value="2026-27">2026-27</option>
                      <option value="2025-26">2025-26</option>
                      <option value="2024-25">2024-25</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Total Income *</label>
                  <input
                    type="number"
                    required
                    value={formData.totalIncome}
                    onChange={(e) => setFormData({ ...formData, totalIncome: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none bg-white"
                    placeholder="Total taxable income"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium flex items-center justify-center gap-2"
                  >
                    <Upload className="w-5 h-5" />
                    Upload Supporting Docs
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                  >
                    <FileCheck className="w-5 h-5" />
                    Generate Document
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {generatedDoc && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center py-12"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Document Generated Successfully!</h3>
              <p className="text-gray-600 mb-8">Your ITR-1 form has been created and is ready for download.</p>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">ITR-1_FY2025-26.pdf</div>
                      <div className="text-sm text-gray-600">Generated on April 10, 2026</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white rounded-lg hover:shadow-lg transition-all font-semibold flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
                <button className="px-8 py-3 border-2 border-[#1e3a8a] text-[#1e3a8a] rounded-lg hover:bg-blue-50 transition-all font-semibold">
                  Email Document
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Use Document Automation?</h2>
            <p className="text-xl text-gray-600">Save time and ensure accuracy with automated document generation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Instant Generation",
                description: "Create professional documents in seconds, not hours",
              },
              {
                icon: "✓",
                title: "100% Compliant",
                description: "All templates are legally compliant and up-to-date",
              },
              {
                icon: "🔒",
                title: "Secure & Private",
                description: "Your data is encrypted and never shared",
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
