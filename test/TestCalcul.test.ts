import Calcul from "../src/Calcul.test";

describe("Calcul", ()=>{
    it('should return 7', function () {
        let a:number = 6, b:number = 1;
        let expected:number = 7;
        expect(Calcul.somme(a, b)).toBe(expected);
    });
});