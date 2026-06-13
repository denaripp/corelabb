import { motion } from "framer-motion";
import { MapPin, Zap, MonitorSmartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [MapPin, MonitorSmartphone, MapPin, Zap];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary mb-6">{t.about.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.about.desc}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
            {t.about.features.map((feature, idx) => {
              const Icon = icons[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm"
                >
                  <Icon className="h-8 w-8 text-primary mb-3" />
                  <span className="font-semibold text-secondary text-center">{feature}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
