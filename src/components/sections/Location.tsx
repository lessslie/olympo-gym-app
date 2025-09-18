import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Location = () => {
  const schedule = [
    { day: 'Lunes - Viernes', hours: '05:00 - 23:00' },
    { day: 'Sábados', hours: '06:00 - 22:00' },
    { day: 'Domingos', hours: '07:00 - 20:00' },
    { day: 'Feriados', hours: '08:00 - 18:00' },
  ];

  const contact = [
    { icon: Phone, label: 'Teléfono', value: '+54 11 1234-5678' },
    { icon: Mail, label: 'Email', value: 'info@olympo.com' },
    { icon: MapPin, label: 'Dirección', value: 'Av. Principal 123, Centro, CABA' },
  ];

  return (
    <section id="location" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-accent font-semibold text-sm uppercase tracking-wide">
              Ubicación
            </span>
          </div>
          
          <h2 className="heading-section text-foreground">
            Visítanos en el
            <br />
            <span className="text-accent">corazón de la ciudad</span>
          </h2>
          
          <p className="text-luxury max-w-2xl mx-auto">
            Estamos estratégicamente ubicados para ser accesibles desde cualquier punto. 
            Ven a conocer nuestras instalaciones de clase mundial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-luxury">
              <div className="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                <div className="text-center space-y-4">
                  <MapPin className="h-16 w-16 text-accent mx-auto" />
                  <div className="space-y-2">
                    <p className="text-xl font-bold text-foreground">Mapa Interactivo</p>
                    <p className="text-muted-foreground">Av. Principal 123, Centro, CABA</p>
                    <Button variant="outline" className="mt-4">
                      Ver en Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Schedule Card */}
            <div className="card-luxury">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Horarios de Atención</h3>
              </div>
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="font-medium text-foreground">{item.day}</span>
                    <span className="text-accent font-semibold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="card-luxury">
              <h3 className="text-xl font-bold text-foreground mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                {contact.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                      <p className="font-semibold text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="card-luxury bg-gradient-gold text-brand-black">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold">¡Ven a conocernos!</h3>
                <p className="font-medium">
                  Agenda una visita gratuita y descubre por qué somos la mejor opción para tu transformación.
                </p>
                <Button variant="secondary" className="bg-brand-black text-brand-white hover:bg-gray-800">
                  Agendar Visita Gratuita
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;