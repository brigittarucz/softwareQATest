var expect = require("chai").expect;
var product = require("../compiled/script").returnProduct;

// Mocha has a describe function
// First argument is a string while second is a function
describe("Product Numbers", () => {
    // The it feature lets us introduce expectations
    // Chai library is here for the keywords of comparison it gives us
    it("Product is associative", function() {
        var product1 = product((2 + 3), 1, 2);
        var product2 = product(1, 2, (2 + 3));

        expect(product1).to.deep.equal(10);
        expect(product2).to.deep.equal(10);
    })
})