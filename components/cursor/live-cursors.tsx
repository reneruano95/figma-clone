import { LiveCursorProps } from "@/lib/types/type";
import { Cursor } from "./cursor";
import { COLORS } from "@/lib/constants";

export const LiveCursors = ({ others }: LiveCursorProps) => {
  return others.map(({ connectionId, presence }) => {
    if (!presence?.cursor) return null;

    return (
      <Cursor
        key={`cursor-${connectionId}`}
        color={COLORS[Number(connectionId) % COLORS.length]}
        x={presence.cursor.x}
        y={presence.cursor.y}
        message={presence.message}
      />
    );
  });
};
