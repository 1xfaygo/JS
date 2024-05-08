function fibonacci(z) {
    let a = 0;
    let b = 1;
    const reeks = [a, b]; 

    for (let i = 2; i < z; i++) { 
        const next = a + b;
        reeks.push(next);
        a = b;
        b = next;
    }

    return reeks;
}

console.log(fibonacci(20));
