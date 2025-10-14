"use client";

import ThreeRoot from "../../components/ThreeRoot";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-8 space-y-12">
      <header className="space-y-2 text-center">
        <h1 className="font-[var(--font-pirata)] text-5xl text-passion">
          🏝️ Islands of Adventure
        </h1>
        <p className="text-lg text-mystery-black/80 font-[var(--font-inter)] max-w-2xl mx-auto">
          Each island represents a project I’ve built — drag to orbit, scroll to zoom.
        </p>
      </header>

      <section>
        <ThreeRoot />
      </section>
    </main>
  );
}
