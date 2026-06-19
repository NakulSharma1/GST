import { motion } from "motion/react";

export default function Disclaimer() {
  return (
    <div>
      <section className="relative py-12 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl font-bold mb-4">Disclaimer</h1>
            <p className="text-blue-100">Last updated: April 10, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">General Information</h2>
          <p className="text-gray-700 mb-6">
            The information provided on this website and through our services is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Advice</h2>
          <p className="text-gray-700 mb-6">
            The content on this website does not constitute professional advice. You should not act solely on the basis of the information contained on this website without seeking specific professional advice from a qualified chartered accountant or tax professional.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tax Laws and Regulations</h2>
          <p className="text-gray-700 mb-6">
            Tax laws and regulations are subject to frequent changes. While we make every effort to stay current with legislative developments, we cannot guarantee that all information is the most recent version. Always verify current regulations with official sources or consult our professionals for the latest updates.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">No Guarantee of Results</h2>
          <p className="text-gray-700 mb-6">
            We provide our services with professional care and diligence, but we cannot guarantee specific outcomes, tax savings, or results. Tax positions and compliance matters depend on individual circumstances and interpretation of laws by regulatory authorities.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
          <p className="text-gray-700 mb-6">
            Our website may contain links to third-party websites. We have no control over the content, privacy policies, or practices of third-party sites and assume no responsibility for them.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 mb-6">
            Expert Consultancy and its partners, employees, or agents shall not be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from or in connection with the use of this website or our services.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to Disclaimer</h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to the website.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions about this disclaimer, please contact us at info@expertca.com or call +91 123 456 7890.
          </p>
        </div>
      </section>
    </div>
  );
}
