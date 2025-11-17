import parallaxBg from "@/assets/parallax-bg.jpg";
import logo from "@/assets/logo.png";

const ParallaxSection = () => {
  return (
    <section
      className="relative py-32 parallax"
      style={{
        backgroundImage: `linear-gradient(rgba(12, 33, 73, 0.85), rgba(76, 165, 216, 0.85)), url(${parallaxBg})`,
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          Alta produção, precisão milimétrica e entrega para todo o Brasil.
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Tecnologia de ponta em injeção plástica aliada ao compromisso com a sustentabilidade
        </p>
      </div>
      
      <div className="absolute bottom-8 right-8 opacity-10">
        <img src={logo} alt="Global Plastic" className="h-32 brightness-0 invert" />
      </div>
    </section>
  );
};

export default ParallaxSection;
