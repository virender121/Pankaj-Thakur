import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import LenisScrollProvider from "./components/LenisScrollProvider";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pankaj Thakur | Full-Stack Web Developer | Building brunhaus | Eazee.ai",
  description:
    "Pankaj Thakur — Full-Stack Web Developer specializing in React.js, Next.js, and Node.js. I build high-performance, responsive, and scalable web applications using the MERN stack. Explore my projects, skills, and freelance work in modern web development, AI integration, and networking.",
  keywords: [
    "Pankaj Thakur",
    "Full Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "GSAP Animation",
    "Framer Motion",
    "MERN Stack Developer",
    "TailwindCSS",
    "Git & Github",
    "Freelance Web Developer",
    "Web Developer Portfolio",
    "Frontend Developer",
    "JavaScript Developer",
    "Web Development",
    "Freelance Projects",
    "AI Integration",
    "Networking",
  ],
  authors: [{ name: "Pankaj Thakur", url: "https://pankaj-thakur.vercel.app/" }],
  creator: "Pankaj Thakur",
  publisher: "Pankaj Thakur",
  openGraph: {
    title: "Pankaj Thakur | Full-Stack Web Developer",
    description:
      "I’m Pankaj Thakur, a Full-Stack Web Developer skilled in React.js, Next.js, and Node.js. Explore my portfolio, projects, and freelance web development work.",
    url: "https://pankaj-thakur.vercel.app/",
    siteName: "Pankaj Thakur Portfolio",
    images: [
      {
        url: "https://pankaj-thakur.vercel.app/pankaj-thumbnail.jpg", // update this with your actual preview image URL
        width: 1200,
        height: 630,
        alt: "Pankaj Thakur — Full-Stack Web Developer Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj Thakur | Full-Stack Web Developer",
    description:
      "Full-Stack Developer specializing in React.js, Next.js, and Node.js. Building high-performance and scalable web apps using the MERN stack.",
    creator: "@panku6688t", // optional — add if you have a Twitter handle
    
  },
  metadataBase: new URL("https://pankaj-thakur.vercel.app/"),
  alternates: {
    canonical: "https://pankaj-thakur.vercel.app/",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Navbar />
          <LenisScrollProvider>{children}</LenisScrollProvider>
          <SpeedInsights />
          <Analytics />
      </body>
    </html>
  );
}
