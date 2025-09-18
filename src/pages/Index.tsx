import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Location from '@/components/sections/Location';
import Contact from '@/components/sections/Contact';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Location />
        <Contact />
      </main>
      <Footer />
      <PWAInstallPrompt />
    </div>
  );
};

export default Index;
