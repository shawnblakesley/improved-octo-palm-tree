/* =========================================================================
   Architectural diagrams.
   A tiny flowchart engine renders specs into inline SVG so diagrams inherit
   the site theme (light/dark) via CSS variables. No dependencies.

   To add a diagram: add a spec to DIAGRAMS and map a lesson/phase id to its
   key in DIAGRAM_FOR.
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

    return '<svg class="dg" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(spec.title || "Architecture diagram") + '" preserveAspectRatio="xMidYMid meet">' +
      "<defs>" + markers + "</defs>" + edges + boxes + extras + "</svg>";
  }

  /* ------------------------------ specs ------------------------------ */
  var S = {};

  S["lifecycle"] = {
    title: "Model lifecycle", width: 900, height: 300,
    nodes: [
      { id: "data", x: 10, y: 100, w: 140, h: 84, label: "Data", sub: ["45T tokens", "text + images"], kind: "box" },
      { id: "tok", x: 180, y: 100, w: 130, h: 84, label: "Tokenizer", sub: ["~129k vocab", "byte-level BPE"], kind: "box" },
      { id: "pre", x: 340, y: 100, w: 150, h: 84, label: "Pretraining", sub: ["next-token", "32T+ / 45T tokens"], kind: "accent" },
      { id: "post", x: 520, y: 100, w: 160, h: 84, label: "Post-training", sub: ["SFT -> RL -> OPD", "reasoning + agentic"], kind: "accent" },
      { id: "eval", x: 710, y: 100, w: 120, h: 84, label: "Evaluation", sub: ["loss + tasks", "harness"], kind: "box" },
      { id: "dep", x: 760, y: 210, w: 130, h: 70, label: "Deployment", sub: ["quantize + serve"], kind: "gold" }
    ],
    edges: [
      { from: "data", to: "tok", label: "clean + dedup" },
      { from: "tok", to: "pre", label: "token ids" },
      { from: "pre", to: "post", label: "base model" },
      { from: "post", to: "eval", label: "checkpoints" },
      { from: "eval", to: "dep", label: "ship", fromSide: "b", toSide: "t" }
    ],
    labels: [
      { x: 450, y: 250, text: "Learn the pipeline first; each phase zooms into one box.", anchor: "middle" }
    ]
  };

  S["regression-to-mlp"] = {
    title: "From linear regression to a network", width: 900, height: 280,
    nodes: [
      { id: "x1", x: 30, y: 40, w: 90, h: 56, label: "input x", kind: "ghost" },
      { id: "lin1", x: 180, y: 40, w: 150, h: 56, label: "linear wx + b", kind: "box" },
      { id: "yhat1", x: 390, y: 40, w: 110, h: 56, label: "prediction", kind: "box" },
      { id: "loss1", x: 560, y: 40, w: 130, h: 56, label: "squared error", kind: "ghost" },
      { id: "x2", x: 30, y: 180, w: 90, h: 56, label: "input x", kind: "ghost" },
      { id: "lin2", x: 180, y: 180, w: 130, h: 56, label: "linear", kind: "box" },
      { id: "act", x: 350, y: 180, w: 130, h: 56, label: "nonlinearity", kind: "accent" },
      { id: "lin3", x: 520, y: 180, w: 130, h: 56, label: "linear", kind: "box" },
      { id: "loss2", x: 700, y: 180, w: 150, h: 56, label: "prediction + loss", kind: "ghost" }
    ],
    edges: [
      { from: "x1", to: "lin1" }, { from: "lin1", to: "yhat1" }, { from: "yhat1", to: "loss1" },
      { from: "x2", to: "lin2" }, { from: "lin2", to: "act" }, { from: "act", to: "lin3" }, { from: "lin3", to: "loss2" }
    ],
    labels: [
      { x: 240, y: 22, text: "Linear model", anchor: "middle" },
      { x: 240, y: 162, text: "Neural network: learned features", anchor: "middle" }
    ]
  };

  S["training-loop"] = {
    title: "The training loop", width: 900, height: 300,
    nodes: [
      { id: "batch", x: 30, y: 120, w: 140, h: 70, label: "mini-batch", sub: ["data loader"], kind: "ghost" },
      { id: "fwd", x: 220, y: 120, w: 140, h: 70, label: "forward pass", sub: ["mixed precision"], kind: "box" },
      { id: "loss", x: 410, y: 120, w: 130, h: 70, label: "loss", sub: ["cross-entropy"], kind: "accent" },
      { id: "bwd", x: 590, y: 120, w: 140, h: 70, label: "backward pass", sub: ["autograd"], kind: "box" },
      { id: "opt", x: 780, y: 120, w: 110, h: 70, label: "optimizer", sub: ["clip + step"], kind: "gold" }
    ],
    edges: [
      { from: "batch", to: "fwd" }, { from: "fwd", to: "loss" }, { from: "loss", to: "bwd" }, { from: "bwd", to: "opt" },
      { from: "opt", to: "fwd", label: "repeat", dashed: true, fromSide: "t", toSide: "t", color: "accent" }
    ],
    labels: [
      { x: 450, y: 250, text: "Normalization + residuals keep the signal healthy; precision and clipping keep it stable." }
    ]
  };

  S["transformer-stack"] = {
    title: "Decoder-only Transformer stack", width: 900, height: 380,
    nodes: [
      { id: "tok", x: 30, y: 160, w: 120, h: 64, label: "tokens", sub: ["ids"], kind: "ghost" },
      { id: "emb", x: 190, y: 160, w: 130, h: 64, label: "embedding", sub: ["+ positions"], kind: "box" },
      { id: "b1", x: 360, y: 60, w: 150, h: 64, label: "block 1", kind: "accent" },
      { id: "b2", x: 360, y: 138, w: 150, h: 64, label: "block 2", kind: "accent" },
      { id: "dots", x: 360, y: 216, w: 150, h: 44, label: "...", kind: "ghost" },
      { id: "bn", x: 360, y: 276, w: 150, h: 64, label: "block N", kind: "accent" },
      { id: "norm", x: 560, y: 160, w: 120, h: 64, label: "RMSNorm", kind: "box" },
      { id: "head", x: 720, y: 160, w: 150, h: 64, label: "LM head", sub: ["logits over vocab"], kind: "box" }
    ],
    edges: [
      { from: "tok", to: "emb" }, { from: "emb", to: "b2" },
      { from: "b1", to: "b2", fromSide: "b", toSide: "t", dashed: true },
      { from: "b2", to: "dots", fromSide: "b", toSide: "t", dashed: true },
      { from: "dots", to: "bn", fromSide: "b", toSide: "t", dashed: true },
      { from: "bn", to: "norm" }, { from: "norm", to: "head" }
    ],
    labels: [
      { x: 435, y: 40, text: "attention + feed-forward, repeated", anchor: "middle" }
    ]
  };

  S["attention"] = {
    title: "Self-attention", width: 900, height: 320,
    nodes: [
      { id: "h", x: 20, y: 130, w: 120, h: 64, label: "hidden states", kind: "ghost" },
      { id: "q", x: 200, y: 30, w: 120, h: 56, label: "Q", sub: ["query: what to ask"], kind: "box" },
      { id: "k", x: 200, y: 130, w: 120, h: 56, label: "K", sub: ["key: what is offered"], kind: "box" },
      { id: "v", x: 200, y: 230, w: 120, h: 56, label: "V", sub: ["value: content"], kind: "box" },
      { id: "scores", x: 380, y: 130, w: 150, h: 64, label: "scores QK^T / sqrt(d)", kind: "accent" },
      { id: "mask", x: 560, y: 130, w: 110, h: 64, label: "causal mask", kind: "ghost" },
      { id: "soft", x: 700, y: 130, w: 90, h: 64, label: "softmax", kind: "box" },
      { id: "out", x: 700, y: 30, w: 170, h: 56, label: "weighted sum of V", sub: ["concatenate heads"], kind: "good" }
    ],
    edges: [
      { from: "h", to: "q", fromSide: "r", toSide: "l" },
      { from: "h", to: "k" }, { from: "h", to: "v", fromSide: "r", toSide: "l" },
      { from: "q", to: "scores", fromSide: "r", toSide: "t" },
      { from: "k", to: "scores" },
      { from: "scores", to: "mask" }, { from: "mask", to: "soft" },
      { from: "soft", to: "out", fromSide: "t", toSide: "b" },
      { from: "v", to: "out", label: "read values", dashed: true, fromSide: "t", toSide: "l" }
    ]
  };

  S["transformer-block"] = {
    title: "One Transformer block (pre-norm)", width: 900, height: 320,
    nodes: [
      { id: "in", x: 20, y: 140, w: 90, h: 50, label: "x", kind: "ghost" },
      { id: "n1", x: 150, y: 140, w: 110, h: 50, label: "RMSNorm", kind: "box" },
      { id: "att", x: 300, y: 140, w: 150, h: 50, label: "attention", kind: "accent" },
      { id: "add1", x: 490, y: 140, w: 60, h: 50, label: "+", kind: "good" },
      { id: "n2", x: 590, y: 140, w: 110, h: 50, label: "RMSNorm", kind: "box" },
      { id: "ffn", x: 740, y: 140, w: 140, h: 50, label: "SwiGLU FFN", kind: "accent" },
      { id: "add2", x: 490, y: 250, w: 60, h: 50, label: "+", kind: "good" },
      { id: "out", x: 740, y: 250, w: 140, h: 50, label: "to next block", kind: "ghost" }
    ],
    edges: [
      { from: "in", to: "n1" }, { from: "n1", to: "att" }, { from: "att", to: "add1" },
      { from: "add1", to: "n2" }, { from: "n2", to: "ffn" }, { from: "ffn", to: "out" },
      { from: "in", to: "add1", label: "residual", dashed: true, color: "good", fromSide: "b", toSide: "b" },
      { from: "add1", to: "add2", label: "residual", dashed: true, color: "good", fromSide: "b", toSide: "l" },
      { from: "add2", to: "out", fromSide: "r", toSide: "l" }
    ]
  };

  S["rope"] = {
    title: "Rotary position embedding (RoPE)", width: 900, height: 300,
    nodes: [
      { id: "q", x: 120, y: 60, w: 150, h: 70, label: "query at position m", sub: ["rotate by m*theta"], kind: "box" },
      { id: "k", x: 120, y: 180, w: 150, h: 70, label: "key at position n", sub: ["rotate by n*theta"], kind: "box" },
      { id: "dot", x: 400, y: 120, w: 180, h: 70, label: "q^T k", sub: ["depends on (n - m)"], kind: "accent" },
      { id: "rel", x: 680, y: 120, w: 190, h: 70, label: "relative distance", sub: ["length extrapolation"], kind: "good" }
    ],
    edges: [
      { from: "q", to: "dot", fromSide: "r", toSide: "l" },
      { from: "k", to: "dot", fromSide: "r", toSide: "l" },
      { from: "dot", to: "rel" }
    ],
    labels: [
      { x: 450, y: 280, text: "Rotating both vectors makes attention scores depend on how far apart tokens are, not where they sit." }
    ]
  };

  S["data-pipeline"] = {
    title: "Pretraining data pipeline", width: 900, height: 240,
    nodes: [
      { id: "crawl", x: 10, y: 90, w: 120, h: 64, label: "crawl", sub: ["web + code"], kind: "ghost" },
      { id: "extract", x: 160, y: 90, w: 120, h: 64, label: "extract text", kind: "box" },
      { id: "filter", x: 310, y: 90, w: 130, h: 64, label: "quality filter", sub: ["heuristics"], kind: "accent" },
      { id: "dedup", x: 470, y: 90, w: 130, h: 64, label: "dedup", sub: ["MinHash"], kind: "accent" },
      { id: "mix", x: 630, y: 90, w: 120, h: 64, label: "mixture", sub: ["domain weights"], kind: "box" },
      { id: "tokens", x: 780, y: 90, w: 110, h: 64, label: "tokens", kind: "gold" }
    ],
    edges: [
      { from: "crawl", to: "extract" }, { from: "extract", to: "filter" }, { from: "filter", to: "dedup" },
      { from: "dedup", to: "mix" }, { from: "mix", to: "tokens" }
    ],
    labels: [
      { x: 450, y: 205, text: "Each stage removes data. Track how much, and watch for contamination with your eval sets." }
    ]
  };

  S["parallelism"] = {
    title: "Distributed training strategies", width: 900, height: 360,
    nodes: [
      { id: "dp", x: 20, y: 40, w: 390, h: 120, label: "Data parallel (DDP)", sub: ["full model per GPU", "split the batch, average gradients"], kind: "box" },
      { id: "tp", x: 470, y: 40, w: 410, h: 120, label: "Tensor parallel (TP)", sub: ["split each weight matrix", "needs fast interconnect"], kind: "box" },
      { id: "pp", x: 20, y: 200, w: 390, h: 120, label: "Pipeline parallel (PP)", sub: ["different layers per stage", "micro-batches fill the pipe"], kind: "box" },
      { id: "ep", x: 470, y: 200, w: 410, h: 120, label: "Expert parallel (EP)", sub: ["experts spread across GPUs", "all-to-all routing"], kind: "accent" }
    ],
    edges: [],
    labels: [
      { x: 450, y: 345, text: "Large runs combine several: DeepSeek-V3 used TP + PP + EP + ZeRO-style sharding." }
    ]
  };

  S["scaling-law"] = {
    title: "Scaling laws", width: 900, height: 320,
    nodes: [
      { id: "small", x: 60, y: 200, w: 120, h: 60, label: "small runs", sub: ["cheap"], kind: "ghost" },
      { id: "fit", x: 260, y: 200, w: 150, h: 60, label: "fit power law", kind: "accent" },
      { id: "pred", x: 490, y: 200, w: 160, h: 60, label: "predict loss", sub: ["before spending"], kind: "box" },
      { id: "chin", x: 710, y: 200, w: 160, h: 60, label: "Chinchilla", sub: ["~20 tokens / param"], kind: "gold" }
    ],
    edges: [
      { from: "small", to: "fit" }, { from: "fit", to: "pred" }, { from: "pred", to: "chin" }
    ],
    labels: [
      { x: 450, y: 50, text: "Loss falls predictably with compute, parameters, and data." },
      { x: 450, y: 80, text: "Inference-aware laws justify training smaller and longer than Chinchilla-optimal." }
    ]
  };

  S["posttraining"] = {
    title: "Post-training pipeline", width: 900, height: 280,
    nodes: [
      { id: "base", x: 20, y: 100, w: 130, h: 70, label: "base model", sub: ["predicts text"], kind: "ghost" },
      { id: "sft", x: 190, y: 100, w: 130, h: 70, label: "SFT", sub: ["demonstrations"], kind: "accent" },
      { id: "pref", x: 360, y: 30, w: 150, h: 70, label: "preference learning", sub: ["DPO / reward model"], kind: "box" },
      { id: "rl", x: 360, y: 170, w: 150, h: 70, label: "RL", sub: ["PPO / GRPO + KL"], kind: "box" },
      { id: "cons", x: 560, y: 100, w: 150, h: 70, label: "consolidation", sub: ["on-policy distill"], kind: "accent" },
      { id: "asst", x: 760, y: 100, w: 130, h: 70, label: "assistant", sub: ["reasoning + tools"], kind: "good" }
    ],
    edges: [
      { from: "base", to: "sft" },
      { from: "sft", to: "pref", fromSide: "r", toSide: "l" },
      { from: "sft", to: "rl", fromSide: "r", toSide: "l" },
      { from: "pref", to: "cons", fromSide: "r", toSide: "l" },
      { from: "rl", to: "cons", fromSide: "r", toSide: "l" },
      { from: "cons", to: "asst" }
    ]
  };

  S["grpo"] = {
    title: "GRPO reinforcement learning loop", width: 900, height: 340,
    nodes: [
      { id: "prompt", x: 20, y: 140, w: 120, h: 60, label: "prompt", kind: "ghost" },
      { id: "policy", x: 180, y: 140, w: 130, h: 60, label: "policy model", kind: "accent" },
      { id: "group", x: 350, y: 40, w: 140, h: 60, label: "sample group", sub: ["G responses"], kind: "box" },
      { id: "reward", x: 350, y: 140, w: 140, h: 60, label: "reward", sub: ["rule / verifier"], kind: "box" },
      { id: "adv", x: 540, y: 140, w: 150, h: 60, label: "group-relative", sub: ["advantage"], kind: "accent" },
      { id: "upd", x: 730, y: 140, w: 150, h: 60, label: "policy update", sub: ["clipped + KL"], kind: "gold" },
      { id: "ref", x: 540, y: 250, w: 150, h: 60, label: "reference model", sub: ["KL anchor"], kind: "ghost" }
    ],
    edges: [
      { from: "prompt", to: "policy" },
      { from: "policy", to: "group", fromSide: "r", toSide: "l" },
      { from: "group", to: "reward", fromSide: "b", toSide: "t" },
      { from: "reward", to: "adv" },
      { from: "adv", to: "upd" },
      { from: "ref", to: "upd", label: "KL", dashed: true, fromSide: "r", toSide: "b" }
    ],
    labels: [
      { x: 450, y: 325, text: "No value network: the group of answers provides its own baseline." }
    ]
  };

  S["moe"] = {
    title: "Mixture-of-Experts layer", width: 900, height: 320,
    nodes: [
      { id: "tok", x: 20, y: 130, w: 110, h: 60, label: "token", kind: "ghost" },
      { id: "router", x: 170, y: 130, w: 120, h: 60, label: "router", sub: ["scores experts"], kind: "accent" },
      { id: "e1", x: 350, y: 30, w: 150, h: 54, label: "expert 2 selected", kind: "good" },
      { id: "e2", x: 350, y: 110, w: 150, h: 54, label: "expert 7 selected", kind: "good" },
      { id: "e3", x: 350, y: 190, w: 150, h: 54, label: "expert 41 idle", kind: "ghost" },
      { id: "shared", x: 350, y: 265, w: 150, h: 44, label: "shared expert", sub: ["always on"], kind: "box" },
      { id: "comb", x: 580, y: 130, w: 150, h: 60, label: "weighted combine", kind: "accent" },
      { id: "out", x: 760, y: 130, w: 120, h: 60, label: "output", kind: "box" }
    ],
    edges: [
      { from: "tok", to: "router" },
      { from: "router", to: "e1", fromSide: "r", toSide: "l" },
      { from: "router", to: "e2", fromSide: "r", toSide: "l" },
      { from: "router", to: "e3", fromSide: "r", toSide: "l", dashed: true },
      { from: "router", to: "shared", fromSide: "b", toSide: "l", dashed: true },
      { from: "e1", to: "comb", fromSide: "r", toSide: "t" },
      { from: "e2", to: "comb", fromSide: "r", toSide: "l" },
      { from: "shared", to: "comb", fromSide: "r", toSide: "b" },
      { from: "comb", to: "out" }
    ],
    labels: [
      { x: 450, y: 20, text: "Total parameters stay large; active parameters per token stay small." }
    ]
  };

  S["mla"] = {
    title: "Multi-head Latent Attention vs standard KV cache", width: 900, height: 340,
    nodes: [
      { id: "h1", x: 20, y: 40, w: 110, h: 60, label: "hidden", kind: "ghost" },
      { id: "k1", x: 200, y: 20, w: 150, h: 50, label: "K per head", kind: "box" },
      { id: "v1", x: 200, y: 80, w: 150, h: 50, label: "V per head", kind: "box" },
      { id: "cache1", x: 420, y: 50, w: 200, h: 70, label: "large KV cache", sub: ["grows with context"], kind: "ghost" },
      { id: "h2", x: 20, y: 240, w: 110, h: 60, label: "hidden", kind: "ghost" },
      { id: "down", x: 200, y: 240, w: 150, h: 60, label: "down-projection", sub: ["latent c, cached"], kind: "accent" },
      { id: "up", x: 420, y: 240, w: 150, h: 60, label: "up-projection", sub: ["reconstruct K, V"], kind: "box" },
      { id: "cache2", x: 640, y: 240, w: 210, h: 60, label: "small latent cache", sub: ["~10% of the KV cache"], kind: "good" }
    ],
    edges: [
      { from: "h1", to: "k1", fromSide: "r", toSide: "l" },
      { from: "h1", to: "v1", fromSide: "r", toSide: "l" },
      { from: "k1", to: "cache1", fromSide: "r", toSide: "l" },
      { from: "v1", to: "cache1", fromSide: "r", toSide: "l" },
      { from: "h2", to: "down" }, { from: "down", to: "up" }, { from: "up", to: "cache2" }
    ],
    labels: [
      { x: 450, y: 165, text: "Standard attention caches full keys and values per head." },
      { x: 450, y: 185, text: "MLA caches a low-rank latent instead." }
    ]
  };

  S["hybrid-attention"] = {
    title: "Hybrid sparse attention (CSA + HCA + SWA)", width: 900, height: 340,
    nodes: [
      { id: "in", x: 20, y: 140, w: 110, h: 60, label: "hidden", kind: "ghost" },
      { id: "csa", x: 200, y: 30, w: 200, h: 70, label: "CSA", sub: ["compress KV, then top-k", "fine-grained retrieval"], kind: "accent" },
      { id: "hca", x: 200, y: 140, w: 200, h: 70, label: "HCA", sub: ["heavy compression", "global summary"], kind: "accent" },
      { id: "swa", x: 200, y: 250, w: 200, h: 70, label: "SWA", sub: ["recent window", "sharp local detail"], kind: "box" },
      { id: "merge", x: 480, y: 140, w: 160, h: 70, label: "merge", sub: ["combine branches"], kind: "box" },
      { id: "out", x: 700, y: 140, w: 180, h: 70, label: "output", sub: ["1M-token context"], kind: "good" }
    ],
    edges: [
      { from: "in", to: "csa", fromSide: "r", toSide: "l" },
      { from: "in", to: "hca", fromSide: "r", toSide: "l" },
      { from: "in", to: "swa", fromSide: "r", toSide: "l" },
      { from: "csa", to: "merge", fromSide: "r", toSide: "t" },
      { from: "hca", to: "merge", fromSide: "r", toSide: "l" },
      { from: "swa", to: "merge", fromSide: "r", toSide: "b" },
      { from: "merge", to: "out" }
    ]
  };

  S["ced-v4"] = {
    title: "DeepSeek-V4.1-Flash: causal encoder-decoder", width: 900, height: 400,
    nodes: [
      { id: "input", x: 20, y: 160, w: 130, h: 80, label: "text + images", sub: ["V4.1-Flash", "552B MoE backbone"], kind: "ghost" },
      { id: "enc", x: 190, y: 140, w: 180, h: 120, label: "causal encoder", sub: ["20 layers", "8B active per prefill", "SWA + compression"], kind: "accent" },
      { id: "proj", x: 410, y: 165, w: 150, h: 70, label: "project", sub: ["decoder KV from", "encoder hidden"], kind: "gold" },
      { id: "dec", x: 600, y: 140, w: 180, h: 120, label: "decoder", sub: ["20 layers", "16B active per token", "MoE + CSA2"], kind: "accent" },
      { id: "out", x: 800, y: 165, w: 90, h: 70, label: "tokens", kind: "good" },
      { id: "mhc", x: 190, y: 290, w: 590, h: 60, label: "mHC residual mixing + Muon optimizer + MTP heads", sub: ["training-stability and decoding machinery across the stack"], kind: "box" }
    ],
    edges: [
      { from: "input", to: "enc" },
      { from: "enc", to: "proj" },
      { from: "proj", to: "dec" },
      { from: "dec", to: "out" }
    ],
    labels: [
      { x: 300, y: 60, text: "Prefill reads the whole prompt: ~8B parameters active." },
      { x: 690, y: 60, text: "Decode generates tokens: ~16B active." }
    ]
  };

  S["kv-cache"] = {
    title: "KV cache: paging and tiering", width: 900, height: 300,
    nodes: [
      { id: "req", x: 20, y: 110, w: 120, h: 60, label: "request", kind: "ghost" },
      { id: "tokens", x: 180, y: 110, w: 150, h: 60, label: "tokens", sub: ["logical blocks"], kind: "box" },
      { id: "page", x: 370, y: 110, w: 170, h: 60, label: "paged KV cache", sub: ["non-contiguous blocks"], kind: "accent" },
      { id: "gpu", x: 590, y: 30, w: 280, h: 54, label: "GPU HBM", sub: ["hot blocks"], kind: "good" },
      { id: "cpu", x: 590, y: 100, w: 280, h: 54, label: "CPU memory", sub: ["inactive blocks"], kind: "box" },
      { id: "ssd", x: 590, y: 170, w: 280, h: 54, label: "SSD / cache store", sub: ["shared across replicas"], kind: "box" }
    ],
    edges: [
      { from: "req", to: "tokens" }, { from: "tokens", to: "page" },
      { from: "page", to: "gpu", fromSide: "r", toSide: "l" },
      { from: "page", to: "cpu", fromSide: "r", toSide: "l" },
      { from: "page", to: "ssd", fromSide: "r", toSide: "l" }
    ],
    labels: [
      { x: 450, y: 260, text: "Session state, not model weights, is usually the real limit on long context." }
    ]
  };

  S["quant-ladder"] = {
    title: "Precision ladder", width: 900, height: 260,
    nodes: [
      { id: "fp32", x: 20, y: 80, w: 170, h: 90, label: "FP32 / BF16", sub: ["2-4 bytes", "training masters"], kind: "box" },
      { id: "fp8", x: 230, y: 80, w: 190, h: 90, label: "FP8", sub: ["1 byte", "dense + KV cache"], kind: "accent" },
      { id: "fp4", x: 460, y: 80, w: 200, h: 90, label: "FP4 (MXFP4 / NVFP4)", sub: ["0.5 byte", "MoE expert weights"], kind: "accent" },
      { id: "int4", x: 700, y: 80, w: 190, h: 90, label: "INT4 (GPTQ / AWQ)", sub: ["0.5 byte", "weight-only"], kind: "box" }
    ],
    edges: [
      { from: "fp32", to: "fp8", label: "less memory" },
      { from: "fp8", to: "fp4" },
      { from: "fp4", to: "int4", dashed: true }
    ],
    labels: [
      { x: 450, y: 220, text: "Lower precision saves memory and bandwidth, but needs calibration and careful layers." }
    ]
  };

  S["pd-serving"] = {
    title: "Disaggregated serving", width: 900, height: 340,
    nodes: [
      { id: "client", x: 20, y: 140, w: 110, h: 64, label: "requests", kind: "ghost" },
      { id: "router", x: 170, y: 140, w: 140, h: 64, label: "router", sub: ["KV-aware"], kind: "accent" },
      { id: "prefill", x: 360, y: 40, w: 180, h: 90, label: "prefill pool", sub: ["compute-bound", "reads the prompt"], kind: "box" },
      { id: "decode", x: 360, y: 200, w: 180, h: 90, label: "decode pool", sub: ["memory-bound", "one token at a time"], kind: "box" },
      { id: "kv", x: 600, y: 120, w: 150, h: 90, label: "KV transfer", sub: ["NVLink / RDMA"], kind: "gold" },
      { id: "cache", x: 600, y: 250, w: 270, h: 60, label: "shared cache + speculative decoding", sub: ["MTP / DSpark drafts"], kind: "accent" },
      { id: "resp", x: 780, y: 40, w: 100, h: 60, label: "response", kind: "good" }
    ],
    edges: [
      { from: "client", to: "router" },
      { from: "router", to: "prefill", fromSide: "r", toSide: "l" },
      { from: "router", to: "decode", fromSide: "r", toSide: "l" },
      { from: "prefill", to: "kv", fromSide: "r", toSide: "l" },
      { from: "kv", to: "decode", fromSide: "b", toSide: "r" },
      { from: "decode", to: "resp", fromSide: "r", toSide: "l" }
    ]
  };

  S["speculative"] = {
    title: "Speculative decoding", width: 900, height: 260,
    nodes: [
      { id: "ctx", x: 20, y: 90, w: 130, h: 70, label: "context", kind: "ghost" },
      { id: "draft", x: 190, y: 90, w: 170, h: 70, label: "draft model", sub: ["propose n tokens"], kind: "accent" },
      { id: "verify", x: 400, y: 90, w: 180, h: 70, label: "target verifies", sub: ["one parallel pass"], kind: "box" },
      { id: "accept", x: 620, y: 90, w: 180, h: 70, label: "accept k tokens", sub: ["k <= n"], kind: "good" },
      { id: "next", x: 830, y: 90, w: 60, h: 70, label: "next", kind: "ghost" }
    ],
    edges: [
      { from: "ctx", to: "draft" }, { from: "draft", to: "verify" }, { from: "verify", to: "accept" }, { from: "accept", to: "next" }
    ],
    labels: [
      { x: 450, y: 210, text: "Output is unchanged; only the acceptance rate decides whether it is faster." }
    ]
  };

  /* --------------------- lesson / phase -> diagram --------------------- */
  var DIAGRAM_FOR = {
    p0: "lifecycle", p0l2: "lifecycle",
    p1: "regression-to-mlp", p1l6: "regression-to-mlp", p1l4: "training-loop",
    p2: "training-loop", p2l1: "transformer-block", p2l2: "training-loop", p2l3: "quant-ladder", p2l5: "training-loop",
    p3: "transformer-stack", p3l2: "attention", p3l3: "transformer-block",
    p3l4: "rope", p3l5: "transformer-stack",
    p4: "parallelism", p4l1: "data-pipeline", p4l2: "scaling-law", p4l3: "parallelism",
    p5: "posttraining", p5l1: "posttraining", p5l2: "posttraining", p5l3: "grpo",
    p5l4: "grpo", p5l5: "posttraining", p5l6: "grpo",
    p6: "ced-v4", p6l1: "moe", p6l2: "mla", p6l3: "hybrid-attention", p6l4: "training-loop", p6l5: "ced-v4", p6l6: "speculative",
    p7: "pd-serving", p7l1: "quant-ladder", p7l2: "pd-serving", p7l3: "kv-cache", p7l4: "pd-serving",
    p8: "lifecycle", p8l1: "ced-v4"
  };

  function get(key) {
    var spec = S[key];
    if (!spec) return null;
    return { title: spec.title, svg: render(spec) };
  }

  window.DIAGRAMS = { get: get, spec: S, map: DIAGRAM_FOR };
})();
