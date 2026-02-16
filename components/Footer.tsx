import React from 'react';
import { MapPin, Mail, Phone, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-zinc-950 border-t border-brand-900/30 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 pr-0 md:pr-12">
            <a href="#" className="font-serif text-2xl font-bold tracking-tighter text-white mb-6 block">
              AS<span className="text-brand-500">.</span> <span className="text-sm font-sans font-normal text-zinc-500 ml-2">SOCIEDADE DE ADVOGADOS</span>
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify">
              Escritório registrado na OAB/SP sob o nº 12.345. Atuamos com ética, transparência e combatividade na defesa dos interesses de nossos clientes, sempre buscando a melhor solução jurídica para casos complexos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-brand-600 hover:text-white hover:border-brand-500 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-brand-600 hover:text-white hover:border-brand-500 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white font-serif font-semibold mb-6 border-b border-brand-500/30 pb-2 inline-block">Contato & Endereço</h4>
            <div className="flex items-start space-x-3 text-zinc-400 text-sm mb-4">
              <MapPin className="w-5 h-5 flex-shrink-0 text-brand-500" />
              <span>Av. Paulista, 1000, 15º Andar<br/>Bela Vista, São Paulo - SP<br/>CEP 01310-100</span>
            </div>
            <div className="flex items-center space-x-3 text-zinc-400 text-sm mb-4">
              <Mail className="w-5 h-5 flex-shrink-0 text-brand-500" />
              <a href="mailto:contato@alexsilva.adv.br" className="hover:text-white">contato@alexsilva.adv.br</a>
            </div>
            <div className="flex items-center space-x-3 text-zinc-400 text-sm">
              <Phone className="w-5 h-5 flex-shrink-0 text-brand-500" />
              <span>+55 (11) 3333-4444</span>
            </div>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-white font-serif font-semibold mb-6 border-b border-brand-500/30 pb-2 inline-block">Áreas de Atuação</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Direito Empresarial</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Planejamento Tributário</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Holding Patrimonial</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Contratos Complexos</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Fusões e Aquisições</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
          <p>AS Sociedade de Advogados - OAB/SP 12.345. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-400">Aviso Legal</a>
            <a href="#" className="hover:text-zinc-400">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};