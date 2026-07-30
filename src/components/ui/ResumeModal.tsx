import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../constants/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  // Lock background page scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl h-[90vh] dark:bg-[#090D16] light:bg-white rounded-3xl border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.3)] flex flex-col z-10 overflow-hidden"
        >
          {/* Header Bar */}
          <div className="p-4 sm:p-6 border-b border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between dark:bg-slate-900/60 light:bg-slate-50 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold dark:text-white light:text-slate-900 flex items-center gap-2">
                  {PERSONAL_INFO.name} — Resume
                </h3>
                <p className="text-xs text-slate-400 font-mono">{PERSONAL_INFO.title}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Direct Download PDF Button */}
              <a
                href={PERSONAL_INFO.resumeUrl}
                download={PERSONAL_INFO.resumeFileName || "Srinivasan-Ravikumar-Resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:brightness-110 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Download PDF
              </a>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl dark:bg-slate-800 light:bg-slate-200 text-slate-400 hover:text-white transition-colors"
                aria-label="Close Resume Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Isolated PDF Viewer Container */}
          <div
            className="flex-1 w-full bg-slate-950 p-2 sm:p-4 overflow-y-auto"
            style={{ overscrollBehavior: 'contain' }}
            onWheel={(e) => e.stopPropagation()}
          >
            <object
              data={PERSONAL_INFO.resumeUrl}
              type="application/pdf"
              className="w-full h-full min-h-[600px] rounded-xl border border-white/10"
            >
              <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
                <FileText className="w-12 h-12 text-cyan-400 animate-pulse" />
                <p className="text-sm text-slate-300">
                  Click below to view or download the resume PDF.
                </p>
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm flex items-center gap-2 hover:bg-cyan-400 transition-all"
                >
                  <ExternalLink className="w-4 h-4" /> Open Resume PDF
                </a>
              </div>
            </object>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
