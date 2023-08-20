import Head from "next/head";
import Typewriter from "typewriter-effect";

import styles from "../styles/Home.module.css";
import Icons, { links, techLogo } from "../Components/svg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shubham Sharma--Portfolio</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
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
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <header
        className={`flex w-full py-8 items-center	 ${styles.header_shadow}`}
      >
        <div href="#default" style={{ paddingLeft: "15%" }} className="w-3/5">
          <h2 style={{ fontSize: "32px" }}>Shubham Sharma</h2>
        </div>
        <div
          className="w-2/5 flex justify-around text-base"
          style={{
            paddingRight: "15%",
          }}
        >
          <div className="cursor-pointer  font-medium text-sm">Home</div>
          <div className="cursor-pointer font-medium text-sm">
            <a href="#about_me">About</a>
          </div>
          <div className="cursor-pointer font-medium text-sm">
            <a href="#projects">Projects</a>{" "}
          </div>
          <div className="cursor-pointer font-medium text-sm">
            <a href="#contact_me">Contact</a>
          </div>
        </div>
      </header>

      <main style={{ margin: "0 15%" }}>
        <div className="grid grid-cols-2	gap-y-6">
          <div
            className="flex items-center"
            style={{
              height: "85vh",
            }}
          >
            <div>
              <h1 className="text-2xl finger_paint font-normal">
                Hello! 👋 My name is
              </h1>
              <p className="text-5xl my-8 mr-4">Shubham Sharma</p>

              <h1
                className=" font-normal text-2xl"
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
              <div className="text-2xl flex">
                {links.map((r, i) => (
                  <div className={`py-12 pr-12 ${i !== 0 && "pl-12"}`}>
                    <a href={r.link} target="_blank">
                      {r.icon}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-center	"
            style={{
              height: "85vh",
            }}
          >
            <div className="w-full flex justify-center">
              <img className="pl-8" width="70%" src="/img-12345.jpg" />
            </div>
          </div>
          <div id="about_me" className="my-10" style={{ height: "60vh" }}>
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
          <div className="my-6" style={{ height: "60vh" }}>
            <p className="text-5xl finger_paint text-center my-4 mx-2 items-center">
              SKILLS
            </p>
            <div className="grid grid-cols-3 pl-7">
              {Icons.map((r) => (
                <div className="flex items-center p-5">
                  <div className="h-12 w-12"> {r.icon}</div>
                  <div className="text-base ml-6">{r.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center finger_paint text-5xl my-8" id="projects">
          PROJECTS
        </p>
        <div className="grid grid-cols-2 gap-6 w-full">
          {[
            {
              img: "/math-clash-1.png",
              name: "MATH CLASH",
              github: "Math-clash",
              link: "https://skv93-coder.github.io/Math-clash/",
              tech: ["js"],
            },
            {
              img: "/portfolio-1.png",
              name: "Portfolio",
              github: "Portfolio",
              link: "https://portfolio-skv93-coder.vercel.app/",
              tech: ["vercel", "js"],
            },
          ].map((project) => (
            <div className="project-card">
              <Image src={project.img} height="600" width="400" />
              <div className="project-details">
                <h2>{project.name} </h2>

                <div className="icons">
                  <div className="icon icon_hover cursor-pointer">
                    <a
                      href={`https://github.com/skv93-coder/${project.github}`}
                      target="_blank"
                    >
                      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
                    </a>
                  </div>
                  {project.link && (
                    <div className="icon cursor-pointer">
                      <a target="_blank" href={project.link}>
                        <img src="5843.jpg" />
                      </a>
                    </div>
                  )}

                  {project.tech.map((r) => (
                    <div className="icon" title={r}>
                      {techLogo[r]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center finger_paint text-5xl py-12" id="contact_me">
          CONTACT ME
        </p>
        <div className="grid grid-cols-3">
          <div className="flex items-center">
            <div>
              <p className="italic text-4xl mb-3">Have an idea ?</p>
              <p style={{ color: "#444f5a" }}>Let's make it true!</p>
            </div>
          </div>
          <div style={{ gridColumnStart: 2, gridColumnEnd: 4 }}>
            <form className="w-full">
              <div className="w-full flex justify-between">
                <input
                  placeholder="Name"
                  className="py-8 rounded-xl	 px-10 w-3/6"
                  required
                />
                <input
                  placeholder="Email"
                  className="w-3/6 rounded-xl ml-4 py-8 px-10"
                  required
                />
              </div>
              <input
                placeholder="Subject"
                className="py-8 px-10 rounded-xl w-full my-10"
                required
              />
              <textarea className="py-8 px-10 mb-6 w-full" rows="10" required />
              <div className="w-full flex justify-end	" placeholder="Message">
                <button
                  type="submit"
                  className="text-white py-6 px-10 text-2xl rounded-3xl"
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
          className="flex justify-between items-center"
          style={{
            padding: "0 15%",
          }}
        >
          <p className="text-white  text-3xl">
            Made with ❤️, By Shubham Sharma,
          </p>
        </div>
      </footer>
    </div>
  );
}
