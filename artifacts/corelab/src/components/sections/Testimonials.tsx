import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const reviews = [
    {
      name: "Budi Santoso",
      text: "Laptop saya yang sudah lemot banget sekarang jadi cepat lagi setelah di-install ulang sama Corelab. Pelayanannya ramah dan cepat!",
      rating: 5,
    },
    {
      name: "Siti Rahayu",
      text: "Virusnya bersih, data aman. Petugas datang ke rumah tepat waktu. Sangat direkomendasikan untuk warga Cirebon!",
      rating: 5,
    },
    {
      name: "Ahmad Fauzi",
      text: "Remote service-nya keren banget, masalah bisa diselesaikan tanpa keluar rumah. Harganya juga transparan, tidak ada biaya tersembunyi.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Apa Kata Pelanggan Kami</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="pt-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4 border-t pt-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">{review.name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
