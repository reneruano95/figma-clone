"use client";

import { Live } from "@/components/live";
import Navbar from "@/components/navbar";

export default function Page() {
  return (
    <main className="h-screen overflow-hidden">
      <Navbar />

      <section className="h-full flex flex-row">
        <Live />
      </section>
    </main>
  );
}
