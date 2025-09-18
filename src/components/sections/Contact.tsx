import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Send, MessageSquare, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Te contactaremos pronto. ¡Gracias por tu interés!",
    });
  };

  const contactOptions = [
    {
      icon: MessageSquare,
      title: 'Chat en Vivo',
      description: 'Respuesta inmediata',
      action: 'Iniciar Chat',
      highlight: true
    },
    {
      icon: Phone,
      title: 'Llamar Ahora',
      description: '+54 11 1234-5678',
      action: 'Llamar'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'info@olympo.com',
      action: 'Enviar Email'
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-accent font-semibold text-sm uppercase tracking-wide">
              Contacto
            </span>
          </div>
          
          <h2 className="heading-section text-foreground">
            ¿Listo para
            <br />
            <span className="text-accent">comenzar tu transformación?</span>
          </h2>
          
          <p className="text-luxury max-w-2xl mx-auto">
            Estamos aquí para ayudarte a dar el primer paso. Contáctanos y descubre 
            cómo podemos ayudarte a alcanzar tus objetivos fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Options */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">Múltiples formas de contactarnos</h3>
            
            {contactOptions.map((option, index) => (
              <Card key={index} className={`p-6 hover:shadow-gold transition-all duration-300 cursor-pointer group ${
                option.highlight ? 'ring-2 ring-accent/20 bg-accent/5' : ''
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      option.highlight ? 'bg-accent text-brand-black' : 'bg-accent/10 text-accent'
                    }`}>
                      <option.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{option.title}</h4>
                      <p className="text-muted-foreground">{option.description}</p>
                    </div>
                  </div>
                  <Button 
                    variant={option.highlight ? "default" : "outline"}
                    className={option.highlight ? 'bg-accent hover:bg-accent/90 text-brand-black' : ''}
                  >
                    {option.action}
                  </Button>
                </div>
              </Card>
            ))}

            <div className="card-luxury bg-brand-black text-brand-white">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-brand-gold">Horarios de Atención</h4>
                <div className="space-y-2 text-gray-300">
                  <p><span className="font-semibold">Lun - Vie:</span> 6:00 - 22:00</p>
                  <p><span className="font-semibold">Sábados:</span> 8:00 - 20:00</p>
                  <p><span className="font-semibold">Domingos:</span> 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-luxury">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground">Envíanos un mensaje</h3>
                <p className="text-muted-foreground mt-2">Te responderemos en menos de 24 horas</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Nombre *</label>
                  <Input placeholder="Tu nombre completo" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Teléfono</label>
                  <Input placeholder="+54 11 1234-5678" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email *</label>
                <Input type="email" placeholder="tu@email.com" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">¿En qué podemos ayudarte?</label>
                <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground">
                  <option value="">Selecciona una opción</option>
                  <option value="membership">Información sobre membresías</option>
                  <option value="personal">Entrenamiento personal</option>
                  <option value="classes">Clases grupales</option>
                  <option value="nutrition">Asesoría nutricional</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Mensaje *</label>
                <Textarea 
                  placeholder="Cuéntanos sobre tus objetivos o cualquier pregunta que tengas..."
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" className="w-full btn-hero group">
                Enviar Mensaje
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Al enviar este formulario, aceptas nuestros términos y condiciones de privacidad.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;