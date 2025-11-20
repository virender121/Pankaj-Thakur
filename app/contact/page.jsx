import Contact from "../(landingPage)/Contact";
import Footer from "../components/Footer";
import HeaderTitle from "../components/HeaderTitle";

const ContactPage = () => {
  return (
    <main
      id="title"
      className="flex flex-col min-h-screen py-7 px-5 md:py-6 md:px-12 lg:py-10 xl:px-18 bg-black"
    >
      <HeaderTitle contact={true}/>
      <Contact />
      <Footer classname={"text-white !mt-0"} />
    </main>
  );
};

export default ContactPage;
