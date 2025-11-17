import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import ParallaxSection from "@/components/ParallaxSection";
import Advantages from "@/components/Advantages";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ParallaxSection />
      <Advantages />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
