import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Mendes",
      role: "Diretor Executivo, Grupo Alliance",
      content: "A reestruturação tributária conduzida pelo Dr. Alex foi fundamental para a sobrevivência e posterior expansão da nossa holding em 2023.",
      image: "https://picsum.photos/100/100?random=4"
    },
    {
      id: 2,
      name: "Dra. Juliana Paiva",
      role: "Médica e Investidora",
      content: "Segurança total na gestão do meu patrimônio pessoal. A blindagem jurídica implementada me trouxe a paz de espírito que eu precisava.",
      image: "https://picsum.photos/100/100?random=5"
    },
    {
      id: 3,
      name: "Roberto Vilela",
      role: "Founder, Fintech B2B",
      content: "Competência técnica inquestionável. Em uma disputa contratual complexa, a estratégia adotada pelo escritório foi cirúrgica e vencedora.",
      image: "https://picsum.photos/100/100?random=6"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Reconhecimento</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A confiança de grandes nomes do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-zinc-900 border border-zinc-800 p-8 rounded-sm relative hover:border-brand-600 transition-all duration-300 group shadow-lg">
              <Quote className="absolute top-8 right-8 text-zinc-800 group-hover:text-brand-500/20 w-8 h-8 transition-colors" />
              
              <div className="mb-8 text-zinc-300 italic font-serif leading-relaxed text-lg">
                "{t.content}"
              </div>
              
              <div className="flex items-center space-x-4 border-t border-zinc-800 pt-6">
                <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-500 font-bold font-serif text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm tracking-wide">{t.name}</h4>
                  <p className="text-brand-500/80 text-xs uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};