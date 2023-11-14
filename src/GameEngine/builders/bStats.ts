import { WorldMemberStats } from "../managers/WorldLoader";
import { Stats } from "../utils/Stats";



export class bStats {


    constructor() {

    }

    fromWorldMemberStats = (worldMemberStats : WorldMemberStats) => {

        let stats = new Stats();
        stats = {
            ...stats,
            ...worldMemberStats,
        }

        return stats;
    }


    build = () => {
        const stats = new Stats();
        

        return stats;
    }

}