var expect = require("chai").expect;
var product = require("../compiled/script").returnProduct;

// Mocha has a describe function
// First argument is a string while second is a function
describe("Product Numbers", () => {
    // The it feature lets us introduce expectations
    // Chai library is here for the keywords of comparison it gives us
    it("Product is distributive", function() {
        var product1 = product((2 + 3), 1, 2);
        var product2 = product(1, 2, (2 + 3));

        expect(product1).to.deep.equal(10);
        expect(product2).to.deep.equal(10);
    })

    it("Product is associative", function() {
        var product1 = product(1, (2 * 2), 2);
        var product2 = product(1, 2, (2 * 2));

        expect(product1).to.deep.equal(8);
        expect(product2).to.deep.equal(8);
    })

    it("Product is 0 if any of the integers is 0", function() {
        var product1 = product(0, 0, 0); // NaN
        var product2 = product(1, 1, 0); // Infinity

        expect(product1).to.deep.equal(0);
        expect(product2).to.deep.equal(0);
    })

    it("Product is False if any of the input nums has more than 1 digit", function() {
        var product1 = product(10, 1, 1);

        expect(product1).to.deep.equal(10);
    })
})

// npm install --save typescript
// eslint --init
// eslint yourfile.ts
// node compiled/script.js
// npm test
