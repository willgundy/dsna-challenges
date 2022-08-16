//convenience store change enough
function changeEnough(change, amountDue) {
  var totalAmount = change[0] * 0.25 + change[1] * .1 + change[2] * .05 + change[3] * .01;
  if (totalAmount >= amountDue) {
    return true;
  } else {
    return false;
  }
}

test('convenience store change enough', () => {
    expect(changeEnough([2, 100, 0, 0], 14.11)).toEqual(false);
    expect(changeEnough([0, 0, 20, 5], 0.75)).toEqual(true);
    expect(changeEnough([30, 40, 20, 5], 12.55)).toEqual(true);
    expect(changeEnough([10, 0, 0, 50], 3.85)).toEqual(false);
    expect(changeEnough([1, 0, 5, 219], 19.99)).toEqual(false);
});

//jewels and stones
function countJewels(jewels, stones) {
    let count = 0;
    const stoneCount = stones.split('').reduce((acc, curr) => {
        return {...acc, [curr]: (acc[curr] || 0) + 1};
    }, {});
    for (let i = 0; i < jewels.length; i++) {
        if (stoneCount[jewels[i]]) {
            count+= stoneCount[jewels[i]];
        }
    }
    return count;
}

test('convenience store change enough', () => {
    expect(countJewels("aA", "aAAbbbb")).toEqual(3);
    expect(countJewels("z", "ZZ")).toEqual(0);
});


//Unique Words
function uniqueWords(words) {
    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const morse = words.map(word => {
        return word.split('').map(letter => {
            return morseCode[letter.charCodeAt(0) - 97];
        }).join('');
    });
    return new Set(morse).size;
}

test('convenience store change enough', () => {
    expect(uniqueWords(["gin","zen","gig","msg"])).toEqual(2);
    expect(uniqueWords(["a"])).toEqual(1);
});

//CH: Pluralize Words!

function pluralize(word) {
    const array = [];
    const wordCount = word.reduce((acc, curr) => {
        return {...acc, [curr]: (acc[curr] || 0) + 1};
    }, {});
    Object.keys(wordCount).forEach(key => wordCount[key] > 1 ? array.push(key + 's') : array.push(key));
    return array;
}

test('Pluralize Words!', () => {
    expect(pluralize(["cow", "pig", "cow", "cow"])).toEqual(["cows", "pig"]);
    expect(pluralize(["table", "table", "table"])).toEqual(["tables"]);
    expect(pluralize(["chair", "pencil", "arm"])).toEqual(["chair", "pencil", "arm"]);
});

//progress days

function progressDays(miles) {
    let count = 0;
    for (let i = 0; i < miles.length; i++) {
        if (miles[i + 1] > miles[i]) {
            count++;
        }
    }
    return count;
}

test('progress days', () => {
    expect(progressDays([10, 11, 12, 9, 10])).toEqual(3);
    expect(progressDays([6, 5, 4, 3, 2, 9])).toEqual(1);
    expect(progressDays([9, 9])).toEqual(0);
});


//total volume
function totalVolume(...boxes) {
    return boxes.reduce((acc, curr) => {
        return acc + curr[0] * curr[1] * curr[2];
    } , 0);
};

test('total volume', () => {
    expect(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])).toEqual(63);
    expect(totalVolume([2, 2, 2], [2, 1, 1])).toEqual(10);
    expect(totalVolume([1, 1, 1])).toEqual(1);
});