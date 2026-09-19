/* =========================================================================
   Learning Hub: renders the course catalog from window.COURSE_HUB.
   ========================================================================= */

(function () {
  "use strict";

  var HUB = window.COURSE_HUB || { courses: [], progressKey: function (id) { return "course:" + id + ":progress:v1"; } };
  var THEME_KEY = "hub:theme:v1";
  var root = document.getElementById("hub");

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function readProgress(course) {
    try {
      var raw = localStorage.getItem(HUB.progressKey(course.id));
      if (!raw) return { done: 0, total: course.lessons || 0 };
      var parsed = JSON.parse(raw);
      var done = Object.keys(parsed.lessons || {}).length;
      return { done: done, total: course.lessons || done };
    } catch (err) {
      return { done: 0, total: course.lessons || 0 };
    }
  }

  function renderCard(course) {
    var accentStyle = ' style="--course-accent:' + esc(course.accent || "#4f46e5") + '"';

    if (course.status !== "available") {
      return '<div class="course-card planned"' + accentStyle + ">" +
        '<span class="course-accent"></span>' +
        '<div class="course-top"><span class="chip soft">Coming soon</span></div>' +
        "<h3>" + esc(course.title) + "</h3>" +
        '<p class="card-tag">' + esc(course.subtitle || "") + "</p>" +
        '<p class="course-desc">' + esc(course.description || "") + "</p>" +
        "</div>";
    }

    var p = readProgress(course);
    var pct = p.total ? Math.round((p.done / p.total) * 100) : 0;
    var href = course.path + "index.html";

    var html = '<a class="course-card' + (pct === 100 ? " complete" : "") + '" href="' + esc(href) + '"' + accentStyle + ">";
    html += '<span class="course-accent"></span>';
    html += '<div class="course-top">';
    if (course.duration) html += '<span class="chip">' + esc(course.duration) + "</span>";
    if (course.level) html += '<span class="chip soft">' + esc(course.level) + "</span>";
    if (pct === 100) html += '<span class="chip good">Complete</span>';
    html += "</div>";
    html += "<h3>" + esc(course.title) + "</h3>";
    if (course.subtitle) html += '<p class="card-tag">' + esc(course.subtitle) + "</p>";
    if (course.description) html += '<p class="course-desc">' + esc(course.description) + "</p>";
    if (course.tags && course.tags.length) {
      html += '<div class="course-tags">' + course.tags.map(function (t) {
        return '<span class="tag">' + esc(t) + "</span>";
      }).join("") + "</div>";
    }
    html += '<div class="card-bar"><span style="width:' + pct + '%"></span></div>';
    html += '<div class="card-foot"><span>' + p.done + " / " + p.total + " lessons</span>";
    html += "<span>" + (pct === 0 ? "Start" : pct + "%") + "</span></div>";
    html += "</a>";
    return html;
  }

  function render() {
    var courses = HUB.courses || [];
    var available = courses.filter(function (c) { return c.status === "available"; });
    var planned = courses.filter(function (c) { return c.status !== "available"; });

    var totalLessons = available.reduce(function (n, c) { return n + (c.lessons || 0); }, 0);
    var started = available.filter(function (c) { return readProgress(c).done > 0; }).length;

    var theme = "light";
    try { theme = localStorage.getItem(THEME_KEY) || "light"; } catch (err) { /* ignore */ }
    document.documentElement.setAttribute("data-theme", theme);

    var html = "";

    html += '<header class="hub-bar">';
    html += '<div class="hub-brand"><span class="brand-mark">LH</span><span class="hub-brand-text"><strong>Learning Hub</strong><span>Self-paced technical courses</span></span></div>';
    html += '<button class="theme-btn" type="button" id="hubTheme">Theme</button>';
    html += "</header>";

    html += '<header class="hub-hero">';
    html += '<p class="eyebrow">Courses</p>';
    html += "<h1>Learn a topic end to end</h1>";
    html += '<p class="lede">Each course is a standalone subsite: lessons, expandable vocabulary, hands-on exercises, quizzes, architecture diagrams, and video references. Progress is saved per course.</p>';
    html += '<div class="hero-stats">';
    html += '<div class="stat"><strong>' + available.length + "</strong><span>Course" + (available.length === 1 ? "" : "s") + "</span></div>";
    html += '<div class="stat"><strong>' + totalLessons + "</strong><span>Lessons</span></div>";
    html += '<div class="stat"><strong>' + started + "</strong><span>In progress</span></div>";
    html += "</div>";
    html += "</header>";

    html += '<div class="hub-grid">';
    html += available.map(renderCard).join("");
    html += planned.map(renderCard).join("");
    html += "</div>";

    html += '<section class="hub-note">';
    html += "<h2>Adding another course</h2>";
    html += "<p>Create <code>courses/&lt;slug&gt;/</code> with its own <code>index.html</code>, <code>curriculum.js</code>, <code>diagrams.js</code>, <code>videos.js</code>, and <code>app.js</code>, then add one entry to <code>catalog.js</code>. Set <code>CURRICULUM.id</code> to the same slug so progress is stored separately for each course.</p>";
    html += "</section>";

    html += '<footer class="hub-foot">From language models to game design, end to end.</footer>';

    root.innerHTML = html;

    var btn = document.getElementById("hubTheme");
    if (btn) {
      btn.addEventListener("click", function () {
        var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        try { localStorage.setItem(THEME_KEY, next); } catch (err) { /* ignore */ }
      });
    }
  }

  render();
})();
