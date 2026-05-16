// ═══════════════════════ DATA ═══════════════════════
const ME = {
  name: "Methre Amarnath",
  role: "Full Stack Developer",
  location: "Hyderabad, India",
  email: "methreamarnath@gmail.com",
  phone: "+91 7730883175",
  linkedin: "linkedin.com/in/amarnathmethre",
  github: "github.com/methreamarnath1",
  site: "methreamarnath.vercel.app",
  summary: `Full Stack Web Developer specializing in the MERN stack.
I build responsive, scalable web applications with REST APIs,
JWT authentication, and clean code practices.
Currently pursuing B.Tech CSE (2026) at AAR Mahaveer Engineering College.
Open to full-time Software Developer roles.`,
  skills: {
    Languages: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3", "SQL"],
    Frontend: ["React.js", "Tailwind CSS", "Responsive Web Design"],
    Backend: ["Node.js", "Express.js", "REST API Design", "Middleware"],
    Databases: ["MongoDB (NoSQL)", "Oracle SQL"],
    Auth: ["JWT", "Role-Based Access Control (RBAC)"],
    DevOps: ["Git", "GitHub", "Vercel", "Render", "Postman", "VS Code"],
    Libraries: ["Multer", "ImageKit", "npm Packages"],
    Concepts: ["DSA", "OOP", "Agile", "SDLC"],
  },
  projects: [
    {
      name: "JOBDEKHO",
      desc: "Production-ready RESTful Job Management API",
      tech: "Node.js · Express.js · MongoDB · JWT · REST API",
      highlights: [
        "Architected scalable REST API with MongoDB for NoSQL data storage",
        "Implemented JWT-based auth with role-based authorization (RBAC)",
        "Designed full CRUD endpoints with centralized error handling & middleware",
      ],
      github: "github.com/methreamarnath1/jobdekho",
      live: "https://jobdekho-61p9.onrender.com",
    },
    {
      name: "URL SHORTENER",
      desc: "Full Stack URL Shortening Service — MERN Stack",
      tech: "Node.js · Express.js · MongoDB · JWT · React.js",
      highlights: [
        "Built & deployed full-stack URL shortener with efficient link generation",
        "Secured with JWT auth enabling personalized short URL management",
        "Real-time analytics dashboard — click counts, usage trends, engagement",
      ],
      github: " github.com/methreamarnath1/urlshortener",
      live: "https://urlshortener-y6fx.onrender.com",
    },
  ],
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "Upnyx — AIWorkSquad.com",
      period: "Sep 2025 – Dec 2025",
      location: " remote-work, India",
      points: [
        "Engineered 5+ reusable, responsive UI components in React.js & Tailwind CSS",
        "Built social media post editor interfaces from requirement to production",
        "Collaborated in Agile environment — code reviews, iterative development",
      ],
    },
  ],
  education: [
    {
      deg: "B.Tech — Computer Science & Engineering",
      inst: "AAR Mahaveer Engineering College (JNTUH)",
      period: "2022 – 2026",
      grade: "CGPA: 7.96/10",
    },
    {
      deg: "Intermediate — MPC",
      inst: "Gayathri Junior College, Hyderabad",
      period: "2020 – 2022",
      grade: "CGPA: 7.32/10",
    },
    {
      deg: "SSC",
      inst: "Pioneer Concept School, Hyderabad",
      period: "Completed 2020",
      grade: "Percentage: 97%",
    },
  ],
};

