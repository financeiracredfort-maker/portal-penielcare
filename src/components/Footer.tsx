import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">PENIEL</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Rede nacional de clínicas de recuperação. Atendimento humanizado, sigiloso e acolhedor para dependência química e alcoolismo.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/sobre-peniel" className="hover:text-secondary transition-colors">
                  Sobre a PENIEL
                </Link>
              </li>
              <li>
                <Link to="/clinicas" className="hover:text-secondary transition-colors">
                  Nossas Clínicas
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="hover:text-secondary transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/depoimentos" className="hover:text-secondary transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link to="/trabalhe-conosco" className="hover:text-secondary transition-colors">
                  Trabalhe Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/servicos/avaliacao-inicial" className="hover:text-secondary transition-colors">
                  Avaliação Inicial
                </Link>
              </li>
              <li>
                <Link to="/servicos/orientacao-familiar" className="hover:text-secondary transition-colors">
                  Orientação Familiar
                </Link>
              </li>
              <li>
                <Link to="/servicos/internacao" className="hover:text-secondary transition-colors">
                  Internação
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-secondary transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary-foreground">(41) 9577-7142</p>
                  <p className="text-xs">Atendimento 24h</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:contato@peniel.com.br" className="hover:text-secondary transition-colors">
                  contato@peniel.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>Atuação em todo território nacional</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Legal - Compliance Meta/Google Ads */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <p className="text-xs text-primary-foreground/50 text-center max-w-4xl mx-auto leading-relaxed mb-6">
            <strong>Aviso Legal:</strong> A PENIEL não é uma clínica médica ou unidade de saúde. 
            Atuamos como intermediadores, conectando famílias a clínicas de recuperação credenciadas. 
            O conteúdo deste site é informativo e não substitui orientação médica profissional. 
            Os resultados dos tratamentos podem variar. Todos os dados são protegidos conforme a 
            LGPD (Lei nº 13.709/2018).
          </p>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} PENIEL. Todos os direitos reservados. CNPJ: XX.XXX.XXX/0001-XX</p>
            <div className="flex gap-4">
              <Link to="/privacidade-e-termos" className="hover:text-secondary transition-colors">
                Política de Privacidade
              </Link>
              <span>•</span>
              <Link to="/privacidade-e-termos" className="hover:text-secondary transition-colors">
                Termos de Uso
              </Link>
              <span>•</span>
              <Link to="/privacidade-e-termos" className="hover:text-secondary transition-colors">
                LGPD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
