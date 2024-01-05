import Head from "next/head";
import Typewriter from "typewriter-effect";
import { useSearchParams } from "next/navigation";

import styles from "../styles/Home.module.css";
import Icons, { links, techLogo } from "../Components/svg";
import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState({});
  const [isNavVisible, setIsNavVisible] = useState(false);
  const handleNavClick = () => {
    setIsNavVisible((prev) => !prev);
  };
  const searchParams = useSearchParams();
  const isDev = searchParams.get("dev") === "true";
  return (
    <div className="pt-24">
      <Head>
        <title>Shubham Sharma--Portfolio</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Finger+Paint&family=Raleway&display=swap"
          rel="stylesheet"
        />

        <script src="https://cdn.tailwindcss.com"></script>
        <script src="http://code.almeros.com/code-examples/water-effect-canvas/watercanvas.js"></script>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <header
        className={`w-full ${styles.header_shadow} z-10 bg-white top-0 fixed`}
        style={{ transition: "all" }}
      >
        <div className={`flex w-full bg-white py-6 md:py-8 items-center	 `}>
          <div href="#default" className="w-4/5 md:w-3/5 header_left">
            <h2 className="text-2xl md:text-4xl	">Shubham Sharma</h2>
          </div>
          <nav className="w-2/5 header_nav hidden md:flex justify-around text-base">
            <div className="cursor-pointer  font-medium text-lg">Home</div>
            <div className="cursor-pointer font-medium text-lg">
              <a href="#about_me">About</a>
            </div>
            <div className="cursor-pointer font-medium text-lg">
              <a href="#projects">Projects</a>
            </div>
            <div className="cursor-pointer font-medium text-lg">
              <a href="#contact_me">Contact</a>
            </div>
          </nav>
          <button
            onClick={handleNavClick}
            className=" nav_breadcrumb md:hidden rounded ml-4"
          >
            <span className=""></span>
          </button>
        </div>
        <nav
          className={`md:hidden  header_left ${
            !isNavVisible ? "mobile_nav-collapse " : "mobile_nav-expand"
          } `}
          onClick={handleNavClick}
        >
          {/* [''] */}
          <div className="cursor-pointer  font-medium mb-2 text-lg">Home</div>
          <div className="cursor-pointer  font-medium mb-2 text-lg">
            <a href="#about_me">About</a>
          </div>
          <div className="cursor-pointer  font-medium mb-2 text-lg">
            <a href="#projects">Projects</a>
          </div>
          <div className="cursor-pointer  mb-2	 font-medium text-lg">
            <a href="#contact_me">Contact</a>
          </div>
        </nav>
      </header>

      <main className="main_body ">
        <div className="grid md:grid-cols-2 grid-cols-1	gap-y-6">
          <div className="flex items-center main_page">
            <div>
              <h1 className="text-2xl text-center md:text-justify font-normal">
                Hello! 👋 My name is
              </h1>
              <p className="text-5xl text-center md:text-justify finger_paint my-4 md:my-8 mr-4">
                Shubham Sharma
              </p>

              <h1
                className=" font-normal text-center md:text-justify text-2xl"
                style={{
                  color: "#0564bd",
                }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "I'm Full-Stack Developer",
                      "I Build Websites",
                      "I Solve Problems",
                    ],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: styles.wrapper,
                    cursorClassName: styles.wrapper,
                  }}
                />
              </h1>
              <div className="text-2xl flex justify-end md:justify-normal ">
                {links.map((r, i) => (
                  <div
                    key={r.link}
                    className={`py-12 pr-12 ${i !== 0 && "pl-12"}`}
                  >
                    <a href={r.link} target="_blank">
                      {r.icon}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex main_page items-center justify-center	">
            <div className="w-full flex justify-end" id="waterHolder">
              <img
                className="ml-7  "
                width="100%"
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                }}
                src="https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/875a25535f45_w480.webp"
              />
            </div>
          </div>
          <div id="about_me" className="my-10 mid__page">
            <p className="text-5xl finger_paint my-4 mx-2 text-center	">
              ABOUT ME
            </p>
            <div className="text-xl">
              <p>
                I'm a Fullstack Developer based in Amritsar who is passionate
                about delivering value to businesses through technology. I love
                the challenge of finding creative solutions to problems, and I
                enjoy collaborating with teams to achieve great results.
              </p>
              <p className="my-5">
                I am dedicated to keeping up-to-date with the latest
                technologies and trends to provide the best solutions.
              </p>
              <p>
                I pay great attention to detail in the design and development of
                my projects. My ultimate goal is to create software that is both
                user-friendly and impactful in achieving the objectives.
              </p>
            </div>
          </div>
          <div className="my-6 mid__page">
            <p className="text-5xl finger_paint text-center my-4 mx-2 items-center">
              SKILLS
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 md:pl-7">
              {Icons.map((r) => (
                <div
                  key={r.name}
                  className="flex items-end md:items-center p-3 md:p-5"
                >
                  <div className="h-12 w-12 flex items-center"> {r.icon}</div>
                  <div className="text-base ml-3 md:ml-6">{r.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center finger_paint text-5xl my-8" id="projects">
          PROJECTS
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 place-items-center	 gap-6 w-full">
          {[
            {
              img: "/math-clash-1.png",
              name: "Math clash, a game to test your speed. Try to select number before time finishes.",
              github: "Math-clash",
              link: "https://skv93-coder.github.io/Math-clash/",
              tech: ["js"],
              txtColor: "text-gray-100	",
            },
            {
              img: "/portfolio.png",
              name: "Portfolio website, To show different project i am working on.",
              github: "Portfolio",
              link: "https://portfolio-skv93-coder.vercel.app/",
              tech: ["vercel", "js"],
              txtColor: "project-overview",
            },
            {
              img: "/cigar.png",
              name: "Cigarette website, an amuseing way to track pollution.",
              github: "cigarette-i-smoked",
              link: "https://skv93-coder.github.io/cigarette-i-smoked/",
              txtColor: "project-overview",
              tech: ["js"],
            },
            {
              img: "/word-count-table.png",
              name: "A CLI tool, which operates like wc and shows info as table",
              github: "word-count-table",
              link: "",
              tech: ["js"],
              txtColor: "text-gray-100",
            },
          ].map((project) => (
            <div
              key={project.link}
              className="project-card relative"
              onMouseEnter={() => setIsVisible({ [project.img]: project.img })}
              onMouseLeave={() => setIsVisible({})}
            >
              <img src={`${project.img}`} className="h-auto w-full" />
              {isVisible[project.img] === project.img && (
                <>
                  <div className={`absolute top-0 animation bg-black`}></div>
                  <div className="absolute top-36 md:top-48  mx-auto w-full">
                    <p
                      className={`text-justify  mb-4 text-xl ${project.txtColor} md:text-2xl px-4`}
                    >
                      {project.name}
                    </p>
                    <div className=" mx-auto flex justify-center w-full ">
                      <a
                        className="project_links"
                        href={
                          "https://github.com/skv93-coder/" + project.github
                        }
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25px"
                          height="25px"
                          fill="currentColor"
                          viewBox="0 0 18 18"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                      </a>
                      {project.link && (
                        <a
                          target="_blank"
                          className="project_links ml-4"
                          href={project.link}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25px"
                            height="25px"
                            fill="currentColor"
                            viewBox="0 0 18 18"
                          >
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex w-full justify-around pb-4 items-center absolute bottom-0">
                    {project.tech.map((r) => (
                      <div key={r} title={r}>
                        {techLogo[r]}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        {isDev && (
          <>
            <p className="text-center finger_paint text-5xl my-8" id="projects">
              Work History
            </p>
            <div>
              <ol className=" border-s border-gray-200 dark:border-gray-700">
                {[
                  {
                    startedOn: "Feb 2021 - May 2022",
                    desgination: "Softwar devloper engineer",
                    description:
                      "I worked on multiple projects of the company. I solved many problems there such as multi page form",
                    TechStack: ["Reactjs", "Nodejs", "Mongodb", "PostgresSQL"],
                  },
                ].map((work) => (
                  <li className="mb-10 ms-4" key={work.description}>
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {work.startedOn}
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {work.desgination}
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      {work.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </>
        )}
        <p className="text-center finger_paint text-5xl my-8">Resume</p>
        <iframe
          src="/shubham_sharma_resume_.pdf"
          className="iframe__resume md:block hidden"
        />
        <a href="/shubham_sharma_resume_.pdf" target="_blank">
          <img src="/resume_icon.jpg" className="md:hidden block" />
        </a>
        <p className="text-center finger_paint text-5xl py-12" id="contact_me">
          CONTACT ME
        </p>
        <div className="md:grid md:grid-cols-3">
          <div className="flex items-center">
            <div>
              <p className="italic text-4xl mb-3">Have an idea ?</p>
              <p style={{ color: "#444f5a" }}>Let's make it true!</p>
            </div>
          </div>
          <div style={{ gridColumnStart: 2, gridColumnEnd: 4 }}>
            <form className="w-full">
              <div className="w-full md:flex justify-between">
                <input
                  placeholder="Name"
                  className="py-4 md:py-8 md:rounded-xl	 px-10 w-full md:w-3/6"
                  required
                />
                <input
                  placeholder="Email"
                  className="w-full md:w-3/6 md:rounded-xl md:ml-4 mt-10 md:mt-0 py-4 md:py-8 px-10"
                  required
                />
              </div>
              <input
                placeholder="Subject"
                className="py-4 md:py-8 px-10 md:rounded-xl w-full my-10"
                required
              />
              <textarea
                className="py-8 md:rounded-xl px-10 mb-6 w-full"
                rows="10"
                required
              />
              <div
                className="w-full flex justify-center md:justify-end mb-10	"
                placeholder="Message"
              >
                <button
                  disabled
                  title="It is not working right now"
                  type="submit"
                  className="text-white py-3 md:py-6 px-8 md:px-10  md:text-2xl text-xl rounded-3xl"
                  style={{
                    backgroundColor: "#0564bd",
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="py-10" style={{ background: "#444f5a" }}>
        <div
          className="flex justify-between main__body items-center"
          style={{
            padding: "0 15%",
          }}
        >
          <p className="text-white  md:text-3xl">
            Made with ❤️, By Shubham Sharma,
          </p>
        </div>
      </footer>
    </div>
  );
}
