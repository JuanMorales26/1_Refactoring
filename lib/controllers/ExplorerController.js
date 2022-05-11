const ExplorerService = require('../../lib/services/ExplorerService')

const FizzbuzzService = require('../../lib/services/FizzbuzzService')

const Reader = require('../../lib/utils/Reader')
 
class ExplorerController{
    static getExplorersByMission(mission){
        const path = "./explorers/explorers.json";
        const explorers = Reader.readJSONFile(path);
        const explorersInMission = ExplorerService.filterByMission(explorers, mission);
        console.log(explorersInMission);
        return explorersInMission;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const path = "./explorers/explorers.json";
        const explorers = Reader.readJSONFile(path);
        const explorersInMissionUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        console.log(explorersInMissionUsernames);
        return explorersInMissionUsernames;
    }

    static getExplorersAmonutByMission(explorers, mission){
        const path = "./explorers/explorers.json";
        const explorers = Reader.readJSONFile(path);
        const explorersAmountInMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        console.log(explorersAmountInMission);
        return explorersAmountInMission;
    }
}

module.exports = ExplorerController