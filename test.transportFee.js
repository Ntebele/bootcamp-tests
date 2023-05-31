describe('TransportFee', () => {
  it('should return the transport fee for morning', () => {
    const dayTime = 'morning';
    const expectedResult = 'R20';
    const result = transportFee(dayTime);
    assert.strictEqual(result, expectedResult);
  });

  it('should return the transport fee for afternoon', () => {
    const dayTime = 'afternoon';
    const expectedResult = 'R10';
    const result = transportFee(dayTime);
    assert.strictEqual(result, expectedResult);
  });

  it('should return "free" for any other time', () => {
    const dayTime = 'evening';
    const expectedResult = 'free';
    const result = transportFee(dayTime);
    assert.strictEqual(result, expectedResult);
  });
});
