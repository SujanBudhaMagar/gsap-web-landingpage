import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "software" | "digital" | "media" | "brand";

export const useScrollHoverAnimation = (
  ref: RefObject<HTMLElement | null>,
  type: AnimationType
) => {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    let fromProps: any = { opacity: 0, scale: 0.9 };
    let toProps: any = {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
    };
    if (type === "software") fromProps.x = -50;
    if (type === "brand") fromProps.x = 50;
    if (type === "digital" || type === "media") fromProps.y = -50;

    if (type === "software") toProps.x = 0;
    if (type === "brand") toProps.x = 0;
    if (type === "digital" || type === "media") toProps.y = 0;

    gsap.fromTo(el, fromProps, {
      ...toProps,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    });
    const enter = () =>
      gsap.to(el, { scale: 1.05, duration: 0.3, ease: "power3.out" });
    const leave = () =>
      gsap.to(el, { scale: 1, duration: 0.3, ease: "power3.out" });

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, [ref, type]);
};
