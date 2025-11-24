import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin, Star, Award } from "lucide-react";
import clinicExterior from "@/assets/clinic-exterior.jpg";
import therapyRoom from "@/assets/therapy-room.jpg";
import groupTherapy from "@/assets/group-therapy.jpg";

const partnerClinics = [
  {
    id: 1,
    name: "Clínica Esperança",
    location: "São Paulo - SP",
    image: clinicExterior,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Centro Vida Nova",
    location: "Rio de Janeiro - RJ",
    image: therapyRoom,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Instituto Renascer",
    location: "Belo Horizonte - MG",
    image: groupTherapy,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Clínica Recomeço",
    location: "Curitiba - PR",
    image: clinicExterior,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Casa de Apoio Luz",
    location: "Porto Alegre - RS",
    image: therapyRoom,
    rating: 4.9,
  },
];

const PartnersCarousel = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-foreground">Clínicas Parceiras Credenciadas</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Trabalhamos com as melhores instituições em todo o Brasil, todas rigorosamente 
            avaliadas e certificadas pela PENIEL para garantir qualidade e segurança no tratamento
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partnerClinics.map((clinic) => (
              <CarouselItem key={clinic.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden group hover:shadow-lg transition-smooth">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={clinic.image}
                      alt={clinic.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-2">{clinic.name}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm">
                          <MapPin className="h-4 w-4" />
                          <span>{clinic.location}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{clinic.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersCarousel;
