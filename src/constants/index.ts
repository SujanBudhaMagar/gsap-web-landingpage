import { NavProps, ParagraphProps, ProcessCardProps } from "@/types";

export const NavData: NavProps[] = [
  { name: "About", href: "/about" },
  { name: "Our Work", href: "/ourwork" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

export const FootData: NavProps[] = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Services", href: "/services" },
  { name: "Career", href: "/career" },
];

export const Process: ProcessCardProps[] = [
  { icon: "/img/data.png", des: "Requirement Gathering" },
  { icon: "/img/design.png", des: "Wireframing & Design" },
  { icon: "/img/break.png", des: "Development" },
  { icon: "/img/rocket.png", des: "Launch & Support" },
];
export const paragraphContent: ParagraphProps[] = [
  { text: "We turn ", color: "default" },
  { text: "bold ideas", color: "text-primary" },
  { text: " into ", color: "default" },
  { text: "functional MVPs ", color: "text-secondary" },
  { text: "and scale", color: "default", breakAfter: true },
  { text: "them into powerful, ", color: "default" },
  { text: "future-ready solutions. ", color: "text-primary" },
  { text: "We fuse", color: "default", breakAfter: true },
  { text: "design, tech, and strategy to ", color: "default" },
  { text: "build ", color: "text-secondary" },
  { text: "what’s next.", color: "default" },
];
export const secondParagraph: ParagraphProps[] = [
  { text: "We team up with ", color: "text-tertiary" },
  { text: "driven brands", color: "text-primary" },
  { text: " growth", color: "text-secondary" },
  { text: " to spark ", color: "text-tertiary", breakAfter: true },
  { text: "through ", color: "text-tertiary" },
  { text: "design and identity.", color: "text-primary" },
];

export const Team: ParagraphProps[] = [
  { text: "We have", color: "text-description", breakAfter: true },
  { text: "best ", color: "text-description" },
  { text: "Team", color: "text-secondary" },
  { text: " &", color: "text-description", breakAfter: true },
  { text: "best", color: "text-description" },
  { text: " Process", color: "text-primary" },
];
export const TeamParagraph: ParagraphProps[] = [
  { text: "A ", color: "text-tertiary" },
  { text: "proven process ", color: "text-secondary" },
  { text: "that ensures ", color: "text-tertiary" },
  { text: "quality, ", color: "text-primary" },
  { text: "drives", color: "text-tertiary", breakAfter: true },
  { text: "collaboration, ", color: "text-primary" },
  { text: "and exceeds ", color: "text-tertiary" },
  { text: "expectations.", color: "text-primary" },
];
