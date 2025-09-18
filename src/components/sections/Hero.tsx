import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-olympo.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Gimnasio Olympo - Entrenamiento de alta calidad"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="max-w-4xl">
          <div className="space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/30">
              <span className="text-brand-gold font-semibold text-sm uppercase tracking-wide">
                El gimnasio #1 de la ciudad
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="heading-hero text-brand-white">
              TRANSFORMA
              <br />
              <span className="text-brand-gold">TU CUERPO</span>
              <br />
              ELEVA TU ESPÍRITU
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed">
              Únete a la élite del fitness. Equipamiento de última generación, entrenadores certificados 
              y una comunidad que te impulsa a superar tus límites.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button className="btn-hero text-lg px-8 py-4 group">
                Comienza Tu Transformación
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button className="btn-ghost-white group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Ver Recorrido Virtual
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8 lg:pt-12">
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-black text-brand-gold">1000+</div>
                <div className="text-gray-300 font-medium">Miembros Activos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-black text-brand-gold">15+</div>
                <div className="text-gray-300 font-medium">Entrenadores Expertos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-black text-brand-gold">5</div>
                <div className="text-gray-300 font-medium">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-brand-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-gold rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;