const { succeed, fail, repair, get } = require('./enhancer.js');

// If you need to make different items, you can make a function that takes three parameters for name, durability, and enhancement
describe('enhancer functions', function () {
    it('should repair the item back to 100', () => {

        const theOneRing = {
            name: "The One Ring",
            durability: 95,
            enhancement: 20
        }

        expect(repair(theOneRing).durability).toBe(100);
        expect(repair({durability: 90}).durability).toBe(100);
        expect(repair({durability: 125}).durability).toBe(100);
        expect(repair({durability: -50}).durability).toBe(100);
    });


    it ('should enhance the item if succeeded', () => {

        const swordOfTheMorning = {
            name: "The Sword of the Morning",
            durability: 100,
            enhancement: 2
        }

        expect(succeed(swordOfTheMorning).enhancement).toBe(3);
        expect(succeed({enhancement: 20}).enhancement).toBe(20);
        expect(succeed({enhancement: 21}).enhancement).toBe(0);
        expect(succeed({enhancement: 0}).enhancement).toBe(1);
        expect(succeed({enhancement: -10}).enhancement).toBe(0);

    })

    it ('should decrease durability and/or enhancement when failed depending on current enhancement', () => {

        const enkidu = {
            name: "The Chains of Heaven",
            durability: 100,
            enhancement: 2
        }

        expect(fail(enkidu).durability).toBe(95);
        expect(fail({durability:100, enhancement: 15})).toEqual({durability: 90})
        expect(fail({durability:50, enhancement: 16})).toEqual({durability: 40})
        expect(fail({durability:50, enhancement: 17})).toEqual({durability: 40, enhancement: 16})
        expect(fail({durability:100, enhancement: 20})).toEqual({durability: 100, enhancement: 20})
        expect(fail({durability:100, enhancement: 21})).toEqual({durability: 100, enhancement: 0})
        expect(fail({durability:100, enhancement: -5})).toEqual({durability: 100, enhancement: 0})
        expect(fail({durability:200, enhancement: -20})).toEqual({durability: 100, enhancement: 0})

    })

    it ('should change the name of the item depending on enhancement level', () => {

        const enkidu = {
            name: "The Chains of Heaven",
            durability: 100,
            enhancement: 2
        }

        expect(get(enkidu).name).toBe("[+2] The Chains of Heaven");
        expect(get({name: "Monkey Staff", enhancement: 15}).name).toEqual("[+15] Monkey Staff");
        expect(get({name: "Monkey Staff", enhancement: 20}).name).toEqual("[+20] Monkey Staff");
        expect(get({name: "Monkey Staff", enhancement: 0}).name).toEqual("Monkey Staff");
        expect(get({name: "Monkey Staff", enhancement: 22}).name).toEqual("Monkey Staff", {message: "Where did you get this item?"});
        expect(get({name: "Monkey Staff", enhancement: -10}).name).toEqual("Monkey Staff", {message: "Where did you get this item?"});

    })
});