// ═══════════════════════ ASCII ART ═══════════════════════
const ART = {
  METHRE: [
    " ███╗   ███╗███████╗████████╗██╗  ██╗██████╗ ███████╗",
    " ████╗ ████║██╔════╝╚══██╔══╝██║  ██║██╔══██╗██╔════╝",
    " ██╔████╔██║█████╗     ██║   ███████║██████╔╝█████╗  ",
    " ██║╚██╔╝██║██╔══╝     ██║   ██╔══██║██╔══██╗██╔══╝  ",
    " ██║ ╚═╝ ██║███████╗   ██║   ██║  ██║██║  ██║███████╗",
    " ╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝",
  ],
  AMARNATH: [
    "  █████╗ ███╗   ███╗ █████╗ ██████╗ ███╗   ██╗ █████╗ ████████╗██╗  ██╗",
    " ██╔══██╗████╗ ████║██╔══██╗██╔══██╗████╗  ██║██╔══██╗╚══██╔══╝██║  ██║",
    " ███████║██╔████╔██║███████║██████╔╝██╔██╗ ██║███████║   ██║   ███████║",
    " ██╔══██║██║╚██╔╝██║██╔══██║██╔══██╗██║╚██╗██║██╔══██║   ██║   ██╔══██║",
    " ██║  ██║██║ ╚═╝ ██║██║  ██║██║  ██║██║ ╚████║██║  ██║   ██║   ██║  ██║",
    " ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝",
  ],
  HELLO: [
    "  ██╗  ██╗███████╗██╗     ██╗      ██████╗ ██╗",
    "  ██║  ██║██╔════╝██║     ██║     ██╔═══██╗██║",
    "  ███████║█████╗  ██║     ██║     ██║   ██║██║",
    "  ██╔══██║██╔══╝  ██║     ██║     ██║   ██║╚═╝",
    "  ██║  ██║███████╗███████╗███████╗╚██████╔╝██╗",
    "  ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝",
  ],
  JOBDEKHO: [
    "     ██╗ ██████╗ ██████╗ ██████╗ ███████╗██╗  ██╗██╗  ██╗ ██████╗ ",
    "     ██║██╔═══██╗██╔══██╗██╔══██╗██╔════╝██║ ██╔╝██║  ██║██╔═══██╗",
    "     ██║██║   ██║██████╔╝██║  ██║█████╗  █████╔╝ ███████║██║   ██║",
    "██   ██║██║   ██║██╔══██╗██║  ██║██╔══╝  ██╔═██╗ ██╔══██║██║   ██║",
    "╚█████╔╝╚██████╔╝██████╔╝██████╔╝███████╗██║  ██╗██║  ██║╚██████╔╝",
    " ╚════╝  ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ",
  ],
  URLSHORTENER: [
    " ██╗   ██╗██████╗ ██╗     ███████╗██╗  ██╗ ██████╗ ██████╗ ████████╗███████╗███╗   ██╗███████╗██████╗",
    " ██║   ██║██╔══██╗██║     ██╔════╝██║  ██║██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝████╗  ██║██╔════╝██╔══██╗",
    " ██║   ██║██████╔╝██║     ███████╗███████║██║   ██║██████╔╝   ██║   █████╗  ██╔██╗ ██║█████╗  ██████╔╝",
    " ██║   ██║██╔══██╗██║     ╚════██║██╔══██║██║   ██║██╔══██╗   ██║   ██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗",
    " ╚██████╔╝██║  ██║███████╗███████║██║  ██║╚██████╔╝██║  ██║   ██║   ███████╗██║ ╚████║███████╗██║  ██║",
    "  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝",
  ],
};

// ═══════════════════════ HELPERS ═══════════════════════
const out = document.getElementById("output");
const inp = document.getElementById("cmd-input");
const tbody = document.getElementById("term-body");
const tw = document.getElementById("terminal-window");

const mobile = () => window.innerWidth <= 600;

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function ln(html, cls = "") {
  const d = document.createElement("div");
  d.className = "line " + cls;
  d.innerHTML = html;
  out.appendChild(d);
}
function blank() {
  ln("");
}
function scroll() {
  tbody.scrollTop = tbody.scrollHeight;
}
function echoCmd(cmd) {
  ln(
    `<span class="g">C:\\Portfolio&gt;</span> <span class="w">${esc(cmd)}</span>`,
  );
}

// Render an ascii block (large art hidden on mobile, fallback text shown)
function artBlock(lines, fallbackLabel) {
  // ascii lines (hidden on mobile via CSS)
  lines.forEach((l) => {
    const d = document.createElement("div");
    d.className = "ascii-line";
    d.textContent = l;
    out.appendChild(d);
  });
  // fallback shown only on mobile
  const fb = document.createElement("div");
  fb.className = "ascii-fb";
  fb.innerHTML = fallbackLabel;
  out.appendChild(fb);
}

