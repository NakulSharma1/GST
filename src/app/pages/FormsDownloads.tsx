import { motion } from "motion/react";
import { Download, FileText, Search } from "lucide-react";
import { useState } from "react";

export default function FormsDownloads() {
  const [searchTerm, setSearchTerm] = useState("");

  const forms = [
    {
      category: "Income Tax",
      items: [
        { name: "ITR-1 (Sahaj) Form", description: "For individuals with income from salary/pension", size: "245 KB" },
        { name: "ITR-2 Form", description: "For individuals/HUFs not having business income", size: "320 KB" },
        { name: "Form 16 Sample", description: "TDS certificate format", size: "180 KB" },
        { name: "Tax Saving Declaration Form", description: "Employee investment declaration", size: "95 KB" },
      ],
    },
    {
      category: "GST",
      items: [
        { name: "GST Registration Application", description: "Form GST REG-01", size: "280 KB" },
        { name: "Invoice Format (GST Compliant)", description: "Excel template for GST invoices", size: "125 KB" },
        { name: "ITC-04 Form", description: "Goods sent to job worker", size: "210 KB" },
      ],
    },
    {
      category: "Company Law",
      items: [
        { name: "DIR-3 KYC Form", description: "Director KYC submission", size: "195 KB" },
        { name: "AOC-4 Template", description: "Annual financial statements filing", size: "340 KB" },
        { name: "MGT-7 Template", description: "Annual return filing format", size: "380 KB" },
        { name: "Board Resolution Format", description: "Standard board meeting resolution", size: "85 KB" },
      ],
    },
    {
      category: "Engagement",
      items: [
        { name: "Client Engagement Letter", description: "Standard engagement terms", size: "165 KB" },
        { name: "Document Checklist", description: "Required documents for various services", size: "140 KB" },
        { name: "Service Agreement Template", description: "Client service agreement", size: "220 KB" },
      ],
    },
  ];

  const filteredForms = forms.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

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
            <h1 className="text-5xl font-bold mb-6">Forms & Downloads</h1>
            <p className="text-xl text-blue-100 mb-8">
              Access all necessary forms, templates, and checklists for your compliance needs
            </p>

            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search forms..."
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Forms List */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredForms.map((category, catIdx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((form, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{form.name}</h3>
                          <p className="text-sm text-gray-600 mb-4">{form.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">{form.size}</span>
                            <button className="flex items-center gap-2 px-4 py-2 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-colors text-sm font-medium">
                              <Download className="w-4 h-4" />
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredForms.length === 0 && (
            <div className="text-center py-20">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No forms found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help with Forms?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our team can assist you with filling out forms and ensuring compliance
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-all duration-300 font-semibold shadow-lg"
            >
              Contact Us for Assistance
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
