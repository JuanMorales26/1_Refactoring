const ExplorerController = require('../../lib/controllers/ExplorerController')

describe("Unit test module for ExplorerController",() =>{
    test("1)Unit test for Static getExplorersByMission", () =>{
        const user = ExplorerController.getExplorersByMission("node");
        for(var i = 0; i < user.length; i++){
            expect(user[i].mission).toBe("node");
        }
    });
    test("2)Unit test for Static getExplorersAmonutByMission", () =>{
        const amount_of_explorers_detected = ExplorerController.getExplorersAmonutByMission("node");
        expect(amount_of_explorers_detected).toBe(10);
    });
    test("3)Unit test for Static getExplorersUsernamesByMission", () =>{
        const names_of_explorers_detected = ExplorerController.getExplorersUsernamesByMission("node");
        expect(names_of_explorers_detected[0]).toBe("ajolonauta1");
        expect(names_of_explorers_detected[1]).toBe("ajolonauta2");
        expect(names_of_explorers_detected[2]).toBe("ajolonauta3");
        expect(names_of_explorers_detected[3]).toBe("ajolonauta4");
        expect(names_of_explorers_detected[4]).toBe("ajolonauta5");
        expect(names_of_explorers_detected[5]).toBe("ajolonauta11");
        expect(names_of_explorers_detected[6]).toBe("ajolonauta12");
        expect(names_of_explorers_detected[7]).toBe("ajolonauta13");
        expect(names_of_explorers_detected[8]).toBe("ajolonauta14");
        expect(names_of_explorers_detected[9]).toBe("ajolonauta15");
    });
})  