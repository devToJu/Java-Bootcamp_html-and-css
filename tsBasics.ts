// Variablenname : Variablentyp
let result: number;

result = add(10, 5);
console.log(result);

result = multiply(10, 5);
console.log(result);

printLineNTimes(3, "Print line 3 times...")

// Funktionsname(Parameter : Typ, ...) : Rückgabetyp
function add(a: number, b: number): number {
    return a + b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function printLineNTimes(n: number, line: string): void {
    for (let i = 0; i < n; i++) {
        console.log(line);
    }
}