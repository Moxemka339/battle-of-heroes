import { Hero, HeroType, AttackType, AttackResult } from './models';

// Функція створення нового героя
export function createHero(name: string, type: HeroType): Hero {
    const baseStats: { [key in HeroType]: HeroStats } = {
        [HeroType.Warrior]: { health: 150, attack: 20, defense: 15, speed: 10 },
        [HeroType.Mage]: { health: 100, attack: 25, defense: 10, speed: 12 },
        [HeroType.Archer]: { health: 120, attack: 18, defense: 12, speed: 15 }
    };

    const attackTypes: { [key in HeroType]: AttackType } = {
        [HeroType.Warrior]: AttackType.Physical,
        [HeroType.Mage]: AttackType.Magical,
        [HeroType.Archer]: AttackType.Ranged
    };

    return {
        id: Date.now(),
        name,
        type,
        attackType: attackTypes[type],
        stats: { ...baseStats[type] },
        isAlive: true
    };
}

// Функція розрахунку пошкодження
export function calculateDamage(attacker: Hero, defender: Hero): AttackResult {
    let damage = attacker.stats.attack - defender.stats.defense;
    damage = damage > 0 ? damage : 0;

    const isCritical = Math.random() < 0.2;
    if (isCritical) {
        damage *= 2;
    }

    const remainingHealth = defender.stats.health - damage;
    defender.stats.health = remainingHealth > 0 ? remainingHealth : 0;
    defender.isAlive = remainingHealth > 0;

    return {
        damage,
        isCritical,
        remainingHealth: defender.stats.health
    };
}

// Generic функція для пошуку героя в масиві
export function findHeroByProperty<T extends keyof Hero>(
    heroes: Hero[],
    property: T,
    value: Hero[T]
): Hero | undefined {
    return heroes.find(hero => hero[property] === value);
}

// Функція проведення раунду бою між героями
export function battleRound(hero1: Hero, hero2: Hero): string {
    if (!hero1.isAlive || !hero2.isAlive) {
        return "Один з героїв не живий.";
    }

    const attacker = hero1.stats.speed >= hero2.stats.speed ? hero1 : hero2;
    const defender = attacker === hero1 ? hero2 : hero1;

    const result = calculateDamage(attacker, defender);
    return `${attacker.name} атакує ${defender.name} і завдає ${result.damage} пошкоджень.${result.isCritical ? " Критичний удар!" : ""} ${defender.name} залишилося ${result.remainingHealth} здоров'я.`;
}

interface HeroStats {
    health: number;
    attack: number;
    defense: number;
    speed: number;
}