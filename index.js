import inquirer from "inquirer";
console.log("WELCOME TO iADVENTURE GAME");
class Hero {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    increaseHealth() {
        this.health = 100;
    }
}
class Enemy {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    increaseHealth() {
        this.health = 100;
    }
}
async function main() {
    const { HERO } = await inquirer.prompt([
        {
            name: "HERO",
            type: "input",
            message: "Enter your name",
        },
    ]);
    const hero = new Hero(HERO);
    const { ENEMY } = await inquirer.prompt([
        {
            name: "ENEMY",
            type: "list",
            choices: ["swordsman", "knight", "archer"],
            message: "Choose your enemy",
        },
    ]);
    const enemy = new Enemy(ENEMY);
    console.log("Let's fight!");
    console.log(`${hero.name} vs ${enemy.name}`);
    while (true) {
        const { action } = await inquirer.prompt([
            {
                name: "action",
                type: "list",
                choices: ["Attack", "Defend", "Run"],
                message: "What would you like to do?",
            },
        ]);
        switch (action) {
            case "Attack":
                const random = Math.random();
                if (random > 0.5) {
                    hero.decreaseHealth();
                    console.log(`${hero.name} health: ${hero.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                }
                else {
                    enemy.decreaseHealth();
                    console.log(`${hero.name} health: ${hero.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                }
                if (hero.health <= 0) {
                    console.log("You lost");
                    return;
                }
                if (enemy.health <= 0) {
                    console.log("You win");
                    return;
                }
                break;
            case "Defend":
                hero.increaseHealth();
                console.log(`${hero.name} health: ${hero.health}`);
                break;
            case "Run":
                console.log("You ran away!");
                return;
        }
    }
}
main();
console.log("THANKS FOR PLAYING");
