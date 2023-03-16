const { humanCatDogYears } = require("../src");

describe ('humanCatDogYears', () => {
    it("returns array of human, cat and  dog years when passed human years", () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64])
    })
    it("returns array of human, cat and  dog years when passed human years", () => {
        expect(humanCatDogYears(1)).toEqual([1, 4, 5])
    })  
})

