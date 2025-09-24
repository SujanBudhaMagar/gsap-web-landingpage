import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PoweringCardProps } from "@/types";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const PoweringCard = ({
  title,
  des,
  img,
  animationStart = "left",
}: PoweringCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const xStart = animationStart === "left" ? -100 : 100;

    gsap.fromTo(
      cardRef.current,
      { x: xStart, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out", // smoother easing
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%", // when element enters viewport
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  }, [animationStart]);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      ref={cardRef}
      className="bg-gradient-to-b from-[#121212] to-[#027D7D] pl-12 pr-2 pt-8 space-y-2 rounded-2xl w-full"
    >
      <h1
        className="text-2xl font-semibold text-primary"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p
        className="text-description text-base font-semibold"
        dangerouslySetInnerHTML={{ __html: des }}
      />
      <div className="flex justify-end">
        <Image
          src={img}
          alt="None"
          height={500}
          width={500}
          className="h-[258px] w-[258px] object-cover"
        />
      </div>
    </motion.div>
  );
};

export default PoweringCard;
