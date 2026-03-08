export interface StudyNote {
  id: string;
  title: string;
  icon: string;
  content: string;
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
        title: "Pattern Recognition — Complete Guide",
        icon: "📖",
        content: `**Pattern Recognition** is the ability to identify regularities, trends, and structures in data — a foundational skill for AI.\n\n**Why It Matters for IOAI:**\nPattern recognition is tested directly in Stage 1. You'll need to identify numeric, visual, and data-based patterns under time pressure.\n\n---\n\n**1. Number Sequence Patterns**\n\n• **Arithmetic:** Constant difference → 3, 7, 11, 15 (d=4)\n• **Geometric:** Constant ratio → 2, 6, 18, 54 (r=3)\n• **Quadratic:** Differences increase linearly → 1, 4, 9, 16, 25 (n²)\n• **Fibonacci-type:** Each term = sum of previous two → 1, 1, 2, 3, 5, 8, 13\n• **Alternating:** Pattern switches → 1, -2, 3, -4, 5\n• **Nested:** Multiple rules → even positions double, odd positions +1\n\n**Strategy for sequences:**\n1. Calculate first differences (d₁ = a₂ - a₁)\n2. If not constant, calculate second differences\n3. If second differences are constant → quadratic (an² + bn + c)\n4. Check ratios: if aₙ₊₁/aₙ is constant → geometric\n5. Look for famous sequences (primes, squares, cubes, Fibonacci)\n\n---\n\n**2. Visual & Spatial Patterns**\n\n• **Rotation:** Shapes rotate 90°, 180°, or 270°\n• **Reflection:** Mirror images across horizontal/vertical axis\n• **Scaling:** Shapes grow or shrink proportionally\n• **Addition/Removal:** Elements are added or removed each step\n• **Color/Shading:** Patterns in fill, outline, or color changes\n\n**Tip:** Draw grids and track each attribute (shape, size, position, color) separately.\n\n---\n\n**3. Data Patterns**\n\n• **Trends:** Upward, downward, cyclical, or stationary\n• **Clusters:** Groups of similar data points\n• **Outliers:** Data points far from the pattern\n• **Periodicity:** Repeating patterns at regular intervals\n\n**For IOAI Prep:**\n- Practice with at least 20 different sequence types\n- Time yourself: aim for <30 seconds per pattern\n- When stuck, try writing out differences and ratios`,
      },
      {
        id: "n-lt-2",
        title: "Logic & Reasoning — Complete Guide",
        icon: "🗒️",
        content: `**Logical Reasoning** is the process of using structured thinking to reach valid conclusions.\n\n---\n\n**1. Propositional Logic**\n\n• **AND (∧):** Both must be true → T∧T=T, else F\n• **OR (∨):** At least one true → F∨F=F, else T\n• **NOT (¬):** Negation → ¬T=F, ¬F=T\n• **XOR (⊕):** Exactly one true\n• **IMPLIES (→):** P→Q is false ONLY when P=T and Q=F\n• **IFF (↔):** Both same value\n\n**Key Equivalences:**\n• P→Q ≡ ¬P∨Q\n• ¬(P∧Q) ≡ ¬P∨¬Q (De Morgan's)\n• ¬(P∨Q) ≡ ¬P∧¬Q (De Morgan's)\n• Contrapositive: P→Q ≡ ¬Q→¬P (ALWAYS valid)\n• Converse: P→Q ≢ Q→P (NOT always valid)\n\n---\n\n**2. Deductive Reasoning**\n\n• **Modus Ponens:** If P→Q and P is true, then Q is true\n• **Modus Tollens:** If P→Q and Q is false, then P is false\n• **Syllogism:** If P→Q and Q→R, then P→R\n• **Disjunctive Syllogism:** If P∨Q and ¬P, then Q\n\n---\n\n**3. Common Logical Fallacies to Avoid:**\n\n• **Affirming the consequent:** P→Q, Q is true ≠ P is true\n  Example: "If it rains, ground is wet. Ground is wet. Therefore it rained." WRONG!\n• **Denying the antecedent:** P→Q, P is false ≠ Q is false\n• **Correlation = Causation:** Two things happening together ≠ one causes the other\n\n---\n\n**4. Problem-Solving Strategies:**\n\n1. **Truth Tables:** Enumerate all possibilities for 2-3 variables\n2. **Venn Diagrams:** Visualize set relationships\n3. **Process of Elimination:** Rule out impossibilities\n4. **Grid/Matrix Method:** For constraint puzzles\n5. **Case Analysis:** Split into exhaustive cases\n\n---\n\n**5. Programming Logic (for IOAI):**\n\n• **If-Then-Else:** Conditional execution\n• **For Loops:** Repeat n times\n• **While Loops:** Repeat until condition false\n• **Nested Logic:** If inside if, loops inside loops\n• **Boolean expressions:** Combining conditions with AND/OR/NOT\n\n**Practice Tip:** Solve at least 5 logic puzzles per day. Start with 2-variable puzzles, work up to 4+ variables.`,
      },
      {
        id: "n-lt-3",
        title: "Rule Discovery & Complex Patterns",
        icon: "🔬",
        content: `**Rule Discovery** means finding the hidden function or transformation that maps inputs to outputs.\n\n---\n\n**1. Input-Output Tables:**\n\nGiven pairs like (2→5), (3→10), (4→17):\n• Check linear: is output = ax + b? (No: 5-10-17 differences are 5,7 → not constant)\n• Check quadratic: f(x) = ax² + bx + c\n  - 4a+2b+c=5, 9a+3b+c=10, 16a+4b+c=17\n  - Solve: a=1, b=0, c=1 → f(x) = x² + 1 ✓\n\n**Systematic approach:**\n1. Plot the points if possible\n2. Calculate differences between consecutive outputs\n3. If first differences are constant → linear\n4. If second differences are constant → quadratic\n5. If ratios are constant → exponential\n6. Check if output = some function of input (square, cube, factorial)\n\n---\n\n**2. Transformation Rules:**\n\n• **String/Text transformations:** Shift letters, reverse, encode\n• **Matrix transformations:** Rotate, flip, transpose\n• **Cipher patterns:** Caesar shift, substitution, position-based\n\nExample: If 'CAT' → 'DBU', 'DOG' → ?, \nEach letter shifted by +1: DOG → EPH\n\n---\n\n**3. Multi-variable Rules:**\n\nSometimes the rule depends on multiple features:\n• Row number AND column number\n• Position AND value\n• Previous output feeds into next input\n\n---\n\n**4. Competition Tips:**\n\n• Always verify your rule with ALL given examples\n• Look for the simplest explanation (Occam's Razor)\n• If one rule doesn't work, consider piecewise rules\n• Time management: spend max 3 minutes per problem, then move on`,
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
        title: "Functions & Polynomials — Complete Guide",
        icon: "📖",
        content: `**Functions** map each input to exactly one output: f: X → Y\n\n---\n\n**1. Function Basics:**\n\n• **Domain:** Set of valid inputs\n• **Range:** Set of possible outputs\n• **Injective (1-to-1):** Different inputs → different outputs\n• **Surjective (onto):** Every output is hit by some input\n• **Bijective:** Both injective and surjective (invertible)\n\n---\n\n**2. Polynomial Functions:**\n\n• **Linear:** f(x) = ax + b (degree 1, straight line)\n• **Quadratic:** f(x) = ax² + bx + c (degree 2, parabola)\n• **Cubic:** f(x) = ax³ + bx² + cx + d (degree 3)\n\n**Quadratic Formula:**\nx = (-b ± √(b² - 4ac)) / 2a\n\n**Discriminant D = b² - 4ac:**\n• D > 0: Two distinct real roots\n• D = 0: One repeated root\n• D < 0: Two complex roots (no real solutions)\n\n---\n\n**3. Key Theorems:**\n\n• **Factor Theorem:** If f(a) = 0, then (x-a) is a factor\n• **Remainder Theorem:** f(a) = remainder when f(x) ÷ (x-a)\n• **Vieta's Formulas:** For ax² + bx + c = 0:\n  - Sum of roots = -b/a\n  - Product of roots = c/a\n\n---\n\n**4. Applications in AI/ML:**\n\n• **Polynomial Regression:** Fitting curves beyond straight lines\n• **Feature Engineering:** Creating x², x³ features\n• **Loss Functions:** Often polynomial in nature\n• **Activation Functions:** Approximated by polynomials (Taylor series)\n\n**IOAI Tip:** Know how to factor, find roots, and apply Vieta's formulas quickly. Expect word problems mixing polynomials with data scenarios.`,
      },
      {
        id: "n-al-2",
        title: "Series, Summations & Inequalities — Complete Guide",
        icon: "🗒️",
        content: `**Series** are sums of sequences. Essential for algorithm analysis and ML theory.\n\n---\n\n**1. Arithmetic Series (AP):**\n\n• Terms: a, a+d, a+2d, a+3d, ...\n• nth term: aₙ = a + (n-1)d\n• Sum of n terms: Sₙ = n/2 × (2a + (n-1)d) = n/2 × (first + last)\n\n**Example:** Sum of 1+2+3+...+100 = 100×101/2 = 5050 (Gauss's trick!)\n\n---\n\n**2. Geometric Series (GP):**\n\n• Terms: a, ar, ar², ar³, ...\n• nth term: aₙ = ar^(n-1)\n• Sum of n terms: Sₙ = a(rⁿ - 1)/(r - 1) for r ≠ 1\n• **Infinite sum (|r| < 1):** S∞ = a/(1 - r)\n\n**Example:** 1 + 1/2 + 1/4 + 1/8 + ... = 1/(1-0.5) = 2\n\n---\n\n**3. Special Sums:**\n\n• Σi = n(n+1)/2\n• Σi² = n(n+1)(2n+1)/6\n• Σi³ = [n(n+1)/2]² (beautiful!)\n\n---\n\n**4. Means:**\n\n• **Arithmetic Mean (AM):** (a₁+a₂+...+aₙ)/n\n• **Geometric Mean (GM):** (a₁×a₂×...×aₙ)^(1/n)\n• **Harmonic Mean (HM):** n/(1/a₁+1/a₂+...+1/aₙ)\n• **Relationship:** AM ≥ GM ≥ HM (for positive reals)\n\n---\n\n**5. Key Inequalities:**\n\n• **AM-GM:** (a+b)/2 ≥ √(ab) for a,b ≥ 0\n  - Equality when a = b\n  - Generalized: (Σaᵢ)/n ≥ (Πaᵢ)^(1/n)\n  - **Use case:** Finding minimum of expressions like x + k/x\n\n• **Cauchy-Schwarz:** (Σaᵢbᵢ)² ≤ (Σaᵢ²)(Σbᵢ²)\n  - Equality when aᵢ/bᵢ = constant\n\n• **Jensen's Inequality:** For convex function f:\n  f(Σλᵢxᵢ) ≤ Σλᵢf(xᵢ) where Σλᵢ = 1, λᵢ ≥ 0\n  - f(x) = x² is convex (f'' > 0)\n  - f(x) = log(x) is concave (f'' < 0) → inequality reverses\n  - **Use in ML:** Proves KL-divergence ≥ 0, justifies EM algorithm\n\n• **Triangle Inequality:** |a+b| ≤ |a| + |b|\n\n---\n\n**6. IOAI Applications:**\n\n• Series in algorithm complexity: O(1+2+...+n) = O(n²)\n• GP in binary search: log₂(n) steps\n• AM-GM in optimization bounds\n• Jensen's in information theory and loss function analysis\n\n**Practice Strategy:** Memorize the formulas, then practice 10 problems mixing AP/GP with word problems. Focus on setting up equations from word descriptions.`,
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
        title: "Probability — Complete Guide",
        icon: "📖",
        content: `**Probability** quantifies uncertainty. Range: 0 (impossible) to 1 (certain).\n\n---\n\n**1. Basic Rules:**\n\n• **P(not A)** = 1 - P(A)\n• **P(A or B)** = P(A) + P(B) - P(A and B)\n• **P(A and B)** = P(A) × P(B|A)\n• **Independent events:** P(A and B) = P(A) × P(B)\n• **Mutually exclusive:** P(A and B) = 0, so P(A or B) = P(A) + P(B)\n\n---\n\n**2. Conditional Probability:**\n\nP(A|B) = P(A ∩ B) / P(B)\n\n"Probability of A, given that B has happened"\n\n**Example:** Deck of cards. P(King | Face card) = 4/12 = 1/3\n(There are 12 face cards, 4 are kings)\n\n---\n\n**3. Bayes' Theorem ⭐:**\n\nP(A|B) = P(B|A) × P(A) / P(B)\n\n**Terminology:**\n• P(A) = **Prior** (belief before evidence)\n• P(B|A) = **Likelihood** (how likely evidence is if A true)\n• P(B) = **Evidence** (total probability of evidence)\n• P(A|B) = **Posterior** (updated belief after evidence)\n\n**Famous Example — Medical Test:**\nDisease prevalence: 0.1% (1 in 1000)\nTest accuracy: 99% (true positive AND true negative)\n\nIf you test positive, P(disease) = ?\n\nP(D|+) = P(+|D)×P(D) / [P(+|D)×P(D) + P(+|¬D)×P(¬D)]\n= (0.99 × 0.001) / (0.99×0.001 + 0.01×0.999)\n= 0.00099 / 0.01098\n≈ **9%** (Not 99%!)\n\nThis is why screening tests need follow-up confirmation.\n\n---\n\n**4. Law of Total Probability:**\n\nIf B₁, B₂, ..., Bₙ partition the sample space:\nP(A) = Σ P(A|Bᵢ) × P(Bᵢ)\n\n---\n\n**5. Counting (Combinatorics):**\n\n• **Permutations (order matters):** P(n,r) = n!/(n-r)!\n• **Combinations (order doesn't matter):** C(n,r) = n!/(r!(n-r)!)\n• **With replacement:** nʳ possibilities\n\n---\n\n**6. Expected Value & Variance:**\n\n• **E[X]** = Σ xᵢ × P(xᵢ) — "average outcome"\n• **Var(X)** = E[X²] - (E[X])² — "spread of outcomes"\n• **E[aX+b]** = aE[X] + b\n• **Var(aX+b)** = a²Var(X)\n\n---\n\n**7. IOAI Specific Tips:**\n\n• Bayes' Theorem problems appear EVERY year\n• Practice converting word problems to probability notation\n• Draw tree diagrams for multi-step problems\n• Always check: do probabilities sum to ≤ 1?\n• Common trap: confusing P(A|B) with P(B|A)`,
      },
      {
        id: "n-ps-2",
        title: "Statistics — Complete Guide",
        icon: "🗒️",
        content: `**Statistics** is the science of collecting, analyzing, and interpreting data.\n\n---\n\n**1. Descriptive Statistics:**\n\n**Measures of Central Tendency:**\n• **Mean (μ):** Sum/count. Sensitive to outliers.\n  Example: {1, 2, 3, 4, 100} → mean = 22 (skewed by 100)\n• **Median:** Middle value when sorted. Robust to outliers.\n  Example: {1, 2, 3, 4, 100} → median = 3\n• **Mode:** Most frequent value. Can have multiple modes.\n\n**When to use which:**\n• Symmetric data → Mean ≈ Median (use either)\n• Skewed data → Median is better (not affected by outliers)\n• Categorical data → Mode is appropriate\n\n---\n\n**2. Measures of Spread:**\n\n• **Range:** Max - Min (simplest, but sensitive to outliers)\n• **IQR:** Q3 - Q1 (robust, used for box plots)\n• **Variance (σ²):** Average squared deviation from mean\n  σ² = Σ(xᵢ - μ)² / n\n• **Standard Deviation (σ):** √Variance (same units as data)\n\n**Empirical Rule (for normal distributions):**\n• 68% of data within μ ± 1σ\n• 95% within μ ± 2σ\n• 99.7% within μ ± 3σ\n\n---\n\n**3. Percentiles & Quartiles:**\n\n• **Q1 (25th percentile):** 25% of data below\n• **Q2 (50th percentile):** Median\n• **Q3 (75th percentile):** 75% of data below\n• **IQR = Q3 - Q1**\n• **Outliers:** Below Q1-1.5×IQR or above Q3+1.5×IQR\n\n---\n\n**4. Correlation:**\n\n**Pearson Correlation Coefficient (r):**\n• r = 1: Perfect positive linear correlation\n• r = -1: Perfect negative linear correlation\n• r = 0: No linear correlation\n• |r| > 0.7: Strong correlation\n• |r| 0.3-0.7: Moderate\n• |r| < 0.3: Weak\n\n**⚠️ CRITICAL: Correlation ≠ Causation!**\n\nFamous examples:\n• Ice cream sales ↑ and drowning deaths ↑ (confound: hot weather)\n• Shoe size ↑ and reading ability ↑ (confound: age)\n• Nicolas Cage films ↑ and pool drownings ↑ (pure coincidence)\n\n**Types of non-causal correlation:**\n1. **Confounding variable:** Hidden third variable causes both\n2. **Reverse causation:** Direction is opposite\n3. **Coincidence:** Spurious statistical artifact\n\n---\n\n**5. Data Visualization for IOAI:**\n\n• **Bar charts:** Compare categories\n• **Histograms:** Show distribution of continuous data\n• **Scatter plots:** Show relationship between two variables\n• **Box plots:** Show median, quartiles, outliers\n• **Pie charts:** Show proportions (use sparingly)\n\n**Reading visualizations:**\n1. Check axes labels and scales\n2. Identify the trend or pattern\n3. Note outliers or anomalies\n4. Consider what the data does NOT show\n\n---\n\n**6. IOAI Tips:**\n• Be ready to compute mean, median, mode, variance by hand\n• Know how to interpret scatter plots and identify correlation direction\n• Practice spotting correlation ≠ causation traps\n• Understand percentiles for data interpretation questions`,
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
        title: "ML Fundamentals — Complete Guide",
        icon: "📖",
        content: `**Machine Learning** = algorithms that learn patterns from data to make predictions or decisions.\n\n---\n\n**1. Types of Machine Learning:**\n\n**Supervised Learning** (labeled data):\n• **Classification:** Predict a category (spam/not spam, cat/dog)\n• **Regression:** Predict a number (house price, temperature)\n• Algorithms: Linear Regression, K-NN, Decision Trees, SVM, Neural Networks\n\n**Unsupervised Learning** (no labels):\n• **Clustering:** Group similar items (customer segments)\n• **Dimensionality Reduction:** Simplify data (PCA)\n• **Anomaly Detection:** Find unusual items\n• Algorithms: K-Means, Hierarchical Clustering, PCA, DBSCAN\n\n**Reinforcement Learning** (learn from rewards):\n• Agent takes actions, gets rewards/penalties\n• Examples: Game playing, robotics, self-driving cars\n\n---\n\n**2. The ML Pipeline:**\n\n**Step 1: Data Collection & Cleaning**\n• Handle missing values (impute or remove)\n• Remove duplicates\n• Fix inconsistencies\n\n**Step 2: Feature Engineering**\n• Select relevant features\n• Create new features (e.g., age from birth date)\n• Normalize/standardize numerical features\n• Encode categorical features (one-hot encoding)\n\n**Step 3: Train-Test Split**\n• Training set: 70-80% (model learns from this)\n• Test set: 20-30% (evaluate on unseen data)\n• Validation set: For hyperparameter tuning\n• **NEVER peek at test data during training!**\n\n**Step 4: Model Training**\n• Choose algorithm based on problem type\n• Fit model to training data\n• Model learns parameters (weights, thresholds)\n\n**Step 5: Evaluation**\n• Test on held-out test set\n• Use appropriate metrics (accuracy, F1, RMSE)\n• Compare against baseline\n\n**Step 6: Tuning & Iteration**\n• Adjust hyperparameters\n• Try different algorithms\n• Add/remove features\n• Use cross-validation for robust estimates\n\n---\n\n**3. Key Algorithms for IOAI:**\n\n**Linear Regression:**\ny = wx + b (find w and b that minimize error)\n• Loss function: MSE = Σ(yᵢ - ŷᵢ)²/n\n• Solution: Normal equation or gradient descent\n\n**K-Nearest Neighbors (K-NN):**\n• Classify based on K closest training points\n• Distance metric: Euclidean √(Σ(xᵢ-yᵢ)²)\n• K=1: Overfits. Large K: Underfits.\n• No training needed! But slow at prediction time.\n\n**Decision Trees:**\n• Split data on features that maximize information gain\n• Easy to interpret (if-then rules)\n• Prone to overfitting → use pruning or Random Forests\n\n**K-Means Clustering:**\n1. Choose K cluster centers randomly\n2. Assign each point to nearest center\n3. Recompute centers as mean of assigned points\n4. Repeat until convergence\n\n---\n\n**4. Overfitting vs Underfitting:**\n\n• **Overfitting:** Model too complex, memorizes noise\n  - High train accuracy, low test accuracy\n  - Fix: More data, regularization, simpler model, dropout\n\n• **Underfitting:** Model too simple, misses patterns\n  - Low train AND test accuracy\n  - Fix: More complex model, more features, train longer\n\n**Bias-Variance Tradeoff:**\n• High bias = underfitting (too simple)\n• High variance = overfitting (too sensitive to training data)\n• Goal: Balance both for best generalization\n\n---\n\n**5. IOAI Exam Tips:**\n\n• Know when to use each algorithm\n• Understand train/test split conceptually\n• Be able to trace through K-NN and K-Means by hand\n• Expect questions on overfitting/underfitting scenarios\n• Practice interpreting learning curves`,
      },
      {
        id: "n-ml-2",
        title: "Evaluation Metrics — Complete Guide",
        icon: "🗒️",
        content: `**Evaluation metrics** tell us how well our model performs. Different tasks need different metrics.\n\n---\n\n**1. Regression Metrics:**\n\n**MAE (Mean Absolute Error):**\nMAE = Σ|yᵢ - ŷᵢ|/n\n• Easy to interpret: "average prediction error"\n• Robust to outliers\n• Treats all errors equally\n\n**MSE (Mean Squared Error):**\nMSE = Σ(yᵢ - ŷᵢ)²/n\n• Penalizes large errors more heavily\n• Always positive\n• Common loss function for training\n\n**RMSE (Root Mean Squared Error):**\nRMSE = √MSE\n• Same units as the target variable\n• More interpretable than MSE\n• Penalizes large errors (due to squaring)\n\n**R² (Coefficient of Determination):**\nR² = 1 - (SS_res / SS_tot)\n• Range: -∞ to 1\n• R²=1: Perfect prediction\n• R²=0: No better than predicting the mean\n• R²<0: Worse than predicting the mean!\n\n---\n\n**2. Classification Metrics:**\n\n**Confusion Matrix:**\n|              | Predicted + | Predicted - |\n|:-------------|:-----------:|:-----------:|\n| Actual +     | TP          | FN          |\n| Actual -     | FP          | TN          |\n\n**Accuracy:** (TP+TN)/(TP+TN+FP+FN)\n• Overall correctness\n• ⚠️ Misleading for imbalanced data!\n\n**Precision:** TP/(TP+FP)\n• "Of all positive predictions, how many are correct?"\n• Important when false positives are costly (spam filter)\n\n**Recall (Sensitivity/TPR):** TP/(TP+FN)\n• "Of all actual positives, how many did we catch?"\n• Important when false negatives are costly (cancer detection)\n\n**Specificity (TNR):** TN/(TN+FP)\n• "Of all actual negatives, how many did we correctly identify?"\n\n**F1-Score:** 2×P×R/(P+R)\n• Harmonic mean of precision and recall\n• Balanced metric when you need both P and R\n• Ranges from 0 to 1\n\n---\n\n**3. ROC Curve & AUC:**\n\n**ROC Curve:**\n• Plots TPR (recall) vs FPR (1-specificity)\n• Each point = a different classification threshold\n• Top-left corner = perfect classifier\n• Diagonal = random classifier\n\n**AUC (Area Under ROC Curve):**\n• AUC = 1.0: Perfect\n• AUC = 0.5: Random (no discrimination)\n• AUC < 0.5: Worse than random (flip predictions!)\n\n**When to use ROC/AUC:**\n• Binary classification\n• When you want threshold-independent evaluation\n• When you need to balance TPR and FPR\n\n---\n\n**4. Choosing the Right Metric:**\n\n| Scenario | Best Metric |\n|:---------|:-----------:|\n| Balanced classification | Accuracy or F1 |\n| Imbalanced data | F1, Precision, Recall |\n| Medical diagnosis | Recall (minimize missed cases) |\n| Spam filtering | Precision (minimize false alarms) |\n| Regression | RMSE or MAE |\n| Ranking | AUC |\n\n---\n\n**5. Cross-Validation:**\n\n**K-Fold Cross-Validation:**\n1. Split data into K equal folds\n2. Train on K-1 folds, test on remaining fold\n3. Repeat K times (each fold is test once)\n4. Average all K scores\n\n• Typical K: 5 or 10\n• More robust than single train/test split\n• Uses all data for both training and testing\n\n**IOAI Tips:**\n• Be able to calculate precision, recall, F1 from a confusion matrix\n• Understand when accuracy is misleading\n• Know what ROC curves show\n• Practice: given TP=90, FP=10, FN=20, TN=80 → compute all metrics`,
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
        title: "PageRank — Complete Guide",
        icon: "📖",
        content: `**PageRank** is the algorithm that powered Google's original search engine, invented by Larry Page and Sergey Brin in 1998.\n\n---\n\n**1. Core Idea:**\n\n"A web page is important if other important pages link to it."\n\nImportance flows through links, like votes. A link from a highly-ranked page is worth more than a link from a low-ranked page.\n\n---\n\n**2. The Formula:**\n\nPR(A) = (1-d)/N + d × Σᵢ PR(Tᵢ)/L(Tᵢ)\n\nWhere:\n• PR(A) = PageRank of page A\n• d = damping factor (typically 0.85)\n• N = total number of pages\n• Tᵢ = pages that link TO page A\n• L(Tᵢ) = number of outgoing links from page Tᵢ\n\n---\n\n**3. Damping Factor (d = 0.85):**\n\nModels a "random surfer" who:\n• With probability d (85%), follows a random link on current page\n• With probability (1-d) (15%), jumps to a completely random page\n\nThis prevents issues with:\n• **Dangling nodes** (pages with no outgoing links)\n• **Spider traps** (cycles that accumulate all PageRank)\n\n---\n\n**4. How It's Computed (Power Iteration):**\n\n1. Initialize: Give every page equal PR = 1/N\n2. Iterate: Apply the formula to update all pages\n3. Repeat until values converge (change < threshold)\n4. Typically converges in 50-100 iterations\n\n---\n\n**5. Worked Example:**\n\nPages: A, B, C\nLinks: A→B, A→C, B→C, C→A\n\nWith d=0.85, N=3:\n\nIteration 0: PR(A)=PR(B)=PR(C) = 1/3\n\nIteration 1:\n• PR(A) = 0.05 + 0.85 × PR(C)/1 = 0.05 + 0.85×0.333 = 0.333\n• PR(B) = 0.05 + 0.85 × PR(A)/2 = 0.05 + 0.85×0.167 = 0.192\n• PR(C) = 0.05 + 0.85 × [PR(A)/2 + PR(B)/1] = ...\n\n(Continue until convergence)\n\n---\n\n**6. Mathematical View:**\n\nPageRank is the dominant eigenvector of the modified link matrix (stochastic matrix with damping). Power iteration finds this eigenvector.\n\n---\n\n**7. IOAI Tips:**\n• Be able to compute 2-3 iterations by hand for small graphs\n• Understand what happens with/without damping\n• Know how dangling nodes are handled\n• Understand PageRank as a probability distribution`,
      },
      {
        id: "n-fa-2",
        title: "TF-IDF — Complete Guide",
        icon: "🗒️",
        content: `**TF-IDF** (Term Frequency - Inverse Document Frequency) is a fundamental text analysis technique used in search engines and NLP.\n\n---\n\n**1. Term Frequency (TF):**\n\nTF(t, d) = (Number of times term t appears in document d) / (Total terms in d)\n\nExample: "the cat sat on the mat" (6 words)\n• TF("the") = 2/6 = 0.333\n• TF("cat") = 1/6 = 0.167\n\n---\n\n**2. Inverse Document Frequency (IDF):**\n\nIDF(t) = log(N / df(t))\n\nWhere N = total documents, df(t) = documents containing term t\n\nExample: 1000 documents total\n• "the" appears in 1000 docs → IDF = log(1000/1000) = 0\n• "quantum" appears in 5 docs → IDF = log(1000/5) = 2.3\n\n**Insight:** Common words get LOW IDF. Rare words get HIGH IDF.\n\n---\n\n**3. TF-IDF Score:**\n\nTF-IDF(t, d) = TF(t, d) × IDF(t)\n\n• High score: Word is frequent in THIS document but rare overall\n• Low score: Word is either rare in this doc OR common everywhere\n• Zero: Word appears in every document (or not at all)\n\n---\n\n**4. Complete Example:**\n\nDocuments:\n• D1: "AI is great AI is wonderful"\n• D2: "ML is great"\n• D3: "AI and ML are both great"\n\nFor "AI" in D1:\n• TF = 2/6 = 0.333\n• IDF = log(3/2) = 0.176 (appears in D1, D3)\n• TF-IDF = 0.333 × 0.176 = 0.059\n\nFor "wonderful" in D1:\n• TF = 1/6 = 0.167\n• IDF = log(3/1) = 0.477 (appears only in D1)\n• TF-IDF = 0.167 × 0.477 = 0.080\n\n"wonderful" has HIGHER TF-IDF than "AI" in D1 because it's more unique!\n\n---\n\n**5. Applications:**\n\n• **Search engines:** Rank documents by relevance to query\n• **Text classification:** Feature vectors for ML models\n• **Keyword extraction:** Find important terms in documents\n• **Document similarity:** Compare TF-IDF vectors using cosine similarity\n\n---\n\n**6. Cosine Similarity:**\n\ncos(θ) = (A·B) / (||A|| × ||B||)\n\n• 1 = identical documents\n• 0 = completely different\n• Used to compare TF-IDF vectors\n\n---\n\n**7. IOAI Tips:**\n• Practice computing TF-IDF by hand for small examples\n• Understand why stop words get near-zero TF-IDF\n• Know the difference between TF variants (raw count, log, boolean)\n• Be ready for questions asking "which word best distinguishes this document?"`,
      },
      {
        id: "n-fa-3",
        title: "Naive Bayes Classifier — Complete Guide",
        icon: "🔬",
        content: `**Naive Bayes** is a probabilistic classifier based on Bayes' theorem with a "naive" independence assumption.\n\n---\n\n**1. The Idea:**\n\nGiven features x₁, x₂, ..., xₙ, predict class C:\n\nP(C|x₁,...,xₙ) ∝ P(C) × P(x₁|C) × P(x₂|C) × ... × P(xₙ|C)\n\nThe "naive" part: Assume features are independent given the class.\n\n---\n\n**2. Why "Naive"?**\n\nTrue joint probability: P(x₁,x₂,...,xₙ|C) requires exponential parameters.\n\nNaive assumption: P(x₁,x₂,...,xₙ|C) ≈ Π P(xᵢ|C)\n\nThis is usually WRONG but works surprisingly well because:\n• We only need the MOST LIKELY class, not exact probabilities\n• Errors in individual probabilities often cancel out\n• Simple model = less overfitting with small data\n\n---\n\n**3. Variants:**\n\n**Multinomial NB:** For word counts/frequencies\n• Best for: Text classification, document categorization\n• P(word|class) = (count of word in class + α) / (total words in class + α×V)\n\n**Bernoulli NB:** For binary features (word present/absent)\n• Best for: Short texts, binary feature vectors\n\n**Gaussian NB:** For continuous features\n• Assumes: P(xᵢ|C) follows normal distribution N(μ, σ²)\n• Best for: Numerical feature data\n\n---\n\n**4. Worked Example — Spam Detection:**\n\nTraining data:\n• 100 spam emails, 400 ham emails\n• P(spam) = 0.2, P(ham) = 0.8\n\nWord frequencies:\n• P("free"|spam) = 0.8, P("free"|ham) = 0.1\n• P("meeting"|spam) = 0.1, P("meeting"|ham) = 0.7\n\nNew email contains: "free meeting"\n\nP(spam|"free meeting") ∝ 0.2 × 0.8 × 0.1 = 0.016\nP(ham|"free meeting") ∝ 0.8 × 0.1 × 0.7 = 0.056\n\nNormalize: P(spam) = 0.016/(0.016+0.056) = 22%\nClassify as: HAM (not spam)\n\n---\n\n**5. Laplace Smoothing:**\n\nProblem: If "cryptocurrency" never appeared in ham, P("crypto"|ham)=0, making entire product 0!\n\nSolution: Add α (usually 1) to all counts:\nP(word|class) = (count + α) / (total + α×V)\n\nWhere V = vocabulary size. This ensures no zero probabilities.\n\n---\n\n**6. Advantages & Limitations:**\n\n**Pros:**\n• Very fast (training and prediction)\n• Works well with small data\n• Handles high-dimensional data\n• Good baseline classifier\n\n**Cons:**\n• Independence assumption rarely true\n• Poor probability estimates (ranking is ok)\n• Can't capture feature interactions\n\n---\n\n**7. IOAI Tips:**\n• Practice computing NB predictions by hand\n• Understand Laplace smoothing and why it's needed\n• Know when NB is a good choice vs other algorithms\n• Expect spam/sentiment classification scenarios`,
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
        title: "Matrix Operations — Complete Guide",
        icon: "📖",
        content: `**Linear Algebra** is the mathematics of vectors, matrices, and linear transformations — the backbone of modern AI.\n\n---\n\n**1. Vectors:**\n\n• A vector is an ordered list of numbers: v = [3, 1, 4]\n• **Magnitude:** ||v|| = √(Σvᵢ²)\n• **Dot product:** a·b = Σaᵢbᵢ\n• **Angle between vectors:** cos(θ) = (a·b)/(||a||×||b||)\n\n**In AI:** Feature vectors, word embeddings, weight vectors\n\n---\n\n**2. Matrix Basics:**\n\nAn m×n matrix has m rows and n columns.\n\n**Operations:**\n• **Addition:** Same dimensions, element-wise\n  [[1,2],[3,4]] + [[5,6],[7,8]] = [[6,8],[10,12]]\n\n• **Scalar multiplication:** Multiply every element\n  3 × [[1,2],[3,4]] = [[3,6],[9,12]]\n\n• **Matrix multiplication:** A(m×n) × B(n×p) = C(m×p)\n  cᵢⱼ = Σₖ aᵢₖ × bₖⱼ (row i of A · column j of B)\n  ⚠️ NOT commutative: AB ≠ BA generally\n\n• **Transpose:** Flip rows ↔ columns\n  Aᵀᵢⱼ = Aⱼᵢ\n  (AB)ᵀ = BᵀAᵀ (reverse order!)\n\n---\n\n**3. Special Matrices:**\n\n• **Identity (I):** 1s on diagonal, 0s elsewhere. AI = IA = A\n• **Zero (0):** All zeros. 0A = A0 = 0\n• **Diagonal:** Non-zero only on main diagonal\n• **Symmetric:** A = Aᵀ (e.g., covariance matrices)\n• **Orthogonal:** AᵀA = AAᵀ = I (columns are orthonormal)\n\n---\n\n**4. Determinant:**\n\nFor 2×2: det[[a,b],[c,d]] = ad - bc\n\n**Properties:**\n• det(A) = 0 → A is singular (not invertible)\n• det(AB) = det(A)×det(B)\n• det(Aᵀ) = det(A)\n• Row swap → negate determinant\n• det(kA) = kⁿ det(A) for n×n matrix\n\n**Geometric meaning:** |det(A)| = scaling factor of the linear transformation\n\n---\n\n**5. Matrix Inverse:**\n\nA⁻¹ exists iff det(A) ≠ 0\n\nFor 2×2: A⁻¹ = (1/det) × [[d,-b],[-c,a]]\n\n**Properties:**\n• AA⁻¹ = A⁻¹A = I\n• (AB)⁻¹ = B⁻¹A⁻¹ (reverse order!)\n• (Aᵀ)⁻¹ = (A⁻¹)ᵀ\n\n---\n\n**6. Eigenvalues & Eigenvectors:**\n\nAv = λv (A transforms v to a scalar multiple of itself)\n\n• λ = eigenvalue (the scalar)\n• v = eigenvector (the direction preserved)\n\n**Finding eigenvalues:** Solve det(A - λI) = 0\n\n**In AI:**\n• **PCA:** Eigenvectors of covariance matrix = principal components\n• **PageRank:** Dominant eigenvector of link matrix\n• **Neural networks:** Eigenvalues affect training stability\n\n---\n\n**7. Systems of Linear Equations:**\n\nAx = b\n\n**Methods:**\n• **Direct:** x = A⁻¹b (for small, invertible A)\n• **Gaussian elimination:** Row operations to echelon form\n• **Least squares:** x = (AᵀA)⁻¹Aᵀb (for overdetermined systems)\n\n**Linear regression IS solving a linear system!**\n\n---\n\n**8. IOAI Tips:**\n\n• Practice 2×2 and 3×3 matrix multiplication by hand\n• Know how to find determinants and inverses for 2×2\n• Understand eigenvalues conceptually (direction preservation)\n• Expect questions connecting matrices to ML concepts\n• Know that neural network layers are matrix multiplications`,
      },
    ],
    worksheets: [
      { id: "w-la-1", title: "Matrix Arithmetic", description: "Addition, multiplication, and transpose", difficulty: "Beginner", questionCount: 12, estimatedTime: "20 min", topics: ["Matrix Operations"] },
      { id: "w-la-2", title: "Systems of Equations", description: "Solve using matrices and Gaussian elimination", difficulty: "Intermediate", questionCount: 10, estimatedTime: "30 min", topics: ["Linear Systems"] },
      { id: "w-la-3", title: "Determinants & Inverses", description: "Calculate determinants and find inverse matrices", difficulty: "Advanced", questionCount: 8, estimatedTime: "35 min", topics: ["Determinants", "Inverse"] },
    ],
  },
];
