import Navbar from "./components/Navbar";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProgramsSection from "./sections/ProgramsSection";
import PlansSection from "./sections/PlansSection";
import GallerySection from "./sections/GallerySection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <div className="bg-zinc-950 text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <PlansSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
