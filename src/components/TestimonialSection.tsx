import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria S.",
    location: "Belo Horizonte, MG",
    text: "Graças à PENIEL, meu filho está há 8 meses limpo. A equipe foi incrível do início ao fim, sempre com muito carinho e profissionalismo.",
    rating: 5,
  },
  {
    name: "João P.",
    location: "São Paulo, SP",
    text: "A orientação que recebi foi fundamental para tomar a decisão certa. Senti confiança em cada etapa do processo. Recomendo de coração.",
    rating: 5,
  },
  {
    name: "Ana Clara R.",
    location: "Rio de Janeiro, RJ",
    text: "Atendimento humanizado e respeitoso. A PENIEL nos deu esperança quando mais precisávamos. Minha irmã hoje está se recuperando maravilhosamente.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Histórias de Esperança</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Famílias que encontraram o caminho da recuperação através da PENIEL
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative border-2 hover:border-primary transition-smooth">
              <CardContent className="pt-8">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/depoimentos"
            className="text-primary hover:text-primary-light font-semibold inline-flex items-center gap-2 transition-colors"
          >
            Ver mais depoimentos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
