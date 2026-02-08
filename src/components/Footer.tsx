import { FootData } from "@/constants";
import Link from "next/link";
import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb";

export const Footer = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute w-full h-full blur-md">
          <div className="relative h-full w-full overflow-hidden">
            <div className="rounded-full bg-gradient-to-r from-secondary/90 to-white h-[190vw] w-[190vw] -left-[calc(95vw-50%)] absolute top-4" />
            <div className="bg-[#050505]/80 absolute h-full w-full" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="globalContainer relative w-full">
            <div className="flex flex-col items-center space-y-6 py-10">
              <h1 className="text-5xl text-description">Fuel Your Box</h1>
              <div className="relative">
                <input
                  type="email"
                  className="py-3 pl-6 pr-44 text-tertiary rounded-2xl bg-[#0A0A0A]"
                  placeholder="Enter your email"
                />
                <button className="absolute right-0 top-0 py-3 bg-primary rounded-2xl px-6">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start w-full py-6">
              <div className="flex flex-col space-y-2">
                <h1 className="text-[100px] text-description space-grotesk font-bold">
                  Lets talk<span className="text-secondary">.</span>
                </h1>
                <p className="text-[#EAEAEA] pb-2">
                  There is no room for shortcuts when building a great digital
                  experience.
                  <br /> Everything starts with thorough research and iterative
                  experimentation.
                </p>
                <div className="rounded-3xl bg-[#0A0A0A] text-[#EAEAEA] w-[260px] pl-3 py-2">
                  testers123@gmail.com
                </div>
              </div>

              <div className="flex gap-10 pt-20">
                <div className="flex flex-col space-y-2">
                  <h1 className="text-primary text-xl">Our Socials</h1>
                  <div className="text-description flex items-center gap-1">
                    <TbBrandLinkedinFilled />
                    <span>Linked In</span>
                  </div>
                  <div className="text-description flex items-center gap-1">
                    <FaInstagramSquare />
                    <span>Instagram</span>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <h1 className="text-primary text-xl">Directory</h1>
                  <div className="text-description flex flex-col space-y-1 text-base">
                    {FootData.map((foot, idx) => (
                      <Link key={idx} href={foot.href}>
                        {foot.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <h1 className="text-primary text-xl">Locations</h1>
                  <div className="text-description flex items-center gap-1">
                    <FaLocationDot />
                    <span>Kathmandu, Nepal</span>
                  </div>
                  <div className="text-description flex items-center gap-1">
                    <FaLocationDot />
                    <span>Lalitpur, Nepal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-[1px] bg-description" />
            <div className="globalContainer flex justify-between text-sm text-description">
              <span>©NeoMatrix.live 2025. All rights reserved.</span>
              <div className="flex gap-4">
                <Link href="termsofservice">Terms of Service</Link>
                <Link href="privacypolicy">Privacy Policy</Link>
                <Link href="cookiespolicy">Cookies Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
