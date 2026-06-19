import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#C9A54C] to-[#b89543] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-[#0B1F3A] font-bold text-xl">CA</span>
              </div>
              <div>
                <div className="font-serif text-white text-lg leading-tight font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>Expert Consultancy</div>
                <div className="text-xs text-gray-400">Chartered Accountants</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted partner for financial, taxation, and compliance services. Serving individuals, businesses, and organizations with expertise and integrity.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#C9A54C] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#C9A54C] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#C9A54C] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-[#d4af37] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#d4af37] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#d4af37] transition-colors">Services</Link></li>
              <li><Link to="/knowledge-centre" className="hover:text-[#d4af37] transition-colors">Knowledge Centre</Link></li>
              <li><Link to="/client-portal" className="hover:text-[#d4af37] transition-colors">Client Portal</Link></li>
              <li><Link to="/document-automation" className="hover:text-[#d4af37] transition-colors">Document Automation</Link></li>
              <li><Link to="/contact" className="hover:text-[#d4af37] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/income-tax" className="hover:text-[#d4af37] transition-colors">Income Tax Services</Link></li>
              <li><Link to="/services/nri-taxation" className="hover:text-[#d4af37] transition-colors">NRI Taxation</Link></li>
              <li><Link to="/services/ngo-trust" className="hover:text-[#d4af37] transition-colors">NGO / Trust Services</Link></li>
              <li><Link to="/services/company-law" className="hover:text-[#d4af37] transition-colors">Company Law Services</Link></li>
              <li><Link to="/services/labour-law" className="hover:text-[#d4af37] transition-colors">Labour Law Compliance</Link></li>
              <li><Link to="/services/import-export" className="hover:text-[#d4af37] transition-colors">Import Export</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 Business District, Financial Avenue, Mumbai - 400001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 123 456 7890</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@expertca.com" className="hover:text-white transition-colors">info@expertca.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-400">© 2026 Expert Consultancy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-[#C9A54C] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#C9A54C] transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-[#C9A54C] transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
