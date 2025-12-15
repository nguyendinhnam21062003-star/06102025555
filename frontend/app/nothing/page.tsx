'use client';

import {
  type CSSProperties,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Anton, Manrope } from "next/font/google";

import {
  BookOpen,
  Eye,
  GraduationCap,
  Github,
  Linkedin,
  Instagram,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

type CssVars = Record<`--${string}`, string>;

const sidebarLayoutStyles: CSSProperties & CssVars = {
  "--sidebar-width": "calc(var(--spacing) * 72)",
  "--header-height": "calc(var(--spacing) * 12)",
};

const heroColors: CSSProperties & CssVars = {
  "--hero-bg": "var(--background)",
  "--hero-surface": "var(--background)",
  "--hero-border": "var(--border)",
  "--hero-foreground": "var(--foreground)",
  "--hero-muted": "var(--muted-foreground)",
  "--hero-glow-1": "var(--primary)",
  "--hero-glow-2": "var(--accent)",
  "--hero-glow-3": "var(--secondary)",
  "--hero-grid":
    "color-mix(in oklab, var(--muted-foreground) 25%, transparent)",
  "--page-padding": "clamp(16px, 4vw, 32px)",
};

const globeAccent = "#dcb158";

const mockTutor = {
  name: "Ethan Ngỗng",
  title: "Computer Science Tutor | VLU",
  email: "tutor@example.com",
  phone: "+84 912 345 678",
  location: "Ho Chi Minh City",
  bio: "Short intro about t backend. Short intro about the tutor. Replace with data from backend.Short intro about the tutor. Replace with data from backend.",
  skills: ["Algorithms", "Data Science", "AI"],
};

const stats = [
  { label: "Profile views", value: "1,289", hint: "30 days", icon: Eye },
  { label: "Documents", value: "24", hint: "Published", icon: BookOpen },
  { label: "Courses", value: "6", hint: "Active", icon: GraduationCap },
  { label: "Services", value: "4", hint: "Available", icon: GraduationCap },
];

const socialLinks = [
  { label: "GitHub", icon: Github, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
];

const showcaseItems = [
  {
    title: "SAINT ANTA-NIEN",
    subtitle: "Switzerland Alps",
    description:
      "Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet.",
    img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "NAGANO PREFECTURE",
    subtitle: "Japan Alps",
    description:
      "Discover the snow monkeys of Jigokudani Monkey Park. A winter wonderland with hot springs and alpine air.",
    img: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "MARRAKECH MERZOUGA",
    subtitle: "Sahara Desert - Morocco",
    description:
      "Experience the golden dunes of the Sahara. Ride camels into the sunset and sleep under a blanket of stars.",
    img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "YOSEMITE NATIONAL PARK",
    subtitle: "Sierra Nevada - USA",
    description:
      "Majestic valleys, grand meadows, and ancient giant sequoias. Classic California wilderness at scale.",
    img: "https://images.unsplash.com/photo-1482938289607-e9573fc25abb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "LOS LANCES BEACH",
    subtitle: "Tarifa - Spain",
    description:
      "White sands stretch for miles meeting the crystal blue waters of the Atlantic Ocean.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
  },
  {
    title: "GOREME VALLEY",
    subtitle: "Cappadocia - Turkey",
    description:
      "Sunrise skies filled with hot air balloons above fairy chimneys. A dreamlike landscape carved by time.",
    img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2070&auto=format&fit=crop",
  },
];

const mockDocuments = [
  {
    id: 1,
    user_id: 1,
    title: "Linear Algebra Notes",
    numeric_score: 4.8,
    grade_band: "Year 2",
    instructor_name: "Tutor Name",
    document_type: "PDF",
    access_type: "Free",
    price: 0,
    suitable_school: "VLU",
    short_description: "Condensed notes for midterms.",
    resource_type: "document",
    resource_url: "#",
    embed_allowed: true,
    mime_type: "application/pdf",
    storage_provider: "local",
    file_size: 1258291,
    created_at: "2024-10-01",
    updated_at: "2024-10-10",
    document_subjects: ["Math"],
    document_fields: ["Linear Algebra"],
  },
  {
    id: 2,
    user_id: 1,
    title: "Intro to AI Slide Deck",
    numeric_score: 4.6,
    grade_band: "Year 3",
    instructor_name: "Tutor Name",
    document_type: "Slides",
    access_type: "Paid",
    price: 15,
    suitable_school: "VLU",
    short_description: "Lecture slides with examples.",
    resource_type: "document",
    resource_url: "#",
    embed_allowed: true,
    mime_type: "application/pdf",
    storage_provider: "local",
    file_size: 2097152,
    created_at: "2024-09-12",
    updated_at: "2024-09-20",
    document_subjects: ["AI"],
    document_fields: ["Machine Learning"],
  },
];

function GlobeShowcase({ slides }: { slides: typeof showcaseItems }) {
  const [order, setOrder] = useState<number[]>(() =>
    slides.map((_, index) => index),
  );
  const [showLoader, setShowLoader] = useState(true);
  const activeIndex = order[1] ?? order[0] ?? 0;
  const currentSlide = slides[activeIndex];

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = useCallback((steps = 1) => {
    setOrder((previous) => {
      if (previous.length <= 1) return previous;
      const normalizedSteps =
        ((steps % previous.length) + previous.length) % previous.length;
      return previous
        .slice(normalizedSteps)
        .concat(previous.slice(0, normalizedSteps));
    });
  }, []);

  const handlePrev = useCallback(() => {
    setOrder((previous) => {
      if (previous.length <= 1) return previous;
      return previous.slice(-1).concat(previous.slice(0, -1));
    });
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleNext(1);
      if (event.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleNext, handlePrev]);

  if (!slides.length) return null;

  return (
    <div className="ge-shell lg:col-span-2">
      <div className={`ge-loader ${showLoader ? "visible" : "hidden"}`}>
        <h1>LOADING...</h1>
      </div>

      <div className="ge-stage">
        <div className="ge-slide" id="ge-slide">
          {order.map((slideIndex, position) => {
            const slide = slides[slideIndex];
            const isCard = position >= 2;
            const jumpSteps = position - 1;

            return (
              <button
                key={slideIndex}
                type="button"
                className="ge-item"
                style={{ backgroundImage: `url(${slide.img})` }}
                onClick={isCard ? () => handleNext(jumpSteps) : undefined}
                disabled={!isCard}
                aria-label={
                  isCard ? `Go to ${slide.title}` : `${slide.title} background`
                }
              >
                {isCard ? (
                  <div className="ge-card-info">
                    <div className="ge-card-sub">{slide.subtitle}</div>
                    <div className="ge-card-title">{slide.title}</div>
                  </div>
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="ge-controls">
          <button className="ge-control-btn" onClick={handlePrev} type="button">
            <ChevronLeft className="ge-control-icon" />
          </button>
          <button
            className="ge-control-btn"
            onClick={() => handleNext(1)}
            type="button"
          >
            <ChevronRight className="ge-control-icon" />
          </button>
        </div>
      </div>

      <div className="ge-overlay" />

      <div className="ge-main">
        <div key={activeIndex} className="ge-content-left">
          <span className="ge-location ge-anim ge-anim-1">
            {currentSlide.subtitle}
          </span>
          <h2 className="ge-title ge-anim ge-anim-2">{currentSlide.title}</h2>
          <p className="ge-description ge-anim ge-anim-3">
            {currentSlide.description}
          </p>
          <button className="ge-btn ge-anim ge-anim-4" type="button">
            Discover Location <ArrowRight className="ge-inline-icon" />
          </button>
        </div>

        <div aria-hidden="true" />
      </div>

      <style jsx>{`
        .ge-shell {
          position: relative;
          width: 100%;
          min-height: 86vh;
          overflow: hidden;
          background: #111;
          color: #fff;
          border-radius: 1.4rem;
          isolation: isolate;
        }

        .ge-loader {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #111;
          z-index: 30;
          transition: opacity 0.8s ease, visibility 0.8s ease;
        }

        .ge-loader.hidden {
          opacity: 0;
          visibility: hidden;
        }

        .ge-loader h1 {
          font-family: var(--font-anton), sans-serif;
          letter-spacing: 0.35em;
          font-size: clamp(1.5rem, 4vw, 2.4rem);
        }

        .ge-shell {
          --ge-base-bottom: clamp(3rem, 8vh, 4.5rem);
        }

        .ge-stage {
          position: absolute;
          inset: 0;
        }

        .ge-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          position: relative;
        }

        .ge-item {
          appearance: none;
          border: none;
          padding: 0;
          font: inherit;
          color: inherit;
          background-color: transparent;
          text-align: left;
          position: absolute;
          bottom: var(--ge-base-bottom);
          left: 55%;
          transform: translate(0, 0);
          width: 208px;
          height: 304px;
          background-position: 50% 50%;
          background-size: cover;
          border-radius: 14px;
          box-shadow: 0 30px 50px rgba(0, 0, 0, 0.55);
          cursor: pointer;
          transition: 0.6s cubic-bezier(0.25, 1, 0.5, 1);
          overflow: hidden;
          z-index: 4;
          will-change: left, top, width, height, transform, opacity;
        }

        .ge-item[disabled] {
          cursor: default;
        }

        .ge-item:nth-child(1),
        .ge-item:nth-child(2) {
          left: 0;
          top: 0;
          bottom: auto;
          transform: translate(0, 0);
          width: 100%;
          height: 100%;
          border-radius: 0;
          border: none;
          box-shadow: none;
          cursor: default;
          z-index: 1;
        }

        .ge-item:nth-child(2) {
          z-index: 2;
        }

        .ge-item:nth-child(3) {
          left: 60%;
        }

        .ge-item:nth-child(4) {
          left: calc(60% + 230px);
        }

        .ge-item:nth-child(5) {
          left: calc(60% + 460px);
        }

        .ge-item:nth-child(6) {
          left: calc(60% + 690px);
        }

        .ge-item:nth-child(n + 7) {
          left: calc(60% + 920px);
          opacity: 0;
          pointer-events: none;
        }

        .ge-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.3) 50%,
            rgba(0, 0, 0, 0) 100%
          );
          z-index: 3;
          pointer-events: none;
        }

        .ge-main {
          position: relative;
          z-index: 5;
          display: grid;
          grid-template-columns: 45% 55%;
          align-items: center;
          min-height: 86vh;
          padding: 0 clamp(1.75rem, 5vw, 4rem);
          padding-bottom: clamp(3.5rem, 6vh, 5rem);
          gap: clamp(1.5rem, 4vw, 3rem);
          pointer-events: none;
        }

        .ge-content-left {
          position: relative;
          padding-right: clamp(1rem, 4vw, 2rem);
          font-family: var(--font-manrope), "Manrope", sans-serif;
          pointer-events: auto;
        }

        .ge-location {
          color: #e0e0e0;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          font-size: 0.9rem;
          display: block;
          margin-bottom: 1.1rem;
        }

        .ge-title {
          font-family: var(--font-anton), "Anton", sans-serif;
          font-size: clamp(3.6rem, 8vw, 6.8rem);
          line-height: 0.9;
          text-transform: uppercase;
          margin-bottom: 1.4rem;
          text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.35);
        }

        .ge-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #d6d6d6;
          margin-bottom: 2.6rem;
          max-width: 420px;
        }

        .ge-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .ge-btn:hover {
          background: ${globeAccent};
          border-color: ${globeAccent};
          color: #111;
        }

        .ge-inline-icon {
          width: 16px;
          height: 16px;
        }

        .ge-controls {
          position: absolute;
          bottom: var(--ge-base-bottom);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 20px;
          z-index: 20;
        }

        .ge-control-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.35);
          background: transparent;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .ge-control-btn:hover {
          background: ${globeAccent};
          border-color: ${globeAccent};
          color: #111;
        }

        .ge-control-icon {
          width: 18px;
          height: 18px;
        }

        .ge-card-info {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 20px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
        }

        .ge-card-sub {
          font-size: 0.7rem;
          text-transform: uppercase;
          color: ${globeAccent};
          margin-bottom: 6px;
          letter-spacing: 0.15em;
        }

        .ge-card-title {
          font-family: var(--font-anton), "Anton", sans-serif;
          font-size: 1.5rem;
          text-transform: uppercase;
          line-height: 1;
        }


        .ge-anim {
          opacity: 0;
          animation: geShowContent 1s ease-in-out forwards;
        }

        .ge-anim-1 {
          animation-delay: 0s;
        }

        .ge-anim-2 {
          animation-delay: 0.15s;
        }

        .ge-anim-3 {
          animation-delay: 0.3s;
        }

        .ge-anim-4 {
          animation-delay: 0.6s;
        }

        @keyframes geShowContent {
          from {
            opacity: 0;
            transform: translateY(100px);
            filter: blur(33px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @media (max-width: 1024px) {
          .ge-main {
            grid-template-columns: 1fr;
            padding: 2rem;
          }

          .ge-item:nth-child(n + 3) {
            display: none;
          }

          .ge-content-left {
            padding-right: 0;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .ge-controls {
            bottom: 2rem;
          }

          .ge-description {
            max-width: 100%;
          }

          .ge-progress {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .ge-title {
            font-size: clamp(2.8rem, 10vw, 3.6rem);
          }
        }
      `}</style>
    </div>
  );
}

export default function Page() {
  return (
    <SidebarProvider style={sidebarLayoutStyles}>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <div className={`${anton.variable} ${manrope.variable}`}>
          <SiteHeader />

          <div
            style={heroColors}
            className="relative flex flex-1 flex-col gap-8 bg-[color:var(--hero-bg)] px-[var(--page-padding)] py-6"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--hero-grid)_1px,transparent_1px),linear-gradient(90deg,var(--hero-grid)_1px,transparent_1px)] bg-[size:60px_60px] bg-[position:var(--page-padding)_0]" />

            <section className="relative z-10 grid gap-10 px-6 py-8 text-[color:var(--hero-foreground)] lg:grid-cols-[minmax(0,1.2fr)_auto] lg:items-center lg:px-12 lg:py-12">
            <div className="flex flex-col gap-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--hero-muted)]">
                  About Me
                </p>
                <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                  <span className="block text-[color:var(--hero-foreground)]">
                    Xin chào, tôi là
                  </span>
                  <span className="block bg-gradient-to-r from-[color:var(--primary)] via-[color:var(--accent)] to-[color:var(--secondary)] bg-clip-text text-transparent">
                    {mockTutor.name}
                  </span>
                </h1>
                <p className="text-lg text-[color:var(--hero-muted)]">
                  {mockTutor.title}
                </p>
              </div>

              <p className="max-w-3xl text-base leading-relaxed text-[color:var(--hero-muted)]">
                {mockTutor.bio}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--hero-muted)]">
                <span className="rounded-full border border-[color:var(--hero-border)] bg-[color:var(--hero-surface)]/80 px-3 py-1">
                  {mockTutor.email}
                </span>
                <span className="rounded-full border border-[color:var(--hero-border)] bg-[color:var(--hero-surface)]/80 px-3 py-1">
                  {mockTutor.phone}
                </span>
                <span className="rounded-full border border-[color:var(--hero-border)] bg-[color:var(--hero-surface)]/80 px-3 py-1 font-semibold text-[color:var(--hero-foreground)]">
                  {mockTutor.location}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="rounded-xl bg-[color:var(--primary)] px-4 py-2.5 text-sm font-semibold text-[color:var(--background)] shadow-lg shadow-[color-mix(in_oklab,var(--primary)_35%,transparent)] transition hover:shadow-[color-mix(in_oklab,var(--primary)_45%,transparent)]">
                  Download CV
                </button>
                <button className="rounded-xl border border-[color:var(--hero-border)] px-4 py-2.5 text-sm font-semibold text-[color:var(--hero-foreground)] transition hover:border-[color:var(--primary)] hover:text-[color:var(--foreground)]">
                  View Projects
                </button>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {mockTutor.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="border border-[color:var(--hero-border)] bg-[color:var(--hero-surface)]/90 px-3 py-1 text-xs text-[color:var(--hero-foreground)]"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-center gap-5">
              <div className="relative h-[240px] w-[240px] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px]">
                <Avatar className="relative h-full w-full rounded-full bg-transparent text-[color:var(--hero-foreground)] shadow-none">
                  <AvatarImage
                    src="/ethan"
                    alt={`${mockTutor.name} avatar`}
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl font-semibold">
                    {mockTutor.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center justify-center gap-3">
                {socialLinks.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group rounded-2xl border border-[color:var(--hero-border)] bg-[color:var(--hero-surface)]/70 p-2 text-[color:var(--hero-foreground)] transition hover:border-[color:var(--primary)] hover:text-[color:var(--primary)]"
                  >
                    <Icon className="size-5" strokeWidth={1.6} />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2 lg:gap-7">
              {stats.map(({ label, value, hint, icon: Icon }) => (
                <div
                  key={label}
                  className="group relative overflow-hidden rounded-2xl border border-[color:var(--border)]/60 bg-[color:var(--background)]/70 px-5 py-4 backdrop-blur"
                >
                  <div className="flex items-center justify-between text-sm text-muted-foreground/80">
                    <span>{label}</span>
                    <Icon className="size-5 text-foreground/80" />
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-foreground">
                      {value}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/80">
                      {hint}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <GlobeShowcase slides={showcaseItems} />
          </section>
        </div>
      </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
