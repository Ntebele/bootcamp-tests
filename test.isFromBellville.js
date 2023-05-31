describe('The isFromBellville function', function () {
    it("should returns true if a registration number is for Bellville", function () {
        assert.equal(isFromBellville('CY 123'), true);
    });

    it("should returns false if a registration number is not for Bellville", function () {
        assert.equal(isFromBellville('CJ 123'), false);
    });

});