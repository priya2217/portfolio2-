// ===== CUSTOM CURSOR =====
const cur = document.getElementById("cur");
const ring = document.getElementById("cur-ring");
let mx = -100,
  my = -100,
  rx = -100,
  ry = -100;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = mx + "px";
  cur.style.top = my + "px";
});

(function animRing() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(animRing);
})();

document
  .querySelectorAll(
    "a, button, .proj-card, .a-card, .exp-row, .edu-row, .cert-card, .c-item, .skill-box",
  )
  .forEach((el) => {
    el.addEventListener("mouseenter", () => document.body.classList.add("hov"));
    el.addEventListener("mouseleave", () =>
      document.body.classList.remove("hov"),
    );
  });

// ===== TYPEWRITER =====
const words = [
  "Full Stack Developer",
  "Problem Solver",
  "UI/UX Enthusiast",
  "Open Source Contributor",
];
let wi = 0,
  ci = 0,
  deleting = false;
const tw = document.getElementById("typewriter");

function type() {
  if (!tw) return;
  const word = words[wi];
  tw.textContent = deleting ? word.substring(0, ci--) : word.substring(0, ci++);
  if (!deleting && ci === word.length + 1) {
    deleting = true;
    setTimeout(type, 1500);
    return;
  }
  if (deleting && ci === 0) {
    deleting = false;
    wi = (wi + 1) % words.length;
  }
  setTimeout(type, deleting ? 50 : 90);
}
type();

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ===== NAV SCROLL EFFECT =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 160) current = s.id;
  });
  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) a.classList.add("active");
  });
});

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById("nav-toggle");
const navLinksEl = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navLinksEl.classList.toggle("open");
  const icon = navToggle.querySelector("i");
  icon.className = navLinksEl.classList.contains("open")
    ? "fas fa-times"
    : "fas fa-bars";
});

// Close mobile nav on link click
navLinks.forEach((a) => {
  a.addEventListener("click", () => {
    navLinksEl.classList.remove("open");
    navToggle.querySelector("i").className = "fas fa-bars";
  });
});

// ===== CONTACT FORM =====
const form = document.getElementById("contact-form");
const sendBtn = document.getElementById("send-btn");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("fname").value.trim();
  const email = document.getElementById("femail").value.trim();
  const msg = document.getElementById("fmsg").value.trim();

  if (!name || !email || !msg) return;

  sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  sendBtn.disabled = true;

  setTimeout(() => {
    sendBtn.innerHTML = '<i class="fas fa-check-circle"></i> Message Sent!';
    sendBtn.style.background = "transparent";
    sendBtn.style.color = "var(--accent2)";
    sendBtn.style.borderColor = "var(--accent2)";
    form.reset();
  }, 1500);
});

// ===== SKILL BARS ANIMATION (on scroll) =====
const skillBoxes = document.querySelectorAll(".skill-box");
const skillObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = "running";
      }
    });
  },
  { threshold: 0.2 },
);
skillBoxes.forEach((b) => skillObs.observe(b));

// ===== SMOOTH SCROLL for all anchor links =====
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ===== CONSOLE EASTER EGG =====
console.log(
  "%c Priya K | Full Stack Developer ",
  "background: #00C9FF; color: #050911; font-size: 14px; font-weight: bold; padding: 8px 16px; border-radius: 4px;",
);
console.log(
  "%c 📧 priya.26csb@licet.ac.in",
  "color: #00FFB3; font-size: 12px;",
);
console.log("%c 🐙 github.com/priya2217", "color: #00FFB3; font-size: 12px;");
