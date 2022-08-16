const addPunctuation = (punctuation) => (string) => string + punctuation;


test('addPunctuation', () => {
    const addExcitement = addPunctuation('!!!');
    expect(addExcitement('Hello')).toBe('Hello!!!');

    const addUnsure = addPunctuation('?!?');
    expect(addUnsure('Hello World')).toBe('Hello World?!?');
});