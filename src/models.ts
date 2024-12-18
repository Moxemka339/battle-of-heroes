// Enum для типів героїв
export enum HeroType {
    Warrior = "WARRIOR",
    Mage = "MAGE",
    Archer = "ARCHER"
}

// Enum для типів атак
export enum AttackType {
    Physical = "PHYSICAL",
    Magical = "MAGICAL",
    Ranged = "RANGED"
}

// Interface для характеристик героя
export interface HeroStats {
    health: number;
    attack: number;
    defense: number;
    speed: number;
}

// Interface для героя
export interface Hero {
    id: number;
    name: string;
    type: HeroType;
    attackType: AttackType;
    stats: HeroStats;
    isAlive: boolean;
}

// Type для результату атаки
export type AttackResult = {
    damage: number;
    isCritical: boolean;
    remainingHealth: number;
}