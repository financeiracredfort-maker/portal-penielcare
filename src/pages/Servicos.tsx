import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileSearch, UserCheck, Building2, Heart, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const servicos = [
  {
    icon: FileSearch,
    title: "Avaliação e Orientação",
    slug: "avaliacao-inicial",
    description: "Conversa acolhedora para entender sua situação e indicar o melhor caminho",
    features: [
      "Conversa confidencial com especialista",
      "Análise da situação sem julgamentos",
      "Orientação sobre melhores opções de tratamento",
      "Suporte emocional à família",
      "Sem compromisso ou custos",
    ],
    duration: "30-60 minutos",
    availability: "24h, todos os dias",
  },
  {
    icon: UserCheck,
    title: "Acompanhamento Familiar",
    slug: "acompanhamento-familiar",
    description: "Suporte completo à família durante toda a jornada de recuperação",
    features: [
      "Orientação sobre como lidar com a situação",
      "Suporte emocional e psicológico",
      "Comunicação constante sobre o tratamento",
      "Grupo de apoio para familiares",
      "Planejamento de reinserção social",
    ],
    duration: "Durante todo o tratamento",
    availability: "Agendamento flexível",
  },
  {
    icon: Building2,
    title: "Internação e Tratamento",
    slug: "internacao",
    description: "Encaminhamento para clínicas credenciadas com programas personalizados",
    features: [
      "Clínicas verificadas pela PENIEL",
      "Equipe multidisciplinar completa",
      "Programas terapêuticos personalizados",
      "Acompanhamento familiar contínuo",
      "Visitas programadas",
    ],
    duration: "30 a 180 dias (média)",
    availability: "Conforme disponibilidade",
  },
];

const Servicos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-white mb-6">Como Podemos Ajudar</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Cuidado completo para cada etapa da jornada de recuperação — 
                da orientação ao acompanhamento contínuo
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {servicos.map((servico, index) => {
                const Icon = servico.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-smooth">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="mb-2">{servico.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {servico.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">O que inclui:</h4>
                        <ul className="space-y-2">
                          {servico.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Heart className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-4 pt-4 border-t text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{servico.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                          <span className="text-muted-foreground">{servico.availability}</span>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full" asChild>
                        <a
                          href={`https://wa.me/554195777142?text=${encodeURIComponent(`Olá, vim pelo site PENIEL e gostaria de saber mais sobre ${servico.title}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Saiba Mais
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="mb-4">Como Funciona o Processo</h2>
                <p className="text-muted-foreground text-lg">
                  Da primeira consulta até o acompanhamento pós-internação
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

                <div className="space-y-12">
                  {[
                    {
                      step: "1",
                      title: "Primeiro Contato",
                      description: "Entre em contato via WhatsApp, telefone ou formulário. Atendimento imediato e sigiloso.",
                    },
                    {
                      step: "2",
                      title: "Avaliação",
                      description: "Conversa com especialista para entender a situação e orientar sobre as melhores opções.",
                    },
                    {
                      step: "3",
                      title: "Planejamento",
                      description: "Definição da clínica, documentação necessária e logística de transporte.",
                    },
                    {
                      step: "4",
                      title: "Transporte",
                      description: "Condução segura e humanizada até a clínica escolhida, com todo suporte necessário.",
                    },
                    {
                      step: "5",
                      title: "Internação",
                      description: "Acolhimento na clínica e início do programa terapêutico personalizado.",
                    },
                    {
                      step: "6",
                      title: "Acompanhamento",
                      description: "Suporte contínuo à família e paciente durante todo o tratamento.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                        {/* Left side (odd) */}
                        <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                          <Card className="hover:shadow-md transition-smooth">
                            <CardContent className="p-6">
                              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                              <p className="text-muted-foreground text-sm">{item.description}</p>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Center circle */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-primary rounded-full items-center justify-center text-white font-bold shadow-lg">
                          {item.step}
                        </div>

                        {/* Right side (even) */}
                        <div className={`${index % 2 === 0 ? 'md:order-2' : ''} md:block hidden`} />
                      </div>

                      {/* Mobile step indicator */}
                      <div className="md:hidden flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                          {item.step}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6">Pronto para dar o primeiro passo?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato agora e receba orientação especializada sem compromisso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a
                  href="https://wa.me/554195777142?text=Olá,%20preciso%20de%20ajuda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Servicos;
