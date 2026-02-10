import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-consultation.jpg";

const HeroSection = () => {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("URGENTE - Preciso de resgate imediato. Vim pelo site PENIEL.");

  return (
    <section className="relative min-h-[550px] lg:min-h-[620px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Atendimento profissional" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/75" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block mb-4">
            <span className="bg-destructive/90 text-destructive-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-md animate-pulse">
              ⚠️ Atendimento de Emergência 24h
            </span>
          </div>
          
          <h1 className="text-primary-foreground mb-5 animate-fade-in leading-tight">
            Seu Familiar Está Se Destruindo e Você Não Sabe Mais o Que Fazer?
          </h1>
          
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 leading-relaxed">
            Nós resgatamos quem você ama. <strong>Resgate voluntário e involuntário</strong> em qualquer cidade do Brasil com equipe especializada, sigilo total e atendimento imediato.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="whatsapp" size="xl" asChild className="group">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Pedir Resgate Agora
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              asChild
              className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm"
            >
              <a href="tel:+5511999999999">
                <Phone className="h-5 w-5" />
                Ligar Agora
              </a>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-primary-foreground/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span>Resposta em até 15 min</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>🔒 Sigilo absoluto</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">✅ Sem julgamentos</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-[1]" />
    </section>
  );
};

export default HeroSection;
