import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Users, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ClinicCardProps {
  id: string;
  name: string;
  city: string;
  state: string;
  rating: number;
  reviewsCount: number;
  image: string;
  specialties: string[];
  availableBeds: number;
  slug: string;
}

const ClinicCard = ({
  name,
  city,
  state,
  rating,
  reviewsCount,
  image,
  specialties,
  availableBeds,
  slug,
}: ClinicCardProps) => {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent(
    `Olá, vim pelo site PENIEL. Gostaria de informações sobre a ${name}`
  );

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-smooth group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        {availableBeds > 0 && (
          <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
            {availableBeds} {availableBeds === 1 ? 'vaga' : 'vagas'}
          </Badge>
        )}
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
          Credenciada PENIEL
        </Badge>
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold line-clamp-1">{name}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <MapPin className="h-3 w-3" />
              <span>{city} - {state}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{rating.toFixed(1)}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({reviewsCount} avaliações)
          </span>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {specialties.slice(0, 3).map((specialty, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {specialty}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" asChild className="flex-1">
          <Link to={`/clinicas/${slug}`}>
            Ver Detalhes
          </Link>
        </Button>
        <Button
          variant="whatsapp"
          size="sm"
          asChild
          className="flex-1"
        >
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4 mr-1" />
            Contato
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ClinicCard;
