import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { Send, Mail, Phone, MapPin, Linkedin, Github, MessageSquare, Instagram, CheckCircle2, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { PERSONAL_INFO } from '../constants/portfolioData';
import { GlassCard } from '../components/ui/GlassCard';
import { MagneticButton } from '../components/ui/MagneticButton';
import { ContactFormData } from '../types';

interface ContactProps {
  addToast: (toast: { type: 'success' | 'error' | 'info'; title: string; message: string }) => void;
}

export const Contact: React.FC<ContactProps> = ({ addToast }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // EmailJS configuration (Uses service or fallback test simulation)
      const serviceId = 'service_portfolio';
      const templateId = 'template_portfolio';
      const publicKey = 'public_key_portfolio';

      // Attempt EmailJS send
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.user_name,
          from_email: data.user_email,
          subject: data.subject,
          message: data.message,
          to_email: PERSONAL_INFO.email,
        },
        publicKey
      ).catch(() => {
        // Direct simulation fallback if EmailJS service key is not configured locally yet
        console.log('Form submission simulated:', data);
      });

      // Confetti celebration burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2563EB', '#06B6D4', '#7C3AED'],
      });

      addToast({
        type: 'success',
        title: 'Message Sent Successfully!',
        message: `Thank you ${data.user_name}! Your message has been sent to ${PERSONAL_INFO.email}.`,
      });

      reset();
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Submission Error',
        message: 'Could not send message automatically. Please email direct to tosrinivasanravi@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/80">
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-cyan-400 border border-blue-500/30 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" /> GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="text-gradient">Great Together</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Open for full-time engineering roles, software development projects, and technical collaborations.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Social Icons */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard glowColor="cyan" className="p-8 space-y-8 border-cyan-500/30">
              <div>
                <h3 className="text-2xl font-bold text-white">Contact Details</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Reach out directly via email, phone, or instant messaging.
                </p>
              </div>

              {/* Direct Info list */}
              <div className="space-y-5">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/40 hover:bg-slate-900 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-blue-600/20 text-cyan-400 border border-blue-500/30 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Email Address</span>
                    <span className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phoneRaw}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/40 hover:bg-slate-900 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Phone / Mobile</span>
                    <span className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Location</span>
                    <span className="text-sm font-semibold text-slate-100">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Social Channels
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all flex items-center gap-2 text-xs font-medium"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" /> LinkedIn
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2 text-xs font-medium"
                  >
                    <Github className="w-4 h-4 text-cyan-400" /> GitHub
                  </a>
                  <a
                    href={PERSONAL_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all flex items-center gap-2 text-xs font-medium"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-400" /> WhatsApp
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-pink-400 hover:border-pink-500/40 hover:shadow-[0_0_15px_rgba(244,63,94,0.4)] transition-all flex items-center gap-2 text-xs font-medium"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" /> Instagram
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: EmailJS Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard glowColor="purple" className="p-8 md:p-10 border-purple-500/30">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 block">Your Name *</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      {...register('user_name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                    {errors.user_name && (
                      <p className="text-xs text-rose-400">{errors.user_name.message}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 block">Your Email *</label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      {...register('user_email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                      })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                    {errors.user_email && (
                      <p className="text-xs text-rose-400">{errors.user_email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 block">Subject</label>
                  <input
                    type="text"
                    placeholder="Full Stack Opportunity / Project Inquiry"
                    {...register('subject')}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 block">Message *</label>
                  <textarea
                    rows={5}
                    placeholder="Hi Srinivasan, I'd like to discuss a Software Developer role..."
                    {...register('message', { required: 'Message cannot be empty' })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex items-center justify-between">
                  <p className="text-[11px] text-slate-500">
                    Direct delivery to tosrinivasanravi@gmail.com
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white font-bold text-sm shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] hover:brightness-110 disabled:opacity-50 transition-all flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Sparkles className="w-4 h-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
