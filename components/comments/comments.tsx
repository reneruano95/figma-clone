"use client";

import { ClientSideSuspense } from "@liveblocks/react/suspense";
import { CommentsOverlay } from "./comments-overlay";

export const Comments = () => (
  <ClientSideSuspense fallback={null}>
    {() => <CommentsOverlay />}
  </ClientSideSuspense>
);
