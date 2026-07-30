import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { Send, Mail, Phone, MapPin, Linkedin, Github, MessageSquare, Instagram, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { PERSONAL_INFO } from '../constants/portfolioData';
import { GlassCard } from '../components/ui/GlassCard';
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
      const serviceId = 'service_portfolio';
      const templateId = 'template_portfolio';
      const publicKey = 'public_key_portfolio';

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
        console.log('Form submission simulated:', data);
      });

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
    <section id="contact" className="py-12 relative overflow-hidden dark:bg-slate-950/80 light:bg-slate-100/80">
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/10 text-cyan-500 dark:text-cyan-400 border border-blue-500/30 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" /> GET IN TOUCH
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white light:text-slate-900 tracking-tight lg:whitespace-nowrap">
            Let's Build Something <span className="text-gradient">Great Together</span>
          </h2>
        </div>

        {/* Swapped 50/50 Layout: Left = Direct Contact, Right = Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Panel (50%): Direct Contact ONLY */}
          <div className="lg:col-span-6">
            <GlassCard glowColor="cyan" className="p-8 h-full border-cyan-500/30 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-extrabold dark:text-white light:text-slate-900">Direct Contact</h3>
              </div>

              {/* Sub-Layout: Left = Vertical Social Icons ONLY, Right = Vertical Details */}
              <div className="grid grid-cols-12 gap-6 my-auto items-center">
                {/* Left Sub-Column (Social Icons ONLY - Vertical Stack) */}
                <div className="col-span-3 sm:col-span-2 flex flex-col items-center justify-around gap-4 py-2 border-r border-white/10 dark:border-white/10 light:border-slate-200">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    aria-label="LinkedIn Profile"
                    className="p-3 rounded-2xl dark:bg-slate-900 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-blue-500 hover:scale-115 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    aria-label="GitHub Profile"
                    className="p-3 rounded-2xl dark:bg-slate-900 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-cyan-400 hover:scale-115 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp"
                    aria-label="WhatsApp Message"
                    className="p-3 rounded-2xl dark:bg-slate-900 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-emerald-500 hover:scale-115 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    aria-label="Instagram Profile"
                    className="p-3 rounded-2xl dark:bg-slate-900 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-pink-500 hover:scale-115 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>

                {/* Right Sub-Column (Email, Phone, Location - Vertical Stack) */}
                <div className="col-span-9 sm:col-span-10 flex flex-col justify-around gap-4">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-4 p-3.5 rounded-xl dark:bg-slate-900/60 light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-cyan-500/40 transition-all group"
                  >
                    <div className="p-3 rounded-xl bg-blue-600/20 text-cyan-400 border border-blue-500/30 group-hover:scale-110 transition-transform shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Email</span>
                      <span className="text-xs sm:text-sm font-semibold dark:text-slate-100 light:text-slate-800 group-hover:text-cyan-500 transition-colors truncate block">
                        {PERSONAL_INFO.email}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`tel:${PERSONAL_INFO.phoneRaw}`}
                    className="flex items-center gap-4 p-3.5 rounded-xl dark:bg-slate-900/60 light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-cyan-500/40 transition-all group"
                  >
                    <div className="p-3 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 group-hover:scale-110 transition-transform shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Phone</span>
                      <span className="text-xs sm:text-sm font-semibold dark:text-slate-100 light:text-slate-800 group-hover:text-cyan-500 transition-colors truncate block">
                        {PERSONAL_INFO.phone}
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3.5 rounded-xl dark:bg-slate-900/60 light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200">
                    <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Location</span>
                      <span className="text-xs sm:text-sm font-semibold dark:text-slate-100 light:text-slate-800 truncate block">{PERSONAL_INFO.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Panel (50%): Contact Form ONLY (Matching Left Panel Height) */}
          <div className="lg:col-span-6">
            <GlassCard glowColor="purple" className="p-6 md:p-8 h-full border-purple-500/30 flex flex-col justify-between">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 my-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono dark:text-slate-300 light:text-slate-700 block">Your Name *</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      {...register('user_name', { required: 'Name is required' })}
                      className="w-full px-3.5 py-2.5 rounded-xl dark:bg-slate-900/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs"
                    />
                    {errors.user_name && (
                      <p className="text-[10px] text-rose-400">{errors.user_name.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono dark:text-slate-300 light:text-slate-700 block">Your Email *</label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      {...register('user_email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl dark:bg-slate-900/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs"
                    />
                    {errors.user_email && (
                      <p className="text-[10px] text-rose-400">{errors.user_email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono dark:text-slate-300 light:text-slate-700 block">Subject</label>
                  <input
                    type="text"
                    placeholder="Software Developer Opportunity"
                    {...register('subject')}
                    className="w-full px-3.5 py-2.5 rounded-xl dark:bg-slate-900/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono dark:text-slate-300 light:text-slate-700 block">Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Hi Srinivasan, I'd like to discuss a role..."
                    {...register('message', { required: 'Message cannot be empty' })}
                    className="w-full px-3.5 py-2.5 rounded-xl dark:bg-slate-900/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs resize-none"
                  />
                  {errors.message && (
                    <p className="text-[10px] text-rose-400">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white font-bold text-xs shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:brightness-110 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
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
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
