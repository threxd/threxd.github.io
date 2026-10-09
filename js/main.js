/* ============================================================
   Nik Chavda — Portfolio
   Project data + gallery rendering.

   HOW TO ADD A PROJECT:
   1. Duplicate a page in /projects/ and fill in your content.
   2. Add an entry below. Fields:
      - slug: filename of the project page (without .html)
      - title: shown on cards (rendered in italics)
      - blurb: short description (shown on project pages, not cards)
      - date: "YYYY-MM-DD" — used for chronological sorting (newest
        first in every tab). For date ranges, use the END date here.
      - dateLabel: optional display text for ranges, e.g. "2017–2019"
      - categories: any of "disney", "social", "partnerships", "other"
      - recent: true to include in "Some Handpicked Bits"
      - pick: bespoke position within Some Handpicked Bits (1 = first);
        that tab uses this order, all other tabs stay chronological
      - image: optional path to a still, e.g. "assets/stills/frozen.jpg"
   ============================================================ */

const PROJECTS = [
  { slug: "hulu-on-disney-plus", title: "Hulu on Disney+", blurb: "Launch campaign introducing Hulu as part of the Disney+ experience.", date: "2026-07-01", categories: ["disney"], recent: true, pick: 1, image: "thumbnails/hulu-on-disney-plus.jpg" },
  { slug: "post-world-cup-post", title: "Post-World Cup Headlines", blurb: "Case study coming soon.", date: "2026-07-01", categories: ["social"], recent: true, pick: 5, image: "thumbnails/post-world-cup-post.jpg" },
  { slug: "first-and-last", title: "First & Last", blurb: "Case study coming soon.", date: "2026-04-01", categories: ["social"], recent: true, pick: 4, image: "thumbnails/first-and-last.jpg" },
  { slug: "world-of-frozen", title: "World of Frozen", blurb: "Brand campaign bringing Arendelle to life across every touchpoint.", date: "2026-03-01", categories: ["disney", "social"], recent: true, pick: 3, image: "thumbnails/world-of-frozen.jpg" },
  { slug: "christmas-2025", title: "Disney+ Christmas 2025", blurb: "Seasonal campaign across broadcast, digital and social.", date: "2025-12-01", categories: ["disney"], recent: false, image: "thumbnails/christmas-2025.jpg" },
  { slug: "alls-fair-reactive-spot", title: "All's Fair Reactive Spot", blurb: "Case study coming soon.", date: "2025-11-01", categories: ["social"], recent: false, image: "thumbnails/alls-fair-reactive-spot.jpg" },
  { slug: "alien-earth-disruptive-performance-spot", title: "Alien Earth Disruptive Performance Spot", blurb: "Case study coming soon.", date: "2025-07-01", categories: ["social"], recent: false, image: "thumbnails/alien-earth-disruptive-performance-spot.jpg" },
  { slug: "disney-plus-5th-anniversary", title: "Disney+ 5th Anniversary", blurb: "Case study coming soon.", date: "2025-03-01", categories: ["disney", "social"], recent: true, pick: 2, image: "thumbnails/disney-plus-5th-anniversary.jpg" },
  { slug: "long-running-dramas-on-disney-plus", title: "Long Running Dramas on Disney+", blurb: "Case study coming soon.", date: "2025-01-01", categories: ["disney", "social"], recent: false, image: "thumbnails/long-running-dramas-on-disney-plus.jpg" },
  { slug: "parental-controls-half-the-story", title: "Parental Controls “Half the Story”", blurb: "Case study coming soon.", date: "2024-04-01", categories: ["disney"], recent: false, image: "thumbnails/parental-controls-half-the-story.jpg" },
  { slug: "performance-annual-offer", title: "Performance Annual Offer", blurb: "Case study coming soon.", date: "2024-01-01", categories: ["disney"], recent: false, image: "thumbnails/performance-annual-offer.jpg" },
  { slug: "extraordinary-accolades-idea", title: "Extraordinary Accolades", blurb: "Case study coming soon.", date: "2023-09-01", categories: ["social"], recent: false, image: "thumbnails/extraordinary-accolades-idea.jpg" },
  { slug: "disney-plus-christmas-2022", title: "Disney+ Christmas 2022", blurb: "Case study coming soon.", date: "2022-12-01", categories: ["disney"], recent: false, image: "thumbnails/disney-plus-christmas-2022.jpg" },
  { slug: "summer-range-spot", title: "Summer Range Spot", blurb: "Case study coming soon.", date: "2022-07-01", categories: ["disney"], recent: false, image: "thumbnails/summer-range-spot.jpg" },
  { slug: "comedy-range-spot", title: "Comedy Range Spot", blurb: "Case study coming soon.", date: "2022-05-01", categories: ["disney"], recent: false, image: "thumbnails/comedy-range-spot.jpg" },
  { slug: "oscar-winners-2021", title: "Oscar Winners 2021", blurb: "Case study coming soon.", date: "2021-02-01", categories: ["disney"], recent: false, image: "thumbnails/oscar-winners-2021.jpg" },
  { slug: "star-launch", title: "Star Launch", blurb: "Case study coming soon.", date: "2021-01-01", categories: ["disney", "social"], recent: false, image: "thumbnails/star-launch.jpg" },
  { slug: "the-mandalorian-season-1-recap", title: "The Mandalorian Season 1 Recap", blurb: "Case study coming soon.", date: "2020-10-01", categories: ["social"], recent: false, image: "thumbnails/the-mandalorian-season-1-recap.jpg" },
  { slug: "earth-day-2020", title: "Earth Day 2020", blurb: "Case study coming soon.", date: "2020-04-01", categories: ["disney"], recent: false, image: "thumbnails/earth-day-2020.jpg" },
  { slug: "nat-geo-on-disney-plus", title: "Nat Geo on Disney+", blurb: "Case study coming soon.", date: "2020-03-01", categories: ["disney"], recent: false, image: "thumbnails/nat-geo-on-disney-plus.jpg" },
  { slug: "lsa", title: "LSA", blurb: "Case study coming soon.", date: "2019-07-01", categories: ["social", "other"], recent: false, image: "thumbnails/lsa.jpg" },
  { slug: "disney-junior", title: "Disney Junior", blurb: "Case study coming soon.", date: "2019-12-01", dateLabel: "2017–2019", categories: ["other"], recent: false, image: "thumbnails/disney-junior.jpg" },
  { slug: "lego-marvel", title: "LEGO Marvel", blurb: "Case study coming soon.", date: "2017-05-01", dateLabel: "Feb 2016 – May 2017", categories: ["partnerships", "other"], recent: false, image: "thumbnails/lego-marvel.jpg" },
  { slug: "smyths-toys", title: "Smyths Toys", blurb: "Case study coming soon.", date: "2016-09-01", categories: ["partnerships"], recent: false, image: "thumbnails/smyths-toys.jpg" },
  { slug: "customisedbyme-com", title: "CustomisedByMe.com", blurb: "Case study coming soon.", date: "2016-09-01", categories: ["partnerships"], recent: false, image: "thumbnails/customisedbyme-com.jpg" },
  { slug: "clintons", title: "Clintons", blurb: "Case study coming soon.", date: "2016-07-01", categories: ["partnerships"], recent: false, image: "thumbnails/clintons.jpg" },
  { slug: "toys-r-us", title: "Toys R Us", blurb: "Case study coming soon.", date: "2016-06-01", dateLabel: "2016", categories: ["partnerships"], recent: false, image: "thumbnails/toys-r-us.jpg" },
  { slug: "lego-star-wars", title: "LEGO Star Wars", blurb: "Case study coming soon.", date: "2016-05-01", categories: ["partnerships", "other"], recent: false, image: "thumbnails/lego-star-wars.jpg" },
  { slug: "specsavers-disney-range", title: "Specsavers Disney Range", blurb: "Case study coming soon.", date: "2016-05-01", categories: ["partnerships", "other"], recent: false, image: "thumbnails/specsavers-disney-range.jpg" },
  { slug: "lego-friends", title: "LEGO Friends", blurb: "Case study coming soon.", date: "2016-02-01", categories: ["partnerships", "other"], recent: false, image: "thumbnails/lego-friends.jpg" },
  { slug: "disney-ready-meals", title: "Disney Ready Meals", blurb: "Case study coming soon.", date: "2016-02-01", categories: ["partnerships"], recent: false, image: "thumbnails/disney-ready-meals.jpg" },
  { slug: "heelys", title: "Heelys", blurb: "Case study coming soon.", date: "2015-10-01", categories: ["partnerships", "other"], recent: false, image: "thumbnails/heelys.jpg" },
];

