# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
    During the refactoring first I tried to look for reusable code, converted that to a separate functions. After that I tried to decrease if-else branches by merging some condition and also by changing order of line based on conditions. I tried to add multiple return statements to adopt the pricinpal to not duplicate same condition if-else branch. I tried to change syntax with modern JS. Lastly I added 5 test cases to cover all the cases of existing functionality so it should not break anything. This code fulfils the following:
    - returns the literal '0' when given no input
    - returns unhashed value when partitionKey is < 256 in length
    - returns json value when type of partitionKey is NOT string and is < 256 in length
    - returns hashed value when type of partitionKey is NOT in event object
    - returns hashed value when partitionKey is > 256 in length
