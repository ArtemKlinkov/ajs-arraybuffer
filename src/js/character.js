export default class Character {
  constructor(name, attack) {
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.stoned = false;
  }

  set stoned(stoned) {
    this.stonedState = stoned;
  }

  get stoned() {
    return this.stonedState;
  }

  set attack(value) {
    this.attackValue = value;
  }

  get attack() {
    if (this.distance <= 0) {
      throw new Error('Слишком близко. Невозможно атаковать соперника!');
    } else if (this.distance > 5) {
      throw new Error('Слишком далеко. Невозможно атаковать соперника!');
    }

    this.attackValue -= 10 * (this.distance - 1);
    if (this.stoned) {
      this.attackValue -= Math.log2(this.distance) * 5;
    }

    return Math.round(this.attackValue);
  }
}
