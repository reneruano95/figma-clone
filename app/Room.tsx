"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { LiveMap } from "@liveblocks/client";
import Loader from "@/components/loader";

export function Room({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider
      publicApiKey={process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!}
      throttle={16}
      resolveUsers={async ({ userIds }) => {
        return userIds.map((userId) => ({
          name: userId,
          avatar: `https://ui-avatars.com/api/?name=${userId}&background=random`,
        }));
      }}
      resolveMentionSuggestions={async ({ text, roomId }) => {
        return [];
      }}
    >
      <RoomProvider
        id="my-room"
        initialPresence={{
          cursor: null,
          message: "",
          cursorColor: null,
          editingText: false,
        }}
        initialStorage={{
          canvasObjects: new LiveMap<string, any>(),
        }}
      >
        <ClientSideSuspense fallback={<Loader />}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
