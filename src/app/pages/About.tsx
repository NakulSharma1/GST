import { motion } from "motion/react";
import { Award, Target, Eye, Users, TrendingUp, Shield } from "lucide-react";

export default function About() {
  const team = [
    {
      name: "CA Amit Patel",
      role: "Founder & Managing Partner",
      image: "https://images.unsplash.com/photo-1758518729912-bf3a84c400e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwYnVzaW5lc3MlMjBwZW9wbGUlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzc1Nzk5ODU5fDA&ixlib=rb-4.1.0&q=80&w=400",
      credentials: "FCA, MBA",
      experience: "18+ years in taxation and corporate advisory",
    },
    {
      name: "CA Priya Sharma",
      role: "Partner - Audit & Assurance",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwYnVzaW5lc3MlMjBwZW9wbGUlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzc1Nzk5ODU5fDA&ixlib=rb-4.1.0&q=80&w=400",
      credentials: "FCA, DISA",
      experience: "15+ years in audit and compliance",
    },
    {
      name: "CA Rajesh Kumar",
      role: "Partner - International Taxation",
      image: "https://images.unsplash.com/photo-1758518731457-5ef826b75b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwYnVzaW5lc3MlMjBwZW9wbGUlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzc1Nzk5ODU5fDA&ixlib=rb-4.1.0&q=80&w=400",
      credentials: "FCA, LLB",
      experience: "12+ years in NRI and cross-border taxation",
    },
    {
      name: "CA Sneha Desai",
      role: "Senior Manager - Corporate Services",
      image: "https://images.unsplash.com/photo-1758518726869-01aff69a56e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwYnVzaW5lc3MlMjBwZW9wbGUlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzc1Nzk5ODU5fDA&ixlib=rb-4.1.0&q=80&w=400",
      credentials: "ACA, CS",
      experience: "10+ years in company law and secretarial services",
    },
  ];

  const milestones = [
    { year: "2008", title: "Firm Established", description: "Started with a vision to provide quality financial services" },
    { year: "2012", title: "100 Clients Milestone", description: "Reached our first major client milestone" },
    { year: "2016", title: "Expanded Services", description: "Added NRI taxation and import-export consultancy" },
    { year: "2020", title: "Digital Transformation", description: "Launched client portal and digital services" },
    { year: "2024", title: "500+ Happy Clients", description: "Serving diverse clients across India and abroad" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Maintaining highest ethical standards in all our dealings",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering quality service that exceeds expectations",
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "Your success is our priority and measure of achievement",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Adopting latest technology and best practices",
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
            <h1 className="text-5xl font-bold mb-6">About Expert Consultancy</h1>
            <p className="text-xl text-blue-100">
              Building trust through expertise, delivering excellence through commitment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-4">
                Expert Consultancy is a leading Chartered Accountancy firm established in 2008, dedicated to providing comprehensive financial, taxation, and compliance services to individuals, businesses, and organizations across India.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With over 15 years of experience and a team of qualified professionals, we have successfully served 500+ clients ranging from salaried individuals and NRIs to startups, SMEs, and large corporations.
              </p>
              <p className="text-lg text-gray-700">
                Our expertise spans income tax, GST, company law, labour law compliance, NGO services, and import-export consultancy, making us a one-stop solution for all your financial and regulatory needs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1714974528693-f77f6fcc56af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBidXNpbmVzcyUyMGNvbnN1bHRhbnQlMjBtZWV0aW5nfGVufDF8fHx8MTc3NTc5OTg1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional team meeting"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To be India's most trusted and client-centric financial consultancy firm, recognized for excellence, innovation, and unwavering commitment to client success in an evolving regulatory landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To empower our clients with accurate, timely, and strategic financial solutions while ensuring complete compliance, leveraging technology, and building lasting relationships based on trust and transparency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Principles that guide our work and relationships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
