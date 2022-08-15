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