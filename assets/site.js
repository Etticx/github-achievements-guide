const IMG = id => `https://github.githubassets.com/images/modules/profile/achievements/${id}-default.png`;

const BADGES = [
  { id: "quickdraw", name: "Quickdraw", rule: "Close an issue or PR within 5 minutes of opening it.", tiers: "One tier", time: "1 min", easy: true },
  { id: "yolo", name: "YOLO", rule: "Merge a pull request without a code review.", tiers: "One tier", time: "5 min", easy: true },
  { id: "pull-shark", name: "Pull Shark", rule: "Get pull requests you opened merged.", tiers: "2 · 16 · 128 · 1024", time: "5 min", easy: true },
  { id: "pair-extraordinaire", name: "Pair Extraordinaire", rule: "Be a co-author on a commit in a merged PR.", tiers: "1 · 10 · 24 · 48", time: "5 min", easy: true },
  { id: "galaxy-brain", name: "Galaxy Brain", rule: "Get answers accepted in GitHub Discussions.", tiers: "2 · 8 · 16 · 32", time: "Varies" },
  { id: "starstruck", name: "Starstruck", rule: "Own a repository that gets enough stars.", tiers: "16 · 128 · 512 · 4096", time: "Varies" },
  { id: "public-sponsor", name: "Public Sponsor", rule: "Sponsor someone through GitHub Sponsors.", tiers: "One tier", time: "3 min · costs money" },
];

const GONE = [
  ["Heart On Your Sleeve", "Being tested by GitHub"],
  ["Open Sourcerer", "Being tested by GitHub"],
  ["Mars 2020 Contributor", "Retired"],
  ["Arctic Code Vault Contributor", "Retired"],
];

// Set on <body> by each page: data-base="../" on guide pages, data-page="<badge id>"
const BASE = document.body.dataset.base || "";
const HOME = BASE || "./";
const PAGE = document.body.dataset.page;
const app = document.getElementById("app");
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function renderHome() {
  app.innerHTML = `
    <section class="hero narrow">
      <h1>How to earn every GitHub achievement</h1>
      <p>Each guide shows two ways to do it: clicking through github.com, or running a few commands with <code>git</code> and <code>gh</code>.</p>
      <form class="check" id="check">
        <label for="user">See which badges you already have</label>
        <div class="row">
          <input id="user" name="user" autocomplete="off" spellcheck="false" placeholder="Your GitHub username" required>
          <button class="btn" type="submit">Open my achievements</button>
        </div>
        <small>Opens your profile's Achievements tab on github.com. Hover a badge there to see its tier.</small>
      </form>
    </section>

    <h2 class="section">Achievements you can earn</h2>
    <p class="section-note">New to this? Start with the first four. You can do them alone in one practice repository.</p>
    <ul class="grid">
      ${BADGES.map(b => `
        <li><a class="card" href="${BASE}${b.id}/">
          <img src="${IMG(b.id)}" alt="" width="64" height="64" loading="lazy">
          <div>
            <h3>${b.name}</h3>
            <p>${b.rule}</p>
            <div class="meta">
              <span class="chip ${b.easy ? "easy" : ""}">${b.time}</span>
              <span class="chip">${b.tiers}</span>
            </div>
          </div>
        </a></li>`).join("")}
    </ul>

    <h2 class="section">Can't be earned right now</h2>
    <ul class="gone">
      ${GONE.map(([n, s]) => `<li><strong>${n}</strong><span>${s}</span></li>`).join("")}
    </ul>`;

  document.getElementById("check").addEventListener("submit", e => {
    e.preventDefault();
    const u = document.getElementById("user").value.trim().replace(/^@/, "");
    // GitHub usernames: letters, digits, single hyphens, max 39 chars
    if (!/^[a-z\d](?:[a-z\d-]{0,38})$/i.test(u)) return alert("That doesn't look like a GitHub username.");
    window.open(`https://github.com/${encodeURIComponent(u)}?tab=achievements`, "_blank", "noopener");
  });
}

function storedTab() { try { return localStorage.getItem("tab") || "GUI"; } catch { return "GUI"; } }
function saveTab(t) { try { localStorage.setItem("tab", t); } catch {} }