const TABS = [
  { id: "recent", label: "Some Handpicked Bits" },
  { id: "disney", label: "Disney+ Brand" },
  { id: "social", label: "Social" },
  { id: "partnerships", label: "Product Partnerships" },
  { id: "other", label: "Other Brands" },
  { id: "everything", label: "Everything" },
];

const PLACEHOLDER_MARK = `
  <svg class="placeholder-mark" viewBox="233 405 568 178" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="#08beaf" d="M316.6,415.54l-83.18,144.07c-5.8,10.04,1.45,22.6,13.05,22.6h166.36c11.6,0,18.85-12.56,13.05-22.6l-83.18-144.07c-5.8-10.04-20.3-10.04-26.1,0Z"/>
    <path fill="#ff6f00" d="M507.41,574.68l83.18-144.07c5.8-10.04-1.45-22.6-13.05-22.6h-166.36c-11.6,0-18.85,12.56-13.05,22.6l83.18,144.07c5.8,10.04,20.3,10.04,26.1,0Z"/>
    <path fill="#5e0404" d="M647.52,415.54l-83.18,144.07c-5.8,10.04,1.45,22.6,13.05,22.6h166.36c11.6,0,18.85-12.56,13.05-22.6l-83.18-144.07c-5.8-10.04-20.3-10.04-26.1,0Z"/>
  </svg>`;

