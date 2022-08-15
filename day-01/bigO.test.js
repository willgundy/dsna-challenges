function inventoryChecker(inventory, item) {
    const count = inventory[item.itemName];
    if(count > 5) return `plenty of inventory, ${count} ${item.itemName} available`;
    return `running low on ${item.itemName}, only ${count} available`;
}

test ('inventoryChecker', () => {
    let inventory = {
        apples: 20,
        oranges: 30,
        grapes: 4,
        bananas: 50,
        watermelons: 3,
    };

    let item = {
        itemName: 'apples',
    }

    let item2 = {
        itemName: 'watermelons',
    }

    const check1 = inventoryChecker(inventory, item);
    const check2 = inventoryChecker(inventory, item2);

    expect(check1).toBe('plenty of inventory, 20 apples available');
    expect(check2).toBe('running low on watermelons, only 3 available');
});
