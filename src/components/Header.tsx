import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import logoFull from "@/assets/logo-full.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: "Início", path: "/" },
    { name: "Serviços", path: "/servicos" },
    { name: "Depoimentos", path: "/depoimentos" },
    { name: "Blog", path: "/blog" },
    { name: "Sobre", path: "/sobre-peniel" },
    { name: "Contato", path: "/contato" },
  ];

  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const whatsappMessage = encodeURIComponent("Olá, vim pelo site PENIEL e preciso de ajuda");

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logoFull} 
                alt="PENIEL - Rede nacional de clínicas" 
                className="h-10 w-auto md:h-12"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive(item.path)
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href="tel:0800123456" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">0800 123 456</span>
              </a>
              <Button
                variant="whatsapp"
                size="default"
                asChild
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp 24h
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                    isActive(item.path)
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="tel:0800123456" className="text-sm text-center">
                  <Button variant="outline" size="lg" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    0800 123 456
                  </Button>
                </a>
                <Button
                  variant="whatsapp"
                  size="lg"
                  asChild
                  className="w-full"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp 24h
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Falar no WhatsApp"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-75" />
          <Button
            variant="whatsapp"
            size="icon"
            className="relative h-14 w-14 rounded-full shadow-glow"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Atendimento 24h
        </span>
      </a>
    </>
  );
};

export default Header;
