import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, HelpCircle } from "lucide-react";

const HomeFAQ = () => {
  const faqs = [
    {
      question: "Como funciona o processo de internação?",
      answer: "O processo começa com uma conversa acolhedora para entender a situação da sua família. Nossa equipe avalia o caso, orienta sobre as melhores opções de tratamento e cuida de toda a logística — desde a escolha da clínica até o acompanhamento do paciente durante a internação. Tudo com sigilo e respeito.",
    },
    {
      question: "Quanto tempo dura o tratamento?",
      answer: "O tempo de tratamento varia de acordo com cada caso. A maioria dos programas tem duração entre 90 dias a 12 meses. Durante a avaliação inicial, nossa equipe identificará a melhor opção para o seu familiar, considerando o tipo de dependência, tempo de uso e condições de saúde.",
    },
    {
      question: "O serviço é realmente sigiloso?",
      answer: "Sim, absolutamente. Trabalhamos com total confidencialidade. Nossa equipe atua de forma discreta e todas as informações são protegidas pela LGPD. Entendemos a sensibilidade deste momento e respeitamos a privacidade da família.",
    },
    {
      question: "Vocês atendem em todo o Brasil?",
      answer: "Sim! Temos uma rede de mais de 50 clínicas parceiras distribuídas em todos os estados brasileiros. Independente de onde você esteja, podemos encaminhar seu familiar para uma clínica próxima ou, se preferir, para uma unidade em outra região.",
    },
    {
      question: "Como são os valores e formas de pagamento?",
      answer: "Os valores variam conforme o tipo de clínica, estrutura e duração do tratamento. Trabalhamos com opções que cabem em diferentes orçamentos - de clínicas populares a unidades premium. Oferecemos parcelamento facilitado e algumas opções aceitam convênios médicos. A avaliação inicial é gratuita e sem compromisso.",
    },
    {
      question: "O que está incluso no serviço da PENIEL?",
      answer: "Nosso serviço inclui: avaliação inicial com a família, orientação completa sobre o tratamento, indicação da clínica ideal para o caso, transporte seguro e humanizado até a unidade, documentação necessária e acompanhamento familiar durante todo o período de tratamento.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <HelpCircle className="w-4 h-4" />
              Tire Suas Dúvidas
            </div>
            <h2 className="text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Reunimos as dúvidas mais comuns das famílias que nos procuram.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground mb-4">
              Não encontrou o que procurava?
            </p>
            <Button variant="whatsapp" size="lg" asChild>
              <a
                href="https://wa.me/554195777142?text=Olá,%20tenho%20uma%20dúvida"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Fale com um Especialista
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
