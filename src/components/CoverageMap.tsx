import { MapPin, CheckCircle } from "lucide-react";

const CoverageMap = () => {
  const regions = [
    {
      name: "Sudeste",
      states: ["São Paulo", "Rio de Janeiro", "Minas Gerais", "Espírito Santo"],
      clinics: 25,
    },
    {
      name: "Sul",
      states: ["Paraná", "Santa Catarina", "Rio Grande do Sul"],
      clinics: 12,
    },
    {
      name: "Nordeste",
      states: ["Bahia", "Pernambuco", "Ceará", "e mais 6 estados"],
      clinics: 8,
    },
    {
      name: "Centro-Oeste",
      states: ["Goiás", "Mato Grosso", "Mato Grosso do Sul", "Distrito Federal"],
      clinics: 5,
    },
    {
      name: "Norte",
      states: ["Amazonas", "Pará", "e mais 5 estados"],
      clinics: 4,
    },
  ];

  return (
    <section className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" />
            Cobertura Nacional
          </div>
          <h2 className="text-foreground mb-4">
            Atendemos em Todo o Brasil
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Com mais de 50 clínicas parceiras, garantimos atendimento de qualidade em todas as regiões do país.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">{region.name}</h3>
                <span className="bg-secondary/20 text-secondary-dark px-3 py-1 rounded-full text-sm font-semibold">
                  {region.clinics} clínicas
                </span>
              </div>
              <ul className="space-y-2">
                {region.states.map((state, stateIndex) => (
                  <li key={stateIndex} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                    {state}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-6 py-3 rounded-full">
            <CheckCircle className="w-5 h-5 text-secondary" />
            <span className="text-foreground font-medium">
              Não encontrou sua região? Nós atendemos sim! Entre em contato.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;
