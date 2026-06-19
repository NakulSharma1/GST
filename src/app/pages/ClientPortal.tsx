import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import {
  LayoutDashboard,
  FileText,
  Upload,
  Bell,
  Calendar,
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
  User,
  Settings,
  LogOut,
  Lock,
} from "lucide-react";

export default function ClientPortal() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isAuthenticated] = useState(false); // Mock auth - set to true to see dashboard

  const upcomingDeadlines = [
    { task: "GST Return Filing (GSTR-3B)", date: "April 20, 2026", status: "upcoming" },
    { task: "TDS Return Q4 FY 2025-26", date: "April 30, 2026", status: "upcoming" },
    { task: "Income Tax Advance Tax Q4", date: "May 15, 2026", status: "pending" },
  ];

  const recentDocuments = [
    { name: "ITR-1 FY 2024-25.pdf", date: "March 28, 2026", size: "245 KB" },
    { name: "GST Certificate.pdf", date: "March 15, 2026", size: "180 KB" },
    { name: "PF Challan Feb 2026.pdf", date: "March 5, 2026", size: "95 KB" },
  ];

  const complianceStatus = [
    { name: "Income Tax Return Filed", status: "completed", date: "March 28, 2026" },
    { name: "GST Returns (Jan-Mar)", status: "completed", date: "April 10, 2026" },
    { name: "PF & ESI Payments", status: "completed", date: "April 8, 2026" },
    { name: "ROC Annual Filings", status: "in-progress", date: "Due: April 30, 2026" },
  ];

  const notifications = [
    { message: "Your ITR has been successfully filed", time: "2 hours ago", type: "success" },
    { message: "GST return deadline approaching in 10 days", time: "1 day ago", type: "warning" },
    { message: "New document uploaded: PF Challan", time: "3 days ago", type: "info" },
  ];

  // Show login prompt if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1e40af] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Client Portal Access</h1>
          <p className="text-xl text-blue-100 mb-8">
            Sign in to access your dashboard, documents, and compliance status
          </p>
          <div className="flex flex-col gap-4">
            <Link
              to="/login"
              className="px-8 py-4 bg-white text-[#1e3a8a] rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg"
            >
              Sign In to Portal
            </Link>
            <Link
              to="/signup"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold"
            >
              Create New Account
            </Link>
          </div>
          <div className="mt-8">
            <Link to="/" className="text-white hover:text-blue-100 text-sm">
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-white to-blue-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">Client Portal</h1>
                <span className="px-3 py-1 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-white text-xs font-semibold rounded-full">
                  PREMIUM
                </span>
              </div>
              <p className="text-gray-600">Welcome back, Rajesh Kumar</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Rajesh Kumar</div>
                  <div className="text-sm text-gray-600">Client ID: CL-2024-0123</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-4 space-y-2">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "dashboard" ? "bg-[#1e3a8a] text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <LayoutDashboard className="w-5 h-5" />
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab("documents")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "documents" ? "bg-[#1e3a8a] text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <FileText className="w-5 h-5" />
                Documents
              </button>
              <button
                onClick={() => setActiveTab("compliance")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "compliance" ? "bg-[#1e3a8a] text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <CheckCircle2 className="w-5 h-5" />
                Compliance
              </button>
              <button
                onClick={() => setActiveTab("appointments")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "appointments" ? "bg-[#1e3a8a] text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Calendar className="w-5 h-5" />
                Appointments
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "settings" ? "bg-[#1e3a8a] text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Settings className="w-5 h-5" />
                Settings
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {activeTab === "dashboard" && (
              <>
                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-6 rounded-xl shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
                    <div className="text-gray-600">Completed Tasks</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-yellow-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">3</div>
                    <div className="text-gray-600">Pending Items</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-6 rounded-xl shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">24</div>
                    <div className="text-gray-600">Total Documents</div>
                  </motion.div>
                </div>

                {/* Upcoming Deadlines */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Deadlines</h2>
                  <div className="space-y-4">
                    {upcomingDeadlines.map((deadline, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#1e3a8a] rounded-lg flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{deadline.task}</div>
                            <div className="text-sm text-gray-600">{deadline.date}</div>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                          {deadline.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notifications */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Notifications</h2>
                  <div className="space-y-4">
                    {notifications.map((notif, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            notif.type === "success"
                              ? "bg-green-100"
                              : notif.type === "warning"
                              ? "bg-yellow-100"
                              : "bg-blue-100"
                          }`}
                        >
                          {notif.type === "success" ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                          ) : notif.type === "warning" ? (
                            <AlertCircle className="w-5 h-5 text-yellow-600" />
                          ) : (
                            <Bell className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-900">{notif.message}</div>
                          <div className="text-sm text-gray-600 mt-1">{notif.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === "documents" && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">My Documents</h2>
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-colors">
                    <Upload className="w-4 h-4" />
                    Upload Document
                  </button>
                </div>
                <div className="space-y-3">
                  {recentDocuments.map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{doc.name}</div>
                          <div className="text-sm text-gray-600">
                            {doc.date} • {doc.size}
                          </div>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-white rounded-lg transition-colors">
                        <Download className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "compliance" && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Compliance Status</h2>
                <div className="space-y-4">
                  {complianceStatus.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            item.status === "completed" ? "bg-green-100" : "bg-yellow-100"
                          }`}
                        >
                          {item.status === "completed" ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                          ) : (
                            <Clock className="w-5 h-5 text-yellow-600" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-600">{item.date}</div>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {item.status === "completed" ? "Completed" : "In Progress"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
