import Image from "next/image";

import { cn } from "@/lib/utils";
import styles from "./avatar.module.css";

export function Avatar({
  name,
  otherStyles,
}: {
  otherStyles: string;
  name: string;
}) {
  return (
    <div
      className={cn(styles.avatar, otherStyles, "h-9 w-9")}
      data-tooltip={name}
    >
      <Image
        src={`https://liveblocks.io/avatars/avatar-${Math.floor(
          Math.random() * 30
        )}.png`}
        className={styles.avatar_picture}
        fill
        alt={name}
      />
    </div>
  );
}
