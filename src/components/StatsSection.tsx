import { useEffect, useState, useRef } from "react";
import { Users, Building2, Clock, Heart } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon, value, suffix, label, delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div
      ref={ref}
      className="relative group text-center p-6 rounded-2xl bg-card border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count.toLocaleString('pt-BR')}
        <span className="text-2xl">{suffix}</span>
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      value: 5000,
      suffix: "+",
      label: "Famílias Atendidas",
      delay: 0,
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      value: 50,
      suffix: "+",
      label: "Clínicas Parceiras",
      delay: 100,
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      value: 15,
      suffix: "min",
      label: "Tempo Médio de Resposta",
      delay: 200,
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      value: 98,
      suffix: "%",
      label: "Satisfação das Famílias",
      delay: 300,
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-foreground mb-4">
            Números que Inspiram Confiança
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Anos de experiência transformando vidas e reunindo famílias em todo o Brasil.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
