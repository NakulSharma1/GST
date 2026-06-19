import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import CallbackModal from "./CallbackModal";
import Chatbot from "./Chatbot";
import AppointmentBooking from "./AppointmentBooking";
import { useState } from "react";

export default function RootLayout() {
  const [showCallback, setShowCallback] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar
        onRequestCallback={() => setShowCallback(true)}
        onBookAppointment={() => setShowAppointment(true)}
      />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
      <CallbackModal open={showCallback} onClose={() => setShowCallback(false)} />
      <AppointmentBooking open={showAppointment} onClose={() => setShowAppointment(false)} />
    </div>
  );
}
