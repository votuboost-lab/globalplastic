import factoryImg from "@/assets/fabrica-nova.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
              Quem Somos
            </h2>
            <h3 className="text-2xl font-bold text-accent mb-6">
              Excelência Industrial, Inovação e Entregas em Alta Escala
            </h3>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              A <strong className="text-primary">GLOBAL PLASTIC</strong> é referência nacional na fabricação de pés para móveis e cama box, 
              unindo <span className="font-semibold text-accent">engenharia de precisão</span>, <span className="font-semibold text-accent">tecnologia de última geração</span> e 
              uma operação projetada para <span className="font-semibold text-accent">alta performance</span>.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Com uma <strong className="text-primary">capacidade produtiva superior a 100 mil pés por dia</strong> e <strong className="text-primary">funcionamento contínuo 24 horas</strong>, 
              garantimos <span className="underline decoration-accent decoration-2">agilidade</span>, <span className="underline decoration-accent decoration-2">regularidade</span> e 
              alto padrão em cada peça produzida. Nosso modelo industrial robusto nos permite atender desde pequenos marceneiros até grandes 
              indústrias moveleiras e parceiros de e-commerce que exigem confiabilidade logística e consistência no fornecimento.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Trabalhamos com processos sustentáveis, matérias-primas de qualidade e equipamentos de injeção avançados, 
              assegurando resistência, estética e durabilidade. Nossa equipe atua com atendimento personalizado e foco absoluto 
              na solução das demandas de cada cliente, fortalecendo relações de longo prazo baseadas em confiança e resultados concretos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Na <strong className="text-primary">GLOBAL PLASTIC</strong>, <span className="font-bold text-accent">inovação não é apenas um discurso</span>. 
              É o que move nossa produção, orienta nossas parcerias estratégicas e nos posiciona como uma das indústrias mais preparadas 
              para acompanhar a evolução do mercado moveleiro no Brasil. <strong>Quer eficiência, escala e qualidade? Estamos prontos para entregar.</strong>
            </p>
          </div>

          <div className="relative">
            <img
              src={factoryImg}
              alt="Fábrica Global Plastic"
              className="rounded-lg shadow-2xl w-full h-auto"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
