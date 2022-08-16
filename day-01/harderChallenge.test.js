//CH: Roman Numerals
function convert(roman) {
    const romanTable = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let sum = 0;
    for (let i = 0; i < roman.length; i++) {
        if (romanTable[roman[i]] < romanTable[roman[i + 1]]) {
        sum -= romanTable[roman[i]];
        } else {
        sum += romanTable[roman[i]];
        }
    }
    return sum;
}

test('roman numerals', () => {
    expect(convert('III')).toEqual(3);
    expect(convert('XIX')).toEqual(19);
    expect(convert('XCII')).toEqual(92);
    expect(convert('MCXIV')).toEqual(1114);
});

//Equal Sides (of Array)

function equalSides(numbers) {
    let rightSideSum = numbers.reduce((acc, curr) => acc + curr, 0);
    let leftSideSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        leftSideSum += numbers[i];
        if (leftSideSum === rightSideSum) {
            return i;
        }
        rightSideSum -= numbers[i];
    }
    return -1;
}

test('equal side sums', () => {
    expect(equalSides([1,2,3,4,3,2,1])).toEqual(3);
    expect(equalSides([1,100,50,-51,1,1])).toEqual(1);
    expect(equalSides([20,10,-80,10,10,15,35])).toEqual(0);
});

//happy numbers
function isHappy(n) {
    const seen = new Set();
    while (n !== 1) {
        if (seen.has(n)) {
            console.log(n, seen);
            return false;
        }
        seen.add(n);
        n = n.toString().split('').reduce((acc, curr) => Math.pow(acc, 2) + Math.pow(curr, 2));
    }
    return true;
}

test('happy numbers using squares', () => {
    expect(isHappy(19)).toEqual(true);
    expect(isHappy(4)).toEqual(false);
});