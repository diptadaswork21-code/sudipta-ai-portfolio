"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {

  return (

    <main
      className="bg-black text-white"
      id="home"
    >

      <Navbar />


      {/* HERO SECTION */}

      <section
        className="
        min-h-[90vh]
        flex
        items-center
        justify-center
        px-6
        md:px-10
        pt-28
        pb-16
        "
      >

        <div
          className="
          max-w-6xl
          w-full
          grid
          md:grid-cols-2
          gap-12
          lg:gap-20
          items-center
          "
        >


          {/* LEFT SIDE */}

          <motion.div

            initial={{
              opacity: 0,
              y: 40
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.8,
              delay: 0.2
            }}

          >

            <h1
              className="
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              tracking-tight
              "
            >
              Sudipta Das
            </h1>


            <h2
              className="
              text-xl
              md:text-2xl
              mt-5
              text-gray-200
              "
            >
              AI Engineer | Machine Learning Developer
            </h2>


            <p
              className="
              mt-5
              text-gray-300
              text-base
              md:text-lg
              leading-relaxed
              "
            >
              Building intelligent systems with Machine Learning,
              Deep Learning, Generative AI, and Multimodal AI.
            </p>


            <p
              className="
              mt-5
              text-gray-400
              text-base
              md:text-lg
              leading-relaxed
              max-w-xl
              "
            >
              I design and develop AI solutions that transform data
              into meaningful insights and intelligent applications.
              My work focuses on applied machine learning,
              vision-language models, and research-driven approaches
              to solving real-world challenges.
            </p>


            {/* BUTTONS */}

            <div
              className="
              mt-8
              flex
              flex-wrap
              gap-3
              "
            >

              <a
                href="#projects"
                className="
                px-5
                py-3
                bg-white
                text-black
                rounded-xl
                font-medium
                hover:scale-105
                transition
                "
              >
                View Projects
              </a>


              <a
                href="/Sudipta_Das_CV.pdf"
                download
                className="
                px-5
                py-3
                border
                border-white
                rounded-xl
                hover:bg-white
                hover:text-black
                transition
                "
              >
                Download CV
              </a>


              <a
                href="https://github.com/diptadaswork21-code"
                target="_blank"
                rel="noopener noreferrer"
                className="
                px-5
                py-3
                border
                border-zinc-700
                rounded-xl
                hover:bg-zinc-900
                hover:border-white
                transition
                "
              >
                GitHub
              </a>


              <a
                href="https://linkedin.com/in/sudipta-das-0537212b3"
                target="_blank"
                rel="noopener noreferrer"
                className="
                px-5
                py-3
                border
                border-zinc-700
                rounded-xl
                hover:bg-zinc-900
                hover:border-white
                transition
                "
              >
                LinkedIn
              </a>

            </div>

          </motion.div>



          {/* PROFILE IMAGE */}

          <motion.div

            className="flex justify-center"

            initial={{
              opacity: 0,
              scale: 0.85
            }}

            animate={{
              opacity: 1,
              scale: 1
            }}

            transition={{
              duration: 0.8,
              delay: 0.4
            }}

          >

            <motion.img

              whileHover={{
                scale: 1.04
              }}

              transition={{
                duration: 0.3
              }}

              src="/images/profile.png"

              alt="Sudipta Das"

              className="
              w-72
              md:w-80
              lg:w-96
              rounded-3xl
              shadow-[0_0_40px_rgba(255,255,255,0.08)]
              border
              border-zinc-700
              "
            />

          </motion.div>


        </div>

      </section>


      <About />

      <Projects />

      <Research />

      <Skills />

      <Experience />

      <Contact />

      <Footer />


    </main>

  );

}