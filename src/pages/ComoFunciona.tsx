import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Phone, 
  ClipboardCheck, 
  Search, 
  FileText, 
  Ambulance, 
  Building2, 
  Users, 
  HeartPulse,
  TrendingUp,
  Home,
  CheckCircle2
} from "lucide-react";

const ComoFunciona = () => {
  const steps = [
    {
      icon: Phone,
      title: "1. Primeiro Contato",
      description: "Entre em contato conosco por WhatsApp, telefone ou formulário. Nosso atendimento é 24h, todos os dias.",
      details: [
        "Atendimento imediato e humanizado",
        "Conversa inicial sem compromisso",
        "Esclarecimento de dúvidas básicas",
        "Total sigilo e privacidade"
      ],
      time: "Imediato"
    },
    {
      icon: ClipboardCheck,
      title: "2. Avaliação Inicial",
      description: "Um especialista conversa com você para entender a situação e avaliar as necessidades específicas.",
      details: [
        "Análise do histórico de uso",
        "Avaliação do estado de saúde",
        "Compreensão do contexto familiar",
        "Identificação de urgências",
        "Avaliação de motivação e resistência"
      ],
      time: "30-60 minutos"
    },
    {
      icon: Search,
      title: "3. Seleção da Clínica Ideal",
      description: "Identificamos as melhores clínicas para o perfil do paciente, considerando localização, especialização e orçamento.",
      details: [
        "Apresentação de 2-3 opções adequadas",
        "Informações detalhadas de cada clínica",
        "Fotos, estrutura e metodologia",
        "Valores transparentes",
        "Possibilidade de visita prévia (quando viável)"
      ],
      time: "1-2 horas"
    },
    {
      icon: FileText,
      title: "4. Documentação e Planejamento",
      description: "Auxiliamos com toda a documentação necessária e planejamos logística de internação.",
      details: [
        "Orientação sobre documentos necessários",
        "Auxílio com laudos médicos",
        "Termos de autorização (se involuntária)",
        "Planejamento da remoção",
        "Agendamento da internação"
      ],
      time: "2-24 horas"
    },
    {
      icon: Ambulance,
      title: "5. Remoção Segura",
      description: "Equipe especializada realiza o transporte com segurança, respeito e discrição.",
      details: [
        "Equipe treinada e humanizada",
        "Veículos adequados e discretos",
        "Abordagem respeitosa",
        "Acompanhamento profissional",
        "Comunicação com a família"
      ],
      time: "2-8 horas (emergência)"
    },
    {
      icon: Building2,
      title: "6. Admissão na Clínica",
      description: "O paciente é recebido pela equipe da clínica que fará avaliação médica completa.",
      details: [
        "Exames clínicos iniciais",
        "Avaliação psiquiátrica",
        "Plano terapêutico personalizado",
        "Apresentação das instalações",
        "Início do processo de acolhimento"
      ],
      time: "Primeiro dia"
    },
    {
      icon: HeartPulse,
      title: "7. Desintoxicação (quando necessária)",
      description: "Fase de limpeza do organismo com supervisão médica 24h.",
      details: [
        "Medicação para sintomas de abstinência",
        "Monitoramento constante",
        "Suporte médico e enfermagem",
        "Estabilização do quadro clínico",
        "Preparação para terapias"
      ],
      time: "7-21 dias"
    },
    {
      icon: Users,
      title: "8. Tratamento Terapêutico",
      description: "Programa estruturado com terapias individuais, em grupo e atividades ocupacionais.",
      details: [
        "Terapias individuais semanais",
        "Grupos terapêuticos diários",
        "Terapia familiar (semanal ou quinzenal)",
        "Atividades ocupacionais",
        "Desenvolvimento de habilidades",
        "Trabalho emocional e comportamental"
      ],
      time: "60-180 dias"
    },
    {
      icon: TrendingUp,
      title: "9. Preparação para Alta",
      description: "Fase de preparação para retorno ao convívio social e familiar.",
      details: [
        "Plano de prevenção de recaída",
        "Reforço de ferramentas aprendidas",
        "Preparação da família",
        "Organização pós-tratamento",
        "Contatos de apoio e emergência"
      ],
      time: "Últimas 2-4 semanas"
    },
    {
      icon: Home,
      title: "10. Acompanhamento Pós-Alta",
      description: "Suporte continuado após a saída da clínica para manutenção dos resultados.",
      details: [
        "Consultas de acompanhamento",
        "Grupos de apoio (AA/NA)",
        "Terapia ambulatorial",
        "Suporte familiar continuado",
        "Monitoramento de sinais de recaída",
        "Reinserção social e profissional"
      ],
      time: "Longo prazo"
    }
  ];

  const differentials = [
    {
      icon: CheckCircle2,
      title: "Orientação Gratuita",
      description: "Todo nosso serviço de orientação, avaliação e intermediação é totalmente gratuito para você."
    },
    {
      icon: CheckCircle2,
      title: "Atendimento 24/7",
      description: "Equipe disponível 24 horas por dia, 7 dias por semana, inclusive feriados e finais de semana."
    },
    {
      icon: CheckCircle2,
      title: "Rede Nacional",
      description: "Clínicas credenciadas em todos os estados brasileiros, do interior às capitais."
    },
    {
      icon: CheckCircle2,
      title: "Especialização",
      description: "Anos de experiência conectando pessoas ao tratamento adequado para cada situação."
    },
    {
      icon: CheckCircle2,
      title: "Sigilo Total",
      description: "Todas as informações são tratadas com máxima confidencialidade e respeito."
    },
    {
      icon: CheckCircle2,
      title: "Acompanhamento Contínuo",
      description: "Não abandonamos você após a internação. Mantemos suporte durante todo o processo."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-4">Como Funciona o Processo</h1>
              <p className="text-muted-foreground text-lg">
                Entenda cada etapa do caminho desde o primeiro contato até a recuperação completa. 
                Transparência e acolhimento em todos os passos.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-12">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <Card key={idx} className="border-2 hover:border-primary transition-smooth">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        
                        <div className="flex-grow space-y-4">
                          <div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                              <h3 className="text-xl font-semibold">{step.title}</h3>
                              <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                                ⏱️ {step.time}
                              </span>
                            </div>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                          
                          <ul className="space-y-2">
                            {step.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Differentials */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Por Que Escolher a PENIEL?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Somos especializados em conectar pessoas ao tratamento certo, 
                com experiência, humanização e comprometimento.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {differentials.map((diff, idx) => {
                const Icon = diff.icon;
                return (
                  <Card key={idx} className="text-center">
                    <CardContent className="pt-8 pb-6">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                      <h3 className="font-semibold mb-2">{diff.title}</h3>
                      <p className="text-sm text-muted-foreground">{diff.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline Summary */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="mb-4">Linha do Tempo Resumida</h2>
              <p className="text-muted-foreground">Do primeiro contato à recuperação completa</p>
            </div>

            <div className="bg-gradient-subtle p-8 rounded-lg border">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 text-sm font-semibold text-center flex-shrink-0">Dia 0</div>
                  <div className="flex-grow">Primeiro contato e avaliação</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-sm font-semibold text-center flex-shrink-0">Dia 1-2</div>
                  <div className="flex-grow">Seleção de clínica e documentação</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-sm font-semibold text-center flex-shrink-0">Dia 3</div>
                  <div className="flex-grow">Remoção e admissão</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-sm font-semibold text-center flex-shrink-0">Semana 1-3</div>
                  <div className="flex-grow">Desintoxicação (se necessário)</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-sm font-semibold text-center flex-shrink-0">Mês 1-6</div>
                  <div className="flex-grow">Tratamento terapêutico intensivo</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-sm font-semibold text-center flex-shrink-0">Após alta</div>
                  <div className="flex-grow">Acompanhamento continuado e prevenção de recaída</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-primary-foreground">Pronto Para Dar o Primeiro Passo?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Nossa equipe está disponível agora para orientar você em cada etapa deste processo. 
              O primeiro contato é sempre sem compromisso e totalmente gratuito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp Agora
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contato">
                  Solicitar Avaliação Gratuita
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComoFunciona;
