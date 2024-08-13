import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./UI/Hero";
import Services from "./UI/Services";
import Portfolio from "./UI/Portfolio";
import Contact from "./UI/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
