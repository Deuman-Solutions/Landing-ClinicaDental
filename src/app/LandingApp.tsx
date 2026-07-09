import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { Highlights } from "@/app/components/Highlights";
import { Services } from "@/app/components/Services";
import { CalmingBanner } from "@/app/components/CalmingBanner";
import { FinalCta } from "@/app/components/FinalCta";
import { Footer } from "@/app/components/Footer";

export const LandingApp = () => {
  return (
    <div className="text-on-surface font-body-md overflow-x-hidden selection:bg-primary/20 selection:text-primary bg-gradient-to-b from-surface to-white min-h-screen relative">
      {/* Elementos decorativos de fondo */}
      <div className="blob w-[600px] h-[600px] -top-[300px] -right-[300px]" />
      <div className="blob w-[400px] h-[400px] top-[20%] -left-[200px]" />

      <Navbar />
      <Hero />
      <Highlights />
      <Services />
      <CalmingBanner />
      <FinalCta />
      <Footer />
    </div>
  );
}
