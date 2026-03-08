export interface RoadmapExercise {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  difficulty: "Easy" | "Medium" | "Hard";
  questionCount: number;
}

export interface RoadmapNode {
  id: string;
  title: string;
  icon: string;
  exercises: RoadmapExercise[];
}

export interface RoadmapStage {
  id: string;
  title: string;
  description: string;
  color: string;
  nodes: RoadmapNode[];
}

// Aligned with INAIO Stage 1 & Stage 2 syllabus — exact topic names
export const ROADMAP_STAGES: RoadmapStage[] = [
  // ═══════════════════════════════════════════════════════
  //  STAGE 1
  // ═══════════════════════════════════════════════════════
  {
    id: "stage-1",
    title: "🧠 Stage 1 — Foundations",
    description: "Foundational Topics, ML Theory & Algorithms",
    color: "from-primary to-blue-400",
    nodes: [
      // ──── Foundational Topics ────
      {
        id: "s1-computational-logical-thinking",
        title: "Computational and Logical Thinking",
        icon: "🧩",
        exercises: [
          { id: "s1-clt-1", title: "Pattern Recognition & Rule Discovery", description: "Identify numeric, visual, and data-based patterns", xpReward: 20, difficulty: "Easy", questionCount: 5 },
          { id: "s1-clt-2", title: "Logical Reasoning Puzzles", description: "Solve deduction and inference problems", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "s1-clt-3", title: "Programming Constructs", description: "Variables, operations, if-then-else, for loops", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "s1-clt-4", title: "Truth Tables & De Morgan's Laws", description: "Master AND, OR, NOT, XOR and logical equivalences", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s1-clt-5", title: "Algorithm Tracing Challenge", description: "Trace pseudocode execution step by step", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s1-foundations-algebra",
        title: "Foundations of Algebra",
        icon: "📐",
        exercises: [
          { id: "s1-fa-1", title: "Functions", description: "Domain, range, injective, surjective, bijective", xpReward: 25, difficulty: "Easy", questionCount: 5 },
          { id: "s1-fa-2", title: "Polynomials & Quadratic Equations", description: "Roots, discriminant, and Vieta's formulas", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "s1-fa-3", title: "Arithmetic & Geometric Series", description: "AP, GP formulas and summations", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "s1-fa-4", title: "Common Inequalities (AM-GM, Jensen's)", description: "Apply AM-GM, Cauchy-Schwarz, and Jensen's inequality", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "s1-fa-5", title: "Algebra Mastery Quiz", description: "Mixed challenge across all algebra topics", xpReward: 55, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s1-probability",
        title: "Probability",
        icon: "🎲",
        exercises: [
          { id: "s1-pr-1", title: "Independent & Dependent Events", description: "Basics of probability with coins, dice, and cards", xpReward: 20, difficulty: "Easy", questionCount: 5 },
          { id: "s1-pr-2", title: "Bayes' Theorem Applications", description: "Apply Bayes' theorem to practical examples", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s1-pr-3", title: "Conditional Probability", description: "Master P(A|B) and the chain rule", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "s1-pr-4", title: "Combinatorics & Counting", description: "Permutations, combinations, and counting principles", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "s1-pr-5", title: "Probability Challenge", description: "Advanced multi-step probability problems", xpReward: 55, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s1-statistics",
        title: "Statistics",
        icon: "📊",
        exercises: [
          { id: "s1-st-1", title: "Mean, Median, Mode, Variance, Percentile", description: "Descriptive statistics fundamentals", xpReward: 20, difficulty: "Easy", questionCount: 5 },
          { id: "s1-st-2", title: "Independent Variables", description: "Understanding variable independence in data", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "s1-st-3", title: "Correlation and Causation", description: "Distinguish correlation from causation", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s1-st-4", title: "Box Plots, IQR & Outliers", description: "Quartiles, IQR, and detecting anomalies", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "s1-st-5", title: "Statistics Mastery", description: "Mixed descriptive statistics challenge", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s1-linear-algebra-matrices",
        title: "Linear Algebra and Matrices",
        icon: "🧮",
        exercises: [
          { id: "s1-la-1", title: "Basic Matrix Operations", description: "Addition, multiplication, inverse", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "s1-la-2", title: "Solving Systems of Linear Equations", description: "Gaussian elimination and matrix methods", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s1-la-3", title: "Vectors & Dot Products", description: "Magnitude, direction, and angle between vectors", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "s1-la-4", title: "Linear Algebra Challenge", description: "Mixed problems on matrices and systems", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s1-optimization",
        title: "Optimization",
        icon: "🎯",
        exercises: [
          { id: "s1-op-1", title: "Linear Optimization with Constraints", description: "Solve constrained optimization problems", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "s1-op-2", title: "Maxima and Minima", description: "Find optimal values in simple scenarios", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s1-op-3", title: "Optimization Challenge", description: "Mixed LP and optimization problems", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s1-data-representation-visualization",
        title: "Data Representation and Visualization",
        icon: "📈",
        exercises: [
          { id: "s1-dv-1", title: "Base-n Coding", description: "Convert between binary, octal, decimal, hex", xpReward: 25, difficulty: "Easy", questionCount: 5 },
          { id: "s1-dv-2", title: "Tabular Data & Entity-Relationship Graphs", description: "Understand hierarchies and ER diagrams", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "s1-dv-3", title: "Interpreting Charts & Graphs", description: "Bar graphs, histograms, pie charts, scatter plots", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "s1-dv-4", title: "Drawing Insights from Data", description: "Identify trends and patterns from visualized data", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s1-dv-5", title: "Data Visualization Challenge", description: "Multi-chart analysis and misleading graphs", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      // ──── ML Theoretical Foundations ────
      {
        id: "s1-learning-fundamentals",
        title: "Learning Fundamentals",
        icon: "💡",
        exercises: [
          { id: "s1-lf-1", title: "ML Model Concept", description: "Inputs, outputs, and learning from data", xpReward: 20, difficulty: "Easy", questionCount: 5 },
          { id: "s1-lf-2", title: "Train-Test Process", description: "Splitting data and evaluating generalization", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "s1-lf-3", title: "Purpose of Loss Functions", description: "MSE, cross-entropy, and minimization", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s1-lf-4", title: "ML Fundamentals Quiz", description: "Comprehensive ML theory challenge", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s1-evaluation-metrics",
        title: "Evaluation Metrics",
        icon: "✅",
        exercises: [
          { id: "s1-em-1", title: "Regression: RMSE & MAE", description: "Calculate and interpret regression metrics", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "s1-em-2", title: "Classification: Accuracy, Precision, Recall, F1", description: "Compute classification metrics from confusion matrix", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s1-em-3", title: "Confusion Matrix & ROC/AUC", description: "Interpret confusion matrices and ROC curves", xpReward: 50, difficulty: "Medium", questionCount: 5 },
          { id: "s1-em-4", title: "Metrics Mastery", description: "Choose the right metric for each scenario", xpReward: 55, difficulty: "Hard", questionCount: 5 },
        ],
      },
      // ──── Algorithms ────
      {
        id: "s1-supervised-learning",
        title: "Supervised Learning",
        icon: "🎓",
        exercises: [
          { id: "s1-sl-1", title: "Linear Regression", description: "Predict continuous values with y = mx + b", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "s1-sl-2", title: "Linear Classifier", description: "Decision boundaries for binary classification", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "s1-sl-3", title: "K-Nearest Neighbors (K-NN)", description: "Classify using nearest neighbors", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s1-sl-4", title: "Decision Trees", description: "Tree-based splits and information gain", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "s1-sl-5", title: "Supervised Learning Challenge", description: "Choose and apply the right algorithm", xpReward: 60, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s1-unsupervised-learning",
        title: "Unsupervised Learning",
        icon: "🔍",
        exercises: [
          { id: "s1-ul-1", title: "K-Means Clustering", description: "Group data without labels", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "s1-ul-2", title: "Principal Component Analysis (PCA)", description: "Reduce dimensions while preserving variance", xpReward: 45, difficulty: "Hard", questionCount: 5 },
          { id: "s1-ul-3", title: "Hierarchical Clustering", description: "Build dendrograms and cluster hierarchies", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "s1-ul-4", title: "Unsupervised Learning Quiz", description: "Clustering and dimensionality reduction challenge", xpReward: 55, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s1-probabilistic-models",
        title: "Probabilistic Models",
        icon: "🎰",
        exercises: [
          { id: "s1-pm-1", title: "Naive Bayes Classifier", description: "Apply Bayes' theorem with independence assumption", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s1-pm-2", title: "Naive Bayes Computation", description: "Hand-calculate NB predictions with Laplace smoothing", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s1-famous-algorithms",
        title: "Famous Algorithms",
        icon: "⚡",
        exercises: [
          { id: "s1-fam-1", title: "PageRank", description: "How Google ranks web pages using link structure", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s1-fam-2", title: "PageRank Computation", description: "Hand-trace PageRank iterations on small graphs", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "s1-fam-3", title: "TF-IDF Ranking", description: "Compute term frequency-inverse document frequency", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s1-fam-4", title: "TF-IDF Calculation Challenge", description: "Full TF-IDF scoring from document sets", xpReward: 55, difficulty: "Hard", questionCount: 5 },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  //  STAGE 2
  // ═══════════════════════════════════════════════════════
  {
    id: "stage-2",
    title: "🚀 Stage 2 — Advanced",
    description: "Deeper ML, NLP/CV, Python & Gen AI Tools",
    color: "from-secondary to-orange-400",
    nodes: [
      // ──── Foundational Topics (Stage 2 — deeper) ────
      {
        id: "s2-computational-logical-thinking",
        title: "Computational and Logical Thinking",
        icon: "🧩",
        exercises: [
          { id: "s2-clt-1", title: "Advanced Pattern Recognition", description: "Complex numeric and visual pattern challenges", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "s2-clt-2", title: "Advanced Logical Reasoning", description: "Multi-variable logic and constraint puzzles", xpReward: 45, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s2-foundations-algebra",
        title: "Foundations of Algebra",
        icon: "📐",
        exercises: [
          { id: "s2-fa-1", title: "Advanced Functions & Polynomials", description: "Complex roots, factor theorem, and composition", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s2-fa-2", title: "Advanced Series & Inequalities", description: "Telescoping, Jensen's, and Cauchy-Schwarz", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s2-probability",
        title: "Probability",
        icon: "🎲",
        exercises: [
          { id: "s2-pr-1", title: "Advanced Bayes' Theorem", description: "Multi-step Bayesian reasoning problems", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "s2-pr-2", title: "Probability Challenge — Stage 2", description: "Competition-level probability problems", xpReward: 60, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s2-statistics",
        title: "Statistics",
        icon: "📊",
        exercises: [
          { id: "s2-st-1", title: "Advanced Descriptive Statistics", description: "Variance, standard deviation, and data interpretation", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s2-st-2", title: "Correlation & Causation Deep Dive", description: "Confounding variables and spurious correlations", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s2-linear-algebra-matrices",
        title: "Linear Algebra and Matrices",
        icon: "🧮",
        exercises: [
          { id: "s2-la-1", title: "Advanced Matrix Operations", description: "Inverse, transpose, and properties", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s2-la-2", title: "Determinants and Their Applications", description: "Determinants, singularity, and Cramer's rule", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "s2-la-3", title: "Eigenvalues & Eigenvectors", description: "Compute eigenvalues for 2×2 and 3×3 matrices", xpReward: 60, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s2-optimization",
        title: "Optimization",
        icon: "🎯",
        exercises: [
          { id: "s2-op-1", title: "Advanced Constrained Optimization", description: "Lagrange multipliers and KKT conditions", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "s2-op-2", title: "Gradient Descent Deep Dive", description: "SGD, momentum, and learning rate schedules", xpReward: 55, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s2-data-representation-visualization",
        title: "Data Representation and Visualization",
        icon: "📈",
        exercises: [
          { id: "s2-dv-1", title: "Advanced Data Interpretation", description: "Complex multi-variable chart analysis", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s2-dv-2", title: "ER Diagrams & Data Modeling", description: "Design entity-relationship models from scenarios", xpReward: 45, difficulty: "Hard", questionCount: 5 },
        ],
      },
      // ──── ML Theoretical Foundations (Stage 2 — deeper) ────
      {
        id: "s2-learning-fundamentals",
        title: "Learning Fundamentals",
        icon: "💡",
        exercises: [
          { id: "s2-lf-1", title: "Overfitting and Underfitting", description: "Diagnose and fix model generalization issues", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s2-lf-2", title: "Hyperparameter Tuning", description: "Grid search, random search, and validation", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "s2-lf-3", title: "Regularization Techniques", description: "L1, L2, dropout, and early stopping", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "s2-lf-4", title: "Advanced ML Theory Quiz", description: "Bias-variance, cross-validation, and ensembles", xpReward: 60, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s2-evaluation-metrics",
        title: "Evaluation Metrics",
        icon: "✅",
        exercises: [
          { id: "s2-em-1", title: "Advanced Metrics Challenge", description: "Precision-recall tradeoff and threshold tuning", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "s2-em-2", title: "Cross-Validation Mastery", description: "K-fold, stratified, and leave-one-out CV", xpReward: 55, difficulty: "Hard", questionCount: 5 },
        ],
      },
      // ──── ML Algorithms (Stage 2) ────
      {
        id: "s2-supervised-learning",
        title: "Supervised Learning",
        icon: "🎓",
        exercises: [
          { id: "s2-sl-1", title: "Linear Regression — Advanced", description: "Multiple regression and regularization", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s2-sl-2", title: "Linear Classifier — Advanced", description: "SVM intuition and margin maximization", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "s2-sl-3", title: "K-NN — Advanced", description: "Distance metrics, weighted K-NN, and curse of dimensionality", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "s2-sl-4", title: "Decision Trees — Advanced", description: "Pruning, random forests, and ensemble trees", xpReward: 55, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s2-unsupervised-learning",
        title: "Unsupervised Learning",
        icon: "🔍",
        exercises: [
          { id: "s2-ul-1", title: "K-Means — Advanced", description: "Elbow method, silhouette score, K-Means++", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "s2-ul-2", title: "PCA — Advanced", description: "Variance explained ratio and scree plots", xpReward: 55, difficulty: "Hard", questionCount: 5 },
          { id: "s2-ul-3", title: "Hierarchical Clustering — Advanced", description: "Linkage methods and dendrogram interpretation", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s2-probabilistic-models",
        title: "Probabilistic Models",
        icon: "🎰",
        exercises: [
          { id: "s2-pm-1", title: "Naive Bayes — Advanced", description: "Gaussian NB, multinomial NB, and Laplace smoothing", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s2-famous-algorithms",
        title: "Famous Algorithms",
        icon: "⚡",
        exercises: [
          { id: "s2-fam-1", title: "PageRank — Advanced", description: "Damping factor, dangling nodes, and convergence", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "s2-fam-2", title: "TF-IDF Ranking — Advanced", description: "Multi-document TF-IDF and cosine similarity", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      // ──── NLP, CV, and Multimodal Basics ────
      {
        id: "s2-nlp-cv-multimodal",
        title: "NLP, CV, and Multimodal Basics",
        icon: "👁️",
        exercises: [
          { id: "s2-ncm-1", title: "Text/Image Preprocessing", description: "Tokenization, normalization, resizing, augmentation", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s2-ncm-2", title: "Data Representation and Embeddings", description: "Word2Vec, GloVe, image feature vectors", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "s2-ncm-3", title: "Pretrained Text/Vision/Multimodal Encoders", description: "BERT, ResNet, CLIP, and transfer learning", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "s2-ncm-4", title: "Common Tasks", description: "Classification, detection, segmentation, retrieval", xpReward: 55, difficulty: "Hard", questionCount: 5 },
        ],
      },
      // ──── Python Programming ────
      {
        id: "s2-python-basics",
        title: "Python Basics",
        icon: "🐍",
        exercises: [
          { id: "s2-py-1", title: "Syntax, Loops, and Functions", description: "Python fundamentals and control flow", xpReward: 25, difficulty: "Easy", questionCount: 5 },
          { id: "s2-py-2", title: "File Handling and Basic I/O", description: "Read/write files, stdin/stdout operations", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "s2-py-3", title: "Python Coding Challenge", description: "Solve algorithmic problems in Python", xpReward: 45, difficulty: "Medium", questionCount: 5 },
        ],
      },
      {
        id: "s2-data-handling",
        title: "Data Handling",
        icon: "🗂️",
        exercises: [
          { id: "s2-dh-1", title: "NumPy for Data Processing", description: "Arrays, broadcasting, and vectorized ops", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "s2-dh-2", title: "Pandas for Data Processing", description: "DataFrames, filtering, grouping, and merging", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s2-dh-3", title: "Data Wrangling Challenge", description: "Clean, transform, and analyze messy datasets", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s2-visualization",
        title: "Visualization",
        icon: "📊",
        exercises: [
          { id: "s2-viz-1", title: "Matplotlib & Seaborn", description: "Create and interpret visualizations", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "s2-viz-2", title: "Visualization Interpretation Challenge", description: "Read and analyze complex plots", xpReward: 45, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "s2-ml-libraries",
        title: "ML Libraries",
        icon: "📚",
        exercises: [
          { id: "s2-mllib-1", title: "Scikit-learn: Classification & Regression", description: "Train models with sklearn pipelines", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "s2-mllib-2", title: "Scikit-learn: Clustering & Metrics", description: "K-Means, evaluation, and model selection", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "s2-mllib-3", title: "End-to-End ML Pipeline", description: "Load data → preprocess → train → evaluate", xpReward: 60, difficulty: "Hard", questionCount: 5 },
        ],
      },
      // ──── Gen AI Tool Use ────
      {
        id: "s2-ai-assistant-usage",
        title: "AI Assistant Usage",
        icon: "🤖",
        exercises: [
          { id: "s2-ai-1", title: "Effective AI Assistant Use", description: "Prompting, problem decomposition, and verification", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "s2-ai-2", title: "Whitelisted Documentation Usage", description: "Navigate and apply official docs effectively", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "s2-ai-3", title: "🏆 INAIO Champion Challenge", description: "Final comprehensive quiz across all topics", xpReward: 100, difficulty: "Hard", questionCount: 10 },
        ],
      },
    ],
  },
];

// All exercises flattened
export const ALL_EXERCISES = ROADMAP_STAGES.flatMap(stage =>
  stage.nodes.flatMap(node => node.exercises)
);
