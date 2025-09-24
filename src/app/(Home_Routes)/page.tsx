"use client";
import { motion } from "framer-motion";
import PoweringCard from "@/components/PoweringCard";
import ProcessCard from "@/components/ProcessCard";
import ProvenImpactCard from "@/components/ProvenImpactCard";
import { WrapCharacter } from "@/components/WrapCharacter";
import {
  paragraphContent,
  Process,
  secondParagraph,
  Team,
  TeamParagraph,
} from "@/constants";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import Image from "next/image";
import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const digitalSectionRef = useRef<HTMLElement>(null);
  const paraRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const teamParaRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const provenImpactRef = useRef<HTMLDivElement>(null);
  const clientsSayRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(".headline .char, .par", sectionRef);
  useScrollAnimation(".char", textRef, {
    from: { opacity: 0 },
    to: { opacity: 1, duration: 0.03, stagger: 0.03, ease: "power2.out" },
    scrollTrigger: { start: "top 90%", end: "bottom 10%" },
  });
  useScrollAnimation(".popup-card", popupRef, {
    from: { scale: 0, opacity: 0, x: -50 },
    to: {
      scale: 1,
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "power3.out",
    },
    scrollTrigger: {
      start: "bottom bottom",
    },
  });
  useScrollAnimation(".digital-par .char", digitalSectionRef);
  useScrollAnimation(".char", paraRef, {
    from: { opacity: 0 },
    to: { opacity: 1, duration: 0.03, stagger: 0.03, ease: "power2.out" },
    scrollTrigger: { start: "top 90%", end: "bottom 10%" },
  });
  useScrollAnimation(".team .char", teamRef);
  useScrollAnimation(".char", teamParaRef, {
    from: { opacity: 0 },
    to: { opacity: 1, duration: 0.03, stagger: 0.03, ease: "power2.out" },
    scrollTrigger: { start: "top 90%", end: "bottom 10%" },
  });
  useScrollAnimation(".card", cardsRef);
  useScrollAnimation(".software", cardsRef, {
    from: { x: -50, opacity: 0 },
    to: { x: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out" },
    scrollTrigger: {
      start: "top 90%",
    },
  });
  useScrollAnimation(".digital", cardsRef, {
    from: { y: -50, opacity: 0 },
    to: { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out" },
    scrollTrigger: {
      start: "top 90%",
    },
  });
  useScrollAnimation(".media", cardsRef, {
    from: { y: -50, opacity: 0 },
    to: { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out" },
    scrollTrigger: {
      start: "top 90%",
    },
  });
  useScrollAnimation(".brand", cardsRef, {
    from: { x: 50, opacity: 0 },
    to: { x: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out" },
    scrollTrigger: {
      start: "top 90%",
    },
  });
  useScrollAnimation(".proven .char", provenImpactRef);
  useScrollAnimation(".clients .char", clientsSayRef);

  return (
    <div className="globalContainer py-28">
      {/* main section */}
      <section className="px-16" ref={sectionRef}>
        <h1 className="headline flex items-center text-[130px] bg-gradient-to-r from-[#808F8F] to-[#F3F3F3] bg-clip-text font-bold space-grotesk text-description">
          <WrapCharacter text="IDEA" />
          <span className="char opacity-0">
            <FaArrowRight className="inline-block text-secondary text-[80px]" />
          </span>{" "}
          <WrapCharacter text="MVP" />
          <span className="char opacity-0">
            <FaArrowRight className="inline-block text-secondary text-[80px]" />
          </span>{" "}
          <WrapCharacter text="SCALE" />
          <span className="text-primary">
            <WrapCharacter text="." />
          </span>
        </h1>

        <div className="flex items-center justify-between text-white py-6">
          <h3 className="text-tertiary text-base par">
            From{" "}
            <span className="bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text">
              Vision{" "}
            </span>
            to <span className="text-secondary">Velocity</span>.
          </h3>
          <p className="text-base" ref={textRef}>
            {paragraphContent.map((seg, idx) => (
              <React.Fragment key={idx}>
                <WrapCharacter
                  segments={[{ text: seg.text, color: seg.color }]}
                />
                {seg.breakAfter && <br />}
              </React.Fragment>
            ))}{" "}
          </p>
        </div>
      </section>
      {/* main section */}

      <section className="py-16 px-32" ref={popupRef}>
        <div className="relative py-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 1 }}
            className="flex items-center justify-center relative z-50"
          >
            <Image
              src="/img/middle.png"
              alt="No Image"
              height={500}
              width={500}
              className="h-[370px] w-[400px]"
            />
          </motion.div>
          <div className="absolute top-0 left-0 mb-8 popup-card">
            <div className="relative">
              <div className="bg-[#242728] rounded-4xl px-5 py-4 relative">
                <button className="text-description px-5 py-3 rounded-3xl bg-[#343637] border border-[#242728] text-base">
                  Team
                  <br /> Augmentation
                </button>
              </div>
              <div className="w-[106px] h-[1px] border border-tertiary absolute top-1/2 -right-[107px]" />
              <div className="w-[135px] h-[1px] border border-tertiary absolute bottom-1 rotate-45 -right-[222px]" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 mt-8 popup-card">
            <div className="bg-[#242728] rounded-4xl px-6.5 py-4 relative">
              <button className="text-description px-8 py-3 rounded-3xl bg-[#343637] border border-[#242728] text-base">
                Dedicated
                <br /> Team
              </button>
            </div>
            <div className="w-[106px] h-[1px] border border-tertiary absolute top-1/2 -right-[107px]" />
            <div className="w-[135px] h-[1px] border border-tertiary absolute top-1 rotate-[135deg] -right-[222px]" />
          </div>
          <div className="absolute top-0 right-0 popup-card">
            <div className="bg-[#242728] rounded-4xl px-5.5 py-4">
              <button className="text-description px-5 py-3 rounded-3xl bg-[#343637] border border-[#242728] text-base">
                Project
                <br /> Outsourcing
              </button>
            </div>
            <div className="w-[106px] h-[1px] border border-tertiary absolute top-1/2 -left-[107px]" />
            <div className="w-[135px] h-[1px] border border-tertiary absolute bottom-1 rotate-[135deg] -left-[222px]" />
          </div>
          <div className="absolute bottom-0 right-0 popup-card">
            <div className="bg-[#242728] rounded-4xl px-5.5 py-4">
              <button className="text-description px-8 py-3 rounded-3xl bg-[#343637] border border-[#242728] text-base">
                Managed
                <br /> services
              </button>
            </div>
            <div className="w-[106px] h-[1px] border border-tertiary absolute top-1/2 -left-[107px]" />
            <div className="w-[135px] h-[1px] border border-tertiary absolute top-1 rotate-[45deg] -left-[222px]" />
          </div>
        </div>
      </section>

      {/* digital identity */}
      <section className="py-10" ref={digitalSectionRef}>
        <div className="flex items-center justify-between">
          <h1 className="text-[100px] space-grotesk font-bold text-secondary leading-28 digital-par">
            <WrapCharacter text="Powering" /> <br />
            <span className="text-description">
              <WrapCharacter text="digital identity" />
            </span>
          </h1>
          <div className="flex flex-col items-end space-y-3">
            <p className="text-xl text-end" ref={paraRef}>
              {secondParagraph.map((seg, idx) => (
                <React.Fragment key={idx}>
                  <WrapCharacter
                    segments={[{ text: seg.text, color: seg.color }]}
                  />
                  {seg.breakAfter && <br />}
                </React.Fragment>
              ))}{" "}
            </p>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-1 border border-primary text-description px-10 py-4 rounded-4xl"
            >
              <button className="text-base">Get Started</button>
              <MdArrowOutward size={16} />
            </motion.div>
          </div>
        </div>
        <div className="py-14">
          <div className="grid grid-cols-2 gap-5">
            <PoweringCard
              animationStart="left"
              title={`Website <span class="text-description">Development</span>`}
              des={`Custom, responsive, high-quality websites with CMS and
                <br /> modern stack integration.`}
              img="/img/web.png"
            />
            <PoweringCard
              animationStart="right"
              title={`Mobile App <span class="text-description">Development</span>`}
              des={`Sleek, intuitive mobile apps for iOS and Android that users love<br />to use.`}
              img="/img/mobile.png"
            />
          </div>
          <div className="flex gap-6 py-6 card" ref={cardsRef}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-b from-[#121212] to-[#027D7D] space-y-2 rounded-2xl w-full px-6 py-4 software"
            >
              <h1 className="text-2xl font-semibold text-primary">
                Software Development
              </h1>
              <p className="text-description text-base font-semibold">
                Empowering growth with smart software
                <br /> that automates, scales, and evolves with
                <br /> your business.
              </p>
              <div className="flex justify-center">
                <Image
                  src="/img/software.png"
                  alt="Software"
                  height={500}
                  width={500}
                  className="h-[386px] w-[406px] object-cover"
                />
              </div>
            </motion.div>
            <div className="flex flex-col space-y-6 w-full">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="digital bg-gradient-to-b from-[#121212] to-[#027D7D] px-6 py-8 space-y-2 rounded-2xl w-full shadow-[0_0_15px_0_#00FFFF]"
              >
                <h1 className="text-2xl font-semibold text-secondary">
                  Digital Marketing
                </h1>
                <p className="text-description text-base font-semibold">
                  Data-driven campaigns to boost
                  <br /> reach and conversions across
                  <br /> digital platforms.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-b from-[#121212] to-[#027D7D] pl-12 pr-2 pt-8 space-y-2 rounded-2xl w-full media"
              >
                <h1 className="text-2xl font-semibold text-primary">
                  Media Buying/Paid Ads
                </h1>
                <p className="text-description text-base font-semibold">
                  Data-driven campaigns to boost
                  <br /> reach and conversions across
                  <br /> digital platforms.
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/img/media.png"
                    alt="Media"
                    height={500}
                    width={500}
                    className="h-[208px] w-[277px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-b from-[#121212] to-[#027D7D] rounded-2xl w-full brand"
            >
              <div className="flex justify-center">
                <Image
                  src="/img/brand.png"
                  alt="Web"
                  height={500}
                  width={500}
                  className="h-[448px] w-[436px] object-cover"
                />
              </div>
              <div className="px-6 space-y-2 pb-2">
                <h1 className="text-2xl font-semibold text-primary">
                  Branding & Visual Identity
                </h1>
                <p className="text-description text-base font-semibold">
                  Empowering growth with smart software
                  <br /> that automates, scales, and evolves with
                  <br /> your business.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* digital identity */}

      {/* team & process */}
      <section className="py-6" ref={teamRef}>
        <div className="flex items-center justify-between">
          <h1 className="text-[100px] space-grotesk font-bold text-description leading-28 team">
            {Team.map((seg, idx) => (
              <React.Fragment key={idx}>
                <WrapCharacter
                  segments={[{ text: seg.text, color: seg.color }]}
                />
                {seg.breakAfter && <br />}
              </React.Fragment>
            ))}{" "}
          </h1>
          <div className="flex flex-col items-end space-y-3">
            <div className="text-tertiary text-xl" ref={teamParaRef}>
              {TeamParagraph.map((seg, idx) => (
                <React.Fragment key={idx}>
                  <WrapCharacter
                    segments={[{ text: seg.text, color: seg.color }]}
                  />
                  {seg.breakAfter && <br />}
                </React.Fragment>
              ))}{" "}
            </div>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-1 border border-primary text-description px-10 py-4 rounded-4xl"
            >
              <button className="text-base">Get Started</button>
              <MdArrowOutward size={16} />
            </motion.div>
          </div>
        </div>
        <div className="py-10 grid grid-cols-4 gap-4 w-full">
          {Process.map((process, idx) => (
            <ProcessCard key={idx} icon={process.icon} des={process.des} />
          ))}
        </div>
      </section>
      {/* team & process */}

      {/* proven impact */}
      <section className="py-10" ref={provenImpactRef}>
        <div className="flex flex-col items-center justify-center space-y-10">
          <h1 className="proven space-grotesk text-[100px] font-bold text-description">
            <WrapCharacter text="Proven " />
            <span className="text-secondary">
              <WrapCharacter text="Impact" />
            </span>
          </h1>
          <div className="flex justify-between w-full px-10">
            <ProvenImpactCard
              title="95%"
              title1="Client Satisfaction"
              color="#00FFFF"
            />
            <ProvenImpactCard
              title="98%"
              title1="Uptime/ Reliability"
              color="#24F78C"
            />
            <ProvenImpactCard
              title="90%"
              title1="Security Compliance"
              color="#00FFFF"
            />
          </div>
        </div>
      </section>
      {/* proven impact */}

      {/* What clients say? */}
      <section className="py-10" ref={clientsSayRef}>
        <div className="flex flex-col items-center justify-center space-y-10">
          <h1 className="space-grotesk text-[100px] font-bold text-description clients">
            <WrapCharacter text="What" />{" "}
            <span className="text-secondary">
              <WrapCharacter text="Clients " />
            </span>
            <WrapCharacter text="Say?" />
          </h1>
        </div>
      </section>
      {/* What clients say? */}
    </div>
  );
}
