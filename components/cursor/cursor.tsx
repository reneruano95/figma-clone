import CursorSVG from "@/public/assets/CursorSVG";

type CursorProps = {
  color: string;
  x: number;
  y: number;
  message: string;
};

export const Cursor = ({ color, x, y, message }: CursorProps) => {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0"
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
      <CursorSVG color={color} />
      {/* MASSAGE */}
    </div>
  );
};
