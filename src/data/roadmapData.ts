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
  nodes: RoadmapNode[];
}

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    id: "stage-1",
    title: "AI Foundations",
    description: "Start your AI journey with the basics",
    nodes: [
      {
        id: "logical-thinking",
        title: "Logical Thinking",
        icon: "🧩",
        exercises: [
          { id: "lt-1", title: "Pattern Recognition", description: "Identify patterns in data sequences", xpReward: 20, difficulty: "Easy", questionCount: 5 },
          { id: "lt-2", title: "Logic Puzzles", description: "Solve reasoning-based challenges", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "lt-3", title: "Rule Discovery", description: "Find hidden rules in complex patterns", xpReward: 40, difficulty: "Medium", questionCount: 5 },
        ],
      },
      {
        id: "probability-basics",
        title: "Probability Basics",
        icon: "🎲",
        exercises: [
          { id: "pb-1", title: "Coin & Dice", description: "Basic probability with coins and dice", xpReward: 20, difficulty: "Easy", questionCount: 5 },
          { id: "pb-2", title: "Bayes' Theorem", description: "Apply Bayes' theorem to real scenarios", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "pb-3", title: "Conditional Probability", description: "Master dependent events", xpReward: 50, difficulty: "Medium", questionCount: 5 },
        ],
      },
      {
        id: "statistics-101",
        title: "Statistics 101",
        icon: "📊",
        exercises: [
          { id: "st-1", title: "Mean, Median, Mode", description: "Descriptive statistics fundamentals", xpReward: 20, difficulty: "Easy", questionCount: 5 },
          { id: "st-2", title: "Variance & Deviation", description: "Measure data spread", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "st-3", title: "Correlation", description: "Understand correlation vs causation", xpReward: 40, difficulty: "Medium", questionCount: 5 },
        ],
      },
      {
        id: "data-viz",
        title: "Data Visualization",
        icon: "📈",
        exercises: [
          { id: "dv-1", title: "Reading Charts", description: "Interpret bar graphs and histograms", xpReward: 20, difficulty: "Easy", questionCount: 5 },
          { id: "dv-2", title: "Scatter Plots", description: "Analyze scatter plot patterns", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "dv-3", title: "Data Insights", description: "Draw conclusions from visualizations", xpReward: 40, difficulty: "Medium", questionCount: 5 },
        ],
      },
    ],
  },
  {
    id: "stage-2",
    title: "Machine Learning Basics",
    description: "Learn the core concepts of ML",
    nodes: [
      {
        id: "ml-fundamentals",
        title: "ML Fundamentals",
        icon: "🤖",
        exercises: [
          { id: "ml-1", title: "What is ML?", description: "Understand inputs, outputs, and learning", xpReward: 20, difficulty: "Easy", questionCount: 5 },
          { id: "ml-2", title: "Train vs Test", description: "Learn the train-test split process", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "ml-3", title: "Loss Functions", description: "Purpose and types of loss functions", xpReward: 40, difficulty: "Medium", questionCount: 5 },
        ],
      },
      {
        id: "supervised-learning",
        title: "Supervised Learning",
        icon: "🎯",
        exercises: [
          { id: "sl-1", title: "Linear Regression", description: "Predict continuous values", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "sl-2", title: "K-NN Classifier", description: "Classify using nearest neighbors", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "sl-3", title: "Decision Trees", description: "Tree-based classification", xpReward: 50, difficulty: "Medium", questionCount: 5 },
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
        ],
      },
      {
        id: "evaluation",
        title: "Model Evaluation",
        icon: "✅",
        exercises: [
          { id: "ev-1", title: "Accuracy & Precision", description: "Basic classification metrics", xpReward: 30, difficulty: "Easy", questionCount: 5 },
          { id: "ev-2", title: "F1-Score & Recall", description: "Handle imbalanced data", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "ev-3", title: "ROC & AUC", description: "Advanced evaluation curves", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
    ],
  },
  {
    id: "stage-3",
    title: "Advanced AI",
    description: "Master advanced concepts and algorithms",
    nodes: [
      {
        id: "famous-algorithms",
        title: "Famous Algorithms",
        icon: "⚡",
        exercises: [
          { id: "fa-1", title: "PageRank", description: "How Google ranks web pages", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "fa-2", title: "TF-IDF", description: "Text importance ranking", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "fa-3", title: "Naive Bayes", description: "Probabilistic classification", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "linear-algebra",
        title: "Linear Algebra for AI",
        icon: "🧮",
        exercises: [
          { id: "la-1", title: "Matrix Operations", description: "Addition, multiplication, inverse", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "la-2", title: "Linear Systems", description: "Solve systems of equations", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "la-3", title: "Determinants", description: "Applications of determinants", xpReward: 50, difficulty: "Hard", questionCount: 5 },
        ],
      },
      {
        id: "optimization",
        title: "Optimization",
        icon: "📐",
        exercises: [
          { id: "op-1", title: "Gradient Descent", description: "Minimize loss step by step", xpReward: 50, difficulty: "Hard", questionCount: 5 },
          { id: "op-2", title: "Maxima & Minima", description: "Find optimal values", xpReward: 40, difficulty: "Medium", questionCount: 5 },
          { id: "op-3", title: "Constraints", description: "Optimization under constraints", xpReward: 50, difficulty: "Hard", questionCount: 5 },
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
        ],
      },
    ],
  },
];

// All exercises flattened
export const ALL_EXERCISES = ROADMAP_STAGES.flatMap(stage =>
  stage.nodes.flatMap(node => node.exercises)
);
