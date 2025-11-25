import Image from "next/image";
import logos from "../resources/logos.json";

const skillOrder = [
  "python",
  "java",
  "groovy",
  "javascript",
  "typescript",
  "swift",
  "react",
  "vue",
  "docker",
  "jenkins",
  "graphql",
  "restapi",
  "firebase",
  "mongodb",
  "github",
  "node",
];

const skillLabels: Record<string, string> = {
  restapi: "REST API",
  github: "GitHub Actions",
};

const prettyName = (key: string) =>
  skillLabels[key] ??
  key
    .split(/(?=[A-Z])/)
    .join(" ")
    .replace(/^\w/, (c) => c.toUpperCase());

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Tooling & Craft
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Production-ready experience across cloud infra, frontend craft, and
            CI/CD automation.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillOrder.map((key) => {
            const logo = logos[key as keyof typeof logos];
            if (!logo) return null;
            return (
              <div
                key={key}
                className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 hover:border-primary/60 transition-colors"
              >
                <div className="relative h-16 w-16">
                  <Image
                    src={logo}
                    alt={`${prettyName(key)} logo`}
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-center text-foreground/80">
                  {prettyName(key)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
