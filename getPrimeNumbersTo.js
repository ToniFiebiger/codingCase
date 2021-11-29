let number;

function getPrimeNumbersTo(number) {
    let primArray = [];
    let prim;

    if (number < 0) {
        return false;
    }

    //check every number between 0 and "number"
    for (let i = 2; i < number; i++) {
        prim = true;

        // check if number only can be divided without rest by itself and 1
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prim = false;
            }
        }

        if (prim) {
            primArray.push(i);
        }
    }

    return primArray.toString();
}
