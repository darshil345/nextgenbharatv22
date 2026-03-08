export interface StudyNote {
  id: string;
  title: string;
  icon: string;
  content: string; // markdown-like content
}

export interface Worksheet {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  questionCount: number;
  estimatedTime: string;
  topics: string[];
}

export interface PracticeCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  notes: StudyNote[];
  worksheets: Worksheet[];
}

export const PRACTICE_CATEGORIES: PracticeCategory[] = [
  {
    id: "logical-thinking",
    title: "Logical Thinking",
    icon: "🧩",
    description: "Pattern recognition, reasoning, and rule discovery",
    notes: [
      {
        id: "n-lt-1",
        title: "Pattern Recognition Guide",
        icon: "📖",
        content: `**Pattern Recognition** is the ability to identify regularities in data.\n\n**Key Concepts:**\n• **Sequence patterns** – Find the rule: 2, 4, 8, 16, ? (Answer: 32, each doubles)\n• **Visual patterns** – Rotations, reflections, and transformations\n• **Data patterns** – Trends, clusters, and outliers in datasets\n\n**Tips for IOAI:**\n1. Look for mathematical relationships first (multiply, add, power)\n2. Check if the pattern is cyclic\n3. Consider multiple valid interpretations`,
      },
      {
        id: "n-lt-2",
        title: "Logic Puzzles Cheatsheet",
        icon: "🗒️",
        content: `**Common Logic Puzzle Types:**\n\n• **If-Then Statements** – "If it rains, the ground is wet"\n• **Truth Tables** – AND, OR, NOT, XOR operations\n• **Deductive Reasoning** – Eliminate impossibilities\n• **Syllogisms** – "All A are B. All B are C. Therefore all A are C."\n\n**Strategy:**\n1. List all given facts\n2. Draw a grid or Venn diagram\n3. Eliminate contradictions\n4. Check your answer against ALL conditions`,
      },
    ],
    worksheets: [
      { id: "w-lt-1", title: "Pattern Sequences", description: "Complete 15 number and visual sequences", difficulty: "Beginner", questionCount: 15, estimatedTime: "20 min", topics: ["Sequences", "Visual Patterns"] },
      { id: "w-lt-2", title: "Logic Grid Puzzles", description: "Solve 10 deduction-based grid puzzles", difficulty: "Intermediate", questionCount: 10, estimatedTime: "30 min", topics: ["Deduction", "Grid Puzzles"] },
      { id: "w-lt-3", title: "Advanced Rule Discovery", description: "Find hidden rules in complex datasets", difficulty: "Advanced", questionCount: 8, estimatedTime: "40 min", topics: ["Rule Discovery", "Complex Patterns"] },
    ],
  },
  {
    id: "algebra",
    title: "Algebra & Series",
    icon: "📐",
    description: "Functions, polynomials, series, and inequalities",
    notes: [
      {
        id: "n-al-1",
        title: "Functions & Polynomials",
        icon: "📖",
        content: `**Functions** map inputs to outputs: f(x) = 2x + 3\n\n**Polynomials:**\n• Degree determines the shape of the graph\n• Quadratic: ax² + bx + c, roots via formula: x = (-b ± √(b²-4ac)) / 2a\n• Factor theorem: If f(a) = 0, then (x-a) is a factor\n\n**For IOAI:**\n- Expect questions combining polynomials with ML concepts\n- Polynomial regression extends these ideas to curve fitting`,
      },
      {
        id: "n-al-2",
        title: "Series & Inequalities",
        icon: "🗒️",
        content: `**Arithmetic Series:** a, a+d, a+2d, ... → Sum = n/2 × (2a + (n-1)d)\n**Geometric Series:** a, ar, ar², ... → Sum = a(1-rⁿ)/(1-r)\n\n**Key Inequalities:**\n• **AM-GM:** (a+b)/2 ≥ √(ab) for a,b ≥ 0\n• **Jensen's Inequality:** For convex f: f(E[X]) ≤ E[f(X)]\n\n**Why it matters for AI:**\nLoss functions often use these inequalities for proofs and bounds.`,
      },
    ],
    worksheets: [
      { id: "w-al-1", title: "Polynomial Practice", description: "Factor, solve, and graph polynomials", difficulty: "Beginner", questionCount: 12, estimatedTime: "25 min", topics: ["Polynomials", "Roots"] },
      { id: "w-al-2", title: "Series Summations", description: "Calculate sums of arithmetic and geometric series", difficulty: "Intermediate", questionCount: 10, estimatedTime: "20 min", topics: ["Series", "Summation"] },
      { id: "w-al-3", title: "Inequality Proofs", description: "Apply AM-GM and Jensen's inequality", difficulty: "Advanced", questionCount: 8, estimatedTime: "35 min", topics: ["AM-GM", "Jensen"] },
    ],
  },
  {
    id: "probability-stats",
    title: "Probability & Statistics",
    icon: "🎲",
    description: "Bayes' theorem, distributions, and data analysis",
    notes: [
      {
        id: "n-ps-1",
        title: "Probability Fundamentals",
        icon: "📖",
        content: `**Basic Rules:**\n• P(A or B) = P(A) + P(B) - P(A and B)\n• P(A and B) = P(A) × P(B) for independent events\n• P(A|B) = P(A and B) / P(B)\n\n**Bayes' Theorem:**\nP(A|B) = P(B|A) × P(A) / P(B)\n\n**Real-world example:**\nA medical test is 99% accurate. The disease affects 1 in 1000 people.\nIf you test positive, what's the actual probability you have the disease?\n→ Using Bayes: ≈ 9% (not 99%!)`,
      },
      {
        id: "n-ps-2",
        title: "Statistics Quick Reference",
        icon: "🗒️",
        content: `**Descriptive Statistics:**\n• **Mean** – Average value\n• **Median** – Middle value (robust to outliers)\n• **Mode** – Most frequent value\n• **Variance** – σ² = E[(X - μ)²]\n• **Standard Deviation** – σ = √Variance\n\n**Correlation:**\n• Pearson r ranges from -1 to +1\n• Correlation ≠ Causation!\n• Confounding variables can create spurious correlations`,
      },
    ],
    worksheets: [
      { id: "w-ps-1", title: "Probability Basics", description: "Coins, dice, and card problems", difficulty: "Beginner", questionCount: 15, estimatedTime: "20 min", topics: ["Basic Probability"] },
      { id: "w-ps-2", title: "Bayes' Theorem Applications", description: "Real-world Bayesian problems", difficulty: "Intermediate", questionCount: 10, estimatedTime: "30 min", topics: ["Bayes", "Conditional"] },
      { id: "w-ps-3", title: "Statistical Analysis", description: "Compute and interpret statistics from datasets", difficulty: "Advanced", questionCount: 8, estimatedTime: "35 min", topics: ["Descriptive Stats", "Correlation"] },
    ],
  },
  {
    id: "ml-basics",
    title: "Machine Learning",
    icon: "🤖",
    description: "Supervised, unsupervised learning & evaluation",
    notes: [
      {
        id: "n-ml-1",
        title: "ML Fundamentals Guide",
        icon: "📖",
        content: `**What is Machine Learning?**\nTeaching computers to learn patterns from data without explicit programming.\n\n**Types:**\n• **Supervised** – Labeled data (classification, regression)\n• **Unsupervised** – No labels (clustering, dimensionality reduction)\n\n**The ML Pipeline:**\n1. Collect & clean data\n2. Split into train/test sets (typically 80/20)\n3. Choose a model\n4. Train on training data\n5. Evaluate on test data\n6. Tune hyperparameters`,
      },
      {
        id: "n-ml-2",
        title: "Evaluation Metrics Cheatsheet",
        icon: "🗒️",
        content: `**Regression Metrics:**\n• **RMSE** = √(Σ(yᵢ - ŷᵢ)²/n) — penalizes large errors\n• **MAE** = Σ|yᵢ - ŷᵢ|/n — robust to outliers\n\n**Classification Metrics:**\n• **Accuracy** = (TP+TN)/(TP+TN+FP+FN)\n• **Precision** = TP/(TP+FP) — "of predicted positives, how many are correct?"\n• **Recall** = TP/(TP+FN) — "of actual positives, how many did we find?"\n• **F1** = 2×Precision×Recall/(Precision+Recall)\n\n**ROC Curve:** Plots TPR vs FPR at various thresholds. AUC = area under this curve (1.0 = perfect).`,
      },
    ],
    worksheets: [
      { id: "w-ml-1", title: "ML Concepts Quiz", description: "Test your understanding of ML fundamentals", difficulty: "Beginner", questionCount: 15, estimatedTime: "20 min", topics: ["ML Basics", "Train/Test"] },
      { id: "w-ml-2", title: "Algorithm Selection", description: "Choose the right algorithm for each scenario", difficulty: "Intermediate", questionCount: 12, estimatedTime: "25 min", topics: ["Supervised", "Unsupervised"] },
      { id: "w-ml-3", title: "Metrics Deep Dive", description: "Calculate metrics from confusion matrices", difficulty: "Advanced", questionCount: 10, estimatedTime: "30 min", topics: ["Evaluation", "ROC/AUC"] },
    ],
  },
  {
    id: "algorithms",
    title: "Famous Algorithms",
    icon: "⚡",
    description: "PageRank, TF-IDF, Naive Bayes, and more",
    notes: [
      {
        id: "n-fa-1",
        title: "PageRank Explained",
        icon: "📖",
        content: `**PageRank** (Google's original algorithm):\n\nIdea: A page is important if important pages link to it.\n\n**Formula:** PR(A) = (1-d) + d × Σ(PR(Tᵢ)/C(Tᵢ))\n• d = damping factor (usually 0.85)\n• Tᵢ = pages linking to A\n• C(Tᵢ) = number of outgoing links from Tᵢ\n\n**Intuition:** Imagine a random web surfer clicking links. PageRank = probability they end up on your page.`,
      },
      {
        id: "n-fa-2",
        title: "TF-IDF & Naive Bayes",
        icon: "🗒️",
        content: `**TF-IDF** (Term Frequency - Inverse Document Frequency):\n• TF = (times word appears in doc) / (total words in doc)\n• IDF = log(total docs / docs containing word)\n• TF-IDF = TF × IDF\n• High score = word is important in THIS document but rare overall\n\n**Naive Bayes Classifier:**\nP(class|features) ∝ P(class) × Π P(featureᵢ|class)\n\n"Naive" because it assumes features are independent.\nWorks surprisingly well for spam detection, sentiment analysis!`,
      },
    ],
    worksheets: [
      { id: "w-fa-1", title: "PageRank Calculations", description: "Compute PageRank for small web graphs", difficulty: "Intermediate", questionCount: 8, estimatedTime: "25 min", topics: ["PageRank", "Graph Theory"] },
      { id: "w-fa-2", title: "TF-IDF Practice", description: "Calculate TF-IDF scores for text documents", difficulty: "Intermediate", questionCount: 10, estimatedTime: "20 min", topics: ["TF-IDF", "NLP"] },
      { id: "w-fa-3", title: "Naive Bayes Problems", description: "Apply Naive Bayes to classification tasks", difficulty: "Advanced", questionCount: 8, estimatedTime: "30 min", topics: ["Naive Bayes", "Probability"] },
    ],
  },
  {
    id: "linear-algebra",
    title: "Linear Algebra",
    icon: "🧮",
    description: "Matrices, systems of equations, and transformations",
    notes: [
      {
        id: "n-la-1",
        title: "Matrix Operations Guide",
        icon: "📖",
        content: `**Matrix Basics:**\n• **Addition:** Same dimensions required, add element-wise\n• **Multiplication:** A(m×n) × B(n×p) = C(m×p)\n• **Transpose:** Flip rows and columns: (Aᵀ)ᵢⱼ = Aⱼᵢ\n• **Inverse:** A × A⁻¹ = I (identity matrix)\n\n**Determinant:**\n• 2×2: det = ad - bc\n• If det = 0, matrix is singular (no inverse)\n\n**Why it matters for AI:**\nNeural networks are essentially chains of matrix multiplications! PCA uses eigenvectors and eigenvalues.`,
      },
    ],
    worksheets: [
      { id: "w-la-1", title: "Matrix Arithmetic", description: "Addition, multiplication, and transpose", difficulty: "Beginner", questionCount: 12, estimatedTime: "20 min", topics: ["Matrix Operations"] },
      { id: "w-la-2", title: "Systems of Equations", description: "Solve using matrices and Gaussian elimination", difficulty: "Intermediate", questionCount: 10, estimatedTime: "30 min", topics: ["Linear Systems"] },
      { id: "w-la-3", title: "Determinants & Inverses", description: "Calculate determinants and find inverse matrices", difficulty: "Advanced", questionCount: 8, estimatedTime: "35 min", topics: ["Determinants", "Inverse"] },
    ],
  },
];
