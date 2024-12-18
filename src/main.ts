import { HeroType, Hero } from './models';
import { createHero, findHeroByProperty, battleRound } from './utils';

// Створити масив героїв
const heroes: Hero[] = [
    createHero("Дмитро", HeroType.Warrior),
    createHero("Мерлін", HeroType.Mage),
    createHero("Леся", HeroType.Archer)
];

// Демонстрація
// 1. Створення героїв різних типів
console.log("Створені герої:", heroes);

// 2. Пошук героя за типом
const warrior = findHeroByProperty(heroes, "type", HeroType.Warrior);
console.log("Знайдений воїн:", warrior);

// 3. Проведення кількох раундів бою між героями
if (heroes.length >= 2) {
    const battleResult1 = battleRound(heroes[0], heroes[1]);
    console.log(battleResult1);

    const battleResult2 = battleRound(heroes[0], heroes[2]);
    console.log(battleResult2);

    const battleResult3 = battleRound(heroes[1], heroes[2]);
    console.log(battleResult3);
}

// 4. Вивести статистику боїв
heroes.forEach(hero => {
    console.log(`${hero.name} - Здоров'я: ${hero.stats.health}, Живий: ${hero.isAlive}`);
});