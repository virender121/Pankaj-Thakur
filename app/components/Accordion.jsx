"use client";

import { useState } from "react";
import { servicesData } from "../constant";
import CharReveal from "./CharReveal";

const Accordion = () => {
  // State to keep track of the currently open accordion item's ID.
  // We initialize it to null, so all items are closed by default.
  const [openId, setOpenId] = useState(null);

  // This function handles the click event on an accordion item.
  const handleToggle = (id) => {
    // If the clicked item is already open, close it by setting state to null.
    // Otherwise, set the state to the ID of the clicked item.
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="mt-30">
      <div className="text-xl font-ppneune-medium lg:flex">
        <h1>02/</h1>
        <CharReveal delay={1.5}>
          <h1 className="mt-8 lg:mt-0 uppercase font-ppneune-medium text-[11.2dvw] leading-[9.8dvw] lg:text-[9dvw] lg:leading-[7.8dvw] lg:ml-[12vw]">
          Services
        </h1>
        </CharReveal>
      </div>

      <div className="border-t border-black mt-12 text-xl font-ppneune-medium lg:ml-[14vw] lg:mt-30">
        {servicesData.map((item) => {
          // Check if the current item is the one that's open
          const isOpen = item.id === openId;

          return (
            <div
              key={item.id}
              className="py-8 lg:py-12 border-b border-black cursor-pointer"
              onClick={() => handleToggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <div>
                <div className="flex justify-between ">
                  <div className="flex">
                    <div className="hidden lg:block">{`0${item.id}`}</div>
                    <div className="lg:ml-[14vw]">
                      <h1>{item.title}</h1>
                      <div
                        id={`accordion-content-${item.id}`}
                        className={`grid transition-all duration-500 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="pt-5 lg:py-10 text-black lg:w-120">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Plus/Minus Icon */}
                  <div className="relative w-5 h-5 flex-shrink-0">
                    {/* Horizontal line (always visible) */}
                    <div className="w-full border h-px bg-black absolute top-1/2 -translate-y-1/2"></div>
                    {/* Vertical line (rotates to become horizontal, forming a minus sign) */}
                    <div
                      className={`h-full border w-px bg-black absolute left-1/2 -translate-x-1/2 transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-90" : "rotate-0"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Accordion;
