import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import logo from "@/assets/logo-green.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Global Plastic" className="h-20 mb-4" />
            <p className="text-primary-foreground/80 mb-4">
              Fábrica de pés e acessórios plásticos para móveis com qualidade industrial e sustentabilidade.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=Rua+Fernando+Guaglianoni,+129+-+Vila+Guaianazes+-+Araraquara/SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Rua Fernando Guaglianoni, Nº 129<br />
                  Vila Guaianazes - Araraquara/SP
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                <a
                  href="https://wa.me/5516997086395"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  (16) 99708-6395
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  globalplastic@globalplastic.ind.br
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Informações</h3>
            <div className="text-primary-foreground/80 space-y-2">
              <p>
                <strong>CNPJ:</strong> 38.381.135/0001-17
              </p>
              <p>
                <strong>IE:</strong> 181.557.395.119
              </p>
              <div className="flex items-start gap-2 mt-4">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Horário de Atendimento:</p>
                  <p>Segunda a Sexta: 07h às 20h</p>
                  <p>Sábado: 07h às 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 GLOBAL PLASTIC — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
