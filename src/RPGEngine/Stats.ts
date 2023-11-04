
export class Stats {
    public health : number = 1000;
    public maxHealth : number = 1000;
    public attack : number = 0;
    public armor: number = 0;


    constructor() {

    }

    public calculateDamageTaken = (enemyStats: Stats) => {
        const rawDamageTaken: number = enemyStats.attack - this.armor;

        if(rawDamageTaken < 0) {
            return 0;
        }
        return rawDamageTaken;
    }

    public takeDamage = (enemyStats: Stats) => {
        const damage : number = this.calculateDamageTaken(enemyStats);

        this.health-=damage;
    }

    public calculateHealthPercentage = () => {
        return this.health/this.maxHealth;
    }

};