async function renderGuide(id) {
  const i = BADGES.findIndex(b => b.id === id);
  if (i < 0) return renderHome();
  const b = BADGES[i];
  app.innerHTML = `<div class="narrow"><a class="back" href="${HOME}">← All achievements</a><p>Loading…</p></div>`;

  let md;
  try {
    const res = await fetch(`${BASE}docs/achievements/${id}.md`);
    if (!res.ok) throw new Error(res.status);
    md = await res.text();
  } catch {
    app.innerHTML = `<div class="narrow"><a class="back" href="${HOME}">← All achievements</a><p>Couldn't load this guide. <a href="${BASE}docs/achievements/${id}.md">Open the Markdown file</a> instead.</p></div>`;
    return;
  }

  const prose = document.createElement("div");
  prose.className = "prose";
  prose.innerHTML = marked.parse(md.replace(/^# .*\n/, ""));

  // Links between guides: "yolo.md" -> "../yolo/"
  prose.querySelectorAll("a[href$='.md']").forEach(a => {
    const m = a.getAttribute("href").match(/^([\w-]+)\.md$/);
    if (m) a.href = `${BASE}${m[1]}/`;
  });
  prose.querySelectorAll("a[href^='http']").forEach(a => { a.target = "_blank"; a.rel = "noopener"; });

  // Group content under each h2 so GUI / CLI can become tabs
  const sections = {};
  let current = null;
  [...prose.children].forEach(el => {
    if (el.tagName === "H2") {
      current = document.createElement("section");
      current.dataset.title = el.textContent.trim();
      el.before(current);
      sections[current.dataset.title] = current;
    }
    if (current) current.appendChild(el);
  });

  if (sections.GUI && sections.CLI) {
    const tabs = document.createElement("div");
    tabs.className = "tabs";
    tabs.setAttribute("role", "tablist");
    tabs.setAttribute("aria-label", "Choose a method");
    const panels = [sections.GUI, sections.CLI];
    const labels = { GUI: "On the website", CLI: "In the terminal" };
    panels.forEach((p, n) => {
      const key = p.dataset.title;
      p.id = `panel-${key}`;
      p.className = "tabpanel";
      p.setAttribute("role", "tabpanel");
      p.querySelector("h2").remove();
      const btn = document.createElement("button");
      btn.type = "button";
      btn.id = `tab-${key}`;
      btn.textContent = labels[key];
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-controls", p.id);
      p.setAttribute("aria-labelledby", btn.id);
      btn.addEventListener("click", () => select(key));
      btn.addEventListener("keydown", e => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          const other = key === "GUI" ? "CLI" : "GUI";
          select(other);
          document.getElementById(`tab-${other}`).focus();
        }
      });
      tabs.appendChild(btn);
    });
    sections.GUI.before(tabs);

    function select(key) {
      panels.forEach(p => {
        const on = p.dataset.title === key;
        p.hidden = !on;
        const btn = document.getElementById(`tab-${p.dataset.title}`);
        btn.setAttribute("aria-selected", on);
        btn.tabIndex = on ? 0 : -1;
      });
      saveTab(key);
    }
    // select() needs the tabs in the DOM; called after mount below
    prose._select = () => select(storedTab() === "CLI" ? "CLI" : "GUI");
  }

  // Copy buttons on code blocks
  prose.querySelectorAll("pre").forEach(pre => {
    const btn = document.createElement("button");
    btn.className = "copy";
    btn.type = "button";
    btn.textContent = "Copy";
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(pre.querySelector("code").innerText);
        btn.textContent = "Copied";
      } catch { btn.textContent = "Select and copy"; }
      setTimeout(() => (btn.textContent = "Copy"), 1600);
    });
    pre.appendChild(btn);
  });

  const prev = BADGES[i - 1], next = BADGES[i + 1];
  app.innerHTML = `
    <div class="narrow">
      <a class="back" href="${HOME}">← All achievements</a>
      <div class="guide-head">
        <img src="${IMG(b.id)}" alt="" width="96" height="96">
        <h1>How to get ${esc(b.name)}</h1>
      </div>
    </div>`;
  const wrap = app.firstElementChild;
  wrap.appendChild(prose);
  prose._select && prose._select();
  wrap.insertAdjacentHTML("beforeend", `
    <nav class="pager" aria-label="More guides">
      ${prev ? `<a href="${BASE}${prev.id}/">← ${prev.name}</a>` : "<span></span>"}
      ${next ? `<a href="${BASE}${next.id}/">${next.name} →</a>` : ""}
    </nav>`);
}

if (PAGE) renderGuide(PAGE);
else {
  // Old links like "#pull-shark" move to the real page
  const old = location.hash.slice(1);
  if (BADGES.some(b => b.id === old)) location.replace(`${old}/`);
  else renderHome();
}
