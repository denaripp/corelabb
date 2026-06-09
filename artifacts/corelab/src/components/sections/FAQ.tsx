import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "Apakah bisa datang ke rumah?",
      a: "Ya, kami menyediakan layanan home service di wilayah Cirebon. Kami akan datang ke lokasi Anda sesuai jadwal yang disepakati.",
    },
    {
      q: "Apakah bisa service jarak jauh?",
      a: "Ya, kami menyediakan layanan remote service menggunakan aplikasi remote desktop. Masalah bisa diselesaikan tanpa Anda keluar rumah.",
    },
    {
      q: "Berapa biaya servicenya?",
      a: "Biaya service diberikan setelah konsultasi dan pengecekan kebutuhan. Tidak ada biaya tersembunyi — harga kami transparan.",
    },
    {
      q: "Berapa lama proses service?",
      a: "Tergantung jenis masalah. Install ulang Windows biasanya 1-2 jam, sedangkan masalah lain bisa lebih cepat.",
    },
    {
      q: "Apakah data saya aman?",
      a: "Ya, kami selalu mengutamakan keamanan data pelanggan. Backup data akan dilakukan sebelum proses service dimulai jika diperlukan.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Pertanyaan yang Sering Ditanyakan</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <AccordionItem value={`item-${idx}`} className="border-b border-slate-200 px-2 py-2">
                  <AccordionTrigger className="text-left text-lg font-medium text-secondary hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
