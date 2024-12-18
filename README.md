```markdown
# Битва Героїв

## Опис проекту

**"Битва героїв"** — це карткова гра, розроблена на TypeScript, де герої змагаються між собою. Гравці можуть створювати героїв різних типів, проводити бої та відстежувати результати.

## Особливості

### Типи Героїв

- **Воїн (Warrior)**
- **Маг (Mage)**
- **Лучник (Archer)**

### Типи Атак

- **Фізична (Physical)**
- **Магічна (Magical)**
- **Дальня (Ranged)**

### Компоненти Проекту

1. **Типи та Інтерфейси (`models.ts`):**
   - Перерахування `HeroType` та `AttackType`
   - Інтерфейси `HeroStats` та `Hero`
   - Тип `AttackResult`

2. **Функції (`utils.ts`):**
   - `createHero`: Створення нового героя
   - `calculateDamage`: Розрахунок пошкоджень
   - `findHeroByProperty`: Пошук героя за властивістю
   - `battleRound`: Проведення раунду бою між героями

3. **Головний Файл (`main.ts`):**
   - Створення масиву героїв
   - Демонстрація створення героїв різних типів
   - Пошук героїв за різними властивостями
   - Проведення кількох раундів бою між героями
   - Виведення статистики боїв

## Встановлення

1. **Клонування Репозиторію:**

    ```bash
    git clone https://github.com/your-username/BattleOfHeroes.git
    ```

2. **Перехід до Папки Проекту:**

    ```bash
    cd BattleOfHeroes
    ```

3. **Встановлення Залежностей:**

    ```bash
    npm install
    ```

## Компиляція

Переконайтесь, що TypeScript встановлено:

```bash
npm install -g typescript
```

Скомпілюйте TypeScript файли:

```bash
tsc
```

## Запуск

Запустіть скомпільований JavaScript файл:

```bash
node dist/main.js
```

## Приклад Використання

```typescript
// Створюємо героїв 
const warrior = createHero("Дмитро", HeroType.Warrior); 
const mage = createHero("Мерлін", HeroType.Mage);

// Проводимо бій 
const battleResult = battleRound(warrior, mage);
console.log(battleResult);

// Шукаємо героя за типом
const hero = findHeroByProperty(heroes, "type", HeroType.Warrior);
console.log(hero);
```
