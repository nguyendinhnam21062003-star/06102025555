import {
  AtSign,
  Briefcase,
  Building2,
  Facebook,
  Link2,
  Mail,
  MapPin,
} from "lucide-react";

const stats = [
  { label: "lượt xem", value: "156,000" },
  { label: "khóa học & dịch vụ", value: "56" },
  { label: "tài liệu", value: "145" },
  { label: "bài viết", value: "172" },
];

const menu = [
  "Tài liệu",
  "Khóa học",
  "Dịch vụ",
  "Bài viết",
  "Giới thiệu",
  "Trang Web",
];

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-[-6rem] h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-4rem] h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute inset-x-10 top-20 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-60" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-12 lg:py-16">
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Tutor profile
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Hồ sơ giảng viên
          </h1>
          <p className="max-w-3xl text-base text-muted-foreground">
            Lấy cảm hứng từ vibe tối giản của X: nền trung tính, nét cắt sắc,
            tương phản mạnh và khoảng trắng rộng để spotlight thương hiệu cá
            nhân của tutor.
          </p>
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/80 p-8 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="relative flex flex-col gap-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-1 flex-col gap-4 sm:flex-row">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/60 to-accent/60 opacity-30 blur-lg" />
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-border/70 bg-muted/60 text-2xl font-semibold text-primary shadow-lg shadow-primary/20">
                      TN
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        Trần Nam
                      </h2>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                        Top tutor
                      </span>
                    </div>
                    <p className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      Tech Lead | UniNest Labs
                    </p>
                    <p className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      Tư vấn đào tạo doanh nghiệp
                    </p>
                    <p className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      TP.HCM
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {["IT", "Finance"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border/70 bg-secondary/70 px-3 py-1 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="rounded-full border border-border/80 bg-secondary px-4 py-2 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:bg-[color:var(--hover-surface)] hover:text-[color:var(--hover-foreground)] hover:border-[color:var(--hover-surface)] hover:shadow-[0_18px_50px_-28px_rgba(0,0,0,0.45)]">
                    Theo dõi
                  </button>
                  <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:-translate-y-0.5">
                    Liên hệ
                  </button>
                </div>
              </div>

              <div className="grid gap-4 rounded-2xl border border-border/70 bg-secondary/60 p-5 shadow-inner shadow-primary/10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <AtSign className="h-4 w-4" />
                  Thông tin cá nhân
                </div>
                <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
                  <div className="space-y-1">
                    <p className="text-foreground">Thông tin liên hệ</p>
                    <div className="flex items-center gap-2">
                      <Facebook className="h-4 w-4 text-primary" />
                      <span>facebook.com/tutor.trannam</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>hello@trannam.edu.vn</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link2 className="h-4 w-4 text-primary" />
                      <span>profile.uninest.vn/tnam</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-foreground">Giới thiệu nhanh</p>
                    <p>
                      Mentor 10+ năm kinh nghiệm chuyển giao công nghệ, đào tạo
                      đội ngũ IT và tài chính số cho các startup tại Việt Nam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-[0_18px_48px_-26px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Thống kê mô tả user
                  </p>
                  <h3 className="text-xl font-semibold">Impact snapshot</h3>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Live
                </span>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border/60 bg-muted/60 px-4 py-3 shadow-inner shadow-primary/10"
                  >
                    <div className="text-3xl font-semibold text-foreground">
                      {item.value}
                    </div>
                    <div className="text-sm uppercase tracking-[0.08em] text-muted-foreground">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-[0_18px_48px_-26px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Các hình ảnh liên quan
                  </p>
                  <h3 className="text-xl font-semibold">Moodboard</h3>
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  Placeholder
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
                <div className="col-span-2 row-span-2 flex min-h-[230px] items-center justify-center rounded-2xl border border-border/70 bg-muted text-sm font-semibold text-muted-foreground md:min-h-[280px]">
                  Frame 1 (60%)
                </div>
                <div className="flex min-h-[120px] items-center justify-center rounded-2xl border border-border/70 bg-muted text-sm font-semibold text-muted-foreground">
                  Frame 2
                </div>
                <div className="flex min-h-[120px] items-center justify-center rounded-2xl border border-border/70 bg-muted text-sm font-semibold text-muted-foreground">
                  Frame 3
                </div>
                <div className="flex min-h-[120px] items-center justify-center rounded-2xl border border-border/70 bg-muted text-sm font-semibold text-muted-foreground">
                  Frame 4
                </div>
                <div className="flex min-h-[120px] items-center justify-center rounded-2xl border border-border/70 bg-muted text-sm font-semibold text-muted-foreground">
                  Frame 5
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-border/60 bg-card/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold text-muted-foreground">
            {menu.map((item) => (
              <a
                key={item}
                className="rounded-full px-3 py-1 transition hover:bg-[color:var(--hover-surface)] hover:text-[color:var(--hover-foreground)]"
              >
                {item}
              </a>
            ))}
          </nav>
          <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Crafted for a sharp X-style profile
          </span>
        </div>
      </footer>
    </div>
  );
}
