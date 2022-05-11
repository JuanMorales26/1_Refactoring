const ExplorerService = require('../../lib/services/ExplorerService')
describe("Unit test module for ExplorerService",() =>{
    test("1)Unit test for Static filterByMission", () =>{
        const explorer1 = {name: "Explorer1_Test", score: 2, mission: "Node"}
        const explorer2 = {name: "Explorer2_Test", score: 3, mission: "JS"}
        const explorer3 = {name: "Explorer3_Test", score: 5, mission: "Phyton"}
        const explorer4 = {name: "Explorer4_Test", score: 10, mission: "JS"}
        const explorer5 = {name: "Explorer5_Test", score: 15, mission: "Node"}
        const explorer6 = {name: "Explorer6_Test", score: 20, mission: "Node"}
        const explorer7 = {name: "Explorer7_Test", score: 30, mission: "Java"}
        const explorerlist = [explorer1, explorer2, explorer3, explorer4, explorer5, explorer6, explorer7]
        const user = ExplorerService.filterByMission(explorerlist, "Node");
        for(var i = 0; i < user.length; i++){
           //console.log(user[i]);
            expect(user[i].mission).toBe("Node");
        }
        expect(user[0].name).toBe("Explorer1_Test");
        expect(user[1].name).toBe("Explorer5_Test");
        expect(user[2].name).toBe("Explorer6_Test");
        /**expect(user.user).toBe("JuanMorales26");
        expect(user.name).toBe("Juan Morales");
        expect(user.bio).not.toBeUndefined();*/
    });
    test("2)Unit test for Static getAmountOfExplorersByMission", () =>{
        const explorer1 = {name: "Explorer1_Test", score: 2, mission: "Node"}
        const explorer2 = {name: "Explorer2_Test", score: 3, mission: "JS"}
        const explorer3 = {name: "Explorer3_Test", score: 5, mission: "Phyton"}
        const explorer4 = {name: "Explorer4_Test", score: 10, mission: "JS"}
        const explorer5 = {name: "Explorer5_Test", score: 15, mission: "Node"}
        const explorer6 = {name: "Explorer6_Test", score: 20, mission: "Node"}
        const explorer7 = {name: "Explorer7_Test", score: 30, mission: "Java"}
        const explorerlist = [explorer1, explorer2, explorer3, explorer4, explorer5, explorer6, explorer7]
        const amount_of_explorers_detected = ExplorerService.getAmountOfExplorersByMission(explorerlist, "Node");
        expect(amount_of_explorers_detected).toBe(3);
        /**expect(user.user).toBe("JuanMorales26");
        expect(user.name).toBe("Juan Morales");
        expect(user.bio).not.toBeUndefined();*/
    });
    test("3)Unit test for Static getExplorersUsernamesByMission", () =>{
        const explorer1 = {githubUsername: "Explorer1_Test", score: 2, mission: "Node"}
        const explorer2 = {githubUsername: "Explorer2_Test", score: 3, mission: "JS"}
        const explorer3 = {githubUsername: "Explorer3_Test", score: 5, mission: "Phyton"}
        const explorer4 = {githubUsername: "Explorer4_Test", score: 10, mission: "JS"}
        const explorer5 = {githubUsername: "Explorer5_Test", score: 15, mission: "Node"}
        const explorer6 = {githubUsername: "Explorer6_Test", score: 20, mission: "Node"}
        const explorer7 = {githubUsername: "Explorer7_Test", score: 30, mission: "Java"}
        const explorerlist = [explorer1, explorer2, explorer3, explorer4, explorer5, explorer6, explorer7]
        const names_of_explorers_detected = ExplorerService.getExplorersUsernamesByMission(explorerlist, "Node");
        expect(names_of_explorers_detected[0]).toBe("Explorer1_Test");
        expect(names_of_explorers_detected[1]).toBe("Explorer5_Test");
        expect(names_of_explorers_detected[2]).toBe("Explorer6_Test");
        /**expect(user.user).toBe("JuanMorales26");
        expect(user.name).toBe("Juan Morales");
        expect(user.bio).not.toBeUndefined();*/
    });
})  