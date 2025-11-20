"use client";
import Image from "next/image";
import React from "react";
import Copy from "../components/Copy";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="mt-[15vh] lg:mt-[30vh] lg:flex">
      <div className="text-xl font-ppneune-medium">01/</div>
      <div className="lg:ml-[12vw] lg:w-fit">
        <div className="mt-7 lg:mt-0">
          <Copy delay={0.3}>
            <h1 className="uppercase font-ppneune-medium text-[11.2dvw] leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw]">
              Passionate
            </h1>
            <h1 className="uppercase font-ppneune-medium text-[11.2dvw] leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw]">
              Creative
            </h1>
            <h1 className="uppercase font-ppneune-medium text-[11.2dvw] leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw]">
              Developer
            </h1>
          </Copy>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "40vh" }}
            transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1], delay: 0.3 }}
            className="relative w-[75vw] h-[40vh] my-4 lg:w-[45vw]"
          >
            <Image
              src="/about-cover.jpg"
              className="object-cover"
              alt="About Cover"
              fill
            />
          </motion.div>
          <Copy delay={0.2}>
            <h1 className="uppercase font-ppneune-medium text-[11.2dvw] leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw]">
              Based in
            </h1>
            <h1 className="uppercase font-ppneune-medium text-[11.2dvw] leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw]">
              Himachal
            </h1>
          </Copy>
        </div>

        <div className="mt-20 lg:mt-30 text-xl font-ppneune-medium lg:flex lg:justify-between">
          <Copy delay={0.5}>
            <h1 className="lg:w-[10vw] xl:w-[14vw]">
              A journey of curiosity and explorations
            </h1>
          </Copy>
          <div className="lg:w-[22vw]">
            <Copy delay={0.5}>
              <p className="mt-12 lg:mt-0">
                I'm a creative developer with years of experience in building
                websites and appealing web-app experiences. I've collaborated
                with individuals and agencies to build experiences for their
                clients.
              </p>
              <p className="mt-8 lg:mt-10">
                Each project is an opportunity to learn new concepts across
                multiple domains including arts, maths and physics.
              </p>
            </Copy>
            <motion.div
              initial={{ height: 0 }}
              // The state to animate to WHEN the element is in the viewport
              whileInView={{ height: "50vh" }}
              // This ensures the animation only happens once
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1], delay: 0.4 }}
              className="relative w-full sm:w-95 lg:w-full h-[50vh] overflow-hidden mix-blend-luminosity my-8 lg:my-15"
            >
              <Image
                className="object-cover object-top align-middle scale-125"
                src="/about-profile-og.png"
                alt="about-profile"
                fill
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
