import { NavData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="globalContainer">
      <div className="flex items-center justify-between">
        <Image
          src="/img/Logo.png"
          alt="Neomatrix Logo"
          height={500}
          width={400}
          className="w-[214px] h-[73px]"
        />
        <div className="flex gap-9">
          {NavData.map((nav, idx) => (
            <Link key={idx} href={nav.href} className="text-xl text-tertiary">
              {nav.name}
            </Link>
          ))}
        </div>
        <button className="bg-primary text-xl text-[#111827] px-6 py-2 rounded-3xl">
          Project Consultation
        </button>
      </div>
    </nav>
  );
};
