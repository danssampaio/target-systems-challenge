function isFibonacci(n: number): boolean {
    let a: number = 0;
    let b: number = 1;

    while (b <= n) {
        if (b === n) return true;
        const next: number = a + b;
        a = b;
        b = next;
    }

    return false;
}

const numberToCheck: number = 21;
if (isFibonacci(numberToCheck)) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}
