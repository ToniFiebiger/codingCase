let num;

function factorial(num) {
    let result = num;

    // multiply every number from num to 0 backwards
    for (let i = num - 1; i > 0; i--) {
        result = result * i;
    }
    return rersult;
}