// ═══════════════════════ COMMANDS ═══════════════════════
const CMDS = {
  help() {
    blank();
    ln(
      `<span class="g">╔════════════════════════════════════════════════╗</span>`,
    );
    ln(
      `<span class="g">║</span>  <span class="y bold">COMMANDS — Type any or tap a button</span>       <span class="g">║</span>`,
    );
    ln(
      `<span class="g">╠════════════════════════════════════════════════╣</span>`,
    );
    [
      ["about", "Who am I?"],
      ["skills", "Tech stack & tools"],
      ["projects", "What I built"],
      ["experience", "Work history"],
      ["education", "Academic background"],
      ["contact", "Get in touch"],
      ["resume", "Download resume (PDF)"],
      ["clear", "Clear terminal"],
    ].forEach(([c, d]) => {
      ln(
        `<span class="g">║</span>  <span class="c bold">${c.padEnd(11)}</span><span class="gr">—</span>  <span class="w">${d}</span>`,
      );
    });
    ln(
      `<span class="g">╚════════════════════════════════════════════════╝</span>`,
    );
    blank();
    renderQBtns();
  },

  about() {
    blank();
    artBlock(ART.METHRE, `<span class="g2">▶▶ METHRE</span>`);
    blank();
    artBlock(ART.AMARNATH, `<span class="g2">▶▶ AMARNATH</span>`);
    blank();
    ln(
      `  <span class="y">Name</span>      <span class="gr">│</span>  <span class="g bold">${ME.name}</span>`,
    );
    ln(
      `  <span class="y">Role</span>      <span class="gr">│</span>  <span class="c">${ME.role}</span>`,
    );
    ln(
      `  <span class="y">Location</span>  <span class="gr">│</span>  📍 ${ME.location}`,
    );
    ln(
      `  <span class="y">Status</span>    <span class="gr">│</span>  <span class="g">● Open to work</span>  <span class="gr">(Jun 2026+)</span>`,
    );
    blank();
    ln(
      `<span class="gr">┌─ About Me ──────────────────────────────────┐</span>`,
    );
    ME.summary
      .split("\n")
      .forEach((l) =>
        ln(`<span class="gr">│</span>  <span class="w">${l}</span>`),
      );
    ln(
      `<span class="gr">└─────────────────────────────────────────────┘</span>`,
    );
    blank();
  },

  skills() {
    blank();
    ln(
      `<span class="c bold">  ╔══ TECH STACK ══════════════════════════╗</span>`,
    );
    blank();
    for (const [cat, items] of Object.entries(ME.skills)) {
      ln(`  <span class="y bold">${cat}</span>`);
      items.forEach((i) =>
        ln(`    <span class="g">▸</span> <span class="w">${i}</span>`),
      );
      blank();
    }
    ln(
      `<span class="gr">  Level: </span><span class="g">████████████</span>  <span class="w">Advanced — MERN</span>`,
    );
    blank();
  },

  projects() {
    blank();
    ME.projects.forEach((p, i) => {
      const artKey = p.name === "JOBDEKHO" ? "JOBDEKHO" : "URLSHORTENER";
      artBlock(ART[artKey], `<span class="g2 bold">▶ ${p.name}</span>`);
      blank();
      ln(
        `  <span class="y">Desc</span>   <span class="gr">→</span>  <span class="w">${p.desc}</span>`,
      );
      ln(
        `  <span class="y">Stack</span>  <span class="gr">→</span>  <span class="p">${p.tech}</span>`,
      );
      blank();
      ln(`  <span class="c">Key Highlights:</span>`);
      p.highlights.forEach((h) =>
        ln(`  <span class="gr">├─</span> <span class="w">${h}</span>`),
      );
      blank();
      if (p.live)
        ln(
          `  <span class="y">Live</span>   <span class="gr">→</span>  <span class="b"><a href="https://${p.live}" target="_blank" style="color:var(--blue);text-decoration:none">${p.live}</a></span>`,
        );
      ln(
        `  <span class="y">GitHub</span> <span class="gr">→</span>  <span class="b"><a href="https://${p.github}" target="_blank" style="color:var(--blue);text-decoration:none">${p.github}</a></span>`,
      );
      blank();
      if (i < ME.projects.length - 1) {
        ln(
          `<span class="dim">  ──────────────────────────────────────────</span>`,
        );
        blank();
      }
    });
  },

  experience() {
    blank();
    ln(
      `<span class="c bold">  ╔══ WORK EXPERIENCE ═══════════════════╗</span>`,
    );
    blank();
    ME.experience.forEach((e) => {
      ln(`  <span class="g bold">● ${e.role}</span>`);
      ln(`    <span class="y">${e.company}</span>`);
      ln(
        `    <span class="p">${e.period}</span>  <span class="gr">|</span>  📍 ${e.location}`,
      );
      blank();
      e.points.forEach((pt) =>
        ln(`    <span class="gr">└─</span> <span class="w">${pt}</span>`),
      );
      blank();
    });
  },

  education() {
    blank();
    ln(
      `<span class="c bold">  ╔══ EDUCATION ══════════════════════════╗</span>`,
    );
    blank();
    ME.education.forEach((e, i) => {
      ln(`  <span class="y bold">${e.deg}</span>`);
      ln(`  <span class="w">${e.inst}</span>`);
      ln(
        `  <span class="p">${e.period}</span>  <span class="gr">│</span>  <span class="g">${e.grade}</span>`,
      );
      if (i < ME.education.length - 1) {
        blank();
        ln(`  <span class="gr">──────────────────────────────────────</span>`);
        blank();
      }
    });
    blank();
  },

  contact() {
    blank();
    ln(`<span class="g">  ┌──────────────────────────────────────────┐</span>`);
    ln(
      `<span class="g">  │</span>  <span class="c bold">Let's connect! I'd love to hear from you.</span>  <span class="g">│</span>`,
    );
    ln(`<span class="g">  └──────────────────────────────────────────┘</span>`);
    blank();
    ln(
      `  <span class="y">📧 Email</span>     <span class="gr">→</span>  <span class="b"><a href="mailto:${ME.email}" style="color:var(--blue);text-decoration:none">${ME.email}</a></span>`,
    );
    ln(
      `  <span class="y">📱 Phone</span>     <span class="gr">→</span>  <span class="w">${ME.phone}</span>`,
    );
    ln(
      `  <span class="y">💼 LinkedIn</span>  <span class="gr">→</span>  <span class="b"><a href="https://${ME.linkedin}" target="_blank" style="color:var(--blue);text-decoration:none">${ME.linkedin}</a></span>`,
    );
    ln(
      `  <span class="y">🐱 GitHub</span>    <span class="gr">→</span>  <span class="b"><a href="https://${ME.github}" target="_blank" style="color:var(--blue);text-decoration:none">${ME.github}</a></span>`,
    );
    ln(
      `  <span class="y">🌐 Website</span>   <span class="gr">→</span>  <span class="b"><a href="https://${ME.site}" target="_blank" style="color:var(--blue);text-decoration:none">${ME.site}</a></span>`,
    );
    blank();
    ln(`  <span class="g">● Available for full-time roles — June 2026</span>`);
    ln(`  <span class="gr">  Response time: within 24 hours</span>`);
    blank();
  },

  resume() {
    blank();
    ln(`  <span class="y">Preparing resume download...</span>`);
    blank();
    setTimeout(() => {
      document.getElementById("dl-modal").style.display = "flex";
    }, 500);
  },

  clear() {
    out.innerHTML = "";
    showWelcome();
  },
};

