import { Shield, Stethoscope, Clock, Ambulance, Heart } from "lucide-react";

const differentials = [
  {
    icon: Shield,
    title: "Sigilo e acolhimento",
    description: "Tratamento confidencial com respeito e empatia em todas as etapas",
  },
  {
    icon: Stethoscope,
    title: "Clínicas credenciadas",
    description: "Rede verificada com equipe técnica multidisciplinar especializada",
  },
  {
    icon: Clock,
    title: "Atendimento 24h",
    description: "Suporte disponível em todo o Brasil, qualquer dia e horário",
  },
  {
    icon: Ambulance,
    title: "Remoção rápida e segura",
    description: "Equipe treinada para remoção voluntária e involuntária com dignidade",
  },
  {
    icon: Heart,
    title: "Suporte à família",
    description: "Acompanhamento emocional e orientação para familiares durante todo o processo",
  },
];

const Differentials = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Por que escolher a PENIEL?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprometimento com excelência, transparência e cuidado humanizado
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-smooth text-center group"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
