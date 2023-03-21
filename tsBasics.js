var result;
result = add(10, 5);
console.log(result);
result = multiply(10, 5);
console.log(result);
printLineNTimes(3, "Print line 3 times...");
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function printLineNTimes(n, line) {
    for (var i = void 0; i < n; i++) {
        console.log(line);
    }
}
