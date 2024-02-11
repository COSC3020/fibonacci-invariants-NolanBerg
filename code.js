function fib(i, n, arr) {
    if (n === 0) {
        return [0];
    }
    if (n === 1) {
        return [0, 1];
    }
    if (i <= n) {
        arr.push(arr[i - 1] + arr[i - 2]);
        fib(i + 1, n, arr);
    }
    return arr;
}

module.exports = { fib };
