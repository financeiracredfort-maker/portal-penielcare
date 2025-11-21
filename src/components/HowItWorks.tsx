import { FileSearch, Building2, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: FileSearch,
    number: "01",
    title: "Atendimento Imediato",
    description: "Contato via WhatsApp, telefone ou formulário. Nossa equipe avalia a urgência e inicia o processo em minutos.",
  },
  {
    icon: Building2,
    number: "02",
    title: "Remoção e Encaminhamento",
    description: "Organizamos o resgate com equipe especializada e direcionamos para a clínica mais adequada da sua região.",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "Suporte Contínuo",
    description: "Acompanhamento à família e assistência durante toda a jornada de recuperação.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Como Funciona o Atendimento PENIEL</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cuidamos de todo o processo — você só precisa entrar em contato
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-card rounded-xl p-8 shadow-elegant hover:shadow-glow transition-smooth group"
              >
                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-1/2 z-0" />
                )}

                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <a href="https://wa.me/5511999999999?text=Preciso%20de%20resgate%20urgente.%20Vim%20pelo%20site%20PENIEL.">
              Solicitar Atendimento Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
