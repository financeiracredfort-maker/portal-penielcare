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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timeout = setTimeout(() => {
      const steps = 50;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) { setCount(value); clearInterval(timer); }
        else setCount(Math.floor(current));
      }, 1500 / steps);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div ref={ref} className="text-center p-4">
      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
        {count.toLocaleString('pt-BR')}<span className="text-xl">{suffix}</span>
      </div>
      <p className="text-muted-foreground text-sm font-medium">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: <Users className="w-6 h-6 text-primary" />, value: 5000, suffix: "+", label: "Famílias Atendidas", delay: 0 },
    { icon: <Building2 className="w-6 h-6 text-primary" />, value: 50, suffix: "+", label: "Clínicas Parceiras", delay: 100 },
    { icon: <Clock className="w-6 h-6 text-primary" />, value: 15, suffix: "min", label: "Tempo de Resposta", delay: 200 },
    { icon: <Heart className="w-6 h-6 text-primary" />, value: 98, suffix: "%", label: "Satisfação", delay: 300 },
  ];

  return (
    <section className="py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => <StatItem key={i} {...stat} />)}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
