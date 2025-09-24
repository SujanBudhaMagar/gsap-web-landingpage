import { AnimationProps } from "@/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (
  targetSelector: string,
  scopeRef: RefObject<HTMLElement | null>,
  animationProps: AnimationProps = {}
) => {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const targets = scopeRef.current!.querySelectorAll(targetSelector);
      if (targets.length === 0) {
        console.warn(`No elements found for selector: ${targetSelector}`);
        return;
      }
      gsap.fromTo(targets, animationProps.from || { x: -50, opacity: 0 }, {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scopeRef.current,
          start: "top 80%",
          // end: "bottom 20%",
          once: true,
          ...animationProps.scrollTrigger,
        },
        ...animationProps.to,
      });
    }, scopeRef);
    return () => ctx.revert();
  }, [targetSelector, scopeRef, animationProps]);
};
