describe('The greet function', function () {
    it("should greet Lindani with 'Hello, Lindani'", function () {
        assert.equal('Hello, Lindani', greet("Lindani"));
    });

    it("should greet Zola with 'Hello, Zola'", function () {
        assert.equal('Hello, Zola', greet("Zola"));
    });

    it("should greet Ntebele with 'Hello, Ntebele'", function () {
        assert.equal('Hello, Ntebele', greet("Ntebele"));

    });

});