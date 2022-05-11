const ExplorerController = require('../../lib/controllers/ExplorerController')

describe("Unit test module for ExplorerController",() =>{
    test("1)Unit test for Static getExplorersByMission", () =>{
        const explorer1 = {name: "Explorer1_Test", score: 2, mission: "Node"}
        const explorer2 = {name: "Explorer2_Test", score: 3, mission: "JS"}
        const explorer3 = {name: "Explorer3_Test", score: 5, mission: "Phyton"}
        const explorer4 = {name: "Explorer4_Test", score: 10, mission: "JS"}
        const explorer5 = {name: "Explorer5_Test", score: 15, mission: "Node"}
        const explorer6 = {name: "Explorer6_Test", score: 20, mission: "Node"}
        const explorer7 = {name: "Explorer7_Test", score: 30, mission: "Java"}
        const explorerlist = [explorer1, explorer2, explorer3, explorer4, explorer5, explorer6, explorer7]
        console.log("Lista de explorers sin filtro: ", explorerlist);
        const user = ExplorerController.getExplorersByMission(explorerlist, "Node");
        console.log("Lista de explorers con filtro: ", user);
        for(var i = 0; i < user.length; i++){
            expect(user[i].mission).toBe("Node");
        }
        expect(user[0].name).toBe("Explorer1_Test");
        expect(user[1].name).toBe("Explorer5_Test");
        expect(user[2].name).toBe("Explorer6_Test");
    });
    test("2)Unit test for Static getExplorersAmonutByMission", () =>{
        const explorer1 = {name: "Explorer1_Test", score: 2, mission: "Node"}
        const explorer2 = {name: "Explorer2_Test", score: 3, mission: "JS"}
        const explorer3 = {name: "Explorer3_Test", score: 5, mission: "Phyton"}
        const explorer4 = {name: "Explorer4_Test", score: 10, mission: "JS"}
        const explorer5 = {name: "Explorer5_Test", score: 15, mission: "Node"}
        const explorer6 = {name: "Explorer6_Test", score: 20, mission: "Node"}
        const explorer7 = {name: "Explorer7_Test", score: 30, mission: "Java"}
        const explorerlist = [explorer1, explorer2, explorer3, explorer4, explorer5, explorer6, explorer7]
        console.log("Lista de explorers sin filtro: ", explorerlist);
        const amount_of_explorers_detected = ExplorerController.getExplorersAmonutByMission(explorerlist, "Node");
        console.log("Cantidad de explorers detectados ", amount_of_explorers_detected);
        expect(amount_of_explorers_detected).toBe(3);
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
        console.log("Lista de explorers sin filtro: ", explorerlist);
        const names_of_explorers_detected = ExplorerController.getExplorersUsernamesByMission(explorerlist, "Node");
        console.log("Nombres de explorers detectados ", names_of_explorers_detected);
        expect(names_of_explorers_detected[0]).toBe("Explorer1_Test");
        expect(names_of_explorers_detected[1]).toBe("Explorer5_Test");
        expect(names_of_explorers_detected[2]).toBe("Explorer6_Test");
    });
})  