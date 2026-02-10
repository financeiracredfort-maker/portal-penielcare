import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Send, CheckCircle, Clock, Shield, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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
    
    if (!formData.name.trim() || !formData.phone.trim() || !formData.caseType || !formData.city.trim()) {
      toast({ title: "Preencha todos os campos", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    
    const { error } = await supabase.from("leads").insert({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      case_type: formData.caseType,
      city: formData.city.trim(),
    });

    setIsSubmitting(false);

    if (error) {
      toast({ title: "Erro ao enviar. Tente pelo WhatsApp.", variant: "destructive" });
      return;
    }
    
    setIsSubmitted(true);
    toast({
      title: "Recebemos seu pedido!",
      description: "Nossa equipe vai te ligar em até 15 minutos.",
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-12 bg-secondary/5" id="avaliacao">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Recebemos sua solicitação!</h3>
            <p className="text-muted-foreground mb-4">
              Um especialista entrará em contato pelo telefone informado em até 15 minutos.
            </p>
            <div className="flex items-center justify-center gap-2 text-secondary font-medium">
              <Clock className="w-4 h-4" />
              <span>Tempo médio de resposta: 8 minutos</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-b from-background to-accent/30" id="avaliacao">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-1.5 rounded-full text-sm font-bold mb-3">
              <AlertTriangle className="w-4 h-4" />
              Cada Minuto Conta
            </div>
            <h2 className="text-foreground mb-3 text-2xl md:text-3xl lg:text-4xl">
              Peça Ajuda Agora — É Gratuito e Sigiloso
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Preencha e nossa equipe liga para você em até 15 minutos. Sem compromisso.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-lg border p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-foreground font-medium text-sm">Seu nome *</Label>
                  <Input
                    id="name"
                    placeholder="Como podemos te chamar?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-11"
                    maxLength={100}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-foreground font-medium text-sm">WhatsApp / Telefone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-11"
                    maxLength={20}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="caseType" className="text-foreground font-medium text-sm">Tipo de caso *</Label>
                  <Select
                    value={formData.caseType}
                    onValueChange={(value) => setFormData({ ...formData, caseType: value })}
                    required
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="voluntary">Internação Voluntária</SelectItem>
                      <SelectItem value="involuntary">Internação Involuntária</SelectItem>
                      <SelectItem value="compulsory">Internação Compulsória</SelectItem>
                      <SelectItem value="orientation">Apenas Orientação</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="city" className="text-foreground font-medium text-sm">Cidade / Estado *</Label>
                  <Input
                    id="city"
                    placeholder="Ex: São Paulo - SP"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    className="h-11"
                    maxLength={100}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button type="submit" size="lg" className="flex-1" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Solicitar Ligação Gratuita
                    </>
                  )}
                </Button>
                
                <Button type="button" variant="whatsapp" size="lg" asChild className="flex-1">
                  <a
                    href="https://wa.me/5511999999999?text=Preciso%20de%20ajuda%20urgente"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Prefiro WhatsApp
                  </a>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-1">
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  <span>100% sigiloso</span>
                </div>
                <span>•</span>
                <span>Protegido pela LGPD</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAssessmentForm;
