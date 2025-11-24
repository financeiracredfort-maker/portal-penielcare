import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClinicCard from "@/components/ClinicCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import clinicExterior from "@/assets/clinic-exterior.jpg";
import therapyRoom from "@/assets/therapy-room.jpg";
import groupTherapy from "@/assets/group-therapy.jpg";

// Mock data - em produção viria de uma API
const mockClinics = [
  {
    id: "1",
    name: "Clínica Esperança",
    city: "São Paulo",
    state: "SP",
    rating: 4.8,
    reviewsCount: 127,
    image: clinicExterior,
    specialties: ["Dependência Química", "Alcoolismo", "Internação Involuntária"],
    availableBeds: 5,
    slug: "clinica-esperanca-sao-paulo",
  },
  {
    id: "2",
    name: "Centro Vida Nova",
    city: "Rio de Janeiro",
    state: "RJ",
    rating: 4.9,
    reviewsCount: 203,
    image: therapyRoom,
    specialties: ["Dependência Química", "Tratamento Feminino"],
    availableBeds: 3,
    slug: "centro-vida-nova-rio-janeiro",
  },
  {
    id: "3",
    name: "Instituto Renascer",
    city: "Belo Horizonte",
    state: "MG",
    rating: 4.7,
    reviewsCount: 89,
    image: groupTherapy,
    specialties: ["Alcoolismo", "Dependência Química", "Programa 12 Passos"],
    availableBeds: 0,
    slug: "instituto-renascer-belo-horizonte",
  },
  {
    id: "4",
    name: "Clínica Recomeço",
    city: "Curitiba",
    state: "PR",
    rating: 4.6,
    reviewsCount: 156,
    image: clinicExterior,
    specialties: ["Dependência Química", "Tratamento Masculino"],
    availableBeds: 8,
    slug: "clinica-recomeco-curitiba",
  },
  {
    id: "5",
    name: "Casa de Apoio Luz",
    city: "Porto Alegre",
    state: "RS",
    rating: 4.9,
    reviewsCount: 178,
    image: therapyRoom,
    specialties: ["Alcoolismo", "Dependência Química", "Terapia Familiar"],
    availableBeds: 2,
    slug: "casa-apoio-luz-porto-alegre",
  },
  {
    id: "6",
    name: "Centro Resgate",
    city: "Salvador",
    state: "BA",
    rating: 4.5,
    reviewsCount: 94,
    image: groupTherapy,
    specialties: ["Dependência Química", "Internação Voluntária"],
    availableBeds: 6,
    slug: "centro-resgate-salvador",
  },
];

const Clinicas = () => {
  const [searchParams] = useSearchParams();
  const [filterState, setFilterState] = useState(searchParams.get("estado") || "");
  const [filterCity, setFilterCity] = useState(searchParams.get("cidade") || "");
  const [filterType, setFilterType] = useState("");

  const filteredClinics = mockClinics.filter((clinic) => {
    if (filterState && clinic.state !== filterState) return false;
    if (filterCity && !clinic.city.toLowerCase().includes(filterCity.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-white mb-6">Rede de Clínicas Credenciadas PENIEL</h1>
            <p className="text-white/90 text-lg max-w-3xl mb-8">
              Conectamos você às melhores instituições de recuperação em todo o Brasil. 
              Todas as clínicas são rigorosamente avaliadas pela PENIEL para garantir excelência no tratamento.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mt-12">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-white/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Certificação Rigorosa</h3>
                  <p className="text-white/80 text-sm">Todas as clínicas passam por avaliação técnica completa</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-3 bg-white/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Cobertura Nacional</h3>
                  <p className="text-white/80 text-sm">Clínicas parceiras em todos os estados brasileiros</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-3 bg-white/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Atendimento 24/7</h3>
                  <p className="text-white/80 text-sm">Suporte imediato em situações de emergência</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-muted py-8 sticky top-16 z-40 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Filter className="h-4 w-4" />
                Filtros:
              </div>
              
              <Select value={filterState} onValueChange={setFilterState}>
                <SelectTrigger className="w-[180px] bg-background">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os estados</SelectItem>
                  <SelectItem value="SP">São Paulo</SelectItem>
                  <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                  <SelectItem value="MG">Minas Gerais</SelectItem>
                  <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                  <SelectItem value="PR">Paraná</SelectItem>
                  <SelectItem value="BA">Bahia</SelectItem>
                </SelectContent>
              </Select>

              <Input
                placeholder="Buscar por cidade"
                value={filterCity}
                onChange={(e) => setFilterCity(e.target.value)}
                className="w-[200px] bg-background"
              />

              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[180px] bg-background">
                  <SelectValue placeholder="Tipo de tratamento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="dependencia">Dependência Química</SelectItem>
                  <SelectItem value="alcoolismo">Alcoolismo</SelectItem>
                  <SelectItem value="involuntaria">Internação Involuntária</SelectItem>
                </SelectContent>
              </Select>

              {(filterState || filterCity || filterType) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setFilterState("");
                    setFilterCity("");
                    setFilterType("");
                  }}
                >
                  Limpar filtros
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                {filteredClinics.length} {filteredClinics.length === 1 ? 'clínica encontrada' : 'clínicas encontradas'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClinics.map((clinic) => (
                <ClinicCard key={clinic.id} {...clinic} />
              ))}
            </div>

            {filteredClinics.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg mb-4">
                  Nenhuma clínica encontrada com os filtros selecionados.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setFilterState("");
                    setFilterCity("");
                    setFilterType("");
                  }}
                >
                  Limpar filtros
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Por que escolher a Rede PENIEL?</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Não deixamos você sozinho. Cuidamos de todo o processo, desde a avaliação inicial até 
                o acompanhamento pós-tratamento
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-background p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Avaliação Gratuita</h3>
                <p className="text-muted-foreground">
                  Análise completa do caso sem custo. Identificamos as necessidades específicas de cada família
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Resgate Rápido</h3>
                <p className="text-muted-foreground">
                  Equipe especializada disponível 24/7 para resgates voluntários e involuntários
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Suporte Familiar</h3>
                <p className="text-muted-foreground">
                  Acompanhamento e orientação para toda a família durante o processo de recuperação
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Pós-Tratamento</h3>
                <p className="text-muted-foreground">
                  Acompanhamento contínuo após alta para prevenir recaídas e garantir recuperação duradoura
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-white mb-4">Encontre a Clínica Ideal Agora</h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para avaliar seu caso e conectar você 
              à clínica mais adequada em sua região
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a href="https://wa.me/5511999999999?text=Preciso%20de%20ajuda%20para%20encontrar%20uma%20cl%C3%ADnica">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Falar com Especialista Agora
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Clinicas;
