let str;

function questionsMarks(str) {
    let strArray = Array.from(str);
    let numSum = 0;
    let numCount = 0;
    let questionCount = 0;

    // cut every letter from the array
    for (let i = 0; i < strArray.length; i++) {
        if (isNaN(strArray[i]) && strArray[i] !== "?") {
            delete strArray[i];
        }
    }
    strArray = strArray.filter(Boolean);

    //return false if str is too short
    if (strArray.length < 5) {
        return false;
    }

    // check sum for 10 and questionmark count for 3
    for (let i = 0; i < strArray.length; i++) {
        if (!isNaN(strArray[i])) {
            numCount++;

            if (numCount <= 2) {
                numSum = numSum + parseInt(strArray[i]);
            } else {
                numCount = 1;
                numSum = 0 + parseInt(strArray[i]);
            }

            if (numCount === 2 && questionCount === 3 && numSum === 10) {
                return true;
            }

            questionCount = 0;
        } else {
            questionCount++;
        }
    }

    return false;
}
