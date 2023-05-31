describe('FindItemsOver', () => {
  it('should return items with quantity over the specified number', () => {
    const itemList = [
      { name: 'Item 1', qty: 10 },
      { name: 'Item 2', qty: 25 },
      { name: 'Item 3', qty: 5 },
      { name: 'Item 4', qty: 30 },
    ];

    const number = 20;

    const expectedResult = [
      { name: 'Item 2', qty: 25 },
      { name: 'Item 4', qty: 30 },
    ];

    const result = findItemsOver(itemList, number);

    assert.deepStrictEqual(result, expectedResult);
  });

  it('should return an empty array when no items have quantity over the specified number', () => {
    const itemList = [
      { name: 'Item 1', qty: 10 },
      { name: 'Item 2', qty: 5 },
      { name: 'Item 3', qty: 15 },
    ];

    const number = 20;

    const expectedResult = [];

    const result = findItemsOver(itemList, number);

    assert.deepStrictEqual(result, expectedResult);
  });
});
