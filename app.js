/* =========================================================================
   App logic: routing, rendering, progress tracking, quizzes, theme.
   Plain scripts (no modules) so the site runs by opening index.html.
   ========================================================================= */

(function () {
  "use strict";

  var STORAGE_KEY = "ds-curriculum-progress-v1";

  /* ----------------------------- state ----------------------------- */
  var state = load();

  function defaultState() {
    return { lessons: {}, exercises: {}, quizzes: {}, theme: "light" };
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      var parsed = JSON.parse(raw);
      return Object.assign(defaultState(), parsed);
    } catch (e) {
      return defaultState();
    }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* storage may be unavailable; progress simply will not persist */
    }
  }

  /* --------------------------- utilities --------------------------- */
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function phaseById(id) {
    return CURRICULUM.phases.filter(function (p) { return p.id === id; })[0] || null;
  }

  function allLessons() {
    var out = [];
    CURRICULUM.phases.forEach(function (p) {
      p.lessons.forEach(function (l) { out.push({ phase: p, lesson: l }); });
    });
    return out;
  }

  function phaseStats(phase) {
    var total = phase.lessons.length;
    var done = phase.lessons.filter(function (l) { return state.lessons[l.id]; }).length;
    var quiz = state.quizzes[phase.id] || null;
    var pct = total ? Math.round((done / total) * 100) : 0;
    return { total: total, done: done, quiz: quiz, pct: pct };
  }

  function overallStats() {
    var lessons = allLessons();
    var total = lessons.length;
    var done = lessons.filter(function (x) { return state.lessons[x.lesson.id]; }).length;
    var quizzesTaken = CURRICULUM.phases.filter(function (p) { return state.quizzes[p.id]; }).length;
    var pct = total ? Math.round((done / total) * 100) : 0;
    return { total: total, done: done, pct: pct, quizzesTaken: quizzesTaken, phaseCount: CURRICULUM.phases.length };
  }

  function firstIncomplete() {
    var list = allLessons();
    for (var i = 0; i < list.length; i++) {
      if (!state.lessons[list[i].lesson.id]) return list[i];
    }
    return null;
  }

  function quizScoreLabel(quiz) {
    if (!quiz) return "";
    return quiz.score + "/" + quiz.total;
  }

  /* ---------------------- diagrams and videos ---------------------- */
  function diagramFor(key) {
    if (!key || !window.DIAGRAMS) return null;
    var dkey = window.DIAGRAMS.map[key] || key;
    return window.DIAGRAMS.get(dkey);
  }

  function videosFor(key) {
    if (!key || !window.VIDEOS) return [];
    return window.VIDEOS.forKey(key);
  }

  function renderDiagram(key) {
    var d = diagramFor(key);
    if (!d) return "";
    return '<figure class="diagram"><figcaption>' + esc(d.title) + "</figcaption>" + d.svg + "</figure>";
  }

  function renderVideos(title, list) {
    if (!list || !list.length) return "";
    var html = '<section class="watch"><h3 class="watch-title">' + esc(title) + "</h3><ul class=\"watch-list\">";
    list.forEach(function (v) {
      html += '<li><a class="watch-link" href="' + esc(v.url) + '" target="_blank" rel="noopener noreferrer">';
      html += '<span class="watch-play" aria-hidden="true">&#9654;</span>';
      html += '<span class="watch-body"><span class="watch-name">' + esc(v.title) + "</span>";
      html += '<span class="watch-channel">' + esc(v.channel) + "</span></span>";
      html += "</a></li>";
    });
    html += "</ul></section>";
    return html;
  }

  /* --------------------------- rendering --------------------------- */
  var sidebar = document.getElementById("sidebar");
  var main = document.getElementById("main");
  var progressBar = document.getElementById("progressBar");
  var progressLabel = document.getElementById("progressLabel");

  function renderSidebar(activePhaseId) {
    var s = overallStats();
    var html = "";
    html += '<div class="brand">';
    html += '<div class="brand-mark">DS</div>';
    html += '<div class="brand-text"><strong>DeepSeek Path</strong><span>Linear regression &rarr; V4.1-Flash</span></div>';
    html += "</div>";

    html += '<a class="nav-home' + (activePhaseId ? "" : " active") + '" href="#/">Overview</a>';
    html += '<div class="nav-label">Phases</div>';
    html += '<nav class="nav-phases">';
    CURRICULUM.phases.forEach(function (p) {
      var st = phaseStats(p);
      var cls = "nav-item";
      if (p.id === activePhaseId) cls += " active";
      if (st.pct === 100) cls += " complete";
      html += '<a class="' + cls + '" href="#/phase/' + p.id + '">';
      html += '<span class="nav-num">' + p.num + "</span>";
      html += '<span class="nav-body">';
      html += '<span class="nav-title">' + esc(p.title) + "</span>";
      html += '<span class="nav-meta">';
      html += '<span class="nav-track"><span class="nav-fill" style="width:' + st.pct + '%"></span></span>';
      html += '<span class="nav-pct">' + st.done + "/" + st.total + "</span>";
      html += "</span>";
      html += "</span>";
      html += "</a>";
    });
    html += "</nav>";

    html += '<div class="sidebar-foot">';
    html += '<div class="foot-progress"><span>Overall</span><strong>' + s.pct + "%</strong></div>";
    html += '<div class="foot-track"><span style="width:' + s.pct + '%"></span></div>';
    html += '<button type="button" class="link-btn" data-action="reset">Reset progress</button>';
    html += "</div>";

    sidebar.innerHTML = html;
  }

  function setTopbar() {
    var s = overallStats();
    progressBar.style.width = s.pct + "%";
    progressLabel.textContent = s.done + " / " + s.total + " lessons";
  }

  function renderDashboard() {
    var s = overallStats();
    var next = firstIncomplete();
    var html = "";

    html += '<header class="hero">';
    html += '<p class="eyebrow">Self-paced curriculum</p>';
    html += '<h1>' + esc(CURRICULUM.title) + "</h1>";
    html += '<p class="lede">' + esc(CURRICULUM.subtitle) + "</p>";
    html += '<p class="intro">' + esc(CURRICULUM.intro) + "</p>";
    html += '<div class="hero-stats">';
    html += '<div class="stat"><strong>' + s.done + "/" + s.total + "</strong><span>Lessons done</span></div>";
    html += '<div class="stat"><strong>' + s.quizzesTaken + "/" + s.phaseCount + "</strong><span>Quizzes taken</span></div>";
    html += '<div class="stat"><strong>' + s.pct + "%</strong><span>Complete</span></div>";
    html += "</div>";
    if (next) {
      html += '<a class="btn primary big" href="#/phase/' + next.phase.id + '">' +
        (s.done === 0 ? "Start Phase 0" : "Continue: " + esc(next.lesson.title)) + "</a>";
    } else {
      html += '<p class="all-done">You have completed every lesson. Revisit any module, or start the capstone defense.</p>';
    }
    html += "</header>";

    html += '<div class="callout"><strong>Target outcome</strong><p>' + esc(CURRICULUM.target) + "</p></div>";

    html += '<h2 class="section-title">Phases</h2>';
    html += '<div class="cards">';
    CURRICULUM.phases.forEach(function (p) {
      html += renderPhaseCard(p);
    });
    html += "</div>";

    main.innerHTML = html;
  }

  function renderPhaseCard(p) {
    var st = phaseStats(p);
    var html = "";
    html += '<a class="card' + (st.pct === 100 ? " complete" : "") + '" href="#/phase/' + p.id + '">';
    html += '<div class="card-top">';
    html += '<span class="chip">Phase ' + p.num + "</span>";
    html += '<span class="chip soft">' + esc(p.duration) + "</span>";
    if (st.pct === 100) html += '<span class="chip good">Done</span>';
    html += "</div>";
    html += '<h3>' + esc(p.title) + "</h3>";
    html += '<p class="card-tag">' + esc(p.tagline) + "</p>";
    html += '<div class="card-bar"><span style="width:' + st.pct + '%"></span></div>';
    html += '<div class="card-foot"><span>' + st.done + " / " + st.total + " lessons</span>";
    html += '<span>' + (st.quiz ? "Quiz " + quizScoreLabel(st.quiz) : "Quiz not taken") + "</span></div>";
    html += "</a>";
    return html;
  }

  function renderPhase(phaseId) {
    var p = phaseById(phaseId);
    if (!p) { renderNotFound(); return; }
    var st = phaseStats(p);
    var idx = CURRICULUM.phases.indexOf(p);
    var prev = CURRICULUM.phases[idx - 1];
    var next = CURRICULUM.phases[idx + 1];

    var html = "";
    html += '<div class="crumbs"><a href="#/">Overview</a> <span>/</span> Phase ' + p.num + "</div>";
    html += '<header class="phase-head">';
    html += '<p class="eyebrow">Phase ' + p.num + " &middot; " + esc(p.duration) + "</p>";
    html += "<h1>" + esc(p.title) + "</h1>";
    html += '<p class="lede">' + esc(p.tagline) + "</p>";
    html += '<p class="goal"><strong>Goal:</strong> ' + esc(p.goal) + "</p>";
    html += '<div class="phase-progress"><div class="card-bar"><span style="width:' + st.pct + '%"></span></div><span>' + st.done + "/" + st.total + "</span></div>";
    html += "</header>";

    html += renderDiagram(p.id);

    var phaseVideos = videosFor(p.id);
    var shownUrls = {};
    phaseVideos.forEach(function (v) { shownUrls[v.url] = true; });
    html += renderVideos("Watch: Phase " + p.num, phaseVideos);

    p.lessons.forEach(function (l, i) {
      html += renderLesson(p, l, i, shownUrls);
    });

    html += renderQuizCta(p);

    html += '<nav class="pager">';
    if (prev) html += '<a class="btn ghost" href="#/phase/' + prev.id + '">&larr; Phase ' + prev.num + "</a>";
    else html += '<a class="btn ghost" href="#/">&larr; Overview</a>';
    if (next) html += '<a class="btn ghost" href="#/phase/' + next.id + '">Phase ' + next.num + " &rarr;</a>";
    html += "</nav>";

    main.innerHTML = html;
  }

  function renderLesson(phase, lesson, index, shownUrls) {
    shownUrls = shownUrls || {};
    var doneLesson = !!state.lessons[lesson.id];
    var doneEx = !!state.exercises[lesson.id];
    var html = "";
    html += '<article class="lesson' + (doneLesson ? " done" : "") + '" id="' + lesson.id + '">';
    html += '<div class="lesson-head">';
    html += '<span class="lesson-num">' + (index + 1) + "</span>";
    html += '<div class="lesson-titles"><h2>' + esc(lesson.title) + "</h2>";
    html += '<p class="goal">' + esc(lesson.goal) + "</p></div>";
    html += '<label class="check"><input type="checkbox" data-action="mark-lesson" data-id="' + lesson.id + '"' + (doneLesson ? " checked" : "") + '><span>Done</span></label>';
    html += "</div>";

    html += '<div class="lesson-grid">';

    html += '<div class="col points-col">';
    html += '<h3 class="col-title">Key points</h3>';
    html += '<ul class="points">';
    lesson.points.forEach(function (pt) { html += "<li>" + esc(pt) + "</li>"; });
    html += "</ul>";
    html += "</div>";

    html += '<div class="col vocab-col">';
    html += '<h3 class="col-title">Vocabulary</h3>';
    html += '<div class="vocab">';
    lesson.vocab.forEach(function (v) {
      html += '<details class="vocab-item"><summary>' + esc(v.term) + "</summary>";
      html += '<div class="vocab-detail">' + esc(v.detail) + "</div></details>";
    });
    html += "</div>";
    html += "</div>";

    html += "</div>";

    html += renderDiagram(lesson.id);

    var lessonVideos = videosFor(lesson.id).filter(function (v) { return !shownUrls[v.url]; });
    html += renderVideos("Watch", lessonVideos);

    html += '<div class="exercise' + (doneEx ? " done" : "") + '">';
    html += '<div class="exercise-top"><span class="chip accent">Exercise</span><h4>' + esc(lesson.exercise.title) + "</h4></div>";
    html += '<p class="task">' + esc(lesson.exercise.task) + "</p>";
    html += '<details class="hint"><summary>Hint</summary><div>' + esc(lesson.exercise.hint) + "</div></details>";
    html += '<label class="check ex-check"><input type="checkbox" data-action="mark-exercise" data-id="' + lesson.id + '"' + (doneEx ? " checked" : "") + '><span>Mark exercise complete</span></label>';
    html += "</div>";

    html += "</article>";
    return html;
  }

  function renderQuizCta(p) {
    var st = phaseStats(p);
    var html = '<section class="quiz-cta">';
    html += '<div><h3>Phase ' + p.num + " quiz</h3>";
    html += "<p>" + p.lessons.length + " lessons &middot; short multiple choice with explanations.</p></div>";
    if (st.quiz) {
      html += '<div class="quiz-best"><strong>' + quizScoreLabel(st.quiz) + "</strong><span>best score</span></div>";
    }
    html += '<a class="btn primary" href="#/quiz/' + p.id + '">' + (st.quiz ? "Retake quiz" : "Take quiz") + "</a>";
    html += "</section>";
    return html;
  }

  function renderQuiz(phaseId) {
    var p = phaseById(phaseId);
    if (!p) { renderNotFound(); return; }
    var saved = state.quizzes[p.id] || null;

    var html = "";
    html += '<div class="crumbs"><a href="#/">Overview</a> <span>/</span> <a href="#/phase/' + p.id + '">Phase ' + p.num + "</a> <span>/</span> Quiz</div>";
    html += '<header class="phase-head"><p class="eyebrow">Knowledge check</p><h1>' + esc(p.title) + " quiz</h1>";
    if (saved) html += '<p class="goal">Best so far: <strong>' + quizScoreLabel(saved) + "</strong></p>";
    html += "</header>";

    html += '<form id="quizForm" data-phase="' + p.id + '">';
    p.quiz.forEach(function (q, qi) {
      html += '<fieldset class="question" data-qindex="' + qi + '">';
      html += '<legend><span class="qnum">Q' + (qi + 1) + "</span>" + esc(q.q) + "</legend>";
      q.options.forEach(function (opt, oi) {
        var id = "q-" + p.id + "-" + qi + "-" + oi;
        html += '<label class="option" for="' + id + '"><input type="radio" id="' + id + '" name="q-' + p.id + "-" + qi + '" value="' + oi + '"><span>' + esc(opt) + "</span></label>";
      });
      html += '<div class="explain" hidden></div>';
      html += "</fieldset>";
    });
    html += '<div class="quiz-actions">';
    html += '<button type="button" class="btn primary" data-action="submit-quiz" data-phase="' + p.id + '">Check answers</button>';
    html += '<button type="button" class="btn ghost" data-action="retake-quiz" data-phase="' + p.id + '">Clear</button>';
    html += '<a class="btn ghost" href="#/phase/' + p.id + '">Back to module</a>';
    html += "</div>";
    html += "</form>";

    main.innerHTML = html;
  }

  function renderNotFound() {
    main.innerHTML = '<div class="empty"><h1>Not found</h1><p>That page does not exist.</p><a class="btn primary" href="#/">Back to overview</a></div>';
  }

  /* ---------------------------- actions ---------------------------- */
  function gradeQuiz(phaseId) {
    var p = phaseById(phaseId);
    if (!p) return;
    var form = document.getElementById("quizForm");
    if (!form) return;

    var score = 0;
    var unanswered = 0;

    p.quiz.forEach(function (q, qi) {
      var fieldset = form.querySelector('[data-qindex="' + qi + '"]');
      var selected = form.querySelector('input[name="q-' + phaseId + "-" + qi + '"]:checked');
      var explain = fieldset.querySelector(".explain");
      fieldset.classList.remove("correct", "wrong");

      if (!selected) unanswered++;

      fieldset.querySelectorAll(".option").forEach(function (lab) {
        lab.classList.remove("correct", "wrong");
      });

      var correctLabel = fieldset.querySelectorAll(".option")[q.answer];
      if (correctLabel) correctLabel.classList.add("correct");

      if (selected) {
        var chosen = parseInt(selected.value, 10);
        if (chosen === q.answer) {
          score++;
        } else {
          fieldset.classList.add("wrong");
          fieldset.querySelectorAll(".option")[chosen].classList.add("wrong");
        }
      }

      explain.hidden = false;
      explain.innerHTML = "<strong>" + (selected && parseInt(selected.value, 10) === q.answer ? "Correct." : "Answer: " + esc(q.options[q.answer]) + ".") + "</strong> " + esc(q.explain);
    });

    var prev = state.quizzes[phaseId];
    var record = { score: score, total: p.quiz.length, date: Date.now() };
    if (!prev || score >= prev.score) {
      state.quizzes[phaseId] = record;
      save();
    }

    var summary = document.querySelector(".quiz-actions");
    var msg = document.getElementById("quizResult");
    if (!msg) {
      msg = document.createElement("div");
      msg.id = "quizResult";
      msg.className = "quiz-result";
      form.insertBefore(msg, summary);
    }
    msg.innerHTML = '<strong>' + score + " / " + p.quiz.length + "</strong> correct" +
      (unanswered ? " &middot; " + unanswered + " unanswered" : "") +
      ". " + (score === p.quiz.length ? "Perfect." : "Review the explanations, then retake if you like.");

    setTopbar();
    renderSidebar(phaseId);
  }

  function clearQuiz(phaseId) {
    var form = document.getElementById("quizForm");
    if (!form) return;
    form.reset();
    form.querySelectorAll(".option").forEach(function (l) { l.classList.remove("correct", "wrong"); });
    form.querySelectorAll("fieldset").forEach(function (f) { f.classList.remove("correct", "wrong"); });
    form.querySelectorAll(".explain").forEach(function (e) { e.hidden = true; });
    var msg = document.getElementById("quizResult");
    if (msg) msg.remove();
  }

  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", state.theme);
    save();
  }

  function resetProgress() {
    if (!window.confirm("Reset all lesson, exercise, and quiz progress?")) return;
    var theme = state.theme;
    state = defaultState();
    state.theme = theme;
    save();
    route();
  }

  /* -------------------------- event wiring -------------------------- */
  document.addEventListener("change", function (e) {
    var t = e.target;
    if (!t || !t.getAttribute) return;
    var action = t.getAttribute("data-action");

    if (action === "mark-lesson") {
      var id = t.getAttribute("data-id");
      if (t.checked) state.lessons[id] = true; else delete state.lessons[id];
      save();
      refreshChrome(id);
    } else if (action === "mark-exercise") {
      var eid = t.getAttribute("data-id");
      if (t.checked) state.exercises[eid] = true; else delete state.exercises[eid];
      save();
      var card = t.closest(".exercise");
      if (card) card.classList.toggle("done", t.checked);
    }
  });

  document.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest("[data-action]") : null;
    if (!t) return;
    var action = t.getAttribute("data-action");

    if (action === "submit-quiz") { gradeQuiz(t.getAttribute("data-phase")); }
    else if (action === "retake-quiz") { clearQuiz(t.getAttribute("data-phase")); }
    else if (action === "toggle-theme") { toggleTheme(); }
    else if (action === "reset") { resetProgress(); }
    else if (action === "toggle-menu") {
      document.body.classList.toggle("menu-open");
    }
  });

  // Close the mobile menu after navigating.
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a[href^='#/']") : null;
    if (a) document.body.classList.remove("menu-open");
  });

  function refreshChrome(lessonId) {
    setTopbar();
    var hash = window.location.hash;
    var m = hash.match(/^#\/phase\/([^/]+)/);
    renderSidebar(m ? m[1] : null);

    // Update the lesson card header state without a full re-render.
    if (lessonId) {
      var el = document.getElementById(lessonId);
      if (el) el.classList.toggle("done", !!state.lessons[lessonId]);
    }
    // Refresh the in-page phase progress and quiz best score on phase pages.
    if (m) {
      var p = phaseById(m[1]);
      if (p) {
        var pst = phaseStats(p);
        var phaseMeta = document.querySelector(".phase-progress > span");
        if (phaseMeta) phaseMeta.textContent = pst.done + "/" + pst.total;
        var phaseFill = document.querySelector(".phase-progress .card-bar > span");
        if (phaseFill) phaseFill.style.width = pst.pct + "%";
        var card = document.querySelector('a.card[href="#/phase/' + p.id + '"]');
        if (card) card.classList.toggle("complete", pst.pct === 100);
      }
      var cta = document.querySelector(".quiz-cta .quiz-best");
      if (p && cta) {
        var st = phaseStats(p);
        if (st.quiz) cta.innerHTML = "<strong>" + quizScoreLabel(st.quiz) + "</strong><span>best score</span>";
      }
    }
  }

  /* ----------------------------- router ----------------------------- */
  function route() {
    var hash = window.location.hash || "#/";
    var phaseMatch = hash.match(/^#\/phase\/([^/]+)/);
    var quizMatch = hash.match(/^#\/quiz\/([^/]+)/);

    if (quizMatch) {
      renderSidebar(quizMatch[1]);
      renderQuiz(quizMatch[1]);
    } else if (phaseMatch) {
      renderSidebar(phaseMatch[1]);
      renderPhase(phaseMatch[1]);
    } else {
      renderSidebar(null);
      renderDashboard();
    }
    setTopbar();
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", route);

  /* ------------------------------ init ------------------------------ */
  document.documentElement.setAttribute("data-theme", state.theme);
  route();
})();
