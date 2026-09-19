/* =========================================================================
   Design diagrams.
   A tiny flowchart engine renders specs into inline SVG so diagrams inherit
   the site theme (light/dark) via CSS variables. No dependencies.

   To add a diagram: add a spec to S and map a lesson/phase id to its key in
   DIAGRAM_FOR.
   ========================================================================= */

(function () {
  "use strict";

  /* ------------------------------ helpers ------------------------------ */
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function center(n) { return { x: n.x + n.w / 2, y: n.y + n.h / 2 }; }
  function anchor(n, side) {
    if (side === "r") return { x: n.x + n.w, y: n.y + n.h / 2 };
    if (side === "l") return { x: n.x, y: n.y + n.h / 2 };
    if (side === "t") return { x: n.x + n.w / 2, y: n.y };
    return { x: n.x + n.w / 2, y: n.y + n.h };
  }
  function autoSides(a, b) {
    var ca = center(a), cb = center(b);
    var dx = cb.x - ca.x, dy = cb.y - ca.y;
    if (Math.abs(dx) >= Math.abs(dy)) return dx >= 0 ? ["r", "l"] : ["l", "r"];
    return dy >= 0 ? ["b", "t"] : ["t", "b"];
  }
  function sub(p, q) { return { x: p.x - q.x, y: p.y - q.y }; }
  function dist(p, q) { return Math.hypot(p.x - q.x, p.y - q.y); }
  function unit(v) { var d = Math.hypot(v.x, v.y) || 1; return { x: v.x / d, y: v.y / d }; }

  function roundedPath(pts, r) {
    var d = "M " + pts[0].x + " " + pts[0].y;
    for (var i = 1; i < pts.length - 1; i++) {
      var p0 = pts[i - 1], p1 = pts[i], p2 = pts[i + 1];
      var v1 = unit(sub(p0, p1)), v2 = unit(sub(p2, p1));
      var rr = Math.min(r, dist(p0, p1) / 2, dist(p1, p2) / 2);
      var a1 = { x: p1.x + v1.x * rr, y: p1.y + v1.y * rr };
      var a2 = { x: p1.x + v2.x * rr, y: p1.y + v2.y * rr };
      d += " L " + a1.x + " " + a1.y + " Q " + p1.x + " " + p1.y + " " + a2.x + " " + a2.y;
    }
    var last = pts[pts.length - 1];
    return d + " L " + last.x + " " + last.y;
  }

  function edgeGeom(a, b, sa, sb) {
    var pa = anchor(a, sa), pb = anchor(b, sb);
    var horizontal = (sa === "l" || sa === "r");
    var pts, mid;
    if (horizontal) {
      var mx = (pa.x + pb.x) / 2;
      pts = [pa, { x: mx, y: pa.y }, { x: mx, y: pb.y }, pb];
      mid = { x: mx, y: (pa.y + pb.y) / 2 };
    } else {
      var my = (pa.y + pb.y) / 2;
      pts = [pa, { x: pa.x, y: my }, { x: pb.x, y: my }, pb];
      mid = { x: (pa.x + pb.x) / 2, y: my };
    }
    return { d: roundedPath(pts, 12), mid: mid };
  }

  function nodeText(n) {
    var cx = n.x + n.w / 2;
    var lines = [];
    if (n.label) lines.push({ t: n.label, cls: "dg-title" });
    if (n.sub) {
      var subs = Array.isArray(n.sub) ? n.sub : [n.sub];
      subs.forEach(function (s) { lines.push({ t: s, cls: "dg-sub" }); });
    }
    if (!lines.length) return "";
    var lh = 15;
    var total = lines.length * lh;
    var start = n.y + n.h / 2 - total / 2 + lh * 0.78;
    return lines.map(function (l, i) {
      return '<text class="' + l.cls + '" x="' + cx + '" y="' + (start + i * lh) + '" text-anchor="middle">' + esc(l.t) + "</text>";
    }).join("");
  }

  function render(spec) {
    var nodes = spec.nodes || [];
    var byId = {};
    nodes.forEach(function (n) { byId[n.id] = n; });

    var W = spec.width || 900;
    var H = spec.height || 320;

    var markers = ["muted", "accent", "good", "gold"].map(function (c) {
      return '<marker id="dg-ah-' + c + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">' +
        '<path class="dg-mk-' + c + '" d="M0,0 L10,5 L0,10 z"/></marker>';
    }).join("");

    var edges = (spec.edges || []).map(function (e) {
      var a = byId[e.from], b = byId[e.to];
      if (!a || !b) return "";
      var sides = (e.fromSide && e.toSide) ? [e.fromSide, e.toSide] : autoSides(a, b);
      var g = edgeGeom(a, b, sides[0], sides[1]);
      var color = e.color || "muted";
      var cls = "dg-edge dg-s-" + color + (e.dashed ? " dashed" : "");
      var out = '<path class="' + cls + '" fill="none" d="' + g.d + '" marker-end="url(#dg-ah-' + color + ')"/>';
      if (e.label) {
        var lw = String(e.label).length * 6.2 + 12;
        out += '<rect class="dg-elabel-bg" x="' + (g.mid.x - lw / 2) + '" y="' + (g.mid.y - 10) + '" width="' + lw + '" height="19" rx="6"/>';
        out += '<text class="dg-elabel" x="' + g.mid.x + '" y="' + (g.mid.y + 3.5) + '" text-anchor="middle">' + esc(e.label) + "</text>";
      }
      return out;
    }).join("");

    var boxes = nodes.map(function (n) {
      var kind = n.kind || "box";
      return '<g class="dg-node dg-' + kind + '">' +
        '<rect x="' + n.x + '" y="' + n.y + '" width="' + n.w + '" height="' + n.h + '" rx="' + (n.rx || 12) + '"/>' +
        nodeText(n) + "</g>";
    }).join("");

    var extras = (spec.labels || []).map(function (l) {
      return '<text class="dg-note" x="' + l.x + '" y="' + l.y + '" text-anchor="' + (l.anchor || "middle") + '">' + esc(l.text) + "</text>";
    }).join("");

    return '<svg class="dg" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(spec.title || "Design diagram") + '" preserveAspectRatio="xMidYMid meet">' +
      "<defs>" + markers + "</defs>" + edges + boxes + extras + "</svg>";
  }

  /* ------------------------------ specs ------------------------------ */
  var S = {};

  S["experience-stack"] = {
    title: "Rules -> play -> experience", width: 900, height: 260,
    nodes: [
      { id: "rules", x: 20, y: 90, w: 200, h: 74, label: "Rules", sub: ["static specification"], kind: "box" },
      { id: "play", x: 300, y: 90, w: 240, h: 74, label: "Play", sub: ["emergent session behavior"], kind: "accent" },
      { id: "exp", x: 620, y: 90, w: 260, h: 74, label: "Experience", sub: ["what the player thinks and feels"], kind: "good" }
    ],
    edges: [
      { from: "rules", to: "play", label: "a player acts" },
      { from: "play", to: "exp", label: "interpreted as" }
    ],
    labels: [
      { x: 450, y: 220, text: "Design at the top layer; diagnose in the middle one." }
    ]
  };

  S["mda"] = {
    title: "The MDA framework", width: 900, height: 280,
    nodes: [
      { id: "m", x: 30, y: 60, w: 200, h: 74, label: "Mechanics", sub: ["rules, systems, numbers"], kind: "box" },
      { id: "d", x: 340, y: 60, w: 220, h: 74, label: "Dynamics", sub: ["behavior during play"], kind: "accent" },
      { id: "a", x: 660, y: 60, w: 210, h: 74, label: "Aesthetics", sub: ["the felt experience"], kind: "good" }
    ],
    edges: [
      { from: "m", to: "d", label: "produces" },
      { from: "d", to: "a", label: "evokes" }
    ],
    labels: [
      { x: 450, y: 220, text: "Designers build left to right; players feel it right to left." }
    ]
  };

  S["flow-channel"] = {
    title: "The flow channel", width: 900, height: 320,
    nodes: [
      { id: "bored", x: 40, y: 220, w: 190, h: 66, label: "Boredom", sub: ["skill outruns challenge"], kind: "box" },
      { id: "flow", x: 340, y: 110, w: 230, h: 76, label: "Flow channel", sub: ["challenge tracks skill"], kind: "accent" },
      { id: "anx", x: 670, y: 20, w: 190, h: 66, label: "Anxiety", sub: ["challenge outruns skill"], kind: "box" }
    ],
    edges: [
      { from: "bored", to: "flow", label: "raise challenge" },
      { from: "flow", to: "anx", label: "too far, too fast" }
    ],
    labels: [
      { x: 450, y: 305, text: "Difficulty is a moving target: it must grow as the player's skill grows." }
    ]
  };

  S["core-loop"] = {
    title: "The core loop", width: 900, height: 280,
    nodes: [
      { id: "act", x: 30, y: 90, w: 150, h: 74, label: "Action", sub: ["player input"], kind: "box" },
      { id: "chal", x: 230, y: 90, w: 170, h: 74, label: "Challenge", sub: ["rules resist"], kind: "box" },
      { id: "rew", x: 450, y: 90, w: 150, h: 74, label: "Reward", sub: ["progress, feedback"], kind: "accent" },
      { id: "grow", x: 650, y: 90, w: 170, h: 74, label: "Growth", sub: ["new options"], kind: "good" }
    ],
    edges: [
      { from: "act", to: "chal" }, { from: "chal", to: "rew" }, { from: "rew", to: "grow" },
      { from: "grow", to: "act", label: "repeat, harder", dashed: true, color: "accent", fromSide: "t", toSide: "t" }
    ],
    labels: [
      { x: 450, y: 240, text: "A core loop must be fun before any meta progression is layered on top." }
    ]
  };

  S["decision-space"] = {
    title: "What makes a choice interesting", width: 900, height: 280,
    nodes: [
      { id: "choice", x: 20, y: 90, w: 170, h: 74, label: "Real options", sub: ["at least two"], kind: "box" },
      { id: "cost", x: 250, y: 90, w: 200, h: 74, label: "Trade-off", sub: ["you give something up"], kind: "accent" },
      { id: "legible", x: 510, y: 90, w: 190, h: 74, label: "Legible result", sub: ["you can predict it"], kind: "box" },
      { id: "mean", x: 740, y: 90, w: 140, h: 74, label: "Meaningful", kind: "good" }
    ],
    edges: [
      { from: "choice", to: "cost" }, { from: "cost", to: "legible" }, { from: "legible", to: "mean" }
    ],
    labels: [
      { x: 450, y: 240, text: "Remove any one of the three inputs and the decision becomes trivial." }
    ]
  };

  S["emergence"] = {
    title: "Emergence from simple rules", width: 900, height: 260,
    nodes: [
      { id: "rules", x: 20, y: 90, w: 180, h: 74, label: "Simple rules", sub: ["few, local, cheap"], kind: "box" },
      { id: "mix", x: 280, y: 90, w: 210, h: 74, label: "Interactions", sub: ["systems combine"], kind: "accent" },
      { id: "out", x: 570, y: 90, w: 310, h: 74, label: "Emergent outcomes", sub: ["strategies, stories, surprises"], kind: "good" }
    ],
    edges: [
      { from: "rules", to: "mix", label: "compose" },
      { from: "mix", to: "out", label: "amplify" }
    ],
    labels: [
      { x: 450, y: 220, text: "You author the rules; players discover the outcomes." }
    ]
  };

  S["game-feel"] = {
    title: "The chain of game feel", width: 900, height: 260,
    nodes: [
      { id: "in", x: 20, y: 90, w: 140, h: 74, label: "Input", sub: ["button press"], kind: "box" },
      { id: "resp", x: 220, y: 90, w: 210, h: 74, label: "Fast response", sub: ["motion within ~100ms"], kind: "accent" },
      { id: "fb", x: 490, y: 90, w: 210, h: 74, label: "Feedback", sub: ["sound, shake, particles"], kind: "box" },
      { id: "feel", x: 760, y: 90, w: 130, h: 74, label: "Feel", kind: "good" }
    ],
    edges: [
      { from: "in", to: "resp" }, { from: "resp", to: "fb" }, { from: "fb", to: "feel" }
    ],
    labels: [
      { x: 450, y: 220, text: "Delay or desync any link and identical mechanics feel dead." }
    ]
  };

  S["sdt"] = {
    title: "Self-determination theory", width: 900, height: 380,
    nodes: [
      { id: "auto", x: 30, y: 30, w: 220, h: 74, label: "Autonomy", sub: ["meaningful choice"], kind: "box" },
      { id: "comp", x: 30, y: 150, w: 220, h: 74, label: "Competence", sub: ["mastery and feedback"], kind: "box" },
      { id: "rel", x: 30, y: 270, w: 220, h: 74, label: "Relatedness", sub: ["connection to others"], kind: "box" },
      { id: "intr", x: 390, y: 150, w: 230, h: 74, label: "Intrinsic motivation", sub: ["play for its own sake"], kind: "accent" },
      { id: "eng", x: 700, y: 150, w: 180, h: 74, label: "Lasting engagement", kind: "good" }
    ],
    edges: [
      { from: "auto", to: "intr" }, { from: "comp", to: "intr" }, { from: "rel", to: "intr" },
      { from: "intr", to: "eng" }
    ],
    labels: [
      { x: 450, y: 360, text: "External rewards can crowd these out (the overjustification effect)." }
    ]
  };

  S["reward-schedule"] = {
    title: "Reward schedules and behavior", width: 900, height: 320,
    nodes: [
      { id: "fixed", x: 30, y: 40, w: 250, h: 80, label: "Fixed reward", sub: ["every N actions", "predictable"], kind: "box" },
      { id: "var", x: 30, y: 200, w: 250, h: 80, label: "Variable reward", sub: ["unpredictable timing", "strongest pull"], kind: "accent" },
      { id: "beh", x: 400, y: 120, w: 210, h: 80, label: "Behavior", sub: ["when players stop"], kind: "box" },
      { id: "risk", x: 680, y: 120, w: 200, h: 80, label: "Compulsion risk", sub: ["when it replaces meaning"], kind: "gold" }
    ],
    edges: [
      { from: "fixed", to: "beh", label: "predictable" },
      { from: "var", to: "beh", label: "persistent" },
      { from: "beh", to: "risk", dashed: true, color: "gold" }
    ]
  };

  S["scaffolding"] = {
    title: "Progressive disclosure", width: 900, height: 320,
    nodes: [
      { id: "s1", x: 30, y: 220, w: 150, h: 66, label: "Step 1", sub: ["isolated + safe"], kind: "box" },
      { id: "s2", x: 210, y: 180, w: 150, h: 66, label: "Step 2", sub: ["add one rule"], kind: "box" },
      { id: "s3", x: 390, y: 140, w: 150, h: 66, label: "Step 3", sub: ["combine"], kind: "box" },
      { id: "s4", x: 570, y: 100, w: 150, h: 66, label: "Step 4", sub: ["mastery test"], kind: "accent" },
      { id: "skill", x: 750, y: 60, w: 140, h: 66, label: "Skill", kind: "good" }
    ],
    edges: [
      { from: "s1", to: "s2" }, { from: "s2", to: "s3" }, { from: "s3", to: "s4" }, { from: "s4", to: "skill" }
    ],
    labels: [
      { x: 450, y: 305, text: "Introduce one idea at a time; never test a skill before you have taught it." }
    ]
  };

  S["economy"] = {
    title: "Faucets, sinks, and the balance", width: 900, height: 330,
    nodes: [
      { id: "faucet", x: 40, y: 30, w: 260, h: 84, label: "Faucets (sources)", sub: ["quests, drops, dailies"], kind: "accent" },
      { id: "sink", x: 600, y: 30, w: 260, h: 84, label: "Sinks (drains)", sub: ["prices, repairs, fees"], kind: "gold" },
      { id: "pool", x: 320, y: 200, w: 260, h: 84, label: "Currency balance", sub: ["the number you tune"], kind: "good" }
    ],
    edges: [
      { from: "faucet", to: "pool", label: "income" },
      { from: "sink", to: "pool", label: "outflow" }
    ],
    labels: [
      { x: 450, y: 320, text: "Inflation when income outruns sinks; grind when sinks outrun income." }
    ]
  };

  S["randomness"] = {
    title: "Input vs. output randomness", width: 900, height: 280,
    nodes: [
      { id: "in", x: 30, y: 100, w: 230, h: 84, label: "Input randomness", sub: ["map, hand, spawn", "plan around it"], kind: "box" },
      { id: "out", x: 340, y: 100, w: 230, h: 84, label: "Output randomness", sub: ["hit, crit, loot", "react to it"], kind: "accent" },
      { id: "feel", x: 660, y: 100, w: 210, h: 84, label: "Fair or robbed?", sub: ["perception decides"], kind: "good" }
    ],
    edges: [
      { from: "in", to: "feel" }, { from: "out", to: "feel" }
    ],
    labels: [
      { x: 450, y: 240, text: "Where the dice land decides whether a loss feels like variance or cheating." }
    ]
  };

  S["balance-triangle"] = {
    title: "Counter-play without a dominant option", width: 900, height: 300,
    nodes: [
      { id: "a", x: 60, y: 180, w: 180, h: 74, label: "Option A", sub: ["beats B"], kind: "box" },
      { id: "b", x: 360, y: 40, w: 180, h: 74, label: "Option B", sub: ["beats C"], kind: "box" },
      { id: "c", x: 660, y: 180, w: 180, h: 74, label: "Option C", sub: ["beats A"], kind: "box" }
    ],
    edges: [
      { from: "a", to: "b", label: "counters" },
      { from: "b", to: "c", label: "counters" },
      { from: "c", to: "a", label: "counters" }
    ],
    labels: [
      { x: 450, y: 288, text: "When no option dominates, players must keep adapting." }
    ]
  };

  S["progression-curve"] = {
    title: "The shape of a progression curve", width: 900, height: 300,
    nodes: [
      { id: "early", x: 40, y: 170, w: 180, h: 74, label: "Early game", sub: ["fast, generous gains"], kind: "box" },
      { id: "mid", x: 340, y: 110, w: 200, h: 74, label: "Mid game", sub: ["choices start to matter"], kind: "accent" },
      { id: "late", x: 650, y: 40, w: 210, h: 74, label: "Late game", sub: ["mastery and endgame"], kind: "good" }
    ],
    edges: [
      { from: "early", to: "mid" }, { from: "mid", to: "late" }
    ],
    labels: [
      { x: 450, y: 285, text: "The curve is a feeling: steep early for momentum, flatter later for depth." }
    ]
  };

  S["level-guidance"] = {
    title: "Guidance without arrows", width: 900, height: 320,
    nodes: [
      { id: "entry", x: 20, y: 120, w: 140, h: 74, label: "Entry", sub: ["player spawns"], kind: "box" },
      { id: "sight", x: 220, y: 120, w: 190, h: 74, label: "Sightline", sub: ["long, unobstructed"], kind: "accent" },
      { id: "weenie", x: 470, y: 120, w: 180, h: 74, label: "Weenie", sub: ["visible goal"], kind: "gold" },
      { id: "dest", x: 710, y: 120, w: 170, h: 74, label: "Destination", kind: "good" }
    ],
    edges: [
      { from: "entry", to: "sight", label: "guides the eye" },
      { from: "sight", to: "weenie" }, { from: "weenie", to: "dest", label: "pulls the player" }
    ],
    labels: [
      { x: 450, y: 265, text: "Lead with geometry, not UI: make the goal visible before the path is obvious." }
    ]
  };

  S["world-structure"] = {
    title: "Linear, hub, and open structure", width: 900, height: 340,
    nodes: [
      { id: "lin", x: 20, y: 40, w: 250, h: 84, label: "Linear", sub: ["A -> B -> C", "authored pacing"], kind: "box" },
      { id: "hub", x: 320, y: 40, w: 250, h: 84, label: "Hub-and-spoke", sub: ["return to a center", "bounded choice"], kind: "accent" },
      { id: "open", x: 620, y: 40, w: 260, h: 84, label: "Open world", sub: ["many points of interest", "self-directed"], kind: "good" },
      { id: "gate", x: 320, y: 200, w: 250, h: 84, label: "Gating", sub: ["locks pace progress", "turns freedom into a curve"], kind: "box" }
    ],
    edges: [],
    labels: [
      { x: 450, y: 320, text: "Structure trades authored pacing against player freedom." }
    ]
  };

  S["env-story"] = {
    title: "Story told by the space", width: 900, height: 280,
    nodes: [
      { id: "space", x: 30, y: 100, w: 210, h: 84, label: "Space", sub: ["what happened here?"], kind: "box" },
      { id: "props", x: 340, y: 100, w: 220, h: 84, label: "Set dressing", sub: ["micro-narratives"], kind: "accent" },
      { id: "player", x: 660, y: 100, w: 220, h: 84, label: "Player inference", sub: ["story without words"], kind: "good" }
    ],
    edges: [
      { from: "space", to: "props" }, { from: "props", to: "player" }
    ],
    labels: [
      { x: 450, y: 240, text: "The strongest environmental stories leave the last step to the player." }
    ]
  };

  S["puzzle-loop"] = {
    title: "Teach, test, twist", width: 900, height: 280,
    nodes: [
      { id: "teach", x: 30, y: 100, w: 190, h: 74, label: "Establish", sub: ["teach the rule"], kind: "box" },
      { id: "test", x: 280, y: 100, w: 180, h: 74, label: "Test", sub: ["apply it plainly"], kind: "accent" },
      { id: "twist", x: 520, y: 100, w: 180, h: 74, label: "Twist", sub: ["combine or invert"], kind: "box" },
      { id: "aha", x: 760, y: 100, w: 130, h: 74, label: "Aha", kind: "good" }
    ],
    edges: [
      { from: "teach", to: "test" }, { from: "test", to: "twist" }, { from: "twist", to: "aha" }
    ],
    labels: [
      { x: 450, y: 240, text: "A good solution feels inevitable in hindsight and impossible beforehand." }
    ]
  };

  S["encounter"] = {
    title: "Encounter composition", width: 900, height: 330,
    nodes: [
      { id: "tank", x: 30, y: 40, w: 190, h: 74, label: "Tank", sub: ["soaks, holds space"], kind: "box" },
      { id: "sniper", x: 260, y: 200, w: 190, h: 74, label: "Sniper", sub: ["punishes standing still"], kind: "box" },
      { id: "swarm", x: 490, y: 40, w: 190, h: 74, label: "Swarm", sub: ["forces movement"], kind: "box" },
      { id: "player", x: 720, y: 120, w: 160, h: 84, label: "Player", sub: ["reads and prioritizes"], kind: "accent" }
    ],
    edges: [
      { from: "tank", to: "player", label: "threat" },
      { from: "swarm", to: "player", label: "threat" },
      { from: "sniper", to: "player", label: "threat" }
    ],
    labels: [
      { x: 450, y: 315, text: "Give every threat a readable tell and a different answer, or the fight becomes noise." }
    ]
  };

  S["ai-loop"] = {
    title: "The game-AI sense-decide-act loop", width: 900, height: 280,
    nodes: [
      { id: "per", x: 20, y: 100, w: 180, h: 74, label: "Perceive", sub: ["vision cone, sound"], kind: "box" },
      { id: "dec", x: 250, y: 100, w: 190, h: 74, label: "Decide", sub: ["state machine or tree"], kind: "accent" },
      { id: "act", x: 490, y: 100, w: 180, h: 74, label: "Act", sub: ["move, attack, flee"], kind: "box" },
      { id: "world", x: 720, y: 100, w: 160, h: 74, label: "World changes", kind: "good" }
    ],
    edges: [
      { from: "per", to: "dec" }, { from: "dec", to: "act" }, { from: "act", to: "world" },
      { from: "world", to: "per", label: "repeat", dashed: true, color: "accent", fromSide: "t", toSide: "t" }
    ],
    labels: [
      { x: 450, y: 245, text: "Make the loop readable: players must be able to infer why the AI did that." }
    ]
  };

  S["boss-phases"] = {
    title: "The shape of a boss fight", width: 900, height: 300,
    nodes: [
      { id: "p1", x: 30, y: 100, w: 210, h: 84, label: "Phase 1", sub: ["teach the tell"], kind: "box" },
      { id: "p2", x: 320, y: 100, w: 210, h: 84, label: "Phase 2", sub: ["combine and escalate"], kind: "accent" },
      { id: "p3", x: 610, y: 100, w: 260, h: 84, label: "Phase 3", sub: ["twist, then payoff"], kind: "good" }
    ],
    edges: [
      { from: "p1", to: "p2" }, { from: "p2", to: "p3" }
    ],
    labels: [
      { x: 450, y: 255, text: "A boss is an exam, not a wall: it tests everything the level taught." }
    ]
  };

  S["narrative-layers"] = {
    title: "Story, mechanics, and agency", width: 900, height: 280,
    nodes: [
      { id: "story", x: 20, y: 100, w: 210, h: 84, label: "Story", sub: ["authored sequence"], kind: "box" },
      { id: "mech", x: 330, y: 100, w: 230, h: 84, label: "Mechanics", sub: ["interactive meaning"], kind: "accent" },
      { id: "agency", x: 660, y: 100, w: 220, h: 84, label: "Player agency", sub: ["the medium's edge"], kind: "good" }
    ],
    edges: [
      { from: "story", to: "mech" }, { from: "mech", to: "agency" }
    ],
    labels: [
      { x: 450, y: 240, text: "Ludonarrative dissonance appears when the story and the mechanics disagree." }
    ]
  };

  S["branching"] = {
    title: "Branch wide, converge deliberately", width: 900, height: 320,
    nodes: [
      { id: "start", x: 20, y: 130, w: 150, h: 66, label: "Choice", kind: "box" },
      { id: "a", x: 250, y: 40, w: 180, h: 66, label: "Path A", kind: "accent" },
      { id: "b", x: 250, y: 220, w: 180, h: 66, label: "Path B", kind: "accent" },
      { id: "merge", x: 500, y: 130, w: 190, h: 66, label: "Convergence", sub: ["state is remembered"], kind: "good" },
      { id: "end", x: 740, y: 130, w: 140, h: 66, label: "Ending", kind: "box" }
    ],
    edges: [
      { from: "start", to: "a" }, { from: "start", to: "b" },
      { from: "a", to: "merge" }, { from: "b", to: "merge" }, { from: "merge", to: "end" }
    ],
    labels: [
      { x: 450, y: 305, text: "Every branch doubles authorship cost; converge to keep meaning without infinite content." }
    ]
  };

  S["theme"] = {
    title: "Theme as the argument", width: 900, height: 280,
    nodes: [
      { id: "world", x: 20, y: 100, w: 180, h: 74, label: "World", kind: "box" },
      { id: "char", x: 240, y: 100, w: 180, h: 74, label: "Character", kind: "box" },
      { id: "mech", x: 460, y: 100, w: 190, h: 74, label: "Mechanic", kind: "accent" },
      { id: "theme", x: 700, y: 100, w: 180, h: 74, label: "Theme", sub: ["the argument"], kind: "good" }
    ],
    edges: [
      { from: "world", to: "char" }, { from: "char", to: "mech" }, { from: "mech", to: "theme" }
    ],
    labels: [
      { x: 450, y: 240, text: "When world, character, and mechanics agree, the game means something." }
    ]
  };

  S["emotional-palette"] = {
    title: "The palette beyond fun", width: 900, height: 300,
    nodes: [
      { id: "joy", x: 20, y: 30, w: 150, h: 66, label: "Joy", kind: "good" },
      { id: "fear", x: 195, y: 30, w: 150, h: 66, label: "Fear", kind: "box" },
      { id: "tension", x: 370, y: 30, w: 150, h: 66, label: "Tension", kind: "box" },
      { id: "grief", x: 545, y: 30, w: 150, h: 66, label: "Grief", kind: "box" },
      { id: "awe", x: 720, y: 30, w: 160, h: 66, label: "Awe", kind: "good" },
      { id: "core", x: 330, y: 160, w: 240, h: 84, label: "Emotional design", sub: ["choose the target feeling first"], kind: "accent" }
    ],
    edges: [
      { from: "joy", to: "core", dashed: true },
      { from: "fear", to: "core", dashed: true },
      { from: "grief", to: "core", dashed: true },
      { from: "awe", to: "core", dashed: true }
    ],
    labels: [
      { x: 450, y: 285, text: "Fun is one color on the palette. Mature design reaches for the rest." }
    ]
  };

  S["iteration-loop"] = {
    title: "The iteration loop", width: 900, height: 280,
    nodes: [
      { id: "build", x: 20, y: 100, w: 170, h: 74, label: "Build", sub: ["smallest prototype"], kind: "box" },
      { id: "test", x: 250, y: 100, w: 180, h: 74, label: "Test", sub: ["watch a player"], kind: "accent" },
      { id: "learn", x: 490, y: 100, w: 190, h: 74, label: "Learn", sub: ["what surprised you"], kind: "box" },
      { id: "revise", x: 740, y: 100, w: 140, h: 74, label: "Revise", kind: "good" }
    ],
    edges: [
      { from: "build", to: "test" }, { from: "test", to: "learn" }, { from: "learn", to: "revise" },
      { from: "revise", to: "build", label: "repeat", dashed: true, color: "accent", fromSide: "t", toSide: "t" }
    ],
    labels: [
      { x: 450, y: 245, text: "Each loop should answer one question. Stop when the answers stop changing." }
    ]
  };

  S["playtest-loop"] = {
    title: "From belief to evidence", width: 900, height: 280,
    nodes: [
      { id: "hyp", x: 20, y: 100, w: 200, h: 74, label: "Hypothesis", sub: ["what you believe"], kind: "box" },
      { id: "test", x: 290, y: 100, w: 180, h: 74, label: "Playtest", sub: ["watch behavior"], kind: "accent" },
      { id: "data", x: 540, y: 100, w: 150, h: 74, label: "Evidence", kind: "box" },
      { id: "change", x: 760, y: 100, w: 130, h: 74, label: "Change", kind: "good" }
    ],
    edges: [
      { from: "hyp", to: "test" }, { from: "test", to: "data" }, { from: "data", to: "change" },
      { from: "change", to: "hyp", dashed: true, color: "accent", fromSide: "b", toSide: "b" }
    ],
    labels: [
      { x: 450, y: 245, text: "Ask 'what did you notice?', not 'did you like it?'." }
    ]
  };

  S["scope-triangle"] = {
    title: "Scope, time, and quality", width: 900, height: 280,
    nodes: [
      { id: "scope", x: 40, y: 90, w: 230, h: 90, label: "Scope", sub: ["content and features"], kind: "accent" },
      { id: "time", x: 350, y: 90, w: 200, h: 90, label: "Time", sub: ["usually fixed"], kind: "box" },
      { id: "quality", x: 640, y: 90, w: 220, h: 90, label: "Quality", sub: ["the variable that matters"], kind: "good" }
    ],
    edges: [],
    labels: [
      { x: 450, y: 240, text: "Cut scope, not quality: players forgive fewer features, not broken ones." }
    ]
  };

  S["multiplayer"] = {
    title: "Other players as a system", width: 900, height: 300,
    nodes: [
      { id: "players", x: 20, y: 110, w: 160, h: 74, label: "Players", sub: ["many inputs"], kind: "box" },
      { id: "match", x: 230, y: 110, w: 190, h: 74, label: "Matchmaking", sub: ["skill and latency"], kind: "accent" },
      { id: "server", x: 470, y: 110, w: 180, h: 74, label: "Authority", sub: ["server state"], kind: "box" },
      { id: "social", x: 700, y: 110, w: 180, h: 74, label: "Social system", sub: ["teams and rivals"], kind: "good" }
    ],
    edges: [
      { from: "players", to: "match" }, { from: "match", to: "server" }, { from: "server", to: "social" }
    ],
    labels: [
      { x: 450, y: 255, text: "Human opponents become the content, and the hardest balance problem." }
    ]
  };

  S["accessibility"] = {
    title: "Universal design and the curb-cut effect", width: 900, height: 300,
    nodes: [
      { id: "motor", x: 20, y: 30, w: 190, h: 66, label: "Motor", kind: "box" },
      { id: "vision", x: 235, y: 30, w: 190, h: 66, label: "Vision", kind: "box" },
      { id: "hearing", x: 450, y: 30, w: 190, h: 66, label: "Hearing", kind: "box" },
      { id: "cog", x: 665, y: 30, w: 215, h: 66, label: "Cognitive", kind: "box" },
      { id: "base", x: 330, y: 170, w: 240, h: 84, label: "Universal design", sub: ["accommodations lift everyone"], kind: "good" }
    ],
    edges: [
      { from: "motor", to: "base", dashed: true },
      { from: "vision", to: "base", dashed: true },
      { from: "hearing", to: "base", dashed: true },
      { from: "cog", to: "base", dashed: true }
    ],
    labels: [
      { x: 450, y: 285, text: "Design for the edges; the center benefits too." }
    ]
  };

  S["genre-map"] = {
    title: "Genres are conventions, not laws", width: 900, height: 280,
    nodes: [
      { id: "action", x: 20, y: 100, w: 170, h: 74, label: "Action", kind: "box" },
      { id: "rpg", x: 220, y: 100, w: 170, h: 74, label: "RPG", kind: "box" },
      { id: "strat", x: 420, y: 100, w: 180, h: 74, label: "Strategy", kind: "box" },
      { id: "hybrid", x: 650, y: 100, w: 230, h: 74, label: "Hybrid", sub: ["conventions recombine"], kind: "accent" }
    ],
    edges: [
      { from: "action", to: "hybrid" }, { from: "rpg", to: "hybrid" }, { from: "strat", to: "hybrid" }
    ],
    labels: [
      { x: 450, y: 240, text: "The interesting work usually happens between genres." }
    ]
  };

  S["capstone"] = {
    title: "The capstone loop", width: 900, height: 300,
    nodes: [
      { id: "pitch", x: 20, y: 110, w: 170, h: 74, label: "Pitch", sub: ["one page"], kind: "box" },
      { id: "proto", x: 230, y: 110, w: 190, h: 74, label: "Prototype", sub: ["5-10 minutes"], kind: "accent" },
      { id: "test", x: 460, y: 110, w: 180, h: 74, label: "Playtest", sub: ["three testers"], kind: "box" },
      { id: "post", x: 680, y: 110, w: 200, h: 74, label: "Postmortem", sub: ["what you cut"], kind: "good" }
    ],
    edges: [
      { from: "pitch", to: "proto" }, { from: "proto", to: "test" }, { from: "test", to: "post" }
    ],
    labels: [
      { x: 450, y: 255, text: "The capstone is the entire course compressed into one loop." }
    ]
  };

  /* --------------------- lesson / phase -> diagram --------------------- */
  var DIAGRAM_FOR = {
    p1: "experience-stack", p1l1: "experience-stack", p1l2: "mda", p1l3: "flow-channel", p1l4: "mda",
    p2: "core-loop", p2l1: "core-loop", p2l2: "decision-space", p2l3: "emergence", p2l4: "game-feel",
    p3: "flow-channel", p3l1: "sdt", p3l2: "reward-schedule", p3l3: "flow-channel", p3l4: "scaffolding",
    p4: "economy", p4l1: "randomness", p4l2: "balance-triangle", p4l3: "economy", p4l4: "progression-curve",
    p5: "level-guidance", p5l1: "level-guidance", p5l2: "world-structure", p5l3: "env-story", p5l4: "world-structure",
    p6: "encounter", p6l1: "puzzle-loop", p6l2: "encounter", p6l3: "ai-loop", p6l4: "boss-phases",
    p7: "narrative-layers", p7l1: "narrative-layers", p7l2: "branching", p7l3: "theme", p7l4: "emotional-palette",
    p8: "iteration-loop", p8l1: "iteration-loop", p8l2: "playtest-loop", p8l3: "scope-triangle", p8l4: "reward-schedule",
    p9: "capstone", p9l1: "multiplayer", p9l2: "accessibility", p9l3: "genre-map", p9l4: "capstone"
  };

  function get(key) {
    var spec = S[key];
    if (!spec) return null;
    return { title: spec.title, svg: render(spec) };
  }

  window.DIAGRAMS = { get: get, spec: S, map: DIAGRAM_FOR };
})();
