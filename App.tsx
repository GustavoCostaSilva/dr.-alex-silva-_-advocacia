import React from 'react';
import { HeaderPill } from './components/HeaderPill';
import { Hero } from './components/Hero';
import { QuickActions } from './components/QuickActions';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-brand-500 selection:text-white">
      <HeaderPill />
      
      <main>
        <Hero />
        <QuickActions />
        <About />
        <Testimonials />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;