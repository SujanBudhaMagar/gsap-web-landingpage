import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ProcessCardProps } from "@/types";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const ProcessCard = ({ icon, des }: ProcessCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      ref={cardRef}
      className="flex flex-col py-16 text-description bg-gradient-to-r from-[#121212] to-[#027D7D] rounded-2xl items-center justify-center space-y-3"
    >
      <Image
        src={icon}
        alt="icon"
        height={300}
        width={300}
        className="h-[89px] w-[89px] object-contain"
      />
      <span>{des}</span>
    </motion.div>
  );
};

export default ProcessCard;
