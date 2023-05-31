describe('FindItemsOver20', () => {
  it('should return items with quantity over 20', () => {
    const itemList = [
      { name: 'Item 1', qty: 10 },
      { name: 'Item 2', qty: 25 },
      { name: 'Item 3', qty: 5 },
      { name: 'Item 4', qty: 30 },
    ];

    const expectedResult = [
      { name: 'Item 2', qty: 25 },
      { name: 'Item 4', qty: 30 },
    ];

    const result = findItemsOver20(itemList);

    assert.deepStrictEqual(result, expectedResult);
  });

  it('should return an empty array when no items have quantity over 20', () => {
    const itemList = [
      { name: 'Item 1', qty: 10 },
      { name: 'Item 2', qty: 5 },
      { name: 'Item 3', qty: 15 },
    ];

    const expectedResult = [];

    const result = findItemsOver20(itemList);

    assert.deepStrictEqual(result, expectedResult);
  });
});
