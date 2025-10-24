import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Sobre Internação",
      questions: [
        {
          q: "Como funciona a internação involuntária?",
          a: "A internação involuntária é prevista pela Lei 10.216/2001 e ocorre quando há risco iminente à vida do paciente ou de terceiros. Deve ser solicitada por um familiar ou responsável legal, com avaliação médica que ateste a necessidade. O processo é comunicado ao Ministério Público em até 72 horas e o paciente tem todos os seus direitos fundamentais garantidos. Nossa equipe orienta sobre todos os aspectos legais e éticos."
        },
        {
          q: "Quanto tempo dura o tratamento?",
          a: "A duração varia conforme o caso. A fase de desintoxicação geralmente leva de 7 a 21 dias. O programa terapêutico completo costuma durar de 90 a 180 dias. Alguns pacientes se beneficiam de períodos maiores. Nossa equipe faz avaliação individualizada para determinar o tempo ideal para cada situação. O importante é completar o programa recomendado para melhores resultados."
        },
        {
          q: "Posso visitar durante a internação?",
          a: "Sim. As visitas são parte importante do tratamento, mas seguem o plano terapêutico de cada clínica. Geralmente, há um período inicial de adaptação (primeiras 2-3 semanas) onde as visitas podem ser restritas. Depois, costumam ser permitidas visitas semanais em dias e horários específicos. Algumas clínicas oferecem também videochamadas. O contato familiar é sempre incentivado de forma estruturada."
        },
        {
          q: "Quais documentos são necessários para internar?",
          a: "Para a internação você precisará de: RG e CPF do paciente, cartão do convênio (se houver), documentos do responsável legal, laudo médico atestando a necessidade (podemos fornecer), comprovante de residência, e para casos de internação involuntária, termo de autorização familiar. Nossa equipe ajuda a organizar toda a documentação necessária."
        },
        {
          q: "A família precisa pagar tudo de uma vez?",
          a: "Não necessariamente. As formas de pagamento variam por clínica e podem incluir: parcelamento em cartão, boletos mensais, uso de convênio médico (alguns planos cobrem), recursos do SUS em casos específicos, ou combinação dessas opções. Nossa equipe apresenta diferentes possibilidades financeiras adequadas à sua realidade."
        }
      ]
    },
    {
      category: "Sobre Remoção",
      questions: [
        {
          q: "Como funciona o processo de remoção?",
          a: "A remoção é o transporte seguro do paciente até a clínica. Nossa equipe especializada faz o planejamento incluindo: avaliação prévia da situação, escolha do melhor horário, equipe treinada (profissionais de saúde), veículo adequado e discreto, abordagem respeitosa e humanizada. Em casos de remoção involuntária, seguimos todos os protocolos legais com documentação necessária. O processo é sempre feito com máximo cuidado e dignidade."
        },
        {
          q: "A remoção pode ser feita em qualquer cidade?",
          a: "Sim. A rede PENIEL atua em todo o Brasil. Organizamos remoções em capitais, interior e até em áreas remotas. Temos parceiros em todos os estados. Para longas distâncias, quando necessário, podemos providenciar remoção aérea. Nossa logística é preparada para atender qualquer localidade, garantindo segurança e agilidade."
        },
        {
          q: "Quanto tempo leva para fazer uma remoção de emergência?",
          a: "Em casos de emergência nas grandes cidades, conseguimos mobilizar equipe em 2 a 4 horas. Para cidades do interior, o prazo varia de acordo com a distância, geralmente de 6 a 24 horas. Para remoções programadas, recomendamos planejamento com 48h de antecedência para melhor organização. Nosso atendimento é 24h, todos os dias."
        },
        {
          q: "A remoção é discreta?",
          a: "Sim. Utilizamos veículos discretos, sem identificação. A equipe usa roupas comuns (não uniformes chamativas). A abordagem é feita com máximo respeito e discrição. Planejamos o melhor horário para minimizar exposição. Entendemos que a privacidade é fundamental nesse momento delicado e trabalhamos para preservá-la ao máximo."
        }
      ]
    },
    {
      category: "Sobre as Clínicas",
      questions: [
        {
          q: "Como as clínicas são selecionadas pela PENIEL?",
          a: "Temos critérios rigorosos de credenciamento: alvará de funcionamento regularizado, responsável técnico habilitado (médico ou psicólogo), instalações adequadas e seguras, equipe multidisciplinar qualificada, metodologia terapêutica estruturada, histórico positivo de resultados, respeito aos direitos dos pacientes, e transparência com familiares. Fazemos visitas regulares para manter o padrão de qualidade."
        },
        {
          q: "As clínicas são todas iguais?",
          a: "Não. Temos clínicas com diferentes perfis: especializadas em diferentes substâncias, masculinas, femininas ou mistas, com abordagem religiosa ou laica, foco em jovens ou adultos, modelos terapêuticos variados (12 passos, psicossocial, etc.), diferentes estruturas (básica a premium), e localizações diversas. Isso permite indicar a clínica ideal para cada caso específico."
        },
        {
          q: "Posso escolher a clínica?",
          a: "Sim. Apresentamos opções adequadas ao perfil e orçamento, você recebe informações detalhadas de cada uma, pode fazer perguntas e tirar dúvidas, em alguns casos é possível visitar antes, e a decisão final é sempre sua. Nossa equipe orienta sobre as melhores opções mas respeita totalmente a escolha da família."
        },
        {
          q: "E se eu não me adaptar à clínica escolhida?",
          a: "Oferecemos acompanhamento durante todo o tratamento. Se houver problemas de adaptação sérios, podemos: avaliar se é questão de tempo de adaptação natural, fazer mediação com a clínica, ou em casos necessários, providenciar transferência para outra unidade. O objetivo é garantir que o tratamento seja efetivo, e às vezes isso exige ajustes."
        }
      ]
    },
    {
      category: "Sobre Tratamento",
      questions: [
        {
          q: "Qual a taxa de sucesso do tratamento?",
          a: "A taxa de sucesso varia conforme múltiplos fatores: tipo de substância, tempo de uso, comprometimento do paciente, apoio familiar, conclusão do programa completo, e acompanhamento pós-tratamento. Estudos mostram que pacientes que completam o programa e mantêm acompanhamento têm cerca de 70-80% de chances de manter sobriedade no primeiro ano. O sucesso aumenta significativamente com participação familiar ativa."
        },
        {
          q: "O que acontece depois da alta?",
          a: "A alta não é o fim do tratamento. Recomendamos: acompanhamento ambulatorial (consultas regulares), participação em grupos de apoio (AA, NA), terapia individual contínua, suporte familiar estruturado, plano de prevenção de recaída, e atividades de reinserção social. Muitas clínicas oferecem acompanhamento pós-tratamento. A PENIEL também mantém suporte às famílias após a alta."
        },
        {
          q: "E se houver recaída?",
          a: "Recaída não é fracasso, mas parte do processo de recuperação para muitas pessoas. O importante é: buscar ajuda imediatamente, não desistir do tratamento, avaliar o que desencadeou a recaída, ajustar o plano terapêutico, reforçar estratégias de prevenção. Muitas pessoas precisam de mais de uma internação. Cada tentativa é aprendizado e fortalecimento. Nossa equipe oferece suporte também nessas situações."
        },
        {
          q: "O tratamento é apenas para dependência química?",
          a: "Não. As clínicas tratam também: alcoolismo, dependência de medicamentos, transtornos psiquiátricos associados (duplo diagnóstico), dependências comportamentais em alguns casos, e trabalham questões emocionais e traumas relacionados. O tratamento é sempre individualizado e multidisciplinar."
        }
      ]
    },
    {
      category: "Sobre a PENIEL",
      questions: [
        {
          q: "Quanto custa o serviço da PENIEL?",
          a: "A orientação e intermediação da PENIEL são GRATUITAS. Você não paga nada para: falar com nossa equipe, receber avaliação e orientação, ser indicado para clínicas adequadas, ter suporte durante o processo, ou fazer perguntas. Você pagará apenas os custos da própria clínica escolhida. Somos remunerados pelas clínicas parceiras, nunca pelo paciente ou família."
        },
        {
          q: "Por que usar a PENIEL ao invés de procurar diretamente uma clínica?",
          a: "A PENIEL oferece: conhecimento de dezenas de clínicas em todo Brasil, orientação imparcial sobre qual é mais adequada, experiência em avaliar diferentes perfis, suporte em todo o processo (documentação, logística, remoção), acompanhamento após internação, mediação em caso de problemas, economia de tempo na busca, e segunda opinião gratuita. Somos especialistas em conectar pessoas ao tratamento certo."
        },
        {
          q: "A PENIEL está disponível 24 horas?",
          a: "Sim. Mantemos atendimento 24 horas por dia, 7 dias por semana, incluindo feriados. Você pode entrar em contato a qualquer momento via WhatsApp, telefone ou formulário online. Em casos de emergência, temos equipe de plantão para resposta imediata. Entendemos que crises não têm hora marcada."
        },
        {
          q: "Como posso confiar na PENIEL?",
          a: "Trabalhamos com: total transparência em todos os processos, clínicas credenciadas e verificadas, equipe de profissionais especializados, anos de experiência no setor, centenas de famílias atendidas, depoimentos reais verificáveis, compromisso com ética e sigilo, e não cobramos nada das famílias. Você pode solicitar referências e conversar com outros familiares que já foram atendidos."
        }
      ]
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
              <h1 className="mb-4">Perguntas Frequentes</h1>
              <p className="text-muted-foreground text-lg">
                Encontre respostas para as dúvidas mais comuns sobre tratamento, internação e nossos serviços.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqCategories.map((category, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 pb-3 border-b">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, qIdx) => (
                    <AccordionItem 
                      key={qIdx} 
                      value={`${idx}-${qIdx}`}
                      className="border rounded-lg px-6 data-[state=open]:border-primary transition-colors"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-semibold pr-4">{item.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="mb-4">Não encontrou sua resposta?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Nossa equipe está pronta para esclarecer todas as suas dúvidas pessoalmente, com atenção e sigilo total.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" asChild>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:08007776666">
                  <Phone className="mr-2 h-5 w-5" />
                  Ligar Agora
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contato">
                  Enviar Mensagem
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

export default FAQ;
