import { Button } from "@/components/ui/button";
import { MessageCircle, FileText } from "lucide-react";
import heroImage from "@/assets/hero-consultation.jpg";

const HeroSection = () => {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá, vim pelo site PENIEL e preciso de ajuda");

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Consulta profissional e acolhedora"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6">
            <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-md">
              🔒 Sigilo Garantido • Atendimento 24h
            </span>
          </div>
          
          <h1 className="text-white mb-6 animate-fade-in">
            Ajuda imediata para internação e remoção — com acolhimento humano e sigilo total
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
            A PENIEL conecta você às melhores clínicas de recuperação do Brasil. Atendimento 24h, orientação familiar e remoção em qualquer região.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="whatsapp"
              size="xl"
              asChild
              className="group"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Falar Agora no WhatsApp
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              asChild
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm"
            >
              <a href="#avaliacao">
                <FileText className="h-5 w-5" />
                Avaliação Gratuita
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span>Resposta em até 15 minutos</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div className="hidden sm:flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Sem julgamentos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[1]" />
    </section>
  );
};

export default HeroSection;
