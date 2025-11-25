import Image from "next/image";
import overviewData from "../resources/overview.json";

const highlightTerms = [
  "SAP",
  "Government of British Columbia",
  "Atimi Software",
  "DevOps",
  "Fullstack",
  "Quality Assurance",
];

function emphasize(text: string) {
  return text.split(
    new RegExp(`(${highlightTerms.join("|")})`, "gi")
  ).map((chunk, index) => {
    const shouldHighlight = highlightTerms.some(
      (term) => term.toLowerCase() === chunk.toLowerCase()
    );
    if (!shouldHighlight) return chunk;
    return (
      <span
        key={`${chunk}-${index}`}
        className="bg-gradient-to-r from-primary/20 to-secondary/20 px-1 rounded"
      >
        {chunk}
      </span>
    );
  });
}

export default function OverviewSection() {
  return (
    <section id="overview" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.5em] text-foreground/50">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Blending engineering rigor with playful, human-centered design.
          </h2>
          <div className="text-lg text-foreground/75 space-y-4 leading-relaxed">
            <p>{overviewData.line1}</p>
            <p>{overviewData.line2}</p>
            <p>{emphasize(overviewData.line3)}</p>
            <p>{overviewData.line4}</p>
          </div>
        </div>
        <div className="relative w-full aspect-square max-w-[420px] mx-auto">
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-3xl" />
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-transparent">
            <Image
              src={overviewData.profile}
              alt="Portrait of Lucas Vuong"
              width={600}
              height={600}
              className="w-full h-full object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

