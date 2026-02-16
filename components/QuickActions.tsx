import React, { useState } from 'react';
import { Calendar, Scale, FileText, ArrowUpRight } from 'lucide-react';
import { QuickAction } from '../types';
import { AIAssistant } from './AIAssistant';

const WhatsAppIcon = (props: React.ComponentProps<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
  </svg>
);

export const QuickActions: React.FC = () => {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  const actions: QuickAction[] = [
    {
      id: 'schedule',
      label: 'Agendar Consulta',
      subLabel: 'Presencial ou Videoconferência',
      icon: Calendar,
      primary: true,
      href: '#',
    },
    {
      id: 'whatsapp',
      label: 'Plantão Jurídico',
      subLabel: 'Emergências (WhatsApp)',
      icon: WhatsAppIcon,
      href: '#',
    },
    {
      id: 'ai',
      label: 'Assistente Virtual',
      subLabel: 'Pré-análise via IA',
      icon: Scale,
      onClick: () => setIsAIModalOpen(true),
    },
    {
      id: 'email',
      label: 'Enviar Processo',
      subLabel: 'Análise documental',
      icon: FileText,
      href: 'mailto:contato@alexsilva.adv.br',
    },
  ];

  return (
    <section id="actions" className="py-20 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center md:text-left border-l-4 border-brand-500 pl-6">
          <h2 className="text-2xl font-serif font-bold text-white mb-2">Central de Atendimento</h2>
          <p className="text-zinc-400">Canais diretos para resolução de conflitos e consultoria.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((action) => (
            <div 
              key={action.id}
              onClick={action.onClick || (action.href ? () => window.location.href = action.href! : undefined)}
              className={`
                group relative p-6 rounded-lg border transition-all duration-300 cursor-pointer overflow-hidden
                ${action.primary 
                  ? 'bg-brand-600 border-brand-500 text-white hover:bg-brand-500' 
                  : 'bg-zinc-900/50 border-zinc-800 text-zinc-100 hover:bg-zinc-800 hover:border-brand-500/30'}
              `}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-md ${action.primary ? 'bg-black/20' : 'bg-zinc-800 group-hover:bg-zinc-700'} transition-colors`}>
                  <action.icon size={24} className={action.primary ? 'text-brand-100' : 'text-brand-500'} />
                </div>
                {!action.onClick && <ArrowUpRight size={18} className="opacity-50 group-hover:opacity-100 transition-opacity" />}
              </div>
              
              <h3 className="font-serif font-semibold text-lg mb-1">{action.label}</h3>
              <p className={`text-sm ${action.primary ? 'text-brand-100' : 'text-zinc-500'}`}>{action.subLabel}</p>

              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      <AIAssistant isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} />
    </section>
  );
};