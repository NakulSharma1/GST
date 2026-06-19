import { Link } from "react-router";
import { motion } from "motion/react";
import { Search, Calendar, ArrowRight, Tag } from "lucide-react";
import { useState } from "react";

export default function KnowledgeCentre() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["All", "Tax Updates", "Compliance Alerts", "GST", "Company Law", "FAQs"];

  const articles = [
    {
      slug: "budget-2026-key-highlights",
      title: "Budget 2026: Key Tax Highlights for Individuals and Businesses",
      excerpt: "A comprehensive breakdown of the major tax changes announced in Budget 2026 and their impact on taxpayers.",
      category: "Tax Updates",
      date: "April 5, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1762427907123-c7ab022a5de7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYWNjb3VudGluZyUyMGNhbGN1bGF0b3IlMjBkb2N1bWVudHN8ZW58MXx8fHwxNzc1Nzk5ODU4fDA&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      slug: "itr-filing-deadline-extended",
      title: "ITR Filing Deadline Extended: What You Need to Know",
      excerpt: "Income Tax Department extends the deadline for filing returns. Learn about the new dates and avoid penalties.",
      category: "Compliance Alerts",
      date: "March 28, 2026",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1772588627354-ca3617853217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmaW5hbmNlJTIwYWNjb3VudGluZyUyMGNhbGN1bGF0b3IlMjBkb2N1bWVudHN8ZW58MXx8fHwxNzc1Nzk5ODU4fDA&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      slug: "gst-annual-return-checklist",
      title: "GST Annual Return Filing: Complete Checklist 2026",
      excerpt: "Essential checklist and important points to remember while filing GSTR-9 and GSTR-9C for FY 2025-26.",
      category: "GST",
      date: "March 20, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1772588627474-ae6acc69ac42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmaW5hbmNlJTIwYWNjb3VudGluZyUyMGNhbGN1bGF0b3IlMjBkb2N1bWVudHN8ZW58MXx8fHwxNzc1Nzk5ODU4fDA&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      slug: "company-annual-compliance",
      title: "Annual Compliance Calendar for Private Limited Companies",
      excerpt: "Stay on top of your compliance obligations with this comprehensive annual compliance calendar for companies.",
      category: "Company Law",
      date: "March 15, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1772588627499-baefc8ab0ce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmaW5hbmNlJTIwYWNjb3VudGluZyUyMGNhbGN1bGF0b3IlMjBkb2N1bWVudHN8ZW58MXx8fHwxNzc1Nzk5ODU4fDA&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      slug: "nri-tax-faqs",
      title: "NRI Taxation: 10 Most Frequently Asked Questions",
      excerpt: "Common questions about NRI tax obligations, residential status, and DTAA benefits answered by our experts.",
      category: "FAQs",
      date: "March 10, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1758518729912-bf3a84c400e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwYnVzaW5lc3MlMjBwZW9wbGUlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzc1Nzk5ODU5fDA&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      slug: "startup-india-benefits",
      title: "Startup India Registration: Complete Guide and Benefits",
      excerpt: "Everything you need to know about Startup India registration, tax benefits, and compliance requirements.",
      category: "Tax Updates",
      date: "March 5, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwYnVzaW5lc3MlMjBwZW9wbGUlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzc1Nzk5ODU5fDA&ixlib=rb-4.1.0&q=80&w=400",
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            <h1 className="text-5xl font-bold mb-6">Knowledge Centre</h1>
            <p className="text-xl text-blue-100 mb-8">
              Stay updated with the latest tax laws, compliance alerts, and expert insights
            </p>

            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category.toLowerCase()
                    ? "bg-[#1e3a8a] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  to={`/knowledge-centre/${article.slug}`}
                  className="block h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1e3a8a] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                      <span className="flex items-center gap-2 text-[#1e3a8a] font-medium group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest tax updates and compliance alerts
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-8 py-4 bg-white text-[#1e3a8a] rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
