import { CursorChatProps, CursorMode } from "@/lib/types/type";
import CursorSVG from "@/public/assets/CursorSVG";

export const CursorChat = ({
  cursor,
  cursorState,
  setCursorState,
  updateMyPresence,
}: CursorChatProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateMyPresence({ message: event.target.value });
    setCursorState({
      mode: CursorMode.Chat,
      previousMessage: null,
      message: event.target.value,
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && "message" in cursorState) {
      setCursorState({
        mode: CursorMode.Chat,
        previousMessage: cursorState.message,
        message: "",
      });
    } else if (event.key === "Escape") {
      setCursorState({
        mode: CursorMode.Hidden,
      });
    }
  };
  return (
    <div
      className="absolute top-0 left-0"
      style={{
        transform: `translateX(${cursor.x}px) translateY(${cursor.y}px)`,
      }}
    >
      {cursorState.mode === CursorMode.Chat && (
        <>
          <CursorSVG color="#000" />
          <div
            className="absolute top-5 left-2 bg-blue-500 px-4 py-2 text-sm leading-relaxed text-white rounded-[20px]"
            onKeyUp={(event) => event.stopPropagation()}
          >
            {cursorState.previousMessage && (
              <div className="text-left">{cursorState.previousMessage}</div>
            )}
            <input
              className="z-10 w-60 border-none bg-transparent text-white placeholder-blue-300 outline-none"
              autoFocus={true}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder={cursorState.previousMessage ? "" : "Say something…"}
              value={cursorState.message}
              maxLength={50}
            />
          </div>
        </>
      )}
    </div>
  );
};
