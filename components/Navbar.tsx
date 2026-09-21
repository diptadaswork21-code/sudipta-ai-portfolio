"use client";

import { useState } from "react";


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);


  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Skills", href: "#skills" },
    { name: "Experience & Education", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];


  return (

    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      bg-black/80
      backdrop-blur-md
      border-b
      border-zinc-900
      z-50
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        md:px-10
        py-5
        flex
        items-center
        justify-between
        md:justify-center
        "
      >


        {/* Mobile Logo */}

        <div className="md:hidden font-bold text-lg">
          Sudipta Das
        </div>



        {/* Desktop Menu */}

        <div
          className="
          hidden
          md:flex
          items-center
          justify-center
          gap-6
          lg:gap-8
          text-gray-300
          text-sm
          lg:text-base
          "
        >

          {links.map((link)=>(

            <a
              key={link.name}
              href={link.href}
              className="
              hover:text-white
              transition
              duration-300
              whitespace-nowrap
              "
            >

              {link.name}

            </a>

          ))}


        </div>




        {/* Mobile Button */}

        <button

          onClick={() => setMenuOpen(!menuOpen)}

          className="
          md:hidden
          text-2xl
          "

          aria-label="Toggle menu"

        >

          {menuOpen ? "✕" : "☰"}

        </button>



      </div>





      {/* Mobile Menu */}


      {menuOpen && (

        <div
          className="
          md:hidden
          bg-black
          border-t
          border-zinc-800
          px-6
          pb-6
          "
        >

          <div
            className="
            flex
            flex-col
            gap-5
            pt-5
            text-gray-300
            "
          >


            {links.map((link)=>(


              <a

                key={link.name}

                href={link.href}

                onClick={() => setMenuOpen(false)}

                className="
                hover:text-white
                transition
                "

              >

                {link.name}

              </a>


            ))}



          </div>


        </div>


      )}



    </nav>

  );

}