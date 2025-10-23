import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MapPin, Phone, MessageCircle, Clock, Users, CheckCircle, Award } from "lucide-react";
import clinicExterior from "@/assets/clinic-exterior.jpg";
import therapyRoom from "@/assets/therapy-room.jpg";
import groupTherapy from "@/assets/group-therapy.jpg";

// Mock data - em produção viria de uma API
const clinicData = {
  name: "Clínica Esperança",
  city: "São Paulo",
  state: "SP",
  rating: 4.8,
  reviewsCount: 127,
  address: "Zona Norte, São Paulo - SP",
  phone: "(11) 98765-4321",
  description: "A Clínica Esperança é referência em São Paulo no tratamento da dependência química e alcoolismo. Nosso programa terapêutico é coordenado por equipe multidisciplinar com psicólogos, terapeutas e médicos. O acolhimento familiar é parte essencial do processo — acompanhamos cada etapa com empatia, respeito e transparência.",
  images: [clinicExterior, therapyRoom, groupTherapy],
  features: [
    "Atendimento 24h",
    "Internação voluntária e involuntária",
    "Remoção em até 3h em SP",
    "40 leitos disponíveis",
    "Equipe multidisciplinar",
    "Programa 12 Passos",
  ],
  team: [
    {
      name: "Dr. Carlos Mendes",
      role: "Psiquiatra",
      credential: "CRM-SP 12345",
    },
    {
      name: "Dra. Ana Paula Souza",
      role: "Terapeuta especialista em dependência química",
      credential: "CRP-SP 67890",
    },
  ],
  programs: [
    {
      title: "Programa Detox",
      duration: "7-21 dias",
      description: "Desintoxicação supervisionada com suporte médico 24h",
    },
    {
      title: "Internação Terapêutica",
      duration: "90 dias",
      description: "Programa completo com terapia individual, grupo e familiar",
    },
    {
      title: "Acompanhamento Familiar",
      duration: "Contínuo",
      description: "Suporte e orientação para familiares durante todo o tratamento",
    },
  ],
  faqs: [
    {
      question: "Como funciona a internação involuntária?",
      answer: "A equipe jurídica orienta passo a passo com segurança e sigilo, respeitando todos os procedimentos legais.",
    },
    {
      question: "É possível visita durante o tratamento?",
      answer: "Sim, conforme plano terapêutico individualizado definido pela equipe técnica.",
    },
    {
      question: "Quais documentos são necessários?",
      answer: "RG, CPF e autorização familiar (quando aplicável para internação involuntária).",
    },
  ],
  testimonials: [
    {
      author: "Fátima R.",
      text: "A equipe foi atenciosa do início ao fim. Voltaria a confiar de olhos fechados.",
      rating: 5,
    },
  ],
};

const ClinicaDetalhes = () => {
  const { slug } = useParams();
  
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent(
    `Olá, vim pelo site PENIEL. Gostaria de informações sobre a ${clinicData.name}`
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Gallery */}
        <section className="relative h-[400px] overflow-hidden">
          <img
            src={clinicData.images[0]}
            alt={clinicData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="container mx-auto">
              <Badge className="bg-primary text-primary-foreground mb-2">
                Credenciada PENIEL
              </Badge>
              <h1 className="text-white mb-2">{clinicData.name}</h1>
              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{clinicData.city} - {clinicData.state}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{clinicData.rating}</span>
                  <span className="text-white/80">({clinicData.reviewsCount} avaliações)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Sobre a Clínica</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {clinicData.description}
                  </p>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Diferenciais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {clinicData.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Team */}
              <Card>
                <CardHeader>
                  <CardTitle>Equipe Responsável</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {clinicData.team.map((member, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                      <Award className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                        <p className="text-xs text-muted-foreground mt-1">{member.credential}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Programs */}
              <Card>
                <CardHeader>
                  <CardTitle>Programas de Tratamento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {clinicData.programs.map((program, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{program.title}</h4>
                        <Badge variant="outline">{program.duration}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{program.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* FAQs */}
              <Card>
                <CardHeader>
                  <CardTitle>Perguntas Frequentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {clinicData.faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-semibold mb-2">{faq.question}</h4>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card - Sticky */}
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Entre em Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    variant="whatsapp"
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Agora
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a href={`tel:${clinicData.phone.replace(/\D/g, '')}`}>
                      <Phone className="h-4 w-4" />
                      {clinicData.phone}
                    </a>
                  </Button>

                  <div className="pt-4 border-t space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{clinicData.address}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Atendimento 24 horas</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClinicaDetalhes;
