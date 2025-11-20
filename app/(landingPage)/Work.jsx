import React from "react";
import CharReveal from "../components/CharReveal";
import Copy from "../components/Copy";

const Work = () => {
  return (
    <div className="my-[22vh] lg:my-[30vh] lg:flex">
      <div className="text-xl font-ppneune-medium">01/</div>
      <div className="lg:ml-[12vw] lg:w-fit">
        <div className="mt-7 lg:mt-0">
          <CharReveal delay={0.2}>
            <h1 className="uppercase font-ppneune-medium text-[11.2dvw] leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw]">
            Projects <span className="text-xl align-top">02</span>
          </h1>
          </CharReveal>
        </div>

        <div className="mt-20 lg:mt-30 text-xl font-ppneune-medium lg:flex lg:justify-between">
          <Copy delay={0.3}>
          <h1 className="uppercase">Projects</h1>
            <p className="mt-5 lg:mt-0 lg:w-[25vw] lg:mr-[3vw]">
            A selected set of projects I've built with individuals and teams.
            This is a mix of personal, collaborative and client owned projects.
          </p>
          </Copy>
        </div>
      </div>
    </div>
  );
};

export default Work;
