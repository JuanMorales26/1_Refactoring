const FizzbuzzService = require('../../lib/services/FizzbuzzService')

describe("Unit test module for FizzbuzzService",() =>{
    test("1)Unit test for Static applyValidationInExplorer", () =>{
        const explorer1 = {name: "Explorer1_Test", score: 2, mission: "Node"}
        const explorer2 = {name: "Explorer2_Test", score: 3, mission: "JS"}
        const explorer3 = {name: "Explorer3_Test", score: 5, mission: "Phyton"}
        const explorer4 = {name: "Explorer4_Test", score: 10, mission: "JS"}
        const explorer5 = {name: "Explorer5_Test", score: 15, mission: "Node"}
        const explorer6 = {name: "Explorer6_Test", score: 20, mission: "Node"}
        const explorer7 = {name: "Explorer7_Test", score: 30, mission: "Java"}
        const explorerlist = [explorer1, explorer2, explorer3, explorer4, explorer5, explorer6, explorer7]
        const test1 = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(test1.trick).toBe(2);

        const test2 = FizzbuzzService.applyValidationInExplorer(explorer2);
        expect(test2.trick).toBe("FIZZ");
        const test3 = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(test3.trick).toBe("BUZZ");
        const test5 = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(test5.trick).toBe("FIZZBUZZ");
        const test6 = FizzbuzzService.applyValidationInExplorer(explorer6);
        expect(test6.trick).toBe("BUZZ");        
    });
})  