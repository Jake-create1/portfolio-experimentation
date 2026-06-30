/* ============================================================
   main.js — content + light enhancements
   Edit CASES below to manage your portfolio. No build step.
   ============================================================ */

// ── Your case studies. Add/remove freely; the hero strip shows the first 3. ──
const CASES = [
  {
    title: "Atlas Design System",
    tag: "Design Systems",
    year: "2025",
    href: "#", // link to a case study page or external write-up
  },
  {
    title: "Northwind Banking",
    tag: "0 → 1 Product",
    year: "2024",
    href: "#",
  },
  {
    title: "Spline Onboarding",
    tag: "Motion · 3D",
    year: "2024",
    href: "#",
  },
  {
    title: "Field Service Platform",
    tag: "Enterprise",
    year: "2023",
    href: "#",
  },
];

/* ---------- render hero strip (first 3) ---------- */
const strip = document.getElementById("caseStrip");
if (strip) {
  CASES.slice(0, 3).forEach((c, i) => {
    const li = document.createElement("li");
    li.className = "case-card";
    li.style.animationDelay = `${0.7 + i * 0.12}s`;
    li.innerHTML = `
      <span class="case-card__no">0${i + 1}</span>
      <a class="case-card__title" href="${c.href}">${c.title}</a>
      <span class="case-card__meta">
        <span class="case-card__tag">${c.tag}</span>
        <span class="case-card__arrow">↗</span>
      </span>`;
    li.addEventListener("click", () => { if (c.href) location.href = c.href; });
    strip.appendChild(li);
  });
}

/* ---------- render full work list ---------- */
const list = document.getElementById("workList");
if (list) {
  CASES.forEach((c, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a class="work-row" href="${c.href}">
        <span class="work-row__no">0${i + 1}</span>
        <span class="work-row__title">${c.title}</span>
        <span class="work-row__tag">${c.tag}</span>
        <span class="work-row__year">${c.year}</span>
      </a>`;
    list.appendChild(li);
  });
}

/* ---------- Spline: inject the viewer only when a scene URL is set ---------- */
const visual = document.querySelector(".hero__visual");
const splineUrl = visual?.dataset.splineUrl?.trim();
if (visual && splineUrl) {
  visual.classList.add("is-live");
  // load the web-component runtime once
  const s = document.createElement("script");
  s.type = "module";
  s.src = "https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js";
  document.head.appendChild(s);

  const viewer = document.createElement("spline-viewer");
  viewer.setAttribute("url", splineUrl);
  viewer.setAttribute("loading-anim-type", "none");
  // replace the fallback mesh + hint with the live scene
  visual.querySelector(".hero__mesh")?.remove();
  visual.querySelector(".hero__hint")?.remove();
  visual.appendChild(viewer);
}

/* ---------- reveal-on-load + on-scroll ---------- */
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ---------- footer year ---------- */
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
