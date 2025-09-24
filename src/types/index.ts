export interface NavProps {
  name: string;
  href: string;
}

export interface PoweringCardProps {
  title: string;
  des: string;
  img: string;
  animationStart: string;
}
export interface ProcessCardProps {
  icon: string;
  des: string;
}

export interface ParagraphProps {
  text: string;
  color: string;
  breakAfter?: boolean;
}
export interface ScrollTriggerVars {
  trigger?: gsap.DOMTarget;
  start?: string | number;
  end?: string | number;
  toggleActions?: string;
  scrub?: boolean | number;
  pin?: boolean | string | Element;
  [key: string]: unknown;
}

export interface AnimationProps {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  scrollTrigger?: ScrollTriggerVars;
}
