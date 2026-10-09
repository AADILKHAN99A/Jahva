"use client";

import React, { useState } from "react";
import {
  EnvelopeSimple,
  MapPin,
  CheckCircle,
  Clock,
} from "@phosphor-icons/react";
import { FloatingIslandNav } from "@/components/ui/FloatingIslandNav";
import { Footer } from "@/components/ui/Footer";
import { DoubleBezelCard } from "@/components/ui/DoubleBezelCard";
import { IslandButton } from "@/components/ui/IslandButton";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    scope: "Flagship Web Application",
    budget: "€40k - €70k",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <FloatingIslandNav />
      <main className="flex-1 overflow-x-hidden pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
            COMMISSIONS &amp; ENGAGEMENT
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-brand-text mb-6">
            Initiate a Commission
          </h1>
          <p className="text-lg text-brand-secondary max-w-2xl leading-relaxed">
            We partner with ambitious founders, cultural institutions, and engineering teams to build unforgettable digital systems. Currently scheduling Q1 and Q2 engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <DoubleBezelCard>
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent mb-6">
                    <CheckCircle size={36} weight="bold" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-brand-text mb-3">
                    Inquiry Received
                  </h2>
                  <p className="text-sm text-brand-secondary max-w-md mx-auto leading-relaxed mb-8">
                    Thank you, {formData.name}. Our partner team will review your architectural scope and respond within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="font-mono text-xs text-accent uppercase tracking-wider hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-mono text-xs uppercase text-brand-muted tracking-wider mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-xl bg-surface-shell px-4 py-3 text-sm text-brand-text ring-1 ring-border-subtle focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Elena Vance"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-mono text-xs uppercase text-brand-muted tracking-wider mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-xl bg-surface-shell px-4 py-3 text-sm text-brand-text ring-1 ring-border-subtle focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="elena@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="organization"
                        className="block font-mono text-xs uppercase text-brand-muted tracking-wider mb-2"
                      >
                        Organization / Studio
                      </label>
                      <input
                        type="text"
                        id="organization"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organization: e.target.value,
                          })
                        }
                        className="w-full rounded-xl bg-surface-shell px-4 py-3 text-sm text-brand-text ring-1 ring-border-subtle focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Aura Acoustics"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block font-mono text-xs uppercase text-brand-muted tracking-wider mb-2"
                      >
                        Estimated Investment
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full rounded-xl bg-surface-shell px-4 py-3 text-sm text-brand-text ring-1 ring-border-subtle focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="€25k - €40k">€25k - €40k</option>
                        <option value="€40k - €70k">€40k - €70k</option>
                        <option value="€70k - €120k">€70k - €120k</option>
                        <option value="€120k+">€120k+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs uppercase text-brand-muted tracking-wider mb-2"
                    >
                      Project Narrative &amp; Objectives *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-xl bg-surface-shell px-4 py-3 text-sm text-brand-text ring-1 ring-border-subtle focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Outline your vision, technical hurdles, desired timeline, and key performance expectations..."
                    />
                  </div>

                  <div className="pt-4">
                    <IslandButton type="submit" variant="primary" className="w-full sm:w-auto">
                      Transmit Commission Request
                    </IslandButton>
                  </div>
                </form>
              )}
            </DoubleBezelCard>
          </div>

          {/* Coordinates Dossier */}
          <div className="lg:col-span-5 space-y-6">
            <DoubleBezelCard>
              <div className="flex items-start gap-4">
                <Clock size={24} className="text-accent shrink-0 mt-1" weight="bold" />
                <div>
                  <h3 className="font-bold text-base text-brand-text">
                    Current Capacity
                  </h3>
                  <p className="text-xs text-brand-secondary leading-relaxed mt-1">
                    Accepting 2 commissions for Q1 2025. Typical project duration ranges from 6 to 14 weeks from architectural blueprint to global rollout.
                  </p>
                </div>
              </div>
            </DoubleBezelCard>

            <DoubleBezelCard>
              <div className="flex items-start gap-4">
                <EnvelopeSimple size={24} className="text-accent shrink-0 mt-1" weight="bold" />
                <div>
                  <h3 className="font-bold text-base text-brand-text">
                    Direct Partner Desk
                  </h3>
                  <a
                    href="mailto:contact@kineticatelier.dev"
                    className="font-mono text-sm text-accent hover:underline mt-1 block"
                  >
                    contact@kineticatelier.dev
                  </a>
                  <p className="text-xs text-brand-muted mt-1">
                    PGP key fingerprint available upon request.
                  </p>
                </div>
              </div>
            </DoubleBezelCard>

            <DoubleBezelCard>
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-accent shrink-0 mt-1" weight="bold" />
                <div>
                  <h3 className="font-bold text-base text-brand-text">
                    Partner Nodes
                  </h3>
                  <div className="grid grid-cols-2 gap-2 mt-2 font-mono text-xs text-brand-secondary">
                    <div>Berlin (GMT+1)</div>
                    <div>London (GMT)</div>
                    <div>Dublin (GMT)</div>
                    <div>Dubai (GMT+4)</div>
                  </div>
                </div>
              </div>
            </DoubleBezelCard>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
