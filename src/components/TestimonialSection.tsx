import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria S.",
    location: "Belo Horizonte, MG",
    text: "Meu filho estava se destruindo e eu não sabia mais o que fazer. A PENIEL resgatou ele em 2 horas. Hoje ele está há 8 meses limpo.",
  },
  {
    name: "João P.",
    location: "São Paulo, SP",
    text: "Achei que ia perder meu irmão. A equipe foi discreta, rápida e humana. Sem a PENIEL, não sei o que teria acontecido.",
  },
  {
    name: "Ana Clara R.",
    location: "Rio de Janeiro, RJ",
    text: "Ligamos desesperados às 3h da manhã e fomos atendidos na hora. Minha irmã hoje está em recuperação. Gratidão eterna.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-14 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="mb-3 text-2xl md:text-3xl lg:text-4xl">Famílias Que Recuperaram a Esperança</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Histórias reais de quem passou pelo mesmo desespero que você
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow">
              <Quote className="h-6 w-6 text-primary/20 mb-3" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed italic">"{t.text}"</p>
              <div className="border-t pt-3">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
