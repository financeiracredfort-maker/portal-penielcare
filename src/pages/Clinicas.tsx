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
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-white mb-4">Nossas Clínicas Credenciadas</h1>
            <p className="text-white/90 text-lg max-w-3xl">
              Clínicas verificadas e credenciadas pela PENIEL em todo o Brasil. 
              Todas passam por rigoroso processo de avaliação para garantir qualidade e segurança.
            </p>
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

        {/* CTA */}
        <section className="bg-accent py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4">Precisa de ajuda para escolher?</h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              Nossa equipe pode orientá-lo na escolha da clínica ideal para cada situação
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/5511999999999?text=Preciso%20de%20ajuda%20para%20escolher%20uma%20cl%C3%ADnica">
                Falar com Especialista
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
