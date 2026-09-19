/* =========================================================================
   Curriculum data for "From Linear Regression to DeepSeek-V4.1-Flash"
   Shape: { title, intro, phases: [ { id, num, title, tagline, goal, duration,
             lessons:[ {id,title,goal,points:[],vocab:[{term,detail}],
                        exercise:{title,task,hint}} ], quiz:[{q,options,answer,explain}] } ] }
   ========================================================================= */

const CURRICULUM = {
  title: "From Linear Regression to DeepSeek-V4.1-Flash",
  subtitle: "A self-paced path from fitting a line to training and deploying a 552B-parameter model.",
  intro:
    "Work through the phases in order, or jump to what you need. Each lesson has a short goal, a few key points, expandable vocabulary, and one hands-on exercise. Each phase ends with a quiz. Everything is saved in your browser.",
  target:
    "End state: you can explain, at the level of equations and code, how deepseek-flash (DeepSeek-V4.1-Flash) is trained and served.",
  phases: [
    /* ============================ PHASE 0 ============================ */
    {
      id: "p0",
      num: 0,
      title: "Orientation & Tooling",
      tagline: "Set up once so every later phase produces something runnable.",
      goal: "Get a working ML environment and see the whole path to DeepSeek-V4.1-Flash.",
      duration: "1 week",
      lessons: [
        {
          id: "p0l1",
          title: "Set up your workspace",
          goal: "A reproducible Python + GPU environment you will reuse all year.",
          points: [
            "Install Python, then manage packages with uv or conda.",
            "Install PyTorch and verify a GPU (or use a cloud notebook).",
            "Use Jupyter for experiments, Git for code, a tracker for runs.",
            "Save every artifact: code, config, seed, and results."
          ],
          vocab: [
            { term: "Virtual environment", detail: "An isolated folder of packages so one project's versions do not break another's. uv and conda both create these." },
            { term: "Autograd", detail: "The engine that records operations on tensors and computes gradients automatically, so you never hand-code backprop for a large network." },
            { term: "CUDA", detail: "NVIDIA's GPU computing platform. PyTorch talks to an NVIDIA GPU through CUDA; Apple uses Metal (MPS) and others use ROCm." },
            { term: "Experiment tracker", detail: "A service (e.g. Weights & Biases, MLflow, TensorBoard) that logs loss curves, configs, and artifacts so runs are comparable." }
          ],
          exercise: {
            title: "Train a line with autograd",
            task: "In a notebook, generate y = 3x + 2 plus noise, define w and b as tensors, and train them with PyTorch autograd and an optimizer until loss is small. Plot the fit.",
            hint: "Use torch.nn.Linear(1,1) and torch.optim.SGD with MSELoss. Print w and b to confirm they approach 3 and 2."
          }
        },
        {
          id: "p0l2",
          title: "See the whole map",
          goal: "Understand the model lifecycle and where V4.1-Flash fits.",
          points: [
            "Lifecycle: data -> pretraining -> post-training -> evaluation -> deployment.",
            "V4.1-Flash is a 552B-parameter multimodal MoE with 1M-token context.",
            "It activates only 8B parameters during prefill and 16B during decode.",
            "Each later phase zooms into one box of this diagram."
          ],
          vocab: [
            { term: "Pretraining", detail: "The expensive first stage where a model learns from trillions of tokens by predicting the next token. It produces a 'base model' that is not yet a good assistant." },
            { term: "Post-training", detail: "Everything after pretraining: supervised fine-tuning, preference learning, and reinforcement learning that turn a base model into a helpful, reasoning assistant." },
            { term: "Inference", detail: "Running a trained model to produce outputs. Prefill reads your input; decode generates the answer token by token." },
            { term: "Checkpoint", detail: "A saved snapshot of model weights (and often optimizer state) taken during training so work can resume or be evaluated." }
          ],
          exercise: {
            title: "Fifty-word map",
            task: "Write a five-sentence summary of the LLM lifecycle in your own words, ending with one sentence naming what you most want to understand by the end of this course.",
            hint: "Keep it. You will reread it at the capstone and notice how much changed."
          }
        }
      ],
      quiz: [
        { q: "What does autograd compute for you?", options: ["The GPU temperature", "Gradients automatically", "The dataset split", "The tokenizer vocabulary"], answer: 1, explain: "Autograd records tensor operations and applies the chain rule to produce gradients." },
        { q: "Which stage makes a base model into a useful assistant?", options: ["Pretraining", "Post-training", "Tokenization", "Quantization"], answer: 1, explain: "Post-training (SFT, preference learning, RL) aligns the base model." },
        { q: "In V4.1-Flash, decode activates roughly how many parameters per token?", options: ["8B", "16B", "552B", "49B"], answer: 1, explain: "8B during prefill and 16B during decode, though the backbone has 552B total." }
      ]
    },

    /* ============================ PHASE 1 ============================ */
    {
      id: "p1",
      num: 1,
      title: "Math & ML Foundations",
      tagline: "Generalize what you know about regression into the linear algebra that runs everything.",
      goal: "Reach fluency in the math and core ML ideas every later module assumes.",
      duration: "6 weeks",
      lessons: [
        {
          id: "p1l1",
          title: "Linear algebra essentials",
          goal: "Read model equations as matrix operations and reason about shape and rank.",
          points: [
            "A matrix is a function; matrix multiply is composition.",
            "Rank tells you how much information survives a transform.",
            "SVD decomposes a matrix into rotations and scaling.",
            "Norms measure size; they define loss and regularization."
          ],
          vocab: [
            { term: "Tensor", detail: "A multidimensional array. A vector is rank 1, a matrix rank 2, and a batch of sequences of embeddings is rank 3 or higher." },
            { term: "Rank", detail: "The number of independent directions a matrix actually uses. Low-rank structure is exactly what makes MLA and LoRA compress." },
            { term: "Eigenvector", detail: "A direction a matrix only stretches, never rotates. Eigenvalues tell you the stretch factor and reveal instability." },
            { term: "SVD", detail: "Singular Value Decomposition: M = U S V^T. You can keep the top-k singular values to approximate M with far fewer numbers, the basis of many compression tricks." },
            { term: "Norm", detail: "A function measuring vector length, e.g. L2 (Euclidean) or L1 (sum of absolute values). Losses and weight decay are built from norms." }
          ],
          exercise: {
            title: "Compress an image with SVD",
            task: "Load a grayscale image as a matrix. Reconstruct it keeping only the top 10, 50, and 200 singular values. Plot each and report the storage fraction.",
            hint: "Use numpy.linalg.svd. Compare reconstruction error against the fraction of entries you kept."
          }
        },
        {
          id: "p1l2",
          title: "Calculus & automatic differentiation",
          goal: "Derive gradients on paper and trust autograd to match.",
          points: [
            "The chain rule composes derivatives through nested functions.",
            "A Jacobian is the derivative of a vector-valued function.",
            "Backprop is dynamic programming over the chain rule.",
            "Finite differences are a cheap correctness check."
          ],
          vocab: [
            { term: "Gradient", detail: "The vector of partial derivatives of a scalar loss with respect to each parameter. Optimization moves opposite the gradient." },
            { term: "Jacobian", detail: "The matrix of all first partial derivatives of a vector function. Backprop multiplies by Jacobians layer by layer." },
            { term: "Chain rule", detail: "d/dx f(g(x)) = f'(g(x)) * g'(x). For many layers this becomes a product of local derivatives." },
            { term: "Backpropagation", detail: "An efficient reverse pass that reuses intermediate results to compute every parameter gradient in one sweep." },
            { term: "Autograd", detail: "Software that builds a computation graph and runs reverse-mode differentiation on it automatically." }
          ],
          exercise: {
            title: "Backprop by hand, verified",
            task: "Implement forward and backward passes for a 2-layer network using only NumPy. Compare your analytic gradients to finite-difference estimates.",
            hint: "Perturb each parameter by a tiny epsilon and compare (f(x+e) - f(x-e)) / (2e). Relative error should be under 1e-5."
          }
        },
        {
          id: "p1l3",
          title: "Probability & information theory",
          goal: "Understand why language models minimize cross-entropy.",
          points: [
            "Maximum likelihood picks parameters that make the data most probable.",
            "Entropy measures uncertainty; cross-entropy measures surprise.",
            "KL divergence measures how far one distribution is from another.",
            "Softmax turns logits into a probability distribution."
          ],
          vocab: [
            { term: "Maximum likelihood (MLE)", detail: "Choose parameters that maximize the probability assigned to observed data. For language models this becomes next-token prediction." },
            { term: "Entropy", detail: "Average surprise of a distribution, in bits or nats. A uniform distribution over many options has high entropy." },
            { term: "Cross-entropy", detail: "The average negative log-probability the model assigns to the true next token. It equals the training loss for LLMs." },
            { term: "KL divergence", detail: "A non-symmetric measure of distance between distributions. RL uses it to keep the policy close to a reference model." },
            { term: "Softmax", detail: "Exponentiate logits and normalize them into probabilities. Temperature scales logits before softmax to change randomness." }
          ],
          exercise: {
            title: "Derive and implement cross-entropy",
            task: "Show on paper that minimizing cross-entropy is equivalent to maximizing likelihood. Then implement stable softmax and cross-entropy in NumPy and check against PyTorch.",
            hint: "Subtract the max logit before exponentiating to avoid overflow. Compare outputs on random logits."
          }
        },
        {
          id: "p1l4",
          title: "Optimization",
          goal: "Know how and why training actually moves downhill.",
          points: [
            "SGD steps opposite the gradient; noise can help generalization.",
            "Momentum accumulates velocity through narrow valleys.",
            "AdamW adapts per-parameter learning rates and decays weights.",
            "Learning-rate schedules matter as much as the optimizer."
          ],
          vocab: [
            { term: "SGD", detail: "Stochastic gradient descent: estimate the gradient on a minibatch and step against it. Cheap and surprisingly strong." },
            { term: "Momentum", detail: "Accumulate a running average of past gradients so progress continues through flat or noisy regions." },
            { term: "AdamW", detail: "Adam with decoupled weight decay. It tracks first and second moments of gradients to scale each parameter's step." },
            { term: "Learning-rate schedule", detail: "A rule for changing the step size over training, e.g. warmup then cosine decay. Bad schedules cause divergence or wasted compute." },
            { term: "Weight decay", detail: "A penalty that shrinks weights toward zero, limiting overfitting and controlling the effective model complexity." },
            { term: "Conditioning", detail: "How stretched the loss landscape is. Poor conditioning makes gradient descent zigzag and slow." }
          ],
          exercise: {
            title: "Optimizer bake-off",
            task: "Minimize a badly conditioned quadratic with SGD, SGD+momentum, and Adam. Plot loss versus step and explain the differences.",
            hint: "Make one dimension 100x steeper than the other. Tune each optimizer's learning rate separately for a fair comparison."
          }
        },
        {
          id: "p1l5",
          title: "ML practice & generalization",
          goal: "Avoid the classic failure modes before they waste weeks.",
          points: [
            "Overfitting memorizes training data; underfitting misses structure.",
            "Always split into train, validation, and a locked test set.",
            "Data leakage quietly inflates results.",
            "Pick metrics that match the real objective."
          ],
          vocab: [
            { term: "Overfitting", detail: "Low training error but high validation error. The model learned noise specific to the training set." },
            { term: "Regularization", detail: "Techniques that limit effective capacity to improve generalization: weight decay, dropout, data augmentation, early stopping." },
            { term: "Cross-validation", detail: "Rotating which slice is held out so every example is used for validation once, giving a more stable estimate." },
            { term: "Data leakage", detail: "Information from the test or future leaking into training, producing great scores that collapse in production." },
            { term: "Metric", detail: "The number you optimize for. Accuracy, F1, perplexity, and pass@k measure very different things." }
          ],
          exercise: {
            title: "Do it properly once",
            task: "Train linear and logistic regression on a real tabular dataset with a clean split, standardized features, and both a validation and test score.",
            hint: "Deliberately introduce leakage (e.g. scale before splitting) and watch the test score become suspiciously good."
          }
        },
        {
          id: "p1l6",
          title: "From regression to neural nets",
          goal: "See exactly what adding depth and nonlinearity buys you.",
          points: [
            "Stacking linear layers without activation is still one linear map.",
            "Nonlinear activations let networks approximate complex functions.",
            "Depth composes features; width represents many at once.",
            "A neural net is regression with learned features."
          ],
          vocab: [
            { term: "Activation function", detail: "A nonlinearity applied between layers (ReLU, GELU, SwiGLU). Without it, a deep stack collapses to a single linear transform." },
            { term: "MLP", detail: "Multi-layer perceptron: alternating linear layers and nonlinearities. The term also names the feed-forward block inside a Transformer." },
            { term: "Universal approximation", detail: "A sufficiently wide network can approximate any continuous function on a bounded region to arbitrary accuracy." },
            { term: "Hidden layer", detail: "An intermediate layer whose outputs are learned features rather than inputs or final predictions." }
          ],
          exercise: {
            title: "Solve XOR and a curve",
            task: "Fit XOR with a 2-layer MLP, then fit a nonlinear 1D function. Show that a linear model cannot do either.",
            hint: "Plot the decision boundary. Try one hidden layer of 4 units, then 8, and compare."
          }
        }
      ],
      quiz: [
        { q: "Why can a deep stack of linear layers be replaced by one matrix?", options: ["It cannot", "Composition of linear maps is linear", "Because of softmax", "Only with dropout"], answer: 1, explain: "Without a nonlinear activation, composing linear maps is just another linear map." },
        { q: "Minimizing cross-entropy is equivalent to what?", options: ["Minimizing variance", "Maximizing likelihood", "Minimizing rank", "Maximizing entropy"], answer: 1, explain: "Cross-entropy is the negative log-likelihood, so minimizing it maximizes likelihood." },
        { q: "Which is a symptom of overfitting?", options: ["High train and val error", "Low train error, high val error", "Loss equals zero immediately", "NaN gradients"], answer: 1, explain: "The model memorized training noise, so it fails on unseen data." },
        { q: "What does weight decay do?", options: ["Speeds up attention", "Shrinks weights to reduce overfitting", "Removes neurons", "Increases batch size"], answer: 1, explain: "It penalizes large weights, limiting effective capacity." }
      ]
    },

    /* ============================ PHASE 2 ============================ */
    {
      id: "p2",
      num: 2,
      title: "Deep Learning & Real Training Loops",
      tagline: "Build the clean, fast, debuggable training harness you will reuse everywhere.",
      goal: "Train modern networks reliably in PyTorch and diagnose them when they fail.",
      duration: "6 weeks",
      lessons: [
        {
          id: "p2l1",
          title: "Neural network mechanics",
          goal: "Know each component of a modern block and why it exists.",
          points: [
            "Activations add nonlinearity; GELU and SwiGLU dominate LLMs.",
            "Normalization stabilizes signal scale across depth.",
            "Residual connections keep gradients flowing.",
            "Initialization controls whether training starts stable."
          ],
          vocab: [
            { term: "ReLU", detail: "max(0, x). Cheap and effective, but can produce dead units that never activate again." },
            { term: "GELU", detail: "A smooth ReLU variant used widely in Transformers; it weights inputs by a Gaussian CDF." },
            { term: "SwiGLU", detail: "A gated feed-forward unit: Swish(xW) * (xV). Used in modern LLMs including DeepSeek, it improves quality per parameter." },
            { term: "LayerNorm", detail: "Normalizes across features within each example, unlike BatchNorm which mixes across the batch." },
            { term: "RMSNorm", detail: "A cheaper LayerNorm that only divides by the root-mean-square, no mean subtraction. Standard in LLMs." },
            { term: "Residual connection", detail: "Add the block input to its output: x + f(x). This creates a shortcut for gradients and enables very deep networks." },
            { term: "Initialization", detail: "The starting random weights. Schemes like He and Xavier keep activations from vanishing or exploding at step zero." }
          ],
          exercise: {
            title: "Ablate the stabilizers",
            task: "Train a deep MLP on MNIST three times: normal, without residuals, and without normalization. Record the loss curves and explain the failures.",
            hint: "Go deep enough (e.g. 20 layers) that the difference is dramatic. Watch for vanishing gradients or divergence."
          }
        },
        {
          id: "p2l2",
          title: "The PyTorch workflow",
          goal: "A reusable script structure for every experiment ahead.",
          points: [
            "Wrap models in nn.Module and data in Dataset + DataLoader.",
            "Separate config from code so runs are reproducible.",
            "Checkpoint weights, optimizer state, and RNG state.",
            "Seed everything and log configs with results."
          ],
          vocab: [
            { term: "nn.Module", detail: "The base class for models and layers. It registers parameters so the optimizer can find them and so .to(device) moves everything." },
            { term: "DataLoader", detail: "Batches, shuffles, and optionally parallelizes data loading with worker processes." },
            { term: "Checkpoint", detail: "A file with model and optimizer state plus step count, allowing exact resume." },
            { term: "Seed", detail: "A number that initializes the random generator. Setting it makes runs repeatable." },
            { term: "Device", detail: "Where tensors live: CPU, one GPU, or distributed. Model and data must be on the same device." }
          ],
          exercise: {
            title: "Build your harness",
            task: "Write a single train.py with config, model, data, training loop, validation, checkpointing, resumption, and CSV logging. Reuse it in every later exercise.",
            hint: "Test resume by killing the run mid-epoch and restarting from the last checkpoint."
          }
        },
        {
          id: "p2l3",
          title: "Speed & numerical precision",
          goal: "Get more training per hour without breaking correctness.",
          points: [
            "Mixed precision speeds up math and saves memory.",
            "Gradient accumulation simulates larger batches.",
            "Gradient clipping prevents destructive updates.",
            "torch.compile and profiling reveal wasted time."
          ],
          vocab: [
            { term: "Mixed precision", detail: "Do most math in 16-bit (fp16 or bf16) while keeping master weights in fp32. Faster and lighter with minimal accuracy loss." },
            { term: "bf16", detail: "A 16-bit float with the same exponent range as fp32 but fewer mantissa bits. Preferred for training because it rarely overflows." },
            { term: "fp8", detail: "An 8-bit float format used by DeepSeek and modern accelerators. It needs careful scaling because the range is tiny." },
            { term: "Gradient accumulation", detail: "Sum gradients over several micro-batches before stepping, mimicking a larger batch on limited memory." },
            { term: "Gradient clipping", detail: "Rescale gradients when their norm exceeds a threshold, preventing rare huge updates." },
            { term: "torch.compile", detail: "A compiler that fuses PyTorch operations into faster kernels, often giving large speedups with one line." }
          ],
          exercise: {
            title: "Halve the step time",
            task: "Profile a training step, enable bf16 autocast and torch.compile, and re-measure. Confirm final loss is unchanged.",
            hint: "Use torch.cuda.Event timing around many steps. Also try increasing batch size until you hit a memory limit."
          }
        },
        {
          id: "p2l4",
          title: "Sequences & vision basics",
          goal: "Handle the two data shapes that lead into Transformers and VLMs.",
          points: [
            "Embeddings map discrete tokens to dense vectors.",
            "Convolutions exploit locality and weight sharing.",
            "Pooling reduces spatial size.",
            "RNNs and LSTMs were the pre-Transformer sequence tools."
          ],
          vocab: [
            { term: "Embedding", detail: "A learned lookup table mapping token or patch IDs to vectors. It is the model's interface to discrete inputs." },
            { term: "Convolution", detail: "A small learned filter slid across an image, sharing weights so patterns are detected anywhere." },
            { term: "Pooling", detail: "Downsampling by taking a max or average over a region, reducing resolution and computation." },
            { term: "RNN", detail: "A recurrent network that processes a sequence one step at a time, carrying a hidden state. Hard to parallelize." },
            { term: "LSTM", detail: "An RNN with gates that better preserve long-range information, but still sequential." },
            { term: "Receptive field", detail: "The region of input that influences one output unit. Stacking convolutions grows it." }
          ],
          exercise: {
            title: "Two modalities",
            task: "Train a small CNN on CIFAR-10 and an embedding + pooling classifier on IMDb. Record accuracy and note what each architecture assumes about its data.",
            hint: "For images, think locality and translation. For text, ask whether order should matter, and whether your model uses it."
          }
        },
        {
          id: "p2l5",
          title: "Debugging ML",
          goal: "Find the cause of a broken run in minutes instead of days.",
          points: [
            "Always try to overfit a single batch first.",
            "Read loss curves: shape matters more than value.",
            "NaNs usually mean overflow, bad LR, or bad data.",
            "Change one thing at a time and log it."
          ],
          vocab: [
            { term: "Overfit-a-batch", detail: "Train on a tiny batch until loss is near zero. If this fails, the bug is in the model or loop, not the data." },
            { term: "Vanishing gradient", detail: "Gradients shrink toward zero through depth, so early layers stop learning. Residuals and normalization fix it." },
            { term: "Exploding gradient", detail: "Gradients grow without bound, causing NaNs. Clipping and lower learning rates help." },
            { term: "NaN", detail: "Not-a-Number. Usually overflow, division by zero, or a corrupted batch." },
            { term: "Ablation", detail: "Removing or changing one component to isolate its effect, the cleanest way to test a hypothesis." }
          ],
          exercise: {
            title: "Debug three broken runs",
            task: "Take a working script and introduce three bugs (wrong loss, missing zero_grad, bad LR). Diagnose each from symptoms alone, then fix them.",
            hint: "Write your findings as a checklist you will actually use during later phases."
          }
        }
      ],
      quiz: [
        { q: "Why do Transformers use residual connections?", options: ["To add randomness", "To preserve gradient flow through depth", "To reduce vocabulary", "To tokenize input"], answer: 1, explain: "Residuals give gradients a direct path, enabling very deep networks." },
        { q: "bf16 is preferred over fp16 for training because it has:", options: ["More mantissa bits", "The same exponent range as fp32", "No rounding", "Lower precision"], answer: 1, explain: "The wide exponent range avoids overflow, while tradeoff is fewer mantissa bits." },
        { q: "What is the fastest first check when a training run is broken?", options: ["Add more data", "Overfit a single batch", "Increase layers", "Switch optimizers"], answer: 1, explain: "If the model cannot memorize one batch, the bug is in the model or loop." },
        { q: "SwiGLU differs from a plain feed-forward layer because it:", options: ["Is linear", "Uses a gating multiply", "Removes normalization", "Adds recurrence"], answer: 1, explain: "SwiGLU multiplies a Swish-activated projection by a second projection, gating information." }
      ]
    },

    /* ============================ PHASE 3 ============================ */
    {
      id: "p3",
      num: 3,
      title: "Transformers & LLM Fundamentals",
      tagline: "The hinge from generic deep learning to language models.",
      goal: "Build a working GPT from scratch and understand every line.",
      duration: "6 weeks",
      lessons: [
        {
          id: "p3l1",
          title: "Tokenization",
          goal: "Turn raw text into the integer sequences a model actually sees.",
          points: [
            "Models do not see characters or words, but subword tokens.",
            "Byte-Pair Encoding merges frequent byte pairs into tokens.",
            "Vocabulary size trades sequence length against embedding size.",
            "Special tokens delimit roles, tools, and boundaries."
          ],
          vocab: [
            { term: "Token", detail: "The atomic unit a model processes. Often a subword like 'ing', sometimes a whole short word." },
            { term: "BPE", detail: "Byte-Pair Encoding: start from bytes, repeatedly merge the most frequent adjacent pair to grow the vocabulary." },
            { term: "Vocabulary", detail: "The fixed set of tokens a model knows. DeepSeek-V4.1-Flash uses roughly 129,280 entries." },
            { term: "Byte-level BPE", detail: "BPE over raw bytes so any input, including emoji and unknown scripts, can be encoded without an 'unknown' token." },
            { term: "Special token", detail: "A reserved symbol marking structure, e.g. end-of-turn, tool call, or image boundary." }
          ],
          exercise: {
            title: "Write BPE",
            task: "Implement byte-level BPE training and encoding. Encode the same sentence with vocabularies of 1k and 30k and compare token counts.",
            hint: "Follow Karpathy's minbpe. Verify round-trip: decode(encode(text)) must equal the original exactly."
          }
        },
        {
          id: "p3l2",
          title: "Attention, part one",
          goal: "Understand the operation that makes Transformers work.",
          points: [
            "Each token produces a query, key, and value.",
            "Attention scores query-key similarity, then reads values.",
            "Scaling by 1/sqrt(d) keeps softmax gradients healthy.",
            "Multiple heads attend to different relationships at once."
          ],
          vocab: [
            { term: "Query / key / value", detail: "Three learned projections per token. The query asks a question, keys advertise what each token offers, values carry the content read out." },
            { term: "Scaled dot-product attention", detail: "softmax(QK^T / sqrt(d)) V. Softmax over keys decides how much of each value to mix." },
            { term: "Multi-head attention", detail: "Run attention several times in parallel with smaller dimensions, then combine, so different heads capture different patterns." },
            { term: "Causal mask", detail: "A mask that prevents a token from attending to future tokens, required for next-token prediction." },
            { term: "Attention head", detail: "One independent attention computation with its own projections and its own learned focus." }
          ],
          exercise: {
            title: "Attention from scratch",
            task: "Implement causal multi-head attention in PyTorch with unit tests: output shapes are correct and no token attends to the future.",
            hint: "Mask with a large negative number before softmax, not by zeroing after, or normalization will be wrong."
          }
        },
        {
          id: "p3l3",
          title: "The Transformer block",
          goal: "Assemble attention, feed-forward, and normalization into a stack.",
          points: [
            "A block is attention plus feed-forward, each with a residual.",
            "Pre-norm is more stable than post-norm at scale.",
            "RMSNorm is the modern default.",
            "Stacks of these blocks are decoder-only LLMs."
          ],
          vocab: [
            { term: "Transformer block", detail: "The repeating unit: normalization, attention, residual add, normalization, feed-forward, residual add." },
            { term: "Pre-norm vs post-norm", detail: "Pre-norm normalizes before each sublayer; it trains more stably deep. Post-norm normalizes after, as in the original paper." },
            { term: "Feed-forward network", detail: "A per-token MLP, usually expanding then contracting dimension, holding much of the model's knowledge." },
            { term: "Weight tying", detail: "Reusing the embedding matrix as the output projection, saving parameters and sometimes improving quality." }
          ],
          exercise: {
            title: "Assemble a GPT",
            task: "Combine embeddings, positional information, N Transformer blocks, and an output head. Train it on character-level text until it produces recognizable words.",
            hint: "Start tiny (4 layers, 4 heads, 128 dims) so you can iterate in minutes."
          }
        },
        {
          id: "p3l4",
          title: "Positional information",
          goal: "Give the model a sense of order and length generalization.",
          points: [
            "Attention alone is permutation-invariant, so positions must be injected.",
            "Learned positions are simple but do not extrapolate.",
            "RoPE rotates queries and keys by position, encoding relative distance.",
            "2D-RoPE extends the idea to image patches."
          ],
          vocab: [
            { term: "Positional encoding", detail: "Any scheme that tells the model where each token sits. Without it, word order is invisible." },
            { term: "RoPE", detail: "Rotary Position Embedding: rotate query and key vectors by an angle proportional to position, so their dot product depends on distance." },
            { term: "Rotary embedding", detail: "The implementation of RoPE, applied per head dimension. Standard in modern LLMs." },
            { term: "Length extrapolation", detail: "Performing well on sequences longer than those seen in training. RoPE scaling and NTK methods help." },
            { term: "NTK scaling", detail: "Adjusting RoPE frequencies to stretch the effective context window with limited fine-tuning." }
          ],
          exercise: {
            title: "Rotate by position",
            task: "Implement RoPE for a single head. Verify that the dot product of two rotated vectors depends only on their relative distance.",
            hint: "Rotate pairs of dimensions by angle = position * frequency. Plot attention scores versus distance."
          }
        },
        {
          id: "p3l5",
          title: "The pretraining objective",
          goal: "Understand the single loss that produces a base model.",
          points: [
            "Predict the next token given all previous tokens.",
            "Teacher forcing feeds the true prefix during training.",
            "Loss is masked to the tokens you want to learn from.",
            "Perplexity is the exponentiated loss."
          ],
          vocab: [
            { term: "Next-token prediction", detail: "The training task: given tokens so far, maximize the probability of the true next token." },
            { term: "Teacher forcing", detail: "During training, feed ground-truth previous tokens rather than the model's own guesses, allowing parallel training." },
            { term: "Loss mask", detail: "A per-token weight that zeros out positions you do not want to train on, such as padding or the prompt during fine-tuning." },
            { term: "Perplexity", detail: "exp(cross-entropy loss): the effective number of equally likely choices the model is deciding among." },
            { term: "Causal language model", detail: "A model that only attends to the past, so it can generate text left to right." }
          ],
          exercise: {
            title: "Train and sample",
            task: "Train your char-level GPT to a low loss, then sample text at several temperatures and inspect coherence.",
            hint: "Save checkpoints early, mid, and late training to watch quality improve."
          }
        },
        {
          id: "p3l6",
          title: "Generation & evaluation",
          goal: "Control how text is produced and measure whether it is good.",
          points: [
            "Decoding strategy changes output more than you expect.",
            "Temperature reshapes the distribution before sampling.",
            "Top-k and top-p truncate unlikely tokens.",
            "Perplexity is not the same as usefulness."
          ],
          vocab: [
            { term: "Greedy decoding", detail: "Always pick the most likely token. Deterministic but repetitive and prone to loops." },
            { term: "Temperature", detail: "Divide logits by T before softmax. T below 1 sharpens, above 1 flattens and increases diversity." },
            { term: "Top-k", detail: "Sample only from the k highest-probability tokens, cutting the long tail." },
            { term: "Nucleus sampling", detail: "Top-p: keep the smallest set of tokens whose cumulative probability exceeds p, then sample from it." },
            { term: "Benchmark", detail: "A standardized task and dataset used to compare models. Results depend heavily on the evaluation harness." }
          ],
          exercise: {
            title: "Decode five ways",
            task: "Generate from one prompt with greedy, temperature 0.7, temperature 1.3, top-k 20, and top-p 0.9. Compare diversity, coherence, and repetition.",
            hint: "Fix the seed to isolate the effect of each strategy."
          }
        }
      ],
      quiz: [
        { q: "Why divide attention scores by sqrt(d)?", options: ["To save memory", "To keep softmax gradients well-scaled", "To add positions", "To normalize keys"], answer: 1, explain: "Large dot products push softmax into saturated regions where gradients vanish." },
        { q: "What does a causal mask prevent?", options: ["Attending to past tokens", "Attending to future tokens", "Using values", "Using multiple heads"], answer: 1, explain: "It enforces left-to-right generation so the model cannot see the answer." },
        { q: "Perplexity is:", options: ["Loss squared", "exp(loss)", "log(loss)", "1/loss"], answer: 1, explain: "It converts average negative log-likelihood into an effective number of choices." },
        { q: "RoPE encodes position by:", options: ["Adding a constant", "Rotating query and key vectors", "Sorting tokens", "Masking tokens"], answer: 1, explain: "Rotating by a position-dependent angle makes attention depend on relative distance." }
      ]
    },

    /* ============================ PHASE 4 ============================ */
    {
      id: "p4",
      num: 4,
      title: "Pretraining at Scale",
      tagline: "What really happens when the unit of work is trillions of tokens.",
      goal: "Run a distributed pretraining job with sane data, stability, and evaluation.",
      duration: "8 weeks",
      lessons: [
        {
          id: "p4l1",
          title: "Data pipelines",
          goal: "Build a corpus you would trust to train on.",
          points: [
            "Crawl, extract text, then heavily filter.",
            "Deduplicate with MinHash near-duplicates.",
            "Balance domains in a deliberate mixture.",
            "Detect contamination against your evals."
          ],
          vocab: [
            { term: "Common Crawl", detail: "A public archive of web pages, the raw starting point for most open pretraining corpora." },
            { term: "MinHash dedup", detail: "A hashing method that finds near-duplicate documents efficiently, preventing the model from memorizing repeated text." },
            { term: "Quality filter", detail: "Heuristics or classifiers that remove boilerplate, spam, and low-information pages." },
            { term: "Data mixture", detail: "The proportions of code, web, books, math, and other sources. It strongly shapes model behavior." },
            { term: "Contamination", detail: "Evaluation examples accidentally present in training data, inflating benchmark scores." }
          ],
          exercise: {
            title: "Filter a corpus",
            task: "Download a slice of FineWeb-Edu or OpenWebText. Apply dedup and filters, and produce a token-count report per source.",
            hint: "Track how much data each filter removes. Aggressive filtering can silently starve the model."
          }
        },
        {
          id: "p4l2",
          title: "Scaling laws",
          goal: "Predict model quality before spending the compute.",
          points: [
            "Loss falls predictably with parameters, data, and compute.",
            "Chinchilla says scale data and parameters together.",
            "The compute-optimal ratio is roughly 20 tokens per parameter.",
            "DeepSeek pretrained far beyond that to save inference cost."
          ],
          vocab: [
            { term: "Scaling law", detail: "An empirical power-law relating loss to model size, data, and compute, letting you extrapolate from small runs." },
            { term: "Compute-optimal", detail: "The parameter and token counts that minimize loss for a fixed training budget." },
            { term: "Chinchilla ratio", detail: "Roughly 20 training tokens per parameter for compute-optimal training." },
            { term: "Emergent ability", detail: "A capability that appears only beyond a certain scale. Whether these are real or artifacts of metrics is debated." },
            { term: "FLOPs", detail: "Floating-point operations, the standard unit of compute. Roughly 6 times parameters times tokens for a forward-backward pass." }
          ],
          exercise: {
            title: "Mini scaling law",
            task: "Train four model sizes on a fixed token budget. Fit loss versus parameters and extrapolate the loss of a model ten times larger.",
            hint: "Keep the data and schedule identical across sizes, or the curve is meaningless."
          }
        },
        {
          id: "p4l3",
          title: "Distributed training",
          goal: "Split a model and its data across many devices correctly.",
          points: [
            "Data parallel replicates the model and splits batches.",
            "Tensor, pipeline, and expert parallel split the model itself.",
            "ZeRO and FSDP shard optimizer state and weights.",
            "Collectives are the communication cost you must hide."
          ],
          vocab: [
            { term: "Data parallel", detail: "Each device holds a full model copy and processes different data, then gradients are averaged." },
            { term: "Tensor parallel", detail: "Split individual weight matrices across devices, requiring frequent communication per layer." },
            { term: "Pipeline parallel", detail: "Assign different layers to different devices and stream micro-batches through them." },
            { term: "Expert parallel", detail: "Distribute MoE experts across devices; each token is routed to whichever device holds its experts." },
            { term: "ZeRO", detail: "Zero Redundancy Optimizer: shard optimizer state, gradients, and optionally parameters across data-parallel ranks." },
            { term: "all-reduce", detail: "A collective that sums a tensor across all ranks and returns the result to everyone." },
            { term: "all-to-all", detail: "Every rank sends different data to every other rank, the communication pattern behind MoE dispatch." }
          ],
          exercise: {
            title: "Go distributed",
            task: "Train the same model with DDP or FSDP across two or more GPUs. Measure throughput, scaling efficiency, and communication time.",
            hint: "If scaling efficiency is poor, the model is too small to amortize communication. Note the crossover point."
          }
        },
        {
          id: "p4l4",
          title: "Numerical stability",
          goal: "Keep a large run from dying at step 40,000.",
          points: [
            "Loss spikes have many possible causes.",
            "Gradient clipping is the first defense.",
            "Low-precision training needs scaling and care.",
            "You can sometimes surgically fix a checkpoint."
          ],
          vocab: [
            { term: "Loss spike", detail: "A sudden jump in loss, often from a bad batch, aggressive learning rate, or low-precision overflow." },
            { term: "Gradient clipping", detail: "Rescale gradients whose norm exceeds a threshold; the single most common stability fix." },
            { term: "muP", detail: "Maximal update parametrization: a scaling scheme that lets hyperparameters transfer across model sizes." },
            { term: "Quantization-aware training", detail: "Training with simulated low precision so the model adapts to quantization it will face at inference." },
            { term: "Loss scaling", detail: "Multiplying the loss in fp16 training so small gradients stay representable, then dividing back." }
          ],
          exercise: {
            title: "Cause and cure a spike",
            task: "Deliberately trigger a loss spike (bad data batch or high LR), then fix it with clipping and a LR adjustment. Record what worked.",
            hint: "Log gradient norms per step. Spikes usually announce themselves before the loss jumps."
          }
        },
        {
          id: "p4l5",
          title: "Efficiency systems",
          goal: "Measure and improve how much of the hardware you actually use.",
          points: [
            "Attention is memory-bound; kernels matter enormously.",
            "Kernel fusion removes redundant memory traffic.",
            "Activation checkpointing trades compute for memory.",
            "MFU is the honest efficiency number."
          ],
          vocab: [
            { term: "FlashAttention", detail: "An exact attention algorithm that tiles computation to avoid materializing the full attention matrix, cutting memory and speeding up." },
            { term: "Kernel fusion", detail: "Combining several operations into one GPU kernel to reduce memory reads and writes." },
            { term: "Activation checkpointing", detail: "Discard intermediate activations and recompute them in the backward pass, trading compute for memory." },
            { term: "MFU", detail: "Model FLOPs Utilization: achieved FLOPs divided by hardware peak. Good large runs reach a few tens of percent." },
            { term: "Roofline", detail: "A model of whether a kernel is limited by memory bandwidth or compute, guiding optimization." }
          ],
          exercise: {
            title: "Measure MFU",
            task: "Compute theoretical FLOPs for a training step, measure wall-clock time, and report MFU. Then apply one optimization and re-measure.",
            hint: "FLOPs are roughly 6 * parameters * tokens for a forward-backward pass, not counting attention overhead."
          }
        },
        {
          id: "p4l6",
          title: "Evaluation harness",
          goal: "Judge checkpoints with numbers you trust.",
          points: [
            "Held-out loss is the cheap continuous signal.",
            "Task metrics capture what loss misses.",
            "Run the same harness on every checkpoint.",
            "Guard against contamination and harness effects."
          ],
          vocab: [
            { term: "Held-out set", detail: "Data never trained on, used to measure generalization." },
            { term: "MMLU", detail: "A multiple-choice benchmark across many academic subjects, widely used to compare knowledge." },
            { term: "Harness", detail: "The code that formats prompts, parses answers, and scores a benchmark. Differences here cause large score swings." },
            { term: "Contamination", detail: "Test data present in training, which makes scores meaningless." },
            { term: "Benchmark", detail: "A fixed task and dataset for comparison, useful but never a complete picture of usefulness." }
          ],
          exercise: {
            title: "Automate evaluation",
            task: "Build a harness that runs held-out perplexity and two task benchmarks on every saved checkpoint, writing results to a table.",
            hint: "Version the prompts and decoding settings alongside the scores."
          }
        }
      ],
      quiz: [
        { q: "Roughly how many training tokens per parameter is compute-optimal?", options: ["2", "20", "200", "2000"], answer: 1, explain: "The Chinchilla result: about 20 tokens per parameter balances model size and data." },
        { q: "Which parallelism splits the layers of a model across devices?", options: ["Data parallel", "Pipeline parallel", "ZeRO", "Mixed precision"], answer: 1, explain: "Pipeline parallel assigns different layers to different devices and streams micro-batches." },
        { q: "The most common first fix for a loss spike is:", options: ["More data", "Gradient clipping", "More layers", "Bigger vocabulary"], answer: 1, explain: "Clipping caps the rare huge updates that destabilize training." },
        { q: "MFU measures:", options: ["Memory used", "Fraction of hardware peak FLOPs achieved", "Model size", "Tokens per second only"], answer: 1, explain: "Model FLOPs Utilization compares achieved compute to hardware peak." }
      ]
    },

    /* ============================ PHASE 5 ============================ */
    {
      id: "p5",
      num: 5,
      title: "Post-training, Reasoning & RL",
      tagline: "Where a base model becomes an assistant that can reason and use tools.",
      goal: "Take a base model through SFT, preference learning, and RL with verifiable rewards.",
      duration: "8 weeks",
      lessons: [
        {
          id: "p5l1",
          title: "Supervised fine-tuning",
          goal: "Teach format and instruction-following from demonstrations.",
          points: [
            "SFT is next-token prediction on curated dialogue.",
            "Chat templates define roles, tools, and boundaries.",
            "Packing and masking make training efficient and correct.",
            "LoRA adapts cheaply; full fine-tuning is stronger."
          ],
          vocab: [
            { term: "Supervised fine-tuning (SFT)", detail: "Continue training a base model on high-quality input-output examples so it learns to follow instructions and adopt a format." },
            { term: "Chat template", detail: "The exact serialization of system, user, assistant, and tool messages into one token sequence. Mismatches hurt badly." },
            { term: "Sequence packing", detail: "Concatenating many short examples into one long sequence to keep the GPU busy, with attention masks preventing cross-talk." },
            { term: "Instruction data", detail: "Curated or synthesized prompt-response pairs covering the behaviors you want." },
            { term: "LoRA", detail: "Low-Rank Adaptation: freeze the base weights and train small low-rank matrices added to selected layers. Cheap and fast." }
          ],
          exercise: {
            title: "Fine-tune both ways",
            task: "Fine-tune your Phase 4 model on an instruction dataset using LoRA, then with full fine-tuning. Compare quality, cost, and catastrophic forgetting.",
            hint: "Test on held-out instructions, not the training set, and check whether general ability regressed."
          }
        },
        {
          id: "p5l2",
          title: "Preference learning",
          goal: "Align outputs with human or AI preferences.",
          points: [
            "Collect pairs: one response preferred over another.",
            "A reward model scores responses.",
            "DPO optimizes preferences directly without a separate reward model.",
            "RLHF is powerful but easy to over-optimize."
          ],
          vocab: [
            { term: "Reward model", detail: "A model trained to predict which of two responses a human would prefer, used to score generations during RL." },
            { term: "Bradley-Terry", detail: "The statistical model behind preference learning: probability of preferring A over B is a function of their score difference." },
            { term: "RLHF", detail: "Reinforcement Learning from Human Feedback: train a reward model, then optimize the policy against it with a KL constraint." },
            { term: "DPO", detail: "Direct Preference Optimization: a closed-form loss that raises the probability of preferred responses without training a reward model." },
            { term: "Preference pair", detail: "A prompt with a chosen and a rejected response, the basic unit of preference data." }
          ],
          exercise: {
            title: "DPO run",
            task: "Train DPO on a preference dataset. Compare win rate against the SFT model using a judge model or human review.",
            hint: "Watch for length bias: longer responses often get preferred regardless of quality."
          }
        },
        {
          id: "p5l3",
          title: "Reinforcement learning for LLMs",
          goal: "Optimize behavior against a reward signal, not just demonstrations.",
          points: [
            "Generation is a sequence of actions; the reward is often final.",
            "PPO is the classic algorithm; GRPO removes the value network.",
            "Advantages compare a response to a group of peers.",
            "A KL penalty keeps the model from drifting too far."
          ],
          vocab: [
            { term: "PPO", detail: "Proximal Policy Optimization: a policy-gradient method that clips updates to stay near the previous policy." },
            { term: "GRPO", detail: "Group Relative Policy Optimization, from DeepSeekMath: sample a group of answers and use their relative rewards as advantages, eliminating the value network." },
            { term: "Advantage", detail: "How much better an action was than expected, the quantity that scales the policy update." },
            { term: "KL penalty", detail: "A term penalizing divergence from a reference model, preventing reward hacking and language drift." },
            { term: "Reward hacking", detail: "Optimizing the proxy reward in ways that violate the real intent." },
            { term: "Rollout", detail: "A generated sample (prompt plus response plus reward) collected by the inference engine for training." }
          ],
          exercise: {
            title: "GRPO with a verifiable reward",
            task: "Implement GRPO on a task with an automatic checker, such as arithmetic or unit-tested code. Track reward, response length, and KL over training.",
            hint: "Start with SFT-then-RL, not raw RL. If reward rises but quality drops, you have found reward hacking."
          }
        },
        {
          id: "p5l4",
          title: "Reasoning models",
          goal: "Produce long chains of thought that solve hard problems.",
          points: [
            "Verifiable tasks give clean automatic rewards.",
            "RL can discover long chains of thought.",
            "More test-time compute can beat a bigger model.",
            "Length and effort must be controlled deliberately."
          ],
          vocab: [
            { term: "Chain-of-thought", detail: "Explicit intermediate reasoning before an answer, which improves accuracy on multi-step problems." },
            { term: "Verifiable reward", detail: "A reward computed by checking the answer, e.g. math equality or passing tests, so no reward model is needed." },
            { term: "Test-time compute", detail: "Spending more inference computation (longer reasoning, more samples) to raise accuracy." },
            { term: "Reasoning effort", detail: "A user-set dial controlling how much thinking is allowed. V4.1-Flash exposes a continuous 1-100 scale." },
            { term: "Distillation", detail: "Transferring behavior from a strong model into a smaller one, often by training on its outputs." }
          ],
          exercise: {
            title: "Grow a reasoner",
            task: "Run RL with a verifiable reward and observe whether average response length and accuracy increase together. Cap the length and compare.",
            hint: "Log a few full generations each epoch to see the chain of thought evolve."
          }
        },
        {
          id: "p5l5",
          title: "Distillation & consolidation",
          goal: "Fuse many specialist models into one general model.",
          points: [
            "Distillation transfers a teacher's behavior to a student.",
            "Logit matching is richer than matching final answers.",
            "Specialists can each be excellent in one domain.",
            "On-policy distillation merges them into one model."
          ],
          vocab: [
            { term: "Knowledge distillation", detail: "Training a smaller student to imitate a larger teacher, often using soft probabilities rather than hard labels." },
            { term: "Logit matching", detail: "Matching the teacher's full distribution over tokens, which carries more information than the single correct token." },
            { term: "On-policy distillation", detail: "Distilling on sequences the student itself generates, so it learns to recover from its own mistakes." },
            { term: "Teacher model", detail: "The model providing supervision. In consolidation it may be a committee of domain specialists." },
            { term: "Consolidation", detail: "Combining independently trained specialists into a single deployable model, as in DeepSeek-V4's post-training." }
          ],
          exercise: {
            title: "Distill a teacher",
            task: "Train a small student on the outputs of a larger teacher, comparing sequence-level and logit-level distillation.",
            hint: "Measure both accuracy and output diversity; distillation can collapse variety."
          }
        },
        {
          id: "p5l6",
          title: "RL infrastructure",
          goal: "Close the gap between the model you train and the model you sample from.",
          points: [
            "RL needs fast generation and careful training.",
            "Sampling and training in different precision drifts.",
            "Off-policy data introduces bias.",
            "Replay tricks keep routing and logprobs consistent."
          ],
          vocab: [
            { term: "Rollout engine", detail: "The high-throughput inference system that generates training samples during RL, often optimized differently from the trainer." },
            { term: "Off-policy", detail: "Training on data generated by an older or different policy than the one being updated, which biases gradients." },
            { term: "Train-inference mismatch", detail: "Small numeric differences between the training forward pass and the inference engine, which accumulate over long reasoning chains." },
            { term: "Routing replay", detail: "Recording and replaying MoE routing and sparse-attention indexer decisions so training matches what the rollout actually did." },
            { term: "Importance sampling", detail: "Reweighting off-policy samples by the ratio of new to old probabilities to correct bias." }
          ],
          exercise: {
            title: "Measure the mismatch",
            task: "Compute log-probabilities for the same sequences in your trainer and your inference engine. Quantify and reduce the gap.",
            hint: "Check dtype, attention kernels, and MoE routing. Even a tiny gap compounds over thousands of reasoning tokens."
          }
        },
        {
          id: "p5l7",
          title: "Agentic post-training",
          goal: "Teach reasoning inside tool-use and multi-step environments.",
          points: [
            "Agents interleave thinking, tool calls, and observations.",
            "Environments and tasks can be synthesized at scale.",
            "Credit must be assigned across many turns.",
            "The harness is part of the training distribution."
          ],
          vocab: [
            { term: "Agentic training", detail: "Post-training where the model acts in an environment, calling tools and observing results over many turns." },
            { term: "Environment synthesis", detail: "Automatically generating tasks, tools, and stateful environments so agentic RL has unlimited practice." },
            { term: "Credit assignment", detail: "Deciding which earlier actions deserve credit for a final success or blame for a failure." },
            { term: "Harness", detail: "The scaffold around the model: prompts, tools, parsing, retries, and stopping rules. It strongly affects measured ability." },
            { term: "Tool call", detail: "A structured model output requesting an external action, whose result is fed back into the conversation." }
          ],
          exercise: {
            title: "Synthesize an environment",
            task: "Build a small task generator with tools and automatic success checks, then run RL over it. Measure generalization to held-out tasks.",
            hint: "Log full trajectories. Most failures come from parsing, not reasoning."
          }
        }
      ],
      quiz: [
        { q: "GRPO differs from PPO mainly by:", options: ["Using a reward model", "Removing the value network", "Skipping SFT", "Using no KL term"], answer: 1, explain: "GRPO computes advantages from a group of sampled answers, so no value network is needed." },
        { q: "A KL penalty during RL prevents:", options: ["Long responses", "Drifting too far from the reference model", "Using tools", "Tokenization errors"], answer: 1, explain: "It keeps the policy anchored, limiting reward hacking and language drift." },
        { q: "On-policy distillation means training on:", options: ["Teacher-generated text only", "Sequences the student generates", "Random noise", "Human labels"], answer: 1, explain: "The student learns from its own outputs under teacher supervision, improving recovery from its mistakes." },
        { q: "Train-inference mismatch matters most in:", options: ["Short classification", "Long reasoning chains", "Embedding lookup", "Data loading"], answer: 1, explain: "Small numeric differences compound across thousands of generated reasoning tokens." }
      ]
    },

    /* ============================ PHASE 6 ============================ */
    {
      id: "p6",
      num: 6,
      title: "Modern Architecture: the DeepSeek Lineage",
      tagline: "Stop learning LLMs in general; learn the design space DeepSeek occupies.",
      goal: "Explain every architectural component of DeepSeek-V4.1-Flash and why it exists.",
      duration: "6 weeks",
      lessons: [
        {
          id: "p6l1",
          title: "Mixture-of-Experts",
          goal: "Understand how a 552B model can be cheap to run.",
          points: [
            "Many experts exist; only a few activate per token.",
            "A router scores experts and picks the top ones.",
            "Load balancing prevents expert starvation.",
            "Active parameters, not total, drive inference cost."
          ],
          vocab: [
            { term: "MoE", detail: "Mixture-of-Experts: replace one large feed-forward layer with many smaller expert layers plus a router that selects a few per token." },
            { term: "Router", detail: "A small learned network that scores each expert for a token and selects the top-k." },
            { term: "Expert", detail: "A feed-forward sub-network that specializes in some patterns of tokens." },
            { term: "Top-k routing", detail: "Each token is sent to only the k highest-scoring experts, so compute stays small despite many parameters." },
            { term: "Load balancing", detail: "Keeping tokens spread across experts so no expert is overloaded or unused. DeepSeek uses an auxiliary-loss-free method." },
            { term: "Active parameters", detail: "The parameters actually used for one token. V4.1-Flash activates 8B during prefill and 16B during decode." },
            { term: "Auxiliary loss", detail: "An extra training term traditionally used to balance expert usage, which DeepSeek largely replaced with bias adjustment." }
          ],
          exercise: {
            title: "MoE versus dense",
            task: "Train a small MoE and a dense model with the same active parameter count and compare quality and speed at fixed compute.",
            hint: "Log expert utilization. If a few experts dominate, routing is collapsing."
          }
        },
        {
          id: "p6l2",
          title: "Multi-head Latent Attention",
          goal: "Shrink the KV cache that dominates long-context memory.",
          points: [
            "The KV cache grows with context and batch.",
            "MLA compresses keys and values into a low-rank latent.",
            "It matches stronger attention quality with far less cache.",
            "Cache size is the economics of long context."
          ],
          vocab: [
            { term: "MHA", detail: "Multi-head attention: every head has its own query, key, and value projections. Highest quality, largest cache." },
            { term: "GQA", detail: "Grouped-query attention: several query heads share one key-value head, shrinking the cache." },
            { term: "MQA", detail: "Multi-query attention: all query heads share a single key-value head. Tiny cache, some quality loss." },
            { term: "MLA", detail: "Multi-head Latent Attention, from DeepSeek-V2: compress keys and values into a low-rank latent vector, caching the latent instead of full heads." },
            { term: "Latent vector", detail: "A compact learned representation. Caching the latent and decompressing reduces memory dramatically." },
            { term: "KV cache", detail: "Stored keys and values for already-seen tokens so generation does not recompute them. It grows linearly with context." }
          ],
          exercise: {
            title: "Cache arithmetic",
            task: "Implement MHA, GQA, and MLA for one layer. Compute KV bytes per token for each at 1M context and compare.",
            hint: "Bytes = 2 * layers * heads * head_dim * batch * precision. See why DeepSeek obsesses over this number."
          }
        },
        {
          id: "p6l3",
          title: "Sparse & compressed attention",
          goal: "Make a million-token context affordable.",
          points: [
            "Full attention costs grow quadratically with length.",
            "A cheap indexer selects which tokens to attend to.",
            "Compressed attention summarizes chunks of the past.",
            "Local windows stay sharp; a bounded replay rebuilds cache."
          ],
          vocab: [
            { term: "DSA", detail: "DeepSeek Sparse Attention: a lightweight indexer scores past tokens and main attention runs on only the top-k, changing cost from O(L^2) to O(Lk)." },
            { term: "Lightning indexer", detail: "The small FP8 indexer that scores relevance cheaply. In V3.2 it selects about 2048 tokens per query." },
            { term: "Top-k selection", detail: "Keeping only the k most relevant key-value entries for each query token." },
            { term: "Compressed sparse attention", detail: "CSA: compress the KV cache along the sequence dimension, then apply sparse attention on the compressed entries." },
            { term: "Heavily compressed attention", detail: "HCA: more aggressive compression with dense attention, giving a cheap global summary of the context." },
            { term: "Sliding window attention", detail: "SWA: attend only to the most recent n tokens, preserving sharp local dependencies." },
            { term: "SWA bounded replay", detail: "Rebuild missing sliding-window KV states by replaying only the last n_win tokens, avoiding storing them and cutting persistent cache roughly eightfold." }
          ],
          exercise: {
            title: "Build a toy DSA layer",
            task: "Implement an indexer that scores past tokens and a main attention that runs over the top-k only. Compare output and FLOPs against dense attention.",
            hint: "Start with k equal to the full length, confirm it matches dense attention, then lower k and measure quality decay."
          }
        },
        {
          id: "p6l4",
          title: "Stability & optimizers",
          goal: "Train trillion-parameter models without divergence.",
          points: [
            "Deep residual stacks can amplify signal enormously.",
            "mHC constrains residual mixing to a stable manifold.",
            "Muon orthogonalizes updates for faster convergence.",
            "Stability tricks buy scale."
          ],
          vocab: [
            { term: "mHC", detail: "Manifold-Constrained Hyper-Connections: generalize residual connections and constrain the mixing matrix so signal cannot blow up." },
            { term: "Birkhoff polytope", detail: "The set of doubly stochastic matrices (nonnegative rows and columns summing to one). Constraining mixing here bounds amplification." },
            { term: "Doubly stochastic", detail: "A matrix whose rows and columns each sum to one, so it conserves total signal." },
            { term: "Muon optimizer", detail: "An optimizer that orthogonalizes gradient updates using Newton-Schulz iterations, giving faster, more stable convergence than AdamW." },
            { term: "Newton-Schulz", detail: "An iterative method that approximates the orthogonal factor of a matrix without a full SVD, making Muon practical at scale." },
            { term: "Spectral norm", detail: "The largest singular value, controlling the worst-case amplification of a matrix." }
          ],
          exercise: {
            title: "Muon versus AdamW",
            task: "Train identical models with AdamW and a small Muon implementation. Compare loss curves and stability at a high learning rate.",
            hint: "Apply Muon to matrix parameters and AdamW to embeddings and norms, as in practice."
          }
        },
        {
          id: "p6l5",
          title: "Multimodality",
          goal: "Let the model see images with the same weights it uses for text.",
          points: [
            "A vision encoder turns patches into embeddings.",
            "Pixel unshuffle reduces token count before the encoder.",
            "A projector maps vision features into the language space.",
            "Joint training from the start aligns both modalities."
          ],
          vocab: [
            { term: "ViT", detail: "Vision Transformer: split an image into patches, embed them, and process them with Transformer layers." },
            { term: "Patch embedding", detail: "Flattening image patches and linearly projecting them into vectors the Transformer can process." },
            { term: "Projector", detail: "A small network mapping vision features into the language model's embedding space. V4.1-Flash uses a two-layer MLP." },
            { term: "Pixel unshuffle", detail: "Rearranging pixels to trade spatial resolution for channel depth, reducing the number of visual tokens (V4.1-Flash uses 3x3)." },
            { term: "2D-RoPE", detail: "Rotary position encoding extended to two dimensions so patches keep their spatial relationships." },
            { term: "Cross-modal alignment", detail: "Training so text and image representations live in a shared space where they can be reasoned about together." }
          ],
          exercise: {
            title: "Give your model eyes",
            task: "Add a small ViT and projector to your language model and train on image-caption data. Test whether it can answer questions about images.",
            hint: "Freeze the language model first, train the projector, then unfreeze for joint tuning."
          }
        },
        {
          id: "p6l6",
          title: "Multi-token prediction & speculative decoding",
          goal: "Generate several tokens per forward pass to cut latency.",
          points: [
            "MTP heads predict more than one future token.",
            "They add training signal as well as inference speed.",
            "Speculative decoding drafts, then verifies in parallel.",
            "What matters is acceptance rate, not drafting speed."
          ],
          vocab: [
            { term: "Multi-token prediction", detail: "Training extra heads to predict tokens further ahead, which enriches the learning signal and enables faster decoding." },
            { term: "Speculative decoding", detail: "A draft predicts several tokens; the main model verifies them in one pass and keeps the longest correct prefix." },
            { term: "Acceptance rate", detail: "The fraction of drafted tokens the main model accepts. High acceptance is what makes speculation pay off." },
            { term: "Draft model", detail: "The cheap predictor used to propose tokens. DeepSeek's DSpark uses MTP heads for this." },
            { term: "MTP head", detail: "A separately trained decoder layer that predicts the next-next token from the current hidden state and the next-token embedding." }
          ],
          exercise: {
            title: "Speculate and measure",
            task: "Implement a draft-and-verify loop with your model and measure acceptance rate, tokens per second, and break-even draft length.",
            hint: "Drafting too many tokens wastes work when acceptance is low. Sweep the draft length."
          }
        }
      ],
      quiz: [
        { q: "In an MoE, inference cost is set mainly by:", options: ["Total parameters", "Active parameters", "Vocabulary size", "Context length only"], answer: 1, explain: "Only the experts selected per token consume compute." },
        { q: "MLA reduces memory by:", options: ["Skipping attention", "Caching a low-rank latent instead of full KV", "Using smaller vocabulary", "Removing layers"], answer: 1, explain: "Keys and values are compressed into a latent vector, so the cache is far smaller." },
        { q: "DSA changes attention complexity from O(L^2) to approximately:", options: ["O(1)", "O(Lk)", "O(L log L)", "O(L^3)"], answer: 1, explain: "Main attention runs over a fixed top-k selection for each query." },
        { q: "mHC improves stability by constraining residual mixing to:", options: ["Random matrices", "The Birkhoff polytope", "Identity only", "Sparse masks"], answer: 1, explain: "Doubly stochastic matrices bound signal amplification while preserving mixing." },
        { q: "The metric that decides whether speculative decoding helps is:", options: ["Draft model size", "Acceptance rate", "Vocabulary size", "Batch size"], answer: 1, explain: "Only accepted draft tokens translate into real speedup." }
      ]
    },

    /* ============================ PHASE 7 ============================ */
    {
      id: "p7",
      num: 7,
      title: "Deployment & Serving",
      tagline: "A model is only real once it answers requests affordably.",
      goal: "Quantize, serve, and cost a model like a production team would.",
      duration: "5 weeks",
      lessons: [
        {
          id: "p7l1",
          title: "Quantization",
          goal: "Cut precision to cut cost, without wrecking quality.",
          points: [
            "Fewer bits mean less memory and more throughput.",
            "FP8 is the modern training and serving default.",
            "FP4 experts give the largest savings.",
            "Calibration determines how much accuracy you keep."
          ],
          vocab: [
            { term: "Quantization", detail: "Representing weights or activations with fewer bits, reducing memory and often increasing throughput." },
            { term: "FP8", detail: "An 8-bit float format. V4 stores attention and dense weights in FP8 and the KV cache in FP8." },
            { term: "FP4", detail: "A 4-bit float format used for MoE expert weights in modern DeepSeek checkpoints." },
            { term: "MXFP4", detail: "A microscaling FP4 format where small blocks share a scale, improving accuracy at 4 bits." },
            { term: "NVFP4", detail: "NVIDIA's FP4 variant with blockwise scales, widely used for quantized inference on Blackwell." },
            { term: "W4A8", detail: "Weights in 4 bits, activations in 8 bits. A common high-throughput MoE kernel configuration." },
            { term: "Calibration", detail: "Running representative data through the model to choose quantization scales that minimize error." }
          ],
          exercise: {
            title: "Quantize and measure",
            task: "Quantize a small model to INT8 and INT4. Measure size, latency, and task accuracy versus the fp16 baseline.",
            hint: "Quantize only some layers and see which are sensitive. Experts tolerate more compression than attention."
          }
        },
        {
          id: "p7l2",
          title: "Inference engines",
          goal: "Serve many users efficiently from one GPU set.",
          points: [
            "Continuous batching keeps the GPU busy across requests.",
            "Paged KV memory eliminates fragmentation.",
            "Prefix caching reuses shared context.",
            "Measure TTFT and throughput separately."
          ],
          vocab: [
            { term: "vLLM", detail: "A high-throughput inference engine built around PagedAttention and continuous batching." },
            { term: "PagedAttention", detail: "Store the KV cache in fixed-size blocks with a page table, so memory is used efficiently and can be shared." },
            { term: "Continuous batching", detail: "Admit and retire requests every step instead of waiting for a fixed batch, greatly improving utilization." },
            { term: "SGLang", detail: "An inference engine with a radix-tree cache for aggressive prefix reuse, heavily used for DeepSeek models." },
            { term: "Radix cache", detail: "A prefix tree that shares identical prompt prefixes across requests at token granularity." },
            { term: "TTFT", detail: "Time to first token: how long the user waits before output begins, dominated by prefill." },
            { term: "Throughput", detail: "Tokens generated per second across all requests, the metric that drives cost." }
          ],
          exercise: {
            title: "Serve and benchmark",
            task: "Serve your model with vLLM or SGLang behind an OpenAI-compatible API. Measure TTFT and throughput at several concurrency levels.",
            hint: "Run a prefill-heavy and a decode-heavy workload. They stress different parts of the system."
          }
        },
        {
          id: "p7l3",
          title: "KV cache at scale",
          goal: "Handle million-token contexts without running out of memory.",
          points: [
            "The KV cache, not the weights, limits long context.",
            "Prefix caching makes similar prompts nearly free.",
            "Cold cache can be offloaded to CPU or SSD.",
            "Routing requests by cache locality raises hit rates."
          ],
          vocab: [
            { term: "KV cache", detail: "Per-token stored keys and values reused across decoding steps. Its size scales with context length, batch, and layers." },
            { term: "Prefix caching", detail: "Reusing the KV for a shared prompt prefix across requests, avoiding recomputation." },
            { term: "KV offload", detail: "Moving inactive cache blocks to CPU memory or SSD so GPU memory holds only what is active." },
            { term: "HiCache", detail: "A hierarchical caching system that tiers KV across GPU, CPU, and storage, used in SGLang for DeepSeek models." },
            { term: "Mooncake", detail: "A KV-cache store and transfer layer used for disaggregated serving and cache sharing." },
            { term: "KV-aware routing", detail: "Sending a request to the replica that already holds its prefix cache, turning cache into a routing decision." }
          ],
          exercise: {
            title: "Cache economics",
            task: "Measure GPU memory per token at several context lengths. Enable prefix caching and measure the hit-rate improvement on repeated prompts.",
            hint: "V4.1-Flash cut persistent cache to roughly an eighth of its predecessor. Reproduce that reasoning on paper."
          }
        },
        {
          id: "p7l4",
          title: "Parallel serving",
          goal: "Split a large model across GPUs and nodes.",
          points: [
            "Tensor parallel splits each layer across GPUs.",
            "Expert parallel places MoE experts on different devices.",
            "Prefill and decode can run on separate pools.",
            "KV must cross the interconnect efficiently."
          ],
          vocab: [
            { term: "Tensor parallelism", detail: "Split individual weight matrices across devices and combine partial results each layer. Communication heavy but latency friendly." },
            { term: "Expert parallelism", detail: "Place different MoE experts on different devices; tokens are all-to-all dispatched to their experts." },
            { term: "Prefill-decode disaggregation", detail: "Run the compute-heavy prefill on one pool and the memory-bound decode on another, each sized for its workload." },
            { term: "NVLink", detail: "A high-bandwidth GPU-to-GPU interconnect, much faster than PCIe, used to move activations and KV quickly." },
            { term: "RDMA", detail: "Remote direct memory access, letting nodes read each other's memory without CPU involvement, used for cross-node KV transfer." }
          ],
          exercise: {
            title: "Two-GPU serving",
            task: "Serve a model with tensor parallelism across two GPUs. Compare throughput and latency to a single-GPU run.",
            hint: "Note the communication overhead. Parallelism only pays when the model does not fit or latency demands it."
          }
        },
        {
          id: "p7l5",
          title: "Productization",
          goal: "Run the endpoint as a reliable, affordable product.",
          points: [
            "Scale replicas with load and queue depth.",
            "Know your cost per million tokens.",
            "Add retries, fallbacks, and timeouts.",
            "Log enough to debug but not to leak data."
          ],
          vocab: [
            { term: "Autoscaling", detail: "Adding or removing replicas based on load, GPU utilization, or request queue length." },
            { term: "Cost per token", detail: "Total infrastructure spend divided by tokens served, the number that decides whether a product is viable." },
            { term: "Observability", detail: "Metrics, logs, and traces that show latency, errors, cache hit rate, and cost across the serving system." },
            { term: "Fallback", detail: "A secondary model or path used when the primary fails or times out, preserving availability." },
            { term: "Safety policy", detail: "Rules and filters governing acceptable inputs and outputs, including rate limits and abuse handling." }
          ],
          exercise: {
            title: "Model the business",
            task: "Build a spreadsheet costing your deployment at three traffic levels, including off-peak discounts. Add retries and a fallback model and re-cost it.",
            hint: "Cache-hit pricing changes the answer dramatically for agent workloads with long shared prefixes."
          }
        }
      ],
      quiz: [
        { q: "PagedAttention primarily improves:", options: ["Model accuracy", "KV memory efficiency", "Tokenizer speed", "Vocabulary size"], answer: 1, explain: "Fixed-size KV blocks with page tables eliminate fragmentation and allow sharing." },
        { q: "Continuous batching helps because it:", options: ["Uses bigger models", "Retires and admits requests every step", "Caches weights", "Compresses prompts"], answer: 1, explain: "The GPU stays busy instead of waiting for a fixed batch to finish." },
        { q: "Prefill-decode disaggregation exists because prefill and decode are:", options: ["Identical", "Bound by different resources", "Both memory-free", "Always sequential"], answer: 1, explain: "Prefill is compute-heavy while decode is memory-bandwidth-heavy, so separate pools serve each better." },
        { q: "KV-aware routing sends a request to:", options: ["The newest replica", "The replica holding its prefix cache", "The nearest datacenter", "A random GPU"], answer: 1, explain: "Cache locality raises hit rates and cuts recomputation." }
      ]
    },

    /* ============================ PHASE 8 ============================ */
    {
      id: "p8",
      num: 8,
      title: "Capstone: Reconstruct DeepSeek-V4.1-Flash",
      tagline: "Prove you understand the whole pipeline by writing it down and rebuilding it small.",
      goal: "Produce a full technical trace of V4.1-Flash plus scaled-down reproductions of each stage.",
      duration: "4 weeks",
      lessons: [
        {
          id: "p8l1",
          title: "Write the end-to-end trace",
          goal: "Explain the model from raw data to a served request.",
          points: [
            "Describe the 45T-token multimodal corpus and agentic synthesis.",
            "Explain the CED stack and why prefill uses 8B while decode uses 16B.",
            "Derive the KV-cache savings from CSA2 and SWA bounded replay.",
            "Trace SFT, RL, and on-policy distillation into one model.",
            "Finish with a deployment and cost plan."
          ],
          vocab: [
            { term: "Causal encoder-decoder", detail: "V4.1-Flash's 40-layer design: a 20-layer causal encoder followed by a 20-layer decoder whose global KV is projected from the encoder's final hidden states." },
            { term: "CSA2", detail: "The second-generation compressed sparse attention in V4.1-Flash, refining the compression and selection used for long context." },
            { term: "On-policy distillation", detail: "The final post-training stage that consolidates specialist abilities into one model using the student's own generations." },
            { term: "Reasoning effort", detail: "A continuous 1-100 control trading inference cost for accuracy, exposed by V4.1-Flash." },
            { term: "Agentic synthesis pipeline", detail: "Large-scale automated generation of tool tasks and environments used for agentic post-training." }
          ],
          exercise: {
            title: "The 50-page report",
            task: "Write sections on data, tokenizer, architecture, pretraining, post-training, deployment, evaluation, and reproduction. Include equations and code.",
            hint: "Use your phase summaries as the skeleton. For every claim, cite the DeepSeek report or derive it."
          }
        },
        {
          id: "p8l2",
          title: "Reproduce small, present, defend",
          goal: "Show working code for each stage and defend your choices.",
          points: [
            "Train a tiny CED-style model with sparse attention and MoE.",
            "Run SFT, RL with a verifiable reward, and distillation.",
            "Quantize and serve it with caching and PD disaggregation on paper.",
            "Self-grade against the rubric without notes."
          ],
          vocab: [
            { term: "Self-grade", detail: "Scoring your own work against a fixed rubric to expose gaps before someone else does." },
            { term: "Ablation", detail: "Removing one component to prove its contribution, the strongest evidence of understanding." }
          ],
          exercise: {
            title: "Repo and defense",
            task: "Publish a repo that trains a miniature CED MoE model end to end. Then, without notes, derive KV bytes per token, justify CSA2 and SWA, and explain what on-policy distillation fixes.",
            hint: "If you cannot derive a number from first principles, revisit that phase before calling the capstone done."
          }
        }
      ],
      quiz: [
        { q: "In V4.1-Flash, why is decode more expensive in active parameters than prefill?", options: ["Decode uses images", "The decoder activates more parameters per generated token", "Prefill skips the encoder", "Decode uses fp64"], answer: 1, explain: "Prefill activates about 8B per input token while decode activates about 16B per generated token." },
        { q: "SWA bounded replay avoids storing SWA KV by:", options: ["Compressing to FP4", "Replaying the most recent window to rebuild it", "Deleting the cache", "Using a reward model"], answer: 1, explain: "Only the last n_win tokens are replayed to reconstruct missing sliding-window states." },
        { q: "The final stage of V4 post-training is:", options: ["Tokenization", "On-policy distillation consolidation", "Data crawling", "FP4 quantization"], answer: 1, explain: "Specialist abilities are merged into one model via on-policy distillation." }
      ]
    }
  ]
};
