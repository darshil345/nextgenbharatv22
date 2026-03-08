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
  color: string; // tailwind gradient class
  nodes: RoadmapNode[];
}

// Aligned with INAIO Stage 1 & 2 syllabus
export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    id: "stage-1",
    title: "🧠 Foundations",
    description: "Computational thinking, algebra & probability",
    color: "from-primary to-blue-400",
    nodes: [
      {
        id: "logical-thinking",
        title: "Logical Thinking",
        icon: "🧩",
        exercises: [
          { id: "lt-1", title: "Pattern Recognition", description: "Identify patterns in data sequences", xpReward: 20, difficulty: "Easy", questionCount: 5 },
          { id: "lt-2", title: "Logic Puzzles", description: "Solve reasoning-based challenges", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "lt-3", title: "Rule Discovery", description: "Find hidden rules in complex patterns", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "lt-4", title: "Truth Tables & Logic Gates", description: "Master AND, OR, NOT, XOR operations", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "lt-5", title: "Algorithm Tracing", description: "Trace through loops, conditionals, and pseudocode", xpReward: 45, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "algebra-foundations",
        title: "Algebra Foundations",
        icon: "📐",
        exercises: [
          { id: "af-1", title: "Functions & Polynomials", description: "Roots and properties of equations", xpReward: 25, difficulty: "Easy", questionCount: 5 },
          { id: "af-2", title: "Series & Summations", description: "Arithmetic and geometric series", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "af-3", title: "Inequalities", description: "AM-GM and Jensen's inequality", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "af-4", title: "Quadratic Equations", description: "Discriminant, roots, and Vieta's formulas", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "af-5", title: "Summation & Series Challenge", description: "Compute special sums and telescoping series", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "probability-basics",
        title: "Probability",
        icon: "🎲",
        exercises: [
          { id: "pb-1", title: "Coin & Dice", description: "Basic probability with coins and dice", xpReward: 20, difficulty: "Easy", questionCount: 5 },
          { id: "pb-2", title: "Bayes' Theorem", description: "Apply Bayes' theorem to real scenarios", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "pb-3", title: "Conditional Probability", description: "Master dependent events", xpReward: 50, difficulty: "Medium", questionCount: 5 },
          { id: "pb-4", title: "Combinatorics Basics", description: "Permutations, combinations & counting", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "pb-5", title: "Expected Value & Variance", description: "Calculate E[X] and Var(X) for distributions", xpReward: 55, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "statistics-101",
        title: "Statistics",
        icon: "📊",
        exercises: [
          { id: "st-1", title: "Mean, Median, Mode", description: "Descriptive statistics fundamentals", xpReward: 20, difficulty: "Easy", questionCount: 5 },
          { id: "st-2", title: "Variance & Percentile", description: "Measure data spread", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "st-3", title: "Correlation vs Causation", description: "Understand correlation fundamentals", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "st-4", title: "Box Plots & Outliers", description: "IQR, quartiles, and detecting outliers", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "st-5", title: "Data Distributions", description: "Normal, skewed, and bimodal distributions", xpReward: 45, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "linear-algebra",
        title: "Linear Algebra",
        icon: "🧮",
        exercises: [
          { id: "la-1", title: "Matrix Operations", description: "Addition, multiplication, inverse", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "la-2", title: "Linear Systems", description: "Solve systems of equations", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "la-3", title: "Determinants", description: "Applications of determinants", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "la-4", title: "Vectors & Dot Products", description: "Magnitude, direction, and dot products", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "la-5", title: "Eigenvalues & Eigenvectors", description: "Compute eigenvalues for 2×2 matrices", xpReward: 60, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "data-viz",
        title: "Data Visualization",
        icon: "📈",
        exercises: [
          { id: "dv-1", title: "Reading Charts", description: "Interpret bar graphs, histograms, pie charts", xpReward: 20, difficulty: "Easy", questionCount: 5 },
          { id: "dv-2", title: "Scatter Plots & Trends", description: "Analyze scatter plot patterns", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "dv-3", title: "Data Insights", description: "Draw conclusions from visualizations", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "dv-4", title: "Misleading Graphs", description: "Spot deceptive data visualizations", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "dv-5", title: "Multi-Chart Analysis", description: "Combine insights from multiple chart types", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "optimization-basics",
        title: "Optimization",
        icon: "🎯",
        exercises: [
          { id: "op-1", title: "Maxima & Minima", description: "Find optimal values in simple scenarios", xpReward: 35, difficulty: "Medium", questionCount: 5 },
          { id: "op-2", title: "Linear Constraints", description: "Optimization under constraints", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "op-3", title: "Gradient Descent Intuition", description: "How models learn step by step", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "op-4", title: "Linear Programming", description: "Solve LP problems graphically", xpReward: 55, difficulty: "Hard", questionCount: 5 },
        ],
      },
    ],
  },
  {
    id: "stage-2",
    title: "🤖 ML Fundamentals",
    description: "Learn core machine learning concepts",
    color: "from-secondary to-orange-400",
    nodes: [
      {
        id: "ml-fundamentals",
        title: "ML Basics",
        icon: "💡",
        exercises: [
          { id: "ml-1", title: "What is ML?", description: "Inputs, outputs, and learning from data", xpReward: 20, difficulty: "Easy", questionCount: 5 },
          { id: "ml-2", title: "Train vs Test", description: "Train-test split process", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "ml-3", title: "Loss Functions", description: "Purpose and types of loss functions", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "ml-4", title: "Bias vs Variance", description: "Understand the bias-variance tradeoff", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "ml-5", title: "Feature Engineering", description: "Create and select meaningful features", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "evaluation",
        title: "Evaluation Metrics",
        icon: "✅",
        exercises: [
          { id: "ev-1", title: "RMSE & MAE", description: "Regression evaluation metrics", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "ev-2", title: "Precision & Recall", description: "Classification metrics deep dive", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "ev-3", title: "ROC & AUC", description: "Advanced evaluation curves", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "ev-4", title: "Confusion Matrix Mastery", description: "Compute all metrics from a confusion matrix", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "ev-5", title: "Cross-Validation", description: "K-fold and stratified validation techniques", xpReward: 55, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "supervised-learning",
        title: "Supervised Learning",
        icon: "🎓",
        exercises: [
          { id: "sl-1", title: "Linear Regression", description: "Predict continuous values", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "sl-2", title: "K-NN Classifier", description: "Classify using nearest neighbors", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "sl-3", title: "Decision Trees", description: "Tree-based classification", xpReward: 50, difficulty: "Medium", questionCount: 5 },
          { id: "sl-4", title: "Logistic Regression", description: "Binary classification with sigmoid", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "sl-5", title: "Model Selection Challenge", description: "Choose the right algorithm for each scenario", xpReward: 60, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "unsupervised-learning",
        title: "Unsupervised Learning",
        icon: "🔍",
        exercises: [
          { id: "ul-1", title: "K-Means Clustering", description: "Group data without labels", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "ul-2", title: "PCA", description: "Reduce dimensions of data", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "ul-3", title: "Hierarchical Clustering", description: "Build cluster hierarchies", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "ul-4", title: "Clustering Evaluation", description: "Silhouette score and elbow method", xpReward: 45, difficulty: "Medium", questionCount: 5 },
        ],
      },
      {
        id: "famous-algorithms",
        title: "Famous Algorithms",
        icon: "⚡",
        exercises: [
          { id: "fa-1", title: "PageRank", description: "How Google ranks web pages", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "fa-2", title: "TF-IDF", description: "Text importance ranking", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "fa-3", title: "Naive Bayes", description: "Probabilistic classification", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "fa-4", title: "PageRank Computation", description: "Hand-trace PageRank iterations on graphs", xpReward: 55, difficulty: "Hard", questionCount: 5 },
          { id: "fa-5", title: "TF-IDF Calculation", description: "Compute TF-IDF scores from documents", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
    ],
  },
  {
    id: "stage-3",
    title: "🚀 Advanced AI",
    description: "NLP, Computer Vision & Python for AI",
    color: "from-accent to-emerald-400",
    nodes: [
      {
        id: "advanced-ml",
        title: "Advanced ML Concepts",
        icon: "🧬",
        exercises: [
          { id: "am-1", title: "Overfitting & Underfitting", description: "Understand model generalization", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "am-2", title: "Hyperparameter Tuning", description: "Optimize model parameters", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "am-3", title: "Regularization", description: "L1, L2, dropout techniques", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "am-4", title: "Ensemble Methods", description: "Random forests, bagging, and boosting", xpReward: 55, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "nlp-cv-basics",
        title: "NLP & Computer Vision",
        icon: "👁️",
        exercises: [
          { id: "nc-1", title: "Text Preprocessing", description: "Tokenization, cleaning, embeddings", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "nc-2", title: "Image Preprocessing", description: "Image data representation", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "nc-3", title: "Common AI Tasks", description: "Classification, detection, segmentation", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "nc-4", title: "Word Embeddings", description: "Word2Vec, GloVe, and similarity", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "nc-5", title: "Pretrained Models", description: "Transfer learning with pretrained encoders", xpReward: 55, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "python-for-ai",
        title: "Python for AI",
        icon: "🐍",
        exercises: [
          { id: "py-1", title: "Python Basics", description: "Syntax, loops, functions, I/O", xpReward: 25, difficulty: "Easy", questionCount: 5 },
          { id: "py-2", title: "NumPy & Pandas", description: "Efficient data processing", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "py-3", title: "Scikit-learn", description: "Train & test ML models", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "py-4", title: "Data Wrangling", description: "Clean, merge, and transform datasets", xpReward: 45, difficulty: "Medium", questionCount: 5 },
          { id: "py-5", title: "Visualization with Matplotlib", description: "Create charts and interpret them programmatically", xpReward: 40, difficulty: "Medium", questionCount: 5 },
        ],
      },
      {
        id: "ai-ethics",
        title: "AI Ethics & Applications",
        icon: "🌍",
        exercises: [
          { id: "ae-1", title: "Bias in AI", description: "Identify and mitigate AI bias", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "ae-2", title: "AI in Society", description: "Real-world AI applications", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "ae-3", title: "Champion Challenge", description: "Final comprehensive quiz", xpReward: 100, difficulty: "Hard", questionCount: 10 },
          { id: "ae-4", title: "Responsible AI", description: "Privacy, fairness, and explainability", xpReward: 40, difficulty: "Medium", questionCount: 5 },
        ],
      },
    ],
  },
];

// All exercises flattened
export const ALL_EXERCISES = ROADMAP_STAGES.flatMap(stage =>
  stage.nodes.flatMap(node => node.exercises)
);
