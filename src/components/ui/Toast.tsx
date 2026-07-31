import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
  onClose: (id: string) => void;
}

export const ToastItem: React.FC<ToastProps> = ({ id, type, title, message, onClose }) => {
  const icons = {
    success: <CheckCircle2 className="w-6 h-6 dark:text-emerald-400 light:text-emerald-600 shrink-0" />,
    error: <AlertCircle className="w-6 h-6 dark:text-rose-400 light:text-rose-600 shrink-0" />,
    info: <Info className="w-6 h-6 dark:text-cyan-400 light:text-cyan-600 shrink-0" />,
  };

  const borderColors = {
    success: 'dark:border-emerald-500/40 light:border-emerald-400 dark:shadow-[0_0_25px_rgba(16,185,129,0.3)] light:shadow-xl',
    error: 'dark:border-rose-500/40 light:border-rose-400 dark:shadow-[0_0_25px_rgba(244,63,94,0.3)] light:shadow-xl',
    info: 'dark:border-cyan-500/40 light:border-cyan-400 dark:shadow-[0_0_25px_rgba(6,182,212,0.3)] light:shadow-xl',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
      className={`glass-card dark:bg-slate-900/90 light:bg-white/95 p-4 rounded-xl flex items-start gap-3 border ${borderColors[type]} max-w-md w-full pointer-events-auto backdrop-blur-md`}
    >
      {icons[type]}
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-sm dark:text-slate-100 light:text-slate-900">{title}</h4>
        <p className="text-xs dark:text-slate-300 light:text-slate-700 mt-0.5 leading-relaxed font-medium">{message}</p>
      </div>
      <button
        onClick={() => onClose(id)}
        className="dark:text-slate-400 light:text-slate-500 dark:hover:text-white light:hover:text-slate-900 p-1 rounded-lg transition-colors"
        aria-label="Close Notification"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export const ToastContainer: React.FC<{ toasts: Omit<ToastProps, 'onClose'>[]; removeToast: (id: string) => void }> = ({
  toasts,
  removeToast,
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} {...toast} onClose={removeToast} />
        ))}
      </AnimatePresence>
    </div>
  );
};
