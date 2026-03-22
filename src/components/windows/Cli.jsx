import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setWindowsState }) => {
  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        "Full-stack web developer (MERN) focused on building scalable apps, clean UI, and real-world solutions.",
    },

    skills: {
      description: "List technical skills",
      usage: "skills",
      fn: () =>
        "Frontend: React.js, JavaScript, HTML, CSS, Tailwind\n" +
        "Backend: Node.js, Express.js, REST APIs, JWT\n" +
        "Database: MongoDB, Oracle SQL (Basic)\n" +
        "Tools: Git, GitHub, Postman",
    },

    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () =>
        "1. JobDekho API - Node, Express, MongoDB (JWT Auth)\n" +
        "2. Instagram Clone - MERN (posts, likes, follow)\n" +
        "3. Figma Clone - HTML, CSS, JS (editor UI)",
    },

    experience: {
      description: "Display work experience",
      usage: "experience",
      fn: () =>
        "Frontend Intern @ Upnyx (Sep 2025 - Dec 2025)\n" +
        "- Built React + Tailwind UI\n" +
        "- Created post editor interfaces\n" +
        "- Implemented chat overlay editing",
    },

    contact: {
      description: "Get contact information",
      usage: "contact",
      fn: () =>
        "Email: methreamarnath@gmail.com\n" +
        "Phone: +91 7730883175\n" +
        "Location: Hyderabad, India",
    },

    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/methreamarnath1", "_blank");
        return "Opening GitHub...";
      },
    },

    linkedin: {
      description: "Open LinkedIn profile",
      usage: "linkedin",
      fn: () => {
        window.open("https://linkedin.com/in/amarnathmethre", "_blank");
        return "Opening LinkedIn...";
      },
    },

    portfolio: {
      description: "Open portfolio",
      usage: "portfolio",
      fn: () => {
        window.open("https://methreamarnath.vercel.app", "_blank");
        return "Opening portfolio...";
      },
    },

    resume: {
      description: "Download resume",
      usage: "resume",
      fn: () => {
        window.open("/resume.pdf", "_blank");
        return "Opening resume...";
      },
    },

    status: {
      description: "Show current status",
      usage: "status",
      fn: () =>
        "Role: Full-Stack Developer (MERN)\n" +
        "Experience: Frontend Intern @ Upnyx\n" +
        "Projects: 3+ production builds\n" +
        "Status: Open to Internships / Jobs",
    },

    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage =
    "========================================\n" +
    "   Methre Amarnath Portfolio CLI 🚀\n" +
    "========================================\n\n" +
    "Type 'help' to see commands\n\n" +
    "Try:\n" +
    "about | skills | projects | experience | contact\n";

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"amarnath:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
