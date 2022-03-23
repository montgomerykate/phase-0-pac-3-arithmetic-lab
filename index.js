function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide (a, b) {
    return a / b
}
function increment(number) {
    return number + 1
}
function decrement(number) {
    return number - 1
}
function makeInt(number) {
    return parseInt(number, 10);
}
function preserveDecimal(number) {
    return parseFloat('2.222', 10)
}
function preserveDecimal(NaN) {
    return parseFloat(NaN, 10)
}