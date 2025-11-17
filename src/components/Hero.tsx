import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center parallax"
      style={{
        backgroundImage: `linear-gradient(rgba(12, 33, 73, 0.65), rgba(12, 33, 73, 0.75)), url(${heroBg})`,
      }}
    >
      <div className="container mx-auto px-4 text-center z-10">
        <img 
          src={logo} 
          alt="Global Plastic" 
          className="mx-auto mb-12 h-40 md:h-56 animate-fade-in" 
          style={{ filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 90px rgba(255, 255, 255, 0.4))' }}
        />
        
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
          Fábrica de Pés e Acessórios para Móveis e Cama Box
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in">
          Produzimos com precisão, qualidade e respeito ao meio ambiente.
        </p>
        
        <Button
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 animate-scale-in"
          asChild
        >
          <a
            href="https://wa.me/5516997086395"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MessageCircle className="w-6 h-6" />
            Solicitar Orçamento no WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
