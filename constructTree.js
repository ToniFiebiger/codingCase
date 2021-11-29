let strArr;

function constructTree(strArr) {
    let childArr = [];
    let parentArr = [];

    // form strArr to a usable structure
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].slice(1, -1);
    }
    let string = strArr.join();
    let cleanArr = string.split(",");

    for (let i = 0; i < cleanArr.length; i++) {
        if (i % 2 === 0) {
            childArr.push(cleanArr[i]);
        } else {
            parentArr.push(cleanArr[i]);
        }
    }

    // check if nodes in tree are unique
    for (let i = 0; i < childArr.length; i++) {
        for (let j = i + 1; j < childArr.length; j++) {
            if (childArr[i] === childArr[j]) {
                return false;
            }
        }
    }

    // check if parent have max 2 children
    for (let i = 0; i < parentArr.length; i++) {
        let count = 0;

        for (let j = i; j < parentArr.length; j++) {
            if (parentArr[i] === parentArr[j]) {
                count++;
            }

            if (count > 2) {
                return false;
            }
        }
    }


    // check if input is a binary tree
    let binaryTree = false;

    for (let i = 0; i < parentArr.length; i++) {
        for (let j = 0; j < parentArr.length; j++) {
            if (parentArr[i] === childArr[j] || childArr[i] === childArr[j + 1]) {
                binaryTree = true;
            }
        }

        if (!binaryTree) {
            return false;
        }
    }

    if (binaryTree) {
        return true;
    }
}
