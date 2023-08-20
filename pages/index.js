import Head from "next/head";
import Typewriter from "typewriter-effect";

import styles from "../styles/Home.module.css";
import Icons, { links } from "../Components/svg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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
            },
            {
              img: "/portfolio-1.png",
              name: "Portfolio",
              github: "Portfolio",
              // link: "",
            },
          ].map((project) => (
            <div className="project-card">
              <Image src={project.img} height="600" width="400" />
              <div className="project-details">
                <h2>{project.name} </h2>

                <div className="icons">
                  <div className="icon cursor-pointer">
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
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                    >
                      <path
                        fill="#F0DB4F"
                        d="M1.408 1.408h125.184v125.185h-125.184z"
                      />
                      <path
                        fill="#323330"
                        d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                      />
                      <div
                        xmlns=""
                        id="divScriptsUsed"
                        style={{ display: "none" }}
                      />
                      <script
                        xmlns=""
                        id="globalVarsDetection"
                        src="chrome-extension://cmkdbmfndkfgebldhnkbfhlneefdaaip/js/wrs_env.js"
                      />
                    </svg>
                  </div>
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
