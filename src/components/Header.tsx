import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background shadow-md py-2" : "bg-background/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <img src={logo} alt="Global Plastic" className="h-14 md:h-20" />

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-foreground hover:text-secondary transition-colors font-semibold"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("produtos")}
            className="text-foreground hover:text-secondary transition-colors font-semibold"
          >
            Produtos
          </button>
          <button
            onClick={() => scrollToSection("vantagens")}
            className="text-foreground hover:text-secondary transition-colors font-semibold"
          >
            Vantagens
          </button>
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-foreground hover:text-secondary transition-colors font-semibold"
          >
            Sobre Nós
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-foreground hover:text-secondary transition-colors font-semibold"
          >
            Contato
          </button>
        </nav>

        <Button
          variant="default"
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground pulse-green"
          asChild
        >
          <a
            href="https://wa.me/5516997086395"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden md:inline">Fale com um Especialista</span>
            <span className="md:hidden">WhatsApp</span>
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
