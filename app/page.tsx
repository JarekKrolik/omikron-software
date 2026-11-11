"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowRightLeft,
  Bell,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cog,
  HardHat,
  LayoutDashboard,
  Menu,
  PiggyBank,
  Search,
  Sheet,
  Smartphone,
  Sparkles,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400";

const ghostBtn =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const navLinks = [
  { href: "#problemy", label: "Problemy" },
  { href: "#oferta", label: "Oferta" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#o-nas", label: "O nas" },
  { href: "#wspolpraca", label: "Współpraca" },
] as const;

const problems: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Smartphone,
    title: "Ekipa w terenie, biuro w papierach.",
    text: "Chłopaki na robocie wypisują kartki, robią zdjęcia na telefonach, a biuro godzinami przepisuje to do komputera. Zrobimy apkę szytą na miarę, gdzie wszystko wpadnie od razu na swoje miejsce.",
  },
  {
    icon: Sheet,
    title: "Tonięcie w Excelach.",
    text: "Masz jeden plik od magazynu, drugi od klientów, a trzeci od wypłat i nic się ze sobą nie spina. Połączymy to w jeden, czytelny program.",
  },
  {
    icon: Cog,
    title: "Drogie i trudne gotowce.",
    text: "Próbowałeś wdrażać programy, ale miały milion opcji i nikt z nich nie korzysta. My budujemy tylko to, czego potrzebujesz. Jeden przycisk robi jedną rzecz.",
  },
];

const offers: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Smartphone,
    title: "Aplikacje dla pracowników w terenie",
    text: "żeby wystarczyły 3 kliknięcia na telefonie do zdania raportu.",
  },
  {
    icon: LayoutDashboard,
    title: "Wewnętrzne panele dla firm",
    text: "żeby szef widział wszystko na jednym ekranie.",
  },
  {
    icon: Bell,
    title: "Automatyzacja powtarzalnych zadań",
    text: "żeby program sam wysyłał przypomnienia i generował PDF-y z ofertami.",
  },
  {
    icon: Sparkles,
    title: "AI do pomocy w firmie",
    text: "żeby asystent podpowiadał, pilnował terminów i zdejmował powtarzalną robotę z ludzi.",
  },
];

const steps: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Search,
    title: "Analiza problemu - konkretne rozwiązania",
    text: "Siadamy i mówisz, co zajmuje Wam najwięcej czasu i z czym są problemy.",
  },
  {
    icon: Smartphone,
    title: "Szybki prototyp.",
    text: "W kilka dni robimy wstępny wygląd aplikacji, żebyś mógł przeklikać to na swoim telefonie.",
  },
  {
    icon: Zap,
    title: "Działanie.",
    text: "Kodujemy narzędzie szybciej i taniej niż tradycyjne agencje, wykorzystując najnowsze asystenty AI.",
  },
];

const problemOptions = [
  "Chcę zautomatyzować dokumenty",
  "Potrzebuję apki dla pracowników",
  "Chcę usprawnić procesy",
  "Chcę wdrożyć AI w firmie",
  "Inny problem",
] as const;

const fieldClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/50";

