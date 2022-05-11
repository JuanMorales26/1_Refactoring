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

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInMissionUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return explorersInMissionUsernames;
    }

    static getExplorersAmonutByMission(explorers, mission){
        const explorersAmountInMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return explorersAmountInMission;
    }
}

module.exports = ExplorerController