import { motion } from "motion/react";

export default function Terms() {
  return (
    <div>
      <section className="relative py-12 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-blue-100">Last updated: April 10, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
          <p className="text-gray-700 mb-6">
            By accessing and using the services of Expert Consultancy, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-gray-700 mb-6">
            We provide chartered accountancy, taxation, compliance, and business consultancy services. Our engagement is subject to specific terms outlined in individual engagement letters.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Responsibilities</h2>
          <p className="text-gray-700 mb-4">As a client, you agree to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Provide accurate and complete information</li>
            <li>Submit required documents in a timely manner</li>
            <li>Pay fees as per agreed terms</li>
            <li>Inform us of any changes affecting our engagement</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Standards</h2>
          <p className="text-gray-700 mb-6">
            We conduct our services in accordance with professional standards set by the Institute of Chartered Accountants of India (ICAI) and applicable laws.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Confidentiality</h2>
          <p className="text-gray-700 mb-6">
            We maintain strict confidentiality of client information except where disclosure is required by law or authorized by the client.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 mb-6">
            Our liability is limited to the fees paid for the specific service. We are not liable for consequential damages or losses arising from our services.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Termination</h2>
          <p className="text-gray-700 mb-6">
            Either party may terminate the engagement with written notice. Fees for services rendered up to the termination date remain payable.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Governing Law</h2>
          <p className="text-gray-700 mb-6">
            These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Mumbai, Maharashtra.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-6">
            For questions about these Terms of Service, contact us at info@expertca.com or +91 123 456 7890.
          </p>
        </div>
      </section>
    </div>
  );
}
