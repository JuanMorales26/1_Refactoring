const Reader = require('../../lib/utils/Reader')
 
describe("Unit test module for Reader",() =>{
    test("1)Unit test for Static readJsonFile", () =>{
        const path = "./explorers/explorers.json";
        const test1 = Reader.readJSONFile(path);
        expect(test1[0].name).toBe("Woopa1");
        expect(test1[0].githubUsername).toBe("ajolonauta1");
        expect(test1[0].score).toBe(1);
        expect(test1[0].mission).toBe("node");
        expect(test1[0].stacks[0]).toBe("javascript");
        expect(test1[0].stacks[1]).toBe("reasonML");
        expect(test1[0].stacks[2]).toBe("elm");
        console.log("Explorers devueltos: ", test1);   
    });
})  