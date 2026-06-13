import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const WA_LINK = "https://wa.me/6284568486522";

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-white/80 py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center md:items-start text-center md:text-left mb-8">
          <div>
            <div
              className="text-2xl font-bold text-white mb-2 cursor-pointer inline-block"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Core<span className="text-primary">lab</span>
            </div>
            <p className="text-white/60">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <button onClick={() => scrollTo("layanan")} className="hover:text-primary transition-colors">{t.footer.layanan}</button>
            <button onClick={() => scrollTo("tentang")} className="hover:text-primary transition-colors">{t.footer.tentang}</button>
            <button onClick={() => scrollTo("kontak")} className="hover:text-primary transition-colors">{t.footer.kontak}</button>
          </div>

          <div className="flex justify-center md:justify-end">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>{t.footer.copy}</p>
        </div>
      </div>
    </footer>
  );
}
