"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { MoveDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { lazy, useRef } from "react";
import Header from "./Header";
import About1 from "./About1";
import Project from "./Project";
import About2 from "./About2";
import Contact from "./Contact";
import Footer from "./Footer";
import HeaderTitle from "./HeaderTitle";

const Hero = () => {
  useGSAP(() => {
    // const titleSplit = new SplitText("#title h1", { type: "chars words" });

    // gsap.from(titleSplit.chars, {
    //   yPercent: 100,
    //   stagger: 0.04,
    // });
    // gsap.from("#title p", {
    //   opacity: 0,
    //   duration: 0.8,
    //   ease: "power1.in",
    // });
  });
  return (
    <main
      id="title"
      className="flex flex-col min-h-screen text-black py-7 px-5 md:py-6 md:px-12 lg:py-10 xl:px-18"
    >
      <HeaderTitle />

      {/* HERO SECTION */}
      <Header />

      {/* ABOUT SECTION PART-1 */}
      <About1 />

      {/* PROJECT SECTION */}
      <section className="mt-52">
        <div className="text-xl font-ppneune-medium flex gap-30">
          <h1>02/</h1>
          <h1 className="w-20 uppercase">Recent Projects</h1>
        </div>
        <Project />
      </section>

      {/* ABOUT SECTION PART-2 */}
      <About2 />

      {/* CONTACT Section */}
      <section className="mt-48 lg:mt-58">
        <div className="text-xl font-ppneune-medium flex gap-30 lg:justify-between lg:mr-[20vw]">
          <h1>04/</h1>
          <h1 className="w-40 uppercase">want to work together?</h1>
          <h1 className="uppercase hidden lg:block lg:w-30">
            Send me a message
          </h1>
        </div>
        <Contact />
      </section>

      {/* FOOTER Section */}
      <Footer />
    </main>
  );
};

export default Hero;
