# Syntax Notation for Algorithm Complexity

The syntax notation used to describe the complexity of algorithms is known as **Big O notation**. This notation is used to represent the asymptotic growth of an algorithm's complexity in terms of the input size.

## Big O Notation

In Big O notation, the letter "O" is followed by a function to describe the asymptotic behavior of the algorithm. The function represents the number of operations or the time required to execute the algorithm based on the input size.

### Examples of Big O Notation:

1. O(1): Indicates constant complexity. The algorithm's execution time does not depend on the input size.

2. O(n): Indicates linear complexity. The algorithm's execution time grows proportionally to the input size.

3. O(n^2): Indicates quadratic complexity. The algorithm's execution time grows proportionally to the square of the input size.

4. O(log n): Indicates logarithmic complexity. The algorithm's execution time grows logarithmically based on the input size.

These are just a few examples of Big O notation. There are many other ways to describe complexity, such as O(n log n), O(2^n), etc. Big O notation is used to compare the relative efficiency of different algorithms and help choose the most suitable one based on specific problem requirements.

## Worst-case, Best-case, and Average-case

In addition to Big O notation, Omega (Ω) and Theta (Θ) notations are also used to describe the worst-case, best-case, and average-case scenarios of an algorithm, respectively.

### Worst-case

Big O notation is used to describe the complexity in the worst-case scenario. It represents the maximum execution time that the algorithm will require for any input of size n. It is denoted as O(f(n)), where f(n) is the function that describes the complexity in the worst-case.

### Best-case

Omega notation is used to describe the complexity in the best-case scenario. It represents the minimum execution time that the algorithm will require for any input of size n. It is denoted as Ω(g(n)), where g(n) is the function that describes the complexity in the best-case.

### Average-case

Theta notation is used to describe the complexity in the average-case scenario. It represents a tight range of execution times that the algorithm will require for any input of size n. It is denoted as Θ(h(n)), where h(n) is the function that describes the complexity in the average-case.

It is important to note that these notations (O, Ω, Θ) describe different aspects of an algorithm's complexity in different scenarios. Big O notation is commonly used to describe the worst-case complexity, Omega notation is used for the best-case complexity, and Theta notation is used for the average-case complexity.
