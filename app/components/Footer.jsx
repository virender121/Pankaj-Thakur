"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Footer = ({classname}) => {
  const footerRef = useRef();

  useGSAP(()=>{
    if(!footerRef.current) return;

    gsap.from(
      footerRef.current, {
        opacity: 0,
        // y: 50,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          once: true
        }
      },  
    )
  }, { scope: footerRef })
  return (
    <footer ref={footerRef} className={`mt-32 text-xl font-ppneune-medium leading-[1.1] lg:flex lg:justify-between lg:items-end lg:mt-[12rem] lg:mb-[3rem] ${classname}`}>
        <div>
          <h1>Pankaj Thakur</h1>
          <h1>Creative Developer</h1>
        </div>
        <div className="mt-5 lg:mt-0">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            Linkedin,
          </a>
          &nbsp;
          <a href="https://github.com/virender121" target="_blank" rel="noopener noreferrer">
            Github,
          </a>
          &nbsp;
          <a href="https://x.com/panku6688t" target="_blank" rel="noopener noreferrer">
            X
          </a>
        </div>
        <div className="mt-10 mb-5 lg:mt-0 lg:mb-0">
          <h1>Development By</h1>
          <h1>Pankaj Thakur</h1>
          {/* <h1>
            Inspiration{" "}
            <a
              href="https://www.richardekwonye.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Richard Ekwonye
            </a>
          </h1> */}
        </div>
      </footer>
  )
}

export default Footer