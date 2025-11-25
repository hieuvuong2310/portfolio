import Link from "next/link";
import overviewData from "../resources/overview.json";
import projectsData from "../resources/projects.json";
import professionalsData from "../resources/professionals.json";
import { CONTACT_INFO, SITE_CONFIG } from "../constants/config";

const heroHighlights = [
  "DevOps",
  "Fullstack",
  "Quality Assurance",
];

export default function Hero() {
  const industryRoles = professionalsData.filter(
    (item) => item?.icon === "💼" && item?.company
  ).length;
  const leadershipRoles = professionalsData.filter(
    (item) => item?.icon === "🧑‍🎓" && item?.company
  ).length;

  const stats = [
    { label: "Featured Projects", value: `${projectsData.length}+` },
    { label: "Industry Roles", value: `${industryRoles}+` },
    { label: "Leadership & Community", value: `${leadershipRoles}+` },
  ];

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-64px)] flex items-center justify-center py-20 px-4 bg-gradient-to-br from-background via-background to-secondary/5"
    >
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <div className="space-y-6">
          <p
            className="text-sm uppercase tracking-[0.5em] text-foreground/50 animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            {SITE_CONFIG.tagline}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            <span
              className="text-foreground inline-block animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              Hi, I’m {SITE_CONFIG.name}.
            </span>{" "}
            <span
              className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient animate-fade-up inline-block"
              style={{ animationDelay: "0.25s" }}
            >
              I build reliable, scalable platforms and joyful products.
            </span>
          </h1>

          {/* <div className="text-lg md:text-xl text-foreground/80 space-y-4 max-w-3xl mx-auto">
            <p>{overviewData.line1}</p>
            <p>{overviewData.line2}</p>
            <p>{overviewData.line3}</p>
          </div> */}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {heroHighlights.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full border border-border/60 text-sm uppercase tracking-wide text-foreground/70"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href={CONTACT_INFO.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
          >
            Download Resume
          </Link>
          <Link
            href={`mailto:${CONTACT_INFO.email}`}
            className="px-8 py-3 border border-border rounded-full font-semibold text-foreground hover:border-primary transition-all duration-300"
          >
            Let’s Talk
          </Link>
        </div>

        <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center rounded-2xl border border-border p-6 bg-background/70"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-sm text-foreground/60 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