// ═══════════════════════ QUICK BTNS ═══════════════════════
function renderQBtns() {
  const qb = document.getElementById("qbtns");
  qb.innerHTML = "";
  [
    "about",
    "skills",
    "projects",
    "experience",
    "education",
    "contact",
    "resume",
    "clear",
  ].forEach((c) => {
    const b = document.createElement("button");
    b.className = "qbtn";
    b.textContent = c;
    b.onclick = () => runCmd(c);
    qb.appendChild(b);
  });
}

// ═══════════════════════ WELCOME ═══════════════════════
function showWelcome() {
  blank();
  artBlock(ART.HELLO, `<span class="g2 bold">▶ HELLO!</span>`);
  blank();
  ln(
    `  <span class="w">Welcome to</span> <span class="g bold">Methre Amarnath's</span> <span class="w">portfolio.</span>`,
  );
  ln(
    `  <span class="c">Full Stack Dev</span>  <span class="gr">|</span>  <span class="p">MERN Stack</span>  <span class="gr">|</span>  <span class="y">Hyderabad</span>`,
  );
  blank();
  ln(`  <span class="gr">Portfolio OS v3.0 — Booted successfully.</span>`);
  ln(`  <span class="gr">Type a command or tap a button below.</span>`);
  blank();
  CMDS.help();
}

// ═══════════════════════ RUN CMD ═══════════════════════
function runCmd(raw) {
  const cmd = raw.trim().toLowerCase();
  echoCmd(raw.trim());
  if (CMDS[cmd]) CMDS[cmd]();
  else if (cmd === "") blank();
  else {
    blank();
    ln(
      `  <span class="r">ERROR:</span> <span class="w">'${esc(cmd)}' not recognized.</span>`,
    );
    ln(
      `  <span class="gr">Type </span><span class="c">help</span><span class="gr"> for commands.</span>`,
    );
    blank();
  }
  inp.value = "";
  scroll();
}
inp.addEventListener("keydown", (e) => {
  if (e.key === "Enter") runCmd(inp.value);
});
// tap body on mobile → focus input
tbody.addEventListener("click", () => {
  if (window.getSelection().toString() === "") inp.focus();
});

