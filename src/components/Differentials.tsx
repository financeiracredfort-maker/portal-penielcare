import { Shield, Stethoscope, Clock, Ambulance, Heart } from "lucide-react";

const differentials = [
  {
    icon: Clock,
    title: "Atendimento Imediato",
    description: "Resposta em até 15 minutos, com equipe pronta 24h para orientar sua família",
  },
  {
    icon: Shield,
    title: "Cuidamos de Tudo",
    description: "Da avaliação ao encaminhamento — você não precisa escolher clínica, nós direcionamos",
  },
  {
    icon: Ambulance,
    title: "Transporte Seguro e Humanizado",
    description: "Equipe treinada para acompanhar seu familiar com total cuidado e respeito",
  },
  {
    icon: Stethoscope,
    title: "Cobertura Nacional",
    description: "Mais de 50 clínicas parceiras em todas as regiões do Brasil",
  },
  {
    icon: Heart,
    title: "Sigilo Absoluto",
    description: "Discrição total e proteção da privacidade familiar em cada etapa",
  },
];

const Differentials = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Por Que Confiar na PENIEL</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Apoio completo para sua família — cuidamos de tudo para você
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
