"use client";
import Image from "next/image";
import Copy from "./Copy";
import CharReveal from "./CharReveal";
import { useEffect, useState } from "react";
import { LucideLink } from "lucide-react";

const projects = [
  {
    id: 1,
    imgSrc: "/zodius-cover.jpg",
    href: "https://zodius.vercel.app",
    name: "Zodius",
    desc: "A web-app designed for gaming portfolio with loads of animation.",
    detailedDesc: `Zodius is a sleek, cosmic-themed
web app built with Next.js and
Tailwind CSS, featuring smooth
GSAP animations and a
mobile-first, responsive design.
Optimized for performance and
deployed on Vercel, this project
showcases modular components
and a modern, polished UI.`,
    bgColor: "#535e5a",
  },
  {
    id: 2,
    imgSrc: "/vector-cover.jpg",
    href: "https://vector-mojo.vercel.app",
    name: "Vector Mojo",
    desc: "A web-app designed for introducing different drinks with cool animation.",
    detailedDesc: `I developed a dynamic web-app using Next.js, TailwindCSS, and advanced GSAP animations. Key features include scroll-triggered animations, creative text effects with SplitText, video playback sync, and interactive sliders. Overcoming challenges in integrating GSAP with Next.js, this project enhanced my skills in performance, design, and immersive web experiences.`,
    bgColor: "#535e5a",
  },
  {
    id: 3,
    imgSrc: "/velocity.jpg",
    href: "https://velocity-studio.vercel.app",
    name: "Velocity Studio",
    desc: "Developed this portfolio web-app for a Pune based digital Marketing Agency",
    detailedDesc: `Built with Next.js, TailwindCSS, GSAP, and Framer Motion, this interactive portfolio highlights the digital marketing agency’s expertise. With fast load times, smooth animations, and a responsive design, it showcases Velocity’s innovative strategies and successful projects. Whether on desktop or mobile, the site offers a seamless, engaging experience.`,
    bgColor: "#535e5a",
  },
  {
    id: 4,
    imgSrc: "/venus.jpg",
    href: "https://venus-studio.vercel.app",
    name: "Creative Studio",
    desc: "Developed this portfolio web-app for a Fictional Creative Agency",
    detailedDesc: `Built with Next.js, TailwindCSS, GSAP, and Framer Motion, this interactive portfolio website showcases the creativity and visual identity of Venus Studio. With smooth parallax effects, elegant animations, and a responsive design, it delivers a seamless experience across all devices - reflecting the studio’s artistic vision and modern approach to digital design.`,
    bgColor: "#535e5a",
  },
];

const Project = () => {
  // State to track the currently selected project for the detail view
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset the style when the component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  // --- Handlers ---
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };
  return (
    <>
      <div className="mt-22 lg:mt-30">
        {projects.map((project) => (
          <div key={project.id} className="lg:flex lg:items-start lg:mt-20">
            <div className="mt-25 lg:w-1/2 lg:mt-0 sticky top-20 lg:top-25">
              <h1
                onClick={() => handleProjectClick(project)}
                className="uppercase font-ppneune-medium text-[11.2dvw] leading-[1.15] lg:text-[9dvw] lg:leading-[7.8dvw] underline underline-offset-6 decoration-4 lg:decoration-6 w-[56vw] lg:w-[45vw] cursor-pointer"
              >
                <CharReveal>
                  <a
                    // href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                </CharReveal>
              </h1>
              <Copy>
                <p className="w-80 uppercase text-xl font-ppneune-medium my-10">
                  {project.desc}
                </p>
              </Copy>
            </div>

            <div
              className="lg:w-1/2 cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <a
                // href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-full h-[45dvh] lg:h-[100dvh] overflow-hidden">
                  <Image
                    src={project.imgSrc}
                    alt="zodius-cover"
                    className="object-cover transition-all duration-200 hover:scale-110"
                    fill
                  />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`fixed top-0 left-0 h-dvh w-dvw bg-[#222] z-[2000] transition-all duration-700  ${
          selectedProject ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          backgroundColor: selectedProject ? selectedProject.bgColor : "#222",
        }}
      >
        <div className="relative top-0 left-0 h-full w-full py-10 px-6 lg:py-12 lg:px-12">
          <div className="flex justify-between font-ppneune-medium text-xl">
            <div className="text-white leading-[1.2] lg:flex lg:gap-[18vw]">
              <h1>Case study</h1>
              <h1 className="hidden lg:block">
                <a
                  href={selectedProject?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-6 decoration-3 flex items-center gap-2"
                >
                 <LucideLink className="size-4 lg:size-5" />  Visit live link 
                </a>
              </h1>
              <h1>{selectedProject?.name}</h1>
            </div>
            <div
              onClick={() => handleCloseDetail()}
              className="text-white cursor-pointer"
            >
              Close
            </div>
          </div>

          <div>
              <div className="mt-15 lg:w-[50vw] lg:mt-[18vh]">
                  <h1 className="text-xl lg:text-3xl text-white font-ppneune-medium">{selectedProject?.detailedDesc}</h1>
              </div>

              <h1 className="mt-10 text-gray-300 font-ppneune-medium text-lg underline underline-offset-4 lg:hidden"><a href={selectedProject?.href} target="_blank" rel="noopener noreferrer">Visit live link</a></h1>

              <div className="mt-20 text-white font-ppneune-medium text-lg lg:w-[50vw] lg:mt-[12vh]">
                <h1 className="pb-5 border-b-[0.5] uppercase">Project info</h1>
                <div>
                  <div className="border-b-[0.5] py-5 flex justify-between">
                    <h1>Role</h1>
                    <h1>Developer</h1>
                  </div>
                  <div className="border-b-[0.5] py-5 flex justify-between">
                    <h1>Year</h1>
                    <h1>2025</h1>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
