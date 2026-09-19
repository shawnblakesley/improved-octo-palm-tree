/* =========================================================================
   Curated YouTube references, keyed by phase id and lesson id.
   Links were collected from web search results. Titles are shortened for
   display; the channel name is shown as the source.

   To add a video, append to the relevant array:
     { title: "...", channel: "...", url: "https://www.youtube.com/watch?v=..." }
   ========================================================================= */

(function () {
  "use strict";

  function v(title, channel, url) { return { title: title, channel: channel, url: url }; }

  var KARPATHY = "Andrej Karpathy";
  var THREE_B1B = "3Blue1Brown";

  var VIDEO_FOR = {
    /* ------------------------------ Phase 0 ------------------------------ */
    p0: [
      v("Deep Dive into LLMs like ChatGPT", KARPATHY, "https://www.youtube.com/watch?v=7xTGNNLPyMI"),
      v("CS336: Language Modeling from Scratch (2026 lectures)", "Stanford Online", "https://www.youtube.com/playlist?list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV"),
      v("CS336: Language Modeling from Scratch (2025 lectures)", "Stanford Online", "https://www.youtube.com/playlist?list=PLoROMvodv4rOY23Y0BoGoBGgQ1zmU_MT_")
    ],
    p0l1: [
      v("The spelled-out intro to backpropagation: building micrograd", KARPATHY, "https://www.youtube.com/watch?v=VMj-3S1tku0")
    ],
    p0l2: [
      v("Deep Dive into LLMs like ChatGPT", KARPATHY, "https://www.youtube.com/watch?v=7xTGNNLPyMI")
    ],

    /* ------------------------------ Phase 1 ------------------------------ */
    p1: [
      v("But what is a neural network? (Deep Learning ch.1)", THREE_B1B, "https://www.youtube.com/watch?v=aircAruvnKk"),
      v("Gradient descent, how neural networks learn (ch.2)", THREE_B1B, "https://www.youtube.com/watch?v=IHZwWFHWa-w"),
      v("The spelled-out intro to backpropagation: building micrograd", KARPATHY, "https://www.youtube.com/watch?v=VMj-3S1tku0")
    ],
    p1l1: [v("But what is a neural network? (Deep Learning ch.1)", THREE_B1B, "https://www.youtube.com/watch?v=aircAruvnKk")],
    p1l2: [v("Building micrograd: backpropagation from scratch", KARPATHY, "https://www.youtube.com/watch?v=VMj-3S1tku0")],
    p1l3: [v("Building micrograd: backpropagation from scratch", KARPATHY, "https://www.youtube.com/watch?v=VMj-3S1tku0")],
    p1l4: [v("Gradient descent, how neural networks learn", THREE_B1B, "https://www.youtube.com/watch?v=IHZwWFHWa-w")],
    p1l5: [v("But what is a neural network?", THREE_B1B, "https://www.youtube.com/watch?v=aircAruvnKk")],
    p1l6: [v("But what is a neural network?", THREE_B1B, "https://www.youtube.com/watch?v=aircAruvnKk")],

    /* ------------------------------ Phase 2 ------------------------------ */
    p2: [
      v("Neural Networks: Zero to Hero (makemore series)", KARPATHY, "https://www.youtube.com/watch?v=VMj-3S1tku0"),
      v("CS336: PyTorch and resource accounting", "Stanford Online", "https://www.youtube.com/playlist?list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV")
    ],
    p2l1: [v("But what is a neural network? (Deep Learning ch.1)", THREE_B1B, "https://www.youtube.com/watch?v=aircAruvnKk")],
    p2l2: [v("Gradient descent, how neural networks learn", THREE_B1B, "https://www.youtube.com/watch?v=IHZwWFHWa-w")],
    p2l3: [v("Quantization deep dive: FP8 and FP4 (precision formats)", "Quantization series", "https://www.youtube.com/watch?v=_hhbzZeQ8sY")],
    p2l4: [v("Let's build the GPT Tokenizer (sequences)", KARPATHY, "https://www.youtube.com/watch?v=zduSFxRajkE")],

    /* ------------------------------ Phase 3 ------------------------------ */
    p3: [
      v("Let's build GPT: from scratch, in code, spelled out", KARPATHY, "https://www.youtube.com/watch?v=kCc8FmEb1nY"),
      v("Let's build the GPT Tokenizer", KARPATHY, "https://www.youtube.com/watch?v=zduSFxRajkE"),
      v("CS336: Architecture and hyperparameters", "Stanford Online", "https://www.youtube.com/playlist?list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV")
    ],
    p3l1: [v("Let's build the GPT Tokenizer", KARPATHY, "https://www.youtube.com/watch?v=zduSFxRajkE")],
    p3l2: [v("Let's build GPT: from scratch, in code, spelled out", KARPATHY, "https://www.youtube.com/watch?v=kCc8FmEb1nY")],
    p3l3: [v("Let's build GPT: from scratch, in code, spelled out", KARPATHY, "https://www.youtube.com/watch?v=kCc8FmEb1nY")],
    p3l4: [
      v("How Rotary Position Embedding Supercharges Modern LLMs", "Jia-Bin Huang", "https://www.youtube.com/watch?v=SMBkImDWOyQ"),
      v("Rotary Positional Encodings, explained visually", "Vizuara", "https://www.youtube.com/watch?v=a17DlNxkv2k"),
      v("Why rotating vectors solves positional encoding", "ExplainingAI", "https://www.youtube.com/watch?v=qKUobBR5R1A")
    ],
    p3l5: [v("Let's build GPT: from scratch", KARPATHY, "https://www.youtube.com/watch?v=kCc8FmEb1nY")],
    p3l6: [v("Let's build GPT: from scratch", KARPATHY, "https://www.youtube.com/watch?v=kCc8FmEb1nY")],

    /* ------------------------------ Phase 4 ------------------------------ */
    p4: [
      v("Scale ANY Model: DDP, ZeRO/FSDP, Pipeline and Tensor Parallelism", "Distributed training walkthrough", "https://www.youtube.com/watch?v=r3DwMv84H9I"),
      v("Chinchilla Scaling Laws: compute-optimal training", "Paper walkthrough", "https://www.youtube.com/watch?v=6_7pvbbc_Rg"),
      v("How FlashAttention works", "Jia-Bin Huang", "https://www.youtube.com/watch?v=gBMO1JZav44"),
      v("CS336: Parallelism, kernels, scaling laws, data", "Stanford Online", "https://www.youtube.com/playlist?list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV")
    ],
    p4l1: [v("CS336: Data (collection, filtering, dedup)", "Stanford Online", "https://www.youtube.com/playlist?list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV")],
    p4l2: [
      v("Chinchilla Scaling Laws: compute-optimal training", "Paper walkthrough", "https://www.youtube.com/watch?v=6_7pvbbc_Rg"),
      v("Scaling Laws Explained, Part 2: compute-optimal training", "Paper walkthrough", "https://www.youtube.com/watch?v=ePICNeE8SVE")
    ],
    p4l3: [v("DDP, ZeRO/FSDP, Pipeline and Tensor Parallelism", "Distributed training walkthrough", "https://www.youtube.com/watch?v=r3DwMv84H9I")],
    p4l4: [v("CS336: training stability and systems", "Stanford Online", "https://www.youtube.com/playlist?list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV")],
    p4l5: [v("How FlashAttention works", "Jia-Bin Huang", "https://www.youtube.com/watch?v=gBMO1JZav44")],
    p4l6: [v("CS336: Evaluation", "Stanford Online", "https://www.youtube.com/playlist?list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV")],

    /* ------------------------------ Phase 5 ------------------------------ */
    p5: [
      v("RLHF with math derivations and PyTorch code", "Umar Jamil", "https://www.youtube.com/watch?v=qGyFrqc34yc"),
      v("RLHF explained", "IBM Technology", "https://www.youtube.com/watch?v=T_X4XFwKX8k"),
      v("Fine-tuning LLMs on human feedback (RLHF + DPO)", "Shaw Talebi", "https://www.youtube.com/watch?v=bbVoDXoPrPM"),
      v("DeepSeek R1 Theory: architecture, GRPO, KL divergence", "freeCodeCamp.org", "https://www.youtube.com/watch?v=K34gBCjzni8"),
      v("GRPO explained with examples and exercises", "RL tutorial", "https://www.youtube.com/watch?v=mXWiDU9-fOk")
    ],
    p5l1: [v("Fine-tuning LLMs on human feedback (RLHF + DPO)", "Shaw Talebi", "https://www.youtube.com/watch?v=bbVoDXoPrPM")],
    p5l2: [
      v("RLHF with math derivations and PyTorch code", "Umar Jamil", "https://www.youtube.com/watch?v=qGyFrqc34yc"),
      v("RLHF explained", "IBM Technology", "https://www.youtube.com/watch?v=T_X4XFwKX8k")
    ],
    p5l3: [
      v("GRPO: how DeepSeek R1's reinforcement learning works", "Arxiv Dives", "https://www.youtube.com/watch?v=90ImcYM0xWc"),
      v("GRPO explained with examples and exercises", "RL tutorial", "https://www.youtube.com/watch?v=mXWiDU9-fOk")
    ],
    p5l4: [v("DeepSeek R1 Theory: architecture, GRPO, KL divergence", "freeCodeCamp.org", "https://www.youtube.com/watch?v=K34gBCjzni8")],
    p5l5: [v("DeepSeek R1 Theory (reasoning distillation)", "freeCodeCamp.org", "https://www.youtube.com/watch?v=K34gBCjzni8")],
    p5l6: [v("GRPO explained with examples and exercises", "RL tutorial", "https://www.youtube.com/watch?v=mXWiDU9-fOk")],
    p5l7: [v("DeepSeek R1 Theory (agentic and reasoning RL)", "freeCodeCamp.org", "https://www.youtube.com/watch?v=K34gBCjzni8")],

    /* ------------------------------ Phase 6 ------------------------------ */
    p6: [
      v("Mixture of Experts (MoE), visually explained", "Jia-Bin Huang", "https://www.youtube.com/watch?v=0QQlYR1r6pQ"),
      v("Mixture-of-Experts routing, visually explained", "Visually explained", "https://www.youtube.com/watch?v=hGd4kUHTFEU"),
      v("DeepSeek V4 Mixture of Experts architecture deep dive", "The AI Layers", "https://www.youtube.com/watch?v=HPKfInHC1PY"),
      v("How Rotary Position Embedding supercharges modern LLMs", "Jia-Bin Huang", "https://www.youtube.com/watch?v=SMBkImDWOyQ"),
      v("KV cache explained", "DataMListic", "https://www.youtube.com/watch?v=8nD5DeNGNHU"),
      v("Speculative decoding explained", "Adaptive ML", "https://www.youtube.com/watch?v=p23SblAIoXc")
    ],
    p6l1: [
      v("Mixture of Experts (MoE), visually explained", "Jia-Bin Huang", "https://www.youtube.com/watch?v=0QQlYR1r6pQ"),
      v("Mixture-of-Experts routing, visually explained", "Visually explained", "https://www.youtube.com/watch?v=hGd4kUHTFEU")
    ],
    p6l2: [
      v("Rotary Positional Encodings, explained visually (RoPE + MLA)", "Vizuara", "https://www.youtube.com/watch?v=a17DlNxkv2k"),
      v("KV cache explained", "DataMListic", "https://www.youtube.com/watch?v=8nD5DeNGNHU")
    ],
    p6l3: [
      v("KV cache explained", "DataMListic", "https://www.youtube.com/watch?v=8nD5DeNGNHU"),
      v("KV cache in LLM inference: technical deep dive", "AI Depth School", "https://www.youtube.com/watch?v=R-gfZqA6IWc")
    ],
    p6l4: [v("CS336: training stability, kernels, and systems", "Stanford Online", "https://www.youtube.com/playlist?list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV")],
    p6l5: [v("DeepSeek V4 architecture deep dive (MoE, multimodal context)", "The AI Layers", "https://www.youtube.com/watch?v=HPKfInHC1PY")],
    p6l6: [v("Speculative decoding explained", "Adaptive ML", "https://www.youtube.com/watch?v=p23SblAIoXc")],

    /* ------------------------------ Phase 7 ------------------------------ */
    p7: [
      v("vLLM fully explained: page attention and continuous batching", "Explainer", "https://www.youtube.com/watch?v=TVdbuxAOonA"),
      v("LLM quantization techniques explained: GPTQ, AWQ, GGUF", "Joydeep Bhattacharjee", "https://www.youtube.com/watch?v=0pF6GdbwMo4"),
      v("Quantization deep dive: FP8 and FP4", "Quantization series", "https://www.youtube.com/watch?v=_hhbzZeQ8sY"),
      v("KV cache explained", "DataMListic", "https://www.youtube.com/watch?v=8nD5DeNGNHU"),
      v("Flash Attention: the fastest attention mechanism?", "Tales Of Tensors", "https://www.youtube.com/watch?v=eJn6zsbrqUM")
    ],
    p7l1: [
      v("LLM quantization techniques explained: GPTQ, AWQ, GGUF", "Joydeep Bhattacharjee", "https://www.youtube.com/watch?v=0pF6GdbwMo4"),
      v("Quantization deep dive: FP8 and FP4", "Quantization series", "https://www.youtube.com/watch?v=_hhbzZeQ8sY"),
      v("LLM quantization explained: GPTQ, AWQ, QLoRA, GGUF", "Tales Of Tensors", "https://www.youtube.com/watch?v=WmvZwR4rKJg")
    ],
    p7l2: [v("vLLM fully explained: page attention and continuous batching", "Explainer", "https://www.youtube.com/watch?v=TVdbuxAOonA")],
    p7l3: [
      v("KV cache explained", "DataMListic", "https://www.youtube.com/watch?v=8nD5DeNGNHU"),
      v("KV cache in LLMs explained visually", "Explainer", "https://www.youtube.com/watch?v=7OrMFn86PlM")
    ],
    p7l4: [v("vLLM: tensor parallelism and distributed serving", "Explainer", "https://www.youtube.com/watch?v=TVdbuxAOonA")],
    p7l5: [v("vLLM fully explained", "Explainer", "https://www.youtube.com/watch?v=TVdbuxAOonA")],

    /* ------------------------------ Phase 8 ------------------------------ */
    p8: [
      v("Deep Dive into LLMs like ChatGPT", KARPATHY, "https://www.youtube.com/watch?v=7xTGNNLPyMI"),
      v("CS336: full course", "Stanford Online", "https://www.youtube.com/playlist?list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV"),
      v("DeepSeek R1 Theory: architecture and RL", "freeCodeCamp.org", "https://www.youtube.com/watch?v=K34gBCjzni8")
    ],
    p8l1: [
      v("DeepSeek V4 Mixture of Experts architecture deep dive", "The AI Layers", "https://www.youtube.com/watch?v=HPKfInHC1PY"),
      v("DeepSeek R1 Theory", "freeCodeCamp.org", "https://www.youtube.com/watch?v=K34gBCjzni8")
    ],
    p8l2: [v("Deep Dive into LLMs like ChatGPT", KARPATHY, "https://www.youtube.com/watch?v=7xTGNNLPyMI")]
  };

  window.VIDEOS = { map: VIDEO_FOR, forKey: function (key) { return VIDEO_FOR[key] || []; } };
})();
