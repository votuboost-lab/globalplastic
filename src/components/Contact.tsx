import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e telefone.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    toast({
      title: "Obrigado!",
      description: "Estamos te redirecionando para o WhatsApp...",
    });

    const phoneNumbers = phone.replace(/\D/g, "");
    const message = `Olá! Acessei o site da GLOBAL PLASTIC e gostaria de um orçamento.%0ANome: ${encodeURIComponent(name)}%0ATelefone: ${phoneNumbers}`;
    const whatsappUrl = `https://wa.me/5516997086395?text=${message}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      setName("");
      setPhone("");
    }, 1000);
  };

  return (
    <section className="py-20 bg-muted/30 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-background rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
            Solicite seu orçamento direto com a fábrica
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Preencha seus dados e nossa equipe entrará em contato pelo WhatsApp em poucos minutos.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base">
                Nome completo *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base">
                Telefone / WhatsApp *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(00) 00000-0000"
                value={phone}
                onChange={handlePhoneChange}
                maxLength={15}
                required
                className="h-12 text-base"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 text-lg font-bold bg-[#61BB46] hover:bg-[#61BB46]/90 text-white transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              {isSubmitting ? "Redirecionando..." : "Falar no WhatsApp"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
