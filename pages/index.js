import Head from "next/head";
import Typewriter from "typewriter-effect";

import styles from "../styles/Home.module.css";
import Icons from "../Components/svg";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isProjectVsisible, setIsProjectVsisible] = useState({});
  return (
    <div
    // style={{ height: "100vh", width: "100vw" }}
    >
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
      </Head>
      <header
        className={styles.header_shadow}
        style={{
          width: "100%",
          display: "flex",
          padding: "38px 0px",
          // backgroundColor: "red",
          alignItems: "center",
        }}
      >
        <div href="#default" style={{ width: "60%", paddingLeft: "15%" }}>
          <h2 style={{ fontSize: "32px" }}>Shubham Sharma</h2>
        </div>
        <div
          style={{
            width: "40%",
            display: "flex",
            justifyContent: "space-around",
            paddingRight: "15%",
            // color: "#444f5a",
            fontSize: "24px",
          }}
        >
          <div>Home</div>
          <div>About</div>
          <div> Projects</div>
          <div>Contact</div>
          <div>Blog</div>
        </div>
      </header>

      <main style={{ margin: "0 15%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "24px",
          }}
        >
          <div
            style={{
              padding: "",
              height: "85vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              <h1 style={{ fontWeight: "normal", fontSize: "2rem" }}>
                Hello! 👋 My name is
              </h1>
              <p
                style={{
                  fontSize: "44px",
                  margin: "16px 8px",
                  fontFamily: "Finger Paint,cursive",
                }}
              >
                Shubham Sharma
              </p>

              <h1
                style={{
                  color: "#0564bd",
                  fontWeight: "normal",
                  fontSize: "2rem",
                }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "I'm a Full-Stack Developer",
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
              <div
                style={{
                  fontSize: "2rem",
                  display: "flex",
                }}
              >
                {[
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.3em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>,
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.3em"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>,
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.3em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>,
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.3em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>,
                ].map((r, i) => (
                  <div
                    style={{ padding: i === 0 ? "3rem 3rem 3rem 0px" : "3rem" }}
                  >
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              height: "85vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                paddingLeft: "32px",
              }}
            >
              <img
                // width="100%"
                src="https://ahmedzougari.com/assets/ahmed_zougari.7d9292d3.png"
              />
            </div>
          </div>
          <div style={{ margin: "40px 0px", height: "60vh" }}>
            <p
              style={{
                fontSize: "44px",
                margin: "16px 8px",
                fontFamily: "Finger Paint,cursive",
                textAlign: "center",
              }}
            >
              ABOUT ME
            </p>
            <div
              style={{
                lineHeight: "1.5",
                fontSize: "20px", // textAlign: "center",
              }}
            >
              <p>
                I'm a Frontend Developer based in Morocco who is passionate
                about delivering value to businesses through technology. I love
                the challenge of finding creative solutions to problems, and I
                enjoy collaborating with teams to achieve great results.
              </p>
              <p style={{ margin: "20px 0px" }}>
                I am dedicated to keeping up-to-date with the latest
                technologies and trends to provide the best solutions for my
                clients.
              </p>
              <p>
                I pay great attention to detail in the design and development of
                my projects. My ultimate goal is to create software that is both
                user-friendly and impactful in achieving the client's
                objectives.
              </p>
            </div>
          </div>
          <div style={{ margin: "24px 0", height: "60vh" }}>
            <p
              style={{
                fontSize: "44px",
                margin: "16px 8px",
                fontFamily: "Finger Paint,cursive",
                textAlign: "center",
              }}
            >
              SKILLS
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                paddingLeft: "28px",
              }}
            >
              {Icons.map((r) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "18px",
                    // justifyContent: "space-around",
                  }}
                >
                  <div style={{ height: "50px", width: "50px" }}> {r.icon}</div>
                  <div style={{ fontSize: "16px", marginLeft: "24px" }}>
                    {r.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p
          style={{
            fontSize: "44px",
            fontFamily: "Finger Paint,cursive",
            textAlign: "center",
            marginTop: "32px",
            marginBottom: "32px",
          }}
        >
          PROJECTS
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            width: "100%",
          }}
        >
          <div className="project-card">
            <Image src="/math-clash-1.png" height="600" width="400" />
            <div className="project-details">
              <h2>MATH CLASH </h2>

              <div className="icons">
                <div style={{ cursor: "pointer" }} className="icon">
                  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
                </div>
                <div style={{ cursor: "pointer" }} className="icon">
                  <img src="5843.jpg" />
                </div>
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
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
            {/* <p>The game </p> */}
          </div>

          {/* <div style={{ height: "500px", width: "500px" }}></div> */}
        </div>
        <p
          style={{
            fontSize: "44px",
            fontFamily: "Finger Paint,cursive",
            textAlign: "center",
            margin: "48px 0px",
          }}
        >
          CONTACT ME
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <p
                style={{
                  fontSize: "36px",
                  fontStyle: "italic",
                  marginBottom: "10px",
                }}
              >
                Have an idea ?
              </p>
              <p style={{ color: "#444f5a" }}>Let's make it true!</p>
            </div>
          </div>
          <div style={{ gridColumnStart: 2, gridColumnEnd: 4 }}>
            <form style={{ width: "100%" }}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <input
                  placeholder="Name"
                  style={{
                    padding: "28px 38px",
                    width: "40%",
                    borderRadius: "10px",
                  }}
                />
                <input
                  placeholder="Email"
                  style={{
                    padding: "28px 38px",
                    width: "40%",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <input
                placeholder="Subject"
                style={{
                  padding: "28px 38px",
                  width: "92%",
                  borderRadius: "10px",
                  margin: "40px 0px",
                }}
              />
              <textarea
                style={{
                  padding: "28px 38px",
                  width: "92%",
                  margin: "0 0 24px 0",
                }}
                rows="10"
              />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
                placeholder="Message"
              >
                <button
                  style={{
                    padding: "16px 38px",
                    borderRadius: "32px",
                    fontSize: "22px",
                    backgroundColor: "#0564bd",
                    color: "white",
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer style={{ background: "#444f5a", padding: "2.5rem 0" }}>
        <div
          style={{
            padding: "0 15%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "white", lineHeight: "1.5", fontSize: "28px" }}>
            Made with ❤️, By Ahmed Zougari,
          </p>
          <div
            style={{
              display: "flex",
              color: "white",
              justifyContent: "space-between",
            }}
          >
            {[
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.3em"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>,
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.3em"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>,
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.3em"
                viewBox="0 0 512 512"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>,
            ].map((r, i) => (
              <div style={{ padding: i === 0 ? "3rem 3rem 3rem 0px" : "3rem" }}>
                {r}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
