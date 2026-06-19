import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar as CalendarIcon, Clock, User, Mail, Phone, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

interface AppointmentBookingProps {
  open: boolean;
  onClose: () => void;
}

export default function AppointmentBooking({ open, onClose }: AppointmentBookingProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const consultationTypes = [
    { value: "tax-planning", label: "Tax Planning Consultation", duration: "45 min", price: "₹2,000" },
    { value: "compliance", label: "Compliance Review", duration: "30 min", price: "₹1,500" },
    { value: "nri-taxation", label: "NRI Tax Consultation", duration: "60 min", price: "₹3,000" },
    { value: "business-advisory", label: "Business Advisory", duration: "60 min", price: "₹2,500" },
    { value: "general", label: "General Consultation", duration: "30 min", price: "Free" },
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const isDateAvailable = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today && date.getDay() !== 0; // Not in past and not Sunday
  };

  const handleDateSelect = (day: number) => {
    if (isDateAvailable(day)) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      setSelectedDate(date);
      setStep(3);
    }
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      setSelectedDate(null);
      setSelectedTime("");
      setConsultationType("");
      setFormData({ name: "", email: "", phone: "", notes: "" });
      onClose();
    }, 3000);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  };

  const monthYear = currentMonth.toLocaleDateString("en-IN", { month: "long", year: "numeric" });

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-white rounded-2xl shadow-2xl z-50 max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white p-6 rounded-t-2xl z-10">
              <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <CalendarIcon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Book an Appointment</h2>
                  <p className="text-blue-100">Schedule a consultation with our experts</p>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-center gap-4 mt-6">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold transition-all ${
                        step >= s ? "bg-white text-[#1e3a8a]" : "bg-white/20 text-white/60"
                      }`}
                    >
                      {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                    </div>
                    {s < 4 && <div className={`w-12 h-1 mx-2 ${step > s ? "bg-white" : "bg-white/20"}`} />}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8">
              {!submitted ? (
                <>
                  {/* Step 1: Consultation Type */}
                  {step === 1 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Select Consultation Type</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {consultationTypes.map((type) => (
                          <button
                            key={type.value}
                            onClick={() => {
                              setConsultationType(type.value);
                              setStep(2);
                            }}
                            className={`p-6 border-2 rounded-xl text-left transition-all hover:border-[#1e3a8a] hover:shadow-md ${
                              consultationType === type.value ? "border-[#1e3a8a] bg-blue-50" : "border-gray-200"
                            }`}
                          >
                            <div className="font-semibold text-gray-900 mb-2">{type.label}</div>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {type.duration}
                              </span>
                              <span className="font-semibold text-[#d4af37]">{type.price}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Select Date */}
                  {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-gray-900">Select Date</h3>
                        <button
                          onClick={() => setStep(1)}
                          className="text-sm text-[#1e3a8a] hover:underline flex items-center gap-1"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Back
                        </button>
                      </div>

                      <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-6">
                          <button
                            onClick={previousMonth}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <h4 className="text-lg font-semibold text-gray-900">{monthYear}</h4>
                          <button
                            onClick={nextMonth}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="grid grid-cols-7 gap-2">
                          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                            <div key={day} className="text-center font-semibold text-gray-600 text-sm py-2">
                              {day}
                            </div>
                          ))}
                          {Array.from({ length: startingDayOfWeek }).map((_, i) => (
                            <div key={`empty-${i}`} />
                          ))}
                          {Array.from({ length: daysInMonth }).map((_, i) => {
                            const day = i + 1;
                            const available = isDateAvailable(day);
                            const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === currentMonth.getMonth();

                            return (
                              <button
                                key={day}
                                onClick={() => handleDateSelect(day)}
                                disabled={!available}
                                className={`aspect-square rounded-lg font-medium transition-all ${
                                  isSelected
                                    ? "bg-[#1e3a8a] text-white"
                                    : available
                                    ? "hover:bg-blue-50 hover:border-[#1e3a8a] border-2 border-transparent"
                                    : "text-gray-300 cursor-not-allowed"
                                }`}
                              >
                                {day}
                              </button>
                            );
                          })}
                        </div>

                        <div className="mt-4 text-sm text-gray-600">
                          <span className="font-medium">Note:</span> Consultations are available Monday-Saturday
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Select Time */}
                  {step === 3 && selectedDate && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Select Time</h3>
                          <p className="text-sm text-gray-600 mt-1">{formatDate(selectedDate)}</p>
                        </div>
                        <button
                          onClick={() => setStep(2)}
                          className="text-sm text-[#1e3a8a] hover:underline flex items-center gap-1"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Back
                        </button>
                      </div>

                      <div className="grid grid-cols-4 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => {
                              setSelectedTime(time);
                              setStep(4);
                            }}
                            className={`p-4 border-2 rounded-lg font-medium transition-all hover:border-[#1e3a8a] hover:shadow-sm ${
                              selectedTime === time ? "border-[#1e3a8a] bg-blue-50" : "border-gray-200"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Contact Details */}
                  {step === 4 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-gray-900">Your Details</h3>
                        <button
                          onClick={() => setStep(3)}
                          className="text-sm text-[#1e3a8a] hover:underline flex items-center gap-1"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Back
                        </button>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Appointment Summary</h4>
                        <div className="space-y-1 text-sm text-gray-700">
                          <p><span className="font-medium">Type:</span> {consultationTypes.find(t => t.value === consultationType)?.label}</p>
                          <p><span className="font-medium">Date:</span> {formatDate(selectedDate!)}</p>
                          <p><span className="font-medium">Time:</span> {selectedTime}</p>
                          <p><span className="font-medium">Duration:</span> {consultationTypes.find(t => t.value === consultationType)?.duration}</p>
                          <p><span className="font-medium text-[#d4af37]">Fee:</span> <span className="text-[#d4af37] font-semibold">{consultationTypes.find(t => t.value === consultationType)?.price}</span></p>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none"
                              placeholder="Enter your name"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none"
                                placeholder="your@email.com"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <input
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none"
                                placeholder="+91 98765 43210"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes (Optional)</label>
                          <textarea
                            rows={3}
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none resize-none"
                            placeholder="Any specific topics you'd like to discuss..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full px-6 py-4 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                        >
                          Confirm Appointment
                        </button>
                      </form>
                    </motion.div>
                  )}
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Appointment Confirmed!</h3>
                  <p className="text-gray-600 mb-2">Your consultation has been scheduled successfully.</p>
                  <p className="text-sm text-gray-500">A confirmation email has been sent to {formData.email}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
