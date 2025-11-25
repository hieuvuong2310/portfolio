import Link from "next/link";
import { CONTACT_INFO, NAVIGATION, SITE_CONFIG } from "../constants/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background border-t border-border/20 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{SITE_CONFIG.name}</h3>
            <p className="text-sm opacity-80">
              DevOps and product engineer weaving reliable platforms with
              playful visuals.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {NAVIGATION.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:opacity-100 transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link
                  href={CONTACT_INFO.github}
                  target="_blank"
                  className="hover:opacity-100 transition"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  className="hover:opacity-100 transition"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:opacity-100 transition"
                >
                  Email
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>{CONTACT_INFO.email}</li>
              <li>Victoria, Canada</li>
              <li>{CONTACT_INFO.phone}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Crafted with Next.js · Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
