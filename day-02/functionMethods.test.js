//add punctuation to the end of a string
const addPunctuation = (punctuation) => (string) => string + punctuation;

test('addPunctuation', () => {
    const addExcitement = addPunctuation('!!!');
    expect(addExcitement('Hello')).toBe('Hello!!!');

    const addUnsure = addPunctuation('?!?');
    expect(addUnsure('Hello World')).toBe('Hello World?!?');
});

//add element to beginning of an array
const addFirst = (element) => (array) => [element, ...array];

test('addFirst', () => {
    const addOrange = addFirst('orange');
    expect(addOrange(['red', 'blue', 'green'])).toEqual(['orange', 'red', 'blue', 'green']);
});

//digit root sum
function rootDigit(n) {
    while (n.toString().length > 1) {
        n = n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
    }
    return n;
}

test('rootDigit', () => {
    expect(rootDigit(9)).toBe(9);
    expect(rootDigit(123)).toBe(6);
    expect(rootDigit(4322)).toBe(2);
    expect(rootDigit(999888777)).toBe(9);
});

//fibonacci sequence
function fib(n) {
    return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

test('fib', () => {
    expect(fib(0)).toBe(0);
    expect(fib(8)).toBe(21);
    expect(fib(9)).toBe(34);
    expect(fib(10)).toBe(55);
});

//largest Even
function largestEven(nums) {
    return nums.filter(num => num % 2 === 0).length > 0 ? nums.filter(num => num % 2 === 0).sort((a, b) => b - a)[0] : -1;
}

test('largest even', () => {
    expect(largestEven([3, 7, 2, 1, 7, 9, 10, 13])).toBe(10);
    expect(largestEven([0, 19, 18973623])).toBe(0);
    expect(largestEven([1, 3, 5, 7])).toBe(-1);
})

//recursive string repeat
function repeat(text, n) {
    return n > 0 ? text + repeat(text, n - 1) : '';
}

test('repeat text', () => {
    expect(repeat('ab', 3)).toBe('ababab');
    expect(repeat('kiwi', 1)).toBe('kiwi');
    expect(repeat('cherry', 0)).toBe('');
    expect(repeat('hello', 10)).toBe('hellohellohellohellohellohellohellohellohellohello');
});