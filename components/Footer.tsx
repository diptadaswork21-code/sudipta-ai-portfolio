export default function Footer() {

  return (

    <footer
      className="
      bg-zinc-950
      border-t
      border-zinc-900
      py-8
      px-6
      text-center
      "
    >

      <p className="text-gray-500 text-sm">

        © {new Date().getFullYear()} Sudipta Das. All rights reserved.

      </p>


      <p className="text-gray-600 text-sm mt-2">

        Built with Next.js, React and Tailwind CSS.

      </p>

    </footer>

  );

}