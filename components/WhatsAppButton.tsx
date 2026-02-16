import React from 'react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511999999999" // Substitua pelo número real
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/20 group bg-[#25D366] text-white flex items-center justify-center border border-white/10"
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Tooltip on Hover */}
      <span className="absolute right-full mr-4 bg-zinc-900 text-zinc-200 px-3 py-1.5 rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap border border-zinc-800 shadow-xl pointer-events-none hidden md:block">
        Fale com um Advogado
      </span>
      
      {/* WhatsApp Icon SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
    </a>
  );
};