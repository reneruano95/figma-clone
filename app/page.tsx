"use client";

import { Live } from "@/components/live";
import Navbar from "@/components/navbar";

export default function Page() {
  return (
    <main className="h-screen overflow-hidden">
      <Navbar
        activeElement={null}
        imageInputRef={null}
        handleImageUpload={(e) => undefined}
        handleActiveElement={(element) => undefined}
      />

      <section className="h-full flex flex-row">
        <Live />
      </section>
    </main>
  );
}
