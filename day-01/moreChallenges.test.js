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