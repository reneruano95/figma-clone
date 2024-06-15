import { useCallback } from "react";
import { useMyPresence, useOthers } from "@liveblocks/react/suspense";
import { LiveCursors } from "./cursor/live-cursors";

export const Live = () => {
  const other = useOthers();
  const [myPresence, updateMyPresence] = useMyPresence();

  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault();

    const x = Math.round(event.clientX);
    const y = Math.round(event.clientY);

    updateMyPresence({ cursor: { x, y } });
  }, []);

  const handlePointerLeave = useCallback((event: React.PointerEvent) => {
    updateMyPresence({ cursor: null });
  }, []);

  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({ cursor: { x, y } });
  }, []);

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      className="h-screen w-full flex items-center justify-center text-center"
    >
      <h1 className="text-2xl text-white">LiveBlocks Figma Clone</h1>
      <LiveCursors others={other} />
    </div>
  );
};
