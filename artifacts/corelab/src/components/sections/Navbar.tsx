import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const WA_LINK = "https://wa.me/6284568486522";

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="text-2xl font-bold text-secondary cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Core<span className="text-primary">lab</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("tentang")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Tentang</button>
          <button onClick={() => scrollTo("layanan")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Layanan</button>
          <button onClick={() => scrollTo("keunggulan")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Keunggulan</button>
          <button onClick={() => scrollTo("faq")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">FAQ</button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-medium shadow-sm">
            <a href={WA_LINK} target="_blank" rel="noreferrer">
              Hubungi Kami
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-b bg-white px-4 py-4 space-y-4 shadow-lg absolute top-16 left-0 w-full z-40">
          <div className="flex flex-col space-y-3">
            <button onClick={() => scrollTo("tentang")} className="text-left text-sm font-medium p-2 hover:bg-muted rounded-md">Tentang</button>
            <button onClick={() => scrollTo("layanan")} className="text-left text-sm font-medium p-2 hover:bg-muted rounded-md">Layanan</button>
            <button onClick={() => scrollTo("keunggulan")} className="text-left text-sm font-medium p-2 hover:bg-muted rounded-md">Keunggulan</button>
            <button onClick={() => scrollTo("faq")} className="text-left text-sm font-medium p-2 hover:bg-muted rounded-md">FAQ</button>
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white mt-2">
              <a href={WA_LINK} target="_blank" rel="noreferrer">
                Hubungi Kami
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
