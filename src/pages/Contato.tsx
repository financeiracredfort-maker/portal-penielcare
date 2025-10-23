import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    tipo: "",
    urgencia: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.telefone || !formData.tipo) {
      toast({
        variant: "destructive",
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
      });
      return;
    }

    // Em produção, aqui enviaria para uma API
    console.log("Form data:", formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Protocolo #" + Math.floor(Math.random() * 10000),
    });

    // Limpar formulário
    setFormData({
      nome: "",
      telefone: "",
      email: "",
      tipo: "",
      urgencia: "",
      mensagem: "",
    });
  };

  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá, vim pelo site PENIEL e preciso de ajuda");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-white mb-6">Entre em Contato</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Estamos aqui para ajudar você. Atendimento 24 horas por dia, 7 dias por semana.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-smooth">
                <CardContent className="pt-8">
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">WhatsApp 24h</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Resposta imediata para situações urgentes
                  </p>
                  <Button variant="whatsapp" asChild>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Abrir WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-smooth">
                <CardContent className="pt-8">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">Telefone</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Central de atendimento 24 horas
                  </p>
                  <Button variant="outline" asChild>
                    <a href="tel:0800123456">0800 123 456</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-smooth">
                <CardContent className="pt-8">
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">E-mail</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Resposta em até 24 horas úteis
                  </p>
                  <Button variant="outline" asChild>
                    <a href="mailto:contato@peniel.com.br">Enviar E-mail</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <div>
                <h2 className="mb-6">Preencha o formulário</h2>
                <p className="text-muted-foreground mb-8">
                  Preencha os campos abaixo e entraremos em contato o mais breve possível. 
                  Todas as informações são tratadas com sigilo absoluto.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nome">Nome completo *</Label>
                    <Input
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input
                        id="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="tipo">Tipo de atendimento *</Label>
                    <Select value={formData.tipo} onValueChange={(value) => setFormData({ ...formData, tipo: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="voluntaria">Remoção Voluntária</SelectItem>
                        <SelectItem value="involuntaria">Remoção Involuntária</SelectItem>
                        <SelectItem value="internacao">Internação</SelectItem>
                        <SelectItem value="informacoes">Informações Gerais</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="urgencia">Urgência</Label>
                    <Select value={formData.urgencia} onValueChange={(value) => setFormData({ ...formData, urgencia: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a urgência" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="imediata">Imediata (hoje)</SelectItem>
                        <SelectItem value="esta-semana">Esta semana</SelectItem>
                        <SelectItem value="proximas-semanas">Próximas semanas</SelectItem>
                        <SelectItem value="apenas-informacoes">Apenas informações</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea
                      id="mensagem"
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Conte-nos um pouco sobre sua situação..."
                      rows={5}
                    />
                  </div>

                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <input type="checkbox" required className="mt-1" />
                    <span>
                      Concordo com a{" "}
                      <a href="/privacidade-e-termos" className="text-primary hover:underline">
                        Política de Privacidade
                      </a>{" "}
                      e autorizo o tratamento dos meus dados conforme a LGPD.
                    </span>
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Enviar Mensagem
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Suas informações são tratadas com total sigilo e segurança
                  </p>
                </form>
              </div>

              {/* Info Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Horário de Atendimento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-lg mb-2">24 horas por dia</p>
                    <p className="text-sm text-muted-foreground">
                      Todos os dias da semana, incluindo feriados. 
                      Estamos sempre disponíveis para ajudar.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Atuação Nacional
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Atendemos em todos os estados do Brasil com clínicas credenciadas e verificadas.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        <span>Remoção em qualquer região</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        <span>Equipe local em cada estado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        <span>Suporte personalizado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-accent border-2 border-primary">
                  <CardContent className="pt-6">
                    <p className="font-semibold mb-3">Precisa de ajuda agora?</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Para situações urgentes, entre em contato direto via WhatsApp para resposta imediata.
                    </p>
                    <Button variant="whatsapp" size="lg" className="w-full" asChild>
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Abrir WhatsApp Agora
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
