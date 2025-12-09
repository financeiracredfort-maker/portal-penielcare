import { Shield, Lock, Award, CheckCircle } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sigilo Total",
      description: "Atendimento 100% confidencial",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "LGPD",
      description: "Dados protegidos por lei",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certificado",
      description: "Equipe qualificada",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Garantia",
      description: "Satisfação ou realocação",
    },
  ];

  return (
    <section className="py-10 bg-muted/30 border-y">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-4 justify-center md:justify-start"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                {badge.icon}
              </div>
              <div>
                <p className="font-semibold text-foreground">{badge.title}</p>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
