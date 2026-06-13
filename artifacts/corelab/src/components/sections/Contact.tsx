import { motion } from "framer-motion";
import { MessageCircle, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const WA_LINK = "https://wa.me/6284568486522";

  return (
    <section id="kontak" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{t.contact.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none shadow-lg overflow-hidden h-full">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-secondary mb-1">{t.contact.wa}</h3>
                      <p className="text-muted-foreground text-lg mb-2">{t.contact.waNumber}</p>
                      <Button asChild className="bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md">
                        <a href={WA_LINK} target="_blank" rel="noreferrer">
                          {t.contact.waBtn}
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-secondary mb-1">{t.contact.hours}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">{t.contact.hoursVal}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-secondary mb-1">{t.contact.address}</h3>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{t.contact.addressVal}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full min-h-[400px]"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126080.03946289506!2d108.43282!3d-6.7063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1f9bba99d7c5%3A0x3f5f16b38df6f7d!2sCirebon%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1000000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Cirebon"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
