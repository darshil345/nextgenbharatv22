export interface Topic {
  name: string;
  subtopics: string[];
}

export interface Section {
  title: string;
  note?: string;
  topics: Topic[];
}

export interface Stage {
  title: string;
  note?: string;
  sections: Section[];
}

export const INAIO_SYLLABUS: Stage[] = [
  {
    title: "Stage 1",
    note: "The stage-wise syllabus is structured for progressive preparation toward IOAI.",
    sections: [
      {
        title: "Foundational Topics",
        topics: [
          {
            name: "Computational and Logical Thinking",
            subtopics: [
              "Pattern recognition and rule discovery",
              "Logical reasoning puzzles",
              "Basic programming constructs (variables, operations, if-then-else, for loops)",
            ],
          },
          {
            name: "Foundations of Algebra",
            subtopics: [
              "Functions",
              "Roots and properties of Polynomials, Quadratic Equations",
              "Arithmetic and Geometric Series; Summations",
              "Common inequalities (AM-GM, Jensen's inequality)",
            ],
          },
          {
            name: "Probability",
            subtopics: [
              "Basics of probability (independent and dependent events)",
              "Applications of Bayes' Theorem with practical examples",
            ],
          },
          {
            name: "Statistics",
            subtopics: [
              "Descriptive statistics: mean, median, mode, variance, percentile",
              "Independent variables",
              "Correlation and causation",
            ],
          },
          {
            name: "Linear Algebra and Matrices",
            subtopics: [
              "Basic matrix operations (addition, multiplication, inverse)",
              "Solving systems of linear equations",
            ],
          },
          {
            name: "Optimization",
            subtopics: [
              "Linear optimization with constraints",
              "Concept of maxima and minima in simple scenarios",
            ],
          },
          {
            name: "Data Representation and Visualization",
            subtopics: [
              "Base-n coding",
              "Understanding tabular data, hierarchies, entity-relationship graphs",
              "Interpreting bar graphs, histograms, pie charts, and scatter plots",
              "Drawing insights and identifying trends from visualized data",
            ],
          },
        ],
      },
      {
        title: "ML Theoretical Foundations",
        note: "Students are NOT expected to know these in depth but should be able to apply them when provided definitions.",
        topics: [
          {
            name: "Learning Fundamentals",
            subtopics: [
              "Concept of an ML model: Inputs, outputs, and learning from data",
              "Train-Test Process",
              "Purpose of loss functions",
            ],
          },
          {
            name: "Evaluation Metrics",
            subtopics: [
              "Regression: RMSE, MAE",
              "Classification: Accuracy, Precision, Recall, F1-Score, Confusion Matrix, ROC/AUC",
            ],
          },
        ],
      },
      {
        title: "Algorithms",
        note: "Questions will include all relevant background in the problem statement.",
        topics: [
          {
            name: "Supervised Learning",
            subtopics: ["Linear Regression", "Linear Classifier", "K-Nearest Neighbors (K-NN)", "Decision Trees"],
          },
          {
            name: "Unsupervised Learning",
            subtopics: ["K-Means Clustering", "Principal Component Analysis (PCA)", "Hierarchical Clustering"],
          },
          {
            name: "Probabilistic Models",
            subtopics: ["Naive Bayes"],
          },
          {
            name: "Famous Algorithms",
            subtopics: ["PageRank", "TF-IDF Ranking"],
          },
        ],
      },
    ],
  },
  {
    title: "Stage 2",
    sections: [
      {
        title: "Foundational Topics",
        topics: [
          {
            name: "Computational and Logical Thinking",
            subtopics: ["Pattern recognition and rule discovery", "Logical reasoning puzzles"],
          },
          {
            name: "Foundations of Algebra",
            subtopics: [
              "Functions",
              "Roots and properties of Polynomials, Quadratic Equations",
              "Arithmetic and Geometric Series; Summations",
              "Common inequalities (AM-GM, Jensen's inequality)",
            ],
          },
          {
            name: "Probability",
            subtopics: [
              "Basics of probability (independent and dependent events)",
              "Applications of Bayes' Theorem with practical examples",
            ],
          },
          {
            name: "Statistics",
            subtopics: ["Descriptive statistics: mean, median, mode, variance", "Correlation and causation"],
          },
          {
            name: "Linear Algebra and Matrices",
            subtopics: [
              "Basic matrix operations (addition, multiplication, inverse)",
              "Solving systems of linear equations",
              "Determinants and their applications",
            ],
          },
          {
            name: "Optimization",
            subtopics: ["Linear optimization with constraints", "Concept of maxima and minima"],
          },
          {
            name: "Data Representation and Visualization",
            subtopics: [
              "Base-n coding",
              "Tabular data, hierarchies, entity-relationship graphs",
              "Interpreting graphs and charts",
              "Drawing insights and identifying trends",
            ],
          },
        ],
      },
      {
        title: "ML Theoretical Foundations",
        note: "Students are expected to have some fluency and apply them when provided definitions.",
        topics: [
          {
            name: "Learning Fundamentals",
            subtopics: [
              "Concept of an ML model: Inputs, outputs, learning from data",
              "Train-Test Process",
              "Purpose of loss functions",
              "Overfitting and underfitting",
              "Hyperparameter Tuning",
            ],
          },
          {
            name: "Evaluation Metrics",
            subtopics: [
              "Regression: RMSE, MAE",
              "Classification: Accuracy, Precision, Recall, F1-Score, Confusion Matrix, ROC/AUC",
            ],
          },
        ],
      },
      {
        title: "ML Algorithms",
        note: "Some familiarity is helpful. Apply with minimal guidance using AI assistants.",
        topics: [
          {
            name: "Supervised Learning",
            subtopics: ["Linear Regression", "Linear Classifier", "K-Nearest Neighbors (K-NN)", "Decision Trees"],
          },
          {
            name: "Unsupervised Learning",
            subtopics: ["K-Means Clustering", "PCA", "Hierarchical Clustering"],
          },
          {
            name: "Probabilistic Models",
            subtopics: ["Naive Bayes"],
          },
          {
            name: "Famous Algorithms",
            subtopics: ["PageRank", "TF-IDF Ranking"],
          },
          {
            name: "NLP, CV, and Multimodal Basics",
            subtopics: [
              "Text/Image Preprocessing",
              "Data Representation and Embeddings",
              "Pretrained Text/Vision/Multimodal Encoders",
              "Common Tasks (classification, detection, segmentation, retrieval)",
            ],
          },
        ],
      },
      {
        title: "Python Programming",
        topics: [
          {
            name: "Python Basics",
            subtopics: ["Syntax, loops, and functions", "File handling and basic I/O operations"],
          },
          {
            name: "Data Handling",
            subtopics: ["NumPy and Pandas for efficient data processing"],
          },
          {
            name: "Visualization",
            subtopics: ["Matplotlib and Seaborn for creating and interpreting visualizations"],
          },
          {
            name: "ML Libraries",
            subtopics: [
              "Introduction to scikit-learn: classification, clustering, regression, metrics",
              "Training and testing models with specific algorithms on provided datasets",
            ],
          },
        ],
      },
      {
        title: "Gen AI Tool Use",
        topics: [
          {
            name: "AI Assistant Usage",
            subtopics: ["Effective use of AI assistants for problem-solving", "Whitelisted documentation usage"],
          },
        ],
      },
    ],
  },
];
