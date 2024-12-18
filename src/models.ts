// filepath: src/models.ts
// Enum для типів героїв
enum HeroType {
    Warrior = "WARRIOR",
    Mage = "MAGE",
    Archer = "ARCHER"
}

// Enum для типів атак
enum AttackType {
    Physical = "PHYSICAL",
    Magical = "MAGICAL",
    Ranged = "RANGED"
}

// Інтерфейс для характеристик героя
interface HeroStats {
    health: number;
    attack: number;
    defense: number;
    speed: number;
}

// Інтерфейс для героя
interface Hero {
    id: number;
    name: string;
    type: HeroType;
    attackType: AttackType;
    stats: HeroStats;
    isAlive: boolean;
}

// Тип для результату атаки
type AttackResult = {
    damage: number;
    isCritical: boolean;
    remainingHealth: number;
}

export { HeroType, AttackType, HeroStats, Hero, AttackResult };