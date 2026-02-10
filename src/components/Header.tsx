import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const Header = () => {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Preciso de ajuda urgente. Vim pelo site PENIEL.");

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            <img 
              src={logoFull} 
              alt="PENIEL" 
              className="h-9 w-auto"
            />

            <div className="flex items-center gap-3">
              <a href="tel:0800123456" className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">0800 123 456</span>
              </a>
              <Button variant="whatsapp" size="sm" asChild>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">WhatsApp 24h</span>
                  <span className="sm:hidden">24h</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 lg:bottom-6 right-6 z-50 group"
        aria-label="Falar no WhatsApp"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-75" />
          <Button variant="whatsapp" size="icon" className="relative h-14 w-14 rounded-full shadow-glow">
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
      </a>
    </>
  );
};

export default Header;
