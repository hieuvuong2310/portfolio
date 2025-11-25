"use client";

import Link from "next/link";
import { Download, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { CONTACT_INFO, NAVIGATION, SITE_CONFIG } from "../constants/config";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({
  activeSection,
  setActiveSection,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          <Link
            href="#home"
            className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            aria-label="Go to home section"
          >
            {SITE_CONFIG.name.split(" ")[0]}
            <span className="text-foreground/70 text-base font-normal">
              .dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAVIGATION.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActiveSection(link.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-primary"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary transition-colors"
              aria-label="Open GitHub profile"
            >
              <Github className="w-4 h-4" />
            </Link>
            <Link
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary transition-colors"
              aria-label="Open LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link
              href={CONTACT_INFO.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="lg:hidden p-2 rounded-full border border-border"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-4">
            <div className="flex items-center gap-4">
              <Link
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Github className="w-4 h-4" />
                GitHub
              </Link>
              <Link
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Link>
            </div>
            <Link
              href={CONTACT_INFO.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Download Resume
            </Link>
            <div className="space-y-2">
              {NAVIGATION.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => {
                    setActiveSection(link.id);
                    setIsOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
