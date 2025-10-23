import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ClinicSearch = () => {
  const navigate = useNavigate();
  const [searchState, setSearchState] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchState) params.append("estado", searchState);
    if (searchCity) params.append("cidade", searchCity);
    navigate(`/clinicas?${params.toString()}`);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Encontre uma Clínica</h2>
            <p className="text-muted-foreground text-lg">
              Clínicas credenciadas e verificadas em todo o Brasil
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-elegant p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <Select value={searchState} onValueChange={setSearchState}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Selecione o estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SP">São Paulo</SelectItem>
                  <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                  <SelectItem value="MG">Minas Gerais</SelectItem>
                  <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                  <SelectItem value="PR">Paraná</SelectItem>
                  <SelectItem value="SC">Santa Catarina</SelectItem>
                  <SelectItem value="BA">Bahia</SelectItem>
                  <SelectItem value="PE">Pernambuco</SelectItem>
                  <SelectItem value="CE">Ceará</SelectItem>
                  <SelectItem value="DF">Distrito Federal</SelectItem>
                </SelectContent>
              </Select>

              <Input
                placeholder="Digite a cidade"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="h-12"
              />

              <Button
                variant="hero"
                size="lg"
                onClick={handleSearch}
                className="h-12"
              >
                <Search className="h-4 w-4 mr-2" />
                Buscar Clínicas
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Clínicas em todas as regiões do Brasil</span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Não sabe por onde começar?{" "}
              <a href="#avaliacao" className="text-primary hover:text-primary-light font-semibold transition-colors">
                Fale com um especialista
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicSearch;
