import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Download, CheckCircle, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadMagnetSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Guia enviado!",
      description: "Verifique seu e-mail para baixar o guia gratuito.",
    });
  };

  const benefits = [
    "Como identificar sinais de dependência",
    "Passo a passo para conversar com o familiar",
    "Como funciona o processo de internação",
    "Direitos legais da família",
    "Como escolher a clínica ideal",
  ];

  if (isSubmitted) {
    return (
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Guia enviado com sucesso!
            </h3>
            <p className="text-primary-foreground/80">
              Verifique sua caixa de entrada (e também o spam). 
              O guia contém informações valiosas para ajudar sua família.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <BookOpen className="w-4 h-4" />
                Material Gratuito
              </div>
              
              <h2 className="text-primary-foreground mb-4">
                Guia Gratuito: Como Ajudar um Familiar com Dependência Química
              </h2>
              
              <p className="text-primary-foreground/80 text-lg mb-6">
                Um guia completo e prático para familiares que estão passando por esse momento difícil.
              </p>

              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-primary-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-center">
                Baixe Agora — É Grátis
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="leadName">Seu nome</Label>
                  <Input
                    id="leadName"
                    placeholder="Como podemos te chamar?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="leadEmail">Seu melhor e-mail</Label>
                  <Input
                    id="leadEmail"
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <Button
                  type="submit"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      Quero Receber o Guia
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Prometemos não enviar spam. Seus dados estão seguros.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
