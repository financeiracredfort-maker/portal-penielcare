import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Users, Award, Target, Sparkles } from "lucide-react";

const Sobre = () => {
  const values = [
    {
      icon: Heart,
      title: "Empatia",
      description: "Tratamento humanizado sem julgamentos, com acolhimento genuíno",
    },
    {
      icon: Shield,
      title: "Sigilo",
      description: "Confidencialidade absoluta em todas as etapas do processo",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Compromisso com a qualidade e profissionalismo em cada atendimento",
    },
    {
      icon: Users,
      title: "Família",
      description: "Suporte integral aos familiares durante toda a jornada",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-white mb-6">Sobre a PENIEL</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Conectando pessoas a uma nova chance através de acolhimento, 
                profissionalismo e esperança
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                    <Target className="h-4 w-4" />
                    <span className="font-semibold">Nossa Missão</span>
                  </div>
                  <h2 className="mb-6">Transformar vidas através do cuidado</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A PENIEL nasceu com o propósito de facilitar o acesso a tratamentos de qualidade 
                    para dependência química e alcoolismo em todo o Brasil.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Acreditamos que todos merecem uma segunda chance e que, com o suporte adequado, 
                    a recuperação é possível. Nossa rede conecta famílias às melhores clínicas, 
                    garantindo acolhimento, segurança e resultados efetivos.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-primary rounded-2xl shadow-glow" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="h-24 w-24 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="mb-4">Nossos Valores</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Princípios que guiam cada decisão e ação da PENIEL
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-smooth">
                    <CardContent className="pt-8">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Credentialing Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Credenciamento PENIEL</h2>
                <p className="text-muted-foreground text-lg">
                  Garantia de qualidade através de critérios rigorosos
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Verificação Documental",
                    description: "Análise completa de alvarás, licenças sanitárias e regularização técnica",
                  },
                  {
                    title: "Visita Técnica",
                    description: "Inspeção presencial das instalações, equipe e infraestrutura",
                  },
                  {
                    title: "Avaliação da Equipe",
                    description: "Verificação das credenciais e experiência de médicos, terapeutas e profissionais",
                  },
                  {
                    title: "Protocolos de Atendimento",
                    description: "Validação de métodos terapêuticos e processos de acolhimento",
                  },
                  {
                    title: "Acompanhamento Contínuo",
                    description: "Monitoramento de qualidade e satisfação dos pacientes e familiares",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex gap-4 items-start p-6 bg-accent rounded-lg">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 gradient-primary text-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-white">
              <h2 className="text-white mb-6">Quer fazer parte da rede PENIEL?</h2>
              <p className="text-xl text-white/90 mb-8">
                Se você representa uma clínica de recuperação e compartilha dos nossos valores, 
                entre em contato para conhecer o processo de credenciamento.
              </p>
              <a
                href="/contato"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-smooth shadow-lg"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
