[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/rzkZS2Jf)
# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

RESOURCES USED: Originally coded in python and used ai to convert to js where function takes in number and computes fibonacci array up to that number. Below is python code I made for fibonacci array without testing:

def fibonacci(i, n, arr):

if n == 0:

return [0]

if n == 1:

return [0,1]
    
if i <= n:

arr.append(arr[i - 1] + arr[i - 2])

fibonacci(i + 1, n, arr)

return arr


increment = 2

number = 7

print(number)

array = [0, 1]

result = fibonacci(increment, number, array)

print(result)


## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

At the beginning of each recursive call, the array contains the fibonacci sequence up to i - 1. This invariant is important for the recursive algorithm because the function appends the sum of the last two elements to the array during each call, and makes sure that the array is valid for up to i - 1.
