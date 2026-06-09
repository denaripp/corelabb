import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";

export function Hero() {
  const WA_LINK = "https://wa.me/6284568486522";

  const scrollToServices = () => {
    const el = document.getElementById("layanan");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-slate-50">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight tracking-tight mb-6">
              Laptop Lemot, Error, atau Terkena Virus? <br />
              <span className="text-primary">Corelab Siap Membantu.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Jasa install ulang, update driver, pembersihan virus, dan instalasi software untuk wilayah Cirebon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
              <a href={WA_LINK} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Konsultasi via WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary/5 text-secondary transition-all" onClick={scrollToServices}>
              Lihat Layanan
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
