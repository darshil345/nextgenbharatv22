export interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

// Map exercise IDs to sets of questions
export const EXERCISE_QUESTIONS: Record<string, Question[]> = {
  // ═══════════════════════════════════════════════════════
  //  STAGE 1 — Foundational Topics
  // ═══════════════════════════════════════════════════════

  // ── Computational and Logical Thinking ──
  "s1-clt-1": [
    { question: "What comes next: 2, 4, 8, 16, ?", options: ["24", "32", "20", "28"], correct: 1, explanation: "Each number doubles. 16 × 2 = 32." },
    { question: "Find the pattern: A, C, E, G, ?", options: ["H", "I", "J", "K"], correct: 1, explanation: "Every other letter: A(1), C(3), E(5), G(7), I(9)." },
    { question: "What's next: 1, 1, 2, 3, 5, ?", options: ["7", "8", "6", "9"], correct: 1, explanation: "Fibonacci: each number = sum of previous two. 3 + 5 = 8." },
    { question: "Complete: 3, 6, 11, 18, ?", options: ["25", "27", "23", "29"], correct: 1, explanation: "Differences increase by 2: +3, +5, +7, +9 → 18 + 9 = 27." },
    { question: "A rule maps (2,3)→13, (4,1)→17, (3,3)→?", options: ["18", "15", "21", "12"], correct: 0, explanation: "Rule: a²+b² = 4+9=13, 16+1=17, 9+9=18." },
  ],
  "s1-clt-2": [
    { question: "If all Bloops are Razzles, and all Razzles are Lazzles, then all Bloops are:", options: ["Razzles only", "Lazzles", "Neither", "Cannot determine"], correct: 1, explanation: "By transitivity: Bloops → Razzles → Lazzles." },
    { question: "If it rains, the ground is wet. The ground is wet. What can we conclude?", options: ["It rained", "It might have rained", "It didn't rain", "The sky is cloudy"], correct: 1, explanation: "Affirming the consequent is a fallacy. We can only say it might have rained." },
    { question: "A is taller than B. C is shorter than B. Who is shortest?", options: ["A", "B", "C", "Cannot determine"], correct: 2, explanation: "A > B > C, so C is the shortest." },
    { question: "NOT (A AND B) is equivalent to:", options: ["NOT A AND NOT B", "NOT A OR NOT B", "A OR B", "A AND B"], correct: 1, explanation: "De Morgan's Law: ¬(A∧B) ≡ ¬A∨¬B." },
    { question: "If X → Y is true, which is also true?", options: ["Y → X", "NOT Y → NOT X", "NOT X → NOT Y", "Y → NOT X"], correct: 1, explanation: "The contrapositive ¬Y → ¬X is logically equivalent to X → Y." },
  ],
  "s1-clt-3": [
    { question: "How many times does 'for i in range(n)' execute?", options: ["n-1", "n", "n+1", "2n"], correct: 1, explanation: "range(n) produces n values: 0 to n-1." },
    { question: "What is the output? x=5; if x>3: x=x*2; print(x)", options: ["5", "10", "3", "Error"], correct: 1, explanation: "x=5, 5>3 is true, so x=10. Output: 10." },
    { question: "A variable stores:", options: ["Only numbers", "A value that can change", "Only text", "Nothing"], correct: 1, explanation: "Variables store values that can be updated during program execution." },
    { question: "What does 'if-then-else' do?", options: ["Loops forever", "Chooses between two actions based on a condition", "Declares a variable", "Prints text"], correct: 1, explanation: "If-then-else executes one block if condition is true, another if false." },
    { question: "What is the sum after: total=0; for i in [1,2,3]: total=total+i", options: ["3", "5", "6", "0"], correct: 2, explanation: "0+1=1, 1+2=3, 3+3=6. Total = 6." },
  ],
  "s1-clt-4": [
    { question: "TRUE AND FALSE = ?", options: ["TRUE", "FALSE", "UNDEFINED", "ERROR"], correct: 1, explanation: "AND requires both operands to be TRUE. TRUE ∧ FALSE = FALSE." },
    { question: "TRUE OR FALSE = ?", options: ["TRUE", "FALSE", "UNDEFINED", "ERROR"], correct: 0, explanation: "OR requires at least one TRUE. TRUE ∨ FALSE = TRUE." },
    { question: "XOR of 1 and 1 is:", options: ["1", "0", "2", "Undefined"], correct: 1, explanation: "XOR is true only when exactly one input is true. 1⊕1 = 0." },
    { question: "NOT (P OR Q) is equivalent to:", options: ["NOT P OR NOT Q", "NOT P AND NOT Q", "P AND Q", "P OR Q"], correct: 1, explanation: "De Morgan's: ¬(P∨Q) ≡ ¬P∧¬Q." },
    { question: "P→Q is logically equivalent to:", options: ["Q→P", "¬P∨Q", "P∧Q", "¬Q→P"], correct: 1, explanation: "Material implication: P→Q ≡ ¬P∨Q." },
  ],
  "s1-clt-5": [
    { question: "What is f(5) if f(n)=f(n-1)+f(n-2), f(1)=1, f(2)=3?", options: ["11", "13", "15", "18"], correct: 0, explanation: "f(3)=4, f(4)=7, f(5)=11." },
    { question: "After: x=1; for i in range(4): x=x*2+1; what is x?", options: ["15", "31", "63", "27"], correct: 1, explanation: "1→3→7→15→31." },
    { question: "XOR of 1010 and 0110 is:", options: ["1100", "1110", "0100", "1000"], correct: 0, explanation: "XOR bit by bit: 1⊕0=1, 0⊕1=1, 1⊕1=0, 0⊕0=0 → 1100." },
    { question: "How many iterations for a nested loop: for i in range(3): for j in range(4)?", options: ["7", "12", "3", "4"], correct: 1, explanation: "Outer runs 3 times, inner 4 times each → 3×4 = 12." },
    { question: "Binary search on 1024 elements takes at most how many steps?", options: ["10", "100", "512", "1024"], correct: 0, explanation: "log₂(1024) = 10 steps." },
  ],

  // ── Foundations of Algebra ──
  "s1-fa-1": [
    { question: "A function f: X→Y is injective if:", options: ["Every output has an input", "Different inputs give different outputs", "It's always increasing", "f(x)=x"], correct: 1, explanation: "Injective (one-to-one): f(a)=f(b) implies a=b." },
    { question: "The domain of f(x)=1/x is:", options: ["All reals", "All reals except 0", "Positive reals only", "Integers only"], correct: 1, explanation: "f(x)=1/x is undefined at x=0." },
    { question: "If f(x)=2x+3, what is f(4)?", options: ["8", "11", "14", "7"], correct: 1, explanation: "f(4) = 2(4)+3 = 11." },
    { question: "A bijective function is:", options: ["Only injective", "Only surjective", "Both injective and surjective", "Neither"], correct: 2, explanation: "Bijective = one-to-one AND onto. It has an inverse." },
    { question: "The range of f(x)=x² for real x is:", options: ["All reals", "[0, ∞)", "(-∞, 0]", "(0, ∞)"], correct: 1, explanation: "x² is always ≥ 0, so range = [0, ∞)." },
  ],
  "s1-fa-2": [
    { question: "For quadratic ax²+bx+c=0, the discriminant is:", options: ["b²+4ac", "b²-4ac", "4ac-b²", "a²-4bc"], correct: 1, explanation: "Discriminant D = b²-4ac determines the nature of roots." },
    { question: "If D < 0 for a quadratic, then:", options: ["Two real roots", "One repeated root", "No real roots", "Infinitely many roots"], correct: 2, explanation: "Negative discriminant means complex (non-real) roots." },
    { question: "By Vieta's formulas, sum of roots of x²-5x+6=0 is:", options: ["6", "5", "-5", "-6"], correct: 1, explanation: "Sum of roots = -(-5)/1 = 5." },
    { question: "Product of roots of x²-5x+6=0 is:", options: ["5", "6", "-6", "1"], correct: 1, explanation: "Product of roots = 6/1 = 6." },
    { question: "The roots of x²-5x+6=0 are:", options: ["2 and 3", "1 and 6", "-2 and -3", "5 and 1"], correct: 0, explanation: "(x-2)(x-3)=0, so roots are 2 and 3." },
  ],
  "s1-fa-3": [
    { question: "Sum of first 100 natural numbers:", options: ["5000", "5050", "4950", "10000"], correct: 1, explanation: "n(n+1)/2 = 100×101/2 = 5050." },
    { question: "Sum of infinite GP with a=1, r=1/2:", options: ["1", "2", "∞", "1/2"], correct: 1, explanation: "S∞ = a/(1-r) = 1/(1-0.5) = 2." },
    { question: "5th term of AP: 3, 7, 11, 15, ...?", options: ["17", "19", "21", "23"], correct: 1, explanation: "a₅ = 3 + 4(4) = 19. Common difference d=4." },
    { question: "In a GP with first term 2 and ratio 3, the 4th term is:", options: ["18", "54", "162", "24"], correct: 1, explanation: "a₄ = 2×3³ = 2×27 = 54." },
    { question: "Σi² from i=1 to n equals:", options: ["n(n+1)/2", "n(n+1)(2n+1)/6", "n²(n+1)²/4", "n³/3"], correct: 1, explanation: "The formula for sum of squares is n(n+1)(2n+1)/6." },
  ],
  "s1-fa-4": [
    { question: "AM-GM inequality states that for a,b≥0:", options: ["(a+b)/2 ≤ √(ab)", "(a+b)/2 ≥ √(ab)", "a+b ≥ ab", "a-b ≤ √(ab)"], correct: 1, explanation: "Arithmetic mean ≥ Geometric mean, with equality when a=b." },
    { question: "Using AM-GM, the minimum of x + 4/x for x>0 is:", options: ["2", "4", "8", "1"], correct: 1, explanation: "By AM-GM: x + 4/x ≥ 2√(x·4/x) = 2√4 = 4." },
    { question: "Jensen's inequality applies to:", options: ["All functions", "Convex/concave functions", "Only linear functions", "Only polynomials"], correct: 1, explanation: "Jensen's applies to convex (or concave) functions: f(E[X]) ≤ E[f(X)]." },
    { question: "f(x) = x² is:", options: ["Concave", "Convex", "Neither", "Both"], correct: 1, explanation: "f''(x) = 2 > 0, so x² is convex." },
    { question: "Cauchy-Schwarz: (Σaᵢbᵢ)² ≤ ?", options: ["(Σaᵢ)(Σbᵢ)", "(Σaᵢ²)(Σbᵢ²)", "(Σaᵢ+bᵢ)²", "Σ(aᵢbᵢ)²"], correct: 1, explanation: "Cauchy-Schwarz: (Σaᵢbᵢ)² ≤ (Σaᵢ²)(Σbᵢ²)." },
  ],
  "s1-fa-5": [
    { question: "Σi from 1 to 50 equals:", options: ["1250", "1275", "1300", "2500"], correct: 1, explanation: "50×51/2 = 1275." },
    { question: "If f(x)=x³-6x²+11x-6, then f(1)=?", options: ["0", "1", "2", "-6"], correct: 0, explanation: "1-6+11-6 = 0. So (x-1) is a factor." },
    { question: "The minimum value of (a-b)² is:", options: ["0", "1", "-1", "Undefined"], correct: 0, explanation: "A square is always ≥ 0, with minimum 0 when a=b." },
    { question: "Sum of first n cubes equals:", options: ["n(n+1)/2", "n²", "[n(n+1)/2]²", "n³"], correct: 2, explanation: "Σi³ = [n(n+1)/2]², a beautiful identity." },
    { question: "For GP with |r|<1, the series converges to:", options: ["∞", "a/(1-r)", "ar", "0"], correct: 1, explanation: "Infinite GP sum = a/(1-r) when |r|<1." },
  ],

  // ── Probability ──
  "s1-pr-1": [
    { question: "P(heads) on a fair coin?", options: ["1/4", "1/2", "1/3", "1"], correct: 1, explanation: "Fair coin: 2 equally likely outcomes, P(heads) = 1/2." },
    { question: "Rolling a die, P(even number)?", options: ["1/6", "1/3", "1/2", "2/3"], correct: 2, explanation: "Even: 2,4,6 → 3/6 = 1/2." },
    { question: "Two coins flipped. P(both heads)?", options: ["1/2", "1/4", "1/3", "3/4"], correct: 1, explanation: "P(HH) = 1/2 × 1/2 = 1/4." },
    { question: "Drawing 2 cards without replacement — dependent or independent?", options: ["Independent", "Dependent", "Neither", "Both"], correct: 1, explanation: "Without replacement, the first draw affects the second." },
    { question: "P(A∪B) for mutually exclusive events:", options: ["P(A)×P(B)", "P(A)+P(B)", "P(A)-P(B)", "1"], correct: 1, explanation: "Mutually exclusive: P(A∪B) = P(A)+P(B)." },
  ],
  "s1-pr-2": [
    { question: "Bayes' Theorem: P(A|B) = ?", options: ["P(B|A)·P(A)/P(B)", "P(A)·P(B)", "P(B)/P(A)", "P(A)+P(B)"], correct: 0, explanation: "P(A|B) = P(B|A)·P(A)/P(B)." },
    { question: "A test is 95% accurate. Disease prevalence 1%. P(disease|positive) ≈ ?", options: ["95%", "16%", "50%", "1%"], correct: 1, explanation: "Bayes: (0.95×0.01)/(0.95×0.01+0.05×0.99) ≈ 16%." },
    { question: "Prior probability is:", options: ["Belief after evidence", "Initial belief before evidence", "Likelihood", "Joint probability"], correct: 1, explanation: "Prior = initial belief before observing evidence." },
    { question: "If P(A)=0.3, P(B|A)=0.8, P(A∩B)=?", options: ["0.24", "1.1", "0.56", "0.30"], correct: 0, explanation: "P(A∩B) = P(B|A)×P(A) = 0.8×0.3 = 0.24." },
    { question: "The 'posterior' in Bayes is:", options: ["P(A)", "P(B|A)", "P(A|B)", "P(B)"], correct: 2, explanation: "Posterior P(A|B) is the updated belief after seeing evidence B." },
  ],
  "s1-pr-3": [
    { question: "P(A|B) means:", options: ["P(A and B)", "P(A) given B occurred", "P(B) given A", "P(A)+P(B)"], correct: 1, explanation: "Conditional probability: probability of A given B happened." },
    { question: "Events A,B are independent if:", options: ["P(A|B)=P(A)", "P(A|B)=0", "P(A∩B)=0", "P(A)+P(B)=1"], correct: 0, explanation: "Independence: knowing B doesn't change P(A)." },
    { question: "P(A∪B) = P(A)+P(B)-P(A∩B) is called:", options: ["Bayes' Rule", "Addition Rule", "Chain Rule", "Multiplication Rule"], correct: 1, explanation: "Inclusion-Exclusion / Addition Rule of probability." },
    { question: "If P(Rain)=0.3, P(Umbrella|Rain)=0.9, P(Rain∩Umbrella)=?", options: ["0.27", "1.2", "0.6", "0.03"], correct: 0, explanation: "P(R∩U) = P(U|R)×P(R) = 0.9×0.3 = 0.27." },
    { question: "Law of Total Probability: P(A) = ?", options: ["P(A|B)+P(A|¬B)", "P(A|B)P(B)+P(A|¬B)P(¬B)", "P(A)P(B)", "1-P(¬A)"], correct: 1, explanation: "P(A) = P(A|B)P(B) + P(A|¬B)P(¬B)." },
  ],
  "s1-pr-4": [
    { question: "C(5,2) = ?", options: ["10", "20", "25", "5"], correct: 0, explanation: "C(5,2) = 5!/(2!×3!) = 10." },
    { question: "P(5,3) = ?", options: ["10", "60", "125", "15"], correct: 1, explanation: "P(5,3) = 5!/(5-3)! = 60." },
    { question: "With replacement, choosing 3 items from 4 gives:", options: ["12", "64", "24", "4"], correct: 1, explanation: "With replacement: 4³ = 64 possibilities." },
    { question: "How many ways to arrange 4 books on a shelf?", options: ["4", "16", "24", "8"], correct: 2, explanation: "4! = 24 arrangements." },
    { question: "C(n,0) always equals:", options: ["0", "1", "n", "Undefined"], correct: 1, explanation: "There's exactly 1 way to choose 0 items: C(n,0)=1." },
  ],
  "s1-pr-5": [
    { question: "E[X] for a fair die roll:", options: ["3", "3.5", "4", "2.5"], correct: 1, explanation: "E[X] = (1+2+3+4+5+6)/6 = 3.5." },
    { question: "Var(X) = ?", options: ["E[X²]-E[X]", "E[X²]-(E[X])²", "(E[X])²", "E[X]-E[X²]"], correct: 1, explanation: "Variance = E[X²] - (E[X])²." },
    { question: "If E[X]=5, E[2X+3]=?", options: ["13", "10", "8", "16"], correct: 0, explanation: "E[aX+b] = aE[X]+b = 2(5)+3 = 13." },
    { question: "Var(3X) = ?", options: ["3·Var(X)", "9·Var(X)", "Var(X)", "Var(X)/3"], correct: 1, explanation: "Var(aX) = a²·Var(X). So Var(3X) = 9·Var(X)." },
    { question: "If all outcomes are equally likely and the same, variance is:", options: ["1", "0", "Undefined", "Equal to mean"], correct: 1, explanation: "No spread = zero variance." },
  ],

  // ── Statistics ──
  "s1-st-1": [
    { question: "Mean of [2, 4, 6, 8, 10]?", options: ["5", "6", "7", "8"], correct: 1, explanation: "Mean = 30/5 = 6." },
    { question: "Median of [3, 1, 7, 5, 2]?", options: ["5", "3", "7", "2"], correct: 1, explanation: "Sorted: [1,2,3,5,7]. Middle = 3." },
    { question: "Mode of [1, 2, 2, 3, 3, 3, 4]?", options: ["1", "2", "3", "4"], correct: 2, explanation: "3 appears 3 times — most frequent." },
    { question: "Which measure is most affected by outliers?", options: ["Mean", "Median", "Mode", "All equally"], correct: 0, explanation: "Mean is pulled by extreme values." },
    { question: "What percentile is the median?", options: ["25th", "50th", "75th", "100th"], correct: 1, explanation: "Median = 50th percentile." },
  ],
  "s1-st-2": [
    { question: "Variance measures:", options: ["Central tendency", "Data spread", "Symmetry", "Size"], correct: 1, explanation: "Variance quantifies how spread out data is from the mean." },
    { question: "If all values are the same, standard deviation is:", options: ["1", "0", "Undefined", "Mean"], correct: 1, explanation: "No spread = zero SD." },
    { question: "SD is the __ of variance:", options: ["Square", "Square root", "Log", "Inverse"], correct: 1, explanation: "SD = √Variance." },
    { question: "IQR stands for:", options: ["Inner Quartile Range", "Interquartile Range", "Integer Quartile Ratio", "Index Quality Rating"], correct: 1, explanation: "IQR = Q3 - Q1, the interquartile range." },
    { question: "A point is an outlier if it's beyond:", options: ["Q1-1.5×IQR or Q3+1.5×IQR", "Mean±SD", "Median±Range", "Q2±IQR"], correct: 0, explanation: "Standard outlier detection: below Q1-1.5×IQR or above Q3+1.5×IQR." },
  ],
  "s1-st-3": [
    { question: "Correlation coefficient ranges from:", options: ["0 to 1", "-1 to 1", "-∞ to ∞", "0 to ∞"], correct: 1, explanation: "Pearson's r ∈ [-1, 1]." },
    { question: "r = -0.9 means:", options: ["Weak positive", "Strong negative", "No relationship", "Strong positive"], correct: 1, explanation: "Close to -1 = strong negative linear relationship." },
    { question: "Ice cream sales ↑ and drowning ↑ means:", options: ["Ice cream causes drowning", "Drowning causes sales", "Confounding variable (heat)", "No relationship"], correct: 2, explanation: "Hot weather is the confounding variable. Correlation ≠ causation." },
    { question: "Which can establish causation?", options: ["Correlation analysis", "Controlled experiment", "Scatter plot", "Bar chart"], correct: 1, explanation: "Only controlled experiments can establish causation." },
    { question: "r = 0 means:", options: ["Perfect correlation", "No linear relationship", "Strong relationship", "Causation"], correct: 1, explanation: "r=0: no linear correlation (nonlinear may still exist)." },
  ],
  "s1-st-4": [
    { question: "Q1 represents the:", options: ["25th percentile", "50th percentile", "75th percentile", "Mean"], correct: 0, explanation: "Q1 = 25th percentile." },
    { question: "In a box plot, the box spans:", options: ["Min to max", "Q1 to Q3", "Mean±SD", "Median±IQR"], correct: 1, explanation: "The box covers the interquartile range Q1 to Q3." },
    { question: "Whiskers in a box plot extend to:", options: ["Outliers", "1.5×IQR from Q1/Q3", "Min and max always", "Mean±2SD"], correct: 1, explanation: "Whiskers extend to the farthest non-outlier point within 1.5×IQR." },
    { question: "A right-skewed distribution has:", options: ["Mean < Median", "Mean > Median", "Mean = Median", "No mode"], correct: 1, explanation: "Right skew: tail extends right, pulling mean above median." },
    { question: "Data: [10,12,12,13,14,15,50]. The outlier is:", options: ["10", "12", "15", "50"], correct: 3, explanation: "50 is far from the rest of the data — it's an outlier." },
  ],
  "s1-st-5": [
    { question: "For [4, 8, 6, 5, 3], the variance is closest to:", options: ["2.0", "3.2", "3.7", "5.0"], correct: 2, explanation: "Mean=5.2, deviations squared: 1.44+7.84+0.64+0.04+4.84=14.8, var=14.8/5=2.96≈3.0. Close to 3.2." },
    { question: "68% of data in a normal distribution falls within:", options: ["μ±1σ", "μ±2σ", "μ±3σ", "μ±0.5σ"], correct: 0, explanation: "Empirical rule: ~68% within 1 standard deviation." },
    { question: "A bimodal distribution has:", options: ["No mode", "One peak", "Two peaks", "Flat shape"], correct: 2, explanation: "Bimodal = two distinct peaks/modes." },
    { question: "Z-score of 0 means the value is:", options: ["An outlier", "Equal to the mean", "Below the mean", "Maximum"], correct: 1, explanation: "Z = (x-μ)/σ = 0 when x = μ." },
    { question: "95% of data in a normal distribution falls within:", options: ["μ±1σ", "μ±2σ", "μ±3σ", "μ±0.5σ"], correct: 1, explanation: "Empirical rule: ~95% within 2 standard deviations." },
  ],

  // ── Linear Algebra and Matrices ──
  "s1-la-1": [
    { question: "A 3×2 matrix times a 2×4 matrix gives:", options: ["3×4", "2×3", "4×3", "Cannot multiply"], correct: 0, explanation: "(3×2)×(2×4) = 3×4 matrix." },
    { question: "The identity matrix I satisfies:", options: ["AI = 0", "AI = A", "AI = I", "AI = A²"], correct: 1, explanation: "AI = IA = A for any compatible matrix A." },
    { question: "Matrix transpose swaps:", options: ["Values", "Rows and columns", "Determinant", "Inverse"], correct: 1, explanation: "Transpose: A[i][j] → A[j][i]." },
    { question: "A⁻¹ exists only if:", options: ["A is square", "det(A) ≠ 0", "Both A is square and det(A)≠0", "A has all positive entries"], correct: 2, explanation: "Inverse requires square matrix with non-zero determinant." },
    { question: "For 2×2 matrix [[a,b],[c,d]], the inverse uses 1/det where det =", options: ["a+d", "ad-bc", "ac-bd", "ab+cd"], correct: 1, explanation: "det = ad-bc for a 2×2 matrix." },
  ],
  "s1-la-2": [
    { question: "Ax = b represents:", options: ["A single equation", "A system of linear equations", "A quadratic", "A polynomial"], correct: 1, explanation: "Matrix form Ax = b encodes a system of linear equations." },
    { question: "Gaussian elimination uses:", options: ["Column swaps only", "Row operations to reduce to echelon form", "Determinants only", "Random operations"], correct: 1, explanation: "Gaussian elimination systematically applies row operations." },
    { question: "An inconsistent system has:", options: ["One solution", "No solution", "Infinite solutions", "Exactly two solutions"], correct: 1, explanation: "Inconsistent = contradictory equations, no solution." },
    { question: "Rank of a matrix determines:", options: ["Its size", "Number of linearly independent rows", "Its determinant", "Number of zeros"], correct: 1, explanation: "Rank = number of linearly independent rows/columns." },
    { question: "If a 3×3 system has rank 2, it has:", options: ["Unique solution", "No solution", "Infinitely many solutions", "Two solutions"], correct: 2, explanation: "Rank < unknowns typically means infinitely many solutions." },
  ],
  "s1-la-3": [
    { question: "The dot product of [1,2,3] and [4,5,6] is:", options: ["15", "32", "21", "12"], correct: 1, explanation: "1×4 + 2×5 + 3×6 = 4+10+18 = 32." },
    { question: "||[3,4]|| = ?", options: ["7", "5", "25", "12"], correct: 1, explanation: "√(9+16) = √25 = 5." },
    { question: "Two vectors are perpendicular when their dot product is:", options: ["1", "0", "-1", "Undefined"], correct: 1, explanation: "Perpendicular ⟺ a·b = 0." },
    { question: "cos(θ) between vectors a and b equals:", options: ["a+b", "a·b/(||a||×||b||)", "||a||×||b||", "a×b"], correct: 1, explanation: "cos(θ) = (a·b)/(||a||×||b||)." },
    { question: "A unit vector has magnitude:", options: ["0", "1", "2", "Varies"], correct: 1, explanation: "Unit vector: ||v|| = 1." },
  ],
  "s1-la-4": [
    { question: "det([[2,3],[1,4]]) = ?", options: ["5", "11", "8", "-1"], correct: 0, explanation: "det = 2×4 - 3×1 = 8-3 = 5." },
    { question: "det(AB) = ?", options: ["det(A)+det(B)", "det(A)×det(B)", "det(A)-det(B)", "det(A)/det(B)"], correct: 1, explanation: "det(AB) = det(A)·det(B)." },
    { question: "Eigenvalue λ satisfies:", options: ["Av = v", "Av = λv", "A = λI", "det(A) = λ"], correct: 1, explanation: "Eigenvalue equation: Av = λv." },
    { question: "To find eigenvalues, solve:", options: ["A = 0", "det(A-λI) = 0", "Ax = b", "A² = I"], correct: 1, explanation: "Characteristic equation: det(A-λI) = 0." },
    { question: "A singular matrix has determinant:", options: ["1", "0", "-1", "∞"], correct: 1, explanation: "Singular = not invertible = det = 0." },
  ],

  // ── Optimization ──
  "s1-op-1": [
    { question: "In linear programming, the feasible region is:", options: ["Always empty", "Set of points satisfying all constraints", "A single point", "Infinite"], correct: 1, explanation: "Feasible region contains all points meeting all constraints." },
    { question: "The optimal solution in LP is at:", options: ["Center", "A vertex of the feasible region", "Any interior point", "Outside the region"], correct: 1, explanation: "For linear objectives, optimum is at a vertex." },
    { question: "A constraint x + y ≤ 10 means:", options: ["x and y must equal 10", "Sum of x and y can't exceed 10", "x or y must be 10", "x and y are negative"], correct: 1, explanation: "The constraint limits x+y to at most 10." },
    { question: "Lagrange multipliers help solve:", options: ["Unconstrained problems", "Constrained optimization", "Linear equations", "Data cleaning"], correct: 1, explanation: "Lagrange multipliers convert constrained problems into solvable systems." },
    { question: "Regularization adds constraints to:", options: ["Add features", "Prevent overfitting", "Speed up training", "Increase model size"], correct: 1, explanation: "Regularization penalizes complexity to prevent overfitting." },
  ],
  "s1-op-2": [
    { question: "At a maximum, f'(x) is:", options: ["Positive", "Zero", "Negative", "Undefined"], correct: 1, explanation: "At a maximum or minimum, the first derivative is zero." },
    { question: "A function's maximum has f''(x):", options: ["> 0", "< 0", "= 0", "Undefined"], correct: 1, explanation: "f''(x) < 0 at a maximum (concave down)." },
    { question: "A local minimum is:", options: ["Global lowest", "Lowest in a neighborhood", "Always the best", "Where f is undefined"], correct: 1, explanation: "Local min is lower than all nearby points." },
    { question: "Convex functions have:", options: ["Many local minima", "Exactly one global minimum", "No minimum", "Only maxima"], correct: 1, explanation: "Convex functions have a single global minimum." },
    { question: "A saddle point has:", options: ["Zero gradient, neither min nor max", "Positive gradient", "Negative gradient", "Maximum value"], correct: 0, explanation: "Saddle: gradient=0, but min in one direction and max in another." },
  ],
  "s1-op-3": [
    { question: "Gradient descent moves in the direction of:", options: ["Steepest ascent", "Negative gradient", "Random", "Constant"], correct: 1, explanation: "It follows -∇f to minimize the function." },
    { question: "Learning rate controls:", options: ["Number of features", "Step size in gradient descent", "Epochs", "Batch size"], correct: 1, explanation: "Learning rate = how big each update step is." },
    { question: "Too high a learning rate causes:", options: ["Slow convergence", "Overshooting the minimum", "Perfect convergence", "No effect"], correct: 1, explanation: "Large steps can overshoot and diverge." },
    { question: "SGD uses per step:", options: ["All data", "One sample", "No data", "Half the data"], correct: 1, explanation: "Stochastic GD updates from one random sample." },
    { question: "Gradient descent converges when:", options: ["Loss increases", "Loss stops decreasing significantly", "All features used", "LR = 1"], correct: 1, explanation: "Convergence = loss stabilizes (gradient ≈ 0)." },
  ],

  // ── Data Representation and Visualization ──
  "s1-dv-1": [
    { question: "Binary for decimal 10 is:", options: ["1010", "1100", "1001", "0110"], correct: 0, explanation: "10 = 8+2 = 1010 in binary." },
    { question: "Hexadecimal 'A' equals decimal:", options: ["10", "11", "15", "16"], correct: 0, explanation: "Hex A = decimal 10." },
    { question: "Octal 17 equals decimal:", options: ["15", "17", "14", "23"], correct: 0, explanation: "1×8 + 7 = 15." },
    { question: "Binary 1111 equals decimal:", options: ["15", "16", "14", "17"], correct: 0, explanation: "8+4+2+1 = 15." },
    { question: "Base-n coding uses n different:", options: ["Colors", "Digits/symbols", "Letters", "Operators"], correct: 1, explanation: "Base-n uses n distinct symbols (0 to n-1)." },
  ],
  "s1-dv-2": [
    { question: "An entity-relationship diagram shows:", options: ["Code structure", "Relationships between data entities", "Time series", "Color palettes"], correct: 1, explanation: "ER diagrams model data entities and their relationships." },
    { question: "A primary key in a table is:", options: ["Any column", "A unique identifier for each row", "Always numeric", "Optional"], correct: 1, explanation: "Primary key uniquely identifies each record." },
    { question: "Hierarchical data is best represented by:", options: ["Pie charts", "Tree structures", "Scatter plots", "Bar graphs"], correct: 1, explanation: "Trees naturally represent parent-child hierarchies." },
    { question: "Tabular data is organized in:", options: ["Rows and columns", "Circles", "Random order", "Graphs only"], correct: 0, explanation: "Tables = rows (records) × columns (attributes)." },
    { question: "A foreign key links:", options: ["Two databases", "A column to a primary key in another table", "Two rows", "Two files"], correct: 1, explanation: "Foreign keys establish relationships between tables." },
  ],
  "s1-dv-3": [
    { question: "Bar graphs are best for:", options: ["Trends over time", "Comparing categories", "Proportions", "Correlations"], correct: 1, explanation: "Bar graphs excel at comparing discrete categories." },
    { question: "Histograms show:", options: ["Categorical data", "Distribution of continuous data", "Relationships", "Time series"], correct: 1, explanation: "Histograms display frequency distributions." },
    { question: "Scatter plots show:", options: ["Categories", "Relationships between two variables", "Proportions", "Hierarchies"], correct: 1, explanation: "Scatter plots reveal relationships between continuous variables." },
    { question: "A pie chart is best for:", options: ["Trends", "Parts of a whole", "Comparing many categories", "Correlations"], correct: 1, explanation: "Pie charts show proportional composition." },
    { question: "Bar charts vs histograms: the key difference is:", options: ["No difference", "Histograms have gaps", "Bar charts have gaps between bars", "Colors"], correct: 2, explanation: "Histograms have no gaps (continuous data); bar charts do." },
  ],
  "s1-dv-4": [
    { question: "An upward trend in a line chart means:", options: ["Decrease over time", "Increase over time", "No change", "Random data"], correct: 1, explanation: "Upward slope = values increasing over time." },
    { question: "A cluster in a scatter plot suggests:", options: ["Random data", "Groups of similar points", "No relationship", "Error"], correct: 1, explanation: "Clusters indicate natural groupings in data." },
    { question: "What can you NOT conclude from a visualization alone?", options: ["Trends", "Causation", "Patterns", "Distribution"], correct: 1, explanation: "Visualizations show patterns but can't prove causation." },
    { question: "Misleading graphs often:", options: ["Start Y-axis at zero", "Truncate the Y-axis", "Label all axes", "Use consistent scales"], correct: 1, explanation: "Truncated Y-axis exaggerates differences." },
    { question: "The line of best fit:", options: ["Passes through all points", "Minimizes squared distances", "Connects first and last", "Is always horizontal"], correct: 1, explanation: "Least squares regression minimizes sum of squared residuals." },
  ],
  "s1-dv-5": [
    { question: "A dual-axis chart should be used:", options: ["Always", "With caution, can mislead", "Never", "Only for pie charts"], correct: 1, explanation: "Dual-axis charts can create false impressions of correlation." },
    { question: "Best chart for time trends:", options: ["Pie chart", "Line chart", "Scatter plot", "Tree map"], correct: 1, explanation: "Line charts are ideal for showing change over time." },
    { question: "Stacked bar charts show:", options: ["Only totals", "Parts of a whole within categories", "Correlations", "Time trends"], correct: 1, explanation: "Stacked bars show sub-category contributions." },
    { question: "When comparing distributions, use:", options: ["Pie charts", "Box plots", "Bar charts", "ER diagrams"], correct: 1, explanation: "Box plots compare distributions showing median, IQR, and outliers." },
    { question: "Logarithmic scale is useful when:", options: ["Data is small", "Data spans many orders of magnitude", "All values are equal", "For categorical data"], correct: 1, explanation: "Log scale compresses large ranges for better visualization." },
  ],

  // ── Learning Fundamentals ──
  "s1-lf-1": [
    { question: "ML is a subset of:", options: ["Statistics", "Artificial Intelligence", "Databases", "Networking"], correct: 1, explanation: "ML is a branch of AI that learns from data." },
    { question: "The input to an ML model is called:", options: ["Labels", "Features", "Weights", "Predictions"], correct: 1, explanation: "Features are input variables for the model." },
    { question: "Supervised learning requires:", options: ["No data", "Labeled data", "Only images", "Unlabeled data"], correct: 1, explanation: "Supervised learning uses labeled examples." },
    { question: "A model 'learns':", options: ["New data", "Patterns in data", "Languages", "Hardware"], correct: 1, explanation: "ML models learn patterns and relationships from data." },
    { question: "Which is NOT a type of ML?", options: ["Supervised", "Unsupervised", "Reinforcement", "Structural"], correct: 3, explanation: "The three types: supervised, unsupervised, reinforcement." },
  ],
  "s1-lf-2": [
    { question: "Why split data into train/test?", options: ["Save storage", "Evaluate generalization", "Faster training", "Not necessary"], correct: 1, explanation: "Test set evaluates how well the model generalizes." },
    { question: "Typical train-test split:", options: ["50-50", "80-20", "99-1", "10-90"], correct: 1, explanation: "80% training, 20% testing is standard." },
    { question: "Using test data during training causes:", options: ["Better accuracy", "Data leakage", "Faster training", "Simpler models"], correct: 1, explanation: "Data leakage gives unrealistic performance estimates." },
    { question: "Cross-validation helps:", options: ["Increase data", "Get reliable estimates", "Speed training", "Remove features"], correct: 1, explanation: "CV uses multiple splits for robust evaluation." },
    { question: "Validation set is for:", options: ["Final evaluation", "Hyperparameter tuning", "Data cleaning", "Feature extraction"], correct: 1, explanation: "Validation helps tune hyperparameters without touching test data." },
  ],
  "s1-lf-3": [
    { question: "A loss function measures:", options: ["Speed", "How wrong predictions are", "Features", "Dataset size"], correct: 1, explanation: "Loss quantifies prediction error." },
    { question: "MSE stands for:", options: ["Maximum Standard Error", "Mean Squared Error", "Minimum Sum Error", "Mean Standard Estimation"], correct: 1, explanation: "MSE = Σ(yᵢ-ŷᵢ)²/n." },
    { question: "Lower loss means:", options: ["Worse model", "Better predictions", "More features needed", "Overfitting"], correct: 1, explanation: "Lower loss = predictions closer to actual values." },
    { question: "Cross-entropy loss is for:", options: ["Regression", "Classification", "Clustering", "Dimensionality reduction"], correct: 1, explanation: "Cross-entropy measures class distribution difference." },
    { question: "Gradient descent minimizes loss by:", options: ["Adding data", "Adjusting weights iteratively", "Removing features", "Increasing LR infinitely"], correct: 1, explanation: "GD updates weights to reduce loss." },
  ],
  "s1-lf-4": [
    { question: "Overfitting means:", options: ["Good test performance", "Model memorizes training data", "Model is too simple", "Training data is too large"], correct: 1, explanation: "Overfitting: great on training, poor on test." },
    { question: "Underfitting means:", options: ["Too complex", "Model misses patterns", "Perfect generalization", "Too much data"], correct: 1, explanation: "Underfitting: model is too simple to capture patterns." },
    { question: "High bias typically means:", options: ["Overfitting", "Underfitting", "Perfect model", "High variance"], correct: 1, explanation: "High bias = underfitting (too simple)." },
    { question: "The bias-variance tradeoff means:", options: ["Both can be zero", "Reducing one tends to increase the other", "They're equal", "Neither matters"], correct: 1, explanation: "Balancing bias and variance is key to good generalization." },
    { question: "To fix overfitting:", options: ["Add more features", "Get more data or regularize", "Make model more complex", "Remove all validation"], correct: 1, explanation: "More data, regularization, simpler model, or dropout." },
  ],

  // ── Evaluation Metrics ──
  "s1-em-1": [
    { question: "MAE stands for:", options: ["Maximum Absolute Error", "Mean Absolute Error", "Minimum Average Error", "Mean Adjusted Error"], correct: 1, explanation: "MAE = Σ|yᵢ-ŷᵢ|/n." },
    { question: "RMSE is:", options: ["Mean of errors", "√MSE", "Max error", "Min error"], correct: 1, explanation: "RMSE = √(MSE), in same units as target." },
    { question: "R² = 1 means:", options: ["Worst model", "Perfect prediction", "Random prediction", "Overfitting"], correct: 1, explanation: "R²=1: model explains all variance." },
    { question: "R² = 0 means:", options: ["Perfect", "No better than predicting the mean", "Negative model", "Overfitting"], correct: 1, explanation: "R²=0: model is no better than just using the mean." },
    { question: "MSE penalizes __ errors more:", options: ["Small", "Large", "All equally", "Negative"], correct: 1, explanation: "Squaring makes large errors disproportionately costly." },
  ],
  "s1-em-2": [
    { question: "Accuracy = ?", options: ["TP/(TP+FP)", "(TP+TN)/Total", "TP/(TP+FN)", "TN/Total"], correct: 1, explanation: "Accuracy = correct predictions / total predictions." },
    { question: "Precision = ?", options: ["TP/(TP+FP)", "(TP+TN)/Total", "TP/(TP+FN)", "TN/(TN+FP)"], correct: 0, explanation: "Precision: of predicted positives, how many are correct." },
    { question: "Recall = ?", options: ["TP/(TP+FP)", "TP/(TP+FN)", "(TP+TN)/Total", "TN/(TN+FP)"], correct: 1, explanation: "Recall: of actual positives, how many found." },
    { question: "F1-Score is the __ of precision and recall:", options: ["Sum", "Average", "Harmonic mean", "Product"], correct: 2, explanation: "F1 = 2×P×R/(P+R)." },
    { question: "When is accuracy misleading?", options: ["Balanced data", "Imbalanced data", "Small data", "Large data"], correct: 1, explanation: "With imbalanced classes, accuracy hides poor minority-class performance." },
  ],
  "s1-em-3": [
    { question: "ROC curve plots:", options: ["Precision vs Recall", "TPR vs FPR", "Accuracy vs Loss", "Features vs Weights"], correct: 1, explanation: "ROC: True Positive Rate vs False Positive Rate." },
    { question: "AUC = 1.0 means:", options: ["Worst", "Perfect classifier", "Random", "Overfitting"], correct: 1, explanation: "AUC=1.0 = perfect class separation." },
    { question: "AUC = 0.5 means:", options: ["Perfect", "Random guessing", "Good", "Overfitting"], correct: 1, explanation: "AUC=0.5 = no discrimination ability." },
    { question: "True Positive means:", options: ["Predicted +, actually −", "Predicted +, actually +", "Predicted −, actually +", "Predicted −, actually −"], correct: 1, explanation: "TP: correctly predicted positive." },
    { question: "A confusion matrix shows:", options: ["Feature correlations", "TP, TN, FP, FN", "Learning curves", "Feature importance"], correct: 1, explanation: "Confusion matrix tabulates all prediction outcomes." },
  ],
  "s1-em-4": [
    { question: "High recall is important when:", options: ["FP is costly", "Missing positives is costly", "Dataset small", "Features many"], correct: 1, explanation: "High recall minimizes false negatives (e.g., cancer detection)." },
    { question: "High precision is important when:", options: ["FN is costly", "FP is costly", "Dataset large", "Features few"], correct: 1, explanation: "High precision minimizes false positives (e.g., spam filter)." },
    { question: "Precision-recall tradeoff means:", options: ["Both always improve together", "Improving one often hurts the other", "They're always equal", "Neither matters"], correct: 1, explanation: "Raising threshold: ↑ precision, ↓ recall." },
    { question: "For imbalanced data, prefer:", options: ["Accuracy", "F1 Score", "Only precision", "Only recall"], correct: 1, explanation: "F1 balances precision and recall for imbalanced datasets." },
    { question: "K-fold cross-validation uses K =", options: ["1 always", "Usually 5 or 10", "100", "Equal to dataset size"], correct: 1, explanation: "K=5 or K=10 are most common choices." },
  ],

  // ── Supervised Learning ──
  "s1-sl-1": [
    { question: "Linear regression predicts:", options: ["Categories", "Continuous values", "Clusters", "Rankings"], correct: 1, explanation: "Linear regression outputs continuous numbers." },
    { question: "y = mx + b: 'm' is the:", options: ["Y-intercept", "Slope", "Error", "Feature"], correct: 1, explanation: "m = slope, rate of change." },
    { question: "Least squares minimizes:", options: ["Number of points", "Sum of squared residuals", "Features", "Training time"], correct: 1, explanation: "Least squares: min Σ(yᵢ-ŷᵢ)²." },
    { question: "Adding features always improves regression?", options: ["True", "False", "Only with big data", "Only with small data"], correct: 1, explanation: "More features can overfit." },
    { question: "The normal equation gives:", options: ["Approximate solution", "Exact closed-form solution", "No solution", "Only for 1D"], correct: 1, explanation: "Normal equation: w = (XᵀX)⁻¹Xᵀy — exact solution." },
  ],
  "s1-sl-2": [
    { question: "A linear classifier separates classes using:", options: ["A curve", "A straight line/hyperplane", "A circle", "Random selection"], correct: 1, explanation: "Linear classifiers use a linear decision boundary." },
    { question: "The decision boundary in 2D is:", options: ["A point", "A line", "A plane", "A volume"], correct: 1, explanation: "In 2D feature space, the boundary is a line." },
    { question: "Points on the 'wrong side' of the boundary are:", options: ["Always correct", "Misclassified", "Outliers", "Features"], correct: 1, explanation: "Points on the wrong side are classification errors." },
    { question: "A linear classifier cannot solve:", options: ["AND problem", "OR problem", "XOR problem", "Both AND and OR"], correct: 2, explanation: "XOR is not linearly separable — requires nonlinear boundary." },
    { question: "The weight vector determines:", options: ["Data size", "Orientation of the decision boundary", "Number of classes", "Training speed"], correct: 1, explanation: "Weights define the direction/orientation of the boundary." },
  ],
  "s1-sl-3": [
    { question: "K in K-NN represents:", options: ["Features", "Nearest neighbors", "Classes", "Iterations"], correct: 1, explanation: "K = number of nearest neighbors consulted." },
    { question: "K=1 in K-NN causes:", options: ["Smoothing", "Overfitting", "Underfitting", "Ignoring data"], correct: 1, explanation: "K=1 memorizes training data." },
    { question: "K-NN uses which distance?", options: ["Correlation", "Euclidean", "Variance", "Entropy"], correct: 1, explanation: "Typically Euclidean: √Σ(xᵢ-yᵢ)²." },
    { question: "K-NN is a 'lazy learner' because:", options: ["It's slow", "No training phase", "Needs lots of data", "Inaccurate"], correct: 1, explanation: "K-NN stores all data; computation happens at prediction time." },
    { question: "Increasing K generally:", options: ["Increases complexity", "Smooths the boundary", "Speeds prediction", "Reduces data needed"], correct: 1, explanation: "Higher K = smoother, less complex boundaries." },
  ],
  "s1-sl-4": [
    { question: "Decision trees split using:", options: ["Random", "Information gain / feature thresholds", "Always first feature", "User rules only"], correct: 1, explanation: "Trees find splits maximizing information gain." },
    { question: "Leaf nodes represent:", options: ["Features", "Splits", "Final predictions", "Training data"], correct: 2, explanation: "Leaf nodes contain the final class/value prediction." },
    { question: "A very deep tree likely:", options: ["Underfits", "Overfits", "Is perfect", "Ignores data"], correct: 1, explanation: "Deep trees memorize training data → overfitting." },
    { question: "Pruning a tree:", options: ["Adds branches", "Removes unnecessary branches", "Adds features", "Increases depth"], correct: 1, explanation: "Pruning removes branches that don't improve generalization." },
    { question: "Entropy measures:", options: ["Speed", "Uncertainty/impurity in data", "Accuracy", "Size"], correct: 1, explanation: "High entropy = high uncertainty = mixed classes." },
  ],
  "s1-sl-5": [
    { question: "For predicting house prices, use:", options: ["K-NN classifier", "Linear regression", "K-Means", "PageRank"], correct: 1, explanation: "House price is continuous → regression." },
    { question: "For spam detection, use:", options: ["Linear regression", "Classification (e.g., Naive Bayes)", "PCA", "K-Means"], correct: 1, explanation: "Spam/not-spam is binary classification." },
    { question: "K-NN works best with:", options: ["Very high dimensional data", "Scaled features and moderate dimensions", "Categorical only", "No features"], correct: 1, explanation: "K-NN needs scaled features; high dimensions cause curse of dimensionality." },
    { question: "Decision trees are good because:", options: ["Always most accurate", "Easy to interpret", "Never overfit", "Need no data"], correct: 1, explanation: "Trees produce human-readable if-then rules." },
    { question: "Ensemble methods (Random Forest) help trees by:", options: ["Making one big tree", "Combining many trees to reduce overfitting", "Removing all features", "Using one sample"], correct: 1, explanation: "Ensembles aggregate many trees for robust predictions." },
  ],

  // ── Unsupervised Learning ──
  "s1-ul-1": [
    { question: "K-Means requires specifying:", options: ["Labels", "K (number of clusters)", "Learning rate", "Loss function"], correct: 1, explanation: "You must choose K before running." },
    { question: "K-Means assigns points to:", options: ["Random clusters", "Nearest centroid", "Alphabetical order", "Time order"], correct: 1, explanation: "Each point → nearest centroid." },
    { question: "Centroids are:", options: ["Edge points", "Mean of cluster points", "Outliers", "Features"], correct: 1, explanation: "Centroid = average position of all cluster members." },
    { question: "K-Means converges when:", options: ["K changes", "Centroids stop moving significantly", "All in one cluster", "After 10 iterations"], correct: 1, explanation: "Algorithm stops when centroids stabilize." },
    { question: "Elbow method helps choose:", options: ["Learning rate", "Optimal K", "Best features", "Loss function"], correct: 1, explanation: "Plot distortion vs K to find the 'elbow'." },
  ],
  "s1-ul-2": [
    { question: "PCA is for:", options: ["Classification", "Dimensionality reduction", "Clustering", "Regression"], correct: 1, explanation: "PCA reduces features while preserving maximum variance." },
    { question: "Principal components capture:", options: ["Random directions", "Directions of maximum variance", "Mean", "Outliers"], correct: 1, explanation: "Each PC = direction of maximum remaining variance." },
    { question: "PCA components are:", options: ["Parallel", "Orthogonal", "Random", "Identical"], correct: 1, explanation: "PCs are perpendicular to each other." },
    { question: "First PC has:", options: ["Least variance", "Most variance", "Zero variance", "Average variance"], correct: 1, explanation: "Components ordered by decreasing variance explained." },
    { question: "PCA is useful when:", options: ["Few features", "Many correlated features", "Labels available", "Data is categorical"], correct: 1, explanation: "PCA removes redundancy in high-dimensional correlated data." },
  ],
  "s1-ul-3": [
    { question: "Hierarchical clustering creates:", options: ["Fixed K clusters", "A dendrogram", "Only 2 clusters", "Random groups"], correct: 1, explanation: "It produces a tree-like dendrogram." },
    { question: "Agglomerative starts with:", options: ["All in one cluster", "Each point as own cluster", "K random clusters", "No clusters"], correct: 1, explanation: "Bottom-up: starts with individual points, merges them." },
    { question: "Cutting the dendrogram determines:", options: ["Feature importance", "Number of clusters", "Learning rate", "Loss"], correct: 1, explanation: "Cut height → number of clusters." },
    { question: "Advantage over K-Means:", options: ["Faster", "No need to specify K upfront", "Only numerical", "Simpler"], correct: 1, explanation: "No pre-specified K required." },
    { question: "Linkage criteria defines:", options: ["Feature selection", "How cluster distances are measured", "Iterations", "Learning rate"], correct: 1, explanation: "Single, complete, average linkage = different distance measures." },
  ],
  "s1-ul-4": [
    { question: "Silhouette score ranges:", options: ["0 to 1", "-1 to 1", "0 to ∞", "-∞ to ∞"], correct: 1, explanation: "Silhouette ∈ [-1,1]. Higher = better clustering." },
    { question: "DBSCAN doesn't require:", options: ["Any parameters", "Pre-specifying K", "Data", "Distance metric"], correct: 1, explanation: "DBSCAN finds clusters by density, no K needed." },
    { question: "Inertia in K-Means measures:", options: ["Speed", "Sum of distances to centroids", "Number of features", "Accuracy"], correct: 1, explanation: "Inertia = sum of squared distances to nearest centroid." },
    { question: "Good clustering has:", options: ["High intra-cluster and low inter-cluster distance", "Low intra-cluster and high inter-cluster distance", "Equal distances everywhere", "Random assignment"], correct: 1, explanation: "Tight clusters far apart = good clustering." },
    { question: "K-Means++ improves:", options: ["Convergence speed", "Initial centroid selection", "Number of clusters", "Feature selection"], correct: 1, explanation: "K-Means++ spreads initial centroids for better results." },
  ],

  // ── Probabilistic Models ──
  "s1-pm-1": [
    { question: "Naive Bayes is 'naive' because:", options: ["Data always correct", "Features assumed independent", "Labels don't matter", "Features identical"], correct: 1, explanation: "The 'naive' assumption: all features conditionally independent." },
    { question: "Naive Bayes is based on:", options: ["Decision trees", "Bayes' Theorem", "Gradient descent", "K-Means"], correct: 1, explanation: "It applies P(C|X) ∝ P(X|C)·P(C)." },
    { question: "NB works well for:", options: ["Image generation", "Text classification", "Self-driving", "Video editing"], correct: 1, explanation: "Excellent for spam, sentiment, document classification." },
    { question: "Despite its assumption, NB:", options: ["Never works", "Often performs well", "Is always best", "Can't handle text"], correct: 1, explanation: "NB often achieves surprisingly good results." },
    { question: "Gaussian NB assumes features follow:", options: ["Uniform", "Normal distribution", "Poisson", "None"], correct: 1, explanation: "Gaussian NB models each feature as N(μ,σ²)." },
  ],
  "s1-pm-2": [
    { question: "Laplace smoothing adds:", options: ["More features", "α to all counts", "More data points", "Noise to predictions"], correct: 1, explanation: "Adding α prevents zero probabilities." },
    { question: "Without smoothing, if a word never appears in a class:", options: ["P=1", "P=0, breaking the model", "P=0.5", "P=undefined"], correct: 1, explanation: "Zero count → zero probability → entire product becomes 0." },
    { question: "Multinomial NB is best for:", options: ["Continuous features", "Word count/frequency data", "Images", "Audio"], correct: 1, explanation: "Multinomial NB handles word count features." },
    { question: "P(spam|\"free meeting\") ∝ P(spam)×P(\"free\"|spam)×P(\"meeting\"|spam) uses:", options: ["Chain rule only", "Naive independence assumption", "No assumptions", "PCA"], correct: 1, explanation: "The product form assumes feature independence given the class." },
    { question: "NB's main advantage:", options: ["Complex model", "Fast training and prediction", "Handles correlations", "Needs large data"], correct: 1, explanation: "NB is extremely fast with small memory footprint." },
  ],

  // ── Famous Algorithms ──
  "s1-fam-1": [
    { question: "PageRank was developed by:", options: ["Facebook", "Google founders", "Microsoft", "IBM"], correct: 1, explanation: "Larry Page & Sergey Brin at Stanford." },
    { question: "PageRank measures:", options: ["Page speed", "Importance via link structure", "Content quality", "Image count"], correct: 1, explanation: "Importance flows through links." },
    { question: "Many incoming links from important pages means:", options: ["Low rank", "High PageRank", "No rank", "Negative rank"], correct: 1, explanation: "More quality inlinks = higher PageRank." },
    { question: "Damping factor (d=0.85) models:", options: ["Page speed", "Probability surfer follows a link", "Image loading", "CSS rendering"], correct: 1, explanation: "d = probability of following a link vs jumping randomly." },
    { question: "PageRank applies to:", options: ["Only websites", "Any graph/network", "Only social media", "Only papers"], correct: 1, explanation: "Works on any graph: social, citation, web." },
  ],
  "s1-fam-2": [
    { question: "PageRank iteration starts with:", options: ["All pages PR=0", "All pages PR=1/N", "Random values", "Only home page PR=1"], correct: 1, explanation: "Initialize all pages with equal PR = 1/N." },
    { question: "Without damping factor, PageRank can get stuck in:", options: ["Dead ends", "Spider traps", "Both dead ends and spider traps", "Nothing"], correct: 2, explanation: "Damping prevents both dangling nodes and spider traps." },
    { question: "PR(A) = (1-d)/N + d × Σ PR(Tᵢ)/L(Tᵢ). What is L(Tᵢ)?", options: ["Links to A", "Outgoing links from Tᵢ", "Total pages", "Damping factor"], correct: 1, explanation: "L(Tᵢ) = number of outgoing links from page Tᵢ." },
    { question: "PageRank converges after typically:", options: ["1 iteration", "50-100 iterations", "1000+ iterations", "Never"], correct: 1, explanation: "Power iteration typically converges in 50-100 steps." },
    { question: "PageRank is the dominant eigenvector of:", options: ["Feature matrix", "Modified link matrix", "Identity matrix", "Covariance matrix"], correct: 1, explanation: "It's the principal eigenvector of the stochastic link matrix." },
  ],
  "s1-fam-3": [
    { question: "TF-IDF stands for:", options: ["Total Feature-Inverse Data Format", "Term Frequency-Inverse Document Frequency", "Text Filter-Input Data Function", "Training Feature-Input Data"], correct: 1, explanation: "TF-IDF measures word importance in documents." },
    { question: "High TF-IDF means:", options: ["Word common everywhere", "Word important in specific document", "Stop word", "Misspelled"], correct: 1, explanation: "Frequent in this doc + rare overall = high TF-IDF." },
    { question: "'the' typically has:", options: ["High TF-IDF", "Low TF-IDF", "No TF-IDF", "Negative TF-IDF"], correct: 1, explanation: "Common words appear everywhere → low IDF → low TF-IDF." },
    { question: "IDF decreases when:", options: ["Term is rare", "Term appears in many documents", "Term is long", "Term is capitalized"], correct: 1, explanation: "IDF = log(N/df). More docs containing term → lower IDF." },
    { question: "TF-IDF is used in:", options: ["Image recognition", "Search engines & text analysis", "Audio processing", "Video streaming"], correct: 1, explanation: "Fundamental in information retrieval and NLP." },
  ],
  "s1-fam-4": [
    { question: "TF('cat', doc) where doc has 6 words and 'cat' appears twice:", options: ["2", "1/3", "2/6 = 0.333", "6/2 = 3"], correct: 2, explanation: "TF = count/total = 2/6 ≈ 0.333." },
    { question: "IDF of a term in 5 of 1000 docs:", options: ["log(200)", "log(1000/5)=log(200)≈2.3", "5/1000", "1000/5"], correct: 1, explanation: "IDF = log(N/df) = log(1000/5) ≈ 2.3." },
    { question: "Cosine similarity of identical docs:", options: ["0", "1", "-1", "Undefined"], correct: 1, explanation: "cos(0°) = 1 for identical direction vectors." },
    { question: "TF-IDF of a word appearing in EVERY document:", options: ["Very high", "Zero", "Negative", "Depends on TF"], correct: 1, explanation: "IDF = log(N/N) = log(1) = 0, so TF-IDF = 0." },
    { question: "To find the most distinguishing word in a document, pick:", options: ["Highest TF", "Highest TF-IDF", "Lowest TF-IDF", "Most common word"], correct: 1, explanation: "Highest TF-IDF = most distinctive to that document." },
  ],

  // ═══════════════════════════════════════════════════════
  //  STAGE 2 — questions for new exercise IDs
  // ═══════════════════════════════════════════════════════

  "s2-clt-1": [
    { question: "Next in: 1, 4, 9, 16, 25, ?", options: ["30", "36", "49", "32"], correct: 1, explanation: "Perfect squares: 6² = 36." },
    { question: "Pattern: 2, 3, 5, 7, 11, ?", options: ["12", "13", "14", "15"], correct: 1, explanation: "Prime numbers: next prime after 11 is 13." },
    { question: "If △=3, □=5, then △□△ =", options: ["11", "353", "335", "13"], correct: 0, explanation: "3+5+3 = 11 (if additive) or context-dependent." },
    { question: "Matrix: row1[1,2,3], row2[4,?,6], row3[7,8,9]. Missing?", options: ["5", "4", "6", "3"], correct: 0, explanation: "Sequential: 1-9 in order → missing is 5." },
    { question: "If APPLE = 50, BANANA = 42, then CAT = ?", options: ["24", "27", "30", "21"], correct: 0, explanation: "Sum of letter positions: C(3)+A(1)+T(20)=24." },
  ],
  "s2-clt-2": [
    { question: "In a room of 5 people who all shake hands, total handshakes?", options: ["5", "10", "20", "25"], correct: 1, explanation: "C(5,2) = 10 handshakes." },
    { question: "A∧(B∨C) is equivalent to:", options: ["(A∧B)∨C", "(A∧B)∨(A∧C)", "A∨(B∧C)", "(A∨B)∧(A∨C)"], correct: 1, explanation: "Distributive law: A∧(B∨C) = (A∧B)∨(A∧C)." },
    { question: "Pigeonhole: 13 people, at least how many share a birth month?", options: ["1", "2", "3", "13"], correct: 1, explanation: "13 people, 12 months → at least ⌈13/12⌉ = 2 share a month." },
    { question: "If P→Q and Q→R, then:", options: ["R→P", "P→R", "¬P→¬R", "R→Q"], correct: 1, explanation: "Hypothetical syllogism: P→Q, Q→R ⊢ P→R." },
    { question: "A knight always tells truth, a knave always lies. A says 'I am a knave.' A is:", options: ["Knight", "Knave", "Neither — this is a paradox", "Both"], correct: 2, explanation: "A knight can't say they're a knave (lie). A knave can't say it either (truth). Paradox." },
  ],

  "s2-fa-1": [
    { question: "If f(x) = x³-3x, f'(x) = ?", options: ["3x²-3", "x²-3", "3x-3", "x³"], correct: 0, explanation: "Power rule: 3x²-3." },
    { question: "f(g(x)) where f(x)=2x, g(x)=x+1, at x=3:", options: ["7", "8", "9", "6"], correct: 1, explanation: "g(3)=4, f(4)=8." },
    { question: "Factor Theorem: if f(2)=0, then:", options: ["x=2 is max", "(x-2) is a factor", "f has no roots", "x=2 is undefined"], correct: 1, explanation: "f(a)=0 ⟹ (x-a) divides f(x)." },
    { question: "Roots of x³-6x²+11x-6 include:", options: ["1, 2, 3", "1, 2, 4", "-1, -2, -3", "0, 1, 2"], correct: 0, explanation: "f(1)=0, f(2)=0, f(3)=0." },
    { question: "Remainder when x³+2x²-x-2 is divided by (x-1):", options: ["0", "2", "-2", "4"], correct: 0, explanation: "f(1) = 1+2-1-2 = 0. So (x-1) is a factor." },
  ],
  "s2-fa-2": [
    { question: "Telescoping sum: Σ(1/k - 1/(k+1)) from k=1 to n =", options: ["1-1/(n+1)", "n", "1/n", "n/(n+1)"], correct: 0, explanation: "Terms cancel: (1-1/2)+(1/2-1/3)+...+(1/n-1/(n+1)) = 1-1/(n+1)." },
    { question: "Jensen's: for convex f, f(E[X]) __ E[f(X)]:", options: ["≥", "≤", "=", "None"], correct: 1, explanation: "For convex f: f(E[X]) ≤ E[f(X)]." },
    { question: "Cauchy-Schwarz gives equality when:", options: ["a=b=0", "aᵢ/bᵢ = constant", "All aᵢ=0", "Random values"], correct: 1, explanation: "Equality iff vectors are proportional." },
    { question: "Σi³ from 1 to 10 =", options: ["385", "3025", "2025", "55"], correct: 1, explanation: "[10×11/2]² = 55² = 3025." },
    { question: "For x>0, minimum of x + 9/x by AM-GM:", options: ["3", "6", "9", "4.5"], correct: 1, explanation: "AM-GM: x+9/x ≥ 2√9 = 6. Equality at x=3." },
  ],

  "s2-pr-1": [
    { question: "P(A|B) × P(B) = ?", options: ["P(B|A)", "P(A∩B)", "P(A∪B)", "P(A)+P(B)"], correct: 1, explanation: "By definition: P(A|B)P(B) = P(A∩B)." },
    { question: "Three tests: each 90% accurate, all positive. P(disease) if prevalence=2%:", options: ["Much higher than single test", "Same as single test", "Lower than single test", "Exactly 90%"], correct: 0, explanation: "Multiple positive tests dramatically increase posterior probability." },
    { question: "Total Probability: P(A) = Σ P(A|Bᵢ)P(Bᵢ) requires Bᵢ to be:", options: ["Independent", "A partition of sample space", "Equal probability", "Mutually exclusive only"], correct: 1, explanation: "Bᵢ must partition the sample space (mutually exclusive + exhaustive)." },
    { question: "Posterior odds = Prior odds × ?", options: ["Evidence", "Likelihood ratio", "P(B)", "1"], correct: 1, explanation: "Posterior odds = prior odds × likelihood ratio P(B|A)/P(B|¬A)." },
    { question: "In Bayesian updating, the posterior becomes the __ for the next update:", options: ["Likelihood", "Evidence", "Prior", "Margin"], correct: 2, explanation: "Sequential Bayesian updating: each posterior becomes the next prior." },
  ],
  "s2-pr-2": [
    { question: "Birthday problem: P(shared birthday) among 23 people is about:", options: ["10%", "30%", "50%", "70%"], correct: 2, explanation: "The famous result: ~50% chance with just 23 people." },
    { question: "Monty Hall: switching gives P(win) =", options: ["1/3", "1/2", "2/3", "1"], correct: 2, explanation: "Switching wins 2/3 of the time." },
    { question: "If X~Bernoulli(p), E[X] =", options: ["p", "p²", "1-p", "p(1-p)"], correct: 0, explanation: "E[X] = 1×p + 0×(1-p) = p." },
    { question: "Var(Bernoulli(p)) =", options: ["p", "p²", "p(1-p)", "1-p"], correct: 2, explanation: "Var = E[X²]-(E[X])² = p-p² = p(1-p)." },
    { question: "P(at least one head in 3 flips) =", options: ["3/8", "7/8", "1/2", "1/8"], correct: 1, explanation: "1 - P(no heads) = 1 - (1/2)³ = 7/8." },
  ],

  "s2-st-1": [
    { question: "For [2,4,4,4,5,7,9], the standard deviation is approximately:", options: ["1.5", "2.0", "2.1", "3.0"], correct: 2, explanation: "Mean=5, variance≈4.57, SD≈2.14." },
    { question: "Coefficient of variation (CV) =", options: ["Mean/SD", "SD/Mean × 100%", "Variance/Mean", "SD²"], correct: 1, explanation: "CV = (SD/Mean) × 100%, measures relative variability." },
    { question: "Standardizing data (z-score) gives mean = __ and SD = __:", options: ["0 and 1", "1 and 0", "Mean and SD", "0 and 0"], correct: 0, explanation: "Z-scored data: mean=0, SD=1." },
    { question: "Weighted mean gives more importance to:", options: ["Larger values", "Values with higher weights", "First values", "Random values"], correct: 1, explanation: "Weighted mean = Σwᵢxᵢ/Σwᵢ." },
    { question: "Robust estimators are resistant to:", options: ["Normal data", "Outliers", "Large samples", "Categorical data"], correct: 1, explanation: "Median and IQR are robust to outliers; mean and SD are not." },
  ],
  "s2-st-2": [
    { question: "Simpson's paradox occurs when:", options: ["All correlations are positive", "A trend reverses when groups are combined", "Data is normally distributed", "Sample size is too small"], correct: 1, explanation: "Aggregated data shows opposite trend vs. subgroups." },
    { question: "A lurking variable is:", options: ["A visible feature", "An unmeasured variable affecting both X and Y", "The dependent variable", "The mean"], correct: 1, explanation: "Lurking/confounding variable creates spurious correlations." },
    { question: "Regression toward the mean means:", options: ["Extreme values become more extreme", "Extreme values tend toward average on remeasurement", "Mean always increases", "Data becomes normally distributed"], correct: 1, explanation: "Extreme observations tend to be less extreme on repeat." },
    { question: "Ecological fallacy is:", options: ["Applying group statistics to individuals", "Group size error", "Missing data", "Sampling bias"], correct: 0, explanation: "Inferring individual behavior from aggregate group data." },
    { question: "Spearman's correlation measures:", options: ["Linear relationship", "Monotonic (rank) relationship", "Causation", "Normal distribution"], correct: 1, explanation: "Spearman's rank correlation captures monotonic relationships." },
  ],

  "s2-la-1": [
    { question: "(AB)ᵀ = ?", options: ["AᵀBᵀ", "BᵀAᵀ", "AB", "(BA)ᵀ"], correct: 1, explanation: "Transpose of product reverses order: (AB)ᵀ = BᵀAᵀ." },
    { question: "(AB)⁻¹ = ?", options: ["A⁻¹B⁻¹", "B⁻¹A⁻¹", "(BA)⁻¹", "AB"], correct: 1, explanation: "Inverse of product reverses: (AB)⁻¹ = B⁻¹A⁻¹." },
    { question: "A symmetric matrix satisfies:", options: ["A = -A", "A = Aᵀ", "A = A⁻¹", "det(A) = 0"], correct: 1, explanation: "Symmetric: A equals its own transpose." },
    { question: "An orthogonal matrix satisfies:", options: ["AᵀA = 0", "AᵀA = I", "A = Aᵀ", "det(A) = 0"], correct: 1, explanation: "Orthogonal: AᵀA = AAᵀ = I." },
    { question: "det(kA) for n×n matrix A:", options: ["k·det(A)", "kⁿ·det(A)", "det(A)/k", "k²·det(A)"], correct: 1, explanation: "Each of n rows multiplied by k: det(kA) = kⁿ·det(A)." },
  ],
  "s2-la-2": [
    { question: "det([[1,2],[3,4]]) = ?", options: ["2", "-2", "10", "-10"], correct: 1, explanation: "1×4 - 2×3 = 4-6 = -2." },
    { question: "Cramer's rule uses:", options: ["Eigenvalues", "Determinants to solve Ax=b", "Gradient descent", "PCA"], correct: 1, explanation: "Cramer's rule: xᵢ = det(Aᵢ)/det(A)." },
    { question: "A matrix with det=0 is:", options: ["Orthogonal", "Singular (not invertible)", "Symmetric", "Diagonal"], correct: 1, explanation: "det=0 → no inverse → singular." },
    { question: "Row swap changes determinant by:", options: ["Nothing", "Multiplying by -1", "Doubling it", "Making it 0"], correct: 1, explanation: "Each row swap negates the determinant." },
    { question: "Geometric meaning of |det(A)|:", options: ["Trace", "Area/volume scaling factor", "Eigenvalue sum", "Matrix rank"], correct: 1, explanation: "|det| = how much the transformation scales area/volume." },
  ],
  "s2-la-3": [
    { question: "Eigenvalues of [[2,0],[0,3]] are:", options: ["2 and 3", "0 and 5", "1 and 6", "2 and 0"], correct: 0, explanation: "Diagonal matrix: eigenvalues are diagonal entries." },
    { question: "Trace of a matrix equals:", options: ["Product of eigenvalues", "Sum of eigenvalues", "Determinant", "Rank"], correct: 1, explanation: "Trace = sum of diagonal = sum of eigenvalues." },
    { question: "det(A) equals:", options: ["Sum of eigenvalues", "Product of eigenvalues", "Trace", "Rank"], correct: 1, explanation: "det(A) = product of all eigenvalues." },
    { question: "In PCA, eigenvectors of the covariance matrix are:", options: ["Random directions", "Principal components", "Data points", "Labels"], correct: 1, explanation: "PCA uses eigenvectors of covariance as principal directions." },
    { question: "For [[4,1],[2,3]], characteristic equation is:", options: ["λ²-7λ+10=0", "λ²+7λ-10=0", "λ²-7λ-10=0", "λ²+7λ+10=0"], correct: 0, explanation: "det(A-λI) = (4-λ)(3-λ)-2 = λ²-7λ+10 = 0. Eigenvalues: 2,5." },
  ],

  "s2-op-1": [
    { question: "KKT conditions generalize Lagrange multipliers for:", options: ["Equality constraints only", "Inequality constraints", "Unconstrained problems", "Integer programming"], correct: 1, explanation: "KKT handles both equality and inequality constraints." },
    { question: "Dual problem in optimization:", options: ["Is always harder", "Provides bounds on the original problem", "Has no connection to primal", "Only works for linear"], correct: 1, explanation: "Dual provides lower bound (for minimization) on primal." },
    { question: "Strong duality holds when:", options: ["Never", "Problem is convex and Slater's condition met", "Always", "Only for LP"], correct: 1, explanation: "Convex problems with Slater's condition: primal = dual optimal." },
    { question: "Complementary slackness means:", options: ["All constraints active", "Either constraint is active or multiplier is 0", "No constraints exist", "All multipliers positive"], correct: 1, explanation: "λᵢ·gᵢ(x) = 0: either constraint binds or multiplier is zero." },
    { question: "Convex optimization guarantees:", options: ["NP-hardness", "Local optimum = global optimum", "No solution", "Multiple global optima"], correct: 1, explanation: "In convex problems, any local minimum is the global minimum." },
  ],
  "s2-op-2": [
    { question: "Momentum in gradient descent:", options: ["Slows convergence", "Accumulates past gradients to smooth updates", "Increases learning rate", "Removes features"], correct: 1, explanation: "Momentum accelerates GD by averaging past gradient directions." },
    { question: "Adam optimizer combines:", options: ["SGD and dropout", "Momentum and adaptive learning rates", "L1 and L2 regularization", "PCA and K-Means"], correct: 1, explanation: "Adam = adaptive moment estimation (momentum + RMSProp)." },
    { question: "Learning rate decay:", options: ["Increases LR over time", "Decreases LR over time", "Keeps LR constant", "Removes LR"], correct: 1, explanation: "Decay gradually reduces LR for finer convergence." },
    { question: "Batch size in mini-batch GD affects:", options: ["Only memory", "Gradient noise and convergence speed", "Number of features", "Model architecture"], correct: 1, explanation: "Smaller batches → noisier gradients but faster updates." },
    { question: "Vanishing gradient problem occurs in:", options: ["Linear models", "Deep networks with saturating activations", "K-NN", "Decision trees"], correct: 1, explanation: "Deep networks with sigmoid/tanh can have gradients → 0." },
  ],

  "s2-dv-1": [
    { question: "A heatmap is best for showing:", options: ["Time trends", "Magnitude across two dimensions", "Parts of whole", "Single variable distribution"], correct: 1, explanation: "Heatmaps use color intensity to show values across 2D grids." },
    { question: "Violin plots combine:", options: ["Bar and pie", "Box plot and density plot", "Scatter and line", "Histogram and bar"], correct: 1, explanation: "Violin = box plot shape + kernel density estimate." },
    { question: "Small multiples are:", options: ["Tiny charts", "Same chart type repeated for subgroups", "Miniature tables", "Compressed data"], correct: 1, explanation: "Small multiples: same chart for different subsets for comparison." },
    { question: "Dashboard design should prioritize:", options: ["Maximum data density", "Clear hierarchy and key metrics first", "Decorative elements", "3D effects"], correct: 1, explanation: "Good dashboards show most important info prominently." },
    { question: "Color blindness-friendly palettes avoid:", options: ["Blue-yellow", "Red-green distinctions", "Black-white", "All colors"], correct: 1, explanation: "~8% of males have red-green color deficiency." },
  ],
  "s2-dv-2": [
    { question: "Cardinality in ER diagrams describes:", options: ["Column types", "Number of relationships between entities", "Primary keys", "Table size"], correct: 1, explanation: "Cardinality: one-to-one, one-to-many, many-to-many." },
    { question: "A many-to-many relationship requires:", options: ["No extra table", "A junction/bridge table", "Deleting one entity", "Only one foreign key"], correct: 1, explanation: "M:N relationships need an intermediate junction table." },
    { question: "Normalization in databases:", options: ["Adds redundancy", "Reduces redundancy and anomalies", "Deletes data", "Denormalizes"], correct: 1, explanation: "Normalization organizes data to minimize redundancy." },
    { question: "An attribute in ER diagrams is:", options: ["A relationship", "A property of an entity", "A table", "A query"], correct: 1, explanation: "Attributes describe properties (columns) of entities." },
    { question: "A weak entity:", options: ["Has its own primary key", "Depends on another entity for identification", "Is always deleted", "Has no attributes"], correct: 1, explanation: "Weak entities can't be uniquely identified without their owner." },
  ],

  // ── Stage 2 ML ──
  "s2-lf-1": [
    { question: "A model with high train accuracy but low test accuracy is:", options: ["Underfitting", "Overfitting", "Perfect", "Random"], correct: 1, explanation: "Gap between train/test = overfitting." },
    { question: "Dropout randomly sets neurons to 0 to:", options: ["Speed up", "Prevent co-adaptation (regularize)", "Add features", "Increase complexity"], correct: 1, explanation: "Dropout forces redundancy, reducing overfitting." },
    { question: "Early stopping monitors:", options: ["Training loss only", "Validation loss to stop before overfitting", "Test accuracy", "Feature count"], correct: 1, explanation: "Stop training when validation loss starts increasing." },
    { question: "Data augmentation helps by:", options: ["Removing data", "Creating new training examples from existing ones", "Reducing features", "Increasing test set"], correct: 1, explanation: "Augmentation (flips, rotations, etc.) increases effective training size." },
    { question: "Learning curves show:", options: ["Feature importance", "Train/val performance vs training size", "ROC", "Decision boundaries"], correct: 1, explanation: "Learning curves diagnose over/underfitting as data grows." },
  ],
  "s2-lf-2": [
    { question: "Grid search:", options: ["Searches randomly", "Tries all combinations of hyperparameter values", "Uses gradient descent", "Picks one value"], correct: 1, explanation: "Grid search exhaustively evaluates all specified combinations." },
    { question: "Random search advantage over grid search:", options: ["Always finds optimal", "More efficient in high dimensions", "No advantage", "Uses less data"], correct: 1, explanation: "Random search explores more diverse values efficiently." },
    { question: "Hyperparameters are set:", options: ["During training by the model", "Before training by the user", "After testing", "Automatically always"], correct: 1, explanation: "Hyperparameters are chosen before training begins." },
    { question: "Example of a hyperparameter:", options: ["Model weights", "Learning rate", "Training loss", "Predictions"], correct: 1, explanation: "Learning rate, K in K-NN, tree depth are hyperparameters." },
    { question: "Bayesian optimization for hyperparameters:", options: ["Tries random values", "Models the objective function to choose next point intelligently", "Is exhaustive search", "Uses grid"], correct: 1, explanation: "Bayesian optimization uses a surrogate model to guide search." },
  ],
  "s2-lf-3": [
    { question: "L2 regularization adds:", options: ["Sum of |weights|", "Sum of weights²", "Number of features", "Bias term"], correct: 1, explanation: "L2 (Ridge) penalty: λ·Σwᵢ²." },
    { question: "L1 regularization encourages:", options: ["Large weights", "Sparse weights (many zeros)", "Equal weights", "Negative weights"], correct: 1, explanation: "L1 (Lasso) drives some weights exactly to zero → feature selection." },
    { question: "Elastic Net combines:", options: ["L1 and L2", "Dropout and batch norm", "SGD and Adam", "PCA and K-Means"], correct: 0, explanation: "Elastic Net = L1 + L2 regularization." },
    { question: "Higher regularization strength:", options: ["More overfitting", "Simpler model (more regularized)", "No effect", "Faster training"], correct: 1, explanation: "Stronger penalty → simpler model → less overfitting." },
    { question: "Batch normalization:", options: ["Removes data", "Normalizes layer inputs for stable training", "Increases batch size", "Is a regularizer only"], correct: 1, explanation: "BN normalizes each layer's input, stabilizing and speeding training." },
  ],
  "s2-lf-4": [
    { question: "Random Forest is:", options: ["Single tree", "Ensemble of many decision trees", "Neural network", "Clustering method"], correct: 1, explanation: "RF = bagging + random feature subsets of decision trees." },
    { question: "Boosting trains models:", options: ["In parallel", "Sequentially, each fixing previous errors", "Randomly", "Once only"], correct: 1, explanation: "Boosting (e.g., XGBoost) focuses on previous mistakes." },
    { question: "Bagging reduces:", options: ["Bias", "Variance", "Both equally", "Neither"], correct: 1, explanation: "Bagging (Bootstrap AGGregatING) primarily reduces variance." },
    { question: "No Free Lunch theorem states:", options: ["AI is free", "No single algorithm best for all problems", "More data always wins", "Deep learning beats all"], correct: 1, explanation: "Performance depends on the specific problem — no universal best." },
    { question: "Transfer learning uses:", options: ["No pretrained knowledge", "Knowledge from one task for another", "Only fresh training", "Clustering"], correct: 1, explanation: "Transfer learning reuses learned features across tasks." },
  ],

  "s2-em-1": [
    { question: "Raising the classification threshold:", options: ["Increases recall", "Increases precision, decreases recall", "No effect", "Decreases both"], correct: 1, explanation: "Higher threshold → fewer positives → higher precision, lower recall." },
    { question: "PR curve plots:", options: ["TPR vs FPR", "Precision vs Recall", "Accuracy vs Loss", "F1 vs Threshold"], correct: 1, explanation: "PR curve: precision on Y, recall on X." },
    { question: "Average Precision (AP) is:", options: ["Mean accuracy", "Area under PR curve", "Max precision", "Median recall"], correct: 1, explanation: "AP summarizes the PR curve as area underneath." },
    { question: "For highly imbalanced data, prefer __ over ROC:", options: ["Accuracy", "PR curve", "R² score", "Confusion matrix alone"], correct: 1, explanation: "PR curves are more informative for imbalanced datasets." },
    { question: "Macro F1 averages F1 across classes:", options: ["Weighted by class size", "Equally (unweighted)", "Only majority class", "Only minority class"], correct: 1, explanation: "Macro = equal weight per class regardless of size." },
  ],
  "s2-em-2": [
    { question: "Stratified K-fold ensures:", options: ["Random splits", "Each fold has same class distribution", "Larger folds", "No validation"], correct: 1, explanation: "Stratified preserves class proportions in each fold." },
    { question: "Leave-One-Out CV uses K =", options: ["5", "10", "N (dataset size)", "1"], correct: 2, explanation: "LOOCV: each sample is a fold, K = N." },
    { question: "LOOCV is:", options: ["Fast", "Computationally expensive but low bias", "Always best", "Random"], correct: 1, explanation: "N models trained → expensive, but nearly unbiased estimate." },
    { question: "Nested cross-validation is used for:", options: ["Feature selection only", "Unbiased evaluation of tuned models", "Data cleaning", "Visualization"], correct: 1, explanation: "Inner loop tunes hyperparameters, outer loop evaluates." },
    { question: "Repeated K-fold:", options: ["Runs K-fold once", "Runs K-fold multiple times with different splits", "Uses K=1", "Skips validation"], correct: 1, explanation: "Repeated K-fold reduces variance of the performance estimate." },
  ],

  // Stage 2 — Supervised, Unsupervised, Probabilistic, Famous (advanced versions)
  "s2-sl-1": [
    { question: "Multiple linear regression uses:", options: ["One feature", "Multiple features", "No features", "Only categorical"], correct: 1, explanation: "y = w₁x₁ + w₂x₂ + ... + b." },
    { question: "Ridge regression adds __ penalty:", options: ["L1", "L2 (sum of w²)", "No penalty", "Dropout"], correct: 1, explanation: "Ridge = L2 regularization." },
    { question: "Lasso can perform:", options: ["Only regression", "Feature selection (zero weights)", "Clustering", "Nothing extra"], correct: 1, explanation: "L1 drives weights to zero → automatic feature selection." },
    { question: "Multicollinearity means:", options: ["No correlation", "Features highly correlated with each other", "Low variance", "Perfect predictions"], correct: 1, explanation: "Multicollinearity destabilizes regression coefficients." },
    { question: "VIF > 10 suggests:", options: ["No problem", "Problematic multicollinearity", "Perfect model", "Underfitting"], correct: 1, explanation: "Variance Inflation Factor > 10 indicates high collinearity." },
  ],
  "s2-sl-2": [
    { question: "SVM maximizes:", options: ["Accuracy", "Margin between classes", "Number of features", "Training speed"], correct: 1, explanation: "SVM finds the hyperplane with maximum margin." },
    { question: "Support vectors are:", options: ["All data points", "Points closest to the boundary", "Outliers only", "Centroids"], correct: 1, explanation: "Support vectors are the critical points defining the margin." },
    { question: "Kernel trick allows SVM to:", options: ["Use fewer features", "Handle non-linear boundaries", "Speed up training", "Remove outliers"], correct: 1, explanation: "Kernels map to higher dimensions for non-linear separation." },
    { question: "RBF kernel maps to:", options: ["Same space", "Infinite dimensional space", "1D", "Binary space"], correct: 1, explanation: "RBF (Gaussian) kernel implicitly maps to infinite dimensions." },
    { question: "C parameter in SVM controls:", options: ["Kernel type", "Tradeoff between margin width and misclassifications", "Number of features", "Learning rate"], correct: 1, explanation: "High C → narrow margin, fewer errors; Low C → wider margin, more errors." },
  ],
  "s2-sl-3": [
    { question: "Curse of dimensionality means:", options: ["More features always help", "High dimensions make distances meaningless", "Fewer features needed", "Data becomes smaller"], correct: 1, explanation: "In high dimensions, all points become equidistant → K-NN fails." },
    { question: "Weighted K-NN gives more weight to:", options: ["Farther neighbors", "Closer neighbors", "All equal", "Random neighbors"], correct: 1, explanation: "Weight by 1/distance: closer neighbors matter more." },
    { question: "Manhattan distance formula:", options: ["√Σ(xᵢ-yᵢ)²", "Σ|xᵢ-yᵢ|", "max|xᵢ-yᵢ|", "Σ(xᵢ-yᵢ)²"], correct: 1, explanation: "L1/Manhattan: sum of absolute differences." },
    { question: "Feature scaling is crucial for K-NN because:", options: ["It's faster", "Large-scale features dominate distance", "Not needed", "Reduces K"], correct: 1, explanation: "Without scaling, features with larger ranges dominate." },
    { question: "K-NN computational complexity at prediction:", options: ["O(1)", "O(n) where n = training size", "O(log n)", "O(K)"], correct: 1, explanation: "Must compute distance to all n training points." },
  ],
  "s2-sl-4": [
    { question: "Random Forest uses:", options: ["One tree", "Many trees with random subsets of features", "K-Means", "PCA"], correct: 1, explanation: "RF trains many trees on bootstrap samples with random features." },
    { question: "Gini impurity measures:", options: ["Tree depth", "How mixed classes are at a node", "Number of leaves", "Feature count"], correct: 1, explanation: "Gini = 1 - Σpᵢ², lower = purer." },
    { question: "Gradient Boosted Trees:", options: ["Train in parallel", "Train sequentially, each correcting errors", "Use K-NN", "Use PCA"], correct: 1, explanation: "Each new tree fits the residuals of previous trees." },
    { question: "Max depth limits:", options: ["Number of features", "Tree complexity and overfitting", "Training data size", "Number of classes"], correct: 1, explanation: "Shallower trees are simpler and less prone to overfitting." },
    { question: "Feature importance in trees comes from:", options: ["Feature position", "How much each feature reduces impurity", "Feature name length", "Feature order in data"], correct: 1, explanation: "Total impurity reduction across all splits using that feature." },
  ],

  "s2-ul-1": [
    { question: "K-Means++ initializes centroids:", options: ["All at origin", "Spread apart probabilistically", "Randomly from data", "At data mean"], correct: 1, explanation: "K-Means++ selects initial centroids far apart for better convergence." },
    { question: "Silhouette score near 1 means:", options: ["Bad clustering", "Well-clustered point", "Outlier", "Wrong K"], correct: 1, explanation: "Silhouette ≈ 1: point well-matched to its cluster." },
    { question: "Silhouette score near -1 means:", options: ["Perfect clustering", "Point likely in wrong cluster", "Good fit", "No clusters"], correct: 1, explanation: "Negative silhouette: probably assigned to wrong cluster." },
    { question: "Gap statistic compares:", options: ["K values", "Within-cluster dispersion to null reference", "Features", "Labels"], correct: 1, explanation: "Gap stat compares actual clustering to random uniform data." },
    { question: "K-Means assumes clusters are:", options: ["Any shape", "Roughly spherical/convex", "Always equal size", "Hierarchical"], correct: 1, explanation: "K-Means works best with convex, similarly-sized clusters." },
  ],
  "s2-ul-2": [
    { question: "Scree plot shows:", options: ["Feature names", "Variance explained per component", "Cluster sizes", "Loss over time"], correct: 1, explanation: "Scree plot helps choose number of components (elbow)." },
    { question: "Keeping 95% variance means:", options: ["Keeping 95% of features", "Choosing components explaining 95% of total variance", "Removing 95% of data", "5% accuracy loss"], correct: 1, explanation: "Select minimum components to explain ≥95% cumulative variance." },
    { question: "PCA whitening:", options: ["Colors data white", "Decorrelates and normalizes variance to 1", "Removes features", "Adds noise"], correct: 1, explanation: "Whitening: rotate to PC axes then scale to unit variance." },
    { question: "PCA is sensitive to:", options: ["Feature names", "Feature scaling", "Label distribution", "Batch size"], correct: 1, explanation: "Standardize features before PCA or large-scale features dominate." },
    { question: "Kernel PCA handles:", options: ["Only linear data", "Non-linear manifolds", "Labeled data only", "Time series only"], correct: 1, explanation: "Kernel PCA maps to higher dimensions for non-linear structure." },
  ],
  "s2-ul-3": [
    { question: "Single linkage uses:", options: ["Maximum distance", "Minimum distance between clusters", "Average distance", "Centroid distance"], correct: 1, explanation: "Single linkage: distance = closest pair of points." },
    { question: "Complete linkage uses:", options: ["Minimum distance", "Maximum distance between clusters", "Average", "Random"], correct: 1, explanation: "Complete linkage: distance = farthest pair." },
    { question: "Average linkage:", options: ["Uses closest points", "Averages all pairwise distances", "Uses centroids only", "Random selection"], correct: 1, explanation: "Average linkage = mean of all pairwise distances between clusters." },
    { question: "Ward's method minimizes:", options: ["Max distance", "Within-cluster variance increase", "Between-cluster distance", "Feature count"], correct: 1, explanation: "Ward merges clusters that cause least increase in total variance." },
    { question: "Cophenetic correlation measures:", options: ["Feature correlation", "How well dendrogram preserves original distances", "Cluster purity", "Accuracy"], correct: 1, explanation: "Cophenetic correlation: faithfulness of dendrogram to actual distances." },
  ],

  "s2-pm-1": [
    { question: "Gaussian NB uses __ for P(xᵢ|C):", options: ["Uniform", "Normal distribution N(μ,σ²)", "Poisson", "Bernoulli"], correct: 1, explanation: "Each feature modeled as Gaussian per class." },
    { question: "Multinomial NB counts:", options: ["Continuous values", "Word frequencies/counts", "Images", "Distances"], correct: 1, explanation: "Multinomial NB handles word count features." },
    { question: "Bernoulli NB uses:", options: ["Count data", "Binary features (present/absent)", "Continuous", "Mixed types"], correct: 1, explanation: "Bernoulli NB: binary feature vectors." },
    { question: "Log-space NB computation prevents:", options: ["Overfitting", "Numerical underflow from multiplying small probabilities", "Data leakage", "Bias"], correct: 1, explanation: "log(P₁×P₂×...) = ΣlogPᵢ avoids tiny products underflowing to 0." },
    { question: "NB calibration means:", options: ["Perfect predictions", "Adjusting probability estimates to be more accurate", "Removing features", "Adding data"], correct: 1, explanation: "NB probabilities are often poorly calibrated; Platt scaling helps." },
  ],

  "s2-fam-1": [
    { question: "Teleportation in PageRank (1-d) prevents:", options: ["Fast convergence", "Rank sinks and spider traps", "Good rankings", "Link counting"], correct: 1, explanation: "Random jumps prevent accumulation in traps/sinks." },
    { question: "Dangling node has:", options: ["Many links", "No outgoing links", "No incoming links", "Self-loops"], correct: 1, explanation: "Dangling nodes have no outgoing links, need special handling." },
    { question: "Personalized PageRank biases teleportation to:", options: ["All pages equally", "A specific set of pages", "The home page only", "Random pages"], correct: 1, explanation: "Personalized PR teleports to user-specific seed pages." },
    { question: "PageRank convergence rate depends on:", options: ["Page count only", "Damping factor d", "Content quality", "Image count"], correct: 1, explanation: "Higher d → slower convergence (closer to 1 is slower)." },
    { question: "Topic-sensitive PageRank:", options: ["Ignores topics", "Computes separate PR vectors per topic", "Uses TF-IDF only", "Ranks by content length"], correct: 1, explanation: "Topic-sensitive PR computes multiple PR vectors for different topics." },
  ],
  "s2-fam-2": [
    { question: "Sublinear TF uses:", options: ["Raw count", "1 + log(tf) if tf>0", "tf²", "1/tf"], correct: 1, explanation: "Sublinear TF dampens the effect of very high term frequencies." },
    { question: "Cosine similarity is preferred over Euclidean for text because:", options: ["Faster to compute", "Normalizes for document length", "More accurate", "Simpler formula"], correct: 1, explanation: "Cosine measures angle, not magnitude → length-invariant." },
    { question: "BM25 is:", options: ["A clustering algorithm", "An improved TF-IDF ranking function", "A neural network", "A distance metric"], correct: 1, explanation: "BM25 is a probabilistic ranking function extending TF-IDF." },
    { question: "Stop word removal in TF-IDF:", options: ["Always needed", "Removes common words that add noise", "Removes rare words", "Adds more words"], correct: 1, explanation: "Stop words ('the', 'is') have near-zero IDF anyway." },
    { question: "Document similarity using TF-IDF typically uses:", options: ["Euclidean distance", "Cosine similarity of TF-IDF vectors", "Manhattan distance", "Hamming distance"], correct: 1, explanation: "Cosine similarity of TF-IDF vectors is standard for text similarity." },
  ],

  // ── NLP, CV, Multimodal ──
  "s2-ncm-1": [
    { question: "Tokenization splits text into:", options: ["Paragraphs", "Words or subwords", "Characters only", "Sentences only"], correct: 1, explanation: "Tokenization: text → tokens (words, subwords, or characters)." },
    { question: "Image resizing is needed because:", options: ["Models need fixed input dimensions", "Larger images are always better", "Pixels must be odd", "Color must be removed"], correct: 0, explanation: "Neural networks expect consistent input dimensions." },
    { question: "Data augmentation for images includes:", options: ["Deleting images", "Flips, rotations, crops, color jitter", "Reducing resolution only", "Adding labels"], correct: 1, explanation: "Augmentation creates varied training samples from originals." },
    { question: "Normalization of pixel values typically maps to:", options: ["[0, 255]", "[0, 1] or [-1, 1]", "[0, 100]", "[1, 256]"], correct: 1, explanation: "Scaling pixels to [0,1] or [-1,1] helps training stability." },
    { question: "Stemming vs Lemmatization:", options: ["Same thing", "Stemming is rule-based; lemmatization uses vocabulary", "Lemmatization is faster", "Stemming is more accurate"], correct: 1, explanation: "Stemming chops suffixes; lemmatization finds dictionary base form." },
  ],
  "s2-ncm-2": [
    { question: "Word2Vec creates:", options: ["Syntax trees", "Dense vector representations of words", "Grammar rules", "One-hot encodings"], correct: 1, explanation: "Word2Vec learns dense, low-dimensional word embeddings." },
    { question: "In word embeddings, king - man + woman ≈:", options: ["King", "Queen", "Prince", "Princess"], correct: 1, explanation: "Famous analogy: semantic relationships encoded as vector arithmetic." },
    { question: "GloVe stands for:", options: ["Global Vectors", "Gradient Loops", "Gated Linear Vectors", "Generalized Latent Values"], correct: 0, explanation: "Global Vectors for Word Representation." },
    { question: "One-hot encoding creates:", options: ["Dense vectors", "Sparse vectors with single 1", "Continuous features", "Embeddings"], correct: 1, explanation: "One-hot: vector of all 0s with single 1 at word's index." },
    { question: "Embeddings capture:", options: ["Only frequency", "Semantic similarity between items", "Syntax only", "Nothing useful"], correct: 1, explanation: "Similar meanings → similar vectors in embedding space." },
  ],
  "s2-ncm-3": [
    { question: "BERT is a:", options: ["Vision model", "Pretrained language model", "Clustering algorithm", "Database"], correct: 1, explanation: "BERT: Bidirectional Encoder Representations from Transformers." },
    { question: "ResNet is known for:", options: ["Text processing", "Skip connections in deep vision models", "Clustering", "Recommendation"], correct: 1, explanation: "ResNet introduced residual/skip connections for very deep CNNs." },
    { question: "CLIP connects:", options: ["Text and images", "Audio and video", "Databases", "Networks"], correct: 0, explanation: "CLIP learns joint text-image representations." },
    { question: "Fine-tuning means:", options: ["Training from scratch", "Adjusting a pretrained model on new data", "Freezing all layers", "Removing layers"], correct: 1, explanation: "Fine-tuning adapts pretrained weights to a specific task." },
    { question: "Transfer learning saves:", options: ["Nothing", "Training time and data requirements", "Only memory", "Only disk space"], correct: 1, explanation: "Pretrained knowledge reduces data and compute needed." },
  ],
  "s2-ncm-4": [
    { question: "Image classification outputs:", options: ["Bounding boxes", "A class label for the whole image", "Pixel masks", "Text description"], correct: 1, explanation: "Classification: single label per image." },
    { question: "Object detection outputs:", options: ["Class labels only", "Bounding boxes + class labels", "Pixel masks", "Embeddings"], correct: 1, explanation: "Detection localizes objects with boxes and labels." },
    { question: "Semantic segmentation labels:", options: ["Whole images", "Every pixel with a class", "Only bounding boxes", "Only edges"], correct: 1, explanation: "Segmentation: per-pixel classification." },
    { question: "Image retrieval finds:", options: ["Similar images from a database", "Object boundaries", "Pixel colors", "Labels only"], correct: 0, explanation: "Retrieval: given query image, find similar images." },
    { question: "Named Entity Recognition (NER) in NLP:", options: ["Translates text", "Identifies entities (person, location, etc.)", "Generates text", "Clusters documents"], correct: 1, explanation: "NER tags entities in text with categories." },
  ],

  // ── Python ──
  "s2-py-1": [
    { question: "Output of: print(type(3.14))", options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "Error"], correct: 1, explanation: "3.14 is a float." },
    { question: "len([1,2,3]) returns:", options: ["6", "3", "1", "Error"], correct: 1, explanation: "len counts elements: 3 items." },
    { question: "A function is defined with:", options: ["func", "def", "function", "fn"], correct: 1, explanation: "Python uses 'def' keyword." },
    { question: "for i in range(3): print(i) outputs:", options: ["1 2 3", "0 1 2", "0 1 2 3", "1 2"], correct: 1, explanation: "range(3) = 0, 1, 2." },
    { question: "List comprehension [x**2 for x in range(4)] gives:", options: ["[0,1,4,9]", "[1,4,9,16]", "[0,2,4,6]", "[0,1,2,3]"], correct: 0, explanation: "0²=0, 1²=1, 2²=4, 3²=9." },
  ],
  "s2-py-2": [
    { question: "To read a file: open('file.txt', 'r'). 'r' means:", options: ["Write", "Read", "Append", "Execute"], correct: 1, explanation: "'r' = read mode." },
    { question: "input() returns:", options: ["Integer", "String", "Float", "Boolean"], correct: 1, explanation: "input() always returns a string." },
    { question: "To write to a file:", options: ["open('f', 'r')", "open('f', 'w')", "open('f', 'x')", "read('f')"], correct: 1, explanation: "'w' = write mode." },
    { question: "with open('f') as file: ensures:", options: ["File is never opened", "File is properly closed after use", "File is deleted", "File is renamed"], correct: 1, explanation: "Context manager (with) auto-closes the file." },
    { question: "print(f'Hello {name}') is:", options: ["Syntax error", "f-string formatting", "Regular string", "Raw string"], correct: 1, explanation: "f-strings allow inline variable substitution." },
  ],
  "s2-py-3": [
    { question: "To reverse a list: [1,2,3][::-1] gives:", options: ["[1,2,3]", "[3,2,1]", "[2,1,3]", "Error"], correct: 1, explanation: "[::-1] reverses the list." },
    { question: "dict.get('key', default) returns __ if key missing:", options: ["None", "Error", "The default value", "0"], correct: 2, explanation: ".get() returns default instead of raising KeyError." },
    { question: "set([1,2,2,3,3,3]) gives:", options: ["{1,2,2,3}", "{1,2,3}", "[1,2,3]", "Error"], correct: 1, explanation: "Sets remove duplicates: {1, 2, 3}." },
    { question: "Lambda function: (lambda x: x*2)(5) =", options: ["5", "10", "25", "Error"], correct: 1, explanation: "lambda x: x*2 applied to 5 = 10." },
    { question: "try/except handles:", options: ["Imports", "Runtime errors/exceptions", "Syntax errors", "Indentation"], correct: 1, explanation: "try/except catches and handles runtime exceptions." },
  ],

  "s2-dh-1": [
    { question: "np.array([1,2,3]) * 2 gives:", options: ["[1,2,3,1,2,3]", "[2,4,6]", "Error", "[1,2,3]"], correct: 1, explanation: "NumPy vectorized: element-wise multiplication." },
    { question: "np.zeros((3,4)) creates:", options: ["3×4 array of zeros", "4×3 array", "1D array of 12", "Error"], correct: 0, explanation: "Creates 3 rows × 4 columns of zeros." },
    { question: "Broadcasting allows:", options: ["Only same-shape operations", "Operations on different-shaped arrays", "No shape changes", "Only 1D arrays"], correct: 1, explanation: "Broadcasting stretches smaller arrays to match shapes." },
    { question: "np.dot(a, b) computes:", options: ["Element-wise product", "Dot product / matrix multiplication", "Addition", "Subtraction"], correct: 1, explanation: "np.dot handles dot products and matrix multiplication." },
    { question: "np.reshape(arr, (2,3)) requires arr to have:", options: ["2 elements", "3 elements", "6 elements", "Any size"], correct: 2, explanation: "Total elements must match: 2×3 = 6." },
  ],
  "s2-dh-2": [
    { question: "pd.DataFrame() creates:", options: ["NumPy array", "A tabular data structure", "A plot", "A model"], correct: 1, explanation: "DataFrame = labeled rows and columns table." },
    { question: "df.groupby('col').mean() does:", options: ["Sorts data", "Groups by column and computes mean per group", "Removes column", "Renames column"], correct: 1, explanation: "GroupBy splits data, applies function (mean) per group." },
    { question: "df.merge(other, on='key') is:", options: ["Concatenation", "SQL-like join on key column", "Sorting", "Filtering"], correct: 1, explanation: "Merge = join two DataFrames on a key column." },
    { question: "df.isna().sum() shows:", options: ["Total rows", "Count of missing values per column", "Data types", "Memory usage"], correct: 1, explanation: "Counts NaN/null values in each column." },
    { question: "df['col'].value_counts() returns:", options: ["Mean", "Frequency of each unique value", "Standard deviation", "Data type"], correct: 1, explanation: "value_counts: count occurrences of each unique value." },
  ],
  "s2-dh-3": [
    { question: "Handling missing data: df.fillna(0):", options: ["Removes rows", "Replaces NaN with 0", "Drops columns", "Does nothing"], correct: 1, explanation: "fillna replaces missing values with specified value." },
    { question: "df.drop_duplicates() removes:", options: ["All rows", "Duplicate rows", "Columns", "NaN values"], correct: 1, explanation: "Removes exact duplicate rows." },
    { question: "One-hot encoding converts:", options: ["Numbers to text", "Categorical to binary columns", "Text to numbers", "Images to arrays"], correct: 1, explanation: "Each category becomes a binary (0/1) column." },
    { question: "df.apply(func) applies function:", options: ["Only to first row", "To each row or column", "Only to numbers", "To index only"], correct: 1, explanation: "apply runs a function along an axis (rows or columns)." },
    { question: "Pivot tables are for:", options: ["Data deletion", "Summarizing data by categories", "Model training", "Visualization only"], correct: 1, explanation: "Pivot tables aggregate data by row/column categories." },
  ],

  "s2-viz-1": [
    { question: "plt.scatter(x, y) creates:", options: ["Line chart", "Scatter plot", "Bar chart", "Histogram"], correct: 1, explanation: "scatter() plots individual data points." },
    { question: "sns.heatmap() is used for:", options: ["Line plots", "Correlation matrices and 2D data", "Pie charts", "3D plots"], correct: 1, explanation: "Seaborn heatmap visualizes matrix data with color intensity." },
    { question: "plt.xlabel() sets:", options: ["Title", "X-axis label", "Legend", "Y-axis label"], correct: 1, explanation: "xlabel labels the horizontal axis." },
    { question: "sns.boxplot() shows:", options: ["Mean only", "Median, quartiles, and outliers", "Only outliers", "Frequency"], correct: 1, explanation: "Box plots display the five-number summary." },
    { question: "plt.subplots(2,2) creates:", options: ["2 plots", "4 subplots in a 2×2 grid", "2×2 pixel image", "Error"], correct: 1, explanation: "subplots(2,2) = figure with 4 subplot axes." },
  ],
  "s2-viz-2": [
    { question: "A pair plot shows:", options: ["Single variable", "Pairwise relationships between all features", "Only correlations", "Time series"], correct: 1, explanation: "Pair plots: scatter plots for every feature pair + histograms." },
    { question: "Log scale is useful when:", options: ["Data is small", "Data spans several orders of magnitude", "Values are equal", "For categorical data"], correct: 1, explanation: "Log scale compresses large ranges." },
    { question: "Colorbar in a heatmap shows:", options: ["Random colors", "Value-to-color mapping", "Feature names", "Axis labels"], correct: 1, explanation: "Colorbar legend maps colors to numerical values." },
    { question: "Facet plots separate data by:", options: ["Color only", "Categorical variable into sub-panels", "Size", "Nothing"], correct: 1, explanation: "Faceting creates separate panels per category." },
    { question: "Matplotlib's plt.savefig() does:", options: ["Displays plot", "Saves plot to file", "Closes plot", "Prints data"], correct: 1, explanation: "savefig exports the figure to PNG, PDF, etc." },
  ],

  "s2-mllib-1": [
    { question: "sklearn.fit(X, y) does:", options: ["Predicts", "Trains the model on data", "Evaluates", "Preprocesses"], correct: 1, explanation: "fit() trains the model on features X and labels y." },
    { question: "sklearn.predict(X_test) does:", options: ["Trains", "Makes predictions on new data", "Evaluates", "Loads data"], correct: 1, explanation: "predict() applies the trained model to new data." },
    { question: "train_test_split shuffles data by default:", options: ["False", "True", "Only for classification", "Only for regression"], correct: 1, explanation: "Default shuffle=True randomizes data before splitting." },
    { question: "Pipeline chains:", options: ["Only models", "Preprocessing steps and model together", "Only scalers", "Only PCA"], correct: 1, explanation: "Pipeline: scaler → feature selection → model in sequence." },
    { question: "StandardScaler transforms features to:", options: ["[0,1]", "Mean=0, SD=1", "[−1,1]", "No change"], correct: 1, explanation: "StandardScaler: z-score normalization." },
  ],
  "s2-mllib-2": [
    { question: "KMeans(n_clusters=3).fit(X) does:", options: ["Classification", "Finds 3 clusters in X", "Regression", "Feature selection"], correct: 1, explanation: "Fits K-Means with K=3." },
    { question: "sklearn.metrics.accuracy_score computes:", options: ["RMSE", "Fraction of correct predictions", "AUC", "Silhouette"], correct: 1, explanation: "accuracy_score = correct / total." },
    { question: "confusion_matrix(y_true, y_pred) returns:", options: ["Accuracy", "Matrix of TP, FP, FN, TN", "ROC curve", "Feature importance"], correct: 1, explanation: "Returns the confusion matrix." },
    { question: "cross_val_score returns:", options: ["Single score", "Array of scores for each fold", "Model weights", "Feature names"], correct: 1, explanation: "Returns one score per fold for robust evaluation." },
    { question: "silhouette_score measures:", options: ["Accuracy", "Clustering quality", "Regression error", "Feature importance"], correct: 1, explanation: "Silhouette score: how well points match their cluster." },
  ],
  "s2-mllib-3": [
    { question: "A typical ML pipeline order:", options: ["Predict → Train → Load", "Load → Preprocess → Train → Evaluate", "Evaluate → Train → Load", "Train → Load → Predict"], correct: 1, explanation: "Standard: load data → preprocess → train → evaluate." },
    { question: "GridSearchCV does:", options: ["Only trains", "Hyperparameter search with cross-validation", "Only predicts", "Data cleaning"], correct: 1, explanation: "Exhaustive search over specified hyperparameter grid with CV." },
    { question: "model.score(X_test, y_test) returns:", options: ["Loss", "Default metric (accuracy for classifiers, R² for regressors)", "Confusion matrix", "Predictions"], correct: 1, explanation: ".score() returns the default evaluation metric." },
    { question: "Feature importance from RandomForest:", options: ["Not available", "model.feature_importances_", "model.coef_", "model.weights_"], correct: 1, explanation: "RF provides feature_importances_ based on impurity reduction." },
    { question: "pickle.dump(model, file) does:", options: ["Trains model", "Saves model to disk", "Loads model", "Evaluates model"], correct: 1, explanation: "Serializes and saves the trained model for later use." },
  ],

  // ── AI Assistant Usage ──
  "s2-ai-1": [
    { question: "Effective AI prompting includes:", options: ["Vague instructions", "Clear, specific instructions with context", "Single-word prompts", "No examples"], correct: 1, explanation: "Clear context and specificity improve AI responses." },
    { question: "When AI gives wrong code, you should:", options: ["Accept it blindly", "Verify and debug it", "Ignore the error", "Delete everything"], correct: 1, explanation: "Always verify AI output — it can make mistakes." },
    { question: "Breaking a problem into parts before prompting:", options: ["Wastes time", "Helps get better, focused responses", "Is unnecessary", "Confuses the AI"], correct: 1, explanation: "Decomposition helps both your thinking and AI responses." },
    { question: "Chain-of-thought prompting:", options: ["Asks for one word", "Asks AI to show reasoning steps", "Hides the question", "Gives no context"], correct: 1, explanation: "Asking for step-by-step reasoning improves accuracy." },
    { question: "AI assistants are best used as:", options: ["Replacement for learning", "Tools to augment understanding", "Only for writing", "Only for math"], correct: 1, explanation: "AI augments learning — you still need to understand the concepts." },
  ],
  "s2-ai-2": [
    { question: "Official documentation is preferred because:", options: ["It's longer", "It's authoritative and up-to-date", "It's harder to read", "It uses jargon"], correct: 1, explanation: "Official docs are the ground truth for APIs and libraries." },
    { question: "When using whitelisted docs, you should:", options: ["Copy without understanding", "Read, understand, then apply", "Ignore examples", "Only read titles"], correct: 1, explanation: "Understanding documentation is key to correct implementation." },
    { question: "API reference docs typically show:", options: ["Only tutorials", "Function signatures, parameters, and return types", "Only theory", "Only examples"], correct: 1, explanation: "API refs detail exact function usage." },
    { question: "Stack Overflow answers should be:", options: ["Copied verbatim", "Evaluated for correctness and relevance", "Always trusted", "Ignored"], correct: 1, explanation: "Verify SO answers — they may be outdated or wrong for your case." },
    { question: "Version-specific docs matter because:", options: ["All versions are same", "APIs change between versions", "Only latest matters", "Docs never update"], correct: 1, explanation: "Functions can change or be deprecated across versions." },
  ],
  "s2-ai-3": [
    { question: "Overfitting occurs when:", options: ["Test performance is good", "Model memorizes training data", "Too few parameters", "Regularization used"], correct: 1, explanation: "Overfitting: excellent training, poor generalization." },
    { question: "The bias-variance tradeoff:", options: ["Both zero", "Reducing one tends to increase the other", "Always equal", "Irrelevant"], correct: 1, explanation: "Fundamental ML tradeoff." },
    { question: "Ensemble methods combine:", options: ["Data sources", "Multiple models", "Features only", "Loss functions"], correct: 1, explanation: "Ensembles aggregate multiple models." },
    { question: "Feature engineering is:", options: ["Hardware", "Creating informative features from raw data", "Neural network", "Data deletion"], correct: 1, explanation: "Good features dramatically improve performance." },
    { question: "The 'No Free Lunch' theorem:", options: ["AI is free", "No single algorithm is best for all problems", "More data always wins", "Deep learning beats all"], correct: 1, explanation: "Algorithm performance is problem-dependent." },
    { question: "Transfer learning:", options: ["Starts from scratch", "Reuses knowledge from one task for another", "Only for images", "Needs no data"], correct: 1, explanation: "Transfer learning saves time and data." },
    { question: "Dropout is:", options: ["Removing features permanently", "Randomly deactivating neurons during training", "Adding layers", "Increasing LR"], correct: 1, explanation: "Dropout prevents co-adaptation by randomly zeroing neurons." },
    { question: "Batch normalization:", options: ["Removes data", "Stabilizes and speeds up training", "Reduces features", "Increases bias"], correct: 1, explanation: "BN normalizes layer inputs." },
    { question: "In RL, an agent learns by:", options: ["Supervised labels", "Rewards and penalties", "Clustering", "Static rules"], correct: 1, explanation: "RL: trial-and-error with reward signals." },
    { question: "AI's biggest opportunity:", options: ["Replacing jobs", "Augmenting human capabilities", "Superintelligence", "Art only"], correct: 1, explanation: "AI's greatest potential: augmenting humans." },
  ],
};
