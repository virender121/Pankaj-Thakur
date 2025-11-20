// "use client"
import Image from "next/image";
import React from "react";
import Copy from "./Copy";
import CharReveal from "./CharReveal";
import {motion} from "motion/react"

const Header = () => {
  return (
    <section className="mt-[6dvh]">
      <Copy>
        <div className="mt-[10dvh] w-65 text-xl font-ppneune-medium uppercase lg:hidden">
        I support designers and agencies with creative development
      </div>
      </Copy>

      <div className="mt-8.5 uppercase text-[11.2dvw] font-ppneune-medium leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw]">
        <CharReveal>
          <h1>Creative</h1>
          <h1>Developer</h1>
        </CharReveal>
      </div>

      <div className="mt-10 w-[78dvw] h-[30dvh] lg:h-[27dvh] lg:w-[37dvw]">
        <motion.div initial={{height: 0}} animate={{height: "100%"}} transition={{duration: 0.8, ease: [0.83, 0, 0.17, 1]}} className="relative w-full h-full transition-all duration-300 overflow-hidden">
          <Image
            src="/hero-profile.jpg"
            alt="hero-image"
            className="object-center object-cover mix-blend-luminosity origin-bottom"
            fill
          />
        </motion.div>
      </div>

      <div className="mt-8 flex items-end justify-between lg:flex-row-reverse">
        <div className="uppercase text-[11.2dvw] font-ppneune-medium leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw] lg:text-right">
          <CharReveal>
            <h1>Pankaj</h1>
            <h1>Thakur</h1>
          </CharReveal>
        </div>

        <div className="hidden lg:block">
          <Copy>
            <div className="w-65 text-xl font-ppneune-medium uppercase">
            I support designers and agencies with creative development
          </div>
          </Copy>
        </div>

        <div className="uppercase text-[12dvw] font-ppneune-medium mr-5 leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw]">
          &darr;
        </div>
      </div>
    </section>
  );
};

export default Header;
