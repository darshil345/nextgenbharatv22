import { Question } from "./exerciseQuestions";

export const IOAI_EXERCISE_QUESTIONS: Record<string, Question[]> = {
  // ═══ Section 1: Foundational Skills ═══

  // Linear Algebra
  "io-la-1": [
    { question: "What is the dot product of [1,2,3] and [4,5,6]?", options: ["32", "30", "28", "36"], correct: 0, explanation: "1×4 + 2×5 + 3×6 = 4 + 10 + 18 = 32." },
    { question: "If A is 3×4 and B is 4×2, what is the shape of AB?", options: ["3×2", "4×4", "3×4", "2×3"], correct: 0, explanation: "(3×4) × (4×2) = 3×2. Inner dimensions must match." },
    { question: "The transpose of a 2×3 matrix has shape:", options: ["2×3", "3×2", "3×3", "2×2"], correct: 1, explanation: "Transpose swaps rows and columns: (2×3)ᵀ = 3×2." },
    { question: "Which is NOT a property of matrix multiplication?", options: ["Associative", "Distributive", "Commutative", "Compatible dimensions required"], correct: 2, explanation: "AB ≠ BA in general. Matrix multiplication is NOT commutative." },
    { question: "The L2 norm of vector [3, 4] is:", options: ["5", "7", "12", "25"], correct: 0, explanation: "||v|| = √(3² + 4²) = √(9+16) = √25 = 5." },
  ],
  "io-la-2": [
    { question: "For A = [[2,0],[0,3]], the eigenvalues are:", options: ["2 and 3", "0 and 5", "6 and 0", "1 and 6"], correct: 0, explanation: "Diagonal matrix: eigenvalues ARE the diagonal entries: 2 and 3." },
    { question: "If λ is an eigenvalue of A, then Av = ?", options: ["λv", "λA", "v/λ", "A/λ"], correct: 0, explanation: "By definition: Av = λv for eigenvector v." },
    { question: "The trace of a matrix equals:", options: ["Product of eigenvalues", "Sum of eigenvalues", "Sum of all elements", "Determinant"], correct: 1, explanation: "tr(A) = Σλᵢ = sum of eigenvalues." },
    { question: "det(A) for a matrix with eigenvalues 2, 3, 5 is:", options: ["10", "30", "15", "6"], correct: 1, explanation: "det(A) = product of eigenvalues = 2 × 3 × 5 = 30." },
    { question: "A symmetric matrix has:", options: ["Complex eigenvalues", "Real eigenvalues", "Zero eigenvalues", "Negative eigenvalues only"], correct: 1, explanation: "Symmetric matrices always have real eigenvalues and orthogonal eigenvectors." },
  ],
  "io-la-3": [
    { question: "In SVD A = UΣVᵀ, Σ contains:", options: ["Eigenvalues", "Singular values", "Eigenvectors", "Random values"], correct: 1, explanation: "Σ contains singular values (non-negative, ordered σ₁ ≥ σ₂ ≥ ...)." },
    { question: "Low-rank approximation via SVD is used for:", options: ["Encryption", "Dimensionality reduction", "Sorting data", "Normalization"], correct: 1, explanation: "Keeping top-k singular values gives best rank-k approximation (Eckart-Young theorem)." },
    { question: "PCA finds directions of:", options: ["Minimum variance", "Maximum variance", "Zero variance", "Random variance"], correct: 1, explanation: "PCA finds principal components = directions of maximum variance in the data." },
    { question: "SVD can be applied to:", options: ["Only square matrices", "Only symmetric matrices", "Any matrix", "Only invertible matrices"], correct: 2, explanation: "SVD exists for ANY m×n matrix, unlike eigendecomposition." },
    { question: "In recommender systems, SVD is used for:", options: ["Matrix factorization", "Sorting users", "Data deletion", "Password hashing"], correct: 0, explanation: "SVD factorizes the user-item rating matrix into latent factors." },
  ],
  "io-la-4": [
    { question: "In attention, QKᵀ has shape (n×d)(d×n) = ?", options: ["n×n", "d×d", "n×d", "d×n"], correct: 0, explanation: "Q is (n×d), Kᵀ is (d×n), so QKᵀ is (n×n) — attention between all pairs." },
    { question: "Batch matrix multiply (B,N,D) × (B,D,M) gives:", options: ["(B,N,M)", "(B,D,D)", "(N,M)", "(B,N,D)"], correct: 0, explanation: "Batched matmul: multiply the N×D and D×M for each of B batches → (B,N,M)." },
    { question: "Kaiming initialization scales weights by:", options: ["1/n", "√(2/n)", "1/√n", "2/n"], correct: 1, explanation: "He/Kaiming init: W ~ N(0, √(2/fan_in)), designed for ReLU networks." },
    { question: "In multi-head attention with h heads, each head uses dimension:", options: ["d_model", "d_model/h", "h", "d_model×h"], correct: 1, explanation: "Total dimension split across heads: d_k = d_model / h per head." },
    { question: "Embedding matrix E maps vocab to:", options: ["Labels", "Dense vector space", "Sparse matrix", "Binary codes"], correct: 1, explanation: "Embedding matrix: (vocab_size × d) maps each token to a d-dimensional dense vector." },
  ],

  // Calculus & Optimization
  "io-co-1": [
    { question: "∂/∂x of f(x,y) = x²y + 3y is:", options: ["2xy", "x² + 3", "2xy + 3", "2x + y"], correct: 0, explanation: "Treat y as constant: ∂(x²y)/∂x = 2xy, ∂(3y)/∂x = 0. Total: 2xy." },
    { question: "The gradient of f(x,y) = x² + y² at (1,2) is:", options: ["[2, 4]", "[1, 2]", "[2, 2]", "[4, 4]"], correct: 0, explanation: "∇f = [2x, 2y] = [2(1), 2(2)] = [2, 4]." },
    { question: "The gradient points in the direction of:", options: ["Steepest descent", "Steepest ascent", "Zero change", "Random direction"], correct: 1, explanation: "The gradient points in the direction of steepest ascent of the function." },
    { question: "∂/∂x of e^(xy) is:", options: ["ye^(xy)", "xe^(xy)", "e^(xy)", "xye^(xy)"], correct: 0, explanation: "Chain rule: ∂/∂x[e^(xy)] = e^(xy) · ∂(xy)/∂x = ye^(xy)." },
    { question: "If f(x) = log(x), then f'(x) = ?", options: ["1/x", "x", "log(x)", "e^x"], correct: 0, explanation: "The derivative of ln(x) is 1/x." },
  ],
  "io-co-2": [
    { question: "In backprop, ∂L/∂w uses which rule?", options: ["Product rule", "Chain rule", "Quotient rule", "Power rule"], correct: 1, explanation: "Backpropagation is repeated application of the chain rule through the network." },
    { question: "If y = σ(z) and σ is sigmoid, then dy/dz = ?", options: ["σ(z)(1-σ(z))", "σ(z)²", "1-σ(z)", "z·σ(z)"], correct: 0, explanation: "Sigmoid derivative: σ'(z) = σ(z)(1 - σ(z))." },
    { question: "ReLU'(x) for x > 0 is:", options: ["0", "1", "x", "∞"], correct: 1, explanation: "ReLU(x) = max(0,x). For x > 0, derivative = 1." },
    { question: "In a network y = W₂·ReLU(W₁x), ∂y/∂W₁ involves:", options: ["Only W₁", "W₂ and ReLU'", "Only x", "Nothing"], correct: 1, explanation: "Chain rule: ∂y/∂W₁ = W₂ · ReLU'(W₁x) · x. Involves W₂ and ReLU derivative." },
    { question: "Softmax + Cross-Entropy gradient simplifies to:", options: ["ŷ - y", "y - ŷ", "ŷ · y", "log(ŷ)"], correct: 0, explanation: "The elegant result: gradient = predicted - target (ŷ - y)." },
  ],
  "io-co-3": [
    { question: "Adam combines which two ideas?", options: ["Momentum + Adaptive LR", "L1 + L2", "Dropout + BatchNorm", "SGD + GD"], correct: 0, explanation: "Adam = Momentum (first moment) + RMSProp-like adaptive learning rate (second moment)." },
    { question: "Default β₁ in Adam is:", options: ["0.9", "0.99", "0.999", "0.5"], correct: 0, explanation: "Standard Adam: β₁ = 0.9 (momentum), β₂ = 0.999 (adaptive rate)." },
    { question: "Cosine annealing does what to learning rate?", options: ["Keeps constant", "Decays following cosine curve", "Increases linearly", "Doubles each epoch"], correct: 1, explanation: "Cosine annealing smoothly decreases LR following a cosine curve from max to min." },
    { question: "SGD with momentum adds:", options: ["Velocity term", "Second derivatives", "Random noise", "L2 penalty"], correct: 0, explanation: "Momentum accumulates a velocity vector that smooths gradient updates." },
    { question: "In non-convex optimization, a bigger problem than local minima is:", options: ["Global maxima", "Saddle points", "Convex regions", "Zero gradients at origin"], correct: 1, explanation: "In high dimensions, saddle points (gradient=0, mixed curvature) are far more common than local minima." },
  ],
  "io-co-4": [
    { question: "The Jacobian matrix J has entries J[i,j] = ?", options: ["∂²f/∂xᵢ∂xⱼ", "∂fᵢ/∂xⱼ", "fᵢ·xⱼ", "∂f/∂xᵢ + ∂f/∂xⱼ"], correct: 1, explanation: "Jacobian: J[i,j] = ∂fᵢ/∂xⱼ — matrix of all first-order partial derivatives of vector function." },
    { question: "The Hessian is positive definite at a critical point → it's a:", options: ["Maximum", "Local minimum", "Saddle point", "Inflection point"], correct: 1, explanation: "Positive definite Hessian means all eigenvalues > 0, confirming a local minimum." },
    { question: "Newton's method update rule is:", options: ["x - ∇f", "x - H⁻¹∇f", "x - f(x)", "x + H∇f"], correct: 1, explanation: "Newton: x_{new} = x - H⁻¹∇f, using second-order information for faster convergence." },
    { question: "For f: Rⁿ → Rᵐ, the Jacobian has shape:", options: ["n×n", "m×n", "n×m", "m×m"], correct: 1, explanation: "Jacobian: m outputs × n inputs → shape (m × n)." },
    { question: "The Hessian matrix is always:", options: ["Diagonal", "Symmetric", "Positive definite", "Sparse"], correct: 1, explanation: "H[i,j] = ∂²f/∂xᵢ∂xⱼ = ∂²f/∂xⱼ∂xᵢ = H[j,i] by Schwarz's theorem. Always symmetric." },
  ],

  // Probability & Information Theory
  "io-ps-1": [
    { question: "A Gaussian distribution is defined by:", options: ["Only mean", "Mean and variance", "Mode only", "Range"], correct: 1, explanation: "Gaussian N(μ, σ²) is fully characterized by mean μ and variance σ²." },
    { question: "MLE stands for:", options: ["Mean Linear Estimation", "Maximum Likelihood Estimation", "Minimum Loss Evaluation", "Model Learning Efficiency"], correct: 1, explanation: "MLE finds parameters that maximize the probability of observing the data." },
    { question: "Bernoulli distribution models:", options: ["Continuous values", "Binary outcomes (0 or 1)", "Counts", "Rankings"], correct: 1, explanation: "Bernoulli: P(X=1) = p, P(X=0) = 1-p. Single binary trial." },
    { question: "MLE for coin flip with 7 heads out of 10 gives p̂ = ?", options: ["0.5", "0.7", "0.3", "1.0"], correct: 1, explanation: "MLE for Bernoulli: p̂ = (number of heads) / (total flips) = 7/10 = 0.7." },
    { question: "The Central Limit Theorem says sample means are:", options: ["Uniform", "Approximately Gaussian for large n", "Bernoulli", "Exponential"], correct: 1, explanation: "CLT: regardless of population distribution, sample means → Gaussian as n → ∞." },
  ],
  "io-ps-2": [
    { question: "Bayes' theorem: P(A|B) = ?", options: ["P(B|A)P(A)/P(B)", "P(A)P(B)", "P(A)+P(B)", "P(B)/P(A)"], correct: 0, explanation: "Bayes: P(A|B) = P(B|A)·P(A) / P(B). Updates prior with evidence." },
    { question: "In Bayesian inference, the prior represents:", options: ["Data likelihood", "Belief before seeing data", "Final answer", "Loss function"], correct: 1, explanation: "Prior P(θ) encodes our belief about parameters BEFORE observing data." },
    { question: "MAP estimation differs from MLE by:", options: ["Using more data", "Including a prior", "Being faster", "Using neural networks"], correct: 1, explanation: "MAP = argmax P(θ|data) = argmax P(data|θ)P(θ). MLE ignores the prior." },
    { question: "Conjugate priors make:", options: ["Computation impossible", "Posterior same family as prior", "Prior irrelevant", "Data unnecessary"], correct: 1, explanation: "Conjugate prior + likelihood → posterior in same distribution family. Enables closed-form updates." },
    { question: "With a strong prior and little data:", options: ["Posterior ≈ likelihood", "Posterior ≈ prior", "Posterior = uniform", "Prior is ignored"], correct: 1, explanation: "With little data, the prior dominates. More data → posterior shifts toward likelihood." },
  ],
  "io-ps-3": [
    { question: "Entropy H(X) measures:", options: ["Mean value", "Uncertainty/information content", "Variance", "Correlation"], correct: 1, explanation: "Entropy H(X) = -ΣP(x)log P(x) measures the average uncertainty/information." },
    { question: "Cross-entropy H(p,q) is used as:", options: ["Regularization", "Loss function in classification", "Learning rate", "Data augmentation"], correct: 1, explanation: "CE loss = -Σp(x)log q(x) measures how well q approximates true distribution p." },
    { question: "KL divergence D(p||q) is always:", options: ["Negative", "Zero", "Non-negative (≥ 0)", "Symmetric"], correct: 2, explanation: "KL divergence ≥ 0 (Gibbs' inequality), = 0 iff p = q. NOT symmetric." },
    { question: "Entropy of a fair coin (p=0.5):", options: ["0", "0.5", "1 bit", "2 bits"], correct: 2, explanation: "H = -0.5·log₂(0.5) - 0.5·log₂(0.5) = 1 bit. Maximum uncertainty for binary." },
    { question: "KL divergence is NOT:", options: ["Non-negative", "Used in VAE loss", "Symmetric", "A divergence measure"], correct: 2, explanation: "D(p||q) ≠ D(q||p) in general. KL divergence is NOT symmetric." },
  ],
  "io-ps-4": [
    { question: "A p-value of 0.03 means:", options: ["3% chance hypothesis is true", "3% probability of seeing data this extreme under null", "97% confidence", "Type II error rate"], correct: 1, explanation: "p-value = probability of observing data as extreme as (or more than) observed, assuming null is true." },
    { question: "Type I error is:", options: ["Failing to reject false null", "Rejecting true null (false positive)", "Correct rejection", "Correct acceptance"], correct: 1, explanation: "Type I = false positive. Rejecting H₀ when it's actually true. Significance level α controls this." },
    { question: "95% confidence interval means:", options: ["95% chance parameter is in interval", "95% of such intervals contain true parameter", "Parameter is 95% certain", "95% of data falls in interval"], correct: 1, explanation: "Frequentist: if we repeated the experiment, 95% of constructed CIs would contain the true parameter." },
    { question: "In A/B testing, statistical power is:", options: ["Probability of Type I error", "Probability of detecting real effect", "Sample size", "Effect size"], correct: 1, explanation: "Power = 1 - P(Type II error) = probability of correctly rejecting false null hypothesis." },
    { question: "Multiple comparisons correction (Bonferroni) does:", options: ["Increases power", "Divides α by number of tests", "Removes tests", "Combines p-values"], correct: 1, explanation: "Bonferroni: α_corrected = α/m for m tests. Controls family-wise error rate." },
  ],

  // Python for AI
  "io-py-1": [
    { question: "np.array([1,2,3]) * 2 gives:", options: ["[1,2,3,1,2,3]", "[2,4,6]", "Error", "[1,2,3,2]"], correct: 1, explanation: "NumPy vectorized: element-wise multiplication. [1*2, 2*2, 3*2] = [2,4,6]." },
    { question: "Broadcasting allows:", options: ["Only same-shape operations", "Operations between different-shape arrays", "Only scalar operations", "Only matrix multiply"], correct: 1, explanation: "Broadcasting automatically expands dimensions for element-wise ops between compatible shapes." },
    { question: "np.dot(a, b) for 1D arrays computes:", options: ["Outer product", "Dot product (scalar)", "Cross product", "Element-wise product"], correct: 1, explanation: "np.dot for 1D arrays = inner/dot product = Σaᵢbᵢ, returning a scalar." },
    { question: "np.reshape(arr, (-1, 3)) with -1 means:", options: ["Delete dimension", "Auto-compute that dimension", "Set to 1", "Error"], correct: 1, explanation: "-1 tells NumPy to automatically calculate that dimension size from total elements." },
    { question: "Boolean indexing arr[arr > 5] returns:", options: ["Indices where > 5", "Elements where > 5", "True/False array", "Shape info"], correct: 1, explanation: "Boolean indexing returns elements where the condition is True." },
  ],
  "io-py-2": [
    { question: "df.groupby('col').mean() computes:", options: ["Global mean", "Mean per group", "Median per group", "Count per group"], correct: 1, explanation: "GroupBy splits data by 'col' values and computes mean within each group." },
    { question: "pd.merge(df1, df2, on='id') performs:", options: ["Concatenation", "SQL-like join on 'id' column", "Sorting", "Filtering"], correct: 1, explanation: "merge performs an inner join by default, matching rows where 'id' values are equal." },
    { question: "df.fillna(0) does:", options: ["Removes NaN rows", "Replaces NaN with 0", "Adds zeros", "Counts NaN"], correct: 1, explanation: "fillna replaces all NaN/missing values with the specified value (0 here)." },
    { question: "One-hot encoding converts categories to:", options: ["Numbers 1,2,3...", "Binary indicator columns", "Probabilities", "Embeddings"], correct: 1, explanation: "One-hot: each category gets its own column with 0/1. 'cat' → [1,0,0], 'dog' → [0,1,0]." },
    { question: "Feature scaling is important for:", options: ["Tree models", "Gradient-based models (SVM, NN)", "All models equally", "No models"], correct: 1, explanation: "Gradient-based models (NN, SVM, logistic regression) are sensitive to feature scales." },
  ],
  "io-py-3": [
    { question: "A Python generator uses:", options: ["return", "yield", "print", "break"], correct: 1, explanation: "Generators use 'yield' to lazily produce values one at a time, saving memory." },
    { question: "A decorator in Python:", options: ["Deletes a function", "Wraps a function to add behavior", "Renames a function", "Creates a class"], correct: 1, explanation: "@decorator syntax wraps a function, adding functionality before/after without modifying it." },
    { question: "Context manager (with statement) ensures:", options: ["Faster execution", "Resource cleanup (e.g., file closing)", "Type checking", "Memory allocation"], correct: 1, explanation: "'with open(f) as file:' ensures file is closed even if an exception occurs." },
    { question: "List comprehension [x**2 for x in range(5)] gives:", options: ["[0,1,2,3,4]", "[0,1,4,9,16]", "[1,4,9,16,25]", "[0,2,4,6,8]"], correct: 1, explanation: "[0², 1², 2², 3², 4²] = [0, 1, 4, 9, 16]." },
    { question: "lambda x: x**2 creates:", options: ["A class", "An anonymous function", "A module", "A generator"], correct: 1, explanation: "lambda creates a small anonymous function: takes x, returns x²." },
  ],

  // PyTorch
  "io-pt-1": [
    { question: "torch.tensor([1,2,3]).shape is:", options: ["(3,)", "(1,3)", "(3,1)", "(1,)"], correct: 0, explanation: "A 1D tensor with 3 elements has shape torch.Size([3])." },
    { question: "To compute gradients, a tensor needs:", options: ["requires_grad=True", "dtype=float", "device='cpu'", "is_leaf=True"], correct: 0, explanation: "Set requires_grad=True to track operations for automatic differentiation." },
    { question: ".backward() computes:", options: ["Forward pass", "Gradients via backprop", "Loss function", "Predictions"], correct: 1, explanation: ".backward() computes gradients of the computational graph via backpropagation." },
    { question: "torch.matmul(A, B) requires:", options: ["Same shape", "Compatible inner dimensions", "Both square", "Both 1D"], correct: 1, explanation: "Matrix multiplication requires the inner dimensions to match: (m×n) @ (n×p)." },
    { question: "detach() does what?", options: ["Removes from GPU", "Stops gradient tracking", "Deletes tensor", "Flattens tensor"], correct: 1, explanation: ".detach() creates a tensor that shares data but is detached from the computation graph." },
  ],
  "io-pt-2": [
    { question: "nn.Module requires implementing:", options: ["forward()", "__init__() and forward()", "backward()", "train()"], correct: 1, explanation: "Custom modules need __init__ (define layers) and forward (define computation)." },
    { question: "DataLoader provides:", options: ["Batching and shuffling", "Model architecture", "Loss computation", "Gradient descent"], correct: 0, explanation: "DataLoader handles batching, shuffling, parallel loading, and iteration over datasets." },
    { question: "optimizer.zero_grad() is needed because:", options: ["PyTorch accumulates gradients", "It speeds up training", "It saves memory", "It's optional"], correct: 0, explanation: "PyTorch accumulates gradients by default. zero_grad() clears them before each backward pass." },
    { question: "model.train() vs model.eval() affects:", options: ["Learning rate", "Dropout and BatchNorm behavior", "Loss function", "Data loading"], correct: 1, explanation: "train() enables dropout and uses batch statistics for BN. eval() disables dropout and uses running stats." },
    { question: "loss.backward() followed by optimizer.step() does:", options: ["Compute gradients then update weights", "Update weights then compute gradients", "Only compute loss", "Reset the model"], correct: 0, explanation: "backward() computes gradients, step() updates parameters using those gradients." },
  ],
  "io-pt-3": [
    { question: "torch.save(model.state_dict(), path) saves:", options: ["Only weights", "Weights + optimizer", "Entire Python object", "Training data"], correct: 0, explanation: "state_dict() contains only the model's learned parameters (weights and biases)." },
    { question: "To move a model to GPU:", options: ["model.gpu()", "model.to('cuda')", "model.cuda_transfer()", "gpu(model)"], correct: 1, explanation: "model.to('cuda') or model.cuda() moves all parameters to GPU." },
    { question: "torch.no_grad() is used during:", options: ["Training", "Inference/evaluation", "Data loading", "Model definition"], correct: 1, explanation: "torch.no_grad() disables gradient computation, saving memory during inference." },
    { question: "Custom Dataset class must implement:", options: ["__len__ and __getitem__", "forward and backward", "train and eval", "load and save"], correct: 0, explanation: "PyTorch Dataset requires __len__ (dataset size) and __getitem__ (get single sample)." },
    { question: "Mixed precision training uses:", options: ["int8 only", "float16 + float32", "float64", "Binary weights"], correct: 1, explanation: "Mixed precision uses float16 for speed with float32 for critical operations (loss scaling)." },
  ],
  "io-pt-4": [
    { question: "TensorBoard logs are typically written using:", options: ["print()", "SummaryWriter", "logging.info()", "csv.writer()"], correct: 1, explanation: "PyTorch's SummaryWriter from torch.utils.tensorboard writes logs for TensorBoard visualization." },
    { question: "Grid search checks:", options: ["Random subsets", "All combinations of hyperparameters", "One parameter at a time", "Only learning rate"], correct: 1, explanation: "Grid search exhaustively evaluates all combinations of specified hyperparameter values." },
    { question: "Setting random seeds ensures:", options: ["Faster training", "Reproducible results", "Better accuracy", "Less memory usage"], correct: 1, explanation: "Fixed seeds (torch.manual_seed, np.random.seed) make experiments reproducible." },
    { question: "Weights & Biases (wandb) provides:", options: ["Model architecture", "Experiment tracking & visualization", "Data storage only", "GPU allocation"], correct: 1, explanation: "W&B tracks experiments, hyperparameters, metrics, and provides interactive dashboards." },
    { question: "Early stopping monitors:", options: ["Training loss only", "Validation metric to prevent overfitting", "GPU temperature", "Batch size"], correct: 1, explanation: "Early stopping halts training when validation performance stops improving, preventing overfitting." },
  ],

  // Classical ML
  "io-ml-1": [
    { question: "L2 regularization adds what to the loss?", options: ["λ||w||²", "λ||w||₁", "λ|w|", "λw"], correct: 0, explanation: "L2 (Ridge) adds λ times the squared L2 norm of weights to the loss." },
    { question: "Logistic regression outputs:", options: ["Real numbers", "Probabilities via sigmoid", "Class labels directly", "Distances"], correct: 1, explanation: "Logistic regression applies sigmoid to linear output to get probabilities in (0,1)." },
    { question: "L1 regularization encourages:", options: ["Large weights", "Sparse weights", "Equal weights", "Random weights"], correct: 1, explanation: "L1 (Lasso) pushes small weights exactly to zero, creating sparse models." },
    { question: "The decision boundary of logistic regression is:", options: ["Curved", "Linear (hyperplane)", "Circular", "Random"], correct: 1, explanation: "Logistic regression finds a linear decision boundary (hyperplane) in feature space." },
    { question: "In linear regression, the closed-form solution is:", options: ["w = (XᵀX)⁻¹Xᵀy", "w = XᵀX", "w = X⁻¹y", "w = Xy"], correct: 0, explanation: "Normal equation: w = (XᵀX)⁻¹Xᵀy minimizes MSE analytically." },
  ],
  "io-ml-2": [
    { question: "Random Forest reduces overfitting by:", options: ["Pruning trees", "Averaging many trees with random features", "Using one deep tree", "L2 regularization"], correct: 1, explanation: "Random Forest builds many trees on random subsets of features and averages predictions." },
    { question: "XGBoost is an example of:", options: ["Bagging", "Gradient Boosting", "Random search", "Neural network"], correct: 1, explanation: "XGBoost implements gradient boosting — sequentially adding trees that correct previous errors." },
    { question: "Gini impurity measures:", options: ["Tree depth", "Probability of misclassification", "Number of features", "Training time"], correct: 1, explanation: "Gini = 1 - Σpᵢ² measures the probability of incorrectly classifying a random sample." },
    { question: "Feature importance in tree models is based on:", options: ["Feature name length", "Reduction in impurity", "Feature index", "Data type"], correct: 1, explanation: "Feature importance = total reduction in impurity (Gini/entropy) from splits on that feature." },
    { question: "Bagging vs Boosting: Bagging trains trees:", options: ["Sequentially", "In parallel on random subsets", "On the same data", "Without replacement"], correct: 1, explanation: "Bagging trains trees independently in parallel on bootstrap samples. Boosting is sequential." },
  ],
  "io-ml-3": [
    { question: "The kernel trick in SVM allows:", options: ["Linear separation only", "Non-linear decision boundaries", "Faster training", "Dimensionality reduction"], correct: 1, explanation: "Kernel trick maps data to higher dimensions implicitly, enabling non-linear boundaries." },
    { question: "K-Means requires specifying:", options: ["Learning rate", "Number of clusters k", "Tree depth", "Regularization"], correct: 1, explanation: "K-Means needs the number of clusters k as input (a key limitation)." },
    { question: "DBSCAN's advantage over K-Means:", options: ["Faster", "Finds arbitrary-shaped clusters", "Always better accuracy", "Needs fewer parameters"], correct: 1, explanation: "DBSCAN can find non-spherical clusters and doesn't need k specified." },
    { question: "RBF kernel maps data to:", options: ["1D", "Lower dimensions", "Infinite dimensions", "Same dimensions"], correct: 2, explanation: "The RBF (Gaussian) kernel implicitly maps to infinite-dimensional space." },
    { question: "The elbow method helps choose:", options: ["Learning rate", "Number of clusters", "Tree depth", "Batch size"], correct: 1, explanation: "Plot inertia vs k, choose k at the 'elbow' where improvement diminishes." },
  ],
  "io-ml-4": [
    { question: "5-fold cross-validation splits data into:", options: ["5 equal parts, train on 4, test on 1", "5 random samples", "Train and test only", "5 models"], correct: 0, explanation: "5-fold CV: split into 5 parts, each part is test set once, train on remaining 4." },
    { question: "High bias, low variance indicates:", options: ["Overfitting", "Underfitting", "Perfect fit", "Random performance"], correct: 1, explanation: "High bias = model too simple (underfitting). Low variance = consistent but wrong." },
    { question: "AUC of 0.5 means:", options: ["Perfect classifier", "Random classifier", "Always wrong", "Overfitting"], correct: 1, explanation: "AUC = 0.5 means the model performs no better than random chance." },
    { question: "Stratified K-fold ensures:", options: ["Equal class distribution in each fold", "Random splits", "Largest test set", "No repetition"], correct: 0, explanation: "Stratified sampling maintains the same class ratio in each fold." },
    { question: "SHAP values explain:", options: ["Training speed", "Individual prediction contributions", "Dataset size", "Model architecture"], correct: 1, explanation: "SHAP assigns each feature a contribution to a specific prediction (game theory based)." },
  ],
  "io-ml-5": [
    { question: "LIME explains predictions by:", options: ["Global analysis", "Fitting local interpretable model around prediction", "Removing features", "Gradient analysis"], correct: 1, explanation: "LIME perturbs input around the prediction and fits a simple model to explain the local decision." },
    { question: "Feature selection with mutual information measures:", options: ["Linear correlation", "Any statistical dependency between feature and target", "Feature variance", "Feature mean"], correct: 1, explanation: "Mutual information captures non-linear dependencies, unlike correlation." },
    { question: "Recursive Feature Elimination (RFE):", options: ["Adds features", "Removes least important features iteratively", "Randomly selects", "Uses PCA"], correct: 1, explanation: "RFE trains model, removes least important feature, retrains, repeats until desired count." },
    { question: "Target encoding for categorical features:", options: ["Uses one-hot", "Replaces category with mean target value", "Drops category", "Uses label encoding"], correct: 1, explanation: "Target encoding replaces each category with the mean of the target variable for that category." },
    { question: "Permutation importance measures:", options: ["Gradient magnitude", "Drop in performance when feature is shuffled", "Feature variance", "Correlation with target"], correct: 1, explanation: "Shuffle one feature's values and measure how much model performance decreases." },
  ],

  // ═══ Section 2: Neural Networks ═══

  "io-nn-1": [
    { question: "ReLU(−3) = ?", options: ["−3", "0", "3", "1"], correct: 1, explanation: "ReLU(x) = max(0, x). For x = −3: max(0, −3) = 0." },
    { question: "Sigmoid(0) = ?", options: ["0", "0.5", "1", "−1"], correct: 1, explanation: "σ(0) = 1/(1+e⁰) = 1/2 = 0.5." },
    { question: "GELU is used primarily in:", options: ["CNNs", "Transformers", "RNNs", "SVMs"], correct: 1, explanation: "GELU (Gaussian Error Linear Unit) is the standard activation in BERT, GPT, and modern Transformers." },
    { question: "Without activation functions, a deep network is equivalent to:", options: ["A deep network", "A single linear layer", "A random function", "An SVM"], correct: 1, explanation: "Composition of linear functions is linear. Non-linearity is essential for depth to matter." },
    { question: "Softmax ensures outputs:", options: ["Are negative", "Sum to 1", "Are integers", "Are binary"], correct: 1, explanation: "Softmax converts logits to probabilities: all positive and sum to 1." },
  ],
  "io-nn-2": [
    { question: "Backpropagation computes gradients:", options: ["Forward (input→output)", "Backward (output→input)", "Randomly", "Only for the last layer"], correct: 1, explanation: "Backprop propagates gradients from the loss backward through the network." },
    { question: "Cross-entropy loss for correct class with probability 0.9 is:", options: ["-log(0.9) ≈ 0.105", "-log(0.1) ≈ 2.303", "0.9", "0.1"], correct: 0, explanation: "CE loss = -log(p_correct) = -log(0.9) ≈ 0.105." },
    { question: "MSE loss for prediction 3 and target 5 is:", options: ["2", "4", "8", "1"], correct: 1, explanation: "MSE = (y - ŷ)² = (5 - 3)² = 4." },
    { question: "The forward pass computes:", options: ["Gradients", "Predictions from input", "Weight updates", "Learning rate"], correct: 1, explanation: "Forward pass: input → through layers → prediction/loss." },
    { question: "Gradient of MSE loss (y-ŷ)² w.r.t. ŷ is:", options: ["-2(y-ŷ)", "2(y-ŷ)", "(y-ŷ)", "2ŷ"], correct: 0, explanation: "∂/∂ŷ [(y-ŷ)²] = -2(y-ŷ). The negative sign is because we differentiate w.r.t. ŷ." },
  ],
  "io-nn-3": [
    { question: "Dropout with p=0.5 during training:", options: ["Zeros 50% of neurons randomly", "Halves learning rate", "Removes 50% of data", "Doubles batch size"], correct: 0, explanation: "Dropout randomly sets 50% of neuron outputs to zero during each training step." },
    { question: "Batch normalization normalizes across:", options: ["Features", "Batch dimension", "Time steps", "Channels only"], correct: 1, explanation: "BatchNorm normalizes across the batch dimension for each feature/channel." },
    { question: "Layer normalization normalizes across:", options: ["Batch dimension", "Feature dimension", "Time only", "Nothing"], correct: 1, explanation: "LayerNorm normalizes across features within each sample (used in Transformers)." },
    { question: "Weight decay is equivalent to:", options: ["L1 regularization", "L2 regularization", "Dropout", "Data augmentation"], correct: 1, explanation: "Weight decay adds λ||w||² to loss, which is L2 regularization." },
    { question: "ResNet's skip connection: y = F(x) + x helps with:", options: ["Speed", "Vanishing gradients", "Data augmentation", "Memory"], correct: 1, explanation: "Skip connections allow gradients to flow directly, preventing vanishing gradients in deep networks." },
  ],
  "io-nn-4": [
    { question: "Focal Loss was designed for:", options: ["Regression", "Class imbalance in detection", "Text generation", "Reinforcement learning"], correct: 1, explanation: "Focal Loss down-weights easy examples: -(1-pₜ)ᵧ·log(pₜ), originally for object detection." },
    { question: "Dice Loss coefficient equals 1.0 when:", options: ["No overlap", "Perfect overlap", "50% overlap", "Random prediction"], correct: 1, explanation: "Dice = 2|A∩B|/(|A|+|B|) = 1.0 when prediction perfectly matches ground truth." },
    { question: "Huber Loss combines:", options: ["L1 + L2", "MSE for small errors, MAE for large errors", "CE + MSE", "Focal + Dice"], correct: 1, explanation: "Huber: quadratic for small errors (smooth gradient), linear for large errors (robust to outliers)." },
    { question: "Label smoothing changes hard targets [0,0,1,0] to:", options: ["[0.025,0.025,0.925,0.025]", "[0,0,1,0]", "[0.25,0.25,0.25,0.25]", "[0,0,0.5,0.5]"], correct: 0, explanation: "Label smoothing: spread ε across classes. With ε=0.1: (1-ε)=0.9 for correct, ε/(K-1) for rest." },
    { question: "Contrastive Loss pulls together:", options: ["Random pairs", "Positive pairs (same class/augmentation)", "All examples", "Only negatives"], correct: 1, explanation: "Contrastive loss minimizes distance for positive pairs and maximizes for negative pairs." },
  ],

  // CNNs
  "io-cn-1": [
    { question: "A 3×3 conv on 5×5 input (no padding, stride 1) gives:", options: ["3×3", "5×5", "7×7", "1×1"], correct: 0, explanation: "Output = (5 - 3)/1 + 1 = 3. So 3×3 output." },
    { question: "Max pooling 2×2 on a 4×4 feature map gives:", options: ["2×2", "4×4", "1×1", "3×3"], correct: 0, explanation: "2×2 max pooling halves each dimension: 4/2 = 2. Output: 2×2." },
    { question: "'Same' padding preserves:", options: ["Spatial dimensions", "Channel count", "Batch size", "Nothing"], correct: 0, explanation: "Same padding adds zeros so output spatial size = input spatial size." },
    { question: "Stride 2 in convolution:", options: ["Doubles output size", "Halves output size", "Keeps same size", "Triples output size"], correct: 1, explanation: "Stride 2 moves the filter 2 pixels at a time, roughly halving the spatial dimensions." },
    { question: "Number of parameters in a 3×3 conv with 64 input and 128 output channels:", options: ["73,856", "36,928", "3,072", "128"], correct: 0, explanation: "Parameters = 3×3×64×128 + 128(bias) = 73,728 + 128 = 73,856." },
  ],
  "io-cn-2": [
    { question: "ResNet's key innovation is:", options: ["Deeper networks", "Skip connections", "Larger kernels", "More data"], correct: 1, explanation: "ResNet introduced skip/residual connections: y = F(x) + x." },
    { question: "VGG-16 uses which kernel size throughout?", options: ["1×1", "3×3", "5×5", "7×7"], correct: 1, explanation: "VGG uses 3×3 convolutions throughout the network (with occasional pooling)." },
    { question: "1×1 convolution is used for:", options: ["Spatial feature extraction", "Channel-wise mixing / dimensionality reduction", "Pooling", "Activation"], correct: 1, explanation: "1×1 conv mixes information across channels and can reduce/increase channel count." },
    { question: "AlexNet's breakthrough was partly due to:", options: ["CPU training", "ReLU activation + GPU training", "Small dataset", "Linear activation"], correct: 1, explanation: "AlexNet used ReLU (faster than sigmoid) and GPU training, winning ImageNet 2012." },
    { question: "Bottleneck block in ResNet uses convolutions:", options: ["3×3 only", "1×1 → 3×3 → 1×1", "5×5 → 3×3", "7×7 → 1×1"], correct: 1, explanation: "Bottleneck: 1×1 (reduce channels) → 3×3 (conv) → 1×1 (restore channels)." },
  ],
  "io-cn-3": [
    { question: "EfficientNet scales which three dimensions?", options: ["Depth, width, resolution", "Batch, channels, layers", "Learning rate, momentum, decay", "Height, width, depth"], correct: 0, explanation: "EfficientNet's compound scaling adjusts network depth, width, and input resolution together." },
    { question: "Receptive field refers to:", options: ["GPU memory", "Input region affecting one output neuron", "Number of filters", "Batch size"], correct: 1, explanation: "Receptive field = the region of the input that influences a particular output neuron." },
    { question: "Dilated (atrous) convolution increases:", options: ["Number of parameters", "Receptive field without more params", "Training speed", "Channel count"], correct: 1, explanation: "Dilated convolution inserts gaps in the kernel, enlarging receptive field without extra parameters." },
    { question: "ConvNeXt modernizes CNNs by borrowing from:", options: ["RNNs", "Transformers", "GANs", "Autoencoders"], correct: 1, explanation: "ConvNeXt adopts Transformer design choices (larger kernels, GELU, LayerNorm) for CNNs." },
    { question: "Depthwise separable convolution reduces:", options: ["Accuracy", "Parameter count significantly", "Input resolution", "Number of classes"], correct: 1, explanation: "Depthwise separable = depthwise conv + 1×1 pointwise conv. Much fewer parameters." },
  ],
  "io-cn-4": [
    { question: "Conv2d with 5×5 kernel, 32→64 channels has params:", options: ["51,264", "51,200", "1,600", "3,264"], correct: 0, explanation: "5×5×32×64 + 64(bias) = 51,200 + 64 = 51,264 parameters." },
    { question: "Two stacked 3×3 convs have same receptive field as:", options: ["3×3", "5×5", "7×7", "9×9"], correct: 1, explanation: "Two 3×3 = effective 5×5, with fewer parameters (2×3²=18 vs 5²=25 per channel)." },
    { question: "Output size of 3×3 conv on 32×32 input, padding=1, stride=2:", options: ["32×32", "16×16", "15×15", "30×30"], correct: 1, explanation: "((32-3+2×1)/2)+1 = (31/2)+1 = 16. Output: 16×16." },
    { question: "Global Average Pooling on (C,H,W) outputs:", options: ["(C,1,1)", "(1,H,W)", "(C,H,1)", "(1,1,1)"], correct: 0, explanation: "GAP averages each channel's spatial dimensions: (C,H,W) → (C,1,1)." },
    { question: "Dilated conv with rate 2 and 3×3 kernel has effective kernel:", options: ["3×3", "5×5", "7×7", "4×4"], correct: 1, explanation: "Effective = k + (k-1)(r-1) = 3 + 2×1 = 5. Effective 5×5 receptive field." },
  ],

  // RNNs
  "io-rn-1": [
    { question: "RNN hidden state depends on:", options: ["Only current input", "Current input + previous hidden state", "Only previous output", "Random initialization"], correct: 1, explanation: "h_t = f(W_h·h_{t-1} + W_x·x_t + b). Hidden state depends on both." },
    { question: "LSTM has how many gates?", options: ["2", "3", "4", "1"], correct: 1, explanation: "LSTM has 3 gates: forget, input, and output gate." },
    { question: "The forget gate in LSTM controls:", options: ["What new info to add", "What old info to discard", "The output", "The learning rate"], correct: 1, explanation: "Forget gate f_t decides which information from the cell state to throw away." },
    { question: "Vanilla RNNs struggle with:", options: ["Short sequences", "Long-range dependencies", "Small vocabularies", "Binary classification"], correct: 1, explanation: "Vanishing gradients make it hard for vanilla RNNs to learn long-range dependencies." },
    { question: "The cell state in LSTM acts as:", options: ["A gate", "A long-term memory highway", "An output layer", "A loss function"], correct: 1, explanation: "The cell state C_t carries information across time steps like a conveyor belt." },
  ],
  "io-rn-2": [
    { question: "GRU has how many gates?", options: ["1", "2", "3", "4"], correct: 1, explanation: "GRU has 2 gates: reset gate and update gate (simpler than LSTM's 3)." },
    { question: "Bidirectional RNN processes sequences:", options: ["Forward only", "Backward only", "Both forward and backward", "Random order"], correct: 2, explanation: "Bidirectional RNN runs two RNNs: one forward, one backward, concatenating outputs." },
    { question: "GRU's update gate z_t controls:", options: ["Forget and input combined", "Only output", "Learning rate", "Batch size"], correct: 0, explanation: "GRU's update gate combines the forget and input gate functions of LSTM." },
    { question: "For text classification, which RNN output is typically used?", options: ["First hidden state", "Last hidden state", "All hidden states averaged", "Cell state"], correct: 1, explanation: "The last hidden state summarizes the entire sequence for classification." },
    { question: "Gradient clipping in RNNs prevents:", options: ["Vanishing gradients", "Exploding gradients", "Overfitting", "Underfitting"], correct: 1, explanation: "Gradient clipping caps gradient magnitude to prevent exploding gradients." },
  ],
  "io-rn-3": [
    { question: "In seq2seq, the encoder produces:", options: ["Final predictions", "A context vector", "Training data", "Loss values"], correct: 1, explanation: "The encoder compresses the input sequence into a context vector for the decoder." },
    { question: "Teacher forcing means:", options: ["Using predicted output as next input", "Using ground truth as next input during training", "Forcing larger batches", "Using a teacher model"], correct: 1, explanation: "Teacher forcing feeds the correct previous token (not predicted) as input during training." },
    { question: "Attention in seq2seq allows the decoder to:", options: ["Ignore the encoder", "Focus on relevant encoder states", "Train faster", "Use less memory"], correct: 1, explanation: "Attention lets the decoder look at all encoder hidden states and focus on relevant ones." },
    { question: "The bottleneck problem in vanilla seq2seq:", options: ["Too many parameters", "Entire input compressed into single vector", "Too slow", "Requires GPU"], correct: 1, explanation: "Without attention, the entire input sequence must be compressed into one fixed-size context vector." },
    { question: "Beam search with beam width k=1 is equivalent to:", options: ["Random sampling", "Greedy decoding", "Exhaustive search", "Top-p sampling"], correct: 1, explanation: "Beam width 1 = always picking the single most probable token = greedy decoding." },
  ],

  // Transformers
  "io-tf-1": [
    { question: "In self-attention, Q, K, V are derived from:", options: ["Different inputs", "The same input X", "Random initialization", "The loss function"], correct: 1, explanation: "Q = XW_Q, K = XW_K, V = XW_V — all projected from the same input." },
    { question: "Why divide by √d_k in attention?", options: ["Normalize output", "Prevent softmax saturation", "Reduce computation", "Increase accuracy"], correct: 1, explanation: "Without scaling, large d_k makes dot products large, causing softmax to have near-zero gradients." },
    { question: "Attention(Q,K,V) = ?", options: ["softmax(QKᵀ/√d_k)V", "softmax(QV)K", "QKV", "sigmoid(QKᵀ)V"], correct: 0, explanation: "Scaled dot-product attention: softmax(QKᵀ/√d_k)V." },
    { question: "Self-attention complexity is O(?) in sequence length n:", options: ["n", "n log n", "n²", "n³"], correct: 2, explanation: "Computing QKᵀ for n tokens is O(n²) — the main computational bottleneck." },
    { question: "The attention matrix shows:", options: ["Weight magnitudes", "How much each token attends to every other token", "Learning rate", "Loss values"], correct: 1, explanation: "softmax(QKᵀ/√d_k) produces an n×n matrix of attention weights between all token pairs." },
  ],
  "io-tf-2": [
    { question: "Multi-head attention with h=8 and d_model=512 uses head dimension:", options: ["64", "512", "8", "4096"], correct: 0, explanation: "d_k = d_model / h = 512 / 8 = 64 per head." },
    { question: "Sinusoidal positional encoding uses:", options: ["Learned parameters", "Sin and cos functions of position", "Random values", "One-hot encoding"], correct: 1, explanation: "PE uses sin for even dimensions and cos for odd dimensions at different frequencies." },
    { question: "Why is positional encoding needed?", options: ["Transformers have no recurrence", "To reduce computation", "To increase batch size", "For regularization"], correct: 0, explanation: "Unlike RNNs, Transformers process all tokens in parallel — they need explicit position information." },
    { question: "Multi-head attention allows:", options: ["Attending to different representation subspaces", "Faster training", "Less memory", "Fewer parameters"], correct: 0, explanation: "Each head can learn to attend to different types of relationships in different subspaces." },
    { question: "The feed-forward network in a Transformer block typically has:", options: ["1 layer", "2 layers with GELU", "3 layers", "No layers"], correct: 1, explanation: "FFN = Linear(d_model, 4×d_model) → GELU → Linear(4×d_model, d_model)." },
  ],
  "io-tf-3": [
    { question: "BERT is pre-trained with:", options: ["Autoregressive LM", "Masked Language Modeling + NSP", "Image classification", "Reinforcement learning"], correct: 1, explanation: "BERT uses Masked LM (predict masked tokens) and Next Sentence Prediction." },
    { question: "GPT is which type of model?", options: ["Encoder-only", "Decoder-only (autoregressive)", "Encoder-decoder", "CNN-based"], correct: 1, explanation: "GPT is decoder-only: generates tokens left-to-right, autoregressively." },
    { question: "ViT treats an image as:", options: ["Pixel grid", "Sequence of patches", "Frequency spectrum", "Graph"], correct: 1, explanation: "ViT splits image into patches (e.g., 16×16), flattens them, and processes as a sequence." },
    { question: "BERT's [CLS] token is used for:", options: ["Padding", "Sequence-level classification", "Masking", "Positional info"], correct: 1, explanation: "[CLS] token's final representation is used as the aggregate sequence representation for classification." },
    { question: "Transfer learning with Transformers typically involves:", options: ["Training from scratch", "Fine-tuning pre-trained model on downstream task", "Only using embeddings", "Removing attention layers"], correct: 1, explanation: "Pre-train on large data, then fine-tune on smaller task-specific data." },
  ],
  "io-tf-4": [
    { question: "Flash Attention improves performance by:", options: ["Approximating attention", "IO-aware tiling of exact attention", "Removing softmax", "Using linear attention"], correct: 1, explanation: "Flash Attention computes exact attention but tiles the computation to minimize memory IO." },
    { question: "Sparse attention reduces complexity to:", options: ["O(n²)", "O(n√n) or O(n·log n)", "O(1)", "O(n³)"], correct: 1, explanation: "Sparse patterns (local + global) attend to O(√n) or O(log n) tokens instead of all n." },
    { question: "Linear attention replaces softmax with:", options: ["ReLU", "Kernel feature maps φ(Q)φ(K)ᵀ", "Sigmoid", "Nothing"], correct: 1, explanation: "Linear attention: φ(Q)(φ(K)ᵀV) can be computed in O(n·d²) instead of O(n²·d)." },
    { question: "KV-cache in autoregressive generation stores:", options: ["All tokens", "Previous K and V to avoid recomputation", "Only the last token", "Gradients"], correct: 1, explanation: "KV-cache stores previous keys/values so only the new token's attention needs computation." },
    { question: "Grouped Query Attention (GQA) uses:", options: ["One KV head per query head", "Fewer KV heads shared across query heads", "No attention", "Random grouping"], correct: 1, explanation: "GQA uses fewer K,V heads (shared across groups of Q heads) to reduce memory while maintaining quality." },
  ],

  // Generative Models
  "io-gm-1": [
    { question: "VAE's loss function combines:", options: ["MSE only", "Reconstruction loss + KL divergence", "Cross-entropy only", "Hinge loss"], correct: 1, explanation: "VAE loss = reconstruction loss + KL(q(z|x) || p(z)) to regularize latent space." },
    { question: "In GANs, the generator tries to:", options: ["Classify images", "Fool the discriminator", "Minimize MSE", "Maximize entropy"], correct: 1, explanation: "Generator creates fake images to fool the discriminator into thinking they're real." },
    { question: "Mode collapse in GANs means:", options: ["Training converges", "Generator produces limited variety", "Discriminator wins", "Loss becomes zero"], correct: 1, explanation: "Mode collapse: generator produces only a few types of outputs, ignoring diversity." },
    { question: "The latent space in VAE is regularized to be:", options: ["Uniform", "Gaussian", "Binary", "Categorical"], correct: 1, explanation: "KL divergence term pushes the latent distribution toward standard Gaussian N(0,I)." },
    { question: "GAN training is often described as:", options: ["Cooperative learning", "Minimax game", "Supervised learning", "Self-supervised learning"], correct: 1, explanation: "GAN = minimax game between generator (minimize) and discriminator (maximize)." },
  ],
  "io-gm-2": [
    { question: "Diffusion models work by:", options: ["Adding then removing noise", "Adversarial training", "Autoregressive generation", "Matrix factorization"], correct: 0, explanation: "Forward: gradually add noise. Reverse: learn to denoise step by step." },
    { question: "DDPM stands for:", options: ["Deep Dense Predictive Model", "Denoising Diffusion Probabilistic Model", "Direct Data Processing Method", "Dual Discriminator Proxy Model"], correct: 1, explanation: "DDPM = Denoising Diffusion Probabilistic Model." },
    { question: "Stable Diffusion operates in:", options: ["Pixel space", "Latent space", "Frequency space", "Graph space"], correct: 1, explanation: "Stable Diffusion runs diffusion in latent space (encoded by VAE), making it much faster." },
    { question: "The number of diffusion timesteps T is typically:", options: ["10", "100", "1000", "10000"], correct: 2, explanation: "DDPM typically uses T=1000 timesteps, though modern samplers use fewer (20-50)." },
    { question: "Classifier-free guidance in diffusion models:", options: ["Removes the classifier", "Interpolates between conditional and unconditional", "Adds a classifier", "Reduces quality"], correct: 1, explanation: "CFG: output = unconditional + guidance_scale × (conditional - unconditional)." },
  ],
  "io-gm-3": [
    { question: "FID (Fréchet Inception Distance) measures:", options: ["Training speed", "Distance between real and generated distributions", "Model size", "Number of parameters"], correct: 1, explanation: "FID compares feature distributions of real vs generated images. Lower = better." },
    { question: "Lower FID score means:", options: ["Worse quality", "Better quality (closer to real)", "Faster generation", "More diversity"], correct: 1, explanation: "FID measures distance: lower = generated images are more similar to real images." },
    { question: "Inception Score (IS) evaluates:", options: ["Only quality", "Quality and diversity", "Only diversity", "Speed"], correct: 1, explanation: "IS measures both quality (confident classifications) and diversity (varied classes)." },
    { question: "CLIP score for text-to-image measures:", options: ["Image resolution", "Text-image alignment", "Generation speed", "Model size"], correct: 1, explanation: "CLIP score measures how well the generated image matches the text prompt." },
    { question: "Human evaluation is still needed because:", options: ["Metrics are perfect", "Automatic metrics don't fully capture perceptual quality", "It's cheaper", "It's faster"], correct: 1, explanation: "FID/IS don't perfectly correlate with human perception of quality, coherence, and aesthetics." },
  ],
  "io-gm-4": [
    { question: "Normalizing flows transform a simple distribution through:", options: ["Random operations", "Invertible transformations", "Non-invertible layers", "Dropping dimensions"], correct: 1, explanation: "Flows use a chain of invertible transformations: simple distribution → complex distribution." },
    { question: "Score-based models learn:", options: ["Class labels", "The gradient of the log probability (score function)", "Discriminator output", "Reconstruction error"], correct: 1, explanation: "Score-based models estimate ∇ₓ log p(x), the score function, for generation via Langevin dynamics." },
    { question: "Autoregressive image generation (like PixelCNN) generates:", options: ["Entire image at once", "One pixel at a time conditioned on previous", "Patches", "Random noise"], correct: 1, explanation: "Autoregressive: model p(x) = Πp(xᵢ|x₁,...,xᵢ₋₁), generating sequentially." },
    { question: "The reparameterization trick in VAE allows:", options: ["Sampling without gradients", "Backprop through sampling: z = μ + σ·ε", "Faster training", "Removing KL loss"], correct: 1, explanation: "Instead of sampling z ~ N(μ,σ²), compute z = μ + σ·ε where ε ~ N(0,1). Gradients flow through μ,σ." },
    { question: "Energy-Based Models (EBMs) define:", options: ["Probabilities directly", "An energy function where low energy = high probability", "A discriminator", "A generator only"], correct: 1, explanation: "EBMs: p(x) ∝ exp(-E(x)). Low energy states are more probable." },
  ],

  // ═══ Section 3: Computer Vision ═══

  "io-ic-1": [
    { question: "CutOut augmentation:", options: ["Crops edges", "Randomly masks rectangular regions", "Adds noise", "Rotates image"], correct: 1, explanation: "CutOut randomly masks out square regions of the input image during training." },
    { question: "MixUp creates training samples by:", options: ["Cropping", "Linearly interpolating two images and labels", "Adding noise", "Flipping"], correct: 1, explanation: "MixUp: x̃ = λx₁ + (1-λ)x₂, ỹ = λy₁ + (1-λ)y₂ for random λ." },
    { question: "CutMix combines ideas from:", options: ["CutOut and MixUp", "Dropout and BatchNorm", "ResNet and VGG", "SGD and Adam"], correct: 0, explanation: "CutMix replaces a region of one image with a patch from another, mixing labels proportionally." },
    { question: "Data augmentation helps prevent:", options: ["Underfitting", "Overfitting", "Data loading", "GPU errors"], correct: 1, explanation: "Augmentation creates artificial training variety, reducing overfitting." },
    { question: "RandAugment simplifies augmentation by:", options: ["Using fixed augmentations", "Randomly selecting from a pool of transforms", "No augmentation", "Only using flips"], correct: 1, explanation: "RandAugment randomly applies N transforms from a pool, each with magnitude M." },
  ],
  "io-ic-2": [
    { question: "Fine-tuning a pretrained model typically:", options: ["Trains from scratch", "Freezes early layers, trains later layers", "Removes all weights", "Only changes the optimizer"], correct: 1, explanation: "Common strategy: freeze early feature extraction layers, fine-tune later task-specific layers." },
    { question: "Feature extraction uses pretrained model as:", options: ["Generator", "Fixed feature extractor (frozen weights)", "Discriminator", "Loss function"], correct: 1, explanation: "Feature extraction: use pretrained model with frozen weights, only train new classification head." },
    { question: "ImageNet pre-training provides:", options: ["Task-specific features", "General visual features transferable to other tasks", "Audio features", "Text features"], correct: 1, explanation: "ImageNet-pretrained models learn general features (edges, textures, objects) useful for many tasks." },
    { question: "When the target dataset is very different from ImageNet:", options: ["Fine-tune all layers", "Only use last layer", "Don't use transfer learning", "Freeze all layers"], correct: 0, explanation: "For dissimilar domains, fine-tuning more/all layers lets the model adapt its features." },
    { question: "Learning rate for fine-tuning is typically:", options: ["Same as pre-training", "Much smaller than pre-training", "Much larger", "Zero"], correct: 1, explanation: "Use smaller LR (e.g., 1e-5 vs 1e-3) to make small adjustments without destroying learned features." },
  ],
  "io-ic-3": [
    { question: "Fine-grained classification distinguishes:", options: ["Dogs vs cats", "Dog breeds (very similar subcategories)", "Objects vs background", "Real vs fake"], correct: 1, explanation: "Fine-grained: distinguish very similar subcategories (bird species, car models, dog breeds)." },
    { question: "Multi-label classification differs from multi-class by:", options: ["More classes", "Multiple labels can be active simultaneously", "Binary output", "Single label per image"], correct: 1, explanation: "Multi-label: an image can have multiple labels (e.g., 'beach' AND 'sunset' AND 'people')." },
    { question: "For multi-label, the loss function is typically:", options: ["Softmax + CE", "Binary CE per label", "MSE", "Hinge loss"], correct: 1, explanation: "Multi-label uses independent sigmoid + BCE per label, not softmax (which assumes mutual exclusivity)." },
    { question: "Attention pooling in fine-grained classification:", options: ["Averages everything", "Focuses on discriminative regions", "Removes pooling", "Uses max only"], correct: 1, explanation: "Attention mechanisms help focus on subtle distinguishing features (beak shape, wing pattern)." },
    { question: "Test-Time Augmentation (TTA):", options: ["Augments training data", "Augments test input and averages predictions", "Reduces test time", "Removes augmentation"], correct: 1, explanation: "TTA: apply multiple augmentations to test image, average predictions for more robust output." },
  ],

  "io-od-1": [
    { question: "Faster R-CNN has two stages:", options: ["Feature extraction + classification", "Region proposal + classification/regression", "Encoding + decoding", "Training + testing"], correct: 1, explanation: "Stage 1: RPN generates region proposals. Stage 2: classify and refine bounding boxes." },
    { question: "Anchors in detection are:", options: ["Learned features", "Pre-defined boxes of various sizes/ratios", "Data augmentation", "Loss functions"], correct: 1, explanation: "Anchors are pre-defined bounding boxes at each spatial location with various aspect ratios and scales." },
    { question: "SSD detects objects at:", options: ["Single scale", "Multiple feature map scales", "Only the last layer", "Input resolution only"], correct: 1, explanation: "SSD uses feature maps from multiple layers to detect objects of different sizes." },
    { question: "ROI Pooling converts variable-size regions to:", options: ["Variable output", "Fixed-size feature maps", "Single pixel", "Full image"], correct: 1, explanation: "ROI Pooling extracts fixed-size feature maps from arbitrary-sized region proposals." },
    { question: "RPN (Region Proposal Network) predicts:", options: ["Final classes", "Objectness score + box adjustments", "Segmentation masks", "Depth maps"], correct: 1, explanation: "RPN predicts whether each anchor contains an object and refines the bounding box." },
  ],
  "io-od-2": [
    { question: "YOLO processes the entire image in:", options: ["Multiple passes", "One pass (hence 'You Only Look Once')", "Per-pixel", "Per-region"], correct: 1, explanation: "YOLO divides image into grid and predicts all boxes and classes in a single forward pass." },
    { question: "Anchor-free detectors like FCOS predict:", options: ["Anchor offsets", "Distance from each pixel to box edges", "Region proposals", "Fixed boxes"], correct: 1, explanation: "FCOS predicts distances from each pixel to the four edges of the bounding box (l, t, r, b)." },
    { question: "YOLO's main advantage over Faster R-CNN:", options: ["Higher accuracy", "Real-time speed", "Better for small objects", "Less training data needed"], correct: 1, explanation: "YOLO is much faster (real-time) due to single-pass detection, though may sacrifice some accuracy." },
    { question: "CenterNet detects objects as:", options: ["Corners", "Center points with size", "Edges", "Full masks"], correct: 1, explanation: "CenterNet models objects as center points and regresses other properties (size, offset)." },
    { question: "FPN (Feature Pyramid Network) helps detect:", options: ["Only large objects", "Objects at multiple scales", "Only small objects", "Background"], correct: 1, explanation: "FPN creates multi-scale feature maps by combining high-level semantics with low-level details." },
  ],
  "io-od-3": [
    { question: "IoU of 0.75 means:", options: ["75% overlap between predicted and ground truth", "25% overlap", "75% accuracy", "75% recall"], correct: 0, explanation: "IoU = Area(intersection) / Area(union). 0.75 means 75% overlap." },
    { question: "NMS removes:", options: ["All detections", "Duplicate overlapping detections", "True positives", "Background"], correct: 1, explanation: "NMS keeps the highest confidence box and removes others with IoU above threshold." },
    { question: "mAP averages AP across:", options: ["IoU thresholds only", "Classes only", "Both classes and IoU thresholds", "Batch sizes"], correct: 2, explanation: "mAP = mean Average Precision, typically averaged over classes and IoU thresholds (0.5:0.95)." },
    { question: "AP (Average Precision) is the area under:", options: ["ROC curve", "Precision-Recall curve", "Loss curve", "Learning curve"], correct: 1, explanation: "AP = area under the precision-recall curve for a specific class and IoU threshold." },
    { question: "Soft-NMS differs from hard NMS by:", options: ["Removing all boxes", "Reducing scores instead of removing", "Using random selection", "No difference"], correct: 1, explanation: "Soft-NMS decays detection scores of overlapping boxes instead of removing them entirely." },
  ],

  "io-sg-1": [
    { question: "U-Net's key feature is:", options: ["No skip connections", "Encoder-decoder with skip connections", "Only encoder", "Only decoder"], correct: 1, explanation: "U-Net connects encoder layers to decoder layers via skip connections, preserving spatial detail." },
    { question: "DeepLab uses atrous convolution for:", options: ["Smaller receptive field", "Larger receptive field without more parameters", "Faster inference", "Less memory"], correct: 1, explanation: "Atrous (dilated) convolution expands the receptive field without increasing parameters." },
    { question: "Dice Loss is particularly good for:", options: ["Classification", "Segmentation with class imbalance", "Detection", "Generation"], correct: 1, explanation: "Dice = 2|A∩B|/(|A|+|B|). Works well when foreground is much smaller than background." },
    { question: "In semantic segmentation, each pixel gets:", options: ["A bounding box", "A class label", "An instance ID", "A depth value"], correct: 1, explanation: "Semantic segmentation assigns a class label to every pixel (no instance distinction)." },
    { question: "ASPP in DeepLab stands for:", options: ["Average Spatial Pyramid Pooling", "Atrous Spatial Pyramid Pooling", "Adaptive Signal Processing Pipeline", "Attention-based SPP"], correct: 1, explanation: "ASPP applies atrous convolutions at multiple rates to capture multi-scale context." },
  ],
  "io-sg-2": [
    { question: "Mask R-CNN extends Faster R-CNN with:", options: ["Larger backbone", "Per-pixel mask prediction branch", "More anchors", "Deeper layers"], correct: 1, explanation: "Mask R-CNN adds a binary mask prediction branch parallel to classification and box regression." },
    { question: "Panoptic segmentation combines:", options: ["Detection + classification", "Semantic + instance segmentation", "Depth + segmentation", "Color + shape"], correct: 1, explanation: "Panoptic = semantic segmentation (stuff) + instance segmentation (things) in one unified output." },
    { question: "Instance segmentation differs from semantic by:", options: ["Lower resolution", "Distinguishing individual object instances", "No class labels", "Only background"], correct: 1, explanation: "Instance segmentation gives each individual object its own mask, even objects of the same class." },
    { question: "ROIAlign (used in Mask R-CNN) improves upon ROI Pooling by:", options: ["Being faster", "Using bilinear interpolation for precise alignment", "Using larger regions", "Removing quantization"], correct: 1, explanation: "ROIAlign uses bilinear interpolation instead of quantization, giving pixel-precise features." },
    { question: "Focal Loss down-weights:", options: ["All examples", "Easy/well-classified examples", "Hard examples", "Background only"], correct: 1, explanation: "Focal Loss: -(1-p)ᵧ·log(p). The (1-p)ᵧ term reduces loss for well-classified (high p) examples." },
  ],

  "io-vr-1": [
    { question: "SimCLR uses which type of learning?", options: ["Supervised", "Contrastive self-supervised", "Reinforcement", "GAN-based"], correct: 1, explanation: "SimCLR learns by pulling augmented views of same image together, pushing different images apart." },
    { question: "In contrastive learning, positive pairs are:", options: ["Different images", "Augmented views of the same image", "Random pairs", "Labeled pairs"], correct: 1, explanation: "Positive pair = two different augmentations of the same image." },
    { question: "MoCo's key innovation is:", options: ["Larger batch sizes", "Momentum-updated encoder + queue of negatives", "New loss function", "Better augmentation"], correct: 1, explanation: "MoCo uses a slowly-updated (momentum) encoder and maintains a large queue of negative examples." },
    { question: "DINO learns by:", options: ["Adversarial training", "Self-distillation (student-teacher)", "Masked prediction", "Contrastive loss"], correct: 1, explanation: "DINO: student learns to match teacher (EMA of student), no labels needed." },
    { question: "MAE pre-training masks what percentage of patches?", options: ["25%", "50%", "75%", "90%"], correct: 2, explanation: "MAE masks 75% of image patches and trains the model to reconstruct them." },
  ],
  "io-vr-2": [
    { question: "CLIP aligns:", options: ["Images with images", "Text with text", "Images with text in shared space", "Audio with video"], correct: 2, explanation: "CLIP learns a shared embedding space where matching images and texts are close together." },
    { question: "Zero-shot classification with CLIP requires:", options: ["Fine-tuning", "No task-specific training", "Labeled data", "Multiple epochs"], correct: 1, explanation: "CLIP classifies by comparing image embedding with text embeddings of class names — no training needed." },
    { question: "CLIP was trained on:", options: ["ImageNet only", "400M image-text pairs from internet", "CIFAR-10", "Manual annotations"], correct: 1, explanation: "CLIP was trained on 400 million image-text pairs collected from the internet." },
    { question: "For zero-shot with CLIP, class names are formatted as:", options: ["Numbers", "\"a photo of a {class}\"", "One-hot vectors", "Binary codes"], correct: 1, explanation: "Prompt templates like 'a photo of a {class}' convert class names to text for CLIP encoding." },
    { question: "CLIP is a foundation for:", options: ["Only classification", "Stable Diffusion, DALL-E, open-vocabulary detection", "Only retrieval", "Only captioning"], correct: 1, explanation: "CLIP's image-text alignment powers text-to-image generation, detection, and many other tasks." },
  ],
  "io-vr-3": [
    { question: "DINO's teacher network is updated via:", options: ["Backpropagation", "Exponential Moving Average of student", "Random resets", "Manual copying"], correct: 1, explanation: "Teacher = EMA of student: θ_teacher = m·θ_teacher + (1-m)·θ_student, with m close to 1." },
    { question: "MAE's encoder only processes:", options: ["All patches", "Visible (unmasked) patches only", "Masked patches only", "Random subset"], correct: 1, explanation: "MAE encoder only sees the 25% visible patches, making pre-training very efficient." },
    { question: "DINOv2 produces features useful for:", options: ["Only classification", "Many tasks without fine-tuning (universal features)", "Only detection", "Only segmentation"], correct: 1, explanation: "DINOv2 learns universal visual features that work well across tasks with simple linear probes." },
    { question: "Self-supervised pre-training's main advantage:", options: ["Needs more labeled data", "Learns from unlabeled data at scale", "Faster than supervised", "Simpler models"], correct: 1, explanation: "Self-supervised methods leverage vast amounts of unlabeled data, which is much cheaper to collect." },
    { question: "The InfoNCE loss in contrastive learning is related to:", options: ["MSE", "Mutual information lower bound", "KL divergence", "Hinge loss"], correct: 1, explanation: "InfoNCE is a lower bound on mutual information between positive pairs." },
  ],

  "io-ig-1": [
    { question: "Stable Diffusion's U-Net denoiser uses cross-attention with:", options: ["Image features", "Text embeddings from CLIP", "Audio features", "Random noise"], correct: 1, explanation: "Text embeddings from CLIP's text encoder are injected via cross-attention into the U-Net." },
    { question: "Classifier-free guidance scale > 1:", options: ["Reduces quality", "Increases text-image alignment at cost of diversity", "Has no effect", "Speeds up generation"], correct: 1, explanation: "Higher guidance scale = stronger text conditioning = more aligned but less diverse." },
    { question: "ControlNet adds:", options: ["Text conditioning", "Spatial conditioning (edges, poses, depth)", "Audio conditioning", "Temporal conditioning"], correct: 1, explanation: "ControlNet adds spatial control signals (Canny edges, poses, depth maps) to diffusion models." },
    { question: "Latent diffusion is faster than pixel diffusion because:", options: ["Simpler model", "Lower-dimensional latent space", "No U-Net", "No text conditioning"], correct: 1, explanation: "Operating in compressed latent space (e.g., 64×64 vs 512×512) dramatically reduces computation." },
    { question: "DALL-E 2 generates images using:", options: ["GANs", "Diffusion model conditioned on CLIP embeddings", "Autoregressive model", "VAE only"], correct: 1, explanation: "DALL-E 2: CLIP text → CLIP image embedding (prior) → diffusion decoder → image." },
  ],
  "io-ig-2": [
    { question: "pix2pix requires:", options: ["Unpaired data", "Paired input-output images", "Only input images", "Only output images"], correct: 1, explanation: "pix2pix needs paired training data: (input image, corresponding output image)." },
    { question: "CycleGAN's key innovation for unpaired translation:", options: ["Larger GAN", "Cycle consistency loss", "More data", "Better discriminator"], correct: 1, explanation: "Cycle consistency: translate A→B→A should reconstruct A. Enables training without paired data." },
    { question: "Super-resolution increases:", options: ["Color depth", "Spatial resolution of images", "Number of channels", "Batch size"], correct: 1, explanation: "Super-resolution upscales low-resolution images to higher resolution (e.g., 64×64 → 256×256)." },
    { question: "ESRGAN stands for:", options: ["Enhanced Super-Resolution GAN", "Efficient SR Global Attention Net", "Extreme Scale Resolution Architecture", "Edge-Sensitive Reconstruction GAN"], correct: 0, explanation: "ESRGAN = Enhanced Super-Resolution GAN, producing photorealistic upscaled images." },
    { question: "Neural style transfer combines:", options: ["Content of one image + style of another", "Two styles", "Two contents", "Random noise"], correct: 0, explanation: "Style transfer: content features from content image + Gram matrix style features from style image." },
  ],

  // ═══ Section 4: NLP & Audio ═══

  "io-tp-1": [
    { question: "BPE tokenization works by:", options: ["Splitting at spaces", "Iteratively merging most frequent character pairs", "Using a dictionary", "Random splitting"], correct: 1, explanation: "BPE starts with characters and iteratively merges the most frequent adjacent pairs." },
    { question: "WordPiece differs from BPE by using:", options: ["Frequency", "Likelihood to select merges", "Random selection", "Character-level only"], correct: 1, explanation: "WordPiece selects merges that maximize the likelihood of the training data, not just frequency." },
    { question: "SentencePiece advantage:", options: ["English only", "Language-agnostic (no pre-tokenization needed)", "Faster", "Smaller vocabulary"], correct: 1, explanation: "SentencePiece treats input as raw characters, working for any language including those without spaces." },
    { question: "Subword tokenization handles unknown words by:", options: ["Ignoring them", "Breaking into known subword units", "Replacing with [UNK]", "Removing them"], correct: 1, explanation: "Subword methods break rare/unknown words into known pieces: 'unhappily' → ['un','happi','ly']." },
    { question: "Typical vocabulary size for modern LLMs:", options: ["1,000", "10,000", "32,000-100,000", "1,000,000"], correct: 2, explanation: "Modern tokenizers use 32K-100K tokens (GPT: 50K, LLaMA: 32K)." },
  ],
  "io-tp-2": [
    { question: "Word2Vec Skip-gram predicts:", options: ["Center word from context", "Context words from center word", "Next sentence", "Paragraph topic"], correct: 1, explanation: "Skip-gram: given center word, predict surrounding context words." },
    { question: "The famous Word2Vec analogy: king - man + woman ≈ ?", options: ["Princess", "Queen", "Girl", "Lady"], correct: 1, explanation: "Word2Vec captures semantic relationships: king - man + woman ≈ queen." },
    { question: "GloVe learns embeddings from:", options: ["Sequential text", "Global word co-occurrence statistics", "Parse trees", "Knowledge graphs"], correct: 1, explanation: "GloVe factorizes the log of the global word co-occurrence matrix." },
    { question: "Contextual embeddings differ from static because:", options: ["They're smaller", "Same word gets different embeddings based on context", "They're random", "They're one-hot"], correct: 1, explanation: "'bank' gets different embeddings in 'river bank' vs 'bank account' with contextual models." },
    { question: "FastText represents words as:", options: ["Single vectors", "Sum of character n-gram vectors", "One-hot vectors", "TF-IDF scores"], correct: 1, explanation: "FastText = sum of character n-gram embeddings, enabling embeddings for unseen words." },
  ],
  "io-tp-3": [
    { question: "Sentence-BERT is fine-tuned for:", options: ["Translation", "Sentence similarity and retrieval", "NER", "Summarization"], correct: 1, explanation: "SBERT produces sentence embeddings optimized for cosine similarity comparison." },
    { question: "Mean pooling over BERT token embeddings gives:", options: ["Word embedding", "Sentence embedding", "Document embedding", "Nothing useful"], correct: 1, explanation: "Averaging all token embeddings from BERT produces a simple sentence representation." },
    { question: "Dense retrieval uses embeddings for:", options: ["Keyword matching", "Semantic similarity search", "Exact string matching", "Regex search"], correct: 1, explanation: "Dense retrieval encodes queries and documents into embeddings, matching by cosine similarity." },
    { question: "Contrastive learning for sentence embeddings trains with:", options: ["Random pairs", "Positive/negative sentence pairs", "Single sentences", "Keywords"], correct: 1, explanation: "Train with (anchor, positive) pairs and hard negatives to learn discriminative sentence embeddings." },
    { question: "The dimensionality of typical sentence embeddings is:", options: ["10-50", "100-1024", "10,000+", "1-5"], correct: 1, explanation: "Common dimensions: 384 (MiniLM), 768 (BERT-base), 1024 (BERT-large)." },
  ],

  "io-nt-1": [
    { question: "Named Entity Recognition (NER) identifies:", options: ["Sentiment", "Named entities (people, places, orgs) in text", "Grammar errors", "Translations"], correct: 1, explanation: "NER finds and classifies named entities: 'Barack Obama [PERSON] visited Paris [LOCATION]'." },
    { question: "Sentiment analysis is a type of:", options: ["Generation", "Text classification", "Translation", "Summarization"], correct: 1, explanation: "Sentiment analysis classifies text into sentiment categories (positive/negative/neutral)." },
    { question: "BIO tagging in NER: 'B-PER' means:", options: ["Background person", "Beginning of a Person entity", "Binary person", "Bad person tag"], correct: 1, explanation: "B = Beginning of entity, I = Inside entity, O = Outside. B-PER = start of Person entity." },
    { question: "For NER, the model predicts:", options: ["One label per sentence", "One label per token", "One label per paragraph", "Binary label"], correct: 1, explanation: "NER is a token-level classification task: each token gets a label (B-PER, I-PER, O, etc.)." },
    { question: "Fine-tuning BERT for classification adds:", options: ["More BERT layers", "A classification head on [CLS] token", "A new tokenizer", "More pre-training"], correct: 1, explanation: "Add a linear layer on top of [CLS] token output for classification, fine-tune end-to-end." },
  ],
  "io-nt-2": [
    { question: "Extractive QA selects answers from:", options: ["Generated text", "The input passage", "A database", "Random words"], correct: 1, explanation: "Extractive QA identifies start and end positions of the answer span within the given passage." },
    { question: "Abstractive summarization:", options: ["Copies sentences", "Generates new sentences", "Deletes sentences", "Reorders sentences"], correct: 1, explanation: "Abstractive summarization generates novel sentences that capture the key information." },
    { question: "ROUGE metric measures:", options: ["Fluency", "N-gram overlap between generated and reference", "Grammar", "Vocabulary size"], correct: 1, explanation: "ROUGE measures recall-oriented n-gram overlap between system and reference summaries." },
    { question: "BLEU is primarily used for evaluating:", options: ["Classification", "Machine translation", "NER", "Sentiment"], correct: 1, explanation: "BLEU measures precision of n-grams in machine translation output vs reference translations." },
    { question: "Generative QA differs from extractive by:", options: ["Being faster", "Generating answers not necessarily in the passage", "Using less data", "Being simpler"], correct: 1, explanation: "Generative QA can produce answers that don't appear verbatim in the context." },
  ],
  "io-nt-3": [
    { question: "Attention in machine translation allows:", options: ["Parallel translation", "Aligning source and target words", "Faster tokenization", "Smaller models"], correct: 1, explanation: "Attention creates soft alignment between source and target positions during translation." },
    { question: "The encoder in seq2seq translation processes:", options: ["Target language", "Source language", "Both languages", "Neither"], correct: 1, explanation: "Encoder processes source language, decoder generates target language." },
    { question: "BLEU-4 uses n-grams up to:", options: ["1", "2", "4", "8"], correct: 2, explanation: "BLEU-4 computes precision for 1-grams, 2-grams, 3-grams, and 4-grams." },
    { question: "Modern MT systems are primarily based on:", options: ["Rule-based", "Statistical phrase-based", "Transformer encoder-decoder", "RNN only"], correct: 2, explanation: "Modern machine translation uses Transformer encoder-decoder architectures." },
    { question: "Back-translation is a data augmentation technique that:", options: ["Translates target→source to create synthetic training data", "Reverses word order", "Translates to a third language", "Removes translations"], correct: 0, explanation: "Back-translation: translate target→source to generate more parallel training pairs." },
  ],

  // LLMs
  "io-lm-1": [
    { question: "Nucleus (top-p) sampling with p=0.9:", options: ["Picks top 90% of tokens", "Samples from smallest set with cumulative prob ≥ 0.9", "Uses 90% of the vocabulary", "Sets temperature to 0.9"], correct: 1, explanation: "Top-p dynamically selects the smallest token set whose cumulative probability reaches p." },
    { question: "Temperature T < 1 makes outputs:", options: ["More random", "More focused/deterministic", "Unchanged", "Longer"], correct: 1, explanation: "T < 1 sharpens the probability distribution, making high-probability tokens even more likely." },
    { question: "Few-shot prompting provides:", options: ["No examples", "A few input-output examples in the prompt", "Fine-tuning data", "Gradients"], correct: 1, explanation: "Few-shot: include 2-5 examples in the prompt to demonstrate the desired behavior." },
    { question: "Chain-of-thought prompting:", options: ["Speeds up generation", "Asks the model to show reasoning steps", "Reduces token usage", "Removes examples"], correct: 1, explanation: "CoT prompting elicits step-by-step reasoning, improving performance on complex tasks." },
    { question: "Greedy decoding always picks:", options: ["Random token", "Most probable token", "Least probable token", "Second most probable"], correct: 1, explanation: "Greedy decoding deterministically selects the token with highest probability at each step." },
  ],
  "io-lm-2": [
    { question: "LoRA adds trainable matrices of rank:", options: ["Full rank", "Low rank (r << d)", "Rank 1 only", "Random rank"], correct: 1, explanation: "LoRA decomposes weight update as BA where B is (d×r) and A is (r×d), with small r (4-64)." },
    { question: "LoRA trains what percentage of parameters?", options: ["100%", "~0.1-1%", "50%", "10%"], correct: 1, explanation: "LoRA typically trains only 0.1-1% of total parameters, making fine-tuning very efficient." },
    { question: "RLHF stands for:", options: ["Rapid Learning with High Fidelity", "Reinforcement Learning from Human Feedback", "Recursive Learning Heuristic Framework", "Real-time LLM Human Feedback"], correct: 1, explanation: "RLHF: train a reward model from human preferences, then optimize the LLM using PPO." },
    { question: "DPO simplifies RLHF by:", options: ["Adding more steps", "Eliminating the reward model", "Using more human feedback", "Training longer"], correct: 1, explanation: "DPO directly optimizes from preference pairs without training a separate reward model." },
    { question: "QLoRA combines LoRA with:", options: ["Pruning", "4-bit quantization", "Distillation", "Data augmentation"], correct: 1, explanation: "QLoRA = LoRA + 4-bit NormalFloat quantization of base model, enabling fine-tuning on consumer GPUs." },
  ],
  "io-lm-3": [
    { question: "Perplexity measures:", options: ["Speed", "How surprised the model is by test data (lower = better)", "Number of parameters", "Vocabulary size"], correct: 1, explanation: "Perplexity = exp(avg CE loss). Lower perplexity = model better predicts the data." },
    { question: "BERTScore uses:", options: ["Exact string match", "Contextual embedding similarity", "Edit distance", "n-gram overlap"], correct: 1, explanation: "BERTScore computes similarity between BERT embeddings of prediction and reference tokens." },
    { question: "MMLU benchmark tests:", options: ["Image generation", "Multi-task language understanding across 57 subjects", "Translation only", "Code generation"], correct: 1, explanation: "MMLU tests knowledge across 57 academic subjects from STEM to humanities." },
    { question: "Constitutional AI (CAI) trains models to be:", options: ["Faster", "Helpful, harmless, and honest", "Larger", "More creative"], correct: 1, explanation: "CAI uses a set of principles (constitution) to train models that are helpful and safe." },
    { question: "Hallucination in LLMs refers to:", options: ["Speed issues", "Generating plausible but factually incorrect content", "Memory leaks", "Token limits"], correct: 1, explanation: "Hallucination: model confidently generates false information that sounds convincing." },
  ],

  // Audio
  "io-au-1": [
    { question: "A spectrogram represents:", options: ["Amplitude over time", "Frequency content over time", "Phase over frequency", "Loudness only"], correct: 1, explanation: "Spectrogram = 2D representation showing frequency (y-axis) vs time (x-axis), intensity as color." },
    { question: "Mel scale is based on:", options: ["Mathematical convenience", "Human pitch perception", "Sampling rate", "Bit depth"], correct: 1, explanation: "Mel scale spaces frequencies according to human perception — linear below 1kHz, logarithmic above." },
    { question: "MFCCs are derived from:", options: ["Raw waveform directly", "DCT of log Mel-spectrogram", "FFT only", "Autocorrelation"], correct: 1, explanation: "MFCCs = DCT applied to the log of the Mel-spectrogram, giving compact features." },
    { question: "Common audio sampling rate for speech:", options: ["8 kHz", "16 kHz", "44.1 kHz", "96 kHz"], correct: 1, explanation: "16 kHz is standard for speech (Nyquist: captures up to 8 kHz, sufficient for voice)." },
    { question: "Audio classification often converts audio to:", options: ["Text first", "Mel-spectrogram then uses CNN", "Binary", "MIDI"], correct: 1, explanation: "Convert audio → Mel-spectrogram → treat as 2D image → apply CNN or ViT." },
  ],
  "io-au-2": [
    { question: "CTC in ASR handles:", options: ["Feature extraction", "Alignment between audio frames and text", "Audio generation", "Noise removal"], correct: 1, explanation: "CTC allows training without explicit alignment between audio frames and output characters." },
    { question: "Whisper by OpenAI is:", options: ["Text-only model", "Encoder-decoder Transformer for speech", "GAN for audio", "RNN model"], correct: 1, explanation: "Whisper is an encoder-decoder Transformer trained on 680K hours of multilingual speech." },
    { question: "Whisper can perform:", options: ["Only English transcription", "Transcription, translation, and language ID", "Only translation", "Only language detection"], correct: 1, explanation: "Whisper is multi-task: speech recognition, translation to English, language identification." },
    { question: "A vocoder converts:", options: ["Text to mel-spectrogram", "Mel-spectrogram to waveform", "Audio to text", "MIDI to audio"], correct: 1, explanation: "Vocoder (e.g., HiFi-GAN) converts mel-spectrograms into audio waveforms." },
    { question: "WaveNet generates audio:", options: ["All at once", "Sample by sample autoregressively", "In frequency domain", "Using RNNs"], correct: 1, explanation: "WaveNet generates audio samples one at a time, conditioning on all previous samples." },
  ],
  "io-au-3": [
    { question: "AudioLM generates audio using:", options: ["CNNs", "Hierarchical token-based language modeling", "GANs only", "Rule-based synthesis"], correct: 1, explanation: "AudioLM models audio as tokens at multiple levels (semantic + acoustic) and generates autoregressively." },
    { question: "MusicGen by Meta generates music from:", options: ["MIDI files", "Text descriptions", "Audio recordings only", "Sheet music"], correct: 1, explanation: "MusicGen generates music conditioned on text descriptions using a Transformer-based model." },
    { question: "Audio diffusion models generate:", options: ["Text", "Audio/music by denoising spectrograms", "Images", "Video"], correct: 1, explanation: "Audio diffusion: denoise mel-spectrograms or latent audio representations to generate sound." },
    { question: "MIDI represents music as:", options: ["Waveforms", "Symbolic events (notes, velocities, timings)", "Spectrograms", "Text"], correct: 1, explanation: "MIDI is symbolic: note on/off events with pitch, velocity, timing — not actual audio." },
    { question: "Voice cloning requires:", options: ["Hours of training data", "A few seconds of reference audio (modern methods)", "No audio", "Only text"], correct: 1, explanation: "Modern TTS systems (VALL-E, XTTS) can clone a voice from just a few seconds of reference audio." },
  ],

  // Multimodal
  "io-mm-1": [
    { question: "LLaVA connects vision to language by:", options: ["Training from scratch", "Linear projection from CLIP ViT to LLM", "Averaging features", "Concatenating models"], correct: 1, explanation: "LLaVA uses a simple linear projection to map CLIP visual features into the LLM's input space." },
    { question: "BLIP stands for:", options: ["Bidirectional Language-Image Pre-training", "Bootstrapping Language-Image Pre-training", "Binary Language-Image Processing", "Batch Language-Image Pipeline"], correct: 1, explanation: "BLIP = Bootstrapping Language-Image Pre-training, using synthetic captions for data cleaning." },
    { question: "Vision-language models like CLIP encode images and text in:", options: ["Separate spaces", "The same shared embedding space", "Only image space", "Only text space"], correct: 1, explanation: "CLIP maps both images and text to a shared embedding space for cross-modal comparison." },
    { question: "GPT-4V can:", options: ["Only process text", "Process both images and text natively", "Only generate images", "Only process audio"], correct: 1, explanation: "GPT-4V (Vision) natively processes both images and text as input for understanding." },
    { question: "Cross-modal retrieval finds:", options: ["Similar items within same modality", "Matching items across different modalities", "Duplicates", "Errors"], correct: 1, explanation: "Cross-modal retrieval: given text, find matching images (or vice versa) using shared embeddings." },
  ],
  "io-mm-2": [
    { question: "VQA models take as input:", options: ["Only image", "Image + question text", "Only question", "Image + answer"], correct: 1, explanation: "VQA: given an image and a natural language question, produce an answer." },
    { question: "Image captioning generates:", options: ["Class labels", "Natural language descriptions of images", "Bounding boxes", "Segmentation masks"], correct: 1, explanation: "Image captioning produces a natural language sentence describing the content of an image." },
    { question: "CIDEr metric for captioning measures:", options: ["Grammar", "Consensus with reference captions using TF-IDF", "Image quality", "Speed"], correct: 1, explanation: "CIDEr uses TF-IDF weighted n-gram matching against multiple reference captions." },
    { question: "Audio-visual learning exploits:", options: ["Only visual data", "Natural correspondence between sight and sound", "Text annotations", "Manual alignment"], correct: 1, explanation: "Audio-visual learning leverages the natural co-occurrence of visual and audio signals in video." },
    { question: "Flamingo by DeepMind enables:", options: ["Only classification", "Few-shot multimodal learning with interleaved image-text", "Image generation", "Audio processing"], correct: 1, explanation: "Flamingo processes arbitrarily interleaved images and text for few-shot multimodal tasks." },
  ],
  "io-mm-3": [
    { question: "Text-to-image retrieval uses:", options: ["Keyword matching", "Shared embedding space similarity", "OCR", "Template matching"], correct: 1, explanation: "Encode text query and database images into shared space, retrieve by cosine similarity." },
    { question: "Image-to-text retrieval finds:", options: ["Similar images", "Text descriptions matching the query image", "Keywords", "File names"], correct: 1, explanation: "Given a query image, find the most relevant text descriptions using shared embeddings." },
    { question: "ALIGN by Google trained CLIP-like model on:", options: ["1M pairs", "1.8B noisy image-text pairs", "ImageNet", "Wikipedia"], correct: 1, explanation: "ALIGN showed that scaling to 1.8B noisy pairs (no cleaning) matches or beats smaller curated datasets." },
    { question: "Hard negative mining in retrieval:", options: ["Removes easy examples", "Selects challenging negatives that are close to the query", "Random sampling", "Ignores negatives"], correct: 1, explanation: "Hard negatives (similar but wrong matches) force the model to learn finer-grained distinctions." },
    { question: "Re-ranking in retrieval:", options: ["Replaces initial retrieval", "Refines top-k results with a more powerful model", "Removes results", "Adds random results"], correct: 1, explanation: "Two-stage: fast retrieval gets top-k candidates, then a heavier cross-encoder re-ranks them." },
  ],
};
