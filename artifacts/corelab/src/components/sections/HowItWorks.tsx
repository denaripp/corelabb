import { motion } from "framer-motion";
import { MessageSquare, MessageSquareText, Search, Wrench, ThumbsUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [MessageSquareText, MessageSquare, Search, Wrench, ThumbsUp];

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.howItWorks.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4">
            {t.howItWorks.steps.map((step, idx) => {
              const Icon = icons[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center relative group w-full md:w-1/5"
                >
                  {idx < t.howItWorks.steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-white/20">
                      <div className="h-full bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                    </div>
                  )}
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 relative z-10 border border-white/20 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="font-medium text-white/90 px-2">{step}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
