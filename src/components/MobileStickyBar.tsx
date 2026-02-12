import { Phone, MessageCircle } from "lucide-react";

const MobileStickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-card border-t shadow-lg safe-area-inset-bottom">
      <div className="grid grid-cols-2 divide-x">
        <a
          href="tel:+554195777142"
          className="flex items-center justify-center gap-2 py-4 text-primary font-semibold hover:bg-primary/5 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span>Ligar Agora</span>
        </a>
        <a
          href="https://wa.me/554195777142?text=Ol%C3%A1%2C%20preciso%20de%20orienta%C3%A7%C3%A3o.%20Vim%20pelo%20site%20PENIEL."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 bg-secondary text-secondary-foreground font-semibold hover:bg-secondary-dark transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default MobileStickyBar;