function projectsFor(tabId) {
  const list =
    tabId === "everything"
      ? [...PROJECTS]
      : tabId === "recent"
        ? PROJECTS.filter((p) => p.recent)
        : PROJECTS.filter((p) => p.categories.includes(tabId));
  /* Handpicked tab: bespoke order. Every other tab: newest first */
  return tabId === "recent"
    ? list.sort((a, b) => (a.pick ?? 99) - (b.pick ?? 99))
    : list.sort((a, b) => b.date.localeCompare(a.date));
}

function cardHTML(p, pathPrefix) {
  const img = p.image
    ? `<img src="${pathPrefix}${p.image}" alt="${p.title}" loading="lazy">`
    : PLACEHOLDER_MARK;
  const dateFmt =
    p.dateLabel ||
    new Date(p.date + "T00:00:00").toLocaleDateString("en-GB", {
      month: "long",
      year: "numeric",
    });
  const inner = `
      <div class="card-img">${img}</div>
      <h3>${p.title}</h3>
      <p>${p.blurb}</p>
      <span class="card-date">${dateFmt}</span>`;
  return p.slug
    ? `<a class="card" href="${pathPrefix}projects/${p.slug}.html">${inner}</a>`
    : `<div class="card">${inner}</div>`;
}

function renderGrid(el, tabId, pathPrefix) {
  el.innerHTML = projectsFor(tabId)
    .map((p) => cardHTML(p, pathPrefix))
    .join("");
}

/* Gallery page: tabs + grid */
function initGallery() {
  const tabsEl = document.querySelector("[data-gallery-tabs]");
  const gridEl = document.querySelector("[data-gallery-grid]");
  if (!tabsEl || !gridEl) return;

  const startTab =
    new URLSearchParams(location.search).get("tab") || "recent";

  tabsEl.innerHTML = TABS.map(
    (t) =>
      `<button class="tab${t.id === startTab ? " active" : ""}" data-tab="${t.id}">${t.label}</button>`
  ).join("");

  renderGrid(gridEl, startTab, "");

  tabsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if (!btn) return;
    tabsEl.querySelectorAll(".tab").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderGrid(gridEl, btn.dataset.tab, "");
    history.replaceState(null, "", `?tab=${btn.dataset.tab}`);
  });
}

