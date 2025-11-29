import Link from "next/link";
import React from "react";
import Copy from "./Copy";

const About1 = () => {
  return (
    <section className="mt-34 lg:flex gap-[20vw]">
      <div className="text-xl font-ppneune-medium">
        <h1>01/</h1>
      </div>

      <div className="lg:mt-[-2vw] lg:pr-15">
        <div>
          <Copy>
            <div className="mt-7">
              <p className="text-3xl uppercase font-ppneune-medium">
                Driven by curiosity and disciplined craftsmanship. I build
                reliable, meaningful systems that sit at the intersection of
                thoughtful design, deep engineering, and a hacker’s instinct
                for how things break.
              </p>
            </div>

            <div className="mt-9">
              <p className="text-3xl uppercase font-ppneune-medium">
                As a full-stack and Python/Django developer with an interest in
                the offensive side of security, I explore both sides of the
                craft—creating new experiences, and understanding the cracks
                where systems fall apart.
              </p>
            </div>
          </Copy>
        </div>

        <div className="lg:flex lg:w-full lg:gap-8 lg:mt-20">
          <Copy>
            <p className="mt-12 text-xl font-ppneune-medium w-60 lg:w-[20vw]">
              Engineering with clarity, intent, and constant improvement.
            </p>
          </Copy>
          <div className="w-full lg:w-[25vw] lg:pr-10">
            <Copy>
              <p className="mt-12 text-xl font-ppneune-medium ">
                Self-taught and shaped by real-world challenges, I work with
                design-forward teams to build fast, modern web applications that
                balance aesthetics with performance. When something can be
                improved or automated, I do it—and when it’s valuable, I open
                source it so others can build on it.
              </p>
            </Copy>
            <div>
              <Copy>
              <p className="mt-8 text-xl font-ppneune-medium">
                 My experience spans full-stack product engineering, security-minded
                  development, and rapid problem solving across different stacks.
                  Every project is an opportunity to sharpen my tools and learn
                  something entirely new—because there is always a solution if
                  you're willing to explore.
            </p>
            </Copy>
            </div>
            <Link href={"/about"}>
              <p className="mt-8 lg:mt-15 text-xl font-ppneune-medium underline underline-offset-[30px] decoration-1">
                More about me and services
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
