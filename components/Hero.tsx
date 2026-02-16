import React from 'react';
import { Scale, ArrowRight, ShieldCheck, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden bg-zinc-950">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
          alt="Office Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,129,63,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm text-brand-400 text-xs font-medium uppercase tracking-widest animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          Advocacia de Alta Performance
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1] animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
          Defesa estratégica para <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 via-brand-500 to-brand-300">
            seu patrimônio.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-light leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
          Especialistas em Direito Empresarial e Tributário. Transformamos complexidade jurídica em segurança para seus negócios e legado familiar.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s' }}>
          <a 
            href="#actions"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-brand-600 border border-brand-500 rounded hover:bg-brand-500 focus:outline-none ring-offset-2 focus:ring-2 ring-brand-400 shadow-[0_0_20px_rgba(180,129,63,0.3)] hover:shadow-[0_0_30px_rgba(180,129,63,0.5)] w-full sm:w-auto"
          >
            <span>Agendar Consulta</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a 
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-zinc-300 transition-all duration-200 bg-transparent border border-zinc-700 rounded hover:bg-zinc-800 hover:text-white hover:border-zinc-600 w-full sm:w-auto"
          >
            Conhecer o Escritório
          </a>
        </div>

        {/* Stats / Trust Markers */}
        <div className="pt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/5 mt-12 animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
           <div className="flex flex-col items-center justify-center gap-1 group">
              <Scale className="text-brand-500 w-6 h-6 mb-2 opacity-80 group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-serif font-bold text-white">15+</span>
              <span className="text-xs uppercase tracking-wider text-zinc-500">Anos de Experiência</span>
           </div>
           <div className="flex flex-col items-center justify-center gap-1 group">
              <ShieldCheck className="text-brand-500 w-6 h-6 mb-2 opacity-80 group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-serif font-bold text-white">98%</span>
              <span className="text-xs uppercase tracking-wider text-zinc-500">Taxa de Êxito</span>
           </div>
           <div className="hidden md:flex flex-col items-center justify-center gap-1 group">
              <Users className="text-brand-500 w-6 h-6 mb-2 opacity-80 group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-serif font-bold text-white">500+</span>
              <span className="text-xs uppercase tracking-wider text-zinc-500">Clientes Atendidos</span>
           </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500 cursor-pointer" onClick={() => document.getElementById('actions')?.scrollIntoView({behavior: 'smooth'})}>
        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-zinc-500 to-transparent mx-auto mb-2"></div>
        <span className="text-[10px] uppercase tracking-widest opacity-50">Role</span>
      </div>
    </section>
  );
};