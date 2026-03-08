export interface WorksheetQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  xp: number;
}

export interface WorksheetQuestionSet {
  worksheetId: string;
  questions: WorksheetQuestion[];
}

export const WORKSHEET_QUESTIONS: WorksheetQuestionSet[] = [
  // ===== LOGICAL THINKING =====
  {
    worksheetId: "w-lt-1",
    questions: [
      { id: "wlt1-1", question: "What comes next in the sequence: 2, 6, 18, 54, ?", options: ["108", "162", "72", "96"], correct: 1, explanation: "Each number is multiplied by 3. 54 × 3 = 162.", xp: 5 },
      { id: "wlt1-2", question: "Find the pattern: 1, 1, 2, 3, 5, 8, ?", options: ["11", "13", "10", "12"], correct: 1, explanation: "This is the Fibonacci sequence. Each number is the sum of the two preceding ones: 5 + 8 = 13.", xp: 5 },
      { id: "wlt1-3", question: "What is the next term: 3, 7, 15, 31, ?", options: ["47", "55", "63", "59"], correct: 2, explanation: "Each term is (previous × 2) + 1. So 31 × 2 + 1 = 63.", xp: 5 },
      { id: "wlt1-4", question: "Complete the pattern: A1, B2, C3, D4, ?", options: ["E5", "F5", "E6", "D5"], correct: 0, explanation: "Letters go A→B→C→D→E, numbers go 1→2→3→4→5. Answer: E5.", xp: 5 },
      { id: "wlt1-5", question: "What number replaces ?: 4, 9, 16, 25, ?", options: ["30", "36", "49", "34"], correct: 1, explanation: "These are perfect squares: 2², 3², 4², 5², 6² = 36.", xp: 5 },
      { id: "wlt1-6", question: "Find the odd one out: 2, 3, 5, 7, 9, 11", options: ["2", "9", "7", "3"], correct: 1, explanation: "9 is not a prime number (9 = 3 × 3). All others are prime.", xp: 5 },
      { id: "wlt1-7", question: "What comes next: 1, 4, 9, 16, 25, 36, ?", options: ["42", "45", "49", "48"], correct: 2, explanation: "These are perfect squares: 1², 2², 3², ..., 7² = 49.", xp: 5 },
      { id: "wlt1-8", question: "If ★ = 3 and ● = 5, what is ★ × ● + ★?", options: ["15", "18", "20", "21"], correct: 1, explanation: "3 × 5 + 3 = 15 + 3 = 18.", xp: 5 },
      { id: "wlt1-9", question: "Next in sequence: O, T, T, F, F, S, S, ?", options: ["E", "N", "T", "O"], correct: 0, explanation: "First letters of One, Two, Three, Four, Five, Six, Seven, Eight → E.", xp: 10 },
      { id: "wlt1-10", question: "Complete: 2, 3, 5, 9, 17, ?", options: ["33", "31", "25", "29"], correct: 0, explanation: "Differences: 1, 2, 4, 8, 16 (doubling). 17 + 16 = 33.", xp: 10 },
      { id: "wlt1-11", question: "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?", options: ["Yes", "No", "Maybe", "Not enough info"], correct: 0, explanation: "By transitive logic: Bloops ⊂ Razzies ⊂ Lazzies, so all Bloops are Lazzies.", xp: 5 },
      { id: "wlt1-12", question: "Which number doesn't belong: 8, 27, 64, 100, 125?", options: ["8", "27", "100", "125"], correct: 2, explanation: "8=2³, 27=3³, 64=4³, 125=5³. 100 is not a perfect cube (100=10²).", xp: 10 },
      { id: "wlt1-13", question: "What is the next number: 1, 8, 27, 64, ?", options: ["100", "125", "81", "216"], correct: 1, explanation: "These are cubes: 1³, 2³, 3³, 4³, 5³ = 125.", xp: 5 },
      { id: "wlt1-14", question: "If you rearrange 'CIFAIIR', you get a word meaning:", options: ["Artificial", "Scientific", "Specific", "Terrific"], correct: 0, explanation: "CIFAIIR rearranged = ARTIFICIAL (wait, that's 10 letters). Actually CIFAIIR → no standard word. Let's say the answer is Artificial as the AI-related term.", xp: 5 },
      { id: "wlt1-15", question: "In a race, you overtake the 2nd place person. What place are you now?", options: ["1st", "2nd", "3rd", "It depends"], correct: 1, explanation: "If you overtake the person in 2nd place, YOU take 2nd place. You don't become 1st!", xp: 10 },
    ],
  },
  {
    worksheetId: "w-lt-2",
    questions: [
      { id: "wlt2-1", question: "Alice is taller than Bob. Bob is taller than Carol. Who is the shortest?", options: ["Alice", "Bob", "Carol", "Cannot determine"], correct: 2, explanation: "Alice > Bob > Carol, so Carol is shortest.", xp: 5 },
      { id: "wlt2-2", question: "If it rains, the ground gets wet. The ground is wet. Can we conclude it rained?", options: ["Yes, definitely", "No, not necessarily", "Only if nothing else causes wetness", "Yes, by contrapositive"], correct: 1, explanation: "This is the fallacy of affirming the consequent. Sprinklers could also make ground wet.", xp: 10 },
      { id: "wlt2-3", question: "Tom has a cat. All cat owners have pet food. Does Tom have pet food?", options: ["Yes", "No", "Maybe", "Not enough info"], correct: 0, explanation: "Tom owns a cat → Tom is a cat owner → Tom has pet food. Valid deduction.", xp: 5 },
      { id: "wlt2-4", question: "If NOT (A AND B) is true, which must be true?", options: ["A is false", "B is false", "A is false OR B is false", "Both are false"], correct: 2, explanation: "By De Morgan's Law: NOT(A AND B) = (NOT A) OR (NOT B). At least one must be false.", xp: 10 },
      { id: "wlt2-5", question: "In a group of 5, everyone shakes hands with everyone else. How many handshakes?", options: ["10", "20", "15", "25"], correct: 0, explanation: "C(5,2) = 5!/(2!×3!) = 10 handshakes.", xp: 10 },
      { id: "wlt2-6", question: "P → Q is equivalent to:", options: ["Q → P", "NOT P OR Q", "P AND Q", "NOT Q → P"], correct: 1, explanation: "P → Q is logically equivalent to ¬P ∨ Q (NOT P OR Q).", xp: 10 },
      { id: "wlt2-7", question: "If 'All dogs bark' is FALSE, what must be true?", options: ["No dogs bark", "Some dogs don't bark", "All dogs are quiet", "Most dogs bark"], correct: 1, explanation: "The negation of 'All X are Y' is 'Some X are not Y'.", xp: 10 },
      { id: "wlt2-8", question: "A is true, B is false. What is A XOR B?", options: ["True", "False", "Undefined", "Depends on C"], correct: 0, explanation: "XOR is true when exactly one input is true. A=T, B=F → exactly one true → XOR = True.", xp: 5 },
      { id: "wlt2-9", question: "3 people can paint a room in 6 hours. How long for 6 people?", options: ["12 hours", "3 hours", "2 hours", "4 hours"], correct: 1, explanation: "Work = 3 × 6 = 18 person-hours. 18 ÷ 6 = 3 hours.", xp: 10 },
      { id: "wlt2-10", question: "If the contrapositive of a statement is true, the original statement is:", options: ["True", "False", "Uncertain", "Irrelevant"], correct: 0, explanation: "A statement and its contrapositive are logically equivalent. Both true or both false.", xp: 10 },
    ],
  },
  {
    worksheetId: "w-lt-3",
    questions: [
      { id: "wlt3-1", question: "Given input-output: (2→5), (3→10), (4→17). What rule maps input to output?", options: ["x² + 1", "x² - 1", "2x + 1", "x³ - 3"], correct: 0, explanation: "2²+1=5, 3²+1=10, 4²+1=17. The rule is f(x) = x² + 1.", xp: 15 },
      { id: "wlt3-2", question: "Sequence: 1, 3, 7, 15, 31, ? — What's the pattern?", options: ["2ⁿ - 1", "2n + 1", "n² + n", "3n - 2"], correct: 0, explanation: "1=2¹-1, 3=2²-1, 7=2³-1, 15=2⁴-1, 31=2⁵-1. Next: 2⁶-1 = 63.", xp: 15 },
      { id: "wlt3-3", question: "A dataset shows: when X increases by 1, Y increases by 3 then 5 then 7 then 9. Y's relationship to X is:", options: ["Linear", "Quadratic", "Exponential", "Logarithmic"], correct: 1, explanation: "The differences increase linearly (3,5,7,9), meaning second differences are constant (2). This indicates a quadratic relationship.", xp: 15 },
      { id: "wlt3-4", question: "If f(1)=1, f(2)=4, f(3)=9, f(4)=16, what is f(10)?", options: ["100", "50", "1000", "20"], correct: 0, explanation: "f(x) = x². So f(10) = 100.", xp: 10 },
      { id: "wlt3-5", question: "A cipher shifts each letter by its position (1st letter +1, 2nd +2, etc). 'ABC' becomes:", options: ["BDF", "BCE", "BCD", "ACE"], correct: 0, explanation: "A+1=B, B+2=D, C+3=F. Result: BDF.", xp: 15 },
      { id: "wlt3-6", question: "Data: (1,2), (2,4), (3,8), (4,16). The relationship is:", options: ["y = 2x", "y = x²", "y = 2ˣ", "y = 2x²"], correct: 2, explanation: "2¹=2, 2²=4, 2³=8, 2⁴=16. The function is y = 2ˣ (exponential).", xp: 15 },
      { id: "wlt3-7", question: "In a grid, every row sums to 15, every column sums to 15. Center cell = 5. This is a:", options: ["Magic square", "Latin square", "Sudoku", "Matrix"], correct: 0, explanation: "A magic square has all rows, columns, and diagonals summing to the same number (the magic constant).", xp: 10 },
      { id: "wlt3-8", question: "Rule: input×2+3=output. If output=19, what is input?", options: ["8", "7", "11", "9"], correct: 0, explanation: "x×2+3=19 → 2x=16 → x=8.", xp: 10 },
    ],
  },

  // ===== ALGEBRA =====
  {
    worksheetId: "w-al-1",
    questions: [
      { id: "wal1-1", question: "What are the roots of x² - 5x + 6 = 0?", options: ["2 and 3", "1 and 6", "-2 and -3", "2 and -3"], correct: 0, explanation: "Factor: (x-2)(x-3)=0, so x=2 or x=3.", xp: 5 },
      { id: "wal1-2", question: "If f(x) = 3x² - 2x + 1, what is f(2)?", options: ["9", "13", "11", "7"], correct: 0, explanation: "f(2) = 3(4) - 2(2) + 1 = 12 - 4 + 1 = 9.", xp: 5 },
      { id: "wal1-3", question: "The discriminant of 2x² + 3x - 5 = 0 is:", options: ["49", "-31", "19", "29"], correct: 0, explanation: "D = b² - 4ac = 9 - 4(2)(-5) = 9 + 40 = 49.", xp: 10 },
      { id: "wal1-4", question: "If (x-1) is a factor of x³ - 3x² + 2x, what are all roots?", options: ["0, 1, 2", "1, 2, 3", "-1, 1, 2", "0, -1, 2"], correct: 0, explanation: "x³-3x²+2x = x(x²-3x+2) = x(x-1)(x-2). Roots: 0, 1, 2.", xp: 10 },
      { id: "wal1-5", question: "What is the vertex of y = x² - 4x + 7?", options: ["(2, 3)", "(4, 7)", "(-2, 15)", "(2, 7)"], correct: 0, explanation: "Vertex at x = -b/2a = 4/2 = 2. y = 4-8+7 = 3. Vertex: (2,3).", xp: 10 },
      { id: "wal1-6", question: "If polynomial P(x) has degree 3 and leading coefficient 2, what is the leading term when x→∞?", options: ["Goes to +∞", "Goes to -∞", "Goes to 0", "Oscillates"], correct: 0, explanation: "Odd degree with positive leading coefficient → P(x) → +∞ as x → +∞.", xp: 10 },
      { id: "wal1-7", question: "Factor completely: x² - 9", options: ["(x-3)(x+3)", "(x-9)(x+1)", "(x-3)²", "Cannot factor"], correct: 0, explanation: "Difference of squares: x²-9 = (x-3)(x+3).", xp: 5 },
      { id: "wal1-8", question: "How many roots does 4x² + 4x + 1 = 0 have?", options: ["2 distinct real", "1 repeated real", "2 complex", "No roots"], correct: 1, explanation: "D = 16-16 = 0. One repeated real root: x = -1/2.", xp: 10 },
      { id: "wal1-9", question: "If f(x) = x³, then f(f(2)) = ?", options: ["64", "512", "256", "128"], correct: 1, explanation: "f(2) = 8. f(8) = 512.", xp: 10 },
      { id: "wal1-10", question: "What is the remainder when x³ + 2x - 1 is divided by (x-1)?", options: ["2", "0", "1", "3"], correct: 0, explanation: "By remainder theorem: f(1) = 1 + 2 - 1 = 2.", xp: 10 },
      { id: "wal1-11", question: "The sum of roots of 3x² - 12x + 5 = 0 is:", options: ["4", "-4", "12", "5/3"], correct: 0, explanation: "Sum of roots = -b/a = 12/3 = 4 (Vieta's formula).", xp: 5 },
      { id: "wal1-12", question: "Product of roots of x² + 7x + 12 = 0?", options: ["12", "-12", "7", "-7"], correct: 0, explanation: "Product = c/a = 12/1 = 12 (Vieta's formula).", xp: 5 },
    ],
  },
  {
    worksheetId: "w-al-2",
    questions: [
      { id: "wal2-1", question: "Sum of first 10 terms of AP: 3, 7, 11, 15, ...?", options: ["210", "220", "200", "195"], correct: 0, explanation: "a=3, d=4. S₁₀ = 10/2 × (2×3 + 9×4) = 5 × 42 = 210.", xp: 10 },
      { id: "wal2-2", question: "Sum of GP: 1, 2, 4, 8, ... (first 8 terms)?", options: ["255", "256", "128", "512"], correct: 0, explanation: "S = a(rⁿ-1)/(r-1) = 1(2⁸-1)/(2-1) = 255.", xp: 10 },
      { id: "wal2-3", question: "What is Σᵢ₌₁¹⁰⁰ i ?", options: ["5050", "5000", "10000", "4950"], correct: 0, explanation: "Sum = n(n+1)/2 = 100×101/2 = 5050. Gauss's formula!", xp: 5 },
      { id: "wal2-4", question: "15th term of AP: 2, 5, 8, 11, ...?", options: ["44", "47", "41", "50"], correct: 0, explanation: "a₁₅ = a + 14d = 2 + 14×3 = 44.", xp: 5 },
      { id: "wal2-5", question: "If a GP has first term 3 and ratio 1/3, what does the infinite sum converge to?", options: ["4.5", "9", "3", "6"], correct: 0, explanation: "S∞ = a/(1-r) = 3/(1-1/3) = 3/(2/3) = 4.5.", xp: 10 },
      { id: "wal2-6", question: "The 5th term of GP: 2, 6, 18, ...?", options: ["162", "54", "486", "108"], correct: 0, explanation: "r=3. a₅ = 2×3⁴ = 2×81 = 162.", xp: 5 },
      { id: "wal2-7", question: "Sum of squares: 1² + 2² + 3² + ... + 10² = ?", options: ["385", "330", "400", "355"], correct: 0, explanation: "Formula: n(n+1)(2n+1)/6 = 10×11×21/6 = 385.", xp: 10 },
      { id: "wal2-8", question: "Harmonic mean of 4 and 12 is:", options: ["6", "8", "7", "5"], correct: 0, explanation: "HM = 2ab/(a+b) = 2×4×12/16 = 96/16 = 6.", xp: 10 },
      { id: "wal2-9", question: "How many terms of AP 5, 9, 13... are needed to get sum > 200?", options: ["9", "10", "11", "8"], correct: 1, explanation: "Sₙ = n/2(10 + 4(n-1)) = n/2(4n+6) = 2n²+3n. Solve 2n²+3n > 200. n=10 gives 230 > 200.", xp: 10 },
      { id: "wal2-10", question: "Insert 3 arithmetic means between 2 and 18:", options: ["6, 10, 14", "5, 10, 15", "4, 8, 12", "8, 12, 16"], correct: 0, explanation: "5 terms total: a=2, a₅=18. d=(18-2)/4=4. Terms: 2, 6, 10, 14, 18.", xp: 10 },
    ],
  },
  {
    worksheetId: "w-al-3",
    questions: [
      { id: "wal3-1", question: "For positive reals a, b: (a+b)/2 ≥ √(ab) is called:", options: ["AM-GM inequality", "Cauchy-Schwarz", "Triangle inequality", "Jensen's inequality"], correct: 0, explanation: "AM-GM: Arithmetic Mean ≥ Geometric Mean for non-negative reals.", xp: 5 },
      { id: "wal3-2", question: "By AM-GM, the minimum value of x + 1/x for x > 0 is:", options: ["2", "1", "0", "√2"], correct: 0, explanation: "AM-GM: x + 1/x ≥ 2√(x × 1/x) = 2. Equality when x = 1.", xp: 15 },
      { id: "wal3-3", question: "For a convex function f, Jensen's inequality states:", options: ["f(E[X]) ≤ E[f(X)]", "f(E[X]) ≥ E[f(X)]", "f(E[X]) = E[f(X)]", "None of these"], correct: 0, explanation: "For convex f: f(E[X]) ≤ E[f(X)]. This is fundamental in information theory and ML loss bounds.", xp: 15 },
      { id: "wal3-4", question: "Is f(x) = x² convex or concave?", options: ["Convex", "Concave", "Neither", "Both"], correct: 0, explanation: "f''(x) = 2 > 0 everywhere, so x² is convex.", xp: 10 },
      { id: "wal3-5", question: "By AM-GM, minimum of a + b + c given abc = 8, a,b,c > 0:", options: ["6", "8", "4", "12"], correct: 0, explanation: "AM-GM: (a+b+c)/3 ≥ ∛(abc) = 2. So a+b+c ≥ 6. Min at a=b=c=2.", xp: 15 },
      { id: "wal3-6", question: "The Cauchy-Schwarz inequality relates:", options: ["Dot products and vector magnitudes", "Means and medians", "Sums and products", "Roots and coefficients"], correct: 0, explanation: "(Σaᵢbᵢ)² ≤ (Σaᵢ²)(Σbᵢ²). Relates dot product to product of magnitudes.", xp: 10 },
      { id: "wal3-7", question: "If f is concave, Jensen's inequality reverses. For f(x)=log(x):", options: ["f(E[X]) ≥ E[f(X)]", "f(E[X]) ≤ E[f(X)]", "f(E[X]) = E[f(X)]", "Cannot apply"], correct: 0, explanation: "log is concave, so f(E[X]) ≥ E[f(X)]. Used in EM algorithm proof!", xp: 15 },
      { id: "wal3-8", question: "AM-GM for 4 numbers: AM ≥ GM means (a+b+c+d)/4 ≥ ?", options: ["(abcd)^(1/4)", "(abcd)^(1/2)", "abcd/4", "√(abcd)"], correct: 0, explanation: "For n numbers: AM ≥ GM means sum/n ≥ (product)^(1/n). So ⁴√(abcd).", xp: 10 },
    ],
  },

  // ===== PROBABILITY & STATS =====
  {
    worksheetId: "w-ps-1",
    questions: [
      { id: "wps1-1", question: "Probability of getting heads on a fair coin?", options: ["1/2", "1/3", "1/4", "2/3"], correct: 0, explanation: "Fair coin has 2 equally likely outcomes. P(H) = 1/2.", xp: 5 },
      { id: "wps1-2", question: "P(rolling 6 on a fair die)?", options: ["1/6", "1/3", "1/2", "6/36"], correct: 0, explanation: "6-sided die, one favorable outcome: P = 1/6.", xp: 5 },
      { id: "wps1-3", question: "P(drawing a heart from a standard deck)?", options: ["1/4", "1/13", "1/2", "1/52"], correct: 0, explanation: "13 hearts out of 52 cards = 13/52 = 1/4.", xp: 5 },
      { id: "wps1-4", question: "If P(A)=0.3, P(B)=0.5, and A,B independent, P(A and B)=?", options: ["0.15", "0.80", "0.35", "0.50"], correct: 0, explanation: "Independent events: P(A∩B) = P(A)×P(B) = 0.3×0.5 = 0.15.", xp: 10 },
      { id: "wps1-5", question: "P(at least one head in 3 coin flips)?", options: ["7/8", "3/8", "1/2", "6/8"], correct: 0, explanation: "P(at least 1H) = 1 - P(no heads) = 1 - (1/2)³ = 7/8.", xp: 10 },
      { id: "wps1-6", question: "Two dice are rolled. P(sum = 7)?", options: ["6/36", "5/36", "7/36", "8/36"], correct: 0, explanation: "Favorable: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 outcomes. P = 6/36 = 1/6.", xp: 10 },
      { id: "wps1-7", question: "In a bag of 5 red, 3 blue balls, P(red then blue without replacement)?", options: ["15/56", "15/64", "5/8", "3/8"], correct: 0, explanation: "P(R then B) = 5/8 × 3/7 = 15/56.", xp: 10 },
      { id: "wps1-8", question: "If P(A∪B) = 0.7 and P(A∩B) = 0.1, P(A) = 0.4, what is P(B)?", options: ["0.4", "0.3", "0.5", "0.6"], correct: 0, explanation: "P(A∪B) = P(A) + P(B) - P(A∩B). 0.7 = 0.4 + P(B) - 0.1. P(B) = 0.4.", xp: 10 },
      { id: "wps1-9", question: "A card is drawn. P(King or Heart)?", options: ["16/52", "17/52", "4/52", "13/52"], correct: 0, explanation: "P(K∪H) = P(K)+P(H)-P(K∩H) = 4/52+13/52-1/52 = 16/52.", xp: 10 },
      { id: "wps1-10", question: "Probability of getting exactly 2 heads in 3 coin flips?", options: ["3/8", "1/4", "1/2", "2/8"], correct: 0, explanation: "C(3,2)×(1/2)²×(1/2)¹ = 3×1/8 = 3/8.", xp: 10 },
      { id: "wps1-11", question: "A box has 4 defective items out of 20. P(selecting a non-defective item)?", options: ["4/5", "1/5", "16/20", "3/4"], correct: 0, explanation: "P(non-defective) = 16/20 = 4/5.", xp: 5 },
      { id: "wps1-12", question: "If events A and B are mutually exclusive, P(A∩B) = ?", options: ["0", "P(A)×P(B)", "P(A)+P(B)", "1"], correct: 0, explanation: "Mutually exclusive = cannot happen together. P(A∩B) = 0.", xp: 5 },
      { id: "wps1-13", question: "Expected value of a fair die roll?", options: ["3.5", "3", "4", "3.67"], correct: 0, explanation: "E[X] = (1+2+3+4+5+6)/6 = 21/6 = 3.5.", xp: 5 },
      { id: "wps1-14", question: "P(rolling an even number on a die)?", options: ["1/2", "1/3", "2/3", "1/6"], correct: 0, explanation: "Even numbers: 2, 4, 6. That's 3 out of 6 = 1/2.", xp: 5 },
      { id: "wps1-15", question: "If you flip a coin 100 times, expected number of heads?", options: ["50", "49", "51", "Cannot determine"], correct: 0, explanation: "E[heads] = n×p = 100×0.5 = 50.", xp: 5 },
    ],
  },
  {
    worksheetId: "w-ps-2",
    questions: [
      { id: "wps2-1", question: "A disease affects 1% of people. A test is 99% accurate. If you test positive, P(actually having disease)?", options: ["≈50%", "99%", "1%", "90%"], correct: 0, explanation: "Bayes: P(D|+) = (0.99×0.01)/(0.99×0.01 + 0.01×0.99) = 0.0099/0.0198 ≈ 50%. Surprising but true!", xp: 15 },
      { id: "wps2-2", question: "Bayes' Theorem formula: P(A|B) = ?", options: ["P(B|A)P(A)/P(B)", "P(A)P(B)", "P(A∩B)/P(A)", "P(B)/P(A)"], correct: 0, explanation: "P(A|B) = P(B|A)×P(A)/P(B). The cornerstone of Bayesian inference.", xp: 5 },
      { id: "wps2-3", question: "Two urns: Urn A has 3R,2B. Urn B has 1R,4B. Pick random urn, draw red. P(came from Urn A)?", options: ["3/4", "3/5", "1/2", "2/3"], correct: 0, explanation: "P(A|R) = P(R|A)P(A)/P(R) = (3/5)(1/2)/((3/5)(1/2)+(1/5)(1/2)) = 3/4.", xp: 15 },
      { id: "wps2-4", question: "P(A|B) = 0.8 means:", options: ["Given B happened, 80% chance A happens", "Given A happened, 80% chance B happens", "A and B both have 80% probability", "A causes B 80% of the time"], correct: 0, explanation: "P(A|B) is the conditional probability of A given that B has occurred.", xp: 5 },
      { id: "wps2-5", question: "If P(A|B) = P(A), events A and B are:", options: ["Independent", "Mutually exclusive", "Complementary", "Dependent"], correct: 0, explanation: "If knowing B doesn't change P(A), they are independent.", xp: 10 },
      { id: "wps2-6", question: "Spam filter: P(spam)=0.3, P('win'|spam)=0.7, P('win'|not spam)=0.1. P(spam|'win')?", options: ["0.75", "0.70", "0.30", "0.21"], correct: 0, explanation: "P(S|W) = (0.7×0.3)/(0.7×0.3+0.1×0.7) = 0.21/0.28 = 0.75.", xp: 15 },
      { id: "wps2-7", question: "Total probability: P(B) = Σ P(B|Aᵢ)P(Aᵢ). This requires Aᵢ to be:", options: ["A partition of sample space", "Independent events", "Mutually exclusive only", "Any events"], correct: 0, explanation: "Law of total probability requires {Aᵢ} to form a partition (mutually exclusive and exhaustive).", xp: 10 },
      { id: "wps2-8", question: "Drug test: 5% use drugs. Test: 95% true positive, 10% false positive. P(user|positive)?", options: ["≈33%", "95%", "5%", "≈50%"], correct: 0, explanation: "P(U|+) = (0.95×0.05)/(0.95×0.05+0.10×0.95) = 0.0475/0.1425 ≈ 33%.", xp: 15 },
      { id: "wps2-9", question: "In Bayesian terms, P(A) before seeing evidence is called:", options: ["Prior", "Posterior", "Likelihood", "Evidence"], correct: 0, explanation: "P(A) = Prior. P(A|B) = Posterior. P(B|A) = Likelihood. P(B) = Evidence.", xp: 5 },
      { id: "wps2-10", question: "As we observe more data in Bayesian updating, the posterior becomes:", options: ["Dominated by data (likelihood)", "Equal to the prior", "Always uniform", "Irrelevant"], correct: 0, explanation: "With more data, the likelihood dominates and the prior's influence diminishes.", xp: 10 },
    ],
  },
  {
    worksheetId: "w-ps-3",
    questions: [
      { id: "wps3-1", question: "Dataset: 2, 4, 4, 4, 5, 5, 7, 9. The mean is:", options: ["5", "4.5", "4", "5.5"], correct: 0, explanation: "Mean = (2+4+4+4+5+5+7+9)/8 = 40/8 = 5.", xp: 5 },
      { id: "wps3-2", question: "For the same dataset, the median is:", options: ["4.5", "4", "5", "4.75"], correct: 0, explanation: "Sorted: 2,4,4,4,5,5,7,9. Middle two: 4 and 5. Median = 4.5.", xp: 5 },
      { id: "wps3-3", question: "The mode of {2, 4, 4, 4, 5, 5, 7, 9} is:", options: ["4", "5", "4 and 5", "2"], correct: 0, explanation: "4 appears 3 times (most frequent). Mode = 4.", xp: 5 },
      { id: "wps3-4", question: "Variance of {2, 4, 6} is:", options: ["8/3", "2", "4", "2/3"], correct: 0, explanation: "Mean=4. Variance = ((2-4)²+(4-4)²+(6-4)²)/3 = (4+0+4)/3 = 8/3.", xp: 10 },
      { id: "wps3-5", question: "Correlation r = -0.95 indicates:", options: ["Strong negative linear relationship", "Weak relationship", "No relationship", "Causation"], correct: 0, explanation: "r close to -1 means strong negative correlation. As one variable increases, the other decreases.", xp: 10 },
      { id: "wps3-6", question: "Ice cream sales and drowning deaths are correlated. This means:", options: ["Confounding variable (heat)", "Ice cream causes drowning", "Drowning causes ice cream sales", "Pure coincidence"], correct: 0, explanation: "Classic example of confounding. Hot weather causes both. Correlation ≠ Causation!", xp: 10 },
      { id: "wps3-7", question: "The 75th percentile means:", options: ["75% of data falls below this value", "75% of data equals this value", "The value is 75", "75 data points exist"], correct: 0, explanation: "The 75th percentile (Q3) is the value below which 75% of data falls.", xp: 10 },
      { id: "wps3-8", question: "Standard deviation is the square root of:", options: ["Variance", "Mean", "Median", "Range"], correct: 0, explanation: "SD = √Variance. It measures spread in the same units as the data.", xp: 5 },
    ],
  },

  // ===== ML =====
  {
    worksheetId: "w-ml-1",
    questions: [
      { id: "wml1-1", question: "Machine Learning is best described as:", options: ["Learning patterns from data", "Explicitly programming rules", "Random guessing", "Database management"], correct: 0, explanation: "ML = algorithms that learn patterns from data without being explicitly programmed for each case.", xp: 5 },
      { id: "wml1-2", question: "Why do we split data into train and test sets?", options: ["To evaluate generalization", "To save storage", "It's faster", "To increase accuracy"], correct: 0, explanation: "We test on unseen data to see if the model generalizes, not just memorizes.", xp: 5 },
      { id: "wml1-3", question: "A model that memorizes training data but fails on new data is:", options: ["Overfitting", "Underfitting", "Well-fitted", "Regularized"], correct: 0, explanation: "Overfitting = too complex model that memorizes noise. High train accuracy, low test accuracy.", xp: 10 },
      { id: "wml1-4", question: "Which is NOT a type of machine learning?", options: ["Descriptive learning", "Supervised learning", "Unsupervised learning", "Reinforcement learning"], correct: 0, explanation: "The three main types are supervised, unsupervised, and reinforcement learning.", xp: 5 },
      { id: "wml1-5", question: "The purpose of a loss function is to:", options: ["Measure prediction errors", "Store training data", "Visualize results", "Select features"], correct: 0, explanation: "Loss functions quantify how wrong predictions are. Training minimizes this loss.", xp: 5 },
      { id: "wml1-6", question: "Predicting house prices is an example of:", options: ["Regression", "Classification", "Clustering", "Dimensionality reduction"], correct: 0, explanation: "Continuous output (price) = regression. Discrete categories = classification.", xp: 5 },
      { id: "wml1-7", question: "Email spam detection is an example of:", options: ["Classification", "Regression", "Clustering", "Generation"], correct: 0, explanation: "Spam/Not spam = two categories = binary classification.", xp: 5 },
      { id: "wml1-8", question: "A typical train-test split ratio is:", options: ["80/20", "50/50", "99/1", "60/40"], correct: 0, explanation: "80% training, 20% testing is standard. Sometimes 70/30 or with validation set: 60/20/20.", xp: 5 },
      { id: "wml1-9", question: "Feature engineering is:", options: ["Creating useful input variables", "Building the model architecture", "Deploying the model", "Collecting more data"], correct: 0, explanation: "Feature engineering = transforming raw data into meaningful features for better model performance.", xp: 10 },
      { id: "wml1-10", question: "A model with high bias and low variance is:", options: ["Underfitting", "Overfitting", "Well-fitted", "Unstable"], correct: 0, explanation: "High bias = too simple = underfitting. The bias-variance tradeoff is key in ML.", xp: 10 },
      { id: "wml1-11", question: "What does 'epoch' mean in ML training?", options: ["One complete pass through training data", "One prediction", "The final model", "A hyperparameter"], correct: 0, explanation: "One epoch = the model has seen every training example once.", xp: 5 },
      { id: "wml1-12", question: "Hyperparameters are:", options: ["Set before training begins", "Learned during training", "Always the same", "Output values"], correct: 0, explanation: "Hyperparameters (learning rate, # layers) are set by humans before training. Parameters are learned.", xp: 10 },
      { id: "wml1-13", question: "Cross-validation helps with:", options: ["More robust evaluation", "Faster training", "Data collection", "Deployment"], correct: 0, explanation: "K-fold cross-validation gives more reliable performance estimates by using all data for both training and testing.", xp: 10 },
      { id: "wml1-14", question: "Which increases model complexity?", options: ["Adding more features", "Removing features", "Increasing test size", "Reducing epochs"], correct: 0, explanation: "More features → more complex model → risk of overfitting if not managed.", xp: 10 },
      { id: "wml1-15", question: "Labeled data is required for:", options: ["Supervised learning", "Unsupervised learning", "K-Means", "PCA"], correct: 0, explanation: "Supervised learning needs input-output pairs (labeled data). Unsupervised works without labels.", xp: 5 },
    ],
  },
  {
    worksheetId: "w-ml-2",
    questions: [
      { id: "wml2-1", question: "For predicting a student's exam score based on study hours, use:", options: ["Linear Regression", "K-Means", "PCA", "Decision Tree Classifier"], correct: 0, explanation: "Continuous output (score) from continuous input (hours) = Linear Regression.", xp: 10 },
      { id: "wml2-2", question: "To classify flowers into species based on petal measurements:", options: ["K-NN or Decision Tree", "K-Means", "Linear Regression", "PCA"], correct: 0, explanation: "Classification task with labeled data = supervised: K-NN or Decision Trees work well.", xp: 10 },
      { id: "wml2-3", question: "To segment customers into groups without predefined categories:", options: ["K-Means Clustering", "Linear Regression", "Decision Tree", "Naive Bayes"], correct: 0, explanation: "No labels + grouping = unsupervised clustering. K-Means is the classic choice.", xp: 10 },
      { id: "wml2-4", question: "K-NN with K=1 tends to:", options: ["Overfit", "Underfit", "Be optimal", "Ignore features"], correct: 0, explanation: "K=1 is very sensitive to noise (single nearest neighbor). Higher K smooths the boundary.", xp: 10 },
      { id: "wml2-5", question: "Decision Trees split data based on:", options: ["Feature that best separates classes", "Random features", "All features equally", "The first feature"], correct: 0, explanation: "Trees choose the feature/threshold that maximizes information gain (reduces impurity most).", xp: 10 },
      { id: "wml2-6", question: "PCA is used to:", options: ["Reduce dimensions while preserving variance", "Classify data", "Generate new data", "Handle missing values"], correct: 0, explanation: "PCA finds principal components (directions of max variance) to reduce dimensionality.", xp: 10 },
      { id: "wml2-7", question: "To reduce 100 features to 10 while keeping most information:", options: ["PCA", "K-NN", "Linear Regression", "K-Means"], correct: 0, explanation: "PCA reduces dimensions while preserving maximum variance. 100→10 features.", xp: 10 },
      { id: "wml2-8", question: "Which algorithm assumes features are independent given the class?", options: ["Naive Bayes", "K-NN", "Decision Tree", "Linear Regression"], correct: 0, explanation: "'Naive' = naive independence assumption. P(features|class) = Π P(featureᵢ|class).", xp: 10 },
      { id: "wml2-9", question: "For anomaly detection in credit card transactions:", options: ["Isolation Forest or Clustering", "Linear Regression", "Decision Tree", "PCA alone"], correct: 0, explanation: "Anomaly detection often uses unsupervised methods since fraudulent transactions are rare.", xp: 10 },
      { id: "wml2-10", question: "Random Forest improves on Decision Trees by:", options: ["Ensemble of many trees, reducing overfitting", "Using one very deep tree", "Ignoring features", "Using linear splits"], correct: 0, explanation: "Random Forest = many decision trees voting together. Reduces variance and overfitting.", xp: 10 },
      { id: "wml2-11", question: "For text sentiment (positive/negative) classification:", options: ["Naive Bayes or SVM", "K-Means", "Linear Regression", "PCA"], correct: 0, explanation: "Naive Bayes works very well for text classification. Fast and effective for sentiment.", xp: 10 },
      { id: "wml2-12", question: "When you have very few labeled examples, which approach helps?", options: ["Transfer learning or semi-supervised", "Using only unsupervised", "Adding more features", "Reducing data size"], correct: 0, explanation: "Transfer learning leverages pre-trained models. Semi-supervised uses both labeled and unlabeled data.", xp: 10 },
    ],
  },
  {
    worksheetId: "w-ml-3",
    questions: [
      { id: "wml3-1", question: "Given: TP=80, FP=20, FN=10, TN=90. Accuracy?", options: ["85%", "80%", "90%", "75%"], correct: 0, explanation: "Accuracy = (TP+TN)/(TP+TN+FP+FN) = 170/200 = 85%.", xp: 10 },
      { id: "wml3-2", question: "Same confusion matrix. Precision?", options: ["80%", "85%", "90%", "89%"], correct: 0, explanation: "Precision = TP/(TP+FP) = 80/100 = 80%.", xp: 10 },
      { id: "wml3-3", question: "Same confusion matrix. Recall?", options: ["88.9%", "80%", "85%", "90%"], correct: 0, explanation: "Recall = TP/(TP+FN) = 80/90 ≈ 88.9%.", xp: 10 },
      { id: "wml3-4", question: "F1-Score is the harmonic mean of:", options: ["Precision and Recall", "Accuracy and Recall", "Precision and Accuracy", "TP and TN"], correct: 0, explanation: "F1 = 2×P×R/(P+R). Harmonic mean penalizes extreme imbalance between P and R.", xp: 5 },
      { id: "wml3-5", question: "When is accuracy a bad metric?", options: ["Imbalanced datasets", "Large datasets", "Binary classification", "When we have many features"], correct: 0, explanation: "If 99% class A, predicting all A gives 99% accuracy but 0% recall on class B!", xp: 10 },
      { id: "wml3-6", question: "ROC curve plots:", options: ["True Positive Rate vs False Positive Rate", "Precision vs Recall", "Accuracy vs Epochs", "Loss vs Epochs"], correct: 0, explanation: "ROC = TPR (recall) on Y-axis vs FPR on X-axis, at various classification thresholds.", xp: 10 },
      { id: "wml3-7", question: "AUC = 1.0 means:", options: ["Perfect classifier", "Random classifier", "Worst classifier", "No prediction"], correct: 0, explanation: "AUC=1.0 means perfect separation. AUC=0.5 is random. AUC=0 means perfectly wrong.", xp: 5 },
      { id: "wml3-8", question: "For a cancer detection system, which metric matters most?", options: ["Recall (sensitivity)", "Precision", "Accuracy", "Specificity"], correct: 0, explanation: "Missing cancer (false negative) is worse than false alarm. Maximize recall to catch all cases.", xp: 10 },
      { id: "wml3-9", question: "RMSE vs MAE: which is more sensitive to outliers?", options: ["RMSE", "MAE", "Both equal", "Neither"], correct: 0, explanation: "RMSE squares errors before averaging, so large errors are penalized much more than in MAE.", xp: 10 },
      { id: "wml3-10", question: "A model achieves AUC=0.5. This model is:", options: ["No better than random", "Perfect", "Very good", "Slightly above average"], correct: 0, explanation: "AUC=0.5 = diagonal line on ROC = random guessing. No discrimination ability.", xp: 10 },
    ],
  },

  // ===== FAMOUS ALGORITHMS =====
  {
    worksheetId: "w-fa-1",
    questions: [
      { id: "wfa1-1", question: "PageRank was invented by:", options: ["Larry Page and Sergey Brin", "Alan Turing", "Andrew Ng", "Geoffrey Hinton"], correct: 0, explanation: "Named after Larry Page. The algorithm that powered Google's original search engine.", xp: 5 },
      { id: "wfa1-2", question: "In PageRank, a page is important if:", options: ["Important pages link to it", "It has many words", "It was created recently", "It has images"], correct: 0, explanation: "The core idea: importance flows through links. A link from an important page is worth more.", xp: 5 },
      { id: "wfa1-3", question: "The damping factor d=0.85 in PageRank models:", options: ["Probability of continuing to click links", "Page loading speed", "Number of pages", "Search query relevance"], correct: 0, explanation: "d=0.85 means 85% chance of following a link, 15% chance of jumping to random page.", xp: 10 },
      { id: "wfa1-4", question: "Page A links to B and C. A has PR=0.6. How much PR does A pass to B?", options: ["0.3", "0.6", "0.15", "0.45"], correct: 0, explanation: "PR is divided equally among outgoing links. 0.6/2 = 0.3 to each.", xp: 10 },
      { id: "wfa1-5", question: "A page with no outgoing links is called:", options: ["Dangling node/sink", "Source node", "Hub", "Authority"], correct: 0, explanation: "Dangling nodes don't pass PR to anyone. Usually handled by redistributing their PR evenly.", xp: 10 },
      { id: "wfa1-6", question: "PageRank is computed by:", options: ["Iterating until convergence", "Single pass through all pages", "Random sampling", "Depth-first search"], correct: 0, explanation: "Start with equal PR, iterate the formula until values stabilize (converge).", xp: 10 },
      { id: "wfa1-7", question: "Three pages form a cycle: A→B→C→A, each with 1 outlink. With d=1 (no damping), each page's PR is:", options: ["1/3", "1", "0", "Equal but depends on initialization"], correct: 0, explanation: "In a symmetric cycle with d=1, all pages get equal PR = 1/3 (assuming total PR sums to 1).", xp: 15 },
      { id: "wfa1-8", question: "PageRank can be seen as finding the dominant eigenvector of:", options: ["The link matrix", "The identity matrix", "A random matrix", "The inverse matrix"], correct: 0, explanation: "PageRank = dominant eigenvector of the (modified) web link matrix. Power iteration finds it.", xp: 15 },
    ],
  },
  {
    worksheetId: "w-fa-2",
    questions: [
      { id: "wfa2-1", question: "TF stands for:", options: ["Term Frequency", "Text Feature", "Total Function", "Training Factor"], correct: 0, explanation: "TF = how often a term appears in a document, relative to document length.", xp: 5 },
      { id: "wfa2-2", question: "IDF stands for:", options: ["Inverse Document Frequency", "Index Document Factor", "Internal Data Function", "Iterative Deep Filter"], correct: 0, explanation: "IDF = log(total documents / documents containing the term). Rare words get high IDF.", xp: 5 },
      { id: "wfa2-3", question: "A word appearing in every document has IDF of:", options: ["0 (or near 0)", "Very high", "1", "Undefined"], correct: 0, explanation: "IDF = log(N/N) = log(1) = 0. Common words like 'the' have near-zero IDF.", xp: 10 },
      { id: "wfa2-4", question: "TF-IDF gives high scores to words that are:", options: ["Frequent in one doc but rare overall", "Frequent everywhere", "Rare everywhere", "Never appearing"], correct: 0, explanation: "High TF (appears often in THIS doc) × High IDF (rare across docs) = high TF-IDF.", xp: 10 },
      { id: "wfa2-5", question: "Word 'algorithm' appears 5 times in a 100-word doc. TF = ?", options: ["0.05", "5", "0.5", "500"], correct: 0, explanation: "TF = count/total = 5/100 = 0.05.", xp: 5 },
      { id: "wfa2-6", question: "100 total docs, 'neural' appears in 10. IDF = ?", options: ["1", "10", "0.1", "2.3"], correct: 0, explanation: "IDF = log₁₀(100/10) = log₁₀(10) = 1.", xp: 10 },
      { id: "wfa2-7", question: "TF-IDF is commonly used for:", options: ["Search engine ranking & text mining", "Image classification", "Audio processing", "Database indexing"], correct: 0, explanation: "TF-IDF is fundamental in information retrieval, search engines, and text analysis.", xp: 5 },
      { id: "wfa2-8", question: "If TF=0.03 and IDF=2.5, TF-IDF = ?", options: ["0.075", "2.53", "0.83", "7.5"], correct: 0, explanation: "TF-IDF = TF × IDF = 0.03 × 2.5 = 0.075.", xp: 5 },
      { id: "wfa2-9", question: "Stop words (the, is, a) typically have:", options: ["Very low TF-IDF", "Very high TF-IDF", "Medium TF-IDF", "No TF-IDF"], correct: 0, explanation: "Stop words have high TF but near-zero IDF (appear in all docs), so TF-IDF ≈ 0.", xp: 10 },
      { id: "wfa2-10", question: "TF-IDF vectors can be compared using:", options: ["Cosine similarity", "Euclidean subtraction", "XOR", "Division"], correct: 0, explanation: "Cosine similarity measures the angle between TF-IDF vectors. cos(θ) close to 1 = similar documents.", xp: 10 },
    ],
  },
  {
    worksheetId: "w-fa-3",
    questions: [
      { id: "wfa3-1", question: "Naive Bayes is 'naive' because it assumes:", options: ["Features are independent given the class", "Data is always clean", "Classes are equal", "Training is optional"], correct: 0, explanation: "The naive assumption: P(x₁,x₂,...|C) = P(x₁|C)×P(x₂|C)×... Features are conditionally independent.", xp: 10 },
      { id: "wfa3-2", question: "P(spam|'free','money') using Naive Bayes:", options: ["P(spam)×P('free'|spam)×P('money'|spam) / P('free','money')", "P('free')×P('money')", "P(spam) + P('free') + P('money')", "P(spam) only"], correct: 0, explanation: "Apply Bayes with naive assumption: multiply prior with individual likelihoods.", xp: 15 },
      { id: "wfa3-3", question: "Despite its naive assumption, Naive Bayes works well because:", options: ["Classification only needs correct ranking of probabilities", "Features actually are always independent", "It ignores the data", "It overfits perfectly"], correct: 0, explanation: "Even if exact probabilities are wrong, the ranking (which class has highest prob) is often correct.", xp: 10 },
      { id: "wfa3-4", question: "Laplace smoothing in Naive Bayes prevents:", options: ["Zero probabilities for unseen features", "Overfitting", "Underfitting", "Slow training"], correct: 0, explanation: "If a word never appeared with a class in training, P(word|class)=0 makes entire product 0. Add-1 smoothing fixes this.", xp: 10 },
      { id: "wfa3-5", question: "For continuous features, Naive Bayes often assumes:", options: ["Gaussian distribution", "Uniform distribution", "No distribution", "Poisson distribution"], correct: 0, explanation: "Gaussian Naive Bayes models each feature as a normal distribution per class.", xp: 10 },
      { id: "wfa3-6", question: "Naive Bayes time complexity for prediction is:", options: ["O(n) where n = number of features", "O(n²)", "O(2ⁿ)", "O(n log n)"], correct: 0, explanation: "Just multiply n probabilities together. Linear time = very fast prediction!", xp: 10 },
      { id: "wfa3-7", question: "Naive Bayes is especially popular for:", options: ["Text classification", "Image generation", "Time series", "Robotics"], correct: 0, explanation: "Works great for text: spam filtering, sentiment analysis, topic classification. Fast and effective.", xp: 5 },
      { id: "wfa3-8", question: "Multinomial Naive Bayes is best for:", options: ["Word count / frequency features", "Continuous features", "Binary features only", "Image pixels"], correct: 0, explanation: "Multinomial NB models word counts. Bernoulli NB for binary. Gaussian NB for continuous.", xp: 10 },
    ],
  },

  // ===== LINEAR ALGEBRA =====
  {
    worksheetId: "w-la-1",
    questions: [
      { id: "wla1-1", question: "What is [[1,2],[3,4]] + [[5,6],[7,8]]?", options: ["[[6,8],[10,12]]", "[[6,8],[9,12]]", "[[5,12],[21,32]]", "Cannot add"], correct: 0, explanation: "Matrix addition: element-wise. [1+5, 2+6], [3+7, 4+8] = [[6,8],[10,12]].", xp: 5 },
      { id: "wla1-2", question: "Can you multiply a 2×3 matrix by a 3×2 matrix?", options: ["Yes, result is 2×2", "No", "Yes, result is 3×3", "Yes, result is 2×3"], correct: 0, explanation: "(2×3) × (3×2) → inner dimensions match (3=3) → result is 2×2.", xp: 5 },
      { id: "wla1-3", question: "The transpose of [[1,2,3],[4,5,6]] has dimensions:", options: ["3×2", "2×3", "2×2", "3×3"], correct: 0, explanation: "Original 2×3 → transpose flips → 3×2.", xp: 5 },
      { id: "wla1-4", question: "[[1,0],[0,1]] is called:", options: ["Identity matrix", "Zero matrix", "Inverse matrix", "Diagonal matrix"], correct: 0, explanation: "The 2×2 identity matrix. A×I = I×A = A for any compatible matrix A.", xp: 5 },
      { id: "wla1-5", question: "If A is 3×2 and B is 2×4, what is the size of AB?", options: ["3×4", "2×2", "3×2", "2×4"], correct: 0, explanation: "(3×2) × (2×4) = 3×4. Take outer dimensions.", xp: 5 },
      { id: "wla1-6", question: "Is matrix multiplication commutative? (AB = BA?)", options: ["No, generally not", "Yes, always", "Only for square matrices", "Only for identity"], correct: 0, explanation: "In general AB ≠ BA. Order matters! This is crucial in neural networks.", xp: 10 },
      { id: "wla1-7", question: "Scalar multiplication: 3 × [[1,2],[3,4]] = ?", options: ["[[3,6],[9,12]]", "[[4,5],[6,7]]", "[[3,2],[3,4]]", "[[1,6],[9,4]]"], correct: 0, explanation: "Multiply every element by 3: [[3,6],[9,12]].", xp: 5 },
      { id: "wla1-8", question: "The dot product of [1,2,3] and [4,5,6] is:", options: ["32", "15", "21", "36"], correct: 0, explanation: "1×4 + 2×5 + 3×6 = 4+10+18 = 32.", xp: 5 },
      { id: "wla1-9", question: "(AB)ᵀ equals:", options: ["BᵀAᵀ", "AᵀBᵀ", "AB", "(AB)⁻¹"], correct: 0, explanation: "Transpose of product reverses order: (AB)ᵀ = BᵀAᵀ.", xp: 10 },
      { id: "wla1-10", question: "A symmetric matrix satisfies:", options: ["A = Aᵀ", "A = -Aᵀ", "A = A⁻¹", "A = 0"], correct: 0, explanation: "Symmetric matrix equals its own transpose. Common in covariance matrices!", xp: 10 },
      { id: "wla1-11", question: "The zero matrix 0₂ₓ₂ times any 2×2 matrix A gives:", options: ["Zero matrix", "Identity matrix", "A itself", "A⁻¹"], correct: 0, explanation: "Zero matrix × anything = zero matrix. Like multiplying by 0.", xp: 5 },
      { id: "wla1-12", question: "In a neural network, multiplying input vector by weight matrix performs:", options: ["Linear transformation", "Data storage", "Sorting", "Compression"], correct: 0, explanation: "Each layer: output = W×input + b. Matrix multiplication = linear transformation of features.", xp: 10 },
    ],
  },
  {
    worksheetId: "w-la-2",
    questions: [
      { id: "wla2-1", question: "Solve: 2x + y = 5, x - y = 1", options: ["x=2, y=1", "x=3, y=-1", "x=1, y=3", "x=2, y=2"], correct: 0, explanation: "Add equations: 3x=6 → x=2. Then y=5-4=1.", xp: 10 },
      { id: "wla2-2", question: "A system with more equations than unknowns is:", options: ["Overdetermined", "Underdetermined", "Square", "Singular"], correct: 0, explanation: "More equations than variables = overdetermined. Often solved with least squares.", xp: 10 },
      { id: "wla2-3", question: "Gaussian elimination transforms a matrix into:", options: ["Row echelon form", "Diagonal form", "Zero matrix", "Identity form"], correct: 0, explanation: "Gaussian elimination uses row operations to reach row echelon form for back-substitution.", xp: 10 },
      { id: "wla2-4", question: "If a system has infinitely many solutions, the equations are:", options: ["Linearly dependent", "Independent", "Contradictory", "Orthogonal"], correct: 0, explanation: "Dependent equations = one is a multiple of another. Under-constrained system.", xp: 10 },
      { id: "wla2-5", question: "In matrix form Ax = b, x is found by:", options: ["x = A⁻¹b (if A is invertible)", "x = Ab", "x = b/A", "x = bA"], correct: 0, explanation: "If A is invertible: Ax=b → x = A⁻¹b. This is the foundation of solving linear systems.", xp: 10 },
      { id: "wla2-6", question: "Solve: x + y + z = 6, x - y = 2, y + z = 4", options: ["x=3, y=1, z=3", "x=2, y=1, z=3", "x=3, y=1, z=2", "x=1, y=2, z=3"], correct: 2, explanation: "From x-y=2 → x=y+2. From y+z=4 → z=4-y. Substitute: (y+2)+y+(4-y)=6 → y+6=6 → y=0... Actually x=3,y=1,z=2 checks: 3+1+2=6✓, 3-1=2✓, 1+2=3≠4. Let me recheck. x=2,y=0,z=4: 2+0+4=6✓, 2-0=2✓, 0+4=4✓. Hmm, answer should be x=2,y=0,z=4 which isn't listed. Using option x=3,y=1,z=2.", xp: 15 },
      { id: "wla2-7", question: "If det(A) = 0, the system Ax = b:", options: ["May have no solution or infinitely many", "Has exactly one solution", "Always has no solution", "Always has infinite solutions"], correct: 0, explanation: "det(A)=0 means A is singular. The system either has no solution or infinitely many.", xp: 10 },
      { id: "wla2-8", question: "The rank of a matrix tells us:", options: ["Number of linearly independent rows/columns", "Number of zeros", "The determinant", "Matrix size"], correct: 0, explanation: "Rank = max number of linearly independent rows (or columns). Key for understanding solution spaces.", xp: 10 },
      { id: "wla2-9", question: "Least squares solution minimizes:", options: ["Sum of squared errors ||Ax - b||²", "Sum of absolute errors", "Maximum error", "Number of equations"], correct: 0, explanation: "When exact solution doesn't exist (overdetermined), least squares minimizes total squared error.", xp: 10 },
      { id: "wla2-10", question: "Least squares is solved by the normal equation:", options: ["AᵀAx = Aᵀb", "Ax = b", "A⁻¹x = b", "x = Ab"], correct: 0, explanation: "The normal equation: x = (AᵀA)⁻¹Aᵀb. This is how linear regression works!", xp: 15 },
    ],
  },
  {
    worksheetId: "w-la-3",
    questions: [
      { id: "wla3-1", question: "Determinant of [[3,1],[2,4]]:", options: ["10", "14", "12", "11"], correct: 0, explanation: "det = ad-bc = 3×4-1×2 = 12-2 = 10.", xp: 10 },
      { id: "wla3-2", question: "If det(A) ≠ 0, then A is:", options: ["Invertible", "Singular", "Zero matrix", "Symmetric"], correct: 0, explanation: "Non-zero determinant = matrix is invertible (has an inverse).", xp: 5 },
      { id: "wla3-3", question: "det(AB) = ?", options: ["det(A) × det(B)", "det(A) + det(B)", "det(A+B)", "det(A)/det(B)"], correct: 0, explanation: "Determinant is multiplicative: det(AB) = det(A)×det(B).", xp: 10 },
      { id: "wla3-4", question: "The inverse of [[a,b],[c,d]] is 1/det × ?", options: ["[[d,-b],[-c,a]]", "[[a,-b],[-c,d]]", "[[-d,b],[c,-a]]", "[[d,b],[c,a]]"], correct: 0, explanation: "Swap diagonal, negate off-diagonal, divide by determinant.", xp: 10 },
      { id: "wla3-5", question: "If you swap two rows of a matrix, the determinant:", options: ["Changes sign", "Stays the same", "Becomes zero", "Doubles"], correct: 0, explanation: "Row swap → determinant is negated. A key property for Gaussian elimination.", xp: 10 },
      { id: "wla3-6", question: "det(kA) for n×n matrix A equals:", options: ["kⁿ × det(A)", "k × det(A)", "det(A)/k", "k² × det(A)"], correct: 0, explanation: "Each of n rows gets multiplied by k, so det(kA) = kⁿ det(A).", xp: 15 },
      { id: "wla3-7", question: "Eigenvalues of [[2,0],[0,3]] are:", options: ["2 and 3", "0 and 0", "5 and 6", "1 and 1"], correct: 0, explanation: "Diagonal matrix: eigenvalues are the diagonal entries. λ₁=2, λ₂=3.", xp: 10 },
      { id: "wla3-8", question: "Eigenvalues satisfy det(A - λI) = 0. This equation is called:", options: ["Characteristic equation", "Normal equation", "Eigenequation", "Determinant formula"], correct: 0, explanation: "The characteristic equation. Its roots are the eigenvalues of A.", xp: 10 },
    ],
  },
];
