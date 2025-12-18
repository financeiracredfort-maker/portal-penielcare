import { FileSearch, Building2, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import supportTeam from "@/assets/support-team.jpg";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={supportTeam} 
                alt="Equipe de suporte PENIEL acolhendo família" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-glow max-w-[200px]">
              <p className="text-3xl font-bold">24h</p>
              <p className="text-sm opacity-90">Atendimento todos os dias</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="mb-4">Como Funciona o Atendimento PENIEL</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Cuidamos de todo o processo — você só precisa entrar em contato
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 bg-card rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold shadow-md group-hover:scale-105 transition-transform">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
                        <Icon className="h-5 w-5 text-primary" />
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/5511999999999?text=Preciso%20de%20resgate%20urgente.%20Vim%20pelo%20site%20PENIEL.">
                  Solicitar Atendimento Agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
