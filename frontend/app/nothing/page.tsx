import type { CSSProperties } from "react";

import {
  BookOpen,
  Eye,
  GraduationCap,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

import { AppSidebar } from "@/components/app-sidebar";
import { DataTable } from "@/components/data-table";
import { SiteHeader } from "@/components/site-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const sidebarLayoutStyles: CSSProperties = {
  "--sidebar-width": "calc(var(--spacing) * 72)",
  "--header-height": "calc(var(--spacing) * 12)",
};

const heroColors: CSSProperties = {
  "--hero-bg": "var(--background)",
  "--hero-surface": "var(--background)",
  "--hero-border": "var(--border)",
  "--hero-foreground": "var(--foreground)",
  "--hero-muted": "var(--muted-foreground)",
  "--hero-glow-1": "var(--primary)",
  "--hero-glow-2": "var(--accent)",
  "--hero-glow-3": "var(--secondary)",
  "--hero-grid": "color-mix(in oklab, var(--muted-foreground) 25%, transparent)",
  "--page-padding": "clamp(16px, 4vw, 32px)",
};

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

export default function Page() {
  return (
    <SidebarProvider style={sidebarLayoutStyles}>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />

        <div
          style={heroColors}
          className="relative flex flex-1 flex-col gap-8 bg-[color:var(--hero-bg)] px-[var(--page-padding)] py-6"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--hero-grid)_1px,transparent_1px),linear-gradient(90deg,var(--hero-grid)_1px,transparent_1px)] bg-[size:60px_60px] bg-[position:var(--page-padding)_0]" />

          <section className="relative z-10 px-6 py-8 text-[color:var(--hero-foreground)] lg:px-12 lg:py-12">
            <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_auto]">
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

                <blockquote className="inline-block max-w-2xl self-start rounded-2xl border border-[color:var(--hero-border)] bg-gradient-to-r from-[color:var(--hero-surface)] via-[color-mix(in_oklab,var(--hero-surface)_85%,var(--primary)_15%)] to-[color-mix(in_oklab,var(--hero-surface)_80%,var(--accent)_20%)] px-4 py-3 text-sm italic text-[color:var(--hero-muted)] shadow-inner shadow-[rgba(0,0,0,0.35)]">
                  "Leveraging AI as a professional tool, not a replacement."
                </blockquote>

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
            </div>

            <div className="relative mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
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
          </section>

        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
