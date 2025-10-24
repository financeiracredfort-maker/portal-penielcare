import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { testimonials } from "@/data/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, MapPin, User, Heart, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Depoimentos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-4">Histórias Reais de Esperança</h1>
              <p className="text-muted-foreground text-lg">
                Conheça as histórias de famílias que encontraram o caminho da recuperação através da PENIEL. 
                Cada história é única, mas todas compartilham esperança e transformação.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-2">Depoimentos em Destaque</h2>
              <p className="text-muted-foreground">Histórias que nos inspiram a continuar</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.filter(t => t.featured).map((testimonial) => (
                <Card key={testimonial.id} className="border-2 border-primary">
                  <CardContent className="pt-8">
                    <Quote className="h-10 w-10 text-primary/20 mb-4" />
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed italic">
                      "{testimonial.story.substring(0, 180)}..."
                    </p>

                    <div className="border-t pt-4 space-y-2">
                      <p className="font-semibold">{testimonial.name}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-3 w-3" />
                        <span>{testimonial.relationship}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{testimonial.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-secondary font-semibold mt-3">
                        <Heart className="h-3 w-3" />
                        <span>{testimonial.timeClean} limpo(a)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-2">Todos os Depoimentos</h2>
              <p className="text-muted-foreground">Cada história é uma vitória</p>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="hover:border-primary transition-smooth">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Avatar & Info */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                          <span className="text-2xl font-bold text-primary">{testimonial.initials}</span>
                        </div>
                        <div className="text-center md:text-left">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.relationship}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1 justify-center md:justify-start">
                            <MapPin className="h-3 w-3" />
                            {testimonial.location}
                          </p>
                          <div className="flex gap-1 mt-2 justify-center md:justify-start">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow space-y-4">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{testimonial.date}</span>
                            <span className="text-sm font-semibold text-secondary ml-auto">
                              ✓ {testimonial.timeClean} em recuperação
                            </span>
                          </div>
                          
                          <Quote className="h-6 w-6 text-primary/20 mb-2" />
                          <p className="text-muted-foreground leading-relaxed mb-4 italic">
                            {testimonial.story}
                          </p>
                        </div>

                        {/* Situation & Result */}
                        <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                          <div>
                            <h4 className="text-sm font-semibold mb-2 text-destructive">Situação Inicial:</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.situation}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold mb-2 text-secondary">Resultado:</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.result}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-2">Resultados Que Falam Por Si</h2>
                <p className="text-muted-foreground">Baseado nos casos acompanhados pela PENIEL</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">78%</div>
                  <p className="text-muted-foreground">Completaram o programa</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">85%</div>
                  <p className="text-muted-foreground">Mantêm sobriedade após 1 ano</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">92%</div>
                  <p className="text-muted-foreground">Famílias satisfeitas</p>
                </div>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-8">
                * Dados baseados em acompanhamento de casos entre 2023-2024
              </p>
            </div>
          </div>
        </section>

        {/* Your Story CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-subtle p-8 rounded-lg border text-center">
              <h2 className="mb-4">Sua História Também Pode Ser de Esperança</h2>
              <p className="text-muted-foreground mb-6">
                Cada jornada de recuperação começa com o primeiro passo. 
                Deixe a PENIEL ajudar você ou seu ente querido a encontrar o caminho certo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" asChild>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp Agora
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contato">
                    Solicitar Avaliação Gratuita
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Note */}
        <section className="py-8 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-sm text-muted-foreground">
              <p>
                <strong>Nota sobre privacidade:</strong> Todos os depoimentos são reais, mas alguns nomes foram alterados 
                para proteger a identidade das famílias. Respeitamos o sigilo e a privacidade de todos os nossos assistidos.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Depoimentos;
