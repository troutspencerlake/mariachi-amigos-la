"use client";

import { useState, useRef, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  Send,
  User,
  MapPin,
  Calendar,
  Users,
  Clock,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageProvider";

type FormState = "idle" | "submitting" | "success" | "error";

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  location: string;
  musicians: string;
  duration: string;
  requests: string;
}

const initialFormData: BookingFormData = {
  name: "",
  email: "",
  phone: "",
  eventDate: "",
  eventType: "",
  location: "",
  musicians: "",
  duration: "",
  requests: "",
};

function InputField({
  label,
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  required = false,
}: {
  label: string;
  icon: React.ElementType;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-white/80 text-sm font-semibold block">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full bg-white/5 border border-white/15 hover:border-white/30 focus:border-fiesta-gold text-white placeholder-white/30 rounded-xl pl-10 pr-4 py-3 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-fiesta-gold/20 form-input"
        />
      </div>
    </div>
  );
}

export default function Booking() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [formState, setFormState] = useState<FormState>("idle");
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState("success");
        setFormData(initialFormData);
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const form = t.booking.form;

  return (
    <section
      id="booking"
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#1A0A00] via-[#1E0D00] to-[#1A0A00] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 confetti-bg" />
      <div className="absolute top-0 left-0 right-0 h-1 fiesta-divider" />

      {/* Big trumpet decoration */}
      <div className="absolute right-0 bottom-0 text-[300px] opacity-[0.03] pointer-events-none select-none leading-none">
        🎺
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={sectionRef}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-fiesta-orange/20 border border-fiesta-orange/30 text-fiesta-orange font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            {t.booking.sectionLabel}
          </span>
          <h2 className="section-title text-white mb-4">{t.booking.title}</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{t.booking.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* ── Left: Direct Contact ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-white/70 font-semibold uppercase tracking-widest text-sm mb-6">
              {t.booking.directContact}
            </p>

            {/* Phone — huge tap target */}
            <a
              href="tel:+13237676657"
              className="phone-link flex items-center gap-4 bg-fiesta-red hover:bg-fiesta-red/80 text-white rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-fiesta-red/30 group"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <div className="text-white/70 text-xs uppercase tracking-wider mb-0.5">
                  Call or Text
                </div>
                <div className="text-xl font-black">{t.booking.phone}</div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${t.booking.email}`}
              className="flex items-center gap-4 bg-fiesta-orange/20 hover:bg-fiesta-orange/30 border border-fiesta-orange/30 text-white rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="w-14 h-14 bg-fiesta-orange/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-fiesta-orange" />
              </div>
              <div>
                <div className="text-white/70 text-xs uppercase tracking-wider mb-0.5">
                  Email Us
                </div>
                <div className="font-bold text-fiesta-orange break-all">{t.booking.email}</div>
              </div>
            </a>

            {/* Response time badge */}
            <div className="bg-fiesta-green/10 border border-fiesta-green/30 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-5 h-5 text-fiesta-green" />
                <span className="text-fiesta-green font-bold">Fast Response</span>
              </div>
              <p className="text-white/60 text-sm">
                We typically respond within 2–4 hours. For urgent bookings, please call us directly.
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/mariachiamigos_la"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#f09433] to-[#bc1888] text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity text-sm"
              >
                📷 Instagram
              </a>
              <a
                href="https://www.facebook.com/mariachiamigosla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#1877F2]/80 text-white font-bold py-3 rounded-xl transition-colors text-sm"
              >
                👍 Facebook
              </a>
            </div>
          </motion.div>

          {/* ── Right: Booking Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">

              {/* Success State */}
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-fiesta-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-fiesta-green" />
                  </div>
                  <h3 className="text-white font-black text-2xl mb-3">
                    {form.successTitle}
                  </h3>
                  <p className="text-white/70 mb-8">{form.successMessage}</p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="bg-fiesta-green hover:bg-fiesta-green/80 text-white font-bold px-8 py-3 rounded-full transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Row 1: Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField
                      label={form.name}
                      icon={User}
                      placeholder={form.namePlaceholder}
                      value={formData.name}
                      onChange={handleChange}
                      name="name"
                      required
                    />
                    <InputField
                      label={form.email}
                      icon={Mail}
                      type="email"
                      placeholder={form.emailPlaceholder}
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                      required
                    />
                  </div>

                  {/* Row 2: Phone + Event Date */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField
                      label={form.phone}
                      icon={Phone}
                      type="tel"
                      placeholder={form.phonePlaceholder}
                      value={formData.phone}
                      onChange={handleChange}
                      name="phone"
                      required
                    />
                    <InputField
                      label={form.eventDate}
                      icon={Calendar}
                      type="date"
                      placeholder=""
                      value={formData.eventDate}
                      onChange={handleChange}
                      name="eventDate"
                      required
                    />
                  </div>

                  {/* Event Type */}
                  <div className="space-y-1.5">
                    <label className="text-white/80 text-sm font-semibold block">
                      {form.eventType}
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/15 hover:border-white/30 focus:border-fiesta-gold text-white rounded-xl px-4 py-3 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-fiesta-gold/20 form-input appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#1A0A00]">
                        {form.eventTypePlaceholder}
                      </option>
                      {form.eventTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#1A0A00]">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location */}
                  <InputField
                    label={form.location}
                    icon={MapPin}
                    placeholder={form.locationPlaceholder}
                    value={formData.location}
                    onChange={handleChange}
                    name="location"
                    required
                  />

                  {/* Row 3: Musicians + Duration */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField
                      label={form.musicians}
                      icon={Users}
                      placeholder={form.musiciansPlaceholder}
                      value={formData.musicians}
                      onChange={handleChange}
                      name="musicians"
                    />
                    <InputField
                      label={form.duration}
                      icon={Clock}
                      placeholder={form.durationPlaceholder}
                      value={formData.duration}
                      onChange={handleChange}
                      name="duration"
                    />
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-1.5">
                    <label className="text-white/80 text-sm font-semibold block flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-white/40" />
                      {form.requests}
                    </label>
                    <textarea
                      name="requests"
                      value={formData.requests}
                      onChange={handleChange}
                      placeholder={form.requestsPlaceholder}
                      rows={4}
                      className="w-full bg-white/5 border border-white/15 hover:border-white/30 focus:border-fiesta-gold text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-fiesta-gold/20 resize-none form-input"
                    />
                  </div>

                  {/* Error message */}
                  {formState === "error" && (
                    <div className="flex items-center gap-2 text-fiesta-red bg-fiesta-red/10 border border-fiesta-red/20 rounded-xl p-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{form.errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={formState === "submitting"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-fiesta-gold via-fiesta-orange to-fiesta-red hover:from-fiesta-red hover:to-fiesta-gold text-white font-black text-lg py-4 rounded-2xl shadow-2xl shadow-fiesta-orange/30 transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {form.submitting}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {form.submit}
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