/* Homepage: mirror of the "Recent work" tab + link to the full gallery */
function initHomeRecent() {
  const el = document.querySelector("[data-home-recent]");
  if (!el) return;
  renderGrid(el, "recent", "");
  el.insertAdjacentHTML(
    "afterend",
    `<p class="shebang"><a href="gallery.html">The whole <em>shebang</em>
      <svg class="tri-right" viewBox="240 390 185 196" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="#5e0404" transform="rotate(90 330 495)" d="M316.6,415.54l-83.18,144.07c-5.8,10.04,1.45,22.6,13.05,22.6h166.36c11.6,0,18.85-12.56,13.05-22.6l-83.18-144.07c-5.8-10.04-20.3-10.04-26.1,0Z"/>
      </svg></a></p>`
  );
}

/* ------------------------------------------------------------
   Per-page film texture. Each page seeds its own grain, dust,
   scratches and leak blotches from its URL — different on every
   page, consistent between visits.
   ------------------------------------------------------------ */
function hashStr(s) {
  let h = 2166136261;
  for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const svgUrl = (s) => `url("data:image/svg+xml,${encodeURIComponent(s)}")`;

function initTexture() {
  const grain = document.querySelector(".grain");
  if (!grain) return;
  const rand = mulberry32(hashStr(location.pathname));
  const seed = () => Math.floor(rand() * 9999) + 1;

  const gamma = (exp) =>
    `<feComponentTransfer><feFuncR type='gamma' amplitude='1' exponent='${exp}' offset='0'/><feFuncG type='gamma' amplitude='1' exponent='${exp}' offset='0'/><feFuncB type='gamma' amplitude='1' exponent='${exp}' offset='0'/></feComponentTransfer>`;

  /* Layer 1: fine dancing grain (screen — bright speckle) */
  const fine = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='${seed()}' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/>${gamma(4)}</filter><rect width='300' height='300' filter='url(#n)' opacity='0.9'/></svg>`;

  /* Layer 2: dust specks at random positions */
  let dots = "";
  const nDots = 14 + Math.floor(rand() * 8);
  for (let i = 0; i < nDots; i++) {
    dots += `<circle cx='${(rand() * 520).toFixed(0)}' cy='${(rand() * 520).toFixed(0)}' r='${(0.5 + rand() * 1).toFixed(2)}' opacity='${(0.6 + rand() * 0.4).toFixed(2)}'/>`;
  }
  const dust = `<svg xmlns='http://www.w3.org/2000/svg' width='520' height='520'><g fill='#fff8ea'>${dots}</g></svg>`;

  /* Layer 3: film artifacts — mostly small ticks, hooks and specks,
     with the occasional long sweeping hairline, like real print wear */
  let paths = "";
  {
    /* Long sweeping hairlines criss-crossing at all angles */
    const nLong = 20 + Math.floor(rand() * 8);
    for (let i = 0; i < nLong; i++) {
      const x = rand() * 1200, y = rand() * 1200;
      const ang = rand() * Math.PI * 2;
      const len = 250 + rand() * 650;
      const dx = Math.cos(ang) * len, dy = Math.sin(ang) * len;
      /* gentle arc: control point offset perpendicular to the line */
      const bow = len * (0.03 + rand() * 0.09) * (rand() < 0.5 ? -1 : 1);
      const px = -Math.sin(ang) * bow, py = Math.cos(ang) * bow;
      const w = (0.5 + rand() * 0.7).toFixed(2);
      const op = (0.1 + rand() * 0.25).toFixed(2);
      paths += `<path d='M${x.toFixed(0)} ${y.toFixed(0)} q${(dx / 2 + px).toFixed(1)} ${(dy / 2 + py).toFixed(1)} ${dx.toFixed(1)} ${dy.toFixed(1)}' stroke-width='${w}' stroke-opacity='${op}'/>`;
    }
    /* Small ticks and hooks */
    const n = 95 + Math.floor(rand() * 30);
    for (let i = 0; i < n; i++) {
      const x = rand() * 1200, y = rand() * 1200;
      const ang = rand() * Math.PI * 2;
      const len = 6 + rand() * 30;
      const dx = Math.cos(ang) * len, dy = Math.sin(ang) * len;
      const w = (0.6 + rand() * 0.9).toFixed(2);
      const op = (0.18 + rand() * 0.35).toFixed(2);
      if (rand() < 0.55) {
        const px = -Math.sin(ang) * len * (0.2 + rand() * 0.4);
        const py = Math.cos(ang) * len * (0.2 + rand() * 0.4);
        paths += `<path d='M${x.toFixed(0)} ${y.toFixed(0)} q${(dx / 2 + px).toFixed(1)} ${(dy / 2 + py).toFixed(1)} ${dx.toFixed(1)} ${dy.toFixed(1)}' stroke-width='${w}' stroke-opacity='${op}'/>`;
      } else {
        paths += `<path d='M${x.toFixed(0)} ${y.toFixed(0)} l${dx.toFixed(1)} ${dy.toFixed(1)}' stroke-width='${w}' stroke-opacity='${op}'/>`;
      }
    }
    /* A few bright emulsion blobs */
    const nBlob = 14 + Math.floor(rand() * 6);
    for (let i = 0; i < nBlob; i++) {
      paths += `<ellipse cx='${(rand() * 1200).toFixed(0)}' cy='${(rand() * 1200).toFixed(0)}' rx='${(1.5 + rand() * 2.5).toFixed(1)}' ry='${(2 + rand() * 3.5).toFixed(1)}' fill='#fff' stroke='none' opacity='${(0.5 + rand() * 0.4).toFixed(2)}'/>`;
    }
  }
  const scratches = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='1200'><g stroke='#ffffff' fill='none' stroke-linecap='round'>${paths}</g></svg>`;

  grain.style.backgroundImage = [fine, dust, scratches].map(svgUrl).join(",");

  /* Dark noise pass (multiply — never brightens): sparse dark grain
     visible everywhere, including inside the leak blowouts */
  const dark = `<svg xmlns='http://www.w3.org/2000/svg' width='280' height='280'><filter id='dk'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' seed='${seed()}' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/>${gamma(3)}<feComponentTransfer><feFuncR type='linear' slope='-1' intercept='1'/><feFuncG type='linear' slope='-1' intercept='1'/><feFuncB type='linear' slope='-1' intercept='1'/><feFuncA type='linear' slope='0' intercept='1'/></feComponentTransfer></filter><rect width='280' height='280' filter='url(#dk)'/></svg>`;
  const darkEl = document.createElement("div");
  darkEl.className = "grain-dark";
  darkEl.style.backgroundImage = svgUrl(dark);
  document.body.appendChild(darkEl);

  /* Re-seed the leak blotch mask per page */
  const mask = `<svg xmlns='http://www.w3.org/2000/svg' width='900' height='900'><filter id='m'><feTurbulence type='fractalNoise' baseFrequency='0.0045' numOctaves='4' seed='${seed()}' stitchTiles='stitch'/><feComponentTransfer result='blotch'><feFuncA type='linear' slope='0.75' intercept='0.45'/></feComponentTransfer><feTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' seed='${seed()}' stitchTiles='stitch'/><feComponentTransfer result='fine'><feFuncA type='linear' slope='0.5' intercept='0.62'/></feComponentTransfer><feComposite in='blotch' in2='fine' operator='arithmetic' k1='1' k2='0' k3='0' k4='0'/></filter><rect width='900' height='900' filter='url(#m)'/></svg>`;
  const style = document.createElement("style");
  style.textContent = `.light-leaks::before,.light-leaks::after{-webkit-mask-image:${svgUrl(mask)};mask-image:${svgUrl(mask)};}`;
  document.head.appendChild(style);
}

/* About page: time-of-day greeting.
   5am–12pm Morning, 12pm–6pm Afternoon, 6pm–5am Evening */
function initGreeting() {
  const el = document.querySelector("[data-greeting]");
  if (!el) return;
  const h = new Date().getHours();
  el.textContent =
    h >= 5 && h < 12 ? "Morning" : h >= 12 && h < 18 ? "Afternoon" : "Evening";
}

/* Sticky header: blurred backdrop + reveal name logo after scrolling */
function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () =>
    header.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

document.addEventListener("DOMContentLoaded", () => {
  initGallery();
  initHomeRecent();
  initHeader();
  initTexture();
  initGreeting();
});
