import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen bg-black flex items-start justify-center pt-16">
      <div className="container max-w-2xl mx-auto px-4">
        <section className="text-white text-center mb-10">
          <header>
            <h1 className="text-3xl font-bold mb-4">About me</h1>
          </header>
          <main>
            <p className="mb-6">
              Computer Science student at Unijorge University & Software
              Engineering Intern, I find joy in collaborative coding and
              building community. Beyond the keyboard, music is my solace.
            </p>
            <p className="mb-6">
              When I&apos;m not coding or listening to music, you might find me
              playing table tennis or trying to convince people to switch to
              Linux... 🐧
            </p>
            <div className="mb-6">
              View My{" "}
              <Link href="/CV.pdf" className="text-blue-500 text-lg">
                CV
              </Link>
            </div>
          </main>
          <footer>
            <p>
              Feel free to reach out if you&apos;re interested in collaborating
              on a project, discussing tech, or just saying hello. You can find
              me on{" "}
              <Link
                href="https://www.linkedin.com/in/mateusper"
                className="text-blue-500"
                aria-label="LinkedIn"
              >
                LinkedIn
              </Link>
              {" and "}
              <Link
                href="https://github.com/redyf"
                className="text-blue-500"
                aria-label="LinkedIn"
              >
                GitHub
              </Link>
              {", "}
              or drop me an{" "}
              <Link
                href="mailto:mateusalvespereira7@gmail.com"
                className="text-blue-500"
                aria-label="Email"
              >
                email
              </Link>
              .
            </p>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
