import React from 'react';
import { Button } from '@/components/ui/button';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Entrenadores Certificados',
      description: 'Personal altamente calificado con certificaciones internacionales en fitness y nutrición.'
    },
    {
      icon: Users,
      title: 'Comunidad Fuerte',
      description: 'Únete a una familia de atletas comprometidos con el crecimiento personal y colectivo.'
    },
    {
      icon: Clock,
      title: 'Horarios Flexibles',
      description: 'Abierto 24/7 los 365 días del año. Entrena cuando tu agenda lo permita.'
    },
    {
      icon: Target,
      title: 'Objetivos Reales',
      description: 'Planes personalizados diseñados para alcanzar tus metas específicas de forma efectiva.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-accent font-semibold text-sm uppercase tracking-wide">
                  Sobre Nosotros
                </span>
              </div>
              
              <h2 className="heading-section text-foreground">
                Más que un gimnasio,
                <br />
                <span className="text-accent">una filosofía de vida</span>
              </h2>
              
              <p className="text-luxury">
                En Olympo, creemos que la verdadera transformación va más allá del físico. 
                Desde 2019, hemos sido el hogar de atletas, profesionales y soñadores que 
                buscan superar sus límites y alcanzar su máximo potencial.
              </p>
              
              <p className="text-luxury">
                Nuestro enfoque integral combina entrenamiento de élite, nutrición personalizada 
                y el apoyo de una comunidad que celebra cada logro, sin importar cuán pequeño sea.
              </p>
            </div>

            <Button className="btn-hero">
              Conoce Nuestro Equipo
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card-luxury group hover:scale-105">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-brand-black" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;