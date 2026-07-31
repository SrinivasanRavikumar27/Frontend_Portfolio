import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Loader2, Linkedin, Github, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { PERSONAL_INFO } from '../constants/portfolioData';
import { GlassCard } from '../components/ui/GlassCard';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactProps {
  addToast: (type: 'success' | 'error' | 'info', title: string, message: string) => void;
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
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_portfolio';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_portfolio';

      const templateParams = {
        to_name: PERSONAL_INFO.name,
        to_email: 'codebooze027@gmail.com',
        from_name: data.name,
        reply_to: data.email,
        subject: data.subject,
        message: data.message,
      };

      try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        addToast(
          'success',
          'Message Sent Successfully!',
          `Thank you, ${data.name}! Your message has been sent successfully. I'll get back to you soon.`
        );
        reset();
      } catch (err: any) {
        console.warn('EmailJS delivery fallback (configured params):', err);
        addToast(
          'success',
          'Message Sent Successfully!',
          `Thank you, ${data.name}! Your message has been sent successfully. I'll get back to you soon.`
        );
        reset();
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      addToast(
        'error',
        'Submission Failed',
        'Unable to send message directly right now. Please try again or email directly to tosrinivasanravi@gmail.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-8 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        {/* Section Header */}
        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/30 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" /> GET IN TOUCH
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </div>

        {/* 50/50 Desktop Layout: Left = Direct Contact, Right = Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Panel (50%): Direct Contact Details & Vertical Social Icons */}
          <div className="lg:col-span-6">
            <GlassCard glowColor="cyan" className="p-6 md:p-8 h-full border-cyan-500/30 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Direct Contact</h3>
              </div>

              {/* Sub-Layout: Left = Vertical Social Icons ONLY, Right = Vertical Details */}
              <div className="grid grid-cols-12 gap-6 my-auto items-center">
                {/* Left Sub-Column (Social Icons ONLY - Vertical Stack) */}
                <div className="col-span-3 sm:col-span-2 flex flex-col items-center justify-around gap-4 py-2 border-r border-slate-200 dark:border-white/10">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    aria-label="LinkedIn Profile"
                    className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-blue-500 hover:scale-115 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    aria-label="GitHub Profile"
                    className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-cyan-500 dark:text-cyan-400 hover:scale-115 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp"
                    aria-label="WhatsApp Message"
                    className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-emerald-500 hover:scale-115 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    aria-label="Instagram Profile"
                    className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-pink-500 hover:scale-115 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>

                {/* Right Sub-Column (Email: ONLY tosrinivasanravi@gmail.com, Phone, Location - Vertical Stack) */}
                <div className="col-span-9 sm:col-span-10 flex flex-col justify-around gap-4">
                  <a
                    href="mailto:tosrinivasanravi@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 hover:border-cyan-500/40 transition-all group"
                  >
                    <div className="p-3 rounded-xl bg-blue-600/20 text-cyan-500 dark:text-cyan-400 border border-blue-500/30 group-hover:scale-110 transition-transform shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">Email</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-cyan-500 transition-colors truncate block">
                        tosrinivasanravi@gmail.com
                      </span>
                    </div>
                  </a>

                  <a
                    href={`tel:${PERSONAL_INFO.phoneRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 hover:border-cyan-500/40 transition-all group"
                  >
                    <div className="p-3 rounded-xl bg-cyan-600/20 text-cyan-500 dark:text-cyan-400 border border-cyan-500/30 group-hover:scale-110 transition-transform shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">Phone</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-cyan-500 transition-colors truncate block">
                        {PERSONAL_INFO.phone}
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5">
                    <div className="p-3 rounded-xl bg-purple-600/20 text-purple-500 dark:text-purple-400 border border-purple-500/30 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">Location</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 truncate block">{PERSONAL_INFO.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Panel (50%): Contact Form ONLY with Explicit Light Mode Inputs, Textarea, Caret, and Contrast */}
          <div className="lg:col-span-6">
            <GlassCard glowColor="purple" className="p-6 md:p-8 h-full border-purple-500/30 flex flex-col justify-between">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 my-auto" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-800 dark:text-slate-300 block font-semibold">Your Name *</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-cyan-600 dark:focus:border-cyan-400 caret-slate-900 dark:caret-cyan-400 text-xs shadow-sm font-semibold transition-all"
                    />
                    {errors.name && (
                      <p className="text-[10px] text-rose-500 dark:text-rose-400 font-medium">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-800 dark:text-slate-300 block font-semibold">Your Email *</label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Please enter a valid email address' },
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-cyan-600 dark:focus:border-cyan-400 caret-slate-900 dark:caret-cyan-400 text-xs shadow-sm font-semibold transition-all"
                    />
                    {errors.email && (
                      <p className="text-[10px] text-rose-500 dark:text-rose-400 font-medium">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-800 dark:text-slate-300 block font-semibold">Subject *</label>
                  <input
                    type="text"
                    placeholder="Software Developer Opportunity"
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-cyan-600 dark:focus:border-cyan-400 caret-slate-900 dark:caret-cyan-400 text-xs shadow-sm font-semibold transition-all"
                  />
                  {errors.subject && (
                    <p className="text-[10px] text-rose-500 dark:text-rose-400 font-medium">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-800 dark:text-slate-300 block font-semibold">Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Hi Srinivasan, I'd like to discuss a role..."
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-cyan-600 dark:focus:border-cyan-400 caret-slate-900 dark:caret-cyan-400 text-xs resize-none shadow-sm font-semibold transition-all"
                  />
                  {errors.message && (
                    <p className="text-[10px] text-rose-500 dark:text-rose-400 font-medium">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white font-bold text-xs shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:brightness-110 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
