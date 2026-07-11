import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { Highlights } from "@/app/components/Highlights";
import { Services } from "@/app/components/Services";
import { CalmingBanner } from "@/app/components/CalmingBanner";
import { FinalCta } from "@/app/components/FinalCta";
import { Footer } from "@/app/components/Footer";

export const LandingApp = () => {
  return (
    <div className="text-on-surface font-body-md overflow-x-hidden selection:bg-primary/20 selection:text-primary bg-surface min-h-screen">
      <Navbar />
      <Hero />
      <Highlights />
      <Services />
      <CalmingBanner />
      <FinalCta />
      <Footer />
    </div>
  );
};
