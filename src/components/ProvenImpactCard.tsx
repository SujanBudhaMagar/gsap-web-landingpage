import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ProvenImpactCard = ({
  title,
  title1,
  color,
  strokeWidth = 12,
  bgStrokeWidth = 4,
}: {
  title: string;
  title1: string;
  color: string;
  strokeWidth?: number;
  bgStrokeWidth?: number;
}) => {
  const circleRef = useRef<SVGCircleElement | null>(null);
  const numberRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const finalValue = parseInt(title.replace("%", ""), 10);
    const radius = 120;
    const circumference = 2 * Math.PI * radius;

    if (circleRef.current) {
      circleRef.current.style.strokeDasharray = `${circumference}`;
      circleRef.current.style.strokeDashoffset = `${circumference}`;
    }

    const animateCircle = () => {
      const counter = { val: 0 };

      if (numberRef.current) {
        gsap.to(counter, {
          val: finalValue,
          duration: 2,
          ease: "power1.out",
          onUpdate: () => {
            numberRef.current!.innerText = `${Math.floor(counter.val)}%`;
          },
        });
      }

      if (circleRef.current) {
        gsap.to(circleRef.current, {
          strokeDashoffset: circumference - (circumference * finalValue) / 100,
          duration: 2,
          ease: "power1.out",
        });
      }
    };

    ScrollTrigger.create({
      trigger: circleRef.current,
      start: "top 80%",
      onEnter: animateCircle,
      end: "bottom 20%",
      once: true,
    });
  }, [title]);

  return (
    <div className="flex flex-col gap-4 items-center text-white font-bold space-grotesk">
      <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90">
          {/* Gray background circle */}
          <circle
            cx="128"
            cy="128"
            r="120"
            stroke="#555"
            strokeWidth={bgStrokeWidth}
            fill="transparent"
          />
          {/* Animated colored circle */}
          <circle
            ref={circleRef}
            cx="128"
            cy="128"
            r="120"
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray="0"
            strokeDashoffset="0"
          />
        </svg>

        <div className="absolute flex items-center justify-center w-full h-full">
          <h1 ref={numberRef} className="text-[48px] md:text-[56px] font-bold">
            {title}
          </h1>
        </div>
      </div>
      <h1 className="text-lg md:text-xl font-normal">{title1}</h1>
    </div>
  );
};

export default ProvenImpactCard;
