export const USER_PROFILE = {
  name: "Arjun Sharma",
  grade: "Grade 10",
  rank: "Neural Ninja",
  rankLevel: 3,
  xp: 4820,
  xpToNext: 6000,
  streak: 12,
  globalRank: 247,
  countryRank: 38,
  coins: 1250,
  badges: 14,
  questionsAttempted: 312,
  accuracy: 78,
};

export const RANKS = [
  { name: "AI Explorer", minXp: 0, icon: "🔍", color: "hsl(220, 14%, 46%)" },
  { name: "Data Warrior", minXp: 1000, icon: "⚔️", color: "hsl(152, 69%, 40%)" },
  { name: "Neural Ninja", minXp: 3000, icon: "🥷", color: "hsl(217, 91%, 50%)" },
  { name: "Algorithm Master", minXp: 7000, icon: "🧠", color: "hsl(28, 100%, 55%)" },
  { name: "AI Olympiad Champion", minXp: 15000, icon: "🏆", color: "hsl(45, 100%, 50%)" },
  { name: "Global Grandmaster", minXp: 30000, icon: "👑", color: "hsl(0, 84%, 60%)" },
];

export const LEADERBOARD_DATA = [
  { rank: 1, name: "Priya Patel", school: "DPS Bangalore", xp: 12400, country: "🇮🇳", rankTitle: "Algorithm Master", streak: 45 },
  { rank: 2, name: "Wei Chen", school: "Beijing No.4 HS", xp: 11890, country: "🇨🇳", rankTitle: "Algorithm Master", streak: 38 },
  { rank: 3, name: "Sarah Johnson", school: "Thomas Jefferson HS", xp: 11200, country: "🇺🇸", rankTitle: "Neural Ninja", streak: 32 },
  { rank: 4, name: "Hiroshi Tanaka", school: "Nada High School", xp: 10800, country: "🇯🇵", rankTitle: "Neural Ninja", streak: 28 },
  { rank: 5, name: "Ananya Reddy", school: "Oakridge Hyderabad", xp: 10350, country: "🇮🇳", rankTitle: "Neural Ninja", streak: 41 },
  { rank: 6, name: "Lukas Müller", school: "Gymnasium München", xp: 9900, country: "🇩🇪", rankTitle: "Neural Ninja", streak: 22 },
  { rank: 7, name: "Sofia Kim", school: "Seoul Science HS", xp: 9450, country: "🇰🇷", rankTitle: "Data Warrior", streak: 19 },
  { rank: 8, name: "Raj Malhotra", school: "DPS RK Puram", xp: 9100, country: "🇮🇳", rankTitle: "Data Warrior", streak: 33 },
  { rank: 9, name: "Emma Williams", school: "Eton College", xp: 8700, country: "🇬🇧", rankTitle: "Data Warrior", streak: 15 },
  { rank: 10, name: "Yuki Sato", school: "Kaisei Academy", xp: 8300, country: "🇯🇵", rankTitle: "Data Warrior", streak: 27 },
];

export const DAILY_CHALLENGES = [
  { id: 1, title: "Bayes' Theorem Blitz", type: "Quick Quiz", xp: 50, time: "5 min", difficulty: "Medium", completed: true },
  { id: 2, title: "Matrix Multiplication", type: "Problem Solve", xp: 80, time: "10 min", difficulty: "Hard", completed: false },
  { id: 3, title: "K-NN Classification", type: "Coding Challenge", xp: 120, time: "15 min", difficulty: "Hard", completed: false },
  { id: 4, title: "Data Viz Interpretation", type: "Quick Quiz", xp: 40, time: "5 min", difficulty: "Easy", completed: false },
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "In K-Nearest Neighbors, what happens when K is set to 1?",
    options: [
      "The model becomes very smooth",
      "The model memorizes the training data (overfitting)",
      "The model ignores all data points",
      "The model always predicts the majority class",
    ],
    correct: 1,
    explanation: "When K=1, the model predicts the class of the nearest single neighbor, which makes it highly sensitive to noise and overfitting.",
    topic: "Supervised Learning",
    difficulty: "Medium",
    xp: 30,
  },
  {
    id: 2,
    question: "What does the PageRank algorithm primarily measure?",
    options: [
      "The speed of a webpage",
      "The importance of a webpage based on link structure",
      "The number of words on a page",
      "The age of a webpage",
    ],
    correct: 1,
    explanation: "PageRank assigns importance scores based on the number and quality of links pointing to a page.",
    topic: "Famous Algorithms",
    difficulty: "Easy",
    xp: 20,
  },
  {
    id: 3,
    question: "Which metric is best for evaluating a model with imbalanced classes?",
    options: ["Accuracy", "F1-Score", "Mean Squared Error", "R² Score"],
    correct: 1,
    explanation: "F1-Score balances precision and recall, making it ideal for imbalanced datasets where accuracy can be misleading.",
    topic: "Evaluation Metrics",
    difficulty: "Medium",
    xp: 30,
  },
  {
    id: 4,
    question: "In PCA, what are the principal components?",
    options: [
      "The original features sorted by importance",
      "Directions of maximum variance in the data",
      "Random projections of the data",
      "The mean values of each feature",
    ],
    correct: 1,
    explanation: "Principal components are orthogonal directions that capture the maximum variance in the dataset.",
    topic: "Unsupervised Learning",
    difficulty: "Hard",
    xp: 50,
  },
  {
    id: 5,
    question: "What is the purpose of a loss function in machine learning?",
    options: [
      "To increase model complexity",
      "To measure how wrong the model's predictions are",
      "To visualize data",
      "To split data into train and test sets",
    ],
    correct: 1,
    explanation: "A loss function quantifies the difference between predicted and actual values, guiding the model to improve.",
    topic: "Learning Fundamentals",
    difficulty: "Easy",
    xp: 20,
  },
];

export const WEEKLY_STATS = [
  { day: "Mon", xp: 120 },
  { day: "Tue", xp: 200 },
  { day: "Wed", xp: 80 },
  { day: "Thu", xp: 310 },
  { day: "Fri", xp: 150 },
  { day: "Sat", xp: 420 },
  { day: "Sun", xp: 0 },
];
