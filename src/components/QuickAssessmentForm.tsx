import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Send, CheckCircle, Shield, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QuickAssessmentForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    caseType: "",
    city: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Solicitação enviada com sucesso!",
      description: "Nossa equipe entrará em contato em até 15 minutos.",
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Recebemos sua solicitação!
            </h3>
            <p className="text-muted-foreground mb-6">
              Um especialista entrará em contato pelo telefone informado em até 15 minutos. 
              Fique tranquilo, estamos aqui para ajudar.
            </p>
            <div className="flex items-center justify-center gap-2 text-secondary font-medium">
              <Clock className="w-5 h-5" />
              <span>Tempo médio de resposta: 8 minutos</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-background to-accent/30" id="avaliacao">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Shield className="w-4 h-4" />
              100% Sigiloso e Gratuito
            </span>
            <h2 className="text-foreground mb-4">
              Avaliação Rápida e Gratuita
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato em até 15 minutos para orientá-lo sobre o melhor caminho.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-lg border p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Seu nome *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Como podemos te chamar?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Telefone/WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="caseType" className="text-foreground font-medium">
                    Tipo de caso *
                  </Label>
                  <Select
                    value={formData.caseType}
                    onValueChange={(value) => setFormData({ ...formData, caseType: value })}
                    required
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="voluntary">Internação Voluntária</SelectItem>
                      <SelectItem value="involuntary">Internação Involuntária</SelectItem>
                      <SelectItem value="compulsory">Internação Compulsória</SelectItem>
                      <SelectItem value="orientation">Apenas Orientação</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="text-foreground font-medium">
                    Cidade/Estado *
                  </Label>
                  <Input
                    id="city"
                    placeholder="Ex: São Paulo - SP"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  size="xl"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Solicitar Avaliação Gratuita
                    </>
                  )}
                </Button>
                
                <Button
                  type="button"
                  variant="whatsapp"
                  size="xl"
                  asChild
                  className="flex-1"
                >
                  <a
                    href="https://wa.me/554195777142?text=Preciso%20de%20ajuda%20urgente"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Prefiro WhatsApp
                  </a>
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Ao enviar, você concorda com nossa{" "}
                <a href="/privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </a>
                . Seus dados estão protegidos pela LGPD.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAssessmentForm;
