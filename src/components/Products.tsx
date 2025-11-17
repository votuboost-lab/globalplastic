import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import product12cm from "@/assets/product-12cm-new.png";
import productConico from "@/assets/product-conico-new.png";
import product06cm from "@/assets/product-06cm-new.png";
import productMadeira from "@/assets/product-madeira-new.png";
import productCanto from "@/assets/product-canto-new.png";
import productCantoneira from "@/assets/product-cantoneira-new.png";
import logo from "@/assets/logo-green.png";

const products = [
  {
    name: "Pé Plástico 12cm com aba",
    description: "Modelo mais vendido, resistente e durável para cama box",
    image: product12cm,
  },
  {
    name: "Pé Cônico 12cm",
    description: "Resistente e durável, modelo com ranhuras que imitam a madeira",
    image: productConico,
  },
  {
    name: "Pé Plástico 06cm com aba",
    description: "Resistente e durável",
    image: product06cm,
  },
  {
    name: "Pé de Madeira Nogueira",
    description: "Acabamento refinado, ideal para móveis que exigem elegância e estilo",
    image: productMadeira,
  },
  {
    name: "Pé de canto para estofado",
    description: "Diversas cores e acompanha os parafusos",
    image: productCanto,
  },
  {
    name: "Cantoneira de cama Box",
    description: "Utilizada também como trava de colchão",
    image: productCantoneira,
  },
];

const Products = () => {
  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-4">
          Nossos Produtos
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Linha completa de pés e acessórios com qualidade industrial, abaixo alguns exemplos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="p-0 bg-gradient-to-br from-muted/10 to-muted/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain p-6"
                  loading="lazy"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl mb-2 text-primary">{product.name}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  variant="outline" 
                  className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  onClick={() => {
                    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Saiba Mais
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <img src={logo} alt="Global Plastic" className="h-16 opacity-20" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Products;
