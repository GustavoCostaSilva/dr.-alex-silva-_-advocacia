import React from 'react';
import { Award, BookOpen, Scale, Landmark } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    { icon: Award, text: "Mestre em Direito pela USP" },
    { icon: Scale, text: "+15 Anos de OAB" },
    { icon: Landmark, text: "Especialista em Tribunais Superiores" },
    { icon: BookOpen, text: "Autor de Obras Jurídicas" }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Image / Stats */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-zinc-800 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop" 
              alt="Dr. Alex Silva" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-zinc-900/95 backdrop-blur-md border-l-4 border-brand-500 p-6 shadow-lg">
                <p className="text-3xl font-serif font-bold text-brand-400 mb-1">R$ 500M+</p>
                <p className="text-sm text-zinc-300">Em patrimônio preservado e causas empresariais sob nossa gestão.</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Pattern */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl -z-10"></div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <h4 className="text-brand-500 font-medium tracking-wide text-xs uppercase mb-3">O Advogado</h4>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-6">
              A técnica vence <br />
              <span className="text-zinc-500">o improviso.</span>
            </h2>
            <div className="w-20 h-1 bg-brand-600 mb-6"></div>
            <p className="text-zinc-300 text-lg leading-relaxed text-justify">
              Dr. Alex Silva fundou o escritório com a premissa de que a advocacia moderna exige mais do que conhecimento da lei: exige visão de negócios. 
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mt-4 text-justify">
              Com atuação focada na prevenção de litígios e na blindagem patrimonial, oferecemos a segurança necessária para que empresários e investidores tomem decisões ousadas sem colocar seu legado em risco.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3 group">
                <div className="p-2 bg-brand-900/20 rounded text-brand-500 group-hover:bg-brand-500 group-hover:text-zinc-900 transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-zinc-200 font-medium text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <a href="#testimonials" className="inline-block text-brand-400 border-b border-brand-500/30 pb-1 hover:text-brand-300 hover:border-brand-300 transition-colors">
              Conheça nossos casos de sucesso &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};