"use client";

import { LeftSidebar } from "@/components/left-sidebar";
import { Live } from "@/components/live";
import Navbar from "@/components/navbar";
import { RightSidebar } from "@/components/right-sidebar";

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
        <LeftSidebar />
        <Live />
        <RightSidebar />
      </section>
    </main>
  );
}
