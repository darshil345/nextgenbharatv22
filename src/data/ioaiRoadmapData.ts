import { RoadmapStage } from "./roadmapData";

export const IOAI_ROADMAP_STAGES: RoadmapStage[] = [
  {
    id: "ioai-stage-1",
    title: "🧮 Section 1 — Foundational Skills",
    description: "Math, Python, PyTorch & Classical ML",
    color: "from-primary to-blue-400",
    nodes: [
      {
        id: "ioai-linear-algebra",
        title: "Linear Algebra",
        icon: "📐",
        exercises: [
          { id: "io-la-1", title: "Vectors & Matrices", description: "Operations, dot products, matrix multiply", xpReward: 25, difficulty: "Easy", questionCount: 5 },
          { id: "io-la-2", title: "Eigenvalues & Eigenvectors", description: "Compute eigendecomposition", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "io-la-3", title: "SVD & Factorization", description: "Singular value decomposition applications", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "ioai-calculus-optim",
        title: "Calculus & Optimization",
        icon: "∂",
        exercises: [
          { id: "io-co-1", title: "Gradients & Partial Derivatives", description: "Compute gradients of multivariate functions", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "io-co-2", title: "Chain Rule & Backprop Math", description: "Apply chain rule to neural network layers", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "io-co-3", title: "Gradient Descent Variants", description: "SGD, Adam, RMSProp, learning rate schedules", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "ioai-prob-stats",
        title: "Probability & Information Theory",
        icon: "🎲",
        exercises: [
          { id: "io-ps-1", title: "Distributions & MLE", description: "Gaussian, Bernoulli, maximum likelihood", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "io-ps-2", title: "Bayesian Inference", description: "Prior, posterior, MAP estimation", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "io-ps-3", title: "Information Theory", description: "Entropy, cross-entropy, KL divergence", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "ioai-pytorch",
        title: "PyTorch Fundamentals",
        icon: "🔥",
        exercises: [
          { id: "io-pt-1", title: "Tensors & Autograd", description: "Tensor ops, computational graphs, .backward()", xpReward: 25, difficulty: "Easy", questionCount: 5 },
          { id: "io-pt-2", title: "nn.Module & Training Loops", description: "Custom models, DataLoader, optimizers", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "io-pt-3", title: "Advanced PyTorch", description: "Custom datasets, checkpointing, GPU training", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "ioai-classical-ml",
        title: "Classical ML",
        icon: "🤖",
        exercises: [
          { id: "io-ml-1", title: "Linear & Logistic Regression", description: "Regularization, decision boundaries", xpReward: 25, difficulty: "Easy", questionCount: 5 },
          { id: "io-ml-2", title: "Trees & Ensembles", description: "Random Forest, XGBoost, feature importance", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "io-ml-3", title: "SVM & Clustering", description: "Kernel SVM, K-Means, DBSCAN", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "io-ml-4", title: "Model Selection & Evaluation", description: "Cross-validation, bias-variance, ROC/AUC", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
    ],
  },
  {
    id: "ioai-stage-2",
    title: "🧠 Section 2 — Neural Networks",
    description: "Deep learning architectures & training",
    color: "from-secondary to-orange-400",
    nodes: [
      {
        id: "ioai-nn-fundamentals",
        title: "Neural Network Basics",
        icon: "🔗",
        exercises: [
          { id: "io-nn-1", title: "Perceptrons & Activations", description: "ReLU, GELU, Sigmoid, Tanh, Swish", xpReward: 25, difficulty: "Easy", questionCount: 5 },
          { id: "io-nn-2", title: "Backpropagation", description: "Forward pass, loss computation, gradient flow", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "io-nn-3", title: "Regularization & Normalization", description: "Dropout, batch norm, layer norm, weight decay", xpReward: 45, difficulty: "Medium", questionCount: 5 },
        ],
      },
      {
        id: "ioai-cnns",
        title: "Convolutional Networks",
        icon: "🖼️",
        exercises: [
          { id: "io-cn-1", title: "Convolution Mechanics", description: "Filters, stride, padding, pooling", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "io-cn-2", title: "Classic Architectures", description: "LeNet, VGG, ResNet, skip connections", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "io-cn-3", title: "Modern CNNs", description: "EfficientNet, ConvNeXt, receptive fields", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "ioai-rnns",
        title: "Recurrent Networks",
        icon: "🔄",
        exercises: [
          { id: "io-rn-1", title: "RNN & LSTM Basics", description: "Hidden states, gates, sequence modeling", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "io-rn-2", title: "GRU & Bidirectional RNNs", description: "Gated units, forward-backward processing", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "io-rn-3", title: "Seq2Seq Models", description: "Encoder-decoder, teacher forcing", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "ioai-transformers",
        title: "Transformers",
        icon: "⚡",
        exercises: [
          { id: "io-tf-1", title: "Self-Attention Mechanism", description: "Q, K, V matrices, scaled dot-product", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "io-tf-2", title: "Multi-Head Attention & Positional Encoding", description: "Concatenation, sinusoidal & learned positions", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "io-tf-3", title: "BERT, GPT & ViT", description: "Pre-training objectives, fine-tuning strategies", xpReward: 55, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "ioai-generative",
        title: "Generative Models",
        icon: "🎨",
        exercises: [
          { id: "io-gm-1", title: "VAEs & GANs", description: "Latent spaces, adversarial training, mode collapse", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "io-gm-2", title: "Diffusion Models", description: "DDPM, noise scheduling, denoising", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "io-gm-3", title: "Evaluation Metrics", description: "FID, IS, CLIP score, human evaluation", xpReward: 45, difficulty: "Hard", questionCount: 5 },
        ],
      },
    ],
  },
  {
    id: "ioai-stage-3",
    title: "👁️ Section 3 — Computer Vision",
    description: "Detection, segmentation & visual generation",
    color: "from-accent to-green-400",
    nodes: [
      {
        id: "ioai-img-classification",
        title: "Image Classification",
        icon: "🏷️",
        exercises: [
          { id: "io-ic-1", title: "Data Augmentation", description: "CutOut, MixUp, CutMix, RandAugment", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "io-ic-2", title: "Transfer Learning", description: "Fine-tuning pretrained models, feature extraction", xpReward: 40, difficulty: "Medium", questionCount: 5 },
        ],
      },
      {
        id: "ioai-detection",
        title: "Object Detection",
        icon: "🔍",
        exercises: [
          { id: "io-od-1", title: "Anchor-Based Detectors", description: "Faster R-CNN, SSD, anchor generation", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "io-od-2", title: "YOLO & Anchor-Free", description: "YOLO family, CenterNet, FCOS", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "io-od-3", title: "Detection Metrics", description: "mAP, IoU, NMS algorithms", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "ioai-segmentation",
        title: "Image Segmentation",
        icon: "🧩",
        exercises: [
          { id: "io-sg-1", title: "Semantic Segmentation", description: "U-Net, DeepLab, dilated convolutions", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "io-sg-2", title: "Instance & Panoptic", description: "Mask R-CNN, panoptic segmentation", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "ioai-visual-repr",
        title: "Visual Representation Learning",
        icon: "🔬",
        exercises: [
          { id: "io-vr-1", title: "Contrastive Learning", description: "SimCLR, MoCo, self-supervised methods", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "io-vr-2", title: "CLIP & Zero-Shot", description: "Vision-language alignment, zero-shot classification", xpReward: 55, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "ioai-img-gen",
        title: "Image Generation",
        icon: "🎆",
        exercises: [
          { id: "io-ig-1", title: "Text-to-Image & Diffusion", description: "Stable Diffusion architecture, conditioning", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "io-ig-2", title: "Image Translation & SR", description: "pix2pix, CycleGAN, super-resolution", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
    ],
  },
  {
    id: "ioai-stage-4",
    title: "📝 Section 4 — NLP & Audio",
    description: "Language, speech & multimodal AI",
    color: "from-purple-500 to-pink-400",
    nodes: [
      {
        id: "ioai-text-preproc",
        title: "Text Processing & Embeddings",
        icon: "📄",
        exercises: [
          { id: "io-tp-1", title: "Tokenization Methods", description: "BPE, WordPiece, SentencePiece", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "io-tp-2", title: "Word & Contextual Embeddings", description: "Word2Vec, GloVe, BERT embeddings", xpReward: 40, difficulty: "Medium", questionCount: 5 },
        ],
      },
      {
        id: "ioai-nlp-tasks",
        title: "NLP Tasks",
        icon: "💬",
        exercises: [
          { id: "io-nt-1", title: "Classification & NER", description: "Sentiment analysis, entity recognition", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "io-nt-2", title: "QA & Summarization", description: "Extractive, generative, abstractive methods", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "io-nt-3", title: "Machine Translation", description: "Seq2seq, attention, evaluation metrics", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "ioai-llms",
        title: "Large Language Models",
        icon: "🧠",
        exercises: [
          { id: "io-lm-1", title: "Decoding & Prompting", description: "Greedy, beam, nucleus; prompt engineering", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "io-lm-2", title: "Fine-tuning: LoRA & RLHF", description: "Parameter-efficient tuning, alignment", xpReward: 55, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "ioai-audio",
        title: "Audio & Speech",
        icon: "🎵",
        exercises: [
          { id: "io-au-1", title: "Spectrograms & Features", description: "Mel-spectrograms, MFCCs, audio classification", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "io-au-2", title: "ASR & TTS", description: "CTC decoding, Whisper architecture", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "ioai-multimodal",
        title: "Multimodal AI",
        icon: "🌐",
        exercises: [
          { id: "io-mm-1", title: "Vision-Language Models", description: "CLIP, BLIP, LLaVA architectures", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "io-mm-2", title: "VQA & Captioning", description: "Visual question answering, image captioning", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
    ],
  },
];
