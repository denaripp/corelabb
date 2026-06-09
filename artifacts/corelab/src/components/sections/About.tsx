import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Zap, MonitorSmartphone } from "lucide-react";

export function About() {
  const features = [
    { text: "Home Service", icon: MapPin },
    { text: "Remote Service", icon: MonitorSmartphone },
    { text: "Cirebon", icon: MapPin },
    { text: "Respon Cepat", icon: Zap },
  ];

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
            <h2 className="text-3xl font-bold text-secondary mb-6">Tentang Corelab</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Corelab adalah jasa service laptop dan komputer berbasis di Cirebon yang fokus pada masalah software. Kami melayani home service (datang ke rumah Anda) dan remote service (jarak jauh melalui internet). Area layanan: Cirebon.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm"
              >
                <feature.icon className="h-8 w-8 text-primary mb-3" />
                <span className="font-semibold text-secondary text-center">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
