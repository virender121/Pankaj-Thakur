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
                Passionate about web technologies. I love working at the
                intersection of creativity and user friendly interfaces. I
                create memorable web experiences.
              </p>
            </div>

            <div className="mt-9">
              <p className="text-3xl uppercase font-ppneune-medium">
                When I'm not building or exploring new web experiences, I'm
                probably playing games or watching anime.
              </p>
            </div>
          </Copy>
        </div>

        <div className="lg:flex lg:w-full lg:gap-8 lg:mt-20">
          <Copy>
            <p className="mt-12 text-xl font-ppneune-medium w-60 lg:w-[20vw]">
              A blend of UI and product engineering.
            </p>
          </Copy>
          <div className="w-full lg:w-[25vw] lg:pr-10">
            <Copy>
              <p className="mt-12 text-xl font-ppneune-medium ">
                With a background in web development and IT, I work with
                design-focused teams to build responsive modern web-apps and
                microsites for businesses and individuals that balance
                aesthetics with usability. My projects span both client work and
                academic work, giving me hands-on experience in real-world
                product development.
              </p>
            </Copy>
            <div>
              <Copy>
              <p className="mt-8 text-xl font-ppneune-medium">
              With my experience in freelance web development, I'm specialize in
              creating responsive, scalable, and user-friendly web experiences
              that solve product challenges while keeping design at the core.
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
