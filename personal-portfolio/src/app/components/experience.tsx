import professionalsData from "../resources/professionals.json";

const professionalRoles = professionalsData.filter(
  (role) => role?.company && role?.icon === "💼"
);
const leadershipRoles = professionalsData.filter(
  (role) => role?.company && role?.icon === "🧑‍🎓"
);

type Role = (typeof professionalRoles)[number];

function RoleCard({ role }: { role: Role }) {
  return (
    <div className="p-6 rounded-2xl border border-border/70 bg-background/60 space-y-3 hover:border-primary/50 transition-colors">
      <div className="flex items-center justify-between gap-3">
        <span className="text-2xl" aria-hidden>
          {role.icon}
        </span>
        <p className="text-sm text-foreground/60 whitespace-nowrap">
          {role.time}
        </p>
      </div>
      <div>
        <p className="text-sm uppercase tracking-wide text-primary font-semibold">
          {role.company}
        </p>
        <h3 className="text-lg font-bold">{role.position}</h3>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="professionals" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            Building products across enterprise platforms, public service, and
            student communities while championing inclusive tech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden>
                💼
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-foreground/60">
                  Industry
                </p>
                <h3 className="text-2xl font-semibold">
                  Professional Experience
                </h3>
              </div>
            </div>
            <div className="space-y-4">
              {professionalRoles.map((role) => (
                <RoleCard key={`${role.company}-${role.time}`} role={role} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden>
                🧑‍🎓
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-foreground/60">
                  Leadership
                </p>
                <h3 className="text-2xl font-semibold">
                  Community & Teaching
                </h3>
              </div>
            </div>
            <div className="space-y-4">
              {leadershipRoles.map((role) => (
                <RoleCard key={`${role.company}-${role.time}`} role={role} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