export default function HomePage() {
  return (
    <>
      <a
        href="#tresc"
        className="absolute left-4 top-0 z-[60] -translate-y-full rounded-full bg-amber-500 px-4 py-2 font-semibold text-slate-900 focus:translate-y-4"
      >
        Przejdź do treści
      </a>
      <Navbar />
      <main id="tresc">
        <Hero />
        <Problems />
        <Offer />
        <Projects />
        <About />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/92 text-white backdrop-blur-md">
      <div className={`${container} flex h-[4.5rem] items-center justify-between gap-4`}>
        <a href="#hero" className="inline-flex shrink-0 items-center" onClick={close}>
          <img src="/logo.png" alt="Omikron Software" width={420} height={131} className="h-10 w-auto sm:h-11" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Główne">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-100/80 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a href="#kontakt" className={`${primaryBtn} ml-2 px-4 py-2 text-sm`}>
            Darmowa konsultacja
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobilne"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <nav id="menu-mobilne" className="border-t border-white/10 px-5 py-4 lg:hidden" aria-label="Mobilne">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-100 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <a href="#kontakt" onClick={close} className={`${primaryBtn} mt-2`}>
              Darmowa konsultacja
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-slate-900 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(248,250,252,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,250,252,0.05)_1px,transparent_1px)] bg-[size:56px_56px]"
      />
      <div className={`${container} relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:py-28`}>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-300">Omikron-Software</p>
          <h1 className="mt-4 max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl">
            Aplikacje szyte na miarę, które ułatwiają życie w firmie.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-200 text-pretty">
            Tworzymy narzędzia na telefon i komputer, dzięki którym pozbędziesz się papierologii, ogarniesz zlecenia i
            zyskasz czas. Wdrażamy też AI do pomocy w Twojej firmie. Bez abonamentów za kombajny, których nie
            potrzebujesz.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#formularz" className={primaryBtn}>
              Pogadajmy o tym, co Cię irytuje
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#wspolpraca" className={ghostBtn}>
              Jak pracujemy
            </a>
          </div>
        </div>

        <div aria-hidden="true" className="mx-auto w-full max-w-sm">
          <div className="rounded-[2rem] border border-white/10 bg-slate-800/80 p-3 shadow-sm">
            <div className="rounded-[1.5rem] bg-slate-50 p-4 text-slate-900">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                <span>Raport z roboty</span>
                <span>3 kliknięcia</span>
              </div>
              <p className="mt-4 text-xl font-bold tracking-tight">Wymiana rozdzielni</p>
              <p className="mt-1 text-sm text-slate-500">Zdjęcie i opis od razu u szefa</p>
              <ul className="mt-5 space-y-2">
                <li className="rounded-xl bg-white px-3 py-3 text-sm shadow-sm">1. Zdjęcie z telefonu</li>
                <li className="rounded-xl bg-white px-3 py-3 text-sm shadow-sm">2. Krótki opis</li>
                <li className="rounded-xl bg-amber-500 px-3 py-3 text-sm font-semibold text-slate-900 shadow-sm">
                  3. Wyślij do biura
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section id="problemy" className="bg-[#e8edf3] py-20 sm:py-24">
      <div className={container}>
        <SectionHeading eyebrow="Problemy" title="Znasz te problemy ze swojej firmy?" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {problems.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm motion-safe:transition motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-700">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="oferta" className="bg-white py-20 sm:py-24">
      <div className={container}>
        <SectionHeading eyebrow="Oferta" title="Co możemy dla Ciebie zbudować?" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {offers.map((item, index) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-amber-400">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold tracking-[0.14em] text-amber-600">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects: {
  title: string;
  tags: string[];
  text: string;
  href?: string;
  mockup: "site" | "config" | "ai" | "archive" | "workshop";
}[] = [
  {
    title: "EDCKYDEX — strona i aplikacja",
    tags: ["Strona www", "Aplikacja", "Zamówienia zdalne"],
    text: "Witryna i aplikacja wytwórni kabur z kydexu. Klient ogląda ofertę i składa zamówienie zdalnie, dopasowane do swojego sprzętu.",
    href: "https://edckydex.pl",
    mockup: "site",
  },
  {
    title: "EDCKYDEX — konfigurator produktów",
    tags: ["Baza danych", "Automatyzacja", "Panel klienta"],
    text: "Dedykowany system dla firmy z branży customowego oporządzenia. Zastąpiliśmy ręczne przyjmowanie zamówień automatycznym konfiguratorem, spiętym bezpośrednio z bazą danych produkcyjnych.",
    href: "https://config.edckydex.pl",
    mockup: "config",
  },
  {
    title: "Aplikacja mobilna z asystentem AI",
    tags: ["Sztuczna Inteligencja", "Aplikacja Mobilna", "API"],
    text: "Pokazujemy, że aplikacja nie musi być tylko „bazą danych”. Wdrożyliśmy moduł sztucznej inteligencji, który na bieżąco analizuje wprowadzane informacje i komunikuje się z użytkownikiem, podpowiadając kolejne kroki. To technologia, która dotąd była zarezerwowana dla gigantów IT.",
    mockup: "ai",
  },
  {
    title: "KwitSejf – Mobilne archiwum dokumentów",
    tags: ["Cyfryzacja dokumentów", "AI", "Chmura"],
    text: "Koncepcja i prototyp inteligentnego systemu do cyfrowego przechowywania i kategoryzacji dokumentów z wbudowanym asystentem, pomagającym w analizie wprowadzonych danych.",
    mockup: "archive",
  },
  {
    title: "Demo: Organizer zleceń dla zakładu stolarskiego",
    tags: ["Dla pracowników", "Logistyka", "Zarządzanie czasem"],
    text: "Przykładowy system pokazujący, jak można zastąpić papierowe karty pracy cyfrowym panelem. Pracownik na hali widzi zlecenia na tablecie, a szef w biurze ma podgląd na postępy na żywo.",
    mockup: "workshop",
  },
];

function Projects() {
  const scroller = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    function update() {
      if (!el) return;
      setAtStart(el.scrollLeft <= 2);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
    }

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function scrollByCard(direction: -1 | 1) {
    const el = scroller.current;
    const card = el?.querySelector("article");
    if (!el || !card) return;
    const gap = 20;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: reduce ? "auto" : "smooth",
    });
  }

  return (
    <section id="realizacje" className="bg-[#e8edf3] py-20 sm:py-24">
      <div className={container}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Realizacje" title="Nasze realizacje i wersje Demo" />
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Poprzednie realizacje"
              disabled={atStart}
              onClick={() => scrollByCard(-1)}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Następne realizacje"
              disabled={atEnd}
              onClick={() => scrollByCard(1)}
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          tabIndex={0}
          aria-label="Nasze realizacje i wersje Demo"
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-ps-0 pb-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((item) => (
            <article
              key={item.title}
              className="flex w-[88%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm sm:w-[calc(50%-0.625rem)]"
            >
              <ProjectMockup kind={item.mockup} />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold tracking-tight text-balance text-slate-900">{item.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-800"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex text-sm font-semibold text-amber-700 underline-offset-2 hover:underline"
                  >
                    {item.href.replace("https://", "")}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectMockup({ kind }: { kind: (typeof projects)[number]["mockup"] }) {
  if (kind === "site") {
    return (
      <div className="flex gap-3 bg-black p-4 text-white" aria-hidden="true">
        <div className="min-w-0 flex-1 rounded-md border border-white/10 bg-zinc-950 p-3">
          <div className="flex gap-2 text-[9px] uppercase tracking-[0.14em] text-zinc-500">
            <span className="text-orange-500">Strona</span>
            <span>Zamów</span>
            <span>Kontakt</span>
          </div>
          <p className="mt-4 text-sm font-semibold tracking-[0.12em]">EDC KYDEX</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-zinc-400">Kabury z kydexu</p>
          <span className="mt-3 inline-flex rounded bg-orange-500 px-2 py-1 text-[10px] font-semibold text-black">
            sprawdź ofertę
          </span>
        </div>
        <div className="w-[5.5rem] shrink-0 rounded-[1.1rem] border border-orange-500/40 bg-zinc-950 p-2">
          <p className="text-center text-[8px] font-semibold uppercase tracking-[0.14em] text-orange-400">Aplikacja</p>
          <p className="mt-2 text-[10px] font-semibold leading-4">Zamów kaburę</p>
          <div className="mt-2 space-y-1 text-[9px] text-zinc-200">
            <p className="rounded border border-white/10 px-1.5 py-1">IWB</p>
            <p className="rounded border border-white/10 px-1.5 py-1">OWB</p>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "config") {
    return (
      <div className="bg-[#121212] p-3 text-white" aria-hidden="true">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[10px] font-semibold tracking-[0.16em] text-zinc-300">GENERATOR KABUR</p>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-black">
            1
          </span>
        </div>
        <div className="grid grid-cols-[1.45fr_0.7fr] gap-2">
          <div className="rounded-lg border border-white/10 p-2">
            <p className="text-[10px] font-bold uppercase tracking-wide">Co chcesz zamówić?</p>
            <div className="mt-2 grid grid-cols-3 gap-1 text-[9px] leading-tight">
              <span className="rounded border border-orange-500 px-1 py-2 text-center">Kabura</span>
              <span className="rounded border border-white/15 px-1 py-2 text-center text-zinc-300">Nóż</span>
              <span className="rounded border border-white/15 px-1 py-2 text-center text-zinc-300">Ładownica</span>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 p-2">
            <p className="text-[9px] uppercase tracking-[0.14em] text-zinc-500">Razem</p>
            <p className="mt-2 text-lg font-bold text-orange-500">100 zł</p>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "ai") {
    return (
      <div className="flex justify-center bg-[linear-gradient(160deg,#e0e7ff,#fae8ff)] px-4 py-5" aria-hidden="true">
        <div className="w-44 rounded-[1.6rem] bg-white p-2.5 shadow-md ring-1 ring-indigo-200">
          <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-indigo-200" />
          <p className="text-center text-[10px] font-semibold text-indigo-700">Asystent</p>
          <div className="mt-2 space-y-1.5">
            <p className="rounded-2xl rounded-tl-sm bg-indigo-50 px-2 py-1.5 text-[10px] leading-4 text-indigo-950">
              Które zlecenia są dziś zagrożone?
            </p>
            <p className="rounded-2xl rounded-tr-sm bg-indigo-600 px-2 py-1.5 text-[10px] leading-4 text-white">
              Dwa. Najbliższy termin: jutro, 8:00.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "archive") {
    const docs = [
      ["Faktury", "12"],
      ["Umowy", "4"],
      ["Protokoły", "AI"],
    ] as const;

    return (
      <div className="bg-[#efe4cf] p-4" aria-hidden="true">
        <div className="relative rounded-sm border border-[#d7c4a1] bg-[#fffaf2] px-3 pb-3 pt-4 shadow-sm">
          <span className="absolute -top-2 left-3 rounded-sm bg-[#9f2d2d] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#fff6ea]">
            KwitSejf
          </span>
          <ul className="space-y-1.5 border-t border-dashed border-[#e4d3b5] pt-3">
            {docs.map(([name, meta]) => (
              <li key={name} className="flex items-baseline justify-between gap-3 text-xs">
                <span className="font-medium text-[#3f3428]">{name}</span>
                <span className="font-mono text-[10px] text-[#8a5a32]">{meta}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#c4a574] p-4" aria-hidden="true">
      <div className="rounded-sm bg-[#f7f1e6] p-3 shadow-sm ring-1 ring-[#8c6a3d]/30">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6b4b2a]">Karta pracy</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="border-l-4 border-[#8c6a3d] bg-white px-2 py-2">
            <p className="text-[10px] font-bold uppercase text-[#6b4b2a]">Hala</p>
            <p className="mt-1 text-xs font-semibold text-[#2b2118]">Szafa na wymiar</p>
            <p className="mt-1 text-[10px] text-[#8c6a3d]">W toku</p>
          </div>
          <div className="border-l-4 border-[#3f6b4a] bg-white px-2 py-2">
            <p className="text-[10px] font-bold uppercase text-[#3f6b4a]">Biuro</p>
            <p className="mt-1 text-xs font-semibold text-[#2b2118]">Podgląd</p>
            <p className="mt-1 text-[10px] text-[#3f6b4a]">3 z 5 gotowe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  const facts: { icon: LucideIcon; label: string }[] = [
    { icon: HardHat, label: "Działająca spółka instalacyjna" },
    { icon: ArrowRightLeft, label: "Obieg informacji" },
    { icon: PiggyBank, label: "Optymalizacja kosztów" },
  ];

  return (
    <section id="o-nas" className="bg-[#f8fafc] py-20 sm:py-24">
      <div className={`${container} grid items-start gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]`}>
        <div>
          <SectionHeading eyebrow="O nas" title="Znamy się na biznesie. I na technologii." />
          <p className="mt-6 border-l-4 border-amber-500 pl-5 text-lg leading-8 text-slate-700">
            Omikron-Software powstało jako odpowiedź na potrzeby rynku. Jako zarząd działającej spółki instalacyjnej
            doskonale rozumiemy, jak funkcjonują przedsiębiorstwa, jak ważny jest obieg informacji i optymalizacja
            kosztów. Połączyliśmy nasze doświadczenie biznesowe z najnowszymi technologiami, by tworzyć dla firm
            dedykowane aplikacje i systemy automatyzacji. Nie jesteśmy oderwaną od rzeczywistości agencją – robimy
            oprogramowanie, które ma zarabiać i oszczędzać Twój czas.
          </p>
        </div>
        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-600">W praktyce</p>
          <ul className="mt-5 space-y-4">
            {facts.map((fact) => (
              <li key={fact.label} className="flex items-center gap-3 text-base font-medium text-slate-800">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-700">
                  <fact.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {fact.label}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="wspolpraca" className="bg-[#e8edf3] py-20 sm:py-24">
      <div className={container}>
        <SectionHeading eyebrow="Współpraca" title="Jak pracujemy" />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-lg font-bold text-slate-900 shadow-sm">
                  {index + 1}
                </span>
                <step.icon className="h-5 w-5 text-slate-500" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="bg-slate-900 py-20 text-white sm:py-24">
      <div className={`${container} grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]`}>
        <div>
          <SectionHeading light eyebrow="Kontakt" title="Rozwiążmy problem w Twojej firmie" />
          <p className="mt-6 max-w-md text-lg leading-8 text-slate-300">
            Napisz z czym się zmagasz. Odezwiemy się i powiemy, czy da się to prosto zautomatyzować.
          </p>
          <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
            Elbląg, ul. Grochowska 4B
            <br />
            <a href="tel:+48503039612" className="font-semibold text-amber-300">
              503 039 612
            </a>
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<{ name?: string; contact?: string; problem?: string }>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const problem = String(data.get("problem") ?? "").trim();
    const description = String(data.get("description") ?? "").trim();
    const nextErrors: { name?: string; contact?: string; problem?: string } = {};

    if (!name) nextErrors.name = "Podaj imię lub nazwę firmy.";
    if (!contact) nextErrors.contact = "Podaj telefon lub e-mail.";
    if (!problem) nextErrors.problem = "Wybierz, z czym masz problem.";

    setErrors(nextErrors);
    setSubmitError("");
    if (Object.keys(nextErrors).length > 0) return;

    setSending(true);
    try {
      const response = await fetch("contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, problem, description }),
      });
      if (!response.ok) {
        setSubmitError("Nie udało się wysłać wiadomości. Spróbuj jeszcze raz za chwilę.");
        return;
      }
      setSent(true);
    } catch {
      setSubmitError("Nie udało się wysłać wiadomości. Sprawdź połączenie i spróbuj ponownie.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div
        id="formularz"
        className="rounded-2xl bg-white p-8 text-slate-900 shadow-sm"
        role="status"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-slate-900">
          <Check className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-2xl font-bold tracking-tight">Dziękujemy.</h3>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Odezwiemy się i powiemy, czy da się to prosto zautomatyzować.
        </p>
        <button
          type="button"
          className={`${primaryBtn} mt-6`}
          onClick={() => {
            setSent(false);
            setErrors({});
          }}
        >
          Wyślij kolejne zapytanie
        </button>
      </div>
    );
  }

  return (
    <form
      id="formularz"
      noValidate
      onSubmit={onSubmit}
      className="rounded-2xl bg-white p-6 text-slate-900 shadow-sm sm:p-8"
    >
      <div className="grid gap-5">
        <Field label="Imię / Nazwa firmy" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="organization"
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>

        <Field label="Telefon / Email" htmlFor="contact" error={errors.contact}>
          <input
            id="contact"
            name="contact"
            type="text"
            autoComplete="on"
            className={fieldClass}
            aria-invalid={Boolean(errors.contact)}
            aria-describedby={errors.contact ? "contact-error" : undefined}
          />
        </Field>

        <Field label="Z czym masz problem?" htmlFor="problem" error={errors.problem}>
          <div className="relative">
            <select
              id="problem"
              name="problem"
              defaultValue=""
              className={`${fieldClass} appearance-none pr-10`}
              aria-invalid={Boolean(errors.problem)}
              aria-describedby={errors.problem ? "problem-error" : undefined}
            >
              <option value="" disabled>
                Wybierz z listy
              </option>
              {problemOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-slate-500"
              aria-hidden="true"
            />
          </div>
        </Field>

        <Field label="Krótki opis problemu (opcjonalnie)" htmlFor="description">
          <textarea
            id="description"
            name="description"
            rows={4}
            className={`${fieldClass} resize-y`}
          />
        </Field>

        {submitError ? (
          <p className="text-sm text-red-700" role="alert">
            {submitError}
          </p>
        ) : null}
        <button type="submit" className={`${primaryBtn} w-full sm:w-auto disabled:opacity-60`} disabled={sending}>
          {sending ? "Wysyłanie…" : "Wyślij zapytanie"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-slate-900">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="mt-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={`text-xs font-bold uppercase tracking-[0.14em] ${light ? "text-amber-300" : "text-amber-600"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl ${light ? "text-white" : "text-slate-900"}`}
      >
        {title}
      </h2>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-[#0b1220] text-slate-300">
      <div className={`${container} flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between`}>
        <div>
          <img src="/logo.png" alt="Omikron Software" width={420} height={131} className="h-10 w-auto" />
          <p className="mt-2 text-sm text-slate-400">Elbląg, ul. Grochowska 4B</p>
        </div>
        <p className="text-sm">
          Firma instalacyjna:{" "}
          <a
            href="https://www.omikronelektryk.pl"
            className="font-medium text-amber-300 underline-offset-2 hover:underline"
          >
            Omikron Elektryk
          </a>
        </p>
        <p className="text-sm text-slate-400">© 2026</p>
      </div>
    </footer>
  );
}
