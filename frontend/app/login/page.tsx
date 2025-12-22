import Link from "next/link";
import type { ReactNode } from "react";
import { Lock } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const backendBaseUrl =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";
const googleAuthUrl = `${backendBaseUrl.replace(/\/$/, "")}/auth/google`;

export default function LoginPage() {
  return (
    <LoginLayout
      leftPanel={<HeroPanel />}
      rightPanel={<LoginForm googleAuthUrl={googleAuthUrl} />}
    />
  );
}

function LoginLayout({
  leftPanel,
  rightPanel,
}: {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-[1.618fr_1fr]">
        {/* Left hero */}
        <section className="relative isolate flex flex-col bg-muted/60">
          {/* Background visuals */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-accent/40 blur-2xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(15,23,42,0.18)_0,transparent_55%),radial-gradient(circle_at_80%_100%,rgba(15,23,42,0.22)_0,transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
          </div>

          <div className="relative flex h-full flex-col justify-between px-8 py-10 sm:px-12 lg:px-16">
            {leftPanel}
          </div>
        </section>

        {/* Right auth panel */}
        <section className="flex items-center justify-center bg-background px-4 py-10 sm:px-8 lg:px-12">
          {rightPanel}
        </section>
      </div>
    </main>
  );
}

function HeroPanel() {
  return (
    <div className="flex h-full flex-col justify-between gap-10">
      <div className="space-y-8 pt-2">
        {/* Logo / badge */}

        {/* Main hero text */}
        <div className="space-y-5">
          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Learning{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Space
            </span>
          </h1>
          <p className="max-w-xl text-sm text-muted-foreground/90 sm:text-base">
            Một không gian tối giản, hiện đại để lưu trữ, khám phá và đồng bộ
            tài liệu học tập của bạn — ở bất cứ đâu.
          </p>
        </div>
      </div>

      {/* Bottom subtle stats strip */}
      <div className="mt-6 flex flex-wrap gap-3 rounded-2xl border border-border/60 bg-background/70 p-4 text-xs text-muted-foreground/80 backdrop-blur">
        <div className="flex flex-1 min-w-[120px] flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
            Focus
          </span>
          <span className="font-medium text-foreground">
            Không gian học tập gọn, sạch như X
          </span>
        </div>
        <Separator
          orientation="vertical"
          className="hidden h-10 bg-border sm:block"
        />
        <div className="flex flex-1 min-w-[120px] flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
            Sync
          </span>
          <span className="font-medium text-foreground">
            Đồng bộ tài liệu &amp; bộ lọc cá nhân trên mọi thiết bị
          </span>
        </div>
      </div>
    </div>
  );
}

function LoginForm({ googleAuthUrl }: { googleAuthUrl: string }) {
  return (
    <Card className="w-full max-w-md border-border/80 bg-card/95 shadow-xl backdrop-blur">
      <CardHeader className="space-y-3">
        <CardTitle className="text-2xl tracking-tight">Đăng nhập</CardTitle>
        <CardDescription>
          Chọn phương thức đăng nhập để tiếp tục vào không gian học tập của bạn.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Google login keeps original logic */}
        <GoogleLoginButton href={googleAuthUrl} />

        {/* Divider with "hoặc" fixed so it không tràn viền */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <Separator className="flex-1 bg-border" />
          <span className="shrink-0 tracking-[0.22em] uppercase text-[10px]">
            hoặc
          </span>
          <Separator className="flex-1 bg-border" />
        </div>

        {/* Facebook login (disabled placeholder) */}
        <FacebookLoginButton disabled />

        <p className="text-[11px] leading-relaxed text-muted-foreground">
          Bằng việc tiếp tục, bạn đồng ý với{" "}
          <button
            type="button"
            className="underline underline-offset-2 hover:text-[color:var(--hover-foreground)]"
          >
            Điều khoản sử dụng
          </button>{" "}
          và{" "}
          <button
            type="button"
            className="underline underline-offset-2 hover:text-[color:var(--hover-foreground)]"
          >
            Chính sách bảo mật
          </button>
          .
        </p>
      </CardContent>
    </Card>
  );
}

function GoogleLoginButton({ href }: { href: string }) {
  return (
    <Button
      asChild
      variant="outline"
      size="lg"
      className="w-full justify-center bg-background text-foreground hover:bg-[color:var(--hover-surface)] hover:text-[color:var(--hover-foreground)]"
    >
      <Link href={href} prefetch={false} aria-label="Đăng nhập với Google">
        <span className="mr-2 inline-flex size-8 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground shadow-[0_0_0_1px_var(--border)]">
          G
        </span>
        Đăng nhập với Google
      </Link>
    </Button>
  );
}

function FacebookLoginButton({ disabled }: { disabled?: boolean }) {
  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      className="w-full justify-center bg-background/80 text-foreground/90 hover:bg-[color:var(--hover-surface)] hover:text-[color:var(--hover-foreground)]"
      disabled={disabled}
      aria-disabled={disabled}
    >
      <span className="mr-2 inline-flex size-8 items-center justify-center rounded-full bg-muted text-sm font-semibold text-foreground shadow-[0_0_0_1px_var(--border)]">
        f
      </span>
      Đăng nhập với Facebook
      <span className="ml-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        soon
      </span>
    </Button>
  );
}


