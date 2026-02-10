import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const CTASection = () => {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("URGENTE - Preciso de resgate imediato. Vim pelo site PENIEL.");

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="gradient-primary rounded-2xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          </div>

          <div className="max-w-2xl mx-auto text-center text-primary-foreground relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Não Espere o Pior Acontecer
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              A cada dia que passa sem tratamento, a situação piora. 
              Ligue agora e dê o primeiro passo para salvar quem você ama.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Button variant="secondary" size="xl" asChild className="group">
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
                  Ligar: (11) 99999-9999
                </a>
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/70">
              🔒 Sigilo absoluto • Sem compromisso • Orientação gratuita
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
