// fizzbuzz
function fizzbuzz(n) {
    let array = [];
    for(i=1; i <= n; i++) {
        if (i % 15 === 0) array.push('FizzBuzz');
        else if (i % 3 === 0) array.push('Fizz');
        else if (i % 5 === 0) array.push('Buzz');
        else array.push(i);
    }
    return array;
}

test('fizzbuzz', () => {
    const array = fizzbuzz(16);
    expect(array).toEqual([
        1, 2, 'Fizz', 4, 'Buzz', 
        'Fizz', 7, 8, 'Fizz', 'Buzz', 
        11, 'Fizz', 13, 14, 'FizzBuzz', 
        16
      ]);
});

//multiples of n
function multiplesOfN(n, max) {
    let array = [];
    for(i=1; i <= max; i++) {
        if (i % n === 0) array.push(i);
    }
    return array;
}

test('multiplesOfN', () => {
    const five = multiplesOfN(5, 50);
    expect(five).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    const twentyFive = multiplesOfN(25, 50);
    expect(twentyFive).toEqual([25, 50]);
    const seventyFive = multiplesOfN(75, 50);
    expect(seventyFive).toEqual([]);
});

//reverse sentence of words
function reverseWords(sentence) {
    return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

test('reverseWords', () => {
    expect(reverseWords('This is a sentence.')).toEqual('sihT si a .ecnetnes');
    expect(reverseWords('alchemy rocks gold')).toEqual('ymehcla skcor dlog');
});

//title case each word
function titleCase(sentence) {
    return sentence.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
}

test('upper case each word', () => {
    expect(titleCase('alchemy ROCKS goLD')).toEqual('Alchemy Rocks Gold');
});

//oddish vs evenish
function oddishOrEvenish(number) {
    return number.split('').reduce((acc, curr) => ~~acc + ~~curr, 0) % 2 === 0 ? 'Evenish' : 'Oddish';
}

test('oddish vs evenish', () => {
    expect(oddishOrEvenish('121')).toEqual('Evenish');
    expect(oddishOrEvenish('41')).toEqual('Oddish');
});

//Implement `at`
function at(arr, index) {
    return index > 0 ? arr[index] : arr[arr.length - Math.abs(index)];
}

test('Implement `at`', () => {
    expect(at(['a', 'b', 'c', 'd', 'e'], 1)).toEqual('b');
    expect(at(['a', 'b', 'c', 'd', 'e'], -2)).toEqual('d');
});

//Anagrams
function anagrams(wordOne, wordTwo) {
    const arrayOne = wordOne.split('').sort();
    const arrayTwo = wordTwo.split('').sort();
    return arrayOne.join('') === arrayTwo.join('');
}

test('Anagrams', () => {
    expect(anagrams('superintended', 'unpredestined')).toEqual(true);
    expect(anagrams('pictorialness', 'documentarily')).toEqual(false);
});

//Unique String
// function uniqueString(strings) {
//     return [... new Set(strings.map())];
// }

// test('Unique String', () => {
//     expect(uniqueString([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])).toEqual('BbBb');
//     expect(uniqueString([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])).toEqual('foo');
// });


//Unique Char
function uniqueChar(string) {
    const characters = string.split('').reduce((acc, curr) => {
        return {...acc, [curr]: (acc[curr] || 0) + 1};
    }, {});
    const array = Object.keys(characters).filter(key => characters[key] === 1);
    return array[0] ? array[0] : '_';
}

test('Unique String', () => {
    expect(uniqueChar('abdacabad')).toEqual('c');
    expect(uniqueChar('abacabaabacaba')).toEqual('_');
    expect(uniqueChar('abacabad')).toEqual('c');
});