import { Shield, Award, Users, TrendingUp } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    { icon: Shield, text: "100% Secure", color: "from-[#0B1F3A] to-[#1a3a5c]" },
    { icon: Award, text: "ICAI Certified", color: "from-[#C9A54C] to-[#b89543]" },
    { icon: Users, text: "500+ Clients", color: "from-[#0B1F3A] to-[#1a3a5c]" },
    { icon: TrendingUp, text: "15+ Years", color: "from-[#C9A54C] to-[#b89543]" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-12">
      {badges.map((badge, idx) => (
        <div
          key={idx}
          className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-md border border-gray-100/50 hover:shadow-lg transition-all duration-300"
        >
          <div className={`w-10 h-10 bg-gradient-to-br ${badge.color} rounded-lg flex items-center justify-center shadow-sm`}>
            <badge.icon className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-700">{badge.text}</span>
        </div>
      ))}
    </div>
  );
}
