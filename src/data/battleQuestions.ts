export interface BattleQuestion {
  question: string;
  options: string[];
  correct: number;
  difficulty: "easy" | "medium" | "hard";
  topic: string;
}

export const BATTLE_QUESTIONS: BattleQuestion[] = [
  // EASY
  { question: "What is the primary goal of supervised learning?", options: ["Find hidden patterns", "Learn from labeled data to make predictions", "Reduce data dimensions", "Generate new data"], correct: 1, difficulty: "easy", topic: "ML Basics" },
  { question: "What does 'AI' stand for?", options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Integration", "Applied Inference"], correct: 1, difficulty: "easy", topic: "AI Basics" },
  { question: "Which is a measure of central tendency?", options: ["Variance", "Standard deviation", "Mean", "Range"], correct: 2, difficulty: "easy", topic: "Statistics" },
  { question: "What is the probability of getting heads on a fair coin?", options: ["1/4", "1/2", "1/3", "1"], correct: 1, difficulty: "easy", topic: "Probability" },
  { question: "What comes next: 2, 4, 8, 16, ?", options: ["24", "32", "20", "28"], correct: 1, difficulty: "easy", topic: "Logic" },
  { question: "In a dataset, mode refers to:", options: ["Average value", "Middle value", "Most frequent value", "Smallest value"], correct: 2, difficulty: "easy", topic: "Statistics" },
  { question: "Which chart is best for showing trends over time?", options: ["Pie chart", "Line chart", "Bar chart", "Scatter plot"], correct: 1, difficulty: "easy", topic: "Data Viz" },
  { question: "Machine Learning is a subset of:", options: ["Statistics", "Artificial Intelligence", "Database Management", "Networking"], correct: 1, difficulty: "easy", topic: "ML Basics" },
  { question: "Features in ML refer to:", options: ["Output labels", "Input variables", "Model weights", "Loss values"], correct: 1, difficulty: "easy", topic: "ML Basics" },
  { question: "P(A or B) for mutually exclusive events equals:", options: ["P(A) × P(B)", "P(A) + P(B)", "P(A) - P(B)", "1"], correct: 1, difficulty: "easy", topic: "Probability" },
  { question: "A bar graph is best for:", options: ["Showing trends", "Comparing categories", "Showing proportions", "Displaying correlations"], correct: 1, difficulty: "easy", topic: "Data Viz" },
  { question: "The median of [1, 3, 5, 7, 9] is:", options: ["3", "5", "7", "4"], correct: 1, difficulty: "easy", topic: "Statistics" },
  { question: "NOT (TRUE) equals:", options: ["TRUE", "FALSE", "NULL", "Undefined"], correct: 1, difficulty: "easy", topic: "Logic" },
  { question: "Range of a dataset [10, 20, 30, 40, 50] is:", options: ["30", "40", "50", "20"], correct: 1, difficulty: "easy", topic: "Statistics" },
  { question: "Unsupervised learning does NOT require:", options: ["Data", "Computers", "Labels", "Algorithms"], correct: 2, difficulty: "easy", topic: "ML Basics" },

  // MEDIUM
  { question: "Bayes' Theorem: P(A|B) = ?", options: ["P(B|A)·P(A)/P(B)", "P(A)·P(B)", "P(B)/P(A)", "P(A)+P(B)"], correct: 0, difficulty: "medium", topic: "Probability" },
  { question: "Overfitting occurs when:", options: ["Model is too simple", "Model memorizes training data", "Training data is too large", "Features are removed"], correct: 1, difficulty: "medium", topic: "ML Concepts" },
  { question: "K-NN with K=1 tends to:", options: ["Underfit", "Overfit", "Be optimal", "Ignore data"], correct: 1, difficulty: "medium", topic: "Supervised Learning" },
  { question: "Why split data into train and test sets?", options: ["Save storage", "Evaluate generalization", "Faster training", "Not necessary"], correct: 1, difficulty: "medium", topic: "ML Concepts" },
  { question: "Standard deviation is the ___ of variance.", options: ["Square", "Square root", "Log", "Inverse"], correct: 1, difficulty: "medium", topic: "Statistics" },
  { question: "Correlation of -0.9 means:", options: ["Weak positive", "Strong negative", "No relationship", "Strong positive"], correct: 1, difficulty: "medium", topic: "Statistics" },
  { question: "In linear regression, what does 'm' represent in y=mx+b?", options: ["Y-intercept", "Slope", "Error", "Feature"], correct: 1, difficulty: "medium", topic: "Supervised Learning" },
  { question: "Cross-entropy loss is used for:", options: ["Regression", "Classification", "Clustering", "Dimensionality reduction"], correct: 1, difficulty: "medium", topic: "ML Concepts" },
  { question: "Decision trees split data based on:", options: ["Random selection", "Feature that best separates classes", "Alphabetical order", "Data entry order"], correct: 1, difficulty: "medium", topic: "Supervised Learning" },
  { question: "Regularization helps to:", options: ["Increase model complexity", "Prevent overfitting", "Speed up training", "Add more features"], correct: 1, difficulty: "medium", topic: "ML Concepts" },
  { question: "K-Means clustering assigns data to:", options: ["Random labels", "Nearest centroid", "Decision boundaries", "Neural networks"], correct: 1, difficulty: "medium", topic: "Unsupervised Learning" },
  { question: "PCA is primarily used for:", options: ["Classification", "Dimensionality reduction", "Regression", "Data augmentation"], correct: 1, difficulty: "medium", topic: "Unsupervised Learning" },
  { question: "Precision measures:", options: ["All correct predictions", "True positives among predicted positives", "True positives among actual positives", "Overall accuracy"], correct: 1, difficulty: "medium", topic: "ML Evaluation" },
  { question: "The confusion matrix shows:", options: ["Feature importance", "TP, FP, TN, FN counts", "Learning rate", "Data distribution"], correct: 1, difficulty: "medium", topic: "ML Evaluation" },
  { question: "Gradient descent minimizes loss by:", options: ["Adding data", "Adjusting weights iteratively", "Removing features", "Increasing learning rate infinitely"], correct: 1, difficulty: "medium", topic: "ML Concepts" },

  // HARD
  { question: "In a Random Forest, what reduces variance?", options: ["Using one tree", "Bagging (bootstrap aggregation)", "Increasing depth infinitely", "Removing features"], correct: 1, difficulty: "hard", topic: "Ensemble Methods" },
  { question: "The vanishing gradient problem affects:", options: ["Linear regression", "Deep neural networks with sigmoid", "K-NN", "Decision trees"], correct: 1, difficulty: "hard", topic: "Deep Learning" },
  { question: "Dropout in neural networks:", options: ["Removes training data", "Randomly deactivates neurons during training", "Increases all weights", "Removes output layers"], correct: 1, difficulty: "hard", topic: "Deep Learning" },
  { question: "In GANs, the generator's goal is to:", options: ["Classify images", "Fool the discriminator", "Reduce dimensions", "Cluster data"], correct: 1, difficulty: "hard", topic: "Generative AI" },
  { question: "Attention mechanism in transformers computes:", options: ["Feature means", "Weighted relevance of all tokens", "Random token sampling", "Sequential processing only"], correct: 1, difficulty: "hard", topic: "NLP/Transformers" },
  { question: "L1 regularization tends to produce:", options: ["Dense weights", "Sparse weights (feature selection)", "Equal weights", "Negative weights only"], correct: 1, difficulty: "hard", topic: "Advanced ML" },
  { question: "The bias-variance tradeoff means:", options: ["More bias = more variance", "Reducing one often increases the other", "Both can be zero", "They are unrelated"], correct: 1, difficulty: "hard", topic: "ML Theory" },
  { question: "In reinforcement learning, the agent maximizes:", options: ["Loss function", "Cumulative reward", "Training speed", "Data size"], correct: 1, difficulty: "hard", topic: "Reinforcement Learning" },
  { question: "BERT is pre-trained using:", options: ["Supervised classification only", "Masked language modeling + NSP", "Reinforcement learning", "K-Means clustering"], correct: 1, difficulty: "hard", topic: "NLP/Transformers" },
  { question: "Batch normalization helps by:", options: ["Increasing batch size", "Normalizing layer inputs for stable training", "Removing outliers", "Reducing features"], correct: 1, difficulty: "hard", topic: "Deep Learning" },
  { question: "The kernel trick in SVM:", options: ["Reduces data size", "Maps data to higher dimensions implicitly", "Removes support vectors", "Increases training speed"], correct: 1, difficulty: "hard", topic: "Advanced ML" },
  { question: "In a CNN, what does a convolutional layer detect?", options: ["Global patterns", "Local spatial features/patterns", "Temporal sequences", "Random noise"], correct: 1, difficulty: "hard", topic: "Deep Learning" },
  { question: "Transfer learning is beneficial when:", options: ["You have unlimited data", "Target domain has limited labeled data", "Models are very simple", "Features are unrelated"], correct: 1, difficulty: "hard", topic: "Advanced ML" },
  { question: "Softmax function outputs:", options: ["Binary values", "Probability distribution over classes", "Raw scores", "Negative values"], correct: 1, difficulty: "hard", topic: "Deep Learning" },
  { question: "Ethical AI requires consideration of:", options: ["Only accuracy", "Fairness, transparency, and accountability", "Only speed", "Only cost"], correct: 1, difficulty: "hard", topic: "AI Ethics" },
];

export function getShuffledQuestions(difficulty: "easy" | "medium" | "hard", count: number = 10): BattleQuestion[] {
  const pool = BATTLE_QUESTIONS.filter(q => q.difficulty === difficulty);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
