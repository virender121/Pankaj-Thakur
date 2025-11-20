"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const HeaderTitle = ({contact}) => {
  const navDataRef = useRef();

  useGSAP(()=>{
    gsap.fromTo(
      navDataRef.current,
      {
        // yPercent: -190,
        opacity: 0
      },
      { yPercent: 0, opacity: 1, duration: 0.6, delay:0.25, ease: "power3.in" }
    );
  })

  return (
    <div
      ref={navDataRef}
      className="hidden w-full lg:flex justify-center text-xl font-ppneune-medium font-medium md:text-2xl"
    >
      <div className="w-1/2 inline-flex relative left-[25vw]">
        <h1 className={`w-40 leading-[1] ${contact && "text-white"}`}>Currently a Freelancer</h1>
      </div>
      <div className="w-1/2">
        <h1 className={`w-40 leading-[1] ${contact && "text-white"}`}>Based in Himachal, India</h1>
      </div>
    </div>
  );
};

export default HeaderTitle;
