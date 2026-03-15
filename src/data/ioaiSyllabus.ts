import { Stage } from "./inaiOSyllabus";

export const IOAI_SYLLABUS: Stage[] = [
  {
    title: "Section 1 — Foundational Skills",
    note: "Core mathematical and programming skills required for all IOAI participants.",
    sections: [
      {
        title: "Mathematics & Statistics",
        topics: [
          {
            name: "Linear Algebra",
            subtopics: [
              "Vectors, matrices, and tensor operations",
              "Eigenvalues and eigenvectors",
              "Singular Value Decomposition (SVD)",
              "Matrix factorization techniques",
            ],
          },
          {
            name: "Calculus & Optimization",
            subtopics: [
              "Partial derivatives and gradients",
              "Chain rule for composite functions",
              "Gradient descent and its variants (SGD, Adam, RMSProp)",
              "Convex vs non-convex optimization",
              "Learning rate scheduling",
            ],
          },
          {
            name: "Probability & Statistics",
            subtopics: [
              "Probability distributions (Gaussian, Bernoulli, Multinomial)",
              "Maximum Likelihood Estimation (MLE)",
              "Bayesian inference",
              "Information theory: entropy, cross-entropy, KL divergence",
              "Hypothesis testing and p-values",
            ],
          },
        ],
      },
      {
        title: "Programming & Tools",
        topics: [
          {
            name: "Python for AI",
            subtopics: [
              "Advanced Python: generators, decorators, context managers",
              "NumPy vectorized operations and broadcasting",
              "Pandas for data wrangling and feature engineering",
              "Matplotlib/Seaborn for publication-quality plots",
            ],
          },
          {
            name: "PyTorch Fundamentals",
            subtopics: [
              "Tensors, autograd, and computational graphs",
              "nn.Module and custom layers",
              "DataLoader, Dataset, and data pipelines",
              "Training loops, checkpointing, and model saving",
              "GPU acceleration with CUDA",
            ],
          },
          {
            name: "Experiment Management",
            subtopics: [
              "Logging with TensorBoard / Weights & Biases",
              "Hyperparameter search strategies",
              "Reproducibility: seeds, deterministic mode",
            ],
          },
        ],
      },
      {
        title: "Classical ML",
        topics: [
          {
            name: "Supervised Learning",
            subtopics: [
              "Linear & logistic regression with regularization (L1/L2)",
              "Decision trees, Random Forests, Gradient Boosting (XGBoost, LightGBM)",
              "Support Vector Machines (SVM) with kernel trick",
              "K-Nearest Neighbors and distance metrics",
            ],
          },
          {
            name: "Unsupervised Learning",
            subtopics: [
              "K-Means, DBSCAN, and hierarchical clustering",
              "PCA and dimensionality reduction",
              "Autoencoders for representation learning",
              "Anomaly detection techniques",
            ],
          },
          {
            name: "Evaluation & Model Selection",
            subtopics: [
              "Cross-validation strategies (K-fold, stratified)",
              "Bias-variance tradeoff",
              "ROC/AUC, precision-recall curves",
              "Confusion matrix analysis",
              "Feature importance and interpretability (SHAP, LIME)",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Section 2 — Neural Networks & Deep Learning",
    note: "Core architectures and training techniques for deep learning.",
    sections: [
      {
        title: "Feedforward & Training",
        topics: [
          {
            name: "Neural Network Fundamentals",
            subtopics: [
              "Perceptrons and multilayer networks",
              "Activation functions (ReLU, GELU, Swish, Sigmoid, Tanh)",
              "Universal approximation theorem",
              "Forward pass and backpropagation",
            ],
          },
          {
            name: "Training Deep Networks",
            subtopics: [
              "Loss functions (CE, BCE, MSE, Focal Loss)",
              "Batch normalization and layer normalization",
              "Dropout, weight decay, and regularization",
              "Vanishing/exploding gradients and solutions",
              "Mixed precision training",
            ],
          },
        ],
      },
      {
        title: "Convolutional Networks",
        topics: [
          {
            name: "CNN Architectures",
            subtopics: [
              "Convolution, pooling, and stride mechanics",
              "Classic architectures: LeNet, AlexNet, VGG, ResNet",
              "Modern architectures: EfficientNet, ConvNeXt",
              "Receptive field calculations",
              "1×1 convolutions and bottleneck designs",
            ],
          },
        ],
      },
      {
        title: "Sequence Models",
        topics: [
          {
            name: "RNNs and Variants",
            subtopics: [
              "Vanilla RNN and its limitations",
              "LSTM: forget gate, input gate, output gate",
              "GRU: reset and update gates",
              "Bidirectional RNNs",
              "Sequence-to-sequence models",
            ],
          },
        ],
      },
      {
        title: "Transformers",
        topics: [
          {
            name: "Attention & Transformer Architecture",
            subtopics: [
              "Self-attention mechanism and scaled dot-product attention",
              "Multi-head attention",
              "Positional encoding (sinusoidal and learned)",
              "Encoder-decoder architecture",
              "Pre-norm vs post-norm configurations",
              "Flash Attention and efficient attention variants",
            ],
          },
          {
            name: "Pre-trained Models",
            subtopics: [
              "BERT: masked language modeling and fine-tuning",
              "GPT family: autoregressive generation",
              "T5 and encoder-decoder pre-training",
              "Vision Transformers (ViT)",
              "Transfer learning and domain adaptation",
            ],
          },
        ],
      },
      {
        title: "Generative Models",
        topics: [
          {
            name: "Generative Architectures",
            subtopics: [
              "Variational Autoencoders (VAEs)",
              "Generative Adversarial Networks (GANs)",
              "Diffusion models (DDPM, score-based)",
              "Flow-based models (normalizing flows)",
              "Evaluation: FID, IS, CLIP score",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Section 3 — Computer Vision",
    note: "Visual understanding tasks from classification to generation.",
    sections: [
      {
        title: "Image Understanding",
        topics: [
          {
            name: "Image Classification",
            subtopics: [
              "Data augmentation strategies (CutOut, MixUp, CutMix)",
              "Transfer learning from ImageNet pre-trained models",
              "Fine-grained classification",
              "Multi-label classification",
            ],
          },
          {
            name: "Object Detection",
            subtopics: [
              "Anchor-based: Faster R-CNN, SSD",
              "Anchor-free: YOLO family, CenterNet, FCOS",
              "Feature Pyramid Networks (FPN)",
              "Non-maximum suppression (NMS)",
              "Evaluation: mAP, IoU",
            ],
          },
          {
            name: "Image Segmentation",
            subtopics: [
              "Semantic segmentation (U-Net, DeepLab)",
              "Instance segmentation (Mask R-CNN)",
              "Panoptic segmentation",
              "Loss functions: Dice loss, focal loss",
            ],
          },
        ],
      },
      {
        title: "Advanced Vision",
        topics: [
          {
            name: "Visual Representation Learning",
            subtopics: [
              "Contrastive learning (SimCLR, MoCo)",
              "Self-supervised methods (DINO, MAE)",
              "Vision-language models (CLIP, ALIGN)",
              "Zero-shot and few-shot visual classification",
            ],
          },
          {
            name: "Image Generation",
            subtopics: [
              "Conditional image generation",
              "Text-to-image (Stable Diffusion architecture)",
              "Image-to-image translation (pix2pix, CycleGAN)",
              "Super-resolution (ESRGAN)",
              "Neural style transfer",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Section 4 — NLP & Audio",
    note: "Text and audio understanding, generation, and multimodal tasks.",
    sections: [
      {
        title: "Text Understanding",
        topics: [
          {
            name: "Text Preprocessing & Embeddings",
            subtopics: [
              "Tokenization: BPE, WordPiece, SentencePiece",
              "Word embeddings: Word2Vec, GloVe, FastText",
              "Contextual embeddings from Transformers",
              "Sentence and document embeddings",
            ],
          },
          {
            name: "NLP Tasks",
            subtopics: [
              "Text classification and sentiment analysis",
              "Named Entity Recognition (NER)",
              "Question answering (extractive & generative)",
              "Machine translation",
              "Text summarization (extractive & abstractive)",
            ],
          },
        ],
      },
      {
        title: "Language Generation",
        topics: [
          {
            name: "Large Language Models",
            subtopics: [
              "Autoregressive decoding strategies (greedy, beam, nucleus)",
              "Prompt engineering and in-context learning",
              "Fine-tuning: LoRA, QLoRA, adapter methods",
              "RLHF and alignment techniques",
              "Evaluation: perplexity, BLEU, ROUGE, BERTScore",
            ],
          },
        ],
      },
      {
        title: "Audio & Speech",
        topics: [
          {
            name: "Audio Processing",
            subtopics: [
              "Spectrograms, Mel-spectrograms, MFCCs",
              "Audio classification and tagging",
              "Automatic Speech Recognition (ASR): CTC, Whisper",
              "Text-to-Speech (TTS) overview",
              "Music generation basics",
            ],
          },
        ],
      },
      {
        title: "Multimodal AI",
        topics: [
          {
            name: "Multimodal Architectures",
            subtopics: [
              "Vision-language models (CLIP, BLIP, LLaVA)",
              "Visual question answering (VQA)",
              "Image captioning",
              "Audio-visual learning",
              "Cross-modal retrieval",
            ],
          },
        ],
      },
    ],
  },
];
