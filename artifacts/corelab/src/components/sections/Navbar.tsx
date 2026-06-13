import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const WA_LINK = "https://wa.me/6284568486522";

  const scrollTo = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div
          className="text-2xl font-bold text-secondary cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Core<span className="text-primary">lab</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("tentang")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">{t.nav.tentang}</button>
          <button onClick={() => scrollTo("layanan")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">{t.nav.layanan}</button>
          <button onClick={() => scrollTo("keunggulan")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">{t.nav.keunggulan}</button>
          <button onClick={() => scrollTo("faq")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">{t.nav.faq}</button>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "id" ? "en" : "id")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 text-sm font-medium text-secondary hover:border-primary hover:text-primary transition-colors"
            aria-label="Switch language"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "id" ? "EN" : "ID"}
          </button>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-medium shadow-sm">
            <a href={WA_LINK} target="_blank" rel="noreferrer">
              {t.nav.hubungi}
            </a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-b bg-white px-4 py-4 space-y-3 shadow-lg absolute top-16 left-0 w-full z-40">
          <button onClick={() => scrollTo("tentang")} className="block w-full text-left text-sm font-medium p-2 hover:bg-muted rounded-md">{t.nav.tentang}</button>
          <button onClick={() => scrollTo("layanan")} className="block w-full text-left text-sm font-medium p-2 hover:bg-muted rounded-md">{t.nav.layanan}</button>
          <button onClick={() => scrollTo("keunggulan")} className="block w-full text-left text-sm font-medium p-2 hover:bg-muted rounded-md">{t.nav.keunggulan}</button>
          <button onClick={() => scrollTo("faq")} className="block w-full text-left text-sm font-medium p-2 hover:bg-muted rounded-md">{t.nav.faq}</button>
          <div className="flex gap-2 pt-1">
            <button
              onClick={() => { setLang(lang === "id" ? "en" : "id"); setIsOpen(false); }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-slate-200 text-sm font-medium text-secondary hover:border-primary hover:text-primary transition-colors"
            >
              <Globe className="h-3.5 w-3.5" />
              {lang === "id" ? "English" : "Indonesia"}
            </button>
            <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-white">
              <a href={WA_LINK} target="_blank" rel="noreferrer">
                {t.nav.hubungi}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
