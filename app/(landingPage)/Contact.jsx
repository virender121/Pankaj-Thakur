import Copy from "../components/Copy";

const links = [
  { id: 1, label: "Linkedin", href: "https://www.linkedin.com/in/" },
  { id: 2, label: "Github", href: "https://github.com/virender121" },
  { id: 3, label: "X / Twitter", href: "https://x.com/panku6688t" },
];

const Contact = () => {
  return (
    <div className="py-7 px-5 md:py-6 md:px-12 lg:py-10 xl:px-18">
      <div className="text-center text-white my-[25vh]">
        <div className="flex flex-col justify-center items-center gap-8">
          <h2 className="text-xl font-ppneune-medium uppercase">
            Send me a message
          </h2>
          <a href="mailto:panku6688t@gmail.com" target="_blank" rel="noopener noreferrer">
            <Copy>
              <h1
              className={`uppercase font-ppneune-medium text-[11.2dvw] leading-[1.18] lg:text-[9dvw] lg:leading-[1] underline underline-offset-6 decoration-3 lg:decoration-6 w-[60vw] lg:w-[95vw]`}
            >
              Connect with me @ Pankaj Thakur
            </h1>
            </Copy>
          </a>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 mt-35 lg:mt-50">
          <h2 className="text-xl font-ppneune-medium uppercase w-50">
            Or connect with me on socials
          </h2>
          <div
            className={`uppercase font-ppneune-medium text-[11.2dvw] leading-[1.18] lg:text-[9dvw] lg:leading-[1] underline underline-offset-6 decoration-3 lg:decoration-6`}
          >
            {links.map((link) => (
              <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer">
                <Copy>
                  <h1>{link.label}</h1>
                </Copy>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
