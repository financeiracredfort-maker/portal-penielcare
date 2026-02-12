import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import treatmentRoom from "@/assets/treatment-room.jpg";
import therapyRoom from "@/assets/therapy-room.jpg";
import clinicExterior from "@/assets/clinic-exterior.jpg";

const CTASection = () => {
  const whatsappNumber = "554195777142";
  const whatsappMessage = encodeURIComponent("Olá, preciso de orientação urgente sobre tratamento. Vim pelo site PENIEL.");

  const clinicImages = [
    { src: treatmentRoom, alt: "Sala de tratamento moderna e acolhedora" },
    { src: therapyRoom, alt: "Ambiente de terapia confortável" },
    { src: clinicExterior, alt: "Vista externa da clínica" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Clinic Gallery */}
        <div className="text-center mb-12">
          <h2 className="mb-4">Estrutura das Nossas Clínicas</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ambientes preparados para oferecer conforto e tratamento de qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {clinicImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-elegant">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="gradient-primary rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="max-w-3xl mx-auto text-center text-white relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Sua Família Não Precisa Enfrentar Isso Sozinha
            </h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Orientação gratuita, encaminhamento para a clínica ideal e suporte completo 
              durante toda a jornada de recuperação. Atendimento 24h em todo o Brasil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                variant="secondary"
                size="xl"
                asChild
                className="group text-lg px-8"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Falar com Especialista
                </a>
              </Button>

              <Button
                variant="outline"
                size="xl"
                asChild
                className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm text-lg px-8"
              >
                <a href="tel:+554195777142">
                  <Phone className="h-5 w-5" />
                  Ligar: (41) 9577-7142
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sigilo absoluto</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Orientação especializada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
