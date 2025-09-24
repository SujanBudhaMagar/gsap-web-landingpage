import { color } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface Segment {
  text: string;
  color?: string;
}

interface WrapCharacterProps {
  text?: string;
  segments?: Segment[];
}

export const WrapCharacter: React.FC<WrapCharacterProps> = ({
  text = "",
  segments,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/sound/typing.mp3");
    audioRef.current.volume = 1;
  }, []);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };
  const renderSegments = segments
    ? segments
    : text
    ? [{ text, color: undefined }]
    : [];
  return (
    <>
      {renderSegments.map((seg, i) =>
        seg.text.split("").map((ch, idx) => (
          <span
            key={`${i}-${idx}`}
            className={`${seg.color || ""} char inline-block opacity-0`}
            onAnimationStart={playSound}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))
      )}
    </>
  );
};
