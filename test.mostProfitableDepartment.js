describe('MostProfitableDepartment', () => {
  it('should return the department with the highest sales', () => {
    const salesData = [
      { department: 'Electronics', sales: 5000 },
      { department: 'Clothing', sales: 3000 },
      { department: 'Electronics', sales: 2000 },
      { department: 'Furniture', sales: 4000 },
      { department: 'Clothing', sales: 2000 },
    ];

    const expectedResult = 'Electronics';

    const result = mostProfitableDepartment(salesData);

    assert.strictEqual(result, expectedResult);
  });

  it('should return an empty string when sales data is empty', () => {
    const salesData = [];

    const expectedResult = '';

    const result = mostProfitableDepartment(salesData);

    assert.strictEqual(result, expectedResult);
  });

  });

