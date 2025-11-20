import Image from "next/image";
import About from "../(landingPage)/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Project from "../components/Project";
import ServicesAccordion from "../components/Accordion";
import HeaderTitle from "../components/HeaderTitle";

const AboutPage = () => {
  return (
    <main
      id="title"
      className="flex flex-col min-h-screen py-7 px-5 md:py-6 md:px-12 lg:py-10 xl:px-18"
    >
      <HeaderTitle />
      <About />
      <ServicesAccordion/>
      <section className="mt-52">
        <div className="text-xl font-ppneune-medium flex gap-30">
          <h1>03/</h1>
          <h1 className="w-20 uppercase">Recent Projects</h1>
        </div>
        <div className="lg:flex lg:items-start lg:mt-20">
          <div className="mt-25 lg:w-1/2 lg:mt-0 sticky top-20 lg:top-25">
            <h1 className="uppercase font-ppneune-medium text-[11.2dvw] leading-[1.15] lg:text-[9dvw] lg:leading-[7.8dvw] underline underline-offset-6 decoration-4 lg:decoration-6 w-50">
              <a
                href="https://zodius.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zodius
              </a>
            </h1>
            <p className="w-80 uppercase text-xl font-ppneune-medium my-10">
              A gaming like website with gsap creative web animation
            </p>
          </div>

          <div className="lg:w-1/2">
            <a
              href="https://zodius.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-full h-[45dvh] lg:h-[100dvh]">
                <Image
                  src="/zodius-cover.jpg"
                  alt="zodius-cover"
                  className="object-cover"
                  fill
                />
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="mt-48">
        <div className="text-xl font-ppneune-medium flex gap-30 lg:justify-between lg:mr-[20vw]">
          <h1>04/</h1>
          <h1 className="w-40 uppercase">want to work together?</h1>
          <h1 className="uppercase hidden lg:block lg:w-30">
            Send me a message
          </h1>
        </div>
        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage;
