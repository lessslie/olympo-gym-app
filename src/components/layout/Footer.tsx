import React from 'react';
import { Dumbbell, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-brand-gold" />
              <span className="text-2xl font-black">OLYMPO</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Tu gimnasio de confianza en el corazón de la ciudad. Transforma tu cuerpo, eleva tu espíritu.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-gray-400 hover:text-brand-gold cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-gray-400 hover:text-brand-gold cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-brand-gold cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-brand-gold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {['Inicio', 'Nosotros', 'Clases', 'Entrenadores', 'Membresías'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-brand-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-brand-gold">Servicios</h3>
            <ul className="space-y-2">
              {['Entrenamiento Personal', 'Clases Grupales', 'Nutrición', 'Rehabilitación', 'Suplementos'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-brand-gold transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-brand-gold">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-brand-gold flex-shrink-0" />
                <span className="text-gray-300">Av. Principal 123, Centro</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-gold flex-shrink-0" />
                <span className="text-gray-300">+54 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-gold flex-shrink-0" />
                <span className="text-gray-300">info@olympo.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Gimnasio Olympo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;