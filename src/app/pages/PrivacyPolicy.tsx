import { motion } from "motion/react";

export default function PrivacyPolicy() {
  return (
    <div>
      <section className="relative py-12 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-blue-100">Last updated: April 10, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            Expert Consultancy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-4">We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Personal identification information (name, email address, phone number, etc.)</li>
            <li>Financial information required for tax and compliance services</li>
            <li>Business information (company details, registration numbers, etc.)</li>
            <li>Documents and records provided for our services</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Provide, maintain, and improve our services</li>
            <li>Process tax returns and compliance filings</li>
            <li>Communicate with you about our services</li>
            <li>Comply with legal and regulatory requirements</li>
            <li>Protect against fraud and unauthorized transactions</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Information Sharing</h2>
          <p className="text-gray-700 mb-6">
            We do not sell, trade, or rent your personal information to third parties. We may share your information with government authorities as required by law for tax filings and regulatory compliance.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Security</h2>
          <p className="text-gray-700 mb-6">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data (subject to legal requirements)</li>
            <li>Object to processing of your information</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have questions about this Privacy Policy, please contact us at info@expertca.com or call +91 123 456 7890.
          </p>
        </div>
      </section>
    </div>
  );
}
