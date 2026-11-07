"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowRightLeft,
  Bell,
  Check,
  ChevronDown,
  Coffee,
  Cog,
  HardHat,
  LayoutDashboard,
  Menu,
  PiggyBank,
  Sheet,
  Smartphone,
  Sparkles,
  Wrench,
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
    icon: Coffee,
    title: "Kawa i konkrety.",
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
        <a href="#hero" className="flex items-center gap-2.5 font-bold tracking-tight" onClick={close}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-slate-900 shadow-sm">
            <Wrench className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>
            Omikron-<span className="text-amber-400">Software</span>
          </span>
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
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; contact?: string; problem?: string }>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const problem = String(data.get("problem") ?? "").trim();
    const nextErrors: { name?: string; contact?: string; problem?: string } = {};

    if (!name) nextErrors.name = "Podaj imię lub nazwę firmy.";
    if (!contact) nextErrors.contact = "Podaj telefon lub e-mail.";
    if (!problem) nextErrors.problem = "Wybierz, z czym masz problem.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSent(true);
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

        <button type="submit" className={`${primaryBtn} w-full sm:w-auto`}>
          Wyślij zapytanie
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
        <p className="font-semibold text-white">
          Omikron-<span className="text-amber-400">Software</span>
        </p>
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
