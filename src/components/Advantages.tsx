import { Settings, Globe, Truck, DollarSign } from "lucide-react";

const advantages = [
  {
    icon: Settings,
    title: "Produção Própria e Sob Demanda",
    description: "Fábrica completa com capacidade de personalização e grandes volumes",
  },
  {
    icon: Globe,
    title: "Sustentabilidade e Reaproveitamento",
    description: "Utilizamos materiais reciclados e processos que respeitam o meio ambiente",
  },
  {
    icon: Truck,
    title: "Entrega Rápida em Todo o Brasil",
    description: "Logística eficiente com prazos competitivos para qualquer região",
  },
  {
    icon: DollarSign,
    title: "Preço Direto da Fábrica",
    description: "Sem intermediários, melhor custo-benefício do mercado",
  },
];

const Advantages = () => {
  return (
    <section id="vantagens" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-4">
          Por que escolher a GLOBAL PLASTIC?
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Vantagens que fazem a diferença no seu negócio
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
