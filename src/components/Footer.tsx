import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-lg font-bold mb-1">PENIEL</h3>
            <p className="text-sm text-primary-foreground/70">Resgate e internação 24h em todo o Brasil</p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/80">
            <a href="tel:0800123456" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" /> 0800 123 456
            </a>
            <a href="mailto:contato@peniel.com.br" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4" /> contato@peniel.com.br
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Todo o Brasil
            </span>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 pt-6 text-center text-xs text-primary-foreground/50">
          <p>&copy; 2025 PENIEL. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
