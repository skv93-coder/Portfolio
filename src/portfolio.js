import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/google.png";
import github from "./assets/img/icons/common/github.svg";
import airbnb from "./assets/img/icons/common/airbnbLogo.png";

export const greetings = {
  name: "Hanzla Tauqeer",
  title: "Hi all, I'm Shubham",
  description:
    "A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries.",
  resumeLink:
    "https://drive.google.com/file/d/105eTjLKF_lLZdEqpncdO9WvoLZFlj8Ec/view",
};

export const openSource = {
  githubUserName: "1hanzla100",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/1hanzla100",
  instagram: "https://www.instagram.com/1hanzla100",
  twitter: "https://twitter.com/1hanzla100",
  github: "https://github.com/1hanzla100",
  linkedin: "https://www.linkedin.com/in/hanzla-tauqeer-0869281ba/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase"),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },

    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },

    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
];

export const educationInfo = [
  {
    schoolName: "Guru Nanak Dev University",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2017 - April 2020",
    desc: "Participated in the various quiz and won many awards during my college time.",
    descBullets: [
      "Participated in the youth festival.",
      "Organized and participated blood donation camp.",
    ],
  },
];

export const experience = [
  {
    role: "React js developer",
    company: "Simbaquartz",
    companylogo: googlelogo,
    date: "February 2021 – Present",
    desc: "I am working on React and other cool libraries.",
    descBullets: [
      "Enhanced user experience and accomplish webpage objectives by creating site structure, navigation, page optimization, and graphic integration.",
      "Implemented enhancements that improved web functionality and responsiveness.",
    ],
  },
];

export const projects = [
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: "https://example.com",
  },
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    github: "https://github.com/1hanzla100",
  },
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    github: "https://github.com/1hanzla100",
    link: "https://example.com",
  },
];

export const feedbacks = [
  {
    name: "Hassan Mehmood",
    feedback:
      "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
  },
  {
    name: "Maheen Altaf",
    feedback:
      "the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
  },
];
