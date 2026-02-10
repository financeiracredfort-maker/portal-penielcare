import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HomeFAQ = () => {
  const faqs = [
    {
      question: "Como funciona a internação involuntária?",
      answer: "Quando o dependente não reconhece a necessidade de tratamento e representa risco, nossa equipe realiza a avaliação, orienta a família e executa a remoção com segurança e discrição, conforme a Lei 10.216/2001.",
    },
    {
      question: "Quanto tempo leva para vocês chegarem?",
      answer: "Respondemos em até 15 minutos e organizamos o resgate o mais rápido possível, dependendo da localidade. Atendemos em todo o Brasil, 24 horas por dia.",
    },
    {
      question: "O serviço é realmente sigiloso?",
      answer: "Sim. Veículos descaracterizados, equipe discreta e todas as informações protegidas pela LGPD. Respeitamos totalmente a privacidade da sua família.",
    },
    {
      question: "Quanto custa?",
      answer: "Os valores variam conforme o tipo de clínica e tratamento. Temos opções para diferentes orçamentos, com parcelamento facilitado. A avaliação inicial é gratuita e sem compromisso.",
    },
  ];

  return (
    <section className="py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center text-foreground mb-8 text-2xl md:text-3xl">Dúvidas Frequentes</h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border rounded-xl px-5 data-[state=open]:shadow-sm transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-4 text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
