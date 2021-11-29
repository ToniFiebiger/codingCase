let number;

function isPrimeNumber(number) {
    let prim = true;

    // check if number only can be divided without rest by itself and 1
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            prim = false;
        };
    }

    return prim;
}
