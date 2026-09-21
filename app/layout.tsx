import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {

  title: "Sudipta Das | AI Engineer",

  description:
    "AI Engineer specializing in Machine Learning, Deep Learning, Generative AI, and Multimodal AI systems.",

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body>

        {children}

      </body>

    </html>

  );

}