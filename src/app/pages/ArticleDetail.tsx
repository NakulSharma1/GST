import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react";

export default function ArticleDetail() {
  const { slug } = useParams();

  return (
    <div>
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/knowledge-centre"
            className="inline-flex items-center gap-2 text-[#1e3a8a] font-medium hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Knowledge Centre
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                Tax Updates
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                April 5, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                5 min read
              </span>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Budget 2026: Key Tax Highlights for Individuals and Businesses
            </h1>

            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-full" />
                <div>
                  <div className="font-semibold text-gray-900">CA Amit Patel</div>
                  <div className="text-sm text-gray-600">Tax Expert</div>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <img
              src="https://images.unsplash.com/photo-1762427907123-c7ab022a5de7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYWNjb3VudGluZyUyMGNhbGN1bGF0b3IlMjBkb2N1bWVudHN8ZW58MXx8fHwxNzc1Nzk5ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Budget 2026"
              className="w-full h-96 object-cover rounded-2xl mb-8"
            />

            <p className="text-xl text-gray-700 mb-6">
              The Union Budget 2026 has introduced several significant changes to the income tax structure that will impact both individual taxpayers and businesses. Here's a comprehensive breakdown of the key highlights you need to know.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes for Individual Taxpayers</h2>

            <p className="text-gray-700 mb-4">
              The new tax regime has been revised with more attractive slabs to encourage adoption. The standard deduction has been increased from ₹50,000 to ₹75,000, providing immediate relief to salaried employees.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">New Tax Slabs (New Regime)</h3>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Up to ₹3 lakhs: Nil</li>
              <li>₹3-7 lakhs: 5%</li>
              <li>₹7-10 lakhs: 10%</li>
              <li>₹10-12 lakhs: 15%</li>
              <li>₹12-15 lakhs: 20%</li>
              <li>Above ₹15 lakhs: 30%</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Tax Changes</h2>

            <p className="text-gray-700 mb-4">
              Corporate tax rates remain unchanged for most businesses, but startups will now enjoy extended tax holiday benefits. The tax holiday period for eligible startups has been extended by another year.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Capital Gains Taxation</h2>

            <p className="text-gray-700 mb-4">
              Long-term capital gains tax on listed equity shares continues at 10% for gains exceeding ₹1 lakh. However, the holding period for unlisted securities to qualify as long-term has been reduced from 36 months to 24 months.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">What This Means for You</h2>

            <p className="text-gray-700 mb-4">
              For most salaried individuals, the increased standard deduction and revised tax slabs will result in tax savings of approximately ₹10,000 to ₹15,000 annually. Businesses should evaluate whether the new provisions offer any strategic planning opportunities.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#1e3a8a] p-6 my-8 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Tip</h3>
              <p className="text-gray-700 mb-0">
                It's crucial to review your tax planning strategy in light of these changes. Consider consulting with a tax professional to optimize your tax position for FY 2026-27.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Next Steps</h2>

            <p className="text-gray-700 mb-4">
              We recommend reviewing your current tax-saving investments and determining whether the new regime or old regime offers better benefits for your specific situation. Our team can help you analyze your unique circumstances and develop a tax-efficient strategy.
            </p>
          </motion.article>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-all font-semibold shadow-lg"
            >
              Consult Our Tax Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
