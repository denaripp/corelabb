import { motion } from "framer-motion";
import { Clock, Home, MonitorSmartphone, DollarSign, Award } from "lucide-react";

export function Advantages() {
  const points = [
    {
      title: "Respon Cepat",
      desc: "Kami merespons pertanyaan Anda dengan cepat",
      icon: Clock,
    },
    {
      title: "Home Service",
      desc: "Bisa datang langsung ke lokasi Anda",
      icon: Home,
    },
    {
      title: "Remote Service",
      desc: "Layanan jarak jauh tanpa perlu keluar rumah",
      icon: MonitorSmartphone,
    },
    {
      title: "Harga Transparan",
      desc: "Harga diberikan setelah konsultasi dan pengecekan",
      icon: DollarSign,
    },
    {
      title: "Pengerjaan Profesional",
      desc: "Dikerjakan dengan teliti dan bertanggung jawab",
      icon: Award,
    },
  ];

  return (
    <section id="keunggulan" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Mengapa Memilih Corelab?</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                  <point.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-secondary mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
