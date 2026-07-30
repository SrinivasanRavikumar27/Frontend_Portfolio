import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 dark:bg-slate-950 light:bg-slate-100 border-t border-white/10 dark:border-white/10 light:border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm font-mono dark:text-slate-400 light:text-slate-600 tracking-wide">
          © Since 2023 ❤️ IamGroot &lt;/&gt; • Crafting Modern Software with Passion • {currentYear}
        </p>
      </div>
    </footer>
  );
};
