"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { CONTACT_INFO } from "../constants/config";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=Let's build something&body=${encodeURIComponent(
      `${formData.message}\n\n— ${formData.name} (${formData.email})`
    )}`;
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Let’s collaborate
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            I’m currently open to DevOps, platform, or creative engineering
            roles. The fastest way to reach me is through email or LinkedIn.
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-border space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-sm text-foreground/60 mb-1">Email</p>
              <Link
                href={`mailto:${CONTACT_INFO.email}`}
                className="font-semibold text-foreground hover:text-primary"
              >
                {CONTACT_INFO.email}
              </Link>
            </div>
            <div>
              <p className="text-sm text-foreground/60 mb-1">Phone</p>
              <Link
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="font-semibold text-foreground hover:text-primary"
              >
                {CONTACT_INFO.phone}
              </Link>
            </div>
            <div>
              <p className="text-sm text-foreground/60 mb-1">Based in</p>
              <p className="font-semibold text-foreground">Victoria, Canada</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
              >
                How can I help?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 text-lg"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
