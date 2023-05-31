describe('The fromWhere function', function () {
    it("should return reg number, if it starts with CY return Bellville, for CJ return Paarl, for CA return Cape Town otherwise return Some other place!", function () {

        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
 

    });

});