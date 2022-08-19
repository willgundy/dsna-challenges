function push(arr, item) {
    arr[arr.length] = item;
    return arr.length;
}

test('array push', () => {
    const arr = [1, 2, 3];
    const newLength = push(arr, 4);
    expect(arr).toEqual([1, 2, 3, 4]);
    expect(newLength).toBe(4);
});

function unshift(arr, item) {
    for(let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = item;
    return arr.length;
}

test('array unshift', () => {
    const arr = [1, 2, 3];
    const newLength = unshift(arr, 4);
    expect(arr).toEqual([4, 1, 2, 3]);
    expect(newLength).toBe(4);
});

function pop(arr) {
    const value = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return value;
}

test('array pop', () => {
    const arr = [1, 2, 3];
    const value = pop(arr);
    expect(arr).toEqual([1, 2]);
    expect(arr.length).toEqual(2);
    expect(value).toBe(3);
});

function shift(arr) {
    const value = arr[0];
    for(let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    return value;
}

test('array shift', () => {
    const arr = [1, 2, 3, 4];
    const value = shift(arr);
    expect(arr).toEqual([2, 3, 4]);
    expect(arr.length).toEqual(3);
    expect(value).toBe(1);
});