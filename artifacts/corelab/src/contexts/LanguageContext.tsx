import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "id" | "en";

const translations = {
  id: {
    nav: {
      tentang: "Tentang",
      layanan: "Layanan",
      keunggulan: "Keunggulan",
      faq: "FAQ",
      hubungi: "Hubungi Kami",
    },
    hero: {
      headline1: "Laptop Lemot, Error, atau Terkena Virus?",
      headline2: "Corelab Siap Membantu.",
      sub: "Jasa install ulang, update driver, pembersihan virus, dan instalasi software untuk wilayah Cirebon.",
      cta1: "Konsultasi via WhatsApp",
      cta2: "Lihat Layanan",
    },
    about: {
      title: "Tentang Corelab",
      desc: "Corelab adalah jasa service laptop dan komputer berbasis di Cirebon yang fokus pada masalah software. Kami melayani home service (datang ke rumah Anda) dan remote service (jarak jauh melalui internet). Area layanan: Cirebon.",
      features: ["Home Service", "Remote Service", "Cirebon", "Respon Cepat"],
    },
    services: {
      title: "Layanan Kami",
      cta: "Hubungi Kami untuk Konsultasi Gratis",
      items: [
        { title: "Install Ulang Windows", desc: "Solusi ampuh untuk laptop lemot atau bermasalah berat." },
        { title: "Instalasi Software", desc: "Office, Adobe, dan software lainnya siap diinstall." },
        { title: "Update & Install Driver", desc: "Pastikan hardware Anda berjalan optimal." },
        { title: "Pembersihan Virus/Malware", desc: "Hapus virus dan lindungi data Anda." },
        { title: "Upgrade Sistem Operasi", desc: "Upgrade ke Windows versi terbaru dengan aman." },
      ],
    },
    advantages: {
      title: "Mengapa Memilih Corelab?",
      items: [
        { title: "Respon Cepat", desc: "Kami merespons pertanyaan Anda dengan cepat" },
        { title: "Home Service", desc: "Bisa datang langsung ke lokasi Anda" },
        { title: "Remote Service", desc: "Layanan jarak jauh tanpa perlu keluar rumah" },
        { title: "Harga Transparan", desc: "Harga diberikan setelah konsultasi dan pengecekan" },
        { title: "Pengerjaan Profesional", desc: "Dikerjakan dengan teliti dan bertanggung jawab" },
      ],
    },
    howItWorks: {
      title: "Cara Kerja Kami",
      steps: [
        "Hubungi via WhatsApp",
        "Jelaskan masalah Anda",
        "Analisis kebutuhan",
        "Pengerjaan service",
        "Selesai & puas",
      ],
    },
    testimonials: {
      title: "Apa Kata Pelanggan Kami",
      items: [
        { name: "Budi Santoso", text: "Laptop saya yang sudah lemot banget sekarang jadi cepat lagi setelah di-install ulang sama Corelab. Pelayanannya ramah dan cepat!" },
        { name: "Siti Rahayu", text: "Virusnya bersih, data aman. Petugas datang ke rumah tepat waktu. Sangat direkomendasikan untuk warga Cirebon!" },
        { name: "Ahmad Fauzi", text: "Remote service-nya keren banget, masalah bisa diselesaikan tanpa keluar rumah. Harganya juga transparan, tidak ada biaya tersembunyi." },
      ],
    },
    faq: {
      title: "Pertanyaan yang Sering Ditanyakan",
      items: [
        { q: "Apakah bisa datang ke rumah?", a: "Ya, kami menyediakan layanan home service di wilayah Cirebon. Kami akan datang ke lokasi Anda sesuai jadwal yang disepakati." },
        { q: "Apakah bisa service jarak jauh?", a: "Ya, kami menyediakan layanan remote service menggunakan aplikasi remote desktop. Masalah bisa diselesaikan tanpa Anda keluar rumah." },
        { q: "Berapa biaya servicenya?", a: "Biaya service diberikan setelah konsultasi dan pengecekan kebutuhan. Tidak ada biaya tersembunyi — harga kami transparan." },
        { q: "Berapa lama proses service?", a: "Tergantung jenis masalah. Install ulang Windows biasanya 1-2 jam, sedangkan masalah lain bisa lebih cepat." },
        { q: "Apakah data saya aman?", a: "Ya, kami selalu mengutamakan keamanan data pelanggan. Backup data akan dilakukan sebelum proses service dimulai jika diperlukan." },
      ],
    },
    contact: {
      title: "Hubungi Kami",
      wa: "WhatsApp",
      waNumber: "0845-6848-6522",
      waBtn: "Chat Sekarang di WhatsApp",
      hours: "Jam Operasional",
      hoursVal: "Senin–Sabtu\n10.00–18.00 WIB",
      address: "Alamat",
      addressVal: "Desa Cengkareng,\nJl. Panggonan Tujuh Blok Asem RT 01 RW 01,\nCirebon",
    },
    footer: {
      tagline: "Solusi IT Terpercaya di Cirebon",
      layanan: "Layanan",
      tentang: "Tentang",
      kontak: "Kontak",
      copy: "© 2025 Corelab. All rights reserved.",
    },
  },
  en: {
    nav: {
      tentang: "About",
      layanan: "Services",
      keunggulan: "Why Us",
      faq: "FAQ",
      hubungi: "Contact Us",
    },
    hero: {
      headline1: "Slow Laptop, Errors, or Infected by Viruses?",
      headline2: "Corelab Is Here to Help.",
      sub: "Windows reinstall, driver updates, virus removal, and software installation services for the Cirebon area.",
      cta1: "Consult via WhatsApp",
      cta2: "View Services",
    },
    about: {
      title: "About Corelab",
      desc: "Corelab is a laptop and computer repair service based in Cirebon focused on software issues. We offer home service (we come to you) and remote service (via the internet). Service area: Cirebon.",
      features: ["Home Service", "Remote Service", "Cirebon", "Fast Response"],
    },
    services: {
      title: "Our Services",
      cta: "Contact Us for a Free Consultation",
      items: [
        { title: "Windows Reinstall", desc: "The ultimate fix for slow or heavily damaged laptops." },
        { title: "Software Installation", desc: "Office, Adobe, and other software ready to install." },
        { title: "Driver Update & Install", desc: "Ensure your hardware runs at its best." },
        { title: "Virus / Malware Removal", desc: "Remove viruses and protect your data." },
        { title: "OS Upgrade", desc: "Safely upgrade to the latest version of Windows." },
      ],
    },
    advantages: {
      title: "Why Choose Corelab?",
      items: [
        { title: "Fast Response", desc: "We respond to your questions quickly" },
        { title: "Home Service", desc: "We can come directly to your location" },
        { title: "Remote Service", desc: "Remote assistance without leaving home" },
        { title: "Transparent Pricing", desc: "Pricing provided after consultation and assessment" },
        { title: "Professional Work", desc: "Done carefully and responsibly" },
      ],
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        "Contact via WhatsApp",
        "Describe your problem",
        "Needs assessment",
        "Service in progress",
        "Done & satisfied",
      ],
    },
    testimonials: {
      title: "What Our Customers Say",
      items: [
        { name: "Budi Santoso", text: "My super slow laptop is now fast again after Corelab reinstalled Windows. The service was friendly and quick!" },
        { name: "Siti Rahayu", text: "Virus is gone, data is safe. The technician arrived at my home on time. Highly recommended for Cirebon residents!" },
        { name: "Ahmad Fauzi", text: "The remote service is amazing — my problem was solved without leaving home. Pricing is transparent, no hidden fees." },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "Can you come to my home?", a: "Yes, we provide home service in the Cirebon area. We will come to your location according to an agreed schedule." },
        { q: "Can you service remotely?", a: "Yes, we provide remote service using remote desktop software. Issues can be resolved without you leaving home." },
        { q: "How much does the service cost?", a: "Pricing is provided after consultation and assessment. No hidden fees — our pricing is transparent." },
        { q: "How long does the service take?", a: "It depends on the issue. A Windows reinstall usually takes 1–2 hours; other issues may be faster." },
        { q: "Is my data safe?", a: "Yes, we always prioritize the security of customer data. A backup will be made before the service begins if needed." },
      ],
    },
    contact: {
      title: "Contact Us",
      wa: "WhatsApp",
      waNumber: "0845-6848-6522",
      waBtn: "Chat Now on WhatsApp",
      hours: "Operating Hours",
      hoursVal: "Monday–Saturday\n10:00 AM–6:00 PM WIB",
      address: "Address",
      addressVal: "Desa Cengkareng,\nJl. Panggonan Tujuh Blok Asem RT 01 RW 01,\nCirebon",
    },
    footer: {
      tagline: "Trusted IT Solutions in Cirebon",
      layanan: "Services",
      tentang: "About",
      kontak: "Contact",
      copy: "© 2025 Corelab. All rights reserved.",
    },
  },
};

type Translations = typeof translations.id;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
