import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, X, Smartphone } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

// Extend Navigator interface for iOS detection
declare global {
  interface Navigator {
    standalone?: boolean;
  }
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if running on iOS
    const isIOSUserAgent = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isIOSWebView = navigator.standalone === false;
    setIsIOS(isIOSUserAgent && isIOSWebView);

    // Handle the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show prompt after a delay to avoid being intrusive
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if PWA is already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isInWebApp = navigator.standalone === true;
    
    if (isStandalone || isInWebApp) {
      setShowPrompt(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setShowPrompt(false);
      }
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Don't show again for this session
    sessionStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  // Don't show if already dismissed or no prompt available
  if (!showPrompt || (!deferredPrompt && !isIOS)) {
    return null;
  }

  // Check if user has already dismissed this session
  if (sessionStorage.getItem('pwa-prompt-dismissed')) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-4 sm:max-w-sm">
      <Card className="bg-brand-black text-brand-white border-brand-gold/20 shadow-gold">
        <div className="p-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center flex-shrink-0">
              <Smartphone className="h-5 w-5 text-brand-black" />
            </div>
            
            <div className="flex-1 space-y-2">
              <h3 className="font-bold text-brand-gold">¡Instala Olympo!</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Instala nuestra app para acceso rápido, notificaciones de clases y entrenamientos offline.
              </p>
              
              {isIOS ? (
                <div className="space-y-2">
                  <p className="text-xs text-gray-400">
                    Para instalar: Toca <span className="font-bold">⎙</span> y selecciona "Agregar a pantalla de inicio"
                  </p>
                </div>
              ) : (
                <div className="flex space-x-2 pt-2">
                  <Button 
                    onClick={handleInstallClick}
                    className="bg-brand-gold text-brand-black hover:bg-brand-gold/90 text-sm px-3 py-1.5 h-auto"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Instalar
                  </Button>
                </div>
              )}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDismiss}
              className="text-gray-400 hover:text-brand-white h-auto p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PWAInstallPrompt;