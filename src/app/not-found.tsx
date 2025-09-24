"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col relative py-16 items-center justify-center min-h-screen bg-black">
      {/* 404 Big Text Animation */}
      <motion.h1
        className="text-[400px] font-bold text-secondary text-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        404
      </motion.h1>

      {/* Overlay content */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <div className="absolute h-full w-full bg-gray-900/70 rounded-xl" />
        <div className="flex flex-col items-center space-y-2 text-description relative px-4 py-8">
          <h1 className="text-base font-semibold">Oops! page not found</h1>
          <p className="text-base font-semibold text-center">
            {`            It seems the page that you are looking for doesn't
`}{" "}
            <br /> exist or has been moved
          </p>
          <Link
            href="/"
            className="bg-secondary rounded-xl px-3 py-2 text-sm text-black"
          >
            Go back to Home →
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
