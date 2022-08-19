function inventoryChecker(inventory, item) {
    return inventory[item.itemName] > 5 ? 
    `plenty of inventory, ${inventory[item.itemName]} ${item.itemName} available`:
    `running low on ${item.itemName}, only ${inventory[item.itemName]} available`;
}

test ('inventoryChecker', () => {
    let inventory = {
        apples: 20,
        oranges: 30,
        grapes: 4,
        bananas: 50,
        watermelons: 3,
    };

    const check1 = inventoryChecker(inventory, { itemName: 'apples' });
    const check2 = inventoryChecker(inventory, { itemName: 'watermelons' });

    expect(check1).toBe('plenty of inventory, 20 apples available');
    expect(check2).toBe('running low on watermelons, only 3 available');
});
