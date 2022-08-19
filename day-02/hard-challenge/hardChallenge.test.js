function sayIt(words) {
    let string = words;

    if (!words) return string;
    
    function result(nextWord) {
        if (!nextWord) return string;
        string += ' ' + nextWord;
        return result;
    }
    return result;
}

test('sayIt', () => {
    const result1 = sayIt('hello')
    const result2 = result1('my');
    const result3 = result2('name');
    const result4 = result3('is')
    const result5 = result4('JavaScript')
    const result = result5();

    expect(result).toBe('hello my name is JavaScript');
})