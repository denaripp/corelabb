import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Advantages } from "@/components/sections/Advantages";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Landing() {
  return (
    <main className="min-h-screen bg-background w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Advantages />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
