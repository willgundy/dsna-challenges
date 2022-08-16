//map

function map(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

test('map', () => {
    expect(map([1, 6, 5], x => x * x)).toEqual([1, 36, 25]);
    expect(map([1, 6, 5], x => x + x)).toEqual([2, 12, 10]);
    expect(map([1, 6, 5], x => x + x + x)).toEqual([3, 18, 15]);
});

//filter

function filter(arr, predicate) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(predicate(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

test('filter', () => {
    expect(filter([1, 6, 5], x => x % 2 === 0)).toEqual([6]);
    expect(filter([2, 6, 5], x => x % 2 === 0)).toEqual([2, 6]);
});