"use client";

import { useState } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onFinish={() => setLoaded(true)} />}

      {loaded && (
        <>
          <Hero />
        </>
      )}
    </>
  );
}
