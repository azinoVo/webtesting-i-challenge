const enhancer = require('./enhancer.js');


describe('enhancer functions', function () {
    it('should repair the item back to 100', () => {
        const theOneRing = {
            name: "The One Ring",
            durability: 95,
            enhancement: 20
        }

        expect(enhancer.repair(theOneRing).durability).toBe(100);
    });

    it ('', () => {

    })
});
