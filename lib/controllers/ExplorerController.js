const ExplorerService = require('../../lib/services/ExplorerService')

const FizzbuzzService = require('../../lib/services/FizzbuzzService')

const Reader = require('../../lib/utils/Reader')
 
class ExplorerController{
    static getExplorersByMission(mission){
        const path = "./explorers/explorers.json";
        const explorers = Reader.readJSONFile(path);
        const explorersInMission = ExplorerService.filterByMission(explorers, mission);
        return explorersInMission;
    }

    static getExplorersUsernamesByMission(mission){
        const path = "./explorers/explorers.json";
        const explorers = Reader.readJSONFile(path);
        const explorersInMissionUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return explorersInMissionUsernames;
    }

    static getExplorersAmonutByMission(mission){
        const path = "./explorers/explorers.json";
        const explorers = Reader.readJSONFile(path);
        const explorersAmountInMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return explorersAmountInMission;
    }
}

module.exports = ExplorerController