import { createFileRoute } from "@tanstack/react-router";
import heroImage from "../assets/hero-still-life.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Halloway Studio — Brand, Web & Campaign Design" },
      {
        name: "description",
        content:
          "Halloway is an independent design studio shaping brand identities, websites, and campaigns for teams who think in decades, not launches.",
      },
      { property: "og:title", content: "Halloway Studio — Brand, Web & Campaign Design" },
      {
        property: "og:description",
        content:
          "Independent design studio shaping identities, websites, and campaigns for teams who think in decades, not launches.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    number: "01",
    title: "Brand identity",
    description:
      "Naming, logos, and design systems built to hold up across a decade of product decisions.",
    points: ["Positioning & voice", "Visual systems"],
  },
  {
    number: "02",
    title: "Web & product",
    description:
      "Sites and interfaces designed and built in-house, so the idea survives contact with the code.",
    points: ["Design + build", "Motion & detail"],
  },
  {
    number: "03",
    title: "Campaigns",
    description:
      "Launches and ongoing narratives that keep a brand moving instead of just sitting still.",
    points: ["Art direction", "Content systems"],
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-paper font-sans text-ink">
      {/* ambient light */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="blob absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-accent-soft/40 blur-3xl"></div>
        <div className="blob2 absolute top-1/3 -right-32 h-[560px] w-[560px] rounded-full bg-white/70 blur-3xl"></div>
        <div className="blob absolute bottom-0 left-1/3 h-[440px] w-[440px] rounded-full bg-accent/25 blur-3xl"></div>
      </div>

      {/* nav */}
      <header className="relative z-10 px-6 pt-6">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl bg-white/40 px-6 py-3.5 ring-1 ring-black/5 backdrop-blur-xl">
          <a href="#" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-[7px] bg-ink text-paper">
              <span className="font-display text-sm font-semibold">H</span>
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">Halloway</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
            <a href="#services" className="transition-colors hover:text-ink">
              Services
            </a>
            <a href="#contact" className="transition-colors hover:text-ink">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-paper ring-1 ring-ink/10 transition-transform hover:-translate-y-0.5"
          >
            Start a project
          </a>
        </nav>
      </header>

      {/* hero */}
      <section className="relative z-10 px-6 pt-16 pb-12 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/50 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-ink/60 ring-1 ring-black/5 backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-accent"></span> Independent design studio
              </p>
              <h1 className="max-w-[26ch] font-display text-5xl font-medium leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Brand work that earns the room, not just the scroll.
              </h1>
              <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-pretty text-ink/65 sm:text-lg">
                Halloway is a small studio shaping identities, websites, and campaigns for teams
                who think in decades, not launches.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground ring-1 ring-accent/20 transition-transform hover:-translate-y-0.5"
                >
                  Start a project
                  <span className="shrink-0">→</span>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full bg-white/50 px-6 py-3 text-sm font-medium text-ink ring-1 ring-black/5 backdrop-blur-md transition-transform hover:-translate-y-0.5"
                >
                  See what we do
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-[18px] bg-white/45 p-3 ring-1 ring-black/5 backdrop-blur-2xl">
                <img
                  src={heroImage}
                  alt="Brand identity system on printed stationery beside a laptop, in warm window light"
                  width={960}
                  height={1200}
                  className="aspect-[4/5] w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <div className="flex items-center justify-between px-2 pt-3">
                  <span className="text-xs font-medium text-ink/70">
                    Meridian Coffee — rebrand
                  </span>
                  <span className="text-xs text-ink/40">2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="services" className="relative z-10 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                What we do
              </p>
              <h2 className="mt-3 max-w-[32ch] font-display text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
                Three disciplines, one standard of craft.
              </h2>
            </div>
            <p className="max-w-[30ch] text-sm leading-relaxed text-ink/60">
              Every engagement is led by a senior partner from first sketch to final ship.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="rounded-[18px] bg-white/50 p-7 ring-1 ring-black/5 backdrop-blur-xl"
              >
                <div className="mb-6 grid size-11 place-items-center rounded-[10px] bg-accent/12 text-accent ring-1 ring-accent/15">
                  <span className="font-display text-lg font-semibold">{service.number}</span>
                </div>
                <h3 className="font-display text-2xl font-medium tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{service.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink/70">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-accent"></span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* contact / footer */}
      <section id="contact" className="relative z-10 px-6 pb-8">
        <div className="mx-auto max-w-6xl rounded-[22px] bg-white/45 p-8 ring-1 ring-black/5 backdrop-blur-2xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Contact
              </p>
              <h2 className="mt-3 max-w-[24ch] font-display text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
                Tell us what you are building.
              </h2>
              <p className="mt-5 max-w-[40ch] text-base leading-relaxed text-ink/65">
                We take on a handful of projects each quarter. Share a few lines and we will reply
                within two business days.
              </p>
              <div className="mt-8 space-y-1.5 text-sm">
                <a
                  href="mailto:hello@halloway.studio"
                  className="block font-medium text-ink transition-colors hover:text-accent"
                >
                  hello@halloway.studio
                </a>
                <span className="text-ink/55">Portland &amp; remote, worldwide</span>
              </div>
            </div>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:hello@halloway.studio?subject=Project inquiry";
              }}
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink/70">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ada Lovelace"
                  className="w-full rounded-[10px] bg-white/60 px-4 py-3 text-sm text-ink ring-1 ring-black/5 placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink/70">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ada@company.com"
                  className="w-full rounded-[10px] bg-white/60 px-4 py-3 text-sm text-ink ring-1 ring-black/5 placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>
              <div>
                <label htmlFor="msg" className="mb-1.5 block text-sm font-medium text-ink/70">
                  Project
                </label>
                <textarea
                  id="msg"
                  name="message"
                  rows={3}
                  placeholder="A rebrand and a new site for a fintech, launching next spring."
                  className="w-full resize-none rounded-[10px] bg-white/60 px-4 py-3 text-sm text-ink ring-1 ring-black/5 placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-accent/40"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper ring-1 ring-ink/10 transition-transform hover:-translate-y-0.5"
              >
                Send inquiry
                <span className="shrink-0">→</span>
              </button>
            </form>
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-black/5 pt-6 text-sm text-ink/50 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2025 Halloway Studio</span>
            <div className="flex items-center gap-5">
              <a href="#" className="transition-colors hover:text-ink">
                Instagram
              </a>
              <a href="#" className="transition-colors hover:text-ink">
                LinkedIn
              </a>
              <a href="#" className="transition-colors hover:text-ink">
                Dribbble
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