// ═══════════════════════ WINDOW CONTROLS ═══════════════════════
let isMin = false,
  isMax = false;

document.getElementById("minimize-btn").onclick = () => {
  if (isMin) {
    tw.style.display = "flex";
    isMin = false;
  } else {
    tw.style.display = "none";
    isMin = true;
  }
};
document.getElementById("maximize-btn").onclick = () => {
  if (isMax) {
    tw.classList.remove("maximized");
    document.getElementById("maximize-btn").textContent = "□";
    isMax = false;
  } else {
    tw.style.display = "flex";
    tw.classList.add("maximized");
    document.getElementById("maximize-btn").textContent = "❐";
    isMax = true;
    isMin = false;
  }
  inp.focus();
  scroll();
};
document.getElementById("close-btn").onclick = () => {
  tw.style.display = "none";
  isMin = false;
  isMax = false;
  tw.classList.remove("maximized");
};

// drag (desktop only, not on mobile)
(() => {
  const tb = document.getElementById("titlebar");
  let drag = false,
    ox = 0,
    oy = 0;
  tb.addEventListener("mousedown", (e) => {
    if (isMax || mobile()) return;
    drag = true;
    const r = tw.getBoundingClientRect();
    ox = e.clientX - r.left;
    oy = e.clientY - r.top;
  });
  document.addEventListener("mousemove", (e) => {
    if (!drag) return;
    tw.style.left = e.clientX - ox + "px";
    tw.style.top = e.clientY - oy + "px";
    tw.style.transform = "none";
  });
  document.addEventListener("mouseup", () => {
    drag = false;
  });
})();

// ═══════════════════════ ICON — SINGLE CLICK ═══════════════════════
document.getElementById("open-terminal").onclick = () => {
  tw.style.display = "flex";
  isMin = false;
  inp.focus();
};

function toggleTerminal() {
  if (tw.style.display === "flex") {
    tw.style.display = "none";
    isMin = true;
  } else {
    tw.style.display = "flex";
    isMin = false;
    inp.focus();
  }
}

// ═══════════════════════ DOWNLOAD ═══════════════════════
function closeDlModal() {
  document.getElementById("dl-modal").style.display = "none";
}
function doDownload() {
  closeDlModal();
  const a = document.createElement("a");
  a.href = "Methre_Amarnath_Resume.pdf";
  a.download = "Methre_Amarnath_Resume.pdf";
  a.click();
  blank();
  ln(`  <span class="g">✓ Downloading Methre_Amarnath_Resume.pdf...</span>`);
  blank();
  scroll();
}

// ═══════════════════════ CLOCK ═══════════════════════
function updateClock() {
  document.getElementById("clock").textContent = new Date().toLocaleTimeString(
    [],
    { hour: "2-digit", minute: "2-digit" },
  );
}
setInterval(updateClock, 1000);
updateClock();

// ═══════════════════════ BOOT ═══════════════════════
const bootMsgs = [
  "Initializing system...",
  "Loading portfolio.exe...",
  "Mounting file system...",
  "Authenticating Methre Amarnath...",
  "Loading project data...",
  "Starting terminal — v3.0...",
];
const bar = document.getElementById("boot-bar");
const bmsg = document.getElementById("boot-msg");
let step = 0;

function bootStep() {
  if (step >= bootMsgs.length) {
    setTimeout(() => {
      const boot = document.getElementById("boot");
      boot.style.transition = "opacity 0.8s";
      boot.style.opacity = "0";
      setTimeout(() => {
        boot.style.display = "none";
        document.getElementById("desktop").style.display = "flex";
        setTimeout(() => {
          tw.style.display = "flex";
          showWelcome();
          inp.focus();
          scroll();
        }, 600);
      }, 800);
    }, 400);
    return;
  }
  bmsg.textContent = bootMsgs[step];
  bar.style.width = ((step + 1) / bootMsgs.length) * 100 + "%";
  step++;
  setTimeout(bootStep, 520 + Math.random() * 280);
}
setTimeout(bootStep, 800);
