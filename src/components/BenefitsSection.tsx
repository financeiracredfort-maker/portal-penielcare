import { Shield, Clock, MapPin, Heart, Users, Truck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Atendimento em Minutos",
    description: "Equipe pronta 24h. Você liga, nós agimos. Sem burocracia, sem espera.",
  },
  {
    icon: Truck,
    title: "Resgate em Todo o Brasil",
    description: "Não importa onde esteja — chegamos até você com equipe especializada.",
  },
  {
    icon: Shield,
    title: "Sigilo Absoluto",
    description: "Veículos descaracterizados, equipe discreta. Ninguém precisa saber.",
  },
  {
    icon: Users,
    title: "Orientação Familiar Completa",
    description: "Cuidamos de você também. Orientamos cada passo, do desespero à solução.",
  },
  {
    icon: Heart,
    title: "Tratamento Humanizado",
    description: "Seu familiar será tratado com dignidade, respeito e cuidado real.",
  },
  {
    icon: MapPin,
    title: "Clínica Certa Para Cada Caso",
    description: "Mais de 50 clínicas parceiras. Encontramos a ideal pro seu orçamento.",
  },
];

const BenefitsSection = () => {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Quero saber mais sobre o serviço de resgate da PENIEL.");

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            ✅ Por Que Escolher a PENIEL
          </span>
          <h2 className="text-foreground mb-3 text-2xl md:text-3xl lg:text-4xl">
            Tudo o Que Sua Família Precisa, Em Um Só Lugar
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Enquanto você está paralisado sem saber o que fazer, nós já estamos a caminho.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="group relative bg-card border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>

        {/* Value proposition strip */}
        <div className="gradient-primary rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary-foreground rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-foreground rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-3">
                Avaliação Gratuita • Sem Compromisso • Parcelamos
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> Opções a partir de R$800/mês</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> Parcelamento em até 12x</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> Aceitamos convênios</span>
              </div>
            </div>
            <Button variant="secondary" size="xl" asChild className="group shrink-0">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Falar com Especialista
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
